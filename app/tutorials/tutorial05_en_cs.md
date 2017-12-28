---
_nav_id: tutorials
uid: tutorial05_csharp
---

# Understanding COMObject

COMObject is the common base type for all objects in NetOffice which are based on
CoClasses or Interfaces and also the type for anonymous COM Proxies at design time.
This example shows you how to use.

See chapter1 and chapter2 in technical documentation for further info.

```csharp
private void Tutorial05Main()
{
    // start application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    // create new Workbook
    Excel.Workbook book = application.Workbooks.Add();

    // ActiveSheet is defined as unkown Proxy in Excel Type Library, it can
    // have multiple types at runtime but its always a COM Proxy, never a
    // scalar type like bool or int. In VBA or PIA it is converted to object,
    // in NetOffice it is represented as COMObject
    // All NetOffice classes inherit from COMObject
    COMObject sheet = application.ActiveSheet;
    if (sheet is Excel.Worksheet)
    {
        Excel.Worksheet activeSheet = (Excel.Worksheet)sheet;
    }

    // 3 basic properties of COMObject
    object proxy          = sheet.UnderlyingObject;
    string proxyClassName = sheet.UnderlyingTypeName;
    bool   isDisposed     = sheet.IsDisposed;

    application.Quit();
    application.Dispose();
}
```

[Tutorial 6: Understand Variant Type](tutorial06_en_cs.html)

