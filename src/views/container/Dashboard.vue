<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <!-- <v-col cols="12">
        <base-material-card
          icon="mdi-earth"
          title="Global Sales by Top Locations"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="mt-10"
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
                    <td v-text="((sale.salesInM / totalSales) * 100).toFixed(2) + '%'" />
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-world-map
                :country-data="countryData"
                high-color="#838383"
                low-color="#BBBBBB"
              />
            </v-col>
          </v-row>
        </base-material-card>
      </v-col> -->

      <!--     <v-col
        cols="12"
      >
        <div
          class="font-weight-light mt-1"
          style="color:#3c4858; font-size: 25px"
        >
          Manage Listings
        </div>
      </v-col> -->

      <v-col
        sm="12"
        md="4"
      >
        <base-material-card
          color="transparent"
          image
          hover-reveal
        >
          <template v-slot:image>
            <v-img
              src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg"
            />
          </template>

          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="primary"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="primary--text">
                    mdi-heart
                  </v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="success"
                  light
                  icon
                  v-on="on"
                  @click="$router.push('/coments/comentarios')"
                >
                  <v-icon class="secondary--text">
                    mdi-chat
                  </v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            ¿Te gusta la elegancia?
          </v-card-title>

          <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
            Me costo poner esta foto porque expreso mis sentimientos de manera vergonzosa 🤣🤢😢
          </v-card-text>
          <span class="body-1 text-left mb-3 font-weight-light grey--text">
            De silviobig96
          </span>

          <div class="text-right mt-n8">
            <v-bottom-sheet
              v-model="sheet"
              inset
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-sheet
                class="text-center"
                height="200px"
              >
                <v-btn
                  class="mt-6"
                  text
                  color="error"
                  @click="sheet = !sheet"
                >
                  Cerrar
                </v-btn>
                <div class="my-3">
                  <v-list>
                    <v-list-item
                      v-for="tile in tiles"
                      :key="tile.title"
                      @click="sheet = false"
                    >
                      <v-list-item-avatar>
                        <v-avatar
                          tile
                        >
                          <v-icon>{{ tile.icon }}</v-icon>
                        </v-avatar>
                      </v-list-item-avatar>
                      <v-list-item-title>{{ tile.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </div>
              </v-sheet>
            </v-bottom-sheet>
          </div>

          <template v-slot:actions>
            <span class="body-1 text-center mb-3 font-weight-light grey--text">
              <v-icon color="primary">mdi-heart</v-icon>
              6000
            </span>

            <v-spacer />

            <router-link
              to="/comentarios"
            >
              <div class="display-1 font-weight-light grey--text">
                <v-icon color="secondary">
                  mdi-chat
                </v-icon>
                2600 Comentarios
              </div>
            </router-link>
          </template>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <base-material-card
          color="transparent"
          image
          hover-reveal
        >
          <template v-slot:image>
            <v-img
              src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg"
            />
          </template>

          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="primary"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="primary--text">
                    mdi-heart
                  </v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="success"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="secondary--text">
                    mdi-chat
                  </v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  class="mx-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            Arte como pintura
          </v-card-title>

          <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
            Realize esta imagen de manera digital les gusta?
          </v-card-text>

          <template v-slot:actions>
            <span class="body-1 text-center mb-3 font-weight-light grey--text">
              <v-icon color="primary">mdi-heart</v-icon>
              12
            </span>

            <v-spacer />

            <div class="display-1 font-weight-light grey--text">
              <v-icon color="secondary">
                mdi-chat
              </v-icon>
              2 Comentarios
            </div>
          </template>
        </base-material-card>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <base-material-card
          color="transparent"
          image
          hover-reveal
        >
          <template v-slot:image>
            <v-img
              src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg"
            />
          </template>

          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="primary"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="primary--text">
                    mdi-heart
                  </v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  class="mx-1"
                  color="success"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon class="secondary--text">
                    mdi-chat
                  </v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  class="mx-1"
                  v-bind="attrs"
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            una foto genial!
          </v-card-title>

          <v-card-text class="body-1 text-center mb-3 font-weight-light grey--text">
            Miren mi orden :3 #Ordenado #Cool #SoyGenial
          </v-card-text>

          <template v-slot:actions>
            <span class="body-1 text-center mb-3 font-weight-light grey--text">
              <v-icon color="primary">mdi-heart</v-icon>
              250
            </span>

            <v-spacer />

            <div class="display-1 font-weight-light grey--text">
              <v-icon color="secondary">
                mdi-chat
              </v-icon>
              30 Comentarios
            </div>
          </template>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        tiles: [
          { icon: 'mdi-alert-octagon', title: 'Denunciar Post' },
          { icon: 'mdi-account-minus', title: 'Dejar de seguir' },
        ],
        countryData: {
          US: 2920,
          DE: 1390,
          AU: 760,
          GB: 690,
          RO: 600,
          BR: 550,
        },
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],

            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right',
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right',
          },
        ],
        items: [
          {
            id: 1,
            name: 'Dakota Rice',
            country: 'Niger',
            city: 'Oud-Tunrhout',
            salary: '$35,738',
          },
          {
            id: 2,
            name: 'Minerva Hooper',
            country: 'Curaçao',
            city: 'Sinaai-Waas',
            salary: '$23,738',
          },
          {
            id: 3,
            name: 'Sage Rodriguez',
            country: 'Netherlands',
            city: 'Overland Park',
            salary: '$56,142',
          },
          {
            id: 4,
            name: 'Philip Chanley',
            country: 'Korea, South',
            city: 'Gloucester',
            salary: '$38,735',
          },
          {
            id: 5,
            name: 'Doris Greene',
            country: 'Malawi',
            city: 'Feldkirchen in Kārnten',
            salary: '$63,542',
          },
        ],
        sales: [
          {
            country: 'USA',
            flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
            salesInM: 2920,
          },
          {
            country: 'Germany',
            flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png',
            salesInM: 1300,
          },
          {
            country: 'Australia',
            flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png',
            salesInM: 760,
          },
          {
            country: 'United Kingdom',
            flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
            salesInM: 690,
          },
          {
            country: 'Romania',
            flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png',
            salesInM: 600,
          },
          {
            country: 'Brasil',
            flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
            salesInM: 550,
          },
        ],
        tabs: 0,
        list: {
          0: false,
          1: false,
          2: false,
        },
        sheet: false,
      }
    },

    computed: {
      totalSales () {
        return this.sales.reduce((acc, val) => acc + val.salesInM, 0)
      },
    },

    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>

<style>
a {  text-decoration: none;}
</style>
