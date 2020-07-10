<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row>
      <!-- <v-col cols="12">
        <base-material-card
          icon="mdi-earth"
          title="Global Sales by Top Locations"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="mt-10"
            >
              <v-simple-table
                class="ml-2"
              >
                <tbody>
                  <tr
                    v-for="(sale, i) in sales"
                    :key="i"
                  >
                    <td>
                      <v-img
                        :src="sale.flag"
                        width="18"
                      />
                    </td>
                    <td v-text="sale.country" />
                    <td v-text="sale.salesInM" />
                    <td v-text="((sale.salesInM / totalSales) * 100).toFixed(2) + '%'" />
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-world-map
                :country-data="countryData"
                high-color="#838383"
                low-color="#BBBBBB"
              />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col>-->

      <!--     <v-col
        cols="12"
      >
        <div
          class="font-weight-light mt-1"
          style="color:#3c4858; font-size: 25px"
        >
          Manage Listings
        </div>
      </v-col>-->

      <v-col sm="12" md="4" v-for="(publicacion, index) in publicaciones.publicaciones" :key="index" >
        <base-material-card color="transparent" image hover-reveal>
          <template v-slot:image>
            <v-img  v-bind:src="imagenUrl+publicacion.imagen"> </v-img>
          </template>

              {{user}}
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" class="mx-1" color="primary" @click.prevent="darLike(publicacion._id)" light icon v-on="on">
                  <v-icon class="primary--text">mdi-heart</v-icon>
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
                  <v-icon class="secondary--text">mdi-chat</v-icon>
                </v-btn>
              </template>

              <span>Comentarios</span>
            </v-tooltip>
            <v-tooltip bottom v-if="perfil._id==publicacion.perfil_id._id">
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
                  <v-icon class="primary--text">mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Editar</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">{{publicacion.titulo}}</v-card-title>

          <v-card-text
            class="body-1 text-center mb-3 font-weight-light grey--text"
          >{{publicacion.descripcion}}</v-card-text>
          <span class="body-1 text-left mb-3 font-weight-light grey--text">De {{publicacion.perfil_id.nick}}</span>

          <div class="text-right mt-n8">
            <v-bottom-sheet v-model="sheet" inset>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-sheet class="text-center" height="200px">
                <v-btn class="mt-6" text color="error" @click="sheet = !sheet">Cerrar</v-btn>
                <div class="my-3">
                  <v-list>
                    <v-list-item v-for="tile in tiles" :key="tile.title" @click="sheet = false">
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
              <v-icon color="primary">mdi-heart</v-icon>{{publicacion.cantidadLike}}
            </span>

            <v-spacer/>

            <router-link :to="'/coments/comentarios/'+publicacion._id">
              <div class="display-1 font-weight-light grey--text">
                <v-icon color="secondary">mdi-chat</v-icon>{{publicacion.comentarios.length}} Comentarios
              </div>
            </router-link>
          </template>
        </base-material-card>
      </v-col>

      
      
      <v-fab-transition>
        <v-btn fab dark fixed color="secondary" bottom right large @click="crearPublicacion()">
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </v-fab-transition>
    </v-row>
  </v-container>
</template>

<script>

import {getPublicaciones,like } from '@/api/modules'
 import { mapState } from 'vuex'
export default {
  name: "DashboardDashboard",
  computed: {
    
    ...mapState(['user'])
  },

  data() {
    return {
      perfil:'',
      tiles: [
        { icon: "mdi-alert-octagon", title: "Denunciar Post" },
        { icon: "mdi-account-minus", title: "Dejar de seguir" }
      ],
      sheet: false,
      publicacion:{
        ok:false,
        mensaje:'',
        publicaciones:[],
        like:false
      },
      publicaciones:[],
      imagenUrl:'http://localhost:3004/public/upload/'
    };
  },

  async created() {

    this.perfil = JSON.parse(localStorage.getItem('perfil'))
    

    const serviceResponse = await getPublicaciones()
    if ( serviceResponse.ok === true) {
      console.log(serviceResponse)
      this.publicaciones=serviceResponse
      const publicacion=this.publicaciones.publicaciones
      console.log(this.publicaciones)

        }else{
          console.log(serviceResponse)
          this.$swal({
            title: '¡ERROR!',
            html:  serviceResponse.mensaje.text,
            icon: 'error',
          })
        }
    
   

  },

  methods: {
    crearPublicacion() {
      this.$router.push({
        name: "Create Post",
        params: {
          opcion: 1 // opcion 1 para crear
        }
      });
    },


   async darLike(publicacionId){
  
      const publicacion = await like(publicacionId)
      
        if (publicacion.ok === true) {
         

          const publi =  this.publicaciones.publicaciones
          for (let i = 0; i < publi.length; i++) {
           
            if(JSON.stringify(publi[i]['_id'])==JSON.stringify(publicacion.publicacion._id)){
                 publi[i]['cantidadLike']=publicacion.publicacion.cantidadLike
                 if(publicacion.like==true){
                   publicacion.publicacion.cantidadLike
                 }
            }

          }

        }else{
          console.log(publicacion)
          this.$swal({
            title: '¡ERROR!',
            html: publicacion.mensaje.text,
            icon: 'error',
          })
        }
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
