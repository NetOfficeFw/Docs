---
title: Frequently Asked Questions (FAQ)
---

## Frequently Asked Questions (FAQ)

### My programming language does not support properties with parameters?

NetOffice change all parametrized properties to methods. Use parametrized
properties just in the same way as before with the Interop Assemblies or VBA.
C# developers doesn't have to use the ugly `get_` or `set_` overloads in NetOffice.
The `get_` and `set_` overloads exists in NetOffice too but hidden in
Intellisense as compatibility workarround to make it easier moving an interop
assembly solution to NetOffice.


### My programming language does not support optional parameters?

NetOffice doesnt use optional parameters and goes a different way with
additional overloads depending on the count of optional parameters. As example
for a property with 2 optional parameters NetOffice spend 3 overloads for the
property.


### Do I have access to the native COM Proxies?

Yes, every object implements the property `UnderlyingObject`. Be carefull here!


### I work with Office versions in different languages on different systems. How can I change the `ThreadCulture`?

Change the culture at your will: `NetOffice.Settings.ThreadCulture` The default is "en-us".
