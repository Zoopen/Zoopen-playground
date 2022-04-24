import type { NavbarConfig } from '@vuepress/theme-default'
export const zh: NavbarConfig = [
  { text: '首页', link: '/' },
  {
    text: '前端领域',
    link: '/font-end/basic/01.md',
    activeMatch: '^/font-end/'
  },
  { text: 'Vue学习', link: '/vue/basic/01.md', activeMatch: '^/vue/' },
  {
    text: '小程序学习',
    link: '/mini-program/basic/01.md',
    activeMatch: '^/mini-program/'
  },
  {
    text: '更多',
    ariaLabel: 'More Menu',
    children: [
      {
        text: 'todolist',
        link: '/more/todolist.md',
        activeMatch: '^/more/todolist'
      },
      { text: '杂货铺', link: '/more/zhp.md', activeMatch: '^/more/zhp' }
    ]
  },
  { text: 'GitHub', link: 'https://github.com/zoopen', target: '_blank' }
]
