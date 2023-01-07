---
_body_class: "landing-page"
_is_landing_page: true
hero_title: NetOffice Framework
hero_body: "NetOffice is a set of libraries for building Microsoft Office Addins and automation of Microsoft Office applications.<br><br>Use NetOffice to extend and automate Microsoft Office applications: Excel, Word, Outlook, PowerPoint, Access, Project and Visio."
---

<script setup>
import Home from '@theme/components/Home.vue'
</script>

<Home />

<div class="usa-grid-full usa-section">
<div class="usa-width-one-half">

## Getting Started

Install [**NetOfficeFw** packages](https://www.nuget.org/profiles/netoffice) from NuGet and develop Microsoft Office solutions.

We publish signed and verified packages on [netoffice](https://www.nuget.org/profiles/netoffice) nuget profile.

<div class="code-block">
  <div class="code-block-header">
    <span class="language">Our packages</span>
  </div>
  <div class="code-block-body">

```text
NetOfficeFw.Word
NetOfficeFw.Excel
NetOfficeFw.PowerPoint
NetOfficeFw.Outlook
NetOfficeFw.Access
```

  </div>
</div>

<div class="notice">

#### Migrate from old packages

:::warning Notice
Using packages version 1.7.4.4?
[Learn how to migrate.](./migrate-notice/index.md)

Official NetOffice libraries use new **NetOfficeFw** prefix, are verified and signed.  
Watch out for invalid packages as they contain incorrect assemblies and your projects will not work.

</div>

</div>

<div class="usa-width-one-half">

## Features

 * Microsoft Office integration without version limitations
 * All features of Microsoft Office 2010 up to 2019 and Office 365 are included
 * Active support in version independent development
 * Syntactically and semantically identical to the Microsoft Interop Assemblies
 * No training if you already know the MS Office object model
 * More readable code with automatic management of COM proxies
 * Usable with .NET Framework 4.0 or higher
 * Easy add-in development
 * No deployment hurdles, no registration
 * No dependencies, no Interop Assemblies, no need for VSTO

## Microsoft Office Support

NetOffice supports Microsoft Office releases 2010, 2013, 2016, 2019 and Office 365.

</div>
</div>
