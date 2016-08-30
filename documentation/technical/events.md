# Technical Documentation

## Events in NetOffice

NetOffice offers you a completely version-independent event support. In order to
prevent naming conflict, every event name in NetOffice has `Event` appended.

Objects which export events implement a COM Event Interface. This Event
Interface is connected at runtime to the object. In NetOffice this happends on
demand during the first subscription to a event.

If you want to free object, for which you have events subscribed, you should not
use `Dispose()` but `Dispose(bool disposeEventBinding)` resp.
`DisposeChildInstances(bool disposeEventBinding)` and pass in `false` as parameter
to preserve the created `EventBridge` so events can still be retrieved.

If there are COM objects passed as parameter in the event procedures, you should
free these COM objects at the end of the event procedure with `Dipose()` to keep
the number of created COM proxies low. Otherwise, these COM proxies will stay
around as Child Proxies of the event exporting Objects in the COM Proxy Table of
NetOffice.

### Related Tutorials

0. [Tutorial03](xref:tutorial03_csharp)
