webpackJsonp([18],{iBzt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("hr"),t._v(" "),a("h2",{attrs:{id:"name%3A-mongodb%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8Dlayout%3A-posttitle%3A-%22mongodb%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8D%22info%3A-%22mongodb%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8D%22date%3A-2019-05-05categories%3A-worktags%3A-%5Bmongodb%5Dcoverimg%3A-%22https%3A%2F%2Fws1.sinaimg.cn%2Flarge%2F88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg%22"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-mongodb%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8Dlayout%3A-posttitle%3A-%22mongodb%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8D%22info%3A-%22mongodb%E6%95%B0%E6%8D%AE%E5%A4%87%E4%BB%BD%E6%81%A2%E5%A4%8D%22date%3A-2019-05-05categories%3A-worktags%3A-%5Bmongodb%5Dcoverimg%3A-%22https%3A%2F%2Fws1.sinaimg.cn%2Flarge%2F88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg%22","aria-hidden":"true"}},[t._v("#")]),t._v(' name: MongoDB数据备份恢复\nlayout: post\ntitle:  "MongoDB数据备份恢复"\ninfo: "MongoDB数据备份恢复"\ndate:   2019-05-05\ncategories: WORK\ntags: [MongoDB]\ncoverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"')]),t._v(" "),a("h1",{attrs:{id:"%E6%96%87%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%96%87%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA","aria-hidden":"true"}},[t._v("#")]),t._v(" 文本类型导入导出")]),t._v(" "),a("h2",{attrs:{id:"mongoexport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongoexport","aria-hidden":"true"}},[t._v("#")]),t._v(" mongoexport")]),t._v(" "),a("pre",[a("code",[t._v("将mongodb中的特定数据导出为CSV，TSV文件\n")])]),t._v(" "),a("h4",{attrs:{id:"%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-h,--host")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表远程连接的数据库地址，默认连接本地Mongo数据库；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--port")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表远程连接的数据库的端口，默认连接的远程端口27017；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-u,--username")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表连接远程数据库的账号，如果设置数据库的认证，需要指定用户账号；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-p,--password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表连接数据库的账号对应的密码；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-d,--db")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表连接的数据库；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-c,--collection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表连接数据库中的集合；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-f, --fields")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表集合中的字段，可以根据设置选择导出的字段；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表导出输出的文件类型，包括csv和json文件；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-o, --out")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表导出的文件名；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-q, --query")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("代表查询条件；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--skip")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("跳过指定数量的数据；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("读取指定数量的数据记录；")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--sort")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("对数据进行排序，可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而-1是用于降序排列,如sort({KEY:1})。")])])])]),t._v(" "),a("h4",{attrs:{id:"%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令行示例")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("mongoexport -h 127.0.0.1 -u root -p 12345 -d db_name  -c collection_name -f name,source --type=csv -o xiaomi.csv --query='{\"url\":/www.xiaomi.com/}' \n")])]),t._v(" "),a("h2",{attrs:{id:"mongoimport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongoimport","aria-hidden":"true"}},[t._v("#")]),t._v(" mongoimport")]),t._v(" "),a("pre",[a("code",[t._v("将格式化文件如JSON, CSV, TSV导入mongodb中\n")])]),t._v(" "),a("h4",{attrs:{id:"%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--help")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("标准输出帮助文档")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--host")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("hostname 默认为127.0.0.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--port")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("port 默认为27017")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--username")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用户名需结合密码使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("密码需结合用户名使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--db")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据库名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--collection")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("集合名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--fields")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当CSV或TSV文件无第一列列明使用，列明使用逗号分隔")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--ignoreBlanks")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("忽略空行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取值json,csv,tsv")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--file")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输入文件路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--headerline")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("CSV和TSV文件不导入第一列")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--mode")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("取值insert,upsert,merge默认为insert")])])])]),t._v(" "),a("h4",{attrs:{id:"%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令行示例")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("mongoimport -h 127.0.0.1 -d fanjr --type csv --ignoreBlanks --fields id,name,introduction,order_id,pid,status,create_by,create_at,update_at,update_by,c_type,s_type --file /tmp/category.csv \n")])]),t._v(" "),a("h1",{attrs:{id:"%E4%BA%8C%E8%BF%9B%E5%88%B6bson%E5%A4%87%E4%BB%BD%E8%BF%98%E5%8E%9F"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BA%8C%E8%BF%9B%E5%88%B6bson%E5%A4%87%E4%BB%BD%E8%BF%98%E5%8E%9F","aria-hidden":"true"}},[t._v("#")]),t._v(" 二进制BSON备份还原")]),t._v(" "),a("h2",{attrs:{id:"mongodump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodump","aria-hidden":"true"}},[t._v("#")]),t._v(" mongodump")]),t._v(" "),a("pre",[a("code",[t._v("将MongoDB的数据备份为.bson文件\n")])]),t._v(" "),a("h4",{attrs:{id:"%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("host:port port默认为27017")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定数据库名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-o")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定输出的文件路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-u")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用户名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("密码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定collection")])])])]),t._v(" "),a("h4",{attrs:{id:"%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令行示例")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("mongodump -h 127.0.0.1 -d db_name -o /tmp -u root -p 12345\n")])]),t._v(" "),a("h2",{attrs:{id:"mongorestore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongorestore","aria-hidden":"true"}},[t._v("#")]),t._v(" mongorestore")]),t._v(" "),a("pre",[a("code",[t._v("将mongodump出的.bson文件导入到MongoDB中\n")])]),t._v(" "),a("h4",{attrs:{id:"%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 重要参数列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-h")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("host:port port默认为27017")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-d")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定数据库名称")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-u")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用户名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("密码")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在单个集合导入时使用，指定集合名称，默认为文件名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("--dir")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("指定一个需要导入的.bson文件夹，不可同指定.bson文件路径同时使用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("脚本最后路径.bson文件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("需要导入的.bson文件，不可与--dir参数同时使用")])])])]),t._v(" "),a("h4",{attrs:{id:"%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%A4%BA%E4%BE%8B-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令行示例")]),t._v(" "),a("pre",{staticClass:"hljs"},[a("code",[t._v("mongorestore -h 127.0.0.1:27017 -u root -p 12345 -d db_name /tmp/target.bson \n")])]),t._v(" "),a("h2",{attrs:{id:"mongodump%2Fmongorestore%E4%B8%8Emongoexport%2Fmongoimport%E7%9A%84%E5%8C%BA%E5%88%AB"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodump%2Fmongorestore%E4%B8%8Emongoexport%2Fmongoimport%E7%9A%84%E5%8C%BA%E5%88%AB","aria-hidden":"true"}},[t._v("#")]),t._v(" mongodump/mongorestore与mongoexport/mongoimport的区别")]),t._v(" "),a("ul",[a("li",[t._v("mongoexport/mongoimport导入/导出的是JSON格式，而mongodump/mongorestore导入/导出的是BSON格式。")]),t._v(" "),a("li",[t._v("JSON可读性强但体积较大，BSON则是二进制文件，体积小但对人类几乎没有可读性。")]),t._v(" "),a("li",[t._v("在一些mongodb版本之间，BSON格式可能会随版本不同而有所不同，所以不同版本之间用mongodump/mongorestore可能不会成功，具体要看版本之间的兼容性。当无法使用BSON进行跨版本的数据迁移的时候，使用JSON格式即mongoexport/mongoimport是一个可选项。跨版本的mongodump/mongorestore个人并不推荐，实在要做请先检查文档看两个版本是否兼容（大部分时候是的）。")]),t._v(" "),a("li",[t._v("JSON虽然具有较好的跨版本通用性，但其只保留了数据部分，不保留索引，账户等其他基础信息。使用时应该注意。")]),t._v(" "),a("li",[t._v("总之，这两套工具在实际使用中各有优势，应该根据应用场景选择使用（好像跟没说一样）。但严格地说，mongoexport/mongoimport的主要作用还是导入/导出数据时使用，并不是一个真正意义上的备份工具。所以这里也不展开介绍了。")])])])}]},i=a("VU/8")(null,l,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=18.9451bdec99a3596f2ca9.js.map