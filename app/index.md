---
_body_class: "landing-page"
_is_landing_page: true
hero_title: NetOffice Framework
hero_body: "NetOffice Framework is a set of libraries and tools for building addins, extending and automating Microsoft Office applications.<br><br>NetOffice supports extending and automating Microsoft Office applications: Excel, Word, Outlook, PowerPoint, Access, Project and Visio."
---

## Getting Started

Install NetOffice Framework as a NuGet package ([list of all NetOfficeFw packages](https://www.nuget.org/profiles/netoffice))
into you Visual Studio project and develop Microsoft Office solution.

```
PM> Install-Package NetOfficeFw.Word
```

<blockquote class="notice">
**Notice:** Do not use the rogue release of NetOffice.Core package 1.7.4.4.
[How to migrate?](migrate-notice)<br>
<br>
Official NetOffice libraries use new **NetOfficeFw** prefix and are published by official NuGet account named [netoffice](https://www.nuget.org/profiles/netoffice).
</blockquote>

## Features

* Microsoft Office integration without version limitations
* All features of Microsoft Office versions 2000, 2002, 2003, 2007, 2010, 2013 and 2016 are included
* Active support in version independent development
* Syntactically and semantically identical to the Microsoft Interop Assemblies
* No training if you already know the MS Office object model, use your existing PIA code
* Reduced and more readable code with automatic management of COM proxies
* Usable with .NET version 2.0 or higher
* Easy add-in development
* No deployment hurdles, no registration
* No dependencies, no Interop Assemblies, no need for VSTO
* Visual Studio Project Templates and Wizards available
