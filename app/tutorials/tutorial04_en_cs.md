---
_nav_id: tutorials
uid: tutorial04_csharp
---

# Observable COM Proxy Count

Sometimes it is very useful to know the count of open COM Proxy objects in your application.
NetOffice offers you a static property and event handler for this.

```csharp
int LateBindingApi.Core.Factory.ProxyCount;
event LateBindingApi.Core.Factory.ProxyCountChanged;
```

```csharp
public class Tutorial4
{
    Excel.Application _application;

    public Form1()
    {
        InitializeComponent();

        // Initialize Api COMObject Support
        LateBindingApi.Core.Factory.Initialize();

        LateBindingApi.Core.Factory.ProxyCountChanged += new Factory.ProxyCountChangedHandler(Factory_ProxyCountChanged);
    }

    void Factory_ProxyCountChanged(int proxyCount)
    {
        if (labelProxyCount.InvokeRequired)
        {
            labelProxyCount.Tag = proxyCount.ToString();
            labelProxyCount.Invoke(new MethodInvoker(UpdateLabel));
        }
        else
        {
            labelProxyCount.Text = proxyCount.ToString();
        }
    }

    private void buttonExcel_Click(object sender, EventArgs e)
    {
        if (null == _application)
        {
            // start application
            _application = new Excel.Application();
            _application.DisplayAlerts = false;
            buttonExcel.Text = "Quit Excel";
            buttonWorkbook.Enabled = true;
            buttonAddins.Enabled = true;
            buttonAddRemoveWorkbook.Enabled = true;
        }
        else
        {
            // close application
            _application.Quit();
            _application.Dispose();
            _application = null;
            buttonExcel.Text = "Start Excel";
            buttonWorkbook.Enabled = false;
            buttonAddins.Enabled = false;
            buttonAddRemoveWorkbook.Enabled = false;
        }
    }

    private void buttonWorkbook_Click(object sender, EventArgs e)
    {
        // 2 new proxies, the workbooks proxy(implicit) and the new workbook from Add()
        if (null != _application)
        {
            _application.Workbooks.Add();
        }
    }

    private void buttonAddins_Click(object sender, EventArgs e)
    {
        if (null != _application)
        {
            // 1 new enumerator proxy and 1 new proxy for any Addin
            foreach (Excel.AddIn item in _application.AddIns)
            {
                Console.WriteLine(item.Name);
            }
        }
    }

    private void buttonAddRemoveWorkbook_Click(object sender, EventArgs e)
    {
        // add a new workbook and a new worksheet to the workbook
        // the worksheet is a child proxy from workbook, after dispose the workbook
        // creates 4 new proxies
        // the open proxy count is the same as before

        int proxyCount = LateBindingApi.Core.Factory.ProxyCount;

        Excel.Workbook book = _application.Workbooks.Add();
        book.Worksheets.Add();

        int proxyCountAfterCreate = LateBindingApi.Core.Factory.ProxyCount;

        // dispose all child instances from application
        _application.DisposeChildInstances();

        int proxyCountAfterDispose = LateBindingApi.Core.Factory.ProxyCount;

        string message = string.Format("Method creates a new Workbook with 1 new Worksheet\r\n" +
                                            "ProxyCount before create is {0}\r\n" +
                                            "ProxyCount after create is {1}\r\n" +
                                            "ProxyCount after dispose Workbook is {2}", proxyCount, proxyCountAfterCreate, proxyCountAfterDispose);

        MessageBox.Show(message, this.Text, MessageBoxButtons.OK, MessageBoxIcon.Information);
    }

    private void UpdateLabel()
    {
        labelProxyCount.Text = labelProxyCount.Tag as string;
    }
}
```

[Tutorial 5: Understanding COMObject](tutorial05_en_cs.html)
