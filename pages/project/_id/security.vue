<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :search="search"
    class="elevation-1"
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
    <template v-slot:item.attachments="{ item }">

      <!-- {{item.image}} -->
        <img height="150px" width="150px"  :src="item.attachments" />

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
    <template v-slot:no-data>
      <v-btn small color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({

      entity : 'Daily Security Report',  
      dialog: false,
      isActive: true,
      search:'',
      headers: [
          {
          text: 'Attachments',
          sortable: true,
          value: 'attachments',
          },
          {
          text: 'Daily Report Elements',
          sortable: true,
          value: 'daily_report_elements',
          },
          {
          text: 'Guard Organization',
          sortable: true,
          value: 'guard_organization',
          },
          {
          text: 'Inspections',
          sortable: false,
          value: 'inspections',
          },

          {
          text: 'No of Incidents Daily',
          sortable: false,
          value: 'no_incidents_daily',
          },

          {
          text: 'No staff',
          sortable: false,
          value: 'no_staff',
          },

          {
          text: 'No of Visitors',
          sortable: false,
          value: 'no_visitors',
          },

          {
          text: 'Observations',
          sortable: false,
          value: 'observations',
          },

          {
          text: 'Red flag',
          sortable: false,
          value: 'red_flag',
          },

          {
          text: 'Travel Security Updates',
          sortable: false,
          value: 'travel_security_updates',
          },

        
      
       
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      data: [],
      editedIndex: -1,
      editedItem: {
      role_id: 5,
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      mobile_no: "",
      },
      defaultItem: {
      role_id: 5,
      department_id : "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
      mobile_no: "",
      confirm_password: ""
      },
      change_password: "",
      errors:[],
      Rules : [
          v => !!v || 'This field is required',
        ],

    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New' : 'Edit'
      },
     
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {

      this.$axios.get(`dailysecurityreport`).then(res => console.log(this.data = res.data));

      
      },

      editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.isActive = item.isactive
        this.errors = []
        this.dialog = true
      },

      deleteItem (item) {
       
         confirm('Are you sure you want to delete this item?') && 
         this.$axios.delete('covid/'+item.id)
            .then((res) => {
     
              const index = this.data.indexOf(item)
              this.data.splice(index, 1)
            
            });
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    },
  }
</script>