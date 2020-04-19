<template>
  <v-container fluid>
    <v-list>
      <FollowItem v-for="(follower, index) in followers" :key="index" v-bind:follow="follower" />
    </v-list>
  </v-container>
</template>

<script>
import FollowItem from "./shared/FollowItem";
export default {
  components: {
    FollowItem
  },
  data: () => ({
    followers: [
      {
        image:
          "https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg",
        firstname: "Karla",
        lastname: "Perez",
        username: "Karlap@gmail.com",
        followed: false
      }
    ]
  })
};
</script>