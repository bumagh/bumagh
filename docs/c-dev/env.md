# 下载mingw

https://sourceforge.net/projects/mingw-w64/
如上，它有两个版本，sjlj和seh后缀表示异常处理模式，seh 性能较好，但不支持 32位。 sjlj 稳定性好，可支持 32位，推荐下载seh 版本

复制粘贴一份mingw-make.exe，命名为make.exe

# 设置环境变量
## 先备份再设置
```bat
Path > c:/path_bak.txt
setx /M Path "%Path%;C:/env/mingw/bin"
```
## tip
windows + r打开启动
输入cmd 然后按ctrl + enter + shift就可以以管理员运行cmd