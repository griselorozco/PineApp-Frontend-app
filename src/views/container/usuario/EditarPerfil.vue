<!-- eslint-disable -->
<template>
  <v-container id="user-profile" fluid tag="section">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <base-material-card
          color="secondary"
          inline
          title="Edita tu perfil"
          class="px-5 py-3"
        >
          <v-col cols="auto" class="text-center">
            <input ref="file" type="file" class="d-none" @change="onChange" />
            <v-card
              :class="perfil.imagen ? 'success--text' : 'grey--text'"
              class="mx-auto mt-0 d-inline-flex v-card--account"
              outlined
              height="106"
              width="106"
              @click="$refs.file.click()"
            >
              <v-img
                v-if="perfil.imagen"
                :src="perfil.imagen"
                height="100%"
                width="100%"
              />
              <v-icon v-else class="mx-auto" size="96">mdi-account</v-icon>
            </v-card>

            <div class="font-weight-bold grey--text">
              Cambia tu imagen de perfil
            </div>
          </v-col>
          <v-form class="mt-5">
            <v-text-field label="Nombre" v-model="perfil.nombre" />

            <v-text-field label="Apellido" v-model="perfil.apellido" />

            <v-text-field label="Nombre de usuario" v-model="perfil.nick" />

            <v-text-field label="Email" v-model="perfil.correo" />

            <v-textarea
              label="Acerca de ti"
              counter
              v-model="perfil.acerca_de_ti"
            />
            <v-card-actions class="justify-center">
              <v-btn color="success" min-width="100" @click="editarPerfil"
                >Guardar datos</v-btn
              >
            </v-card-actions>
            <br />
            <v-divider />
            <br />
            <p class="font-weight-bold">Información Privada</p>
            <v-text-field label="Nombre" v-model="tarjeta.nombre" />

            <v-select
              :items="tipos_tarjetas"
              label="Selecciona tu tipo de tarjeta"
              v-model="tarjeta.tipo"
            />

            <v-text-field
              label="Fecha de expiración"
              v-model="tarjeta.fechaExpiracion"
            />

            <v-text-field
              label="Codigo de seguridad"
              v-model="tarjeta.codigo"
            />

            <v-img class src="@/assets/tarjetas.png" height="36%" />

            <!-- <v-text-field label="Dirección de facturación" /> -->
            <v-card-actions class="justify-center">
              <v-btn color="success" min-width="100" @click="saveCard"
                >Guardar tarjeta</v-btn
              >
            </v-card-actions>
          </v-form>

          <br />
          <v-divider />
          <br />
          <p class="font-weight-bold">Tarjetas guardadas</p>
          <!-- tsadasdsa -->
          <v-data-table
            :headers="headers"
            :items="tarjetas"
            :sort-by="['id']"
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
                @click="removeCard(item)"
              >
                <v-icon small v-text="'mdi-delete'" />
              </v-btn>
            </template>
          </v-data-table>

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
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    tarjeta: {},
    imagenValue: null,
    tipos_tarjetas: ["Visa", "Master Card", "American Express", "Diners Club"],
    perfil: {},
    headers: [
      {
        text: "ID",
        value: "id"
      },
      {
        text: "Numero de tarjeta",
        value: "number"
      },
      {
        sortable: false,
        text: "Acciones",
        value: "actions"
      }
    ],
    items: [
      { id: 1, number: "4360-4869-4207-9986" },
      { id: 2, number: "4801-5987-9541-1830" }
    ]
  }),
  methods: {
    ...mapActions(["updatePerfil", "updateImagenPerfil", "agregarTarjeta"]),
    ...mapGetters(["usuarioGetter", "tarjetasGetter", "eliminarTarjeta"]),
    async onChange(val) {
      this.imagenValue = val.target.files[0];
      this.perfil.imagen = URL.createObjectURL(this.imagenValue);
    },
    async editarPerfil() {
      this.$swal({
        title: `¿Estás seguro que quieres actualizar tus datos?`,
        text: "Esta acción no tiene vuelta atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then(async result => {
        if (result.value) {
          const resp = await this.updatePerfil(this.perfil);
          if (resp.ok && this.imagenValue) {
            const imagen_resp = await this.editarImagen();
            if (imagen_resp.ok) {
              this.$swal({
                title: "¡Perfil actualizado con Éxito!",
                icon: "success"
              });
            }
          } else {
            if (resp.ok)
              this.$swal({
                title: "¡Perfil actualizado con Éxito!",
                icon: "success"
              });
          }
        }
      });
    },
    async saveCard() {
      this.$swal({
        title: `¿Estás seguro que quieres guardar la tarjeta?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then(async result => {
        if (result.value) {
          const resp = await this.agregarTarjeta(this.tarjeta);
          if (resp) {
            this.$swal({
              title: "Tarjeta agreada con Éxito!",
              icon: "success"
            });
          } else {
            if (resp.ok)
              this.$swal({
                title: "¡Error al guardar la tarjeta!",
                icon: "error"
              });
          }
        }
      });
    },
    async removeCard(tarjeta) {
      this.$swal({
        title: `¿Estás seguro que quieres eliminar la tarjeta?`,
        text: "Esta acción no tiene vuelta atrás",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then(async result => {
        if (result.value) {
          const resp = await this.eliminarTarjeta(tarjeta._id);
          if (resp) {
            this.$swal({
              title: "Tarjeta eliminada con Éxito!",
              icon: "success"
            });
          } else {
            if (resp.ok)
              this.$swal({
                title: "¡Error al eliminar la tarjeta!",
                icon: "error"
              });
          }
        }
      });
    },
    async editarImagen() {
      let formData = new FormData();
      formData.append("image", this.imagenValue);
      const resp = await this.updateImagenPerfil(formData);
      return resp;
    },
    validateForm(scope) {
      return this.$validator.validateAll(scope);
    }
  },
  computed: {
    tarjetas() {
      return this.tarjetasGetter();
    }
  },
  created() {
    this.perfil = this.usuarioGetter();
  }
};
</script>
