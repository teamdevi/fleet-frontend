<template>
<v-container>
  <v-toolbar flat class="primary" dark>
    <h3>{{entity}}</h3>
    <v-spacer></v-spacer>
    <v-btn :to="add" color="secondary" small dark class="mb-2 right">
    Back
    </v-btn>
  </v-toolbar>

<v-data-table :headers="headers" :items="items" class="elevation-1">
   <template v-slot:item.actions="{ item }">

        <v-icon
        small
        @click="viewItem(item)"
        >
        mdi-eye
        </v-icon>
        </template>
        <template v-slot:no-data>
        <v-btn
        color="primary"
        @click="initialize"
        >
        Reset
        </v-btn>
        </template>
</v-data-table>
</v-container>
</template>

<script>
  export default { props : ['entity','add','headers','items'] }
</script>
