let pageroutes = [
  {
    path: "/WORK/Bash",
    component: () => import('../posts/Bash.md')
  },
  {
    path: "/post/Bash",
    component: () => import('../posts/Bash.md')
  },
  {
    path: "/Bash/Bash",
    component: () => import('../posts/Bash.md')
  },
  {
    path: "/Shell/Bash",
    component: () => import('../posts/Bash.md')
  },
  {
    path: "/WORK/Linux命令",
    component: () => import('../posts/Linux命令.md')
  },
  {
    path: "/post/Linux命令",
    component: () => import('../posts/Linux命令.md')
  },
  {
    path: "/Linux/Linux命令",
    component: () => import('../posts/Linux命令.md')
  },
  {
    path: "/Shell/Linux命令",
    component: () => import('../posts/Linux命令.md')
  },
  {
    path: "/WORK/Linux网络IO并行化技术概览",
    component: () => import('../posts/Linux网络IO并行化技术概览.md')
  },
  {
    path: "/post/Linux网络IO并行化技术概览",
    component: () => import('../posts/Linux网络IO并行化技术概览.md')
  },
  {
    path: "/Linux/Linux网络IO并行化技术概览",
    component: () => import('../posts/Linux网络IO并行化技术概览.md')
  },
  {
    path: "/WORK/MediaInfo",
    component: () => import('../posts/MediaInfo.md')
  },
  {
    path: "/post/MediaInfo",
    component: () => import('../posts/MediaInfo.md')
  },
  {
    path: "/Linux/MediaInfo",
    component: () => import('../posts/MediaInfo.md')
  },
  {
    path: "/WORK/MongoDB Client操作",
    component: () => import('../posts/MongoDB Client操作.md')
  },
  {
    path: "/post/MongoDB Client操作",
    component: () => import('../posts/MongoDB Client操作.md')
  },
  {
    path: "/MongoDB/MongoDB Client操作",
    component: () => import('../posts/MongoDB Client操作.md')
  },
  {
    path: "/WORK/MongoDB实战",
    component: () => import('../posts/MongoDB实战.md')
  },
  {
    path: "/post/MongoDB实战",
    component: () => import('../posts/MongoDB实战.md')
  },
  {
    path: "/MongoDB/MongoDB实战",
    component: () => import('../posts/MongoDB实战.md')
  },
  {
    path: "/WORK/MongoDB数据备份恢复",
    component: () => import('../posts/MongoDB数据备份恢复.md')
  },
  {
    path: "/post/MongoDB数据备份恢复",
    component: () => import('../posts/MongoDB数据备份恢复.md')
  },
  {
    path: "/MongoDB/MongoDB数据备份恢复",
    component: () => import('../posts/MongoDB数据备份恢复.md')
  },
  {
    path: "/WORK/Mongoengine",
    component: () => import('../posts/Mongoengine.md')
  },
  {
    path: "/post/Mongoengine",
    component: () => import('../posts/Mongoengine.md')
  },
  {
    path: "/MongoDB/Mongoengine",
    component: () => import('../posts/Mongoengine.md')
  },
  {
    path: "/WORK/MySQL Client 常用操作",
    component: () => import('../posts/MySQL Client 常用操作.md')
  },
  {
    path: "/post/MySQL Client 常用操作",
    component: () => import('../posts/MySQL Client 常用操作.md')
  },
  {
    path: "/MySQL/MySQL Client 常用操作",
    component: () => import('../posts/MySQL Client 常用操作.md')
  },
  {
    path: "/WORK/MySQL读书笔记",
    component: () => import('../posts/MySQL读书笔记.md')
  },
  {
    path: "/post/MySQL读书笔记",
    component: () => import('../posts/MySQL读书笔记.md')
  },
  {
    path: "/MySQL/MySQL读书笔记",
    component: () => import('../posts/MySQL读书笔记.md')
  },
  {
    path: "/WORK/Python爬虫",
    component: () => import('../posts/Python爬虫.md')
  },
  {
    path: "/post/Python爬虫",
    component: () => import('../posts/Python爬虫.md')
  },
  {
    path: "/Python/Python爬虫",
    component: () => import('../posts/Python爬虫.md')
  },
  {
    path: "/WORK/Tmux",
    component: () => import('../posts/Tmux.md')
  },
  {
    path: "/post/Tmux",
    component: () => import('../posts/Tmux.md')
  },
  {
    path: "/Tmux/Tmux",
    component: () => import('../posts/Tmux.md')
  },
  {
    path: "/WORK/Vim",
    component: () => import('../posts/Vim.md')
  },
  {
    path: "/post/Vim",
    component: () => import('../posts/Vim.md')
  },
  {
    path: "/Vim/Vim",
    component: () => import('../posts/Vim.md')
  },
  {
    path: "/WORK/内核设计与实现",
    component: () => import('../posts/内核设计与实现.md')
  },
  {
    path: "/post/内核设计与实现",
    component: () => import('../posts/内核设计与实现.md')
  },
  {
    path: "/Linux/内核设计与实现",
    component: () => import('../posts/内核设计与实现.md')
  },
  {
    path: "/内核/内核设计与实现",
    component: () => import('../posts/内核设计与实现.md')
  },
  {
    path: "/读书/内核设计与实现",
    component: () => import('../posts/内核设计与实现.md')
  },
  {
    path: "/WORK/数据结构和算法概念",
    component: () => import('../posts/数据结构和算法概念.md')
  },
  {
    path: "/post/数据结构和算法概念",
    component: () => import('../posts/数据结构和算法概念.md')
  },
  {
    path: "/数据结构和算法概念/数据结构和算法概念",
    component: () => import('../posts/数据结构和算法概念.md')
  },
  {
    path: "/WORK/架构整洁之道",
    component: () => import('../posts/架构整洁之道.md')
  },
  {
    path: "/post/架构整洁之道",
    component: () => import('../posts/架构整洁之道.md')
  },
  {
    path: "/Linux/架构整洁之道",
    component: () => import('../posts/架构整洁之道.md')
  },
  {
    path: "/读书/架构整洁之道",
    component: () => import('../posts/架构整洁之道.md')
  },
  {
    path: "/WORK/清醒思考的艺术",
    component: () => import('../posts/清醒思考的艺术.md')
  },
  {
    path: "/post/清醒思考的艺术",
    component: () => import('../posts/清醒思考的艺术.md')
  },
  {
    path: "/读书/清醒思考的艺术",
    component: () => import('../posts/清醒思考的艺术.md')
  },
  {
    path: "/WORK/生产微服务",
    component: () => import('../posts/生产微服务.md')
  },
  {
    path: "/post/生产微服务",
    component: () => import('../posts/生产微服务.md')
  },
  {
    path: "/Linux/生产微服务",
    component: () => import('../posts/生产微服务.md')
  },
  {
    path: "/读书/生产微服务",
    component: () => import('../posts/生产微服务.md')
  },
  {
    path: "/微服务/生产微服务",
    component: () => import('../posts/生产微服务.md')
  },
  {
    path: "/WORK/程序员的自我修养",
    component: () => import('../posts/程序员的自我修养.md')
  },
  {
    path: "/post/程序员的自我修养",
    component: () => import('../posts/程序员的自我修养.md')
  },
  {
    path: "/Linux/程序员的自我修养",
    component: () => import('../posts/程序员的自我修养.md')
  },
  {
    path: "/读书/程序员的自我修养",
    component: () => import('../posts/程序员的自我修养.md')
  },
  {
    path: "/WORK/米兰-昆德拉",
    component: () => import('../posts/米兰-昆德拉.md')
  },
  {
    path: "/post/米兰-昆德拉",
    component: () => import('../posts/米兰-昆德拉.md')
  },
  {
    path: "/米兰-昆德拉/米兰-昆德拉",
    component: () => import('../posts/米兰-昆德拉.md')
  },
  {
    path: "/无知/米兰-昆德拉",
    component: () => import('../posts/米兰-昆德拉.md')
  },
  {
    path: "/读书/米兰-昆德拉",
    component: () => import('../posts/米兰-昆德拉.md')
  },
  {
    path: "/WORK/网络协议",
    component: () => import('../posts/网络协议.md')
  },
  {
    path: "/post/网络协议",
    component: () => import('../posts/网络协议.md')
  },
  {
    path: "/网络协议/网络协议",
    component: () => import('../posts/网络协议.md')
  },
  {
    path: "/WORK/蔡康永的情商课",
    component: () => import('../posts/蔡康永的情商课.md')
  },
  {
    path: "/post/蔡康永的情商课",
    component: () => import('../posts/蔡康永的情商课.md')
  },
  {
    path: "/读书/蔡康永的情商课",
    component: () => import('../posts/蔡康永的情商课.md')
  }];
export default pageroutes;