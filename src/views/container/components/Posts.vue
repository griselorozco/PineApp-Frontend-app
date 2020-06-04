<template>
  <v-container fluid>
    <post
      v-for="(post, index) in posts"
      :key="index"
      :post="post"
    />
  </v-container>
</template>
<script>
  import Post from './shared/Post'
  export default {
    components: {
      Post,
    },
    data: () => ({
      posts: [
        {
          image:
            'https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg',
          title: '¿Te gusta la elegancia?',
          description:
            'Me costo poner esta foto porque expreso mis sentimientos de manera vergonzosa 🤣🤢😢',
          user: 'De silviobig96',
          likes: 6000,
          comments: 2600,
        },
        {
          image:
            'https://thumbs.dreamstime.com/z/hombre-en-un-yate-hermosa-vista-de-arco-seaward-navegaci%C3%B3n-filas-yates-lujo-el-muelle-del-puerto-deportivo-vacaciones-verano-y-110311869.jpg',
          title: 'Bendecido y afortunado',
          description: 'Amo la vida',
          user: 'De silviobig96',
          likes: 7000,
          comments: 10000,
        },
      ],
    }),
  }
</script>
