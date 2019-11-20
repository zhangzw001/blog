#!/bin/bash

update_table(){
table=$1
 echo ">>> ${table}"
 echo "----- $(date "+%F %T") ------start drop table  ${table}------"
 clickhouse-client --query="drop table mydatabase.${table};"
 echo "----- $(date "+%F %T") ------end drop table  ${table}------"
 echo "----- $(date "+%F %T") ------start update table  ${table}------"
 clickhouse-client --query="CREATE TABLE mydatabase.${table} ENGINE = MergeTree ORDER BY id AS SELECT * FROM mysql('xxx', 'mydatabase', ${table}, 'mydatabase', 'xxx');"
 echo "$?" > /data/scripts/status_${table}
 echo "----- $(date "+%F %T") ------end update table  ${table}------"
}

all_tables="table1 table2"
if [ $# = 0 ]
then
 echo "==> 没有传参,更新所有的表"
 for i in $all_tables
 do
      echo "---> 更新表: $i "
  update_table $i
 done
else
 echo "==> 传参 $# 个"
 for i in $@
 do
  [ $(echo  $all_tables|grep -w $i|wc -l) = 0 ] && echo "---> 表$i 不允许更新" && continue;
      echo "---> 更新表: $i "
      update_table $i
 done
fi

