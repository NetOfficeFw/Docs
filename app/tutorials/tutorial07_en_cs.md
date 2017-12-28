---
uid: tutorial07_csharp
---

# Invoker

The static class LateBindingApi.Core.Invoker is the low level interface from
NetOffice to access a COM Server. This example shows you an example how to use it.

See reference chapter4 in technical documentation for further info.

```csharp
private void Tutorial07Main()
{
    // Initialize Api COMObject Support
    LateBindingApi.Core.Factory.Initialize();

    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;
    application.Workbooks.Add();

    Excel.Worksheet sheet = (Excel.Worksheet)application.Workbooks[1].Worksheets[1];
    Excel.Range sampleRange = sheet.Cells[1, 1];

    // we set the COMVariant ColorIndex from Font of ouer sample range
    // with the invoker class
    Invoker.PropertySet(sampleRange.Font, "ColorIndex", 1);

    // creates a native unmanaged ComProxy with the invoker
    object comProxy = Invoker.PropertyGet(application, "Workbooks");
    Marshal.ReleaseComObject(comProxy);

    application.Quit();
    application.Dispose();
}
```

[Tutorial 8: Check for a specific entity support at runtime](tutorial08_en_cs.html)
