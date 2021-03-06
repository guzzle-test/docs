
Guzzle supports Computing environments on the Azure Cloud. In Guzzle azure cloud setup, we can use databricks to execute our workloads. This article helps in using Azure Databricks as a computing environment in Guzzle.

## Use of Azure Databricks as a computing environment

<table>
  <tr>
    <td>Property </td>
    <td>Description</td>
    <td>Default Value</td>
  </tr>
  <tr>
    <td>Cluster Type</td>
    <td>
    There are 3 types of Databricks clusters available in Guzzle:<br/>
    <b>Data Engineering:</b><br/>
    &nbsp;&nbsp;&nbsp;&nbsp; Data Engineering cluster is recommended for automated workloads. It is recommended to use it for your BAU data loads.<br/>
    <b>Data Analytics:</b> <br/>
      &nbsp;&nbsp;&nbsp;&nbsp; Data Analytics cluster is recommended for interactive queries along with concurrent user support. This cluster type is configurable in Guzzle and it can also execute the workloads, but it is not recommended to use it for your BAU data loads. Data Analytics cluster is costlier than Data Engineering cluster for per DBU usage and meant for interactive queries through Databricks notebook in a shared environment where multiple people have to collaborate as a team.<br/>
    <b>Data Engineering Light:</b> <br/>
      &nbsp;&nbsp;&nbsp;&nbsp; Data Engineering Light cluster is even cheaper than Data Engineering cluster for per DBU usage. Once you select this type, rest all the other configuration for this cluster type would be the same as the Data Engineering cluster. Note that, Data Engineering Light provides a runtime option for jobs that don’t need the advanced performance, reliability, or autoscaling benefits provided by the more capable Databricks Data Engineering cluster offering.
  </td>
    <td>Data Engineering</td>
  </tr>
  <tr>
    <td>API URL</td>
    <td>It is used to specify the URL of the Databricks environment which will be used with Guzzle. We can specify the Azure region accordingly based on the region of the Databricks workspace.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>API Token</td>
    <td>It is used to specify the API Token for our Databricks Environment. API token is required for Guzzle to authenticate to Azure Databricks. API token needs to be generated from the databricks workspace.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>DBFS Guzzle Directory</td>
    <td>It is used to specify the Guzzle mount directory location where guzzle job configs, jars and all bin relies in the Databricks.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Cluster Id (Applicable for Data Analytics cluster)</td>
    <td>It is used to specify the name of the Cluster we have created in the Databricks Environment. A job cluster is created in Databricks with this name.
Guzzle will show available clusters once a valid API key is provided
UI will show cluster name, but it stores cluster id in the underlying yml file</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Configure Retry Options</td>
    <td>basically is the retry which we do if Guzzle is not able to successfully submit the job (possibly due to issues like unavalabilty of cloud resources or error in control plane)</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Spark Version (Only in Data Engineering and Data Engineering Light)</td>
    <td>Specify the Spark Version we have used in creating our cluster in the databricks environment.
These drop downs are populated once valid API keys and URLs are provided. </td>
    <td>None</td>
  </tr>
  <tr>
    <td>Enable Cluster Pool</td>
    <td>Used to specify To attach a cluster to a pool.</td>
    <td>False</td>
  </tr>
  <tr>
    <td>Instance Pool Id</td>
    <td>select the pool from the drop-down when you configure the cluster. Available pools are listed at the top of each drop-down list. You can use the same pool or different pools for the driver node and worker nodes.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Driver Node Type (Only in Data Engineering and Data Engineering Light)</td>
    <td>It is used to specify the type of driver we would like to use as our Driver Node.</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Worker Node Type (Only in Data Engineering and Data Engineering Light)</td>
    <td>Specify the workers we would like to use in our databricks environment</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Enable AutoScaling</td>
    <td>A cluster that automatically scales between the minimum and maximum number of nodes, based on load.</td>
    <td>False</td>
  </tr>
  <tr>
    <td>Customize Spark Config</td>
    <td>Used to specify additional spark config options 
Ex: conf : spark.sql.broadcastTimeout 
       value : 5000 </td>
    <td>None</td>
  </tr>
  <tr>
    <td>Customize Environment Variables</td>
    <td>Used to specify environment variables to use in spark computes
Ex: Variable : GuzzleHome
       Value    : /mnt/guzzle/guzzle</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Init Script</td>
    <td>Cluster-scoped init scripts are init scripts defined in a cluster configuration.
You can put init scripts in a DBFS or ADLS directory accessible by a cluster. And give the location to that script in guzzle spark computes</td>
    <td>None</td>
  </tr>
  <tr>
    <td>Custom Cluster Tags</td>
    <td>You apply tags to your Cluster. Each tag consists of a name and a value pair</td>
    <td>None</td>
  </tr>
</table>


For sensitive spark configuration, one should use Databricks secrets instead of using plain values as they will be visible in the configure. This could be a storage account access key.

## Setup Databricks Workspace

Once you enter all necessary fields, the user has to set up the workspace on databricks through click on setup workspace from the tab bar.


On click of setup workspace guzzle will create a notebook known as setup-guzzle.scala in the Databricks workspace.

In the notebook guzzle programmatically mount shared storage in the databricks environment.

## how to setup external metastore

One can use init script or spark configs. More details of can be found here

A typical set of spark configuration when using Azure SQL server are external meatore are:

    spark.hadoop.javax.jdo.option.ConnectionDriverName 

    com.microsoft.sqlserver.jdbc.SQLServerDriver

    spark.hadoop.javax.jdo.option.ConnectionURL jdbc:sqlserver://<Azure sql server>.database.windows.net:1433;database=<DB NAME>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;

    spark.databricks.delta.preview.enabled true

    spark.hadoop.javax.jdo.option.ConnectionUserName <USERNAME>;

    datanucleus.fixedDatastore false

    spark.hadoop.javax.jdo.option.ConnectionPassword {{secrets/<scope name>/<scret name for password>}}

    spark.sql.sources.partitionOverwriteMode DYNAMIC datanucleus.autoCreateSchema true

    spark.sql.hive.metastore.jars &lt;LOCATION WHERE JARS ARE AVAILABLE. built is not supported. /databricks/hive-v1_2/*?

    spark.sql.hive.metastore.version 1.2.1

