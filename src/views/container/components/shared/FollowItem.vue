<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="follow.image" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title right>
        {{ follow.firstname +" "+ follow.lastname }}
      </v-list-item-title>
      <span
        class="grey--text caption"
        v-text="follow.username"
      />
    </v-list-item-content>

    <v-list-item-icon>
      <v-btn
        x-small
        class="font-weight-light"
        :color="!follow.followed ? 'secundary' : 'success'"
        @click="following(follow)"
      >
        <v-icon
          dark
          left
        >
          {{ !follow.followed ? 'mdi-plus' : 'mdi-check' }}
        </v-icon>
        {{ !follow.followed ? 'Seguir' : 'Seguido' }}
      </v-btn>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
  export default {
    props: ['follow'],
    methods: {
      following (user) {
        user.followed = !user.followed
      },
    },
  }
</script>
