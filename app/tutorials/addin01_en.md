---
_nav_id: tutorials
uid: addin01
title: Microsoft Office Add-ins using NetOffice
---

# Microsoft Office Add-ins using NetOffice

You can use the NetOffice library to create .NET Framework applications that extend Office.
These applications are also named in old MSDN documentation as __Office solutions__ or __COM Add-ins for Microsoft Office__.


The create Office application add-in, create a class which extends from the `COMAddin` class
provided by the NetOffice library.

```csharp
using NetOffice.ExcelApi.Tools;

[ComVisible(true)]
[ProgId("ExcelAddinSample.Connect")]
[Guid("CC85F97A-F409-4497-B2F2-A9581D4A2ED2")]
public class ExcelAddin : COMAddin
{

}
```

You project can have multiple add-ins targeting different Microsoft Office applications.
Each add-in class must have its unique **ProgId** and **Guid** values so it can be
properly identified in COM infrastructure. Each add-in class must be visible to COM.

### COMAddin Classes

NetOffice provides `COMAddin` classes for each Microsoft Office application.
You will find the `COMAddin` class in the `Tools` namespace in each NetOffice
library for an Office application.

|  Office Application  |  NetOffice Library   |  COMAddin Class  |
|----------------------|----------------------|------------------|
|  MS Word             |  WordApi.dll         |  NetOffice.WordApi.Tools.COMAddin  |
|  MS Excel            |  ExcelApi.dll        |  NetOffice.ExcelApi.Tools.COMAddin  |
|  MS PowerPoint       |  PowerPointApi.dll   |  NetOffice.PowerPointApi.Tools.COMAddin  |
|  MS Outlook          |  OutlookApi.dll      |  NetOffice.OutlookApi.Tools.COMAddin  |
