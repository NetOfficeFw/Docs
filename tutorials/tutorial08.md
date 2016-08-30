---
uid: tutorial08_csharp
---

# Check for a specific entity support at runtime

Any object in NetOffice implements a special method too see at runtime a specified property or method is available
This very important because not any property or method is available in any office version

```csharp
bool EntityIsAvailable(string name);
bool EntityIsAvailable(string name, SupportEntityType searchType);
```

This example shows you how to use.

See chapter8 in technical documentation for further info.


```csharp
void Tutorial08Main()
{
   // create new instance
   Excel.Application application = new Excel.Application();

   // check for support at runtime
   bool enableLivePreviewSupport = application.EntityIsAvailable("EnableLivePreview");
   bool openDatabaseSupport = application.Workbooks.EntityIsAvailable("OpenDatabase");

   string result = "Excel Runtime Check: " + Environment.NewLine;
   result += "Support EnableLivePreview: " + enableLivePreviewSupport.ToString() + Environment.NewLine;
   result += "Support OpenDatabase:      " + openDatabaseSupport.ToString() + Environment.NewLine;

   richTextBoxResult.Text = result;

   application.Quit();
   application.Dispose();
}
```
