---
_nav_id: tutorials
uid: tutorial06_csharp
---

# Understand Variant Type

The datatype Variant is not directly supported by .NET CLR, it is common in
unmanaged COM environments though. NetOffice maps the type to object but you never
have to fear you lose the COM Proxy management functions from NetOffice.

See chapter2 in technical documentation for more information.

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

    // Style is defined as Variant in Excel Type Library and
    // it is represented as object type in NetOffice
    Excel.Style style = (Excel.Style)range.Style;

    // variant types can be scalar types, another way to us is
    if (range.Style is string)
    {
        string myStyle = range.Style as string;
    }
    else if (range.Style is Excel.Style)
    {
        Excel.Style myStyle = (Excel.Style)range.Style;
    }

    // Name, Bold, Size are defined as Variant and also
    // converted to object
    style.Font.Name = "Arial";
    style.Font.Bold = true;
    style.Font.Size = 14;

    application.Quit();
    application.Dispose();
}
```

[Tutorial 7: Invoker](tutorial07_en_cs.html)
