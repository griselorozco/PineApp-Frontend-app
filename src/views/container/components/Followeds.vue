<template>
  <v-container fluid>
    <v-list>
      <follow-item
        v-for="(followed, index) in followeds"
        :key="index"
        :follow="followed"
      />
    </v-list>
  </v-container>
</template>

<script>
  import FollowItem from './shared/FollowItem'
  export default {
    components: {
      FollowItem,
    },
    data: () => ({
      followeds: [
        {
          image:
            'https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg',
          firstname: 'Karla',
          lastname: 'Perez',
          username: 'Karlap@gmail.com',
          followed: true,
        },
      ],
    }),
  }
</script>
