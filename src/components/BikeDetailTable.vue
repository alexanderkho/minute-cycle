<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Specifications
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spec in specs" :key="spec">
          <td class="text-capitalize">{{ spec }}</td>
          <td>{{ bike[spec] }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "BikeDetailTable",
  props: {
    bike: Object
  },
  data() {
    return {
      specs: [
        "manufacturer",
        "power",
        "description",
        "color",
        "displacement",
        "year"
      ]
    };
  }
};
</script>
