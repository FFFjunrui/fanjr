---
name: Linux命令
layout: post
title:  "Linux命令"
info: "Linux命令"
date:   2019-05-05
categories: WORK
tags: [Linux,Shell]
coverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"
---

## 常见Linux目录
目录 | 用途
:----|:----
/      | 虚拟目录的根目录，通常不会储存文件
/bin   | 二进制目录，存放用户级的GNU工具
/boot  | 启动目录，存放启动文件
/dev   | 设备目录，Linux在这里创建设备节点
/etc   | 系统配置文件目录
/home  | 用户主目录，Linux在这里创建用户目录
/lib   | 库目录，存放系统和应用程序的库文件
/media | 媒体目录，可移动设备常用挂载点
/mnt   | 挂载目录，另一个可移动媒体设备的常用挂载点
/opt   | 可选目录，常用于存放第三方软件包和数据文件
/proc  | 进程目录，存放现有硬件和进程映射文件
/root  | root用户主目录
/sbin  | 系统二进制目录，存放GNU管理员级工具
/run   | 运行目录，存放系统运行时的运行时数据
/srv   | 服务目录，存放本地服务的相关文件
/sys   | 系统目录，存放系统硬件信息的相关文件
/tmp   | 临时目录，可在该目录中创建删除临时工作文件
/usr   | 用户二进制目录，存放用户级别第三方GNU工具和数据文件
/var   | 可变目录，存放经常变化的目录，比如日志

## 01. 自定义bash命令
1. vim ~/.bash_profile
2. alias ll='ls -alFh'
3. alias watch='while :; do clear; ls; sleep 2; done'
4. source ~/.bash_profire

## 02. 网络类
#### 1. ifconfig
命令 | 功能
:----|:----
ifconfig eth0 | Linux下标准输出第一个网络适配器详细信息
ifconfig en0 | MacOS下标准输出第一个网络适配器详细信息
ifconfig | 标准输出所有接口详细信息

#### 2. netstat
命令 | 功能
:----|:----
netstat -nap | grep 8554 | 查看8554端口占用情况

#### 3. ss(linxu)
命令 | 功能
:----|:----
ss -lp \| grep 3306  | 查看监听端口
ss -ntl \| grep 3306 | 查看监听端口

#### 4. curl 
命令 | 功能
:----|:----
curl -d '{"name":"join"}' -H 'Content-Type: application/json' -X POST http://www.qq.com | 设置请求头参数格式为json，参数json,向qq.com发送post请求
curl -u username:pwd http://www.qq.com | 使用用户名密码鉴权请求URL

#### 5. wget
命令 | 功能
:----|:----
wget http://man.linuxde.net/wget | 下载该链接已链接最后一部分为文件名
wget -O fanjr http://man.linuxde.net/wget | 下载该链接fanjr为文件名
#### 6. ping
命令 | 功能
:----|:----
ping qq.com | 测试网络连通性，及网络延迟

#### 7. ssh 
命令 | 功能
:----|:----
ssh username@remote_host -p 443 | 使用用户名ip,port登录远程服务器
ssh -i path/to/key_file username@remote_host -p 443 | 使用秘钥登录远程服务器
ssh -o ServerAliveInterval=30 username@remote_host | 设置ssh连接不自动断开

#### 8. scp
命令 | 功能
:----|:----
scp local_file remote_host:remote_file | 本地文件scp到远程服务器路径
scp remote_host:remote_file local_dir | 远程服务器文件scp到本地目录
scp remote_host:remote_dir local_dir | 递归scp远程服务器文件夹内文件到本地目录
scp -i ~/.ssh/_key.pem remote_host:remote_file local_dir | 使用私钥鉴权并scp

## 03. 性能
#### 1. top(mac)
命令 | 功能
:----|:----
top -o cpu | 以CPU使用率排序
top -o mem | 以内存使用率排序
top -o cpu -O time | 优先以CPU使用率，其次以运行时间排序

#### 2. iostat(linux)
命令 | 功能
:----|:----
iostat | 监控系统输入输入和CPU使用情况

#### 3. vm_stat(mac)
命令 | 功能
:----|:----
vm_stat | 标准输出内存,高速缓存，交换分区使用情况

#### 4. uptime
命令 | 功能
:----|:----
uptime | 标准输出开机时间，用户数，负载情况

