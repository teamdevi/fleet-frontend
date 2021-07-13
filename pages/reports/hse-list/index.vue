<template>
<!-- <div>
    <List :entity="entity" :headers="headers" :add="add" :items="items"  />
</div> -->

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
       @click="viewItem(item.id)"
        >
        mdi-eye
        </v-icon>
        </template>
         <template v-slot:item.project.project_logo="{item}">
    <div class="pa-5" >

    <v-img width="100" :src="item.project.project_logo" />
        <!-- <v-img v-if="img_holder" :src="img_holder"></v-img>
        <v-dialog v-model="dialog1" width="600">
      <template v-slot:activator="{ on, attrs }">
      <v-btn x-small
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Open Logo {{item}}
      </v-btn>


    </template>


  </v-dialog> -->


    </div>
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
import List from '@/components/List';

export default {
  components : { List },
  data : () => ({
    entity : 'Daily HSE Report List',
    add : '/reports/form-hse',



     headers: [
         { text: 'date', value: 'date' },
         { text: 'project', value: 'project.project_name' },
         { text: 'project', value: 'project.project_logo' },
         { text: 'actions', value: 'actions' },


      ],
      items : [],
  }),
    created () {
      this.initialize()
    },

    methods: {
      initialize () {

        this.$axios.get('dhr').then(res =>  this.items = res.data);

      },

      viewItem (id) {
        this.$router.push(`/reports/hse-list/${id}`)
      }

    },
}
</script>
