#!/bin/bash


# 这里是每天只需一次, 删除7天前当天的日志

clean_indices(){

 echo ">>> $(date '+%F %T')  开始清理 $1 $2天前日志"

 curl -X DELETE  http://localhost:9200/$1-$(date +%Y.%m.%d -d "-$2 days")
 echo ">>> "
 echo ">>> $(date '+%F %T')  结束清理 $1 $2天前日志"
}

# 清理前65天到前60天索引
#for i in {60..65}
#do
# clean_indices test-index $i
#done

# 清理
# for i in test-index1 test-index2
# do
# clean_indices $i 60
# done
