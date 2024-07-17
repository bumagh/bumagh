# git简介与安装
Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
https://git-scm.com/
# git配置
```jsx
git --version
~$ git config --global user.name "buma"
~$ git config --global user.email "bumaya1024@163.com"
~$ git config --list
user.name=buma
user.email=bumaya1024@163.com
```
# 创建仓库
当着手于一个新的仓库时，你只需创建一次。要么在本地创建，然后推送到 GitHub；要么通过 clone 一个现有仓库。

$ git init

在使用过 git init 命令后，使用以下命令将本地仓库与一个 GitHub 上的空仓库连接起来：

$ git remote add origin [url]

将现有目录转换为一个 Git 仓库

$ git clone [url]

Clone（下载）一个已存在于 GitHub 上的仓库，包括所有的文件、分支和提交(commits)
# gitignore生效
```bash
git rm -r --cached .
git add .
git commit -m "Fixed untracked files"
```
# 克隆仓库
```bash
git clone 
```
# 切换分支
```bash
git checkout 
```
# 新建分支
```bash
git branch
```
# 创建分支并切换
git checkout -b branch_name

# 删除一个已合并的分支
git branch -d branch_name

# 删除一个分支,不管是否已经合并
git branch -D branch_name

# 给当前提交打标签
git tag tag_name

# 合并分支
```bash
git merge fromxxx toxxx
```

# 撤销更改
```bash
git reset --hard
```

# 撤销暂存区(git add 反向)
git restore --staged file

# 查看远程仓库
git remote -v
# 删除远程仓库
git remote rm remote-name
# 重命名远程仓库
git remote rename oldname newname
# git基本操作

- [01：让我们了解版本控制](https://paiza.jp/works/git/primer/beginner-git1/17000)
- [02：让我们创建一个存储库](https://paiza.jp/works/git/primer/beginner-git1/17001)
- [03：让我们添加一个文件到存储库](https://paiza.jp/works/git/primer/beginner-git1/17002)
- [04：让我们再次提交](https://paiza.jp/works/git/primer/beginner-git1/17003)
- [05：检查工作历史](https://paiza.jp/works/git/primer/beginner-git1/17004)
- [06：让我们取消工作历史](https://paiza.jp/works/git/primer/beginner-git1/17005)
- [07：让我们建立一个分支并开始工作](https://paiza.jp/works/git/primer/beginner-git1/17006)
- [08：让我们提交到分支](https://paiza.jp/works/git/primer/beginner-git1/17007)
- [09：让我们合并分支](https://paiza.jp/works/git/primer/beginner-git1/17008)
- [10：让我们解决冲突](https://paiza.jp/works/git/primer/beginner-git1/17009)
- [11：让我们克隆项目](https://paiza.jp/works/git/primer/beginner-git1/17010)
- [12：捕捉项目变化](https://paiza.jp/works/git/primer/beginner-git1/17011)

# 02

