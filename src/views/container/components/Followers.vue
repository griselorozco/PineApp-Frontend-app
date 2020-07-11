<template>
  <v-container fluid>
    <v-list>
      <follow-item v-for="(follower, index) in perfil.seguidores" :key="index" :follow="follower" />
    </v-list>
  </v-container>
</template>

<script>
import FollowItem from "./shared/FollowItem";
export default {
  components: {
    FollowItem
  },
  data: () => ({}),
  computed: {
    perfil() {
      return this.$store.state.perfil;
    }
  }
};
</script>
