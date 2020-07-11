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
  import { getPublicacionesUser } from '@/api/modules'
  import Post from './shared/Post'
  export default {
    components: {
      Post,
    },
    data: () => ({
      posts: [],
    }),
    created () {
      this.buscarPublicaciones()
    },
    methods: {

      async buscarPublicaciones () {
        const serviceResponse = await getPublicacionesUser()
        if (serviceResponse.ok === true) {
          this.posts = serviceResponse.publicacions
          console.log(this.posts)
        } else {
          console.log(serviceResponse)
          this.$swal({
            title: '¡ERROR!',
            html: serviceResponse.mensaje.text,
            icon: 'error',
          })
        }
      },
    },

  }
</script>
