# Technical Documentation

[<< Back](../technical/)

## Unknown and variant types

Any office application use the datatype Variant which has its roots in Visual
Basic for Applications (VBA). This datatype can -at runtime- be any other type,
but it is not supported most of the .NET languages. The datatype Variant is
replaced by the simple basetype object in NetOffice. This does not mean that you
loose some type-safety or COM proxy management. As long as the Variant type is a
COM proxy at runtime, you get the corresponding wrapper class from NetOffice,
otherwise the respective scalar type, e.g. `bool` or `int`. Take a look at the
following code example:

```csharp
// the property Selection from Excel.Application is defined as Variant and in NetOffice as object
// It can have multiple types at runtime what is currently selected, a worksheet, a range, a window or other
if (application.Selection is Excel.Worksheet)
{
    Excel.Worksheet sheet = (Excel.Worksheet)application.Selection;
}
else if (application.selection is Excel.Range)
{
    Excel.Range range = (Excel.Range)application.Selection;
}
else if (!application.selection is COMObject)
{
    // selection is no COM Object means a native scalar type like bool or int
}
```

### Related tutorials

0. [Tutorial06](../../tutorials/tutorial06_en_cs.html)
