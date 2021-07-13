<template>
    <v-container>


    <v-row>
              <div class="text-center">


              </div>
        <v-col cols="12" md="6">
        <v-toolbar dense flat class="primary" dark><b>Allocate for the Project</b>
          <v-spacer></v-spacer>
          <v-btn :loading="loader" class="secondary" small @click="submit">Allocate Users</v-btn>
         </v-toolbar>
          <v-card class="pa-2">
        <v-form
        ref="form"
        lazy-validation
        >
        <v-col
        cols="12"
        sm="12"
        >

        <v-select
        :rules="[v => !!v || 'This field is required']"
        v-model="project_id"
        :items="projects"
        item-value="id"
        item-text="project_name"
        :menu-props="{ maxHeight: '400' }"
        label="Select project"
        ></v-select>
        </v-col>


        <v-row>
        <v-col cols="12" class="pa-5" md="4" sm="12">
        Managers
        <v-checkbox
        @change="for_manager_ids"
        v-model="check_all_manager_ids"
        label="Select All"
        ></v-checkbox>

        <v-checkbox v-for="(item,i) in managers" :key="i"
        v-model="manager_ids"
        :label="item.name"
        :value="item.id"
        :rules="GeneralRules"
        ></v-checkbox>

        </v-col>

        <v-col cols="12" class="pa-5" md="4" sm="12">
        Users
        <v-checkbox
        v-if="users && users.length !== 0"
        @change="for_user_ids"
        v-model="check_all_user_ids"
        label="Select All"
        ></v-checkbox>

        <v-checkbox v-for="(item,i) in users" :key="i"
        v-model="user_ids"
        :label="item.name"
        :value="item.id"
        :rules="GeneralRules"
        ></v-checkbox>

        </v-col>

                <v-col cols="12" class="pa-5" md="4" sm="12">
        Guards
        <v-checkbox
        v-if="guards && guards.length !== 0"
        @change="for_guard_ids"
        v-model="check_all_guard_ids"
        label="Select All"
        ></v-checkbox>

        <v-checkbox v-for="(item,i) in guards" :key="i"
        v-model="guard_ids"
        :label="item.name"
        :value="item.id"
        :rules="GeneralRules"
        ></v-checkbox>

        </v-col>

        </v-row>
        <v-col
        cols="12"
        sm="12"
        >
        </v-col>
            </v-form>
        </v-card>

        </v-col>

            <v-col cols="12" md="6">

            <v-toolbar dense flat class="secondary" dark><b>Allocations</b></v-toolbar>

            <!-- <v-text-field v-model="search" placeholder="search"/> -->

            <v-data-table
            :headers="headers"
            :items="data"
            class="elevation-1"
            :search="search"
            >

            <template v-slot:item.users="{ item }">
                <v-chip v-for="(val,i) in item.users" :key="i" class="primary ma-1" small v-text="val" />
            </template>

            <template v-slot:item.managers="{ item }">
                <v-chip v-for="(val,i) in item.managers" :key="i" class="primary ma-1" small v-text="val" />
            </template>

            <template v-slot:item.guards="{ item }">
                <v-chip v-for="(val,i) in item.guards" :key="i" class="primary ma-1" small v-text="val" />
            </template>

            <template v-slot:item.action="{ item }">
                <v-chip @click="editItem(item)" small class="primary">View | Edit</v-chip>
                <v-chip :loading="loader"  @click="deleteItem(item)" small class="error">Delete</v-chip>
            </template>

            </v-data-table>

            </v-col>



        <v-row>
        <!-- <v-col cols="6">
        <v-toolbar dense flat class="secondary" dark><b>Free Managers</b></v-toolbar>
            <v-card>

            <v-list  v-for="(item, i) in users" :key="i">
            <v-list-item>
            {{item.name}}
            </v-list-item>

            </v-list>
        </v-card>

        </v-col>

        <v-col cols="6">
        <v-toolbar dense flat class="secondary" dark><b>Free Users</b></v-toolbar>
        <v-card>


        <v-list v-for="(item, i) in users" :key="i">
        <v-list-item>
        {{item.name}}
        </v-list-item>

        </v-list>
        </v-card>

        </v-col> -->

        </v-row>

    </v-row>
