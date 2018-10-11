# Technical Documentation

[<< Back](../technical/)

## Version independent programming

Given the fact that NetOffice supports all recent versions of Office, a
mechanism for determining at designtime and runtime which versions support the
functionality in question is needed. Therefore, all entities in NetOffice are
annotated with the SupportByLibrary attribute and XML source documentation. Take
a look at the following code excerpt:

```csharp
///<summary>
/// DispatchInterface _Application SupportByLibrary Excel, 09,10,11,12,14
///</summary>
[SupportByLibrary("Excel", 09,10,11,12,14)]
[EntityTypeAttribute(EntityType.IsDispatchInterface)]
public class _Application : COMObject
{
    /// <summary>
    /// SupportByLibrary Excel 09, 10, 11, 12, 14
    /// </summary>
    [SupportByLibrary("Excel", 09,10,11,12,14)]
    public bool Visible { get; set; }

    /// <summary>
    /// SupportByLibrary Excel 12, 14
    /// </summary>
    [SupportByLibrary("Excel", 12,14)]
    public bool EnableLivePreview { get; set; }

    /// <summary>
    /// SupportByLibrary Excel 14
    /// </summary>
    [SupportByLibrary("Excel", 14)]
    public bool PrintCommunication { get; set; }
}
```

You can see that the class _Application is present in all supported versions,
just like its property Visible. The property EnableLivePreview is only offered
in versions 12 and 14, the property PrintCommunication only in version 14. All
Classes, Properties, Methoden, Enums, Enum Values, etc. are annotated this way.
When you have created an assembly which is using NetOffice, you can check your
assembly with the tool NetOffice.DeveloperToolbox with which Office versions
your assembly is compatible.

Following you can see an Overview of the different version attributes.

|                | Version         | Attribute | Type Library                             |
|----------------|-----------------|-----------|------------------------------------------|
| Office         |                 |           |                                          |
|                | Office 2000     | 09        | Microsoft Office   9.0 Object Library    |
|                | Office 2002     | 10        | Microsoft Office  10.0 Object Library    |
|                | Office 2003     | 11        | Microsoft Office  11.0 Object Library    |
|                | Office 2007     | 12        | Microsoft Office  12.0 Object Library    |
|                | Office 2010     | 14        | Microsoft Office  14.0 Object Library    |
|                |                 |           |                                          |
| Excel          |                 |           |                                          |
|                | Excel 2000      | 09        | Microsoft Excel  9.0 Object Library      |
|                | Excel 2002      | 10        | Microsoft Excel  10.0 Object Library     |
|                | Excel 2003      | 11        | Microsoft Excel  11.0 Object Library     |
|                | Excel 2007      | 12        | Microsoft Excel  12.0 Object Library     |
|                | Excel 2010      | 14        | Microsoft Excel  14.0 Object Library     |
|                |                 |           |                                          |
| Word           |                 |           |                                          |
|                | Word 2000       | 09        | Microsoft Word  9.0 Object Library       |
|                | Word 2002       | 10        | Microsoft Word 10.0 Object Library       |
|                | Word 2003       | 11        | Microsoft Word 11.0 Object Library       |
|                | Word 2007       | 12        | Microsoft Word 12.0 Object Library       |
|                | Word 2010       | 14        | Microsoft Word 14.0 Object Library       |
|                |                 |           |                                          |
| Outlook        |                 |           |                                          |
|                | Outlook 2000    | 09        | Microsoft Outlook  9.0 Object Library    |
|                | Outlook 2002    | 10        | Microsoft Outlook 10.0 Object Library    |
|                | Outlook 2003    | 11        | Microsoft Outlook 11.0 Object Library    |
|                | Outlook 2007    | 12        | Microsoft Outlook 12.0 Object Library    |
|                | Outlook 2010    | 14        | Microsoft Outlook 14.0 Object Library    |
|                |                 |           |                                          |
| PowerPoint     |                 |           |                                          |
|                | PowerPoint 2000 | 09        | Microsoft PowerPoint  9.0 Object Library |
|                | PowerPoint 2002 | 10        | Microsoft PowerPoint 10.0 Object Library |
|                | PowerPoint 2003 | 11        | Microsoft PowerPoint 11.0 Object Library |
|                | PowerPoint 2007 | 12        | Microsoft PowerPoint 12.0 Object Library |
|                | PowerPoint 2010 | 14        | Microsoft PowerPoint 14.0 Object Library |
|                |                 |           |                                          |
| Access         |                 |           |                                          |
|                | Access 2000     | 09        | Microsoft Access  9.0 Object Library     |
|                | Access 2002     | 10        | Microsoft Access 10.0 Object Library     |
|                | Access 2003     | 11        | Microsoft Access 11.0 Object Library     |
|                | Access 2007     | 12        | Microsoft Access 12.0 Object Library     |
|                | Access 2010     | 14        | Microsoft Access 14.0 Object Library     |
| MSFormsApi.dll |                 |           |                                          |
|                | VisioApi.dll    |           |                                          |
|                | OfficeApi.dll   |           |                                          |
|                | VBIDEApi.dll    |           |                                          |
|                | NetOffice.dll   |           |                                          ||
