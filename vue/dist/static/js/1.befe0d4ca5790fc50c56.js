webpackJsonp([1],{"749f":function(E,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var E=this,a=E.$createElement,t=E._self._c||a;return t("div",{staticClass:"content"},[t("hr"),E._v(" "),t("h2",{attrs:{id:"name%3A-%E7%94%9F%E4%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1layout%3A-posttitle%3A-%22%E7%94%9F%E4%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1%22info%3A-%22%E7%94%9F%E4%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1%22date%3A-2019-05-05categories%3A-worktags%3A-%5Blinux%2C-%E8%AF%BB%E4%B9%A6%2C-%E5%BE%AE%E6%9C%8D%E5%8A%A1%5Dcoverimg%3A-%22https%3A%2F%2Fws1.sinaimg.cn%2Flarge%2F88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg%22"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name%3A-%E7%94%9F%E4%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1layout%3A-posttitle%3A-%22%E7%94%9F%E4%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1%22info%3A-%22%E7%94%9F%E4%BA%A7%E5%BE%AE%E6%9C%8D%E5%8A%A1%22date%3A-2019-05-05categories%3A-worktags%3A-%5Blinux%2C-%E8%AF%BB%E4%B9%A6%2C-%E5%BE%AE%E6%9C%8D%E5%8A%A1%5Dcoverimg%3A-%22https%3A%2F%2Fws1.sinaimg.cn%2Flarge%2F88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg%22","aria-hidden":"true"}},[E._v("#")]),E._v(' name: 生产微服务\nlayout: post\ntitle:  "生产微服务"\ninfo: "生产微服务"\ndate:   2019-05-05\ncategories: WORK\ntags: [Linux, 读书, 微服务]\ncoverimg: "https://ws1.sinaimg.cn/large/88b26e1cgy1fx7cwh57tlj22kw3vc1ky.jpg"')]),E._v(" "),t("h2",{attrs:{id:"%E5%89%8D%E8%A8%80"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%89%8D%E8%A8%80","aria-hidden":"true"}},[E._v("#")]),E._v(" 前言")]),E._v(" "),t("ul",[t("li",[E._v("微服务应该具备：稳定性，可靠性，伸缩性，容错能力，高性能，可监控，文档化，灾备能力")]),E._v(" "),t("li",[E._v("每个原则都包含具体标准，可量化，量化的结果有助于提升微服务的可用性")])]),E._v(" "),t("h2",{attrs:{id:"%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%AE%80%E4%BB%8B"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BE%AE%E6%9C%8D%E5%8A%A1%E7%AE%80%E4%BB%8B","aria-hidden":"true"}},[E._v("#")]),E._v(" 微服务简介")]),E._v(" "),t("ul",[t("li",[E._v("现今基于微服务架构的应用程序，在一定程度上是为了解决伸缩性问题，运行效率问题和开发效率问题的")]),E._v(" "),t("li",[E._v("成功的可伸缩微服务生态系统需要复杂且稳定的基础设施的支撑")]),E._v(" "),t("li",[E._v("横向伸缩为增加更多的服务器，纵向伸缩为为每一个服务器增加资源")]),E._v(" "),t("li",[E._v("微服务的基本原理为，让一个小型应用专注的做好一件事，一个微服务就是一个小型应用，方便替换，可独立开发部署")]),E._v(" "),t("li",[E._v("微服务无法单独存在，不会出现微服务孤岛，微服务是大型系统的组成部分")]),E._v(" "),t("li",[E._v("微服务架构的目标是要创建一组具有自治能力和自包含能力的独立应用，它们各自负责提供某一方面的功能")]),E._v(" "),t("li",[E._v("微服务并不是孤立存在的，它们存在于一个环境里，微服务在这个环境里进行交互")]),E._v(" "),t("li",[E._v("在一个设计良好的微服务生态系统里，微服务与基础设施之间是分离的")]),E._v(" "),t("li",[E._v("微服务与硬件，网络，构建和部署管道，服务发现和负载均衡都是分类的，它们都是微服务生态系统的基础设施的组成部分")]),E._v(" "),t("li",[E._v("微服务分层由底层到应用层")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 硬件层\n2. 通信层\n3. 应用平台层\n4. 微服务层\n")])]),E._v(" "),t("h4",{attrs:{id:"%E7%A1%AC%E4%BB%B6%E5%B1%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%A1%AC%E4%BB%B6%E5%B1%82","aria-hidden":"true"}},[E._v("#")]),E._v(" 硬件层")]),E._v(" "),t("ul",[t("li",[E._v("硬件层包含如下：")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 物理服务器\n2. 数据库\n3. 操作系统\n4. 资源隔离和资源抽象\n5. 配置管理\n6. 主机级别的监控\n7. 主机级别的日志\n")])]),E._v(" "),t("h4",{attrs:{id:"%E9%80%9A%E4%BF%A1%E5%B1%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E9%80%9A%E4%BF%A1%E5%B1%82","aria-hidden":"true"}},[E._v("#")]),E._v(" 通信层")]),E._v(" "),t("ul",[t("li",[E._v("通信层包含如下")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 网络\n2. DNS\n3. 远程过程调用（RPC）\n4. 端点\n5. 消息传递\n6. 服务发现\n7. 服务注册\n8. 负载均衡\n")])]),E._v(" "),t("ul",[t("li",[E._v("微服务通过RPC或消息传递与其他微服务进行交互，这些调用通过网络发送到其他微服务的API端点上")]),E._v(" "),t("li",[E._v("基本原理为，使用特定的协议，一个微服务把符合特定格式的数据通过网络发送到另一个服务或消息代理上")]),E._v(" "),t("li",[E._v("微服务的通信方式：")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. HTTP+REST/Thrift.使用HTTP协议,是最便利的微服务通信方式，使用简单，稳定可靠，不足之处是它是同步阻塞的\n2. 消息传递，原理为，一个微服务把数据通过网络发送给一个消息代理，消息代理会把消息路由到其他微服务上，消息传递的异步非阻塞的\n")])]),E._v(" "),t("ul",[t("li",[E._v("消息传递的两种方式")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 发布订阅模式：客户端会订阅一个主题，它将从主题上收到发布者的任何一个消息\n2. 请求和相应模式：客户端发送一个请求到一个服务，这个服务会对这个请求做出响应\n")])]),E._v(" "),t("ul",[t("li",[E._v("两种通信方式的优缺点")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 消息传递伸缩性不如HTTP+REST\n2. 消息传递对变更不友好，因为它是集中式的，容易导致消息队列和消息代理变成整个生态系统的故障点\n3. 异步特性在并发环境中易导致竞赛条件\n")])]),E._v(" "),t("ul",[t("li",[E._v("微服务发现")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 服务发现可以确保请求会被路由到它们应该去的地方，而且只会被路由到正常运行的实例上\n2. 服务发现需要用到服务注册，服务注册中记录了生态系统里的所有微服务的IP和PORT\n")])]),E._v(" "),t("ul",[t("li",[E._v("负载均衡器可以确保业务流量被均衡的分发到所有实例上")])]),E._v(" "),t("h4",{attrs:{id:"%E5%BA%94%E7%94%A8%E5%B9%B3%E5%8F%B0%E5%B1%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BA%94%E7%94%A8%E5%B9%B3%E5%8F%B0%E5%B1%82","aria-hidden":"true"}},[E._v("#")]),E._v(" 应用平台层")]),E._v(" "),t("ul",[t("li",[E._v("本层包含所有独立于微服务的内部工具和服务，包含的集中式工具和服务跨越了整个生态系统")]),E._v(" "),t("li",[E._v("应用平台层的主要内容")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 内部自助开发工具\n2. 开发环境\n3. 测试，构建，打包和发布工具\n4. 部署管道\n5. 微服务级别日志\n6. 微服务级别监控\n")])]),E._v(" "),t("ul",[t("li",[E._v("内部自助开发工具主要目的为抽象出集中式的自助工具")]),E._v(" "),t("li",[E._v("规划标准版本管理系统和稳定高效开发环境，尽量和生产环境一致")]),E._v(" "),t("li",[E._v("开发过程中的测试，构建，打包和发布尽量标准化集中化自动化，不留给人类犯错机会")]),E._v(" "),t("li",[E._v("将所有微服务的请求和响应日志记录到日志中，因为微服务变更速度太快，如果发生系统级错误复现难以重现，以及帮助开发人员了解服务健康状态")])]),E._v(" "),t("h4",{attrs:{id:"%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%B1%82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BE%AE%E6%9C%8D%E5%8A%A1%E5%B1%82","aria-hidden":"true"}},[E._v("#")]),E._v(" 微服务层")]),E._v(" "),t("ul",[t("li",[E._v("微服务层包括")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 微服务\n2. 微服务相关配置\n")])]),E._v(" "),t("h2",{attrs:{id:"%E7%BB%84%E7%BB%87%E7%9A%84%E6%8C%91%E6%88%98"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%BB%84%E7%BB%87%E7%9A%84%E6%8C%91%E6%88%98","aria-hidden":"true"}},[E._v("#")]),E._v(" 组织的挑战")]),E._v(" "),t("ul",[t("li",[E._v("不管在技术还是管理领域，都不存在一种能够在一段时期内为生产力，可靠性和简单性带来哪怕一个数量级的增长")]),E._v(" "),t("li",[E._v("微服务在拥有更好的伸缩性和更高的效率时会带来一些其他挑战")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 组织结构需要调整，会弱化团队之间沟通，而且违反康威定律\n2. 技术的蔓延无法预测\n3. 系统失效的可能性会因此增加\n4. 工程资源和基础设施的争夺会变得激烈起来\n")])]),E._v(" "),t("h4",{attrs:{id:"%E5%BA%B7%E5%A8%81%E5%AE%9A%E5%BE%8B"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%BA%B7%E5%A8%81%E5%AE%9A%E5%BE%8B","aria-hidden":"true"}},[E._v("#")]),E._v(" 康威定律")]),E._v(" "),t("ul",[t("li",[E._v("康威定律的基本思想是，公司的沟通方式和组织结构决定了系统的架构")]),E._v(" "),t("li",[E._v("反康威定律为，产品的架构决定了公司的组织架构")]),E._v(" "),t("li",[E._v("微服务的生态系统和契合反康威定律会带来一些问题")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 会导致出现大量独立团队，团队结构会出现无序扩张\n2. 每个团队只了解自身业务\n3. 不同团队的自助开发工具也会不同，导致应用平台团队沟通成本增加\n4. 开发人员需要兼顾对微服务的随时响应\n")])]),E._v(" "),t("h4",{attrs:{id:"%E6%8A%80%E6%9C%AF%E8%94%93%E5%BB%B6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%8A%80%E6%9C%AF%E8%94%93%E5%BB%B6","aria-hidden":"true"}},[E._v("#")]),E._v(" 技术蔓延")]),E._v(" "),t("ul",[t("li",[E._v("技术蔓延的几种形式")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 每个微服务团队使用不同的开发工具，软件包，编程语言，部署方式，监控度量指标，各种依赖\n2. 不同的开发语言会导致，平台层需为每一种语言提供不同的开发工具，和维护工作\n3. 技术债，当出现问题，开发团队更关心能否快速解决当下问题\n")])]),E._v(" "),t("h4",{attrs:{id:"%E6%9B%B4%E5%A4%9A%E5%A4%B1%E6%95%88%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%9B%B4%E5%A4%9A%E5%A4%B1%E6%95%88%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7","aria-hidden":"true"}},[E._v("#")]),E._v(" 更多失效的可能性")]),E._v(" "),t("ul",[t("li",[E._v("大型分布式微服务系统包含了大量持续变化的小型服务，我们必须接受系统里的组件会失效的事实")]),E._v(" "),t("li",[E._v("我们需要为失效做出准备，当失效发生尽量减少损失，并且对每个组件和整个生态系统的极限和边界进行测试")])]),E._v(" "),t("h4",{attrs:{id:"%E8%B5%84%E6%BA%90%E7%AB%9E%E4%BA%89"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E8%B5%84%E6%BA%90%E7%AB%9E%E4%BA%89","aria-hidden":"true"}},[E._v("#")]),E._v(" 资源竞争")]),E._v(" "),t("ul",[t("li",[E._v("每个工程组织所拥有的资源都是有限的，开发团队，硬件设施")]),E._v(" "),t("li",[E._v("应用平台收集需求会面临竞争")]),E._v(" "),t("li",[E._v("团队之间人才的竞争")])]),E._v(" "),t("h2",{attrs:{id:"%E7%94%9F%E4%BA%A7%E5%B0%B1%E7%BB%AA"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%94%9F%E4%BA%A7%E5%B0%B1%E7%BB%AA","aria-hidden":"true"}},[E._v("#")]),E._v(" 生产就绪")]),E._v(" "),t("h4",{attrs:{id:"%E5%8F%AF%E7%94%A8%E6%80%A7%3A%E6%A0%87%E5%87%86%E5%8C%96%E7%9A%84%E7%9B%AE%E6%A0%87"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%8F%AF%E7%94%A8%E6%80%A7%3A%E6%A0%87%E5%87%86%E5%8C%96%E7%9A%84%E7%9B%AE%E6%A0%87","aria-hidden":"true"}},[E._v("#")]),E._v(" 可用性:标准化的目标")]),E._v(" "),t("ul",[t("li",[E._v("可用性的三个指标")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. uptime 微服务正常工作时间\n2. downtime 微服务无法正常工作时间\n3. uptime+downtime 服务运行总时间\n4. uptime/(uptime+downtime) 可用性指标\n")])]),E._v(" "),t("h4",{attrs:{id:"%E7%94%9F%E7%9C%8B%E5%B0%B1%E7%BB%AA%E6%A0%87%E5%87%86"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%94%9F%E7%9C%8B%E5%B0%B1%E7%BB%AA%E6%A0%87%E5%87%86","aria-hidden":"true"}},[E._v("#")]),E._v(" 生看就绪标准")]),E._v(" "),t("ul",[t("li",[E._v("如果一个应用程序或服务被证实可以处理生成环境的业务流量，那么它就被认为是生产就绪的")])]),E._v(" "),t("h4",{attrs:{id:"%E7%A8%B3%E5%AE%9A%E6%80%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%A8%B3%E5%AE%9A%E6%80%A7","aria-hidden":"true"}},[E._v("#")]),E._v(" 稳定性")]),E._v(" "),t("ul",[t("li",[E._v("微服务架构带来了开发上的自由，并加快了部署的速度，快速的变更带来稳定性的下降")]),E._v(" "),t("li",[E._v("构建稳定微服务要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 稳定的开发周期\n2. 稳定的开发流程\n3. 稳定的更新换代流程\n")])]),E._v(" "),t("h4",{attrs:{id:"%E5%8F%AF%E9%9D%A0%E6%80%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%8F%AF%E9%9D%A0%E6%80%A7","aria-hidden":"true"}},[E._v("#")]),E._v(" 可靠性")]),E._v(" "),t("ul",[t("li",[E._v("一个微服务需要得到客户端，依赖项和整个微服务生态系统的信任才能算得上可靠，是走向生产环境的必要条件")]),E._v(" "),t("li",[E._v("构建可靠的微服务的要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 可靠的部署流程\n2. 对依赖项可能出现的故障准备应对措施\n3. 可靠的路由和服务发现\n")])]),E._v(" "),t("h4",{attrs:{id:"%E4%BC%B8%E7%BC%A9%E6%80%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BC%B8%E7%BC%A9%E6%80%A7","aria-hidden":"true"}},[E._v("#")]),E._v(" 伸缩性")]),E._v(" "),t("ul",[t("li",[E._v("一个可伸缩的微服务可以同时处理大量的任务和请求")]),E._v(" "),t("li",[E._v("微服务需要随时做好处理突发流量的准备，防止它们拖垮整个服务")]),E._v(" "),t("li",[E._v("微服务存储和处理数据的方式也需要具备伸缩性")]),E._v(" "),t("li",[E._v("构建可伸缩的微服务要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 定义好质和量两方面的增长规模\n2. 定位资源瓶颈和需求\n3. 准确的容量规划\n4. 可伸缩的流量处理能力\n5. 依赖项的伸缩\n6. 可伸缩的数据存储\n")])]),E._v(" "),t("h4",{attrs:{id:"%E5%AE%B9%E9%94%99%E5%92%8C%E7%81%BE%E5%A4%87"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%AE%B9%E9%94%99%E5%92%8C%E7%81%BE%E5%A4%87","aria-hidden":"true"}},[E._v("#")]),E._v(" 容错和灾备")]),E._v(" "),t("ul",[t("li",[E._v("一个具备容错和灾备的微服务可以承受来自内部和外部的故障")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 内部故障是微服务自身造成的，例如bug\n2. 外部故障，比如数据中心宕机或糟糕的管理配置\n")])]),E._v(" "),t("ul",[t("li",[E._v("构建具备容错和灾备能力的微服务要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 识别潜在的故障场景，并做好应对准备\n2. 识别并解决单点故障问题\n3. 应用故障探测和补救策略\n4. 通过代码测试，负载测试和混沌测试验证系统的弹性\n5. 管理好业务流量\n6. 快速处理故障\n")])]),E._v(" "),t("h4",{attrs:{id:"%E9%AB%98%E6%80%A7%E8%83%BD"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E9%AB%98%E6%80%A7%E8%83%BD","aria-hidden":"true"}},[E._v("#")]),E._v(" 高性能")]),E._v(" "),t("ul",[t("li",[E._v("一个高性能的微服务可以使用适当的资源快速的处理请求，高效的执行任务")]),E._v(" "),t("li",[E._v("构建高性能微服务要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 恰当的可用性SLA\n2. 恰当的任务处理方式，同步异步\n3. 对资源的合理利用\n")])]),E._v(" "),t("h4",{attrs:{id:"%E7%9B%91%E6%8E%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%9B%91%E6%8E%A7","aria-hidden":"true"}},[E._v("#")]),E._v(" 监控")]),E._v(" "),t("ul",[t("li",[E._v("构建可监控的微服务要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 适当的日志和堆栈跟踪信息\n2. 设计良好且且易于理解的仪表盘，可以准确地反应服务的健康状况\n3. 有效且具有可操作性的告警操作手册\n4. 开发人员轮班待命\n")])]),E._v(" "),t("h4",{attrs:{id:"%E6%96%87%E6%A1%A3%E5%8C%96"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E6%96%87%E6%A1%A3%E5%8C%96","aria-hidden":"true"}},[E._v("#")]),E._v(" 文档化")]),E._v(" "),t("ul",[t("li",[E._v("构建文档化的微服务要求")])]),E._v(" "),t("pre",{pre:!0,attrs:{class:"hljs"}},[t("code",[E._v("1. 详细的，最新的，集中式的文档，它包含了微服务所有的相关信息\n2. 在开发人员，团队，整个生态系统层面了解微服务\n")])]),E._v(" "),t("h4",{attrs:{id:"%E5%AE%9E%E7%8E%B0%E7%94%9F%E4%BA%A7%E5%B0%B1%E7%BB%AA%E6%A0%87%E5%87%86"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E5%AE%9E%E7%8E%B0%E7%94%9F%E4%BA%A7%E5%B0%B1%E7%BB%AA%E6%A0%87%E5%87%86","aria-hidden":"true"}},[E._v("#")]),E._v(" 实现生产就绪标准")]),E._v(" "),t("ul",[t("li",[E._v("标准化的应该被视作一堵限制开发和部署的墙，而是要把开发和部署带向生产环境的指南")]),E._v(" "),t("li",[E._v("生产就绪标准为我们提供了可衡量的结果，开发团队可以看到他们所依赖的服务是可信任的，并具备了稳定性，可靠性，容错能力，灾备能留，高性能，监控能力和文档化")])]),E._v(" "),t("h2",{attrs:{id:"%E7%A8%B3%E5%AE%9A%E6%80%A7%E5%92%8C%E5%8F%AF%E9%9D%A0%E6%80%A7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#%E7%A8%B3%E5%AE%9A%E6%80%A7%E5%92%8C%E5%8F%AF%E9%9D%A0%E6%80%A7","aria-hidden":"true"}},[E._v("#")]),E._v(" 稳定性和可靠性")])])}]},e=t("VU/8")(null,r,!1,null,null,null);a.default=e.exports}});
//# sourceMappingURL=1.befe0d4ca5790fc50c56.js.map