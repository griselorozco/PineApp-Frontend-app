<template>
  <v-container
    fluid
    class="mt-n12"
  >
    <v-row
      justify="center"
      class="mt-n12"
    >
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
                <h6>{{ item.nombre_usuario }}</h6>
              </v-list-item-title>
            </router-link>

            <v-list-item-subtitle>
              {{ item.fecha_creacion }}
            </v-list-item-subtitle>
            <span>{{ item.descripcion }}</span>
          </v-list-item-content>

          <v-btn
            icon
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
  export default {
    data: () => ({
      comentarios: [
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'Buen día',
        },
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'Espero les guste',
        },
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'dale like',
        },
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'Deja tu comentario',
        },
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'pronto subiré más Post',
        },
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'Pineapp es una red social diseñada para que puedas ganar dinero por medio de tus publicaciones, pueden ser desde fotos de viajes, arte, tutoriales y mucho más, ¡Deja volar tu imaginación y unete ya!',
        },
        {
          nombre_usuario: 'griselorozco',
          fecha_creacion: '28/11/2020',
          descripcion: 'Pineapp es una red social diseñada para que puedas ganar dinero por medio de tus publicaciones, pueden ser desde fotos de viajes, arte, tutoriales y mucho más, ¡Deja volar tu imaginación y unete ya!',
        },
      ],
    }),
  }
</script>

<style>
a {  text-decoration: none;}
</style>
