
<template>
  <div>
    <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Acerca de</th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    desserts: [
      {
        name: "¡Siguenos en Twitter!",
        calories: "Pineapp"
      },
      {
        name: "Danos me gusta en facebook",
        calories: "Pineapp"
      },
      {
        name: "Versión de la aplicación",
        calories: "1.0"
      }
    ]
  })
};
</script>