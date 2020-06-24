# README

- webpack 配置参考：https://www.freecodecamp.org/news/learn-webpack-for-react-a36d4cac5060/

## 添加webpack

- webpack
- webpack-cli
- html-webpack-plugin
- clean-webpack-plugin

- webpack.config.js
- package.json "build" 命令

## 添加babel

- @babel/core
- babel-loader
- @babel/preset-env
- @babel/plugin-proposal-class-properties 支持在 constructor 外声明属性
<!-- - @babel/preset-react
- @babel/plugin-syntax-dynamic-import -->

- .babelrc

## webpack-dev-server

- webpack-dev-server

- devtool
- devServer

## css 支持

- style-loader
- css-loader
- sass-loader
- node-sass
- postcss-loader
- autoprefixer

- browserslist - https://github.com/browserslist/browserslist

## 支持 react

- @babel/react
- react
- react-dom

## 模块热加载

- react-hot-loader
- @hot-loader/react-dom

## 代码分割 - 基于路由的动态加载

- react-router-dom
- react-delay-render 延迟加载 
- react-imported-compent 动态加载

## 代码分割 - 代码分开打包

- entry 多入口
- optimization.splitChunks.cacheGroups

## webpack.config.js 拆分

- 开发
- 生产
- 移除 clean-webpack-plugin，改用 prebuild阶段使用 rimraf

## webpack.config.js 抽取可复用配置

- webpack-merge
- chalk - 终端打印颜色
- webpack 环境变量配置 - https://webpack.js.org/guides/environment-variables/
- webpack 支持函数配置，其中第一个参数为命令行传入的env变量 https://webpack.js.org/configuration/configuration-types/#exporting-a-function