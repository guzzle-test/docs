This article outlines how to use Free Form Text and Log Files as a source in Ingestion activity. 

:::note
Text and Log Files are supported only as a Source and not a Target in Guzzle.
:::

## Text and Log File Properties in Guzzle

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
    <td>Required</td>
  </tr>
  <tr>
    <td>Character Set</td>
    <td>It refers to the Set of Characters used to Read/Write test files. Allowed Values include: UTF-8, UTF-16 etc.</td>
    <td>UTF-8</td>
    <td>
        Yes</td>
  </tr>
  <tr>
    <td>File Pattern</td>
    <td>This is the file name pattern to find matching files in the data store. Refer to Working with Multiple Files for more details on defining the patter

Example: 
customer/data/*.log
</td>
    <td>None</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>Parser</td>
    <td>Parsing is the process of splitting data into chunks of information that are easier to manipulate and store. Each log contains multiple pieces of information stored as text, and the goal of parsing is to recognize and group them in a meaningful way

Guzzle provides 3 different ways to Parse the File:
Grok:
This uses standard grok templates that are available.  Guzzle only picks the lines which match the grok pattern and the rest are ignored. 

The syntax for a grok pattern is %{SYNTAX:SEMANTIC}. In other words it is %{Name of Pattern:Column in which you load}.

For example, 3.44 will be matched by the NUMBER pattern and 55.3.244.1 will be matched by the IP pattern. Further, a string 55.3.244.1 might identify the client making a request. For this Example, the Grok Filter would be,
%{NUMBER:duration} %{IP:client}.
    
Regular Expressions:
Grok sits on top of regular expressions, so any regular expressions are valid in grok as well. 

None:
The None Parser will yield all the data as a single field ‘raw’  which can then be transported into the Schema Section. In the Schema Section we can then use the substring(raw) function in the transformation option to extract our Data.


</td>
    <td>None</td>
    <td>
        
        Yes</td>
  </tr>
</table>


An Example of using the Grok Parser in Guzzle can be seen below:

![image alt text](/img/docs/how-to-guides/ingest_data/textandlog.gif)

