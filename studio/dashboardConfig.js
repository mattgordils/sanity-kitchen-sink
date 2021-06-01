export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'gatsby',
      options: { sites: [{ siteUrl: "https://preview-sanitykitchensinkmain78452.gtsb.io/" }] },
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60b3ea1634bb14e451b55e10',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-23zrqd96',
                  apiId: 'd734af23-fe9f-4fd5-b96b-1d5971311305'
                },
                {
                  buildHookId: '60b3ea16b917fbe006810f97',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q31qefoe',
                  apiId: 'ed25d5d5-3298-4d86-9805-2bf7b64ed208'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mattgordils/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q31qefoe.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
