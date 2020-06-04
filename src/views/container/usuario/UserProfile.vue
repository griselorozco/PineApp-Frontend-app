<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              Miembro desde 27/01/2020
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Mike tyson
            </h4>
            <p
              class="font-weight-light grey--text"
            >
              Programador en jefe / experto en mercadeo
            </p>
            <v-btn
              color="success"
              rounded
              class="mr-0"
              @click="$router.push('/app/user/edit')"
            >
              <v-icon>mdi-pencil</v-icon>
              Editar Perfil
            </v-btn>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
    <v-tabs
      v-model="tab"
      background-color="white"
      color="success"
      centered
    >
      <v-tab
        v-for="item in items"
        :key="item"
        style="color: black; font-size:x-small"
        v-text="item"
      />
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="component in components"
        :key="component"
      >
        <component :is="component" />
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
  import Posts from '../components/Posts'
  import Followers from '../components/Followers'
  import Followeds from '../components/Followeds'
  export default {
    components: {
      Posts,
      Followers,
      Followeds,
    },
    data: () => ({
      tab: null,
      items: ['Publicaciones', 'Seguidores', 'Seguidos'],
      components: ['Posts', 'Followers', 'Followeds'],
    }),
  }
</script>
