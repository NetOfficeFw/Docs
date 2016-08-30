# Technical Documentation

## Performance

The following table lists results of three comparative perfomance tests of
different access methods in .NET to Microsoft Office. All Tests have been made on a
Windows 7 32-bit workstation (2.66GHZ. 3,25GB RAM) with Microsoft Excel 2010. You can
find the source code to all tests online or in the directory `PerformanceTests`.

**Test1:** Iterating over 5.000 cells, writing a test value.

**Test2:** Iterating over 10.000 cells, writing a test value. changing the
font-face, changing the cell format and call of the BorderArround Method,

**Test3:** Iterating over 15.000 cells, writing a test value. changing the
font-face, changing the cell format, changing the WrapText-property and adding a
comment.

All tests have been executed 10x and the average value has been noted in this table.


|                         | Test1            | Test2            | Test3            |
|-------------------------|------------------|------------------|------------------|
| MS Interop Assemblies   | 00:00:02.8820154 | 00:00:25.9789228 | 00:01:28.4552610 |
| VisualBasic LateBinding | 00:00:02.9468967 | 00:00:26.7264004 | 00:01:29.0091273 |
| Dynamics in C#          | 00:00:02.6801315 | 00:00:45.2283897 | 00:02:11.2374746 |
| NetOffice Release 1.2   | 00:00:02.8579749 | 00:00:26.3763757 | 00:01:29.0284321 |

### Remarks

As You can see, all result are very close together. The only exceptions
are Dynamics in Test 2 and Test 3. How can these values be explained? In a
managed environment (.NET) is the access via Latebinding slower than
EarlyBinding, but this difference is not so significant as in an unmanagend
environment. NetOffice and the Latebinding mechanism in Visual Basic level this
slight difference through intelligent caching mechanisms, so that type
information for COM proxies do not need to be requested more than once. This
caching mechansim works type-based and ensures that type-information about a
Range object in Excel is only request at first object access. This information
can then be reused for other Range objects. With C# Dynamics this caching
mechanism works instance-based, this means that when you use a dynamic in a
local scope (e.g. a ForEach-loop) and this scope get destructed at the end of
each single iteration, the dynamic variable is discarded together with its
type-information. Because Test 2 and Test 3 declare and use local dynamic
variables in a ForEach loop, which get discarded after every loop-cycle, we can
see a significant performance penalty because the type-information has to be
refetched in every loop-iteration.

Additional Remarks: For at development time unknown types (e.g. Variants),
additional information has to fetched at runtime in any case, in order to
analyse these types. This procedure is in NetOffice also aided by a caching
mechanism, but this can affect the performance slightly.

