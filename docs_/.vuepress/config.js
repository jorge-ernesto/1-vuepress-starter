/**
* Para levantar el proyecto, en el elemento "base" debe ir:
* En desarrollo con XAMPP: /dist-vuepress/1-vuepress-starter/
* En producción con GitHub: /1-vuepress-starter/
*/
module.exports = {
   title: 'Hello VuePress',
   description: 'Just playing around',
   base: '/dist-vuepress/1-vuepress-starter/',
   themeConfig: {
      nav: [         
         { text: 'Inicio', link: '/' },
         { text: 'Guia', link: '/guia/' },
         { text: 'Externo', link: 'https://google.com' },
         {
            text: 'Opciones',
            items: [
               { text: 'Opcion 1', link: '/' },
               { text: 'Opcion 2', link: '/' }
            ]
         }
      ],
      sidebar: {
         '/guia/': [
            '',
            'vuepress-guia'
         ]
      }
   }
}