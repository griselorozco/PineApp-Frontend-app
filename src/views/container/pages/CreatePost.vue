
<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="secondary"
          inline
          :title="titulo"
          class="px-5 py-3"
        >
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-col
              v-if="opcion === 1"
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
                height="auto"
                width="auto"
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
                  mdi-camera
                </v-icon>
              </v-card>

              <div class="font-weight-bold grey--text">
                Coloca una imagen para tu publicación
              </div>
            </v-col>
            <v-text-field
              v-model="post.title"
              :counter="20"
              label="Titulo"
              required
              :rules="[v => !!v || 'Este campo es obligatorio']"
            />

            <v-textarea
              v-model="post.description"
              label="Descripción"
              required
              :rules="[v => !!v || 'Este campo es obligatorio']"
            />

            <v-btn
              :disabled="!valid"
              color="secondary"
              class="mr-4"
              small
              @click="validate"
            >
              Cargar
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              small
              @click="reset"
            >
              Limpiar
            </v-btn>

            <v-btn
              color="warning"
              small
              @click="resetValidation"
            >
              Salir
            </v-btn>
          </v-form>
          <v-fab-transition>
            <v-btn
              fab
              dark
              absolute
              color="secondary"
              right
              top
              class="mt-3 mr-3"
              @click="$router.go(-1)"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-fab-transition>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      post: {
        title: '',
        description: '',
      },
      titulo: '',
      opcion: 0,
      image: null,
    }),

    mounted () {
      this.inicializar()
    },

    methods: {
      inicializar () {
        this.opcion = this.$route.params.opcion
        if (this.opcion === 1) {
          this.titulo = 'Crea tu publicación'
        } else {
          this.titulo = 'Edita tu publicación'
        }
      },
      onChange (val) {
        const value = val.target.files[0]

        if (!value) return (this.image = null)

        this.image = URL.createObjectURL(value)
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
        this.imageURL = ''
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
