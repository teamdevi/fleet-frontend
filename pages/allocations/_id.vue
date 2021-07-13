<template>
  <v-container>
    
    <v-row>
                    <!-- <div class="text-center">

              <v-snackbar
              color="primary"
              v-model="snackbar"
              :timeout="timeout"
              :top="top"
              >
             <b> {{ msg }} </b>

              <template v-slot:action="{ attrs }">
              <v-btn
              text
              x-small
              class="secondary"
              v-bind="attrs"
              @click="snackbar = false"
              fab
              >
              x
              </v-btn>
              </template>
              </v-snackbar>
              </div> -->

       <v-form ref="form" class="row">       

        <v-col cols="12">
        <v-card class="pa-2">
        <v-col
        cols="12"
        sm="12"
        >
        <v-select
        v-model="project_id"
        :items="projects"
        item-value="id"
        item-text="project_name"
        :menu-props="{ maxHeight: '400' }"
        label="Select project"
        ></v-select>
        </v-col>
        

        <v-row>
        <v-col cols="12" class="pa-5" md="3" sm="12">
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

        <v-col cols="12" class="pa-5" md="3" sm="12">
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

         <v-col cols="12" class="pa-5" md="3" sm="12">
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
        <v-btn  :loading="loader" class="secondary" small @click="submit">Allocate</v-btn>
        <v-btn class="primary" small to="/allocations">Back</v-btn>
        </v-col>
        </v-card>

        </v-col>

       </v-form> 
         
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
        msg : '',
        check_all_user_ids : false,
        check_all_manager_ids : false,
        check_all_guard_ids : false,
      
        project_id: '',
        user_ids : [],
        manager_ids : [],
        guard_ids : [],
        data : [],
        projects : [],
        users : [],
        managers : [],
        guards : [],

       

        GeneralRules : [
           v => this.guard_ids.length || this.manager_ids.length || this.user_ids.length ? !!v : 'This field is required'
        ],

         loader: false,

      }
    },
    computed:{
      
    },
  
    created (){
        this.$axios.get('/allocation/' + this.$route.params.id)
            .then((res) => {

              this.guard_ids = res.data.guard_ids;
              this.manager_ids = res.data.manager_ids;
              this.user_ids = res.data.user_ids;
              this.project_id = res.data.project_id;
                
            });


           this.$axios.get('/getAssignedMembers/' + this.$route.params.id).then(res => {
              this.guards = res.data.guards;
              this.users = res.data.users;
            });

            this.getManagers();

          this.$axios.get('/project').then((res) => this.projects = res.data );

    },
    methods:{

        getManagers(){
        this.$axios.get(`get_users_by_id/${4}`).then(res => this.managers = res.data.data);
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
        title: 'Record has been updated',
        showConfirmButton: false,
        timer: 2000
        })

        },
        failed(){
        this.$swal.fire({
        icon: 'error',
        title: 'Record cannot update',
        showConfirmButton: false,
        timer: 2000
        })

        },


        

       
       
        submit(){
            let payload = {
                project_id : this.project_id,
                user_ids :   this.user_ids,
                guard_ids : this.guard_ids,
                manager_ids : this.manager_ids
            };

             this.loader = true; 
            if(this.$refs.form.validate()){


            this.$axios.put('allocation/' + this.$route.params.id, payload)
            .then(res => {

                
            res.data.success ? this.success() : this.failed();
            this.loader = false

          



                    // this.msg = '';

                    // if(res.data.success){
                    //   this.msg = 'record has been updated';
                    //   this.data.unshift(res.data.data); 
                    // }
                    // else{
                    //   this.msg = 'record cannot update';
                    // }

                    // this.snackbar = true;
          
            })
            .catch(err => console.log(err));
          }        

        }
    }
  }
</script>