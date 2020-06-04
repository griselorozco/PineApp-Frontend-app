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
      <v-col
        cols="12"
        md="6"
        class="mt-10"
      >
        <base-material-card
          title="Países con mas me gusta"
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
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>

      <img
        src="@/assets/cara-gato.png"
        height="100"
      >

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
                v-for="(usuario, i) in usuarios"
                :key="i"
              >
                <td v-text="i+1" />
                <td v-text="usuario.nombre_usuario" />
                <td v-text="usuario.dinero" />
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      sales: [
        {
          country: 'USA',
          flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
          salesInM: '2920 Me gusta',
        },
        {
          country: 'Germany',
          flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png',
          salesInM: '1300 Me gusta',
        },
        {
          country: 'Australia',
          flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png',
          salesInM: '760 Me gusta',
        },
        {
          country: 'United Kingdom',
          flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
          salesInM: '690 Me gusta',
        },
        {
          country: 'Romania',
          flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png',
          salesInM: '600 Me gusta',
        },
        {
          country: 'Brasil',
          flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
          salesInM: '550 Me gusta',
        },
      ],
      usuarios: [
        {
          nombre_usuario: 'griselorozco',
          dinero: '4500 $',
        },
        {
          nombre_usuario: 'michell_crespo',
          dinero: '2300 $',
        },
        {
          nombre_usuario: 'Carlos_P_e_r_e_z',
          dinero: '1204 $',
        },
        {
          nombre_usuario: 'pedro_camejillo',
          dinero: '1023 $',
        },
        {
          nombre_usuario: 'JhonElAlto96',
          dinero: '523 $',
        },
      ],
    }),
  }
</script>
