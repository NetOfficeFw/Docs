---
_nav_id: tutorials
uid: tutorial06_csharp
---

# Understand Variant Type

The datatype Variant is not plain supported by .NET CLR but common in an
unmanaged COM Environment. NetOffice mapped the type to object but you never
have to fear you lost the COM Proxy management from NetOffice.

See chapter2 in technical documentation for further info.

```csharp
private void Tutorial06Main()
{
    // start application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    // create new Workbook
    Excel.Workbook book = application.Workbooks.Add();
    Excel.Worksheet sheet = (Excel.Worksheet)book.Worksheets[1];
    Excel.Range range = sheet.Cells[1,1];

    // Style is defined as Variant in Excel Type Library and represents
    // as object in NetOffice
    Excel.Style style = (Excel.Style)range.Style;

    // variant types can be a scalar type, another way to us is
    if (range.Style is string)
    {
        string myStyle = range.Style as string;
    }
    else if (range.Style is Excel.Style)
    {
        Excel.Style myStyle = (Excel.Style)range.Style;
    }

    // Name, Bold, Size are bool but defined as Variant and also
    // converted to object
    style.Font.Name = "Arial";
    style.Font.Bold = true;
    style.Font.Size = 14;

    application.Quit();
    application.Dispose();
}
```

[Tutorial 7: Invoker](tutorial07_en_cs.html)
