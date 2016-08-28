# Using Dispose with event exporting Objects

This tutorial shows how to use `Dipose()` and `DiposeChildInstances()` method
for objects with active event listeners. In case you have an object with exported
events, a `CommandBarButton` for example, and you want dispose them without stoppping
fire events you have to use `Dispose(false)` overload with a parameter.

See chapter1 and chapter4 in technical documentation for further info.

```csharp
private void Tutorial03Main()
{
    // start Excel application
    Excel.Application application = new Excel.Application();
    application.DisplayAlerts = false;

    // create new Workbook & attach close event trigger
    Excel.Workbook book = application.Workbooks.Add();
    book.BeforeCloseEvent += new Excel.Workbook_BeforeCloseEventHandler(book_BeforeCloseEvent);

    /*
     * we dispose the instance. the parameter false signals to api dont release
     * the event listener set parameter to true and the event listener will
     * stopped and you dont get events for the instance the
     * DisposeChildInstances() method has the same method overload
     */
    book.Close();
    book.Dispose(false);

    application.Quit();
    application.Dispose();
}

void book_BeforeCloseEvent(ref bool Cancel)
{
}
```

[Tutorial 4: Observable COM Proxy Count](tutorial04.md)
