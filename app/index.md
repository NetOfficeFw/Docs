---
_body_class: "landing-page"
_is_landing_page: true
hero_title: NetOffice Framework
hero_body: "NetOffice is a set of libraries for building Microsoft Office Addins and automation of Microsoft Office applications.<br><br>Use NetOffice to extend and automate Microsoft Office applications: Excel, Word, Outlook, PowerPoint, Access, Project and Visio."
---

<div class="usa-grid-full usa-section">
  <div class="usa-width-one-whole">
  [![Nuget](https://img.shields.io/nuget/v/NetOfficeFw.Core?color=black&label=NetOfficeFw.Core&logo=microsoft-office&style=flat-square)](https://www.nuget.org/profiles/netoffice)
  [![NetOfficeFw.Outlook](https://img.shields.io/nuget/v/netofficefw.outlook?color=%230078D4&label=&logo=microsoft-outlook&style=flat-square)](https://www.nuget.org/packages/NetOfficeFw.Outlook/)
  [![NetOfficeFw.Word](https://img.shields.io/nuget/v/netofficefw.word?color=%232B579A&label=&logo=microsoft-word&style=flat-square)](https://www.nuget.org/packages/NetOfficeFw.Word/)
  [![NetOfficeFw.Excel](https://img.shields.io/nuget/v/netofficefw.excel?color=%23217346&label=&logo=microsoft-excel&style=flat-square)](https://www.nuget.org/packages/NetOfficeFw.Excel/)
  [![NetOfficeFw.Powerpoint](https://img.shields.io/nuget/v/netofficefw.powerpoint?color=%23B7472A&label=&logo=microsoft-powerpoint&style=flat-square)](https://www.nuget.org/packages/NetOfficeFw.Powerpoint/)
  [![NetOfficeFw.Access](https://img.shields.io/nuget/v/netofficefw.access?color=%23A4373A&label=&logo=microsoft-access&style=flat-square)](https://www.nuget.org/packages/NetOfficeFw.Access/)
</div>
</div>

<div class="usa-grid-full usa-section">
  <div class="usa-width-one-half">
    

  <h2>Getting Started</h2>

  <p>Look for [**NetOfficeFw** packages](https://www.nuget.org/profiles/netoffice) on NuGet published by [netoffice](https://www.nuget.org/profiles/netoffice).</p>

  <p>Install NetOffice Framework as a NuGet package into your Visual Studio project and develop Microsoft Office solution:</p>
    
  <div class="code-block">
    <div class="code-block-header">
      <span class="language">Package Manager</span>
    </div>
    <div class="code-block-body">
      <pre>PM> Install-Package NetOfficeFw.Word
PM> Install-Package NetOfficeFw.Word -Version 1.8.1</pre>
    </div>
  </div>

<div class="notice">
    **Notice:** Using old _NetOffice.Core_ packages 1.7.4.4?
    [Learn how to migrate.](migrate-notice)<br>
    <br>
    Official NetOffice libraries use new **NetOfficeFw** prefix, are verified and signed.<br>
    Watch out for invalid packages as they contain incorrect assemblies and your projects will not work.
</div>
</div>

<div class="usa-width-one-half">
  <h2 id="features">Features</h2>
  <ul>
    <li>Microsoft Office integration without version limitations</li>
    <li>All features of Microsoft Office 2010 up to 2019 and Office 365 are included</li>
    <li>Active support in version independent development</li>
    <li>Syntactically and semantically identical to the Microsoft Interop Assemblies</li>
    <li>No training if you already know the MS Office object model</li>
    <li>More readable code with automatic management of COM proxies</li>
    <li>Usable with .NET Framework 4.0 or higher</li>
    <li>Easy add-in development</li>
    <li>No deployment hurdles, no registration</li>
    <li>No dependencies, no Interop Assemblies, no need for VSTO</li>
    <!-- <li>Visual Studio Project Templates and Wizards available</li> -->
  </ul>

  <h2 id="supported-msoffice">Supported Microsoft Office</h2>
  <p>NetOffice supports Microsoft Office releases 2010, 2013, 2016, 2019 and Office 365.</p>
</div>
</div>
