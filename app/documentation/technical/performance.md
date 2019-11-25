# Technical Documentation

[<< Back](../technical/)

## Performance

The following table lists results of three comparative perfomance tests of
different access methods in .NET to Microsoft Office. All tests have been made on a
Windows 7 64-bit workstation (Intel i5-6200U @ 2.30GHz, 16GB RAM) with Microsoft Excel 2013 (32-bit).
You can find the source code to all tests in the [NetOffice repository](https://github.com/NetOfficeFw/NetOffice/tree/develop/Tests/Performance%20Tests).

**Test1:** Iterating over 5.000 cells, writing a test value.

**Test2:** Iterating over 10.000 cells, writing a test value, changing the
font-face, changing the cell format and call of the `BorderArround()` method.

**Test3:** Iterating over 15.000 cells, writing a test value, changing the
font-face, changing the cell format, changing the `WrapText` property and adding a
comment.

All tests have been executed 10x and the average value has been noted in this table.

|                         | Test1            | Test2            | Test3            |
|-------------------------|------------------|------------------|------------------|
| MS Interop Assemblies   | 00:00:05.0154000 | 00:00:34.1967602 | 00:01:39.3174006 |
| VisualBasic LateBinding | 00:00:05.7564000 | 00:00:38.4586802 | 00:01:45.4887607 |
| Dynamics in C#          | 00:00:05.1460800 | 00:00:51.1430403 | 00:02:15.1067208 |
| NetOffice v1.7.3        | 00:00:05.1667200 | 00:00:36.7926002 | 00:01:42.6464406 |


## Remarks

All results are very close together when working with small number of calls
to Microsoft Office API.

In managed environment (.NET) the Latebinding access is slower than EarlyBinding,
but this difference is not so significant as in an unmanaged environment.
NetOffice and the Latebinding calling conventions in Visual Basic use caching
mechanisms, so the type information for COM proxy objects do not need to be
requested more than once. This caching mechanism works type-based and ensures
that type-information about a `Range` object in MS Excel is only request at
first object access. This information can then be reused for all other `Range`
objects used later on.

## Dynamics Performance

Using _Dynamics_ to access Microsoft Office API is very easy. On the other hand,
it provides the least optimal way of calling COM interfaces.

Dynamic objects in C# will retain type information only for the actual
instance of an object, so .NET must fetch type information each time
a new object call COM interface.

When you use a dynamic in a local scope (e.g. a loop) and this scope get destructed
at the end of each single iteration, the dynamic object is discarded together
with its type information. This makes the **Test2** and **Test3** really slow and they
will use much more memory.
In these tests, dynamics use local variables in a `foreach` loop, which are discarded
after every loop-cycle. This causes significant performance penalty because the
type information has to be refetched in every loop-iteration.

**Note:** For types unknown at development time (e.g. _Variants_),
additional type information has to fetched at runtime.
NetOffice will cache this information to improve the performance slightly.
