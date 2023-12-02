module.exports = {
    title: 'C++ Plus Documention',
    description: 'C++ Plus Documention',
    locales: {
      '/en_US/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator'
      },
      '/zh_CN/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器'
      }
    },
    // Auto redirect.
    head: [
      ['script', {}, require("./lang-redirect.js").script],
    ],
  }
