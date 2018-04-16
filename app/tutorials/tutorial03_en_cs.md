---
_nav_id: tutorials
uid: tutorial03_csharp
---

# Using Dispose With Event Listeners

This tutorial shows how to use `Dipose()` and `DiposeChildInstances()` methods
for objects with active event listeners. In case you have an object with exported
events, a `CommandBarButton` for example, and you want to dispose them without stopping
of firing the events, you have to use `Dispose(false)` overload.

See chapter1 and chapter4 in technical documentation for more information.

```csharp
private void Tutorial03Main()
{
    // start Excel application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    // create new Workbook & attach close event handler
    Excel.Workbook book = application.Workbooks.Add();
    book.BeforeCloseEvent += new Excel.Workbook_BeforeCloseEventHandler(book_BeforeCloseEvent);

    /*
     * We dispose the instance. The argument value false signals to not release
     * the event listener.
     * Set the argument to true and the event listener will be
     * stopped and you won't get any new events for this instance.
     *
     * The DisposeChildInstances() method has the same overload.
     */
    book.Close();
    book.Dispose(false);

    application.Quit();
    application.Dispose();
}

void book_BeforeCloseEvent(ref bool Cancel)
{
}
```

[Tutorial 4: Observable COM Proxy Count](tutorial04_en_cs.html)
