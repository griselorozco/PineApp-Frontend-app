<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="success"
          inline
          title="Edita tu perfil"
          class="px-5 py-3"
        >
          <v-col
            cols="auto"
            class="text-center"
          >
            <input
              ref="file"
              type="file"
              class="d-none"
              @change="onChange"
            >
            <v-card
              :class="image ? 'success--text' : 'grey--text'"
              class="mx-auto mt-0 d-inline-flex v-card--account"
              outlined
              height="106"
              width="106"
              @click="$refs.file.click()"
            >
              <v-img
                v-if="image"
                :src="image"
                height="100%"
                width="100%"
              />
              <v-icon
                v-else
                class="mx-auto"
                size="96"
              >
                mdi-account
              </v-icon>
            </v-card>

            <div class="font-weight-bold grey--text">
              Cambia tu imagen de perfil
            </div>
          </v-col>
          <v-form class="mt-5">
            <v-text-field label="Nombre" />

            <v-text-field label="Apellido" />

            <v-text-field label="Nombre de usuario" />

            <v-text-field label="Email" />

            <v-textarea
              label="Acerca de ti"
              counter
            />

            <v-divider />

            <p class="font-weight-bold">
              Información Privada
            </p>
            <v-text-field label="Nombre" />

            <v-select
              :items="tipos_tarjetas"
              label="Selecciona tu tipo de tarjeta"
            />

            <v-text-field label="Fecha de expiración" />

            <v-text-field label="Codigo de seguridad" />

            <v-img
              class=""
              src="@/assets/tarjetas.png"
              height="36%"
            />

            <v-text-field label="Dirección de facturación" />
          </v-form>

          <v-card-actions class="justify-center">
            <v-btn
              color="success"
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
    data: () => ({
      image: null,
      tipos_tarjetas: ['Visa', 'Master Card', 'American Express', 'Diners Club'],
    }),
    methods: {
      onChange (val) {
        const value = val.target.files[0]

        if (!value) return (this.image = null)

        this.image = URL.createObjectURL(value)
      },
      validateForm (scope) {
        return this.$validator.validateAll(scope)
      },
    },
  }
</script>
