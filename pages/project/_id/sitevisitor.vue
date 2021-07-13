<template>
  <v-data-table
    :headers="headers"
    :items="data.data"
    :search="search"
    class="elevation-1"
    @pagination="paginate"
    :server-items-length="data.total"
    :items-per-page="5"
    :footer-props="{
    itemsPerPageOptions : [5,10,15,20]
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>{{entity}}</v-toolbar-title>

        <v-text-field
          class="mx-4"
        label="Search"
        hide-details v-model="search"></v-text-field>

      </v-toolbar>
    </template>

    <template v-slot:item.attachment="{ item }">

        <v-img v-if="item && item.attachment" height="150px" width="150px"  :src="item.attachment">
        <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          >
          </v-progress-circular>
        </v-row>

         <v-dialog v-model="dialog1" max-width="800px">
            <template v-slot:activator="{ on }">
            <div class="pa-5">
                  <v-img v-on="on" height="100px" width="150px" :src="item.attachment"></v-img>
            </div>
            </template>

            <v-img height="100%" width="100%"  :src="item.attachment"></v-img>
            </v-dialog>


      </template>
      </v-img>

    </template>



    <template v-slot:item.id_attachment="{ item }">


        <img height="150px" width="150px"  :src="item.id_attachment" />

    </template>



    <template v-slot:item.car_attachment="{ item }">


        <img height="150px" width="150px"  :src="item.car_attachment" />

    </template>

    <template v-slot:item.actions="{ item }">
      <!-- <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> -->
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    data: () => ({

      entity : 'Daily Site Visitor',
      dialog: false,
      isActive: true,
      search:'',
      headers: [
         {
          text: 'company',
          sortable: true,
          value: 'company_name',
        },
        {
          text: 'ID Attachment',
          sortable: true,
          value: 'id_attachment',


          },

           {
          text: 'Car Attachment',
          sortable: true,
          value: 'car_attachment',


          },

         {
          text: 'driver',
          sortable: true,
          value: 'driver_contact',
        },

         {
          text: 'visit reason',
          sortable: true,
          value: 'visit_reason',
        },
        { text: 'Action', value: 'actions', sortable: false },

      ],
      data: [],

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New' : 'Edit'
      },

    },

    methods: {

      paginate (e) {
           this.$axios.get(`dailyvisitorsregister/project/${this.$route.params.id}?page=${e.page}`, {

                params: { per_page : e.itemsPerPage}

              }).then(res => {
                this.data = res.data;
            });
        },

      deleteItem (item) {

         confirm('Are you sure you want to delete this item?') &&
         this.$axios.delete('dailyvisitorsregister/'+item.id)
            .then((res) => {

              const index = this.data.indexOf(item)
              this.data.splice(index, 1)

            });
      },

    },
  }
</script>
