<template>
  <v-container fluid>
    <v-list>
      <follow-item v-for="(followed, index) in perfil.siguiendo" :key="index" :follow="followed" />
    </v-list>
  </v-container>
</template>

<script>
import FollowItem from "./shared/FollowItem";
import { mapGetters } from "vuex";
export default {
  components: {
    FollowItem
  },
  data: () => ({}),
  methods: {
    ...mapGetters(["usuarioGetter"])
  },
  computed: {
    perfil() {
      return this.usuarioGetter();
    }
  }
};
</script>
