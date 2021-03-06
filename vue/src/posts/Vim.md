---
name: Vim
layout: post
title:  "Vim"
info: "Vim"
date:   2019-05-05
categories: WORK
tags: [Vim]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---


## 01. VIM

### 1. vim 配置
1. vim ~/.vimrc 将如下配置粘贴保存
2. source ~/.vimrc 
```
set number               "显示行号"
set ruler                "显示标尺"
set cursorline           "水平行高亮"
set cursorcolumn         "垂直行高亮" 
set showmatch            "显示匹配行号"
set softtabstop=4        "每次退格删除4个空格"
set shiftwidth=4         "自动缩进"
set hlsearch             "高亮显示搜索字符串"
set autoread             "文件被改动时自动载入"
set autoindent           "自动对齐"
set encoding=utf-8       "设置编码"
set history=100          "历史记录数"
set incsearch            "搜索模式下跟着输入持续搜索" 
set ignorecase           "搜索模式忽略大小写" 
set scrolloff=10         "垂直滚动时光标距离底部或顶部行数"  
set t_Co=256             "设置256色"                                         
```
### 2. 基本操作

#### 1.插入
命令 | 功能
:----|:----
i |在光标之前插
a |在光标之后追加
o |在当前行下一行打开新行插入
A |在当前行尾追加
I |在当前行首插入
O |在当前行上一行打开新行插入
C |删除该行光标后的所有单词并进入插入模式
cw|删除光标下的单词并进入插入模式

#### 2.退出 | 保存
命令 | 功能
:----|:----
:wq |保存并退出
:q! |不保存强制退出
:x  |同 :wq
ZZ  |保存退出
ZQ  |不保存退出

#### 3.删除 | 剪切 | 复制 | 粘贴 | 撤销
命令 | 功能
:----|:----
x     |删除光标所在处字符
dw    |剪切光标所单词
d$    |剪切光标所在位置至行位所有内容
dd    |剪切光标所在行
ndd   |剪切光标所在一下n行
p     |在光标所在行下方粘贴
P     |在光标所在行上方粘贴
yy    |复制光标所在行
nyy   |复制光标所在行一下n行
yw    |复制光标所在位置的单词，包括空格
ye    |剪切光标所在位置的单词，不包括空格
u     | undo
Ctrl + r | redo

#### 4.查找
命令 | 功能
:----|:----
/ | 向下查找
? | 向上查找
n | 下一个匹配
N | 上一个匹配

#### 5.跳转
命令 | 功能
:----|:----
:num | 跳转到num行
G    | 跳转到最后一行
gg   | 跳转到第一行
0    | 跳转到行首
%    | 跳转到行尾

#### 6. 多行模式
##### 1. 进入多行模式  ctrl + v  
##### 2. 多行注释 
    1. 选择多行 
    2. shift + i 输入#  
    3. 然后esc 退出
##### 3. 多行剪切 
    1. 选择内容 x 
    2. 移动到想要粘贴的列 p
    3. 需要执行删除则不需要p
##### 4. 多行替换 
    1. 选择多行 r 
    2. 输入想要替换字符
    3. 然后 esc

#### 7. 替换
命令 | 功能
:----|:----
:s/old/new | 替换第一个匹配old为new
:s/old/new/g | 替换所有匹配old为new
