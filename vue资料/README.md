一.开发环境配置

1.执行npm install,安装基本的环境依赖

执行npm run dev启动项目
执行npm run build编译项目,编译后把dist目录下的所有文件放到服务器上即可


说明：
1.没有特殊应用所有的style要添加scoped属性 
  例如：<style lang="scss" scoped></style>
2.说明文档存放目录
   所有的文档写统一放在docs下，不要放在pages及子目录下
   a.组件相关的文档放到docs/components下，更多说明请查看docs/components/README.md文档，该目录的组件是原子性的，不能在一个组件中调用另一个组件
   b.视图组件相关的文档放到docs/
3.学习文档统一存放在一个文件夹(名为开发者姓名)下，供大家学习使用

src说明
common 公共资源目录
components 组件目录(里面的所有组件相互之间不能调用)
pages 页面目录
router 路由目录
service 服务层
store 存储层
views 视图组件(同compnents组件目录一样，只不过可以相互调用组件，也可以调用components下的组件)


注意：
    不要随意修改配置，尤其是公共配置文件