---
name: MediaInfo
layout: post
title:  "MediaInfo"
info: "MediaInfo"
date:   2019-05-05
categories: WORK
tags: [Linux]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---


## mediainfo
### 说明
- linux&MacOS下查看各种媒体文件元数据工具
### 安装
```
brew install mediainfo
```
### 使用
- 本地文件
```
mediainfo ~/test.pm3
```
- URL文件
```
mediainfo "http://www.520tingshu.com/pic/uploadimg/2018-8/201882715154292539.png"
```

## pymediainfo
### 说明
- python版本的mediainfo三方库
### 使用
- demo
```
from pymediainfo import MediaInfo
res = MediaInfo.parse(url).tracks
for info in res:
    info.to_data() # 以dict格式返回所有数据
```