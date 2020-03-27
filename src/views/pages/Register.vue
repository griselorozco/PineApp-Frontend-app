<template>
  <v-container
    id="login"
    class="fill-height"
    tag="section"
  >
    <v-btn
      class="mt-10"
      fab
      small
      color="secondary"
      absolute
      left
      top
      @click="$router.go(-1)"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-img
      class="mt-n12 mb-n12"
      src="@/assets/logo2.png"
      height="36%"
    />
    <v-row
      justify="center"
      class="mt-n12"
    >
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="primary"
          icon="mdi-account-plus"
          title="Registra tus datos"
          class="px- py-3"
        >
          <v-form class="mt-5">
            <v-text-field label="Correo" />

            <v-text-field
              type="password"
              label="Contraseña"
              class="pt-0"
            />
          </v-form>

          <v-card-actions class="justify-center">
            <v-btn
              color="secondary"
              min-width="100"
            >
              Guardar
            </v-btn>
          </v-card-actions>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PagesLogin',

    data: () => ({
    }),
  }
</script>
