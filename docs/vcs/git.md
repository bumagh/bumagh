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

# 合并分支
```bash
git merge fromxxx toxxx
```

# 撤销更改
```bash
git reset --hard
```


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

```jsx
git --version
~$ git config --global user.name "buma"
~$ git config --global user.email "bumaya1024@163.com"
~$ git config --list
user.name=buma
user.email=bumaya1024@163.com
```