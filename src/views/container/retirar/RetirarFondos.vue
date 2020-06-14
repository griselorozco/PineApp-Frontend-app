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
          title="Retira tus fondos"
          class="px-5 py-3"
        >
          <v-col
            cols="auto"
            class="text-center"
          >
            <v-subheader class="display-1 mt-3">
              Elige tu tarjeta para recibir tu pago
            </v-subheader>
            <v-form class="pt-1">
              <v-row>
                <v-col
                  cols="12"
                  lg="3"
                >
                  <v-radio-group
                    column
                    class="ml-4 mt-0"
                    row
                  >
                    <v-radio
                      label="4360-4869-4207-9986"
                      value="radio-1"
                    />
                    <v-icon>mdi-card</v-icon>

                    <v-radio
                      label="4801-5987-9541-1830"
                      value="radio-2"
                    />
                    <v-icon>mdi-card</v-icon>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-form>
          </v-col>

          <v-card-actions class="justify-center">
            <v-btn
              color="success"
              min-width="100"
              @click="procesarPago()"
            >
              Enviar pago
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

    }),
    methods: {
      procesarPago: function () {
        this.$swal({
          title: '¿Estás seguro que quieres procesar tu pago?',
          text: 'Esta acción no tiene vuelta atrás',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Confirmar',
        }).then((result) => {
          if (result.value) {
            this.$swal(
              '¡Pago procesado con Éxito!',
              'El pago llegará a su cuenta dentro las próximas 48 horas',
              'success',
            )
          }
        })
      },
    },
  }
</script>
