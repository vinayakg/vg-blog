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
  {
    title: 'JMeter Load Testing Quick Tutorial',
    description: `A quick guide to setting up loads tests on JMeter.`,
    imgSrc: '/static/images/apachejmeter-svgrepo-com.svg',
    href: '/tools/jmeter-load-tests.html',
  },
  {
    title: 'PostgreSQL (psql) Shortcuts Reference',
    description: `Comprehensive guide to psql commands and shortcuts`,
    imgSrc: '/static/images/postgresql-svgrepo-com.svg',
    href: '/tools/postgresql-shortcuts.html',
  },
  {
    title: 'Youtube yt-dlp Command Builder',
    description: `Youtube yt-dlp Command Builder for downloading videos`,
    imgSrc: '/static/images/youtube-168-svgrepo-com.svg',
    href: '/tools/youtube-yt-dlp-command-builder.html',
  },
  {
    title: 'Ripgrep Reference Guide',
    description: `Ripgrep Reference - Fast, powerful file searching with rg`,
    imgSrc: '/static/images/find-svgrepo-com.svg',
    href: '/tools/ripgrep-reference-guide.html',
  },
  {
    title: 'IEEE 754 Floating-Point Visualizer',
    description: `IEEE 754 Floating-Point Visualizer`,
    imgSrc: '/static/images/reduce-decimal-places-svgrepo-com.svg',
    href: '/tools/floating-point-visualiser.html',
  },  
  {
    title: 'Software Architecture Types — Comparison',
    description: `Software Architecture Types — Comparison`,
    imgSrc: '/static/images/reduce-decimal-places-svgrepo-com.svg',
    href: '/tools/software-architectural-types-comparison.html',
  },  
]

export default toolsData
