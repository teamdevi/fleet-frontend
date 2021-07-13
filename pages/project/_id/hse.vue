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
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field   
        label="Search"
        hide-details v-model="search"></v-text-field>
         <!-- <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider> -->
        <v-dialog v-model="dialog" max-width="900px">
          <template v-slot:activator="{ on }">
            <v-btn small dark class="secondary mb-2" v-on="on">Add {{entity}}</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }} {{entity}}</span>
               <v-spacer></v-spacer>
               
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                   

                  <!-- <v-col cols="6" sm="6" md="12">
                    <v-text-field v-model="editedItem.name" :label="`${entity} Name`"></v-text-field>
                    <div style="color:red;" v-if="errors.name">{{errors.name[0]}}</div>
                  </v-col> -->
                 
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn small class="primary" text @click="close">Cancel</v-btn>
              <v-btn small class="secondary" text @click="save">Save</v-btn>
              
            </v-card-actions>

            <template v-if="editedIndex > -1">

            <v-divider></v-divider>

              
            <v-card-title>
              <span class="headline">Password Update</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                 <v-form
                      ref="change_password_ref"
                      lazy-validation
                      >
                     <v-text-field autocomplete="on" :rules="Rules" type="password" v-model="change_password" label="New Password"></v-text-field>
                     <v-btn small class="primary" text @click="close">Cancel</v-btn>
                     <v-btn small class="secondary" text @click="change_password_func">Save</v-btn>
                
              
                    </v-form>
              </v-container>
            </v-card-text>


            </template>

          </v-card>

        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.image="{ item }">


        <img height="150px" width="150px"  :src="item.image" />

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

      entity : 'Covid',  
      dialog: false,
      isActive: true,
      search:'',
      headers: [
        {
          text: 'Project',
          sortable: true,
          value: 'project.project_name',
        },
         {
          text: 'Image',
          sortable: true,
          value: 'image',
        },
        {
          text: 'Staff Name',
          sortable: true,
          value: 'staff_name',
        },
        {
          text: 'Company',
          sortable: true,
          value: 'company',
        },
         {
          text: 'Remarks',
          sortable: false,
          value: 'remarks',
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

      this.$axios.get(`covid`).then(res => this.data = res.data);

      
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

      change_password_func(){
        if(this.$refs.change_password_ref.validate()){

          this.$axios.post('change_password/'+this.editedItem.id,{change_password:this.change_password})
              .then((res) => {
                if(res.data.success){
                  this.close()
                }

              });   
              }
      },

      save () {

        var payload = {
            "user_id" : 1,
            "project_id" : 1,
            "temperature" : "aaa",
            "staff_name" : "test",
            "company" : "test",
            "image" : "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"
    };
        if (this.editedIndex > -1) {
       //   Object.assign(this.data[this.editedIndex], this.editedItem)

            this.$axios.put('user/' + this.editedItem.id, payload)
            .then(res => {
            
              const index = this.data.findIndex(item => item.id == this.editedItem.id)
             
                  if(res.data.success){
                      this.data.splice(index, 1,res.data.data);
                      this.close()
                      this.errors = []
                      }
                      else{
                        this.errors = res.data.errors
                        }
     
            })
            .catch(err => console.log(this.errors = err.response.data.errors));


        } else {
          
              this.$axios.post('covid',payload)
              .then((res) => {
                   
                    if(res.data.success){
                      this.data.unshift(res.data.data)
                      this.close()
                      this.errors = []
                      }
                      else{
                        this.errors = res.data.errors
                        }
            })
            .catch(err => console.log(this.errors = err.response.data.errors));
        }
     
      },
    },
  }
</script>