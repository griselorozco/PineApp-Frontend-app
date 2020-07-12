<template>
  <v-container fluid>
    <v-list>
      <follow-item
        v-for="(follower, index) in seguidores"
        :key="index"
        :follow="follower"
      />
    </v-list>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import FollowItem from "./shared/FollowItem";
export default {
  components: {
    FollowItem
  },
  data: () => ({}),
  methods: {
    ...mapGetters(["seguidoresGetter"])
  },
  computed: {
    seguidores() {
      return this.seguidoresGetter();
    }
  }
};
</script>
