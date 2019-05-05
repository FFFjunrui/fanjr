---
name: Tmux
layout: post
title:  "Tmux"
info: "Tmux"
date:   2019-05-05
categories: WORK
tags: [Tmux]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---


## 1. 命令行

命令 | 功能
:----|:----
tmux [new -s 会话名 ] | 创建tmux
tmux ls | 列出所有创建回话
tmux a -t name | 进入name会话
tmux kill-session -t name | 关闭会话


## 2. 会话中

命令 | 功能
:----|:----
Ctrl + b + c | 创建窗口
Ctrl + b + n | 进入下一个窗口
Ctrl + b + p | 进入前一个窗口
Ctrl + b + , | 修改窗口名称
Ctrl + b + & | 关闭当前窗口
Ctrl + b + d | 退出当前会话
Ctrl + b + t | 显示当前时间

## 3. 窗口中
命令 | 功能
:----|:----
Ctrl + b + % | 垂直分屏
Ctrl + b + " | 水平分屏
Ctrl + b + x | 关闭当前分屏
Ctrl + b + z | 最大化当前分屏/恢复
ctrl + b + alt + 方向键 | 以五个单位移动
```