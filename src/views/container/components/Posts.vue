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
import {getPublicacionesUser} from '@/api/modules'
  import Post from './shared/Post'
  export default {
    components: {
      Post,
    },
    data: () => ({
      posts: [],
    })


  }
</script>
