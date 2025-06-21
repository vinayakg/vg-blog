interface Tool {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const toolsData: Tool[] = [
  {
    title: 'JWT Tutorial',
    description: `A detailed tutorial on JSON Web Tokens (JWT).`,
    imgSrc: '/static/images/jsonwebtokens-svgrepo-com.svg',
    href: '/tools/jwt-tutorial.html',
  },
  {
    title: 'Tmux Master Guide',
    description: `A comprehensive guide to mastering tmux.`,
    imgSrc: '/static/images/tmux-16-svgrepo-com.svg',
    href: '/tools/tmux-master-guide.html',
  },
  {
    title: 'Vim Shortcuts Tutorial',
    description: `A handy guide to the most useful Vim shortcuts.`,
    imgSrc: '/static/images/vim-svgrepo-com.svg',
    href: '/tools/vim-shortcuts-tutorial.html',
  },
]

export default toolsData
