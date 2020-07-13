<template>
  <v-container fluid>
    <v-list>
      <follow-item
        v-for="(item, index) in seguidores"
        :key="index"
        :follow="item"
      />
    </v-list>
  </v-container>
</template>

<script>
/* eslint-disable */
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
