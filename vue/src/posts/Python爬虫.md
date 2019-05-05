---
name: Python爬虫
layout: post
title:  "Python爬虫"
info: "Python爬虫"
date:   2019-05-05
categories: WORK
tags: [Python]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---


## 1. 简介

#### 1.识别网站所用技术
```
import builtwith
res = builtwith.parse("http://google.com")
# 返回字典标识各个模块所使用技术
```

#### 2.查看网站所有者

```
import whois
res = whois.whois("baidu.com")
```

#### 3.设置用户代理
```
from fake_useragent import UserAgent
request.headers["User-Agent"] = UserAgent().random
```

#### 4.设置IP代理
- 具备高可用IP代理池可存数据库或.json文件
- 使用代理请求时间会加长，会增加请求失败概率，需增加retry

```
def get_random_proxy():
    with open("./proxy.json") as fd:
        res = fd.readlines()
    proxy = "http://" + random.choice(res).strip()
    return proxy
proxy = get_random_proxy()
request.meta["proxy"] = proxy
```


## 2.数据抓取

#### 1.HTML解析方式
- 正则表达式
- bs4 使用Python编写速度一般
- lxml 使用C语言编写，速度较快

解析方法 | 性能 | 使用难度 | 安装难度
:----|:----|:----|:----
re | 块 | 困难 | 简单(标准库)
bs4 | 慢 | 简单 | 简单( python编写)
lxml | 块 | 简单 | 相对困难



#### 使用selenium加载js动态加载内容
- 入参为需解析的URL链接，返回动态加载后的页面

```
from selenium import webdriver

def get_html(url):
    # 设置不跳出浏览器界面
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--disable-gpu')
    
    # Chrome Driver path
    path =  "./lib/chromedriver"
    driver = webdriver.Chrome(
        options=chrome_options,
        executable_path=path
    )
    driver.get(url)
    html = driver.page_source
    return html
```

- 入参为html字符串，通过正则匹配所需url
```
def get_url(html):
    re_audio = "(<audio[^>]*>.*?</audio>)"
    audio = re.findall(re_audio, html)[0]
    re_url = "(https?://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])"
    url = re.findall(re_url, audio)[0]
    return url
```
- 使用xpath解析数据
```
from lxml import etree

def parse_html(html):
    """入参为HTML字符串，返回评论的用户名称和用户头像"""
    node = etree.HTML(html, etree.HTMLParser())
    res = node.xpath('//li[@class="c-item"]')
    for li in res:
        avatar = li.xpath('.//img/@src')[0]
        uname = li.xpath('.//div[@class="c-user-info"]/a/text()')[0]
        print("%s,%s" % (uname, avatar))

    next_urls = node.xpath('//a[@class="link"]/@href')
    return next_urls
```