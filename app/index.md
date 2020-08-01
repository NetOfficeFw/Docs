---
_body_class: "landing-page"
_is_landing_page: true
hero_title: NetOffice Framework
hero_body: "NetOffice is a set of libraries for building Microsoft Office Addins and automation of Microsoft Office applications.<br><br>Use NetOffice to extend and automate Microsoft Office applications: Excel, Word, Outlook, PowerPoint, Access, Project and Visio."
---

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
PM> Install-Package NetOfficeFw.Word -Version 1.7.5</pre>
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
        <li>All features of Microsoft Office versions 2010, 2013 and 2016 are included</li>
        <li>Active support in version independent development</li>
        <li>Syntactically and semantically identical to the Microsoft Interop Assemblies</li>
        <li>No training if you already know the MS Office object model</li>
        <li>More readable code with automatic management of COM proxies</li>
        <li>Usable with .NET version 4.0 or higher</li>
        <li>Easy add-in development</li>
        <li>No deployment hurdles, no registration</li>
        <li>No dependencies, no Interop Assemblies, no need for VSTO</li>
        <li>Visual Studio Project Templates and Wizards available</li>
    </ul>
</div>
</div>
