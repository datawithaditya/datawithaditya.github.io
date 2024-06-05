# -*- coding: utf-8 -*-
"""
Created on Tue Nov  7 12:10:40 2023

@author: IT2
"""

# Import Module 
import time
import datetime
import warnings
import os
warnings.filterwarnings("ignore")
 
filename = r"X:\accounts\SPPL 23-24\Marketing\IT\SQL Query\Dashboard\Salstrip\SalesAfterDis.sql"

print("SQL Where Clause: where date >= 'FromDate' and date <= 'ToDate'\n" )
print("Date Formate : YYYY-MM-DD\n")
fromdate = str(input("\nEnter From Date : "))
todate = str(input("\nEnter To Date : "))

TableName = os.path.basename(filename)
TB = TableName.split('.')[0]
f1=open("Log.txt", "a+")
f = open(filename, "r")
select=f.read()
select = select +" where date >='"+ fromdate +"' and date<= '" +todate + "'" 
current_time = datetime.datetime.now()

f1.write("\n\nTask Performed At: "+str(current_time))




### Deleting data in Date range
query = "delete from SalesAfterDis where date >='"+ fromdate +"' and date<= '" +todate + "'" 

query = str(query)
print("\n")
print(query)
f1.write(query)

import pandas as pd
import pyodbc

server_name = 'edp'
#server_name='40.78.192.33'

database_name = 'salesdata'
username = 'sa'
password  = 'sfa'
driver = 'SQL Server'

conn_string = f'DRIVER={driver};SERVER={server_name};DATABASE={database_name};UID={username};PWD={password};Trusted_Connection = False; Encrypt = False;'

conn = pyodbc.connect(conn_string)

cursor = conn.cursor()

cursor.execute(query)

conn.commit()


### Getting the DAta from SQL Server (Salestrip)
times = time.time()
print("\n\nLoading... "+TableName+" \n\n")
f1.write("\n\n    Loading... "+TableName+" \n\n")

server_name = 'salestrip-syn-south.database.windows.net'
#server_name='40.78.192.33'

database_name = 'Salestrip-SYN'
username = 'SynchemSqlRead'
password  = 'Synchem@1379'
driver = 'SQL Server'

conn_string = f'DRIVER={driver};SERVER={server_name};DATABASE={database_name};UID={username};PWD={password};Trusted_Connection = False; Encrypt = False;'

conn = pyodbc.connect(conn_string)

data = pd.read_sql(select, conn)

print("Transfering Data\n\n")
f1.write("Transfering Data\n\n")
time1 = time.time()

# ## SENDING FILE TO SQL SERVER

from sqlalchemy import create_engine
import urllib

connection_string = (
    "Driver={ODBC Driver 17 for SQL Server};"
    #"Driver={Microsoft OLE DB Provider for SQL Server};"
    
    "Server=EDP;"
    "UID=sa;"
    "PWD=sfa;"
    "Database=salesdata;"
)
quoted = urllib.parse.quote_plus(connection_string)
engine = create_engine(f'mssql+pyodbc://?odbc_connect={quoted}')

with engine.connect() as cnn:
    data.to_sql(TB,con=cnn, if_exists='append', index=False)

time2 = time.time()

print("Completed: Table Name " + TB+ " Created\n")
print("\nLoading Time Form SaleSreip to DataFrame is: ",(time1-times))
print("\nTransfering Time of DataFrame to EDP is: ",(time2-time1))
print("\nTime of Execution: ",(time2-times))

f1.write("    Completed: Table Name ''" + TB+ "'' Created\n")
t = time1-times
f1.write("\n    Loading Time Form SaleSreip is: %d" %t)
t1 = time2-time1
f1.write("\n    Transfering Time For Marg is: %d" %t1)
t2 = time2-times
f1.write("\n    Time of Execution: %d"%t2)
f1.write("\n\n**************************************************************")
f1.close()
time.sleep(10)
