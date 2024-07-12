谢谢博主，实测在4.5.16版本固件上显示隐藏菜单成功，具体步骤,

按照帖子要求先进行分区解锁
echo "US" | dd of=/dev/mtdblock3 bs=1 seek=136
sync
覆盖中文语言选项（可选）
cd /www/i18n
# 备份文件到指定目录
mkdir zh-cn-bak
find ./ -maxdepth 1 -type f -name "*zh-cn.json" -exec cp {} ./zh-cn-bak \;
# 批量改名
ls -1 | grep "zh-cn.json" | awk -F '.zh-cn.json' '{print "mv",$0,$1".zh-cn.json-bak"}' | bash
ls -1 | grep "zh-tw.json" | awk -F '.zh-tw.json' '{print "cp",$0,$1".zh-cn.json"}' | bash

# 恢复方法
find ./ -maxdepth 1 -type f -name "*.zh-cn.json" -exec mv {} /tmp \;
ls -1 | grep "zh-cn.json-bak" | awk -F '.zh-cn.json-bak' '{print "mv",$0,$1".zh-cn.json"}' | bash
重启设备后设置语言为繁体中文（不重置也行，重启后切换繁体就出现隐藏的菜单了）