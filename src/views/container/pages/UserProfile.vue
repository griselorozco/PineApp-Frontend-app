<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">CEO / CO-FOUNDER</h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">Alec Thompson</h4>
            <p
              class="font-weight-light grey--text"
            >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn color="success" rounded class="mr-0">
              <v-icon>mdi-pencil</v-icon>Edit Profile
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <v-tabs v-model="tab" background-color="white" color="success" centered>
      <v-tab
        v-for="item in items"
        :key="item"
        v-text="item"
        style="color: black; font-size:x-small"
      ></v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="component in components" :key="component">
        <component :is="component"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import Posts from "../components/Posts";
import Followers from "../components/Followers";
import Followeds from "../components/Followeds";
export default {
  components: {
    Posts,
    Followers,
    Followeds
  },
  data: () => ({
    tab: null,
    items: ["Publicaciones", "Seguidores", "Seguidos"],
    components: ["Posts", "Followers", "Followeds"]
  })
};
</script>
