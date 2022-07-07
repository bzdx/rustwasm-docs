/*
 * @Description: ==================  =================
 * @Date: 2022-07-07 16:46:55
 * @Author: Zero
 * @FilePath: \rustwasm-docs\docs\.vuepress\config.js
 * @LastEditors: Zero
 * @LastEditTime: 2022-07-07 18:01:09
 */
module.exports = {
  base: '/wasm/',
  title: 'rust wasm',
  description: 'rust wasm 中文文档',
  themeConfig: {
    sidebar: [
      {
        title: '0、前言',
        path: '/0_preview/',
        collapsable: false,
        sidebarDepth: 3
      },
      {
        title: '1、简介',
        path: '/01_introduction/',
        collapsable: false,
        sidebarDepth: 3
      },
      {
        title: '2、为什么选择rust和WebAssembly？',
        path: '/02_why/',
        collapsable: false,
        sidebarDepth: 3,
        children: [
        ]
      },
      {
        title: '3、背景和概念',
        path: '/03_background/',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          {
            title: '3.1、WebAssembly是什么？',
            path: '/03_background/',
          },
        ]
      },
      {
        title: '4、教程',
        path: '/04_tutorial/',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          {
            title: '4.1、设置',
            path: '/03_background/',
          },
          {
            title: '4.2、Hello World',
            path: '/03_background/',
          },
        ]
      },
      {
        title: '5、参考',
        path: '/05_reference/',
        collapsable: false,
        sidebarDepth: 3,
        children: [
          {
            title: '5.1、你应该知道的Crates',
            path: '/03_background/',
          },
          {
            title: '5.2、你应该知道的工具',
            path: '/03_background/',
          },
        ]
      }
    ]
  }
}