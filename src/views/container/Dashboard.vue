<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-sheet
      color="primary"
      class="text-start v-card--material__heading mt-9 pa-4"
      shaped
      elevation="0"
    >
      <v-tabs
        v-model="tabs"
        background-color="primary"
        slider-color="white"
        color="primary"
        show-arrows
      >
        <v-tab class="white--text">
          <h5 class="mr-n3">
            Publicaciones
          </h5>
        </v-tab>
        <v-tab
          class="ml-5 white--text"
        >
          <h5>Publicaciones de tus seguidores</h5>
        </v-tab>
      </v-tabs>
    </v-sheet>
    <v-tabs-items
      v-model="tabs"
      class="transparent"
    >
      <v-tab-item :kei="0">
        <v-row>
          <v-col
            v-for="(publicacion, index) in publicaciones.publicaciones"
            :key="index"
            sm="12"
            md="4"
          >
            <base-material-card
              color="transparent"
              image
              hover-reveal
            >
              <template v-slot:image>
                <v-img :src="imagenUrl+publicacion.imagen" />
              </template>

              {{ user }}
              <template v-slot:reveal-actions>
                <v-tooltip bottom>
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      v-bind="attrs"
                      class="mx-1"
                      color="primary"
                      light
                      icon
                      @click.prevent="darLike(publicacion._id)"
                      v-on="on"
                    >
                      <v-icon class="primary--text">
                        mdi-heart
                      </v-icon>
                    </v-btn>
                  </template>

                  <span>Me gusta</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      v-bind="attrs"
                      class="mx-1"
                      color="success"
                      light
                      icon
                      v-on="on"
                      @click="$router.push('/coments/comentarios/'+publicacion._id)"
                    >
                      <v-icon class="secondary--text">
                        mdi-chat
                      </v-icon>
                    </v-btn>
                  </template>

                  <span>Comentarios</span>
                </v-tooltip>
                <v-tooltip
                  v-if="perfil._id==publicacion.perfil_id._id"
                  bottom
                >
                  <template v-slot:activator="{ attrs, on }">
                    <v-btn
                      v-bind="attrs"
                      class="mx-1"
                      color="primary"
                      light
                      icon
                      v-on="on"
                      @click="$router.push('/app/pages/create_post/'+publicacion._id)"
                    >
                      <v-icon class="primary--text">
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                  </template>

                  <span>Editar</span>
                </v-tooltip>
              </template>

              <v-card-title class="justify-center font-weight-light">
                {{ publicacion.titulo }}
              </v-card-title>

              <v-card-text
                class="body-1 text-center mb-3 font-weight-light grey--text"
              >
                {{ publicacion.descripcion }}
              </v-card-text>
              <span class="body-1 text-left mb-3 font-weight-light grey--text">De {{ publicacion.perfil_id.nick }}</span>

              <div class="text-right mt-n8">
                <v-bottom-sheet
                  v-model="sheet"
                  inset
                >
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      v-on="on"
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-sheet
                    class="text-center"
                    height="200px"
                  >
                    <v-btn
                      class="mt-6"
                      text
                      color="error"
                      @click="sheet = !sheet"
                    >
                      Cerrar
                    </v-btn>
                    <div class="my-3">
                      <v-list>
                        <v-list-item
                          v-for="tile in tiles"
                          :key="tile.title"
                          @click="sheet = false"
                        >
                          <v-list-item-avatar>
                            <v-avatar tile>
                              <v-icon>{{ tile.icon }}</v-icon>
                            </v-avatar>
                          </v-list-item-avatar>
                          <v-list-item-title>{{ tile.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </div>
                  </v-sheet>
                </v-bottom-sheet>
              </div>

              <template v-slot:actions>
                <span class="body-1 text-center mb-3 font-weight-light grey--text">
                  <v-icon color="primary">mdi-heart</v-icon>{{ publicacion.cantidadLike }}
                </span>

                <v-spacer />

                <router-link :to="'/coments/comentarios/'+publicacion._id">
                  <div class="display-1 font-weight-light grey--text">
                    <v-icon color="secondary">
                      mdi-chat
                    </v-icon>{{ publicacion.comentarios.length }} Comentarios
                  </div>
                </router-link>
              </template>
            </base-material-card>
          </v-col>

          <v-fab-transition>
            <v-btn
              fab
              dark
              fixed
              color="secondary"
              bottom
              right
              large
              @click="crearPublicacion()"
            >
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-row>
      </v-tab-item>
      <v-tab-item :kei="1">
        <p>hola</p>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
  /* eslint-disable */
  import { getPublicaciones, like } from '@/api/modules'
  import { mapState } from 'vuex'
  export default {
    name: 'DashboardDashboard',
    data () {
      return {
        perfil: '',
        tiles: [
          { icon: 'mdi-alert-octagon', title: 'Denunciar Post' },
          { icon: 'mdi-account-minus', title: 'Dejar de seguir' },
        ],
        sheet: false,
        publicacion: {
          ok: false,
          mensaje: '',
          publicaciones: [],
          like: false,
        },
        publicaciones: [],
        imagenUrl: 'http://localhost:3004/public/upload/',
        tabs: 0,
      }
    },
    computed: {

      ...mapState(['user']),
    },
    /* eslint-disable vue/no-template-shadow */
    async created () {
      this.perfil = JSON.parse(localStorage.getItem('perfil'))

      const serviceResponse = await getPublicaciones()
      if (serviceResponse.ok === true) {
        console.log(serviceResponse)
        this.publicaciones = serviceResponse
        // eslint-disable-next-line no-unused-vars
        const publicacion = this.publicaciones.publicaciones
        console.log(this.publicaciones)
      } else {
        console.log(serviceResponse)
        this.$swal({
          title: '¡ERROR!',
          html: serviceResponse.mensaje.text,
          icon: 'error',
        })
      }
    },

    methods: {
      crearPublicacion () {
        this.$router.push({
          name: 'Create Post',
          params: {
            opcion: 1, // opcion 1 para crear
          },
        })
      },

      async darLike (publicacionId) {
        const publicacion = await like(publicacionId)

        if (publicacion.ok === true) {
          const publi = this.publicaciones.publicaciones
          for (let i = 0; i < publi.length; i++) {
            if (JSON.stringify(publi[i]._id) === JSON.stringify(publicacion.publicacion._id)) {
              publi[i].cantidadLike = publicacion.publicacion.cantidadLike
              if (publicacion.like === true) {
                // eslint-disable-next-line no-unused-expressions
                publicacion.publicacion.cantidadLike
              }
            }
          }
        } else {
          console.log(publicacion)
          this.$swal({
            title: '¡ERROR!',
            html: publicacion.mensaje.text,
            icon: 'error',
          })
        }
      },
    },
  }
</script>

<style>
a {
  text-decoration: none;
}
</style>

<style lang="sass">
.v-tabs-bar
  .v-slide-group__wrapper
    overflow: hidden !important
    display: -webkit-inline-box
    contain: inherit
    .v-slide-group__content
      z-index: 2
  .v-tab:not(:first-child)
      margin-left: 5px
</style>
