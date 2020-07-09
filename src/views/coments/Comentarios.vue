<template>
  <v-container
    fluid
    class="mt-n12"
  >
    <v-row
      justify="center"
      class="mt-n12"
    >
     {{user}}
      <v-col
        v-for="(item, index) in comentarios"
        :key="index"
        cols="12"
        md="6"
      >
       
        <v-list-item three-line>
          <v-list-item-content>
            <router-link
              :to="{
                to: 'app/user',
              }"
              style="color:#000000;"
            >
              <v-list-item-title
                class="headline"
              >
                <h6>{{ item.perfil_id.nick }}</h6>
              </v-list-item-title>
            </router-link>

            <v-list-item-subtitle>
              {{ item.fecha }}
            </v-list-item-subtitle>
            <span>{{ item.comentario }}</span>
          </v-list-item-content>

          <v-btn
            icon
            @click.prevent="eliminarComentario(item._id)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item>
        <v-divider />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {getPublicacion} from '@/api/modules'
import {destroyComentario} from '@/api/modules'
import {mapState} from "vuex"
  export default {
    namw:'Comentario',

    computed: {
      ...mapState(['user'])
    },
    

    data: () => ({
    
      comentarios: [],
      publicacion:''

    }),
    async created() {
      const  serviceResponse= await getPublicacion(this.$route.params.id)
      if ( serviceResponse.ok === true) {
        this.comentarios=serviceResponse.publicacion.comentarios
        console.log(this.comentarios)
        }else{
          console.log(serviceResponse)
          this.$swal({
            title: '¡ERROR!',
            html:  serviceResponse.mensaje.text,
            icon: 'error'
          })
        }

     /* this.publicacion= coment*/
    },
    methods: {
      async eliminarComentario(comentarioId){

          this.$swal({
            title: '¿Estás seguro de que deseas eliminar este comentario?',
            text: 'Su comentario será eliminado de la publicación',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
          }).then(async (result) => {
            if (result.value) {
              
              const  serviceResponse= await destroyComentario(this.$route.params.id,comentarioId)

              if (serviceResponse.ok === true) {  

              const index = this.comentarios.findIndex(item=> item._id=== comentarioId)
                this.comentarios.splice(index,1)

                this.$swal(
                  '¡Comentario eliminado con éxito!',
                  'success',
                )

              } else {
                console.log(serviceResponse)
                this.$swal({
                  title: '¡ERROR!',
                  html: serviceResponse.mensaje.text,
                  icon: 'error',
                })
              }
            }
          })

      }
  }
  }

</script>

<style>
a {  text-decoration: none;}
</style>
