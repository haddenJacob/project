编译一个组件步骤
1.在src/components下建立文件夹，名称为 "组件名"，首字母大写
2.建立默认组件，名为index.vue,如果有其它的风格，则再建立一个子目录，名为风格名，文件也是index.vue
3.与组件有关的所有资源统一放到组件目录下，可以单独建立文件夹也可以与index.vue同一级
4.在components/index.js中导入组件，同时导出该组件

文档编写
文档存放到docs/components目录下
文档名称  组件名_撰写人_撰写版本(vN N为1,2,3...)_组件风格[可选].md
文档内容：
    @Author 作者
    @version 版本
    @LastModify 上一次修改时间
    @Description 说明

example：
1.创建组件Logo ,有图片资源logo.png
2.创建primary 样式的Logo(如果没有其他样式的组件这一步没有，步骤中4,5,8,9也没有)

步骤：
1.在src/components创建一个文件夹，名称为Logo
2.在Logo下建立index.vue
3.把logo.png及其它资源复制到此，若建立单独的img也可，如果相关资源比较少可以不建立，与index.vue同一级
4.在Login下创建primary文件夹
5.在Login/primary下建立index.vue其他操作与创建组件一样
6.在index中导入（不用写后缀，默认是".js"  如果是index.js 可以页不用写）
    import Logo from 'components/Logo'  或 import OSLoading2 from 'components/Logo/index' 
7.注册组件
    Vue.use(Logo)
8.导入primary风格组件(注意名称为“组件名风格名”，采用驼峰命名)
    import LogoPrimary from 'components/Logo/primary'  或 import OSLoading2 from 'components/Logo/primary/index' 
9.注册组件
    Vue.use(LogoPrimary)

10.写说明文档
    @Author 张三
    @version 1.0
    @LastModify 2017-02-05 22:20:00
    @Description 略





