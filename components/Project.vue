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
        <v-divider
        class="mx-4"
        inset
        vertical
      ></v-divider>
      <v-dialog v-model="dialog" max-width="900px">
        <template v-slot:activator="{ on }">
          <v-btn small dark class="secondary mb-2" v-on="on">Add {{entity}} </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }} {{entity}}</span>
            <v-spacer />
            <!-- <v-btn>
                <v-img v-if="img_holder" :src="img_holder"></v-img>
            </v-btn> -->
              <v-btn v-if="formTitle == 'New'" raised class="primary mt-2" @click="onPickFile">


              {{(!project_logo.name) ?  'Project Logo' : project_logo.name}}
              <input
                required
                type="file"
                @change="checkFile"
                style="display:none;"
                accept="image/*"
                ref="fileInput"
              >
              </v-btn>

              <!-- <div class="error--text" v-if="cnic_fileSize" style="color: #ff1744 !important;">file size should be less than 1MB</div> -->

            </v-card-title>
          <span style="font-size: 0.875rem; color: red; font-weight: 400; position: absolute; right: 20px;" v-if="errors.project_logo" v-text="errors.project_logo[0]"></span>
          <v-card-text>
            <v-container>
              <v-row>


                <v-col cols="6" sm="6" md="6">
                  <v-text-field :readonly="isReadOnly" v-model="editedItem.project_name" :label="`${entity} Name`"></v-text-field>
                  <div style="color:red;" v-if="errors.project_name">{{errors.project_name[0]}}</div>
                </v-col>
                  <v-col cols="6" sm="6" md="6">
              <v-autocomplete
                    :readonly="isReadOnly"
                      v-model="editedItem.user_id"
                      :items="clients"
                      :rules="ClientRules"
                      required
                    item-text="name" item-value="id" single-line auto label="Project Admin">
                </v-autocomplete>
          <span style="font-size: 0.875rem; color: red; font-weight: 400;" v-if="errors.user_id" v-text="errors.user_id[0]"></span>
                    <!-- <v-text-field v-model="editedItem.project_logo" :label="`${entity} Logo`"></v-text-field>
                    <div style="color:red;" v-if="errors.project_logo">{{errors.project_logo[0]}}</div> -->
                </v-col>
                  <v-col cols="6" sm="6" md="6">
                <v-text-field v-if="isReadOnly" :readonly="isReadOnly" v-model="editedItem.start_date" :label="`Start Date`"></v-text-field>

                    <v-menu
                    v-else
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="editedItem.start_date"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                    >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="editedItem.start_date"
                    label="Start Date"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker

                    v-model="editedItem.start_date"
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                    text
                    color="primary"
                    @click="menu = false"
                    >
                    Cancel
                    </v-btn>
                    <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(editedItem.start_date)"
                    >
                    OK
                    </v-btn>
                    </v-date-picker>
                    </v-menu>
                </v-col>
          <v-col cols="6" sm="6" md="6">
      <v-text-field v-if="isReadOnly" :readonly="isReadOnly" v-model="editedItem.end_date" :label="`End Date`"></v-text-field>
        <v-menu
        v-else
      ref="menu2"
      v-model="menu2"
      :close-on-content-click="false"
      :return-value.sync="editedItem.end_date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="editedItem.end_date"
          label="End Date"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="editedItem.end_date"
        no-title
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="men2 = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.menu2.save(editedItem.end_date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
                </v-col>
                <v-col cols="6" sm="6" md="6">
                  <v-text-field :readonly="isReadOnly" v-model="editedItem.location" :label="`Location`"></v-text-field>
                  <div style="color:red;" v-if="errors.location">{{errors.location[0]}}</div>
                </v-col>
                  <v-col cols="6" sm="6" md="6">
                  <v-text-field :readonly="isReadOnly" v-model="editedItem.zones" :label="`No of zones you want to create`"></v-text-field>
                  <div style="color:red;" v-if="errors.zones">{{errors.zones[0]}}</div>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn small class="primary" text @click="close">Cancel</v-btn>
            <v-btn small class="secondary" text @click="save">Save</v-btn>

          </v-card-actions>

          <template v-if="action == 'Edit'">

            <v-divider></v-divider>


            <v-card-title>
              <span class="headline">Update Project Logo</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                 <v-form
                      ref="project_logo_update"
                      lazy-validation
                      >
                      <!-- project_logo_update -->
                      <v-btn raised class="primary" small @click="onPickFile">
                      {{(!project_logo.name) ?  'Project Logo' : project_logo.name}}
                      <input
                        required
                        type="file"
                        @change="checkFile"
                        style="display:none;"
                        accept="image/*"
                        ref="fileInput"
                      >
                      </v-btn>

                     <v-btn small class="secondary" text @click="project_logo_update_submit">Save</v-btn>


                    </v-form>
              </v-container>
            </v-card-text>


            </template>

          </v-card>

      </v-dialog>
    </v-toolbar>
  </template>
  <template v-slot:item.zones="{item}">
      <v-chip v-if="item.zones.length == 0" class="ma-1" color="secondary" small>
          You dont created zones yet
      </v-chip>

      <v-chip v-else class="ma-1" color="secondary" small v-for="(zone,i) in item.zones" :key="i" >
          {{zone.zone_name}}
      </v-chip>



    </template>
    <template v-slot:item.project_logo="{item}">
    <div class="pa-5" >
    <v-img width="150" :src="item.project_logo" />
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
  <template v-slot:item.actions="{ item }">
    <v-icon
      small
      class="mr-2"
      @click="editItem(item)"
    >
      mdi-pencil
    </v-icon>

      <v-icon
      small
      class="mr-2"
      @click="viewItem(item)"
      >
      mdi-eye
      </v-icon>
    <!-- <v-icon
      small
      @click="deleteItem(item)"
    >
      mdi-delete
    </v-icon> -->

  </template>

    <template v-slot:item.open_dashboard="{ item }">
      <v-btn
        small
        class="primary"
        @click="storeProject(item)">
        Open Dashboard
        </v-btn>
  </template>

  <template v-slot:no-data>
    <v-btn small color="primary" @click="initialize">Reset</v-btn>
  </template>
