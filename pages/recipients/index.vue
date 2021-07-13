<template>
             <v-container>  


            <v-toolbar flat class="primary" dark>
            <h3>Email List</h3>
            <v-spacer></v-spacer>
             <v-btn
                  to="/recipients/add_recipients"
                  color="secondary"
                  small
                  dark
                  class="mb-2 right"
                  >
                  New Item 
                  </v-btn>
                  
            </v-toolbar>
             <v-data-table
        :headers="headers"
        :items="recipientList"
        class="elevation-1"
        >
        <template v-slot:item.email="props">
        <v-edit-dialog
          :return-value.sync="props.item.email"
          @save="save(props.item)"
        >
          {{ props.item.email }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.email"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
            <template  v-slot:top>
            <v-autocomplete
            class="pa-3"
            v-model="project_id" 
            :items="projects" 
            @change="getRecipientList"
            required 
            item-text="project_name" 
            item-value="id" 
            single-line 
            auto 
            label="Select Project">
            </v-autocomplete>
            </template>
        <template v-slot:item.actions="{ item }">
       
        <v-icon
        small
        @click="deleteItem(item)"
        >
        mdi-delete
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
              <v-snackbar
      v-model="snack"
      :timeout="3000"
      :color="snackColor"
    >
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          small
          v-bind="attrs"
          text
          class="secondary"
          @click="snack = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
              
           </v-container>
</template>

<script>
  export default {
    data: () => ({
      project_id : '',
      dialog: false,
      dialogDelete: false,

      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',


      headers: [
          { text: 'Email', value: 'email' },
          { text: 'Actions', value: 'actions', sortable: false },

      ],
      recipientList: [],
      projects : [],
      editedIndex: -1,
      editedItem: {
       email : ''
      },
      defaultItem: {
        email : ''
      },
    }),

    computed: {
     
    },

   
    created () {
      this.initialize()
    },

    methods: {
      initialize () {

        this.$axios.get('project').then(res => this.projects = res.data);
        
      },

      getRecipientList () {
      this.$axios.get(`recipient/${this.project_id}`)
       .then(res => this.recipientList = res.data);   
      },

    
      deleteItem (item) {
       
         confirm('Are you sure you want to delete this item?') && 
         this.$axios.delete('recipient/'+item.id)
            .then((res) => {
     
              const index = this.recipientList.indexOf(item)
              this.recipientList.splice(index, 1)
            
            });
      },

       save (currentItem) {

         console.log(currentItem);


        this.$axios.put('recipient/' + currentItem.id, { email : currentItem.email }  )
        .then(res => {

        if(res.data.success){
          this.snack = true
          this.snackColor = 'primary'
          this.snackText = 'Email has been updated'
        }
        else{
          this.snack = true
          this.snackColor = 'error'
          this.snackText = 'Email is not updated'
        }

        })
        .catch(err => console.log(err.response.data));


      },
     
    },
  }
</script>