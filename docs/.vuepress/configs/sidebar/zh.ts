import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/font-end/': [
    {
      text: '前端基础',
      collapsible: true,
      children: ['/font-end/basic/01.md', '/font-end/basic/02.md']
    },
    {
      text: 'vuepress笔记',
      collapsible: true,
      children: ['/font-end/vuepress/01.md']
    },
    {
      text: '八股文：HTML',
      collapsible: true,
      children: [
        '/font-end/HTML/01.md',
        '/font-end/HTML/02.md',
        '/font-end/HTML/03.md',
        '/font-end/HTML/04.md',
        '/font-end/HTML/05.md',
        '/font-end/HTML/06.md'
      ]
    }
  ],
  '/vue/': [
    {
      text: 'vue基础',
      collapsible: true,
      children: ['/vue/basic/01.md']
    }
  ],
  '/mini-program/': [
    {
      text: '小程序',
      collapsible: true,
      children: ['/mini-program/basic/01.md']
    }
  ],
  '/more/': [
    {
      text: '其他',
      collapsible: true,
      children: ['/more/todolist.md', '/more/zhp.md']
    }
  ]
}
