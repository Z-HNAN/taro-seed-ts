taro-seed-ts
===

taro seed project use redux

## 快速开始

```bash
# 使用taroCLI进行创建

yarn
yarn start # start命令关联了weapp的dev命令
```

## 分支管理

master：无UI的分支

taro-ui: 整合了`taro-ui`的分支

color-ui: 整合了`color-ui`的分支

```bash
# 不使用UI框架，直接使用master主分支进行开发即可

# 使用taro-ui分支作为主力master分支(保持git工作区干净)
git checkout master
git reset --hard origin/taro-ui

# 使用color-ui分支作为主力master分支(保持git工作区干净)
git checkout master
git reset --hard origin/color-ui
```