</v-container>

</template>

<script>
  export default {
    data () {
      return {

        top : true,
        snackbar: false,
        timeout: 2000,
        check_all_user_ids : false,
        check_all_manager_ids : false,
        check_all_guard_ids : false,
        headers: [
        {
        text: 'project',
        sortable: true,
        value: 'project.project_name',
        },
        {
        text: 'managers',
        sortable: true,
        value: 'managers',
        },
        {
        text: 'users',
        sortable: true,
        value: 'users',
        },
        {
        text: 'guards',
        sortable: true,
        value: 'guards',
        },
         {
          text: 'Action',
          sortable: false,
          value: 'action',
        },

      ],
        search:'',
        project_id: '',
        guard_ids : [],
        user_ids : [],
        manager_ids : [],
        data : [],
        projects : [],
        guards : [],
        users : [],
        managers : [],
        GeneralRules : [
           v => this.guard_ids.length || this.manager_ids.length || this.user_ids.length ? !!v : 'This field is required'
        ],

        check:false,
        loader: false,

      }
    },

    created (){

            this.getAllocations();

            this.getAssignedMembers();

            this.getManagers();

            this.getProjects();

    },
    methods:{

      getAllocations(){
        this.$axios.get('/allocation').then(res => this.data = res.data.data);
      },

      getManagers(){
        this.$axios.get(`get_users_by_id/${4}`).then(res => this.managers = res.data.data);
      },

      getAssignedMembers(){
        this.$axios.get('/getAssignedMembers').then(res => {
              this.guards = res.data.guards;
              this.users = res.data.users;
            });
      },


      getProjects(){
          this.$axios.get('/CheckProjectWithAllocation')
          .then((res) =>  this.projects  = res.data);
      },
        editItem (item) {
          this.$router.push('/allocations/' + item.id);
        },

         deleteItem (item) {
             confirm('Are you sure you want to delete this item?') &&
              this.$axios.delete('allocation/'+item.id)
            .then((res) => {

              const index = this.data.indexOf(item)
              this.data.splice(index, 1)

              this.getProjects();

              this.getAssignedMembers();

              this.getManagers();

              this.delete();

            });

        },



        for_guard_ids(){
          this.guard_ids = this.check_all_guard_ids ? this.guards.map(v => v.id) : [] ;
        },
         for_user_ids(){
          this.user_ids = this.check_all_user_ids ? this.users.map(v => v.id) : [] ;
        },
        for_manager_ids(){
          this.manager_ids = this.check_all_manager_ids ? this.managers.map(v => v.id) : [] ;
        },

        success(){
        this.$swal.fire({
        icon: 'success',
        title: 'Record has been inserted',
        showConfirmButton: false,
        timer: 2000
        })

        },
        failed(){
        this.$swal.fire({
        icon: 'error',
        title: 'Record cannot insert',
        showConfirmButton: false,
        timer: 2000
        })

        },

        delete(){
        this.$swal.fire({
        icon: 'error',
        title: 'Allocation has been deleted',
        showConfirmButton: false,
        timer: 2000
        })

        },

        submit(){
            let payload = {
                project_id : this.project_id,
                user_ids :   this.user_ids,
                guard_ids :   this.guard_ids,
                manager_ids : this.manager_ids
            };

            this.loader = true;

            if(this.$refs.form.validate()){

            this.$axios.post('/allocation',payload)
                .then((res) =>{

                  if(res.data.success){

                    this.success()

                    this.data.unshift(res.data.data);
                    this.getProjects();

                     setTimeout(() => location.reload() , 2000);

                    this.project_id = null;
                    this.user_ids = [];
                    this.guard_ids = [];
                    this.manager_ids = [];

                    this.check_all_user_ids = false;
                    this.check_all_manager_ids = false;
                    this.check_all_guard_ids = false;


                  }
                   else{

                     this.failed();


                  }




                });

                }
                this.loader = false;
        }
    }
  }
</script>
