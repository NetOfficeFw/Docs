# Technical Documentation

## COM Proxy Management

If you have already work with Primary Interop Assemblies by Microsoft, you know
that Office is based on a COM-architecture. That means that you retrieve COM
proxy objects in your application. It is your responsibilty to free them again.
Take a look at the following code example:

```csharp
// exemplary workflow for creating a new Workbook with MS-Excel and
// iterating over its Worksheets with the Microsoft Interop Assemblies

using Office = Microsoft.Office.Core;
using Excel = Microsoft.Office.Interop.Excel;

Excel.Application application = new Microsoft.Office.Interop.Excel.Application();
Excel.Workbooks books = application.Workbooks;
Excel.Workbook book = books.Add(Missing.Value);
Excel.Worksheets sheets = (Excel.Worksheets)book.Worksheets;

foreach (Excel.Worksheet sheet in sheets)
{
    Console.WriteLine(sheet.Name);
    Marshal.ReleaseComObject(sheet);
}

Marshal.ReleaseComObject(sheets);
Marshal.ReleaseComObject(book);
Marshal.ReleaseComObject(books);

application.Quit();
Marshal.ReleaseComObject(application);
```

As you probably know, you have to free every COM proxy object with the
Marshal.ReleaseComObject function. You are notifying the COM Server that you do
not need the object anymore. If you do not do that, the  COM server has to keep
the object in memory, even if you closed the application long ago. You would
have created a memory leak and and the instance you created would still be
visible as active process in the Windows Task Manager. Due to this behaviour, it
is necessary to save every object explicitly and free it after usage. As you can
see in the above code example, we save the worksheets enumerator of book
exlicitly in a local variable. A common but wrong way of doint thing is the
usage without prior explicit storing in variable. Take a look at the following
code example:

```csharp
// exemplary wrong workflow in dealing with the Mirosoft Interop Assemblies
foreach (Excel.Worksheet sheet in book.Worksheets)
{
    Console.WriteLine(sheet.Name);
    Marshal.ReleaseComObject(sheet);
}
```

By directly using the worksheets enumerator you do not have the chance of
calling ReleaseComObject later on. Therefore, the COM Server keeps the
enumerator in memory and is waiting (in vain) for notification to free it. You
should never use COM proxies while dealing with Primary Interop Assemblies
without storing them to a variable explicitly! Of course, this has the following
drawbacks:

you always have to remember to free your objects, which is untypical for a
managed environment your code gets bloated and unreadable by all the explicit
storing and freeing of COM proxy objects In NetOffice you do not have to free
such objects explictly, you may use them implicitly. Take a look at the
following code example:

```csharp
// exemplary workflow for creating a new Workbook with MS-Excel and
// iterating over its Worksheets with NetOffice

using Office = NetOffice.OfficeApi;
using Excel = NetOffice.ExcelApi;

Excel.Application application = new Excel.Application();
Excel.Workbook book = application.Workbooks.Add();

foreach (Excel.Worksheet sheet in book.Worksheets)
{
    Console.WriteLine(sheet.Name);
}

book.Dispose();

application.Quit();
application.Dispose();
```

As you can see, the code is identical to the MS Interop Assembly example, but a
lot slimmer by directly using properties and omitted freeing-calls. NetOffice
store all created COM Proxies in a COM proxy table including the information
through which object a proxy was created. In our example we get the following
proxy tree:

```txt
- application
    - Workbooks
        - book
            - Worksheets
                - sheet
                - sheet
                - sheet
```

By calling `book.Dispose();` book and all other elements created through it will
be freed. In this example these are Worksheet and the 3 Worksheet references. By
calling  `application.Dispose();` you free the remaining 2 COM Proxies.

### Related Tutorials

0. [Tutorial01](xref:tutorial01_csharp)
0. [Tutorial02](xref:tutorial02_csharp)
0. [Tutorial03](xref:tutorial03_csharp)
