---
_nav_id: tutorials
uid: tutorial02_csharp
---

# Efficiently Disposing COM Proxies

In [Tutorial 1](tutorial01_en_cs.html) you have seen how to use `Dispose()` method to release an object
and its child objects.

This tutorial shows you how to use the `DisposeChildInstances()` method to release all child objects with one call.

See chapter1 and chapter5 in technical documentation for more information.

```csharp
public void Tutorial02Main()
{
    // start application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    Excel.Workbook book   = application.Workbooks.Add();
    Excel.Worksheet sheet = (Excel.Worksheet)book.Worksheets.Add();

    /*
     * We have created 5 proxy objects.
     * Proxy table looks as follows:
     *
     * Application
     *   + Workbooks
     *     + Workbook
     *        + Worksheets
     *            + Worksheet
     */

    // We dispose the child instances of the workbook
    book.DisposeChildInstances();

    /*
     * We have 3 proxy objects now.
     * Children objects of book instance were disposed.
     *
     * Application
     *   + Workbooks
     *     + Workbook
     */

    // close Excel, release the application instance and child workbooks
    application.Quit();
    application.Dispose();
}
```

[Tutorial 3: Using Dispose with event exporting Objects](tutorial03_en_cs.html)