#### 5. free(linux)
命令 | 功能
:----|:----
free -m | 以M为单位标准输出内存交换分区使用情况 
free -g | 以G为单位标准输出内存交换分区使用情况 

#### 6. pidof
命令 | 功能
:----|:----
pidof sshd | 返回sshd的pid

#### 7. lsof
命令 | 功能
:----|:----
lsof | 标准输出打开的文件的进程，端口

## 04. 磁盘
命令 | 功能
:----|:----
du -sh | 标准输出当前目录下占用磁盘大小
du -s | 标准输出当前文件夹所占用磁盘块数
df -h  | 标准输出磁盘大小使用情况
df -i  | 标准输出磁盘inode使用情况
mount -t type device dir | 将设备挂载到dir下，格式化类型为type
umount device | 卸载设备，使用设备文件，当有任何进程访问该设备文件则不允许卸载
unount dir | 卸载设备，使用挂载点。当有任何进程访问该设备文件则不允许卸载


## 05. 定时
#### 1. crontab
命令 | 功能
:----|:----
crontab -e | 编辑当前用户crontab文件
crontab -l | 列出当前用户所有定时任务
5/* * * * * path/to/script.sh | 每5分钟执行脚本
0 10 * * * path/to/script.sh | 每日10:00执行脚本
0 10,18 * * * path/to/script.sh | 每日10:00, 18:00执行脚本

#### 2. watch(linux)
命令 | 功能
:----|:----
watch ls | 每两秒输出当前目录所有文件
watch -n 60 ls | 每60秒输出当前目录所有文件

## 06. 打包 | 压缩
#### 1. .tar 打包
命令 | 功能
:----|:----
tar xzf FileName.tar  | 解包 
tar czf FileName.tar DirName | 打包

#### 2. .gz
命令 | 功能
:----|:----
gunzip FileName.gz | 解压
gzip -d FileName.gz | 解压
gzip FileName | 压缩 
tar zxvf FileName.tar.gz | 解压
tar zcvf FileName.tar.gz DirName | 压缩

#### 3. .zip
命令 | 功能
:----|:----
unzip FileName.zip | 解压
zip FileName.zip DirName | 压缩

#### 4. .rar
命令 | 功能
:----|:----
rar x FileName.rar | 解压
rar a FileName.rar DirName | 压缩

## 07. 文件操作
#### 1. find
命令 | 功能
:----|:----
find /home -name '*.ext' | 指定目录下查找对应文件名
find /home -type d -name '*lib*' | 指定目录下查找类型为文件的执行文件名
find /home -mtime -1 | 指定目录下查找24小时内更改过的文件
find /home -size +500k -size -10M | 指定目录查找指定区间大小的文件 

#### 2. ln
- 硬链接特点
1. 文件具有相同的inode和数据块
2. 只能对已存在的文件创建硬链接
3. 不可跨越文件系统
4. 不能对目录创建，只可对文件创建硬链接
5. 删除一个硬链接文件不影响其他具有相同inode的文件
- 软链接特点
1. 软链接不共享inode有自己的文件属性及权限
2. 可对不存在的文件或目录创建软链接
3. 可跨越文件系统创建软链接
4. 可对文件或者目录创建软链接
5. 创建软连接时，链接计数i_nlink不会增加
6. 删除软链接不影响指向文件，删除源文件则相关软链接为死链接

命令 | 功能
:----|:----
ln -s path/to/file path/to/symlink | 创建文件的符号链接，即软链接
ln -sf path/to/file path/to/symlink | 覆盖已经存在的软链接
ln path/to/file path/to/hardlink | 创建文件的硬链接

#### 3. mv
 命令 | 功能
:----|:----
mv source target | 移动文件或者重命名文件

#### 4. touch
 命令 | 功能
:----|:----
touch filename | 文件不存在则创建一个新文件，存在则更新文件的更新时间

#### 5. ls
 命令 | 功能
:----|:----
ls -la | 列出所有文件包括隐藏文件，每行一个
ls -lh | 列出所有文件，每行一个,格式化显示文件大小
ls -lS | 列出所有文件，每行一个,已文件大小排序
ls -ltr | 列出所有文件, 已文件修改时间排序

#### 6. pwd
 命令 | 功能
:----|:----
pwd | 显示当前目录绝对路径

#### 7. cp
 命令 | 功能
:----|:----
cp path/to/file.ext path/to/file.ext | 复制文件使用新文件名
cp path/to/file.ext path/to/folder | 复制文件到其他目录使用之前文件名
cp -r path/to/folder path/to/copy | 递归复制文件夹内所有文件到目标文件夹

#### 8. split
 命令 | 功能
:----|:----
split -l 10 filename | 每十行分割为一个文件
split -b 10 filename | 每512bytes分割为一个文件

## 08. 文本操作
#### 1. grep
命令 | 功能
:----|:----
grep search_string path/to/file | 查找特定字符串
grep -i search_string path/to/file | 忽略大小写
grep -RI search_string . | 在当前目录下递归查找指定字符串（忽略非文本文件）
grep -E ^regex$ path/to/file | 使用正则匹配查找
-n | 显示行号
-v | 反选
-c | 输出匹配行数

#### 2. sed
命令 | 功能
:----|:----
sed 's/find/replace/' filename | 将匹配到的find替换为replace标准输出
sed -E 's/regex/replace/g' filename | 使用正则匹配，更换并标准输出
sed -i '' 's/find/replace/g' filename | 更换并修改源文件
sed '/line_pattern/s/find/replace/' filename | 只更改匹配行的数据
sed -n 'line_number,/^$/p' filename | 修改第n行至下一个空行的数据

#### 3. awk
命令 | 功能
:----|:-----
awk '{print $5}' filename | 输出第五列数据
awk '/something/ {print $2}' filename | 输出字符或正则匹配行的第二列数据
awk -F ',' '{print $NF}' filename | 以，为分隔符，输出最后一列数据
awk '{s+=$1} END {print s}' filename | 累加第一列数据结束后输出
awk -F '' '{if ($2==5) print $2; else print "---"}' | 第二列等于5输出第二列，否则输出---

#### 4. cut
命令 | 功能
:----|:----
cut -c 1-5 file | 标准输出每行1-5个字符    
cut -c 5- file | 标准输出每行第5个以后的字符
echo '12345' | cut -d"3" -f1 | 以3为分隔符输出分割后的第一部分

#### 5. cat
命令 | 功能
:----|:----
cat file1 file2 > file3 | 合并file1和file2到file3
cat file1 file2 >> file3 | 添加file1和file2到file3尾部

#### 6. wc
命令 | 功能
:----|:----
wc -l file | 标准输出文件行数量
wc -w file | 标准输出文件单词数量
wc -c file | 标准输出文件字符数

#### 7. sort & uniq
命令 | 功能
:----|:----
cat test.sh \| sort \| uniq  | 排序后去重标准输出
sort -n file | 按照数值排序而不是字符
sort -r file | 倒序排序

#### 8. head
命令 | 功能
:----|:----
head -n num file | 标准输出文件前num行 

#### 9. tail
命令 | 功能
:----|:----
tail -n num file | 标准输出文件倒数num行 
tail -f file | 持续输出文件最后一行

## 09. 进程
#### 1. kill
命令 | 功能
:----|:----
kill pid | 终止执行中的程序
kill -9 pid | 强制终止执行中的程序
kill -l | 列出所有信号名称

#### 2. pkill
命令 | 功能
:----|:----
pkill -9 process_name | 终止所有匹配process_name的进程

#### 3. killall
命令 | 功能
:----|:----
killall process_name | 终止所有匹配process_name的进程
killall process_name* | 终止所有匹配process_name*的进程

#### 4. jobs
命令 | 功能
:----|:----
jobs -l | 标准输出当前执行的任务

#### 5. fg
命令 | 功能
:----|:----
fg | 将最近进入后台执行的任务前台执行
fg 1 | 将指定任务前台执行
#### 6. bg
命令 | 功能
:----|:----
bg | 将当前任务后台执行
bg 1 | 将指定任务后台执行
#### 7. supervisor
命令 | 功能
:----|:----
supervisor command job | 监控脚本执行情况，被终止后重启该进程

#### 8. nohub
命令 | 功能
:----|:----
nohub command job & | 不挂断运行命令，将程序输出到当前文件夹下nohub.out文件中

#### 9. ps
命令 | 功能
:----|:----
ps -ef | 显示所有进程详细信息
ps --forest | 显示当前用户进程父子层级关系

## 10. 其他
1. data
4. pstree -p
5. uname -a
6. reset
12. xargs
13. man
14. jq
15. mediainfo
16. tldr
17. chown
18. chmod
19. jq
20. curl ipinfo.io 输出公网IP
21. lsb_release -a  标准输出linux发行版本