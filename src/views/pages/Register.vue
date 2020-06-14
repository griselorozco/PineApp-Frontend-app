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
            <v-text-field
              label="Nombre"
              :rules="nombre_rules"
            />

            <v-text-field
              label="Apellido"
              :rules="apellido_rules"
            />

            <v-text-field
              label="Nombre de usuario"
              :rules="nombre_usuario_rules"
            />

            <v-text-field
              :type="show1 ? 'text' : 'password'"
              label="Contraseña"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required]"
              hint="Al menos 6 caracteres"
              counter
              required
              @click:append="show1 = !show1"
            />

            <v-text-field
              label="Email"
              :rules="emailRules"
            />

            <v-textarea
              label="Acerca de ti"
              counter
              :rules="acerca_rules"
            />
          </v-form>

          <v-card-actions class="justify-center">
            <v-btn
              color="secondary"
              min-width="100"
              @click="crearUsuario()"
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
      show1: false,
      nombre_rules: [v => !!v || 'Nombre Requerido'],
      apellido_rules: [v => !!v || 'Apellido Requerido'],
      acerca_rules: [v => !!v || 'Acerca de ti Requerido'],
      nombre_usuario_rules: [v => !!v || 'Nombre de usuario Requerido'],
      emailRules: [
        v => !!v || 'E-mail Requerido',
        v => /.+@.+/.test(v) || 'E-mail Debe ser valido @ejemplo.com',
      ],
      rules: {
        required: value => !!value || 'Cotraseña requerida',
        /* min: v => v.length >= 6 || 'Min 6 caracteres', */
      },
    }),
    methods: {
      crearUsuario: function () {
        this.$swal({
          title: '¿Estás seguro de que deseas continuar?',
          text: 'Al confirmar estas aceptando los términos y servicio de PineApp',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar',
        }).then((result) => {
          if (result.value) {
            this.$swal(
              '¡Cuenta creada Exitosamente!',
              'Ahora inicia sesión, ¡Bienvenido a PineApp!',
              'success',
            )
          }
          this.$router.push('/pages/login')
        })
      },
    },
  }
</script>