</v-data-table>
</template>

<script>
export default {
  data: () => ({

    entity : 'Project',
    dialog1 : false,
    dialog: false,
    menu: false,
    menu2: false,
    action : '',
    search:'',
    img_holder : '',
    headers: [

      {
        text: 'Project Id',
        sortable: false,
        value: 'id',
      },

      {
        text: 'Dashboard',
        sortable: false,
        value: 'open_dashboard',
      },
       {
        text: 'Project Name',
        sortable: false,
        value: 'project_name',
      },
        {
        text: 'Project Logo',
        sortable: false,
        value: 'project_logo',
      },
      {
        text: 'Project Admin',
        sortable: true,
        value: 'user.name',
      },
        {
        text: 'Start Date',
        sortable: false,
        value: 'start_date',
      },
        {
        text: 'End Date',
        sortable: false,
        value: 'end_date',
      },
      {
        text: 'Location',
        sortable: false,
        value: 'location',
      } ,
      {
        text: 'Zone',
        sortable: false,
        value: 'zones',
      },


      { text: 'Actions', value: 'actions', sortable: false },

    ],
    data: [],
    clients : [],
    fileSize:false,
    project_logo : {},
    editedIndex: -1,
    editedItem: {
      user_id : '',
      project_name : '',
      location : '',
      start_date : new Date().toISOString().substr(0, 10),
      end_date : new Date().toISOString().substr(0, 10),
      zones : '',
    },
    defaultItem: {
      user_id : '',
      project_name : '',
      location : '',
      start_date : new Date().toISOString().substr(0, 10),
      end_date : new Date().toISOString().substr(0, 10),
      zones : '',
    },
    change_password: "",
    errors:[],
    Rules : [
        v => !!v || 'This field is required',
      ],
    ClientRules : [
      v => !!v || 'This field is required',
    ]

  }),

  computed: {
    isReadOnly(){
      return this.action == 'View'
    },
    formTitle () {
      return this.action ? this.action : this.editedIndex === -1 ? 'New' : 'Edit'
    },
    isSuperAdmin () {
      return this.$auth.user && this.$auth.user.user_type == 'Super Admin'
    },

    isProjectAdmin () {
      return this.$auth.user && this.$auth.user.user_type == 'project Admin'
    },
    isManager () {
      return this.$auth.user && this.$auth.user.user_type == 'Wewatch Manager'
    }
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
    storeProject(item){

          this.$store.commit('project/add', item)
          this.$router.push(`/project/${item.id}`);

    },
    initialize () {
         
         this.getData();
         this.getClients();

    },


    getData () {

         var url  = '';
          if(this.isManager){
            url = 'projectbymanagerid/' + this.$auth.user.id;
          }
          else if (this.isProjectAdmin){
            url = 'projectbyuserid/' + this.$auth.user.id;
          }
          else{
            url = 'project';
          }

           this.$axios.get(url).then(res => {
                this.data = res.data;
            });
        },



    getClients() {
      this.$axios.get(`get_users_by_id/2`).then(res => this.clients = res.data.data);
    },



    onPickFile() {
      this.$refs.fileInput.click()
    },
    checkFile(e) {

    this.project_logo = e.target.files[0] || '';

    // this.fileSize = this.project_logo.size > 1000000 ? true : false

    },


    editItem (item) {
      this.img_holder = item.project_logo;
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)

      this.editedItem.zones = item.zones.length
      this.errors = []
      this.dialog = true
      this.action = 'Edit';
    },
    viewItem (item) {
      this.editedIndex = this.data.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.editedItem.zones = item.zones.length
      this.dialog = true
      this.action = 'View';
},

    deleteItem (item) {

        confirm('Are you sure you want to delete this item?') &&
        this.$axios.delete('project/'+item.id)
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
    project_logo_update_submit(){

         var payload  = new FormData();

          payload.append('project_logo',this.project_logo);

         this.$axios.post('update_project_logo/' + this.editedItem.id, payload)
          .then(res => {
             const index = this.data.findIndex(item => item.id == this.editedItem.id)
             this.data.splice(index, 1,res.data.data);
            this.close()
            this.errors = []
            this.editedItem = Object.assign({}, this.defaultItem)
          })
    },

    save () {




      if(this.editedIndex > -1) {

        this.$axios.put('project/' + this.editedItem.id, this.editedItem)
          .then(res => {

              const index = this.data.findIndex(item => item.id == this.editedItem.id)
              if(res.data.success){
                    this.data.splice(index, 1,res.data.data);
                    this.close()
                    this.errors = []
                    this.editedItem = Object.assign({}, this.defaultItem)
                    // console.log(res.data,this.project_logo);
                    }
                    else{
                      this.errors = res.data.errors
                      }


          });




      } else {

          var payload  = new FormData();

          payload.append('user_id',this.editedItem.user_id);
          payload.append('project_name',this.editedItem.project_name);
          payload.append('location',this.editedItem.location);
          payload.append('start_date',this.editedItem.start_date);
          payload.append('end_date',this.editedItem.end_date);
          payload.append('zones',this.editedItem.zones);
          payload.append('project_logo',this.project_logo);

            this.$axios.post('project',payload)
            .then((res) => {
                  if(res.data.success){
                    this.data.unshift(res.data.data)
                    this.close()
                    this.errors = []
                    this.project_logo = {}
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
