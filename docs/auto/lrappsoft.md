# 懒人精灵教程
## 说明
    当前教程为root模式
## 课1 打开指定app
获取包名 https://www.sisik.eu/apk-tool
* 打开app
```lua
runApp("club.xcgame520.mhsg")
```
## 课2 截取当前屏幕获取是否打开app到指定下一步的界面
- 点击工具->图色工具箱->点击截图
- 鼠标右键找2个识别点，添加到点1和点2
- 在命令面板选择范围，然后鼠标左键选取刚才两个点的范围
- 在命令面板的生成命令选择cmpColorEx
- 点击命令面板最下方颜色查找，测试结果如果ret=1,则成功找到
- 点击复制脚本粘贴到代码区
- 可以将截图保存到文件夹方便以后使用
```lua
runApp("club.xcgame520.mhsg")
if cmpColorEx("722|1295|605C00,725|1317|FAFAF7",0.9) == 1 then
	print("should hotfix")
end

```

## 课3 对刚才截屏获取的状态进行处理
- 前往图色工具箱，刚刚的截图，选择要点击的操作的地方鼠标右键复制坐标
- 编码如下,使用hotfixBtnPos保存刚刚的坐标信息
- 使用tap来点击屏幕指定位置
- 为了增加延迟 加入sleep
```lua
runApp("club.xcgame520.mhsg")
sleep(1000)

local hotfixBtnPos = {x=763,y=1333}

if cmpColorEx("722|1295|605C00,725|1317|FAFAF7",0.9) == 1 then
	print("should hotfix")
    sleep(1000)
    tap(hotfixBtnPos.x,hotfixBtnPos.y)
end
```

## 课4 找图精准判断当前状态
- 图色工具箱截图，保存为notice_page.png
- ctrl + x 裁剪一部分用来找图 保存为notice.png
- 在命令面板 选择找图 然后选择范围 ，查找命令选择findPicEx, 查找图片选择notice.png
- 点击查找测试，复制命令到代码区 
- 回到项目目录，找到资源 sgjm2024.rc， 双击，然后添加文件找到notice.png
```lua
runApp("club.xcgame520.mhsg")
sleep(1000)

local hotfixBtnPos = {x=763,y=1333}

if cmpColorEx("722|1295|605C00,725|1317|FAFAF7",0.9) == 1 then
	print("should hotfix")
    sleep(1000)
    tap(hotfixBtnPos.x,hotfixBtnPos.y)
end

sleep(3000)
local x=-1 y=-1
ret,x,y = findPicEx(387,88,582,193,"02notice.png",0.98)
print(ret,x,y)

local noticeCtnBtnPos = {x=851,y=2160}
tap(noticeCtnBtnPos.x, noticeCtnBtnPos.y)
```