<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <h1 class="text-center display-3 font-weight-light">
      Estadísticas
    </h1>
    <v-row justify="center">
      <!-- Personas con mas dinero -->
      <v-col
        cols="12"
        md="6"
        class="mt-10"
      >
        <base-material-card
          title="Usuarios con más ingresos"
        >
          <v-simple-table
            class="ml-2"
          >
            <tbody>
              <tr
                v-for="(usuario, i) in usuarios_mas_ingresos"
                :key="i"
              >
                <td v-text="i+1" />
                <td v-text="usuario.perfil_id.nick" />
                <td>
                  {{ usuario.monto }}$
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
      <img
        src="@/assets/cara-gato.png"
        height="100"
      >
      <v-col
        cols="12"
        md="6"
        class="mt-10"
      >
        <base-material-card
          title="Usuarios con más seguidores"
        >
          <v-simple-table
            class="ml-2"
          >
            <tbody>
              <tr
                v-for="(item, i) in usuarios_mas_seguidores"
                :key="i"
              >
                <td v-text="i+1" />
                <td v-text="item.perfil_id.nick" />
                <td v-if="item.perfil_id.seguidores.length <= 1">
                  {{ item.perfil_id.seguidores.length }} Seguidor
                </td>
                <td v-else>
                  {{ item.perfil_id.seguidores.length }} Seguidores
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { getDineroAll } from '../../../api/modules'
  export default {
    data: () => ({
      usuarios_mas_ingresos: [],
      usuarios_mas_seguidores: [],
    }),
    mounted () {
      this.loadData()
    },
    methods: {
      async loadData () {
        const serviceResponse = await getDineroAll()
        if (serviceResponse.ok === true) {
          this.usuarios_mas_ingresos = serviceResponse.dinero
        } else {
          console.log(serviceResponse)
          this.$swal({
            title: '¡ERROR!',
            html: serviceResponse.mensaje.text,
            icon: 'error',
          })
        }
        this.usuarios_mas_seguidores = this.usuarios_mas_ingresos.sort(function (a, b) {
          if (a.perfil_id.seguidores.length > b.perfil_id.seguidores.length) {
            return -1
          }
          if (a.perfil_id.seguidores.length < b.perfil_id.seguidores.length) {
            return 1
          }
          return 0
        })
      },
    },
  }
</script>
