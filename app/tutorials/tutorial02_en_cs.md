---
_nav_id: tutorials
uid: tutorial02_csharp
---

# Efficient using Dispose & DisposeChildInstances

In [Tutorial 1](tutorial01_en_cs.html) you have seen how to use Dispose() to release an object
and its created children. This tutorial shows you how to use the method
`DisposeChildInstances()` to release all children with one call.

See chapter1 and chapter5 in technical documentation for further info.

```csharp
public void Tutorial02Main()
{
    // start application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    Excel.Workbook book   = application.Workbooks.Add();
    Excel.Worksheet sheet = (Excel.Worksheet)book.Worksheets.Add();

    /*
     * we have 5 created proxies now in proxy table as follows
     *
     * Application
     *   + Workbooks
     *     + Workbook
     *        + Worksheets
     *            + Worksheet
     */

    // we dispose the child instances of the workbook
    book.DisposeChildInstances();

    /*
     * we have 3 created proxies now, the childs from book are disposed
     *
     * Application
     *   + Workbooks
     *     + Workbook
     */

    // close Excel and release the application instance and child workbooks
    application.Quit();
    application.Dispose();
}
```

[Tutorial 3: Using Dispose with event exporting Objects](tutorial03_en_cs.html)
