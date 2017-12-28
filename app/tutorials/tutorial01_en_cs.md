---
_nav_id: tutorials
uid: tutorial01_csharp
---

# Understand COM Proxy Management

NetOffice manages COM proxies for you to avoid any kind of memory leaks
and makes sure instance of your `Excel.Application` object is cleaned up.
This removes `Excel.exe` from the process list.

```csharp
public void Tutorial01Main()
{
    // start application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    Excel.Workbook book = application.Workbooks.Add();

   /*
    * now we have 2 new COM Proxies created.
    *
    * the first proxy was created while accessing the Workbooks collection from
    * application the second proxy was created by the Add() method from Workbooks
    * and stored now in book with the application object we have 3 created proxies
    * now. the workbooks proxy was created about application and the book proxy was
    * created about the workbooks.
    * NetOffice holds the proxies now in a list as follows:
    *
    * Application
    *   + Workbooks
    *     + Workbook
    *
    * any object in NetOffice implements the IDisposible Interface.
    * use the Dispose() method to release an object. The method releases all created
    * child proxies too.
    */


    // close Excel and release application instance and any child objects
    // (workbooks in this case)
    application.Quit();
    application.Dispose();
}
```

[Tutorial 2: Efficient using Dispose & DisposeChildInstances](tutorial02_en_cs.html)
