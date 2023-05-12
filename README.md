# nuxt-website

这是 `中恒智造官网` 的前端项目
> node版本推荐14.17.5

## 构建设置

```bash
# 安装依赖
$ npm install

# 启动本地服务与热重载于localhost:8000
# nuxt.config.js 里面可以修改端口号
$ npm run dev

# 构建生产和发布服务器
$ npm run bulid
$ npm run start

#生成静态项目
$ npm run generate
```

关于`Nuxtjs`内部实现的详细解释，请查看[文档](https://nuxtjs.org)。

## 特殊目录

您可以创建以下额外的目录，其中一些目录具有特殊的行为。只需要`pages`。如果不想使用它们的功能，可以删除它们。

### `assets`

assets 目录包含未编译的资产，如 Stylus 或 Sass 文件、图像或字体。

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/directory-structure/assets)。

### `components`

components 目录包含 Vue.js 组件。组件构成了页面的不同部分，可以重用并导入到页面、布局甚至其他组件中。

在 components 目录中创建的组件将自动的引入 pages 页面中，无需额外引入。详情请见`.nuxt/components/readme.md` 查看详细用法

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/directory-structure/components)。

### `layouts`

当你想要改变你的 Nuxt 应用的外观和感觉时，布局是一个很大的帮助，无论你是想要包括一个侧边栏，还是为移动和桌面拥有不同的布局。

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/directory-structure/layouts)。

### `pages`

这个目录包含您的应用程序视图和路由。Nuxt 将读取所有的`*.vue`文件，并自动设置 vue Router。

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/get-started/routing)。

### `plugins`

plugins 目录包含你想在实例化 Vue.js 根应用程序之前运行的 JavaScript 插件。这是添加 Vue 插件和注入函数或常量的地方。

每次你需要使用`Vue.use()`时，你应该在`plugins/`中创建一个文件，并将其路径添加到`nuxt.config.js`中的 plugins 中。

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/directory-structure/plugins)。

### `static`

此目录包含静态文件。这个目录中的每个文件都映射到`/`。

例如:`/static/robots.txt`映射为`/robots.txt`。

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/directory-structure/static)。

### `store`

这个目录包含您的 Vuex 存储文件。在这个目录中创建一个文件会自动激活 Vuex。

关于这个目录使用的更多信息，请参见[文档](https://nuxtjs.org/docs/2.x/directory-structure/store)。
