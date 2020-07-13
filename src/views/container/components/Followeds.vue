<template>
  <v-container fluid>
    <v-list>
      <follow-item
        v-for="(item, index) in siguiendo"
        :key="index"
        :follow="item"
      />
    </v-list>
  </v-container>
</template>

<script>
/* eslint-disable */
import FollowItem from "./shared/FollowItem";
import { mapGetters } from "vuex";
export default {
  components: {
    FollowItem
  },
  data: () => ({}),
  methods: {
    ...mapGetters(["seguidosGetter"])
  },
  computed: {
    siguiendo() {
      return this.seguidosGetter();
    }
  }
};
</script>
