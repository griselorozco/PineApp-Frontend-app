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
          color="secondary"
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
            <br>
            <v-divider />
            <br>
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

          <br>
          <v-divider />
          <br>
          <p class="font-weight-bold">
            Tarjetas guardadas
          </p>
          <!-- tsadasdsa -->
          <v-data-table
            :headers="headers"
            :items="items"
            :sort-by="[ 'id']"
            :sort-desc="[false]"
            multi-sort
            class="elevation-1"
            hide-default-header
            hide-default-footer
            disable-pagination
          >
            <template v-slot:item.actions="{ item }">
              <v-btn
                color="red"
                fab
                class="px-1 ml-1"
                x-small
                @click="eliminarTarjeta(item)"
              >
                <v-icon
                  small
                  v-text="'mdi-delete'"
                />
              </v-btn>
            </template>
          </v-data-table>

          <v-card-actions class="justify-center">
            <v-btn
              color="success"
              min-width="100"
            >
              Guardar
            </v-btn>
          </v-card-actions>
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
      image: null,
      tipos_tarjetas: ['Visa', 'Master Card', 'American Express', 'Diners Club'],
      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Numero de tarjeta',
          value: 'number',
        },
        {
          sortable: false,
          text: 'Acciones',
          value: 'actions',
        },
      ],
      items: [
        { id: 1, number: '4360-4869-4207-9986' },
        { id: 2, number: '4801-5987-9541-1830' },
      ],
    }),
    methods: {
      eliminarTarjeta (item) {
        this.$swal({
          title: `¿Estás seguro que quieres eliminar la tarjeta ${item.number}?`,
          text: 'Esta acción no tiene vuelta atrás',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar',
        }).then((result) => {
          if (result.value) {
            this.$swal({
              title: '¡Tarjeta eliminada con Éxito!',
              icon: 'success',
            })
          }
        })
      },
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
