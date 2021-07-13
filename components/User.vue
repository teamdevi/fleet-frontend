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
  <v-btn small dark class="secondary mb-2" v-on="on">Add {{entity}}</v-btn>
  </template>
  <v-card>
  <v-card-title>
  <span class="headline">{{ formTitle }} {{entity}}</span>
  <v-spacer></v-spacer>
  <v-checkbox
  color="secondary"
  v-model="isActive"
  :label="`Active`"
  ></v-checkbox>
  </v-card-title>

  <v-card-text>
  <v-container>
  <v-row>

  <v-col v-if="role_id == 6" cols="6" sm="6" md="12">
  <v-autocomplete :items="admins" v-model="editedItem.admin" item-text="name"  item-value="id"  label="Project Admin"></v-autocomplete>
  <div style="color:red;" v-if="errors.name">{{errors.name[0]}}</div>
  </v-col>


  <v-col cols="6" sm="6" md="12">
  <v-text-field v-model="editedItem.name" :label="`${entity} Name`"></v-text-field>
  <div style="color:red;" v-if="errors.name">{{errors.name[0]}}</div>
  </v-col>

  <v-col cols="6" sm="6" md="12">
  <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
  <div style="color:red;" v-if="errors.email">{{errors.email[0]}}</div>
  </v-col>

  <v-col v-if="editedIndex ==  -1" cols="12" sm="12" md="12">
  <v-text-field autocomplete="on" type="password" v-model="editedItem.password" label="Password"></v-text-field>
  <div style="color:red;" v-if="errors.password">{{errors.password[0]}}</div>
  </v-col>

  <v-col v-if="editedIndex ==  -1" cols="12" sm="12" md="12">
  <v-text-field autocomplete="on" type="password" v-model="editedItem.confirm_password" label="Confirm Password"></v-text-field>
  <div style="color:red;" v-if="errors.confirm_password">{{errors.confirm_password[0]}}</div>
  </v-col>




  <!-- <v-col cols="6" sm="6" md="6">

  <v-text-field v-model="editedItem.mobile_no" label="Mobile No"></v-text-field>
  <div style="color:red;" v-if="errors.mobile_no">{{errors.mobile_no[0]}}</div>
  </v-col> -->


  </v-row>
  </v-container>
  </v-card-text>

  <v-card-actions>
  <v-spacer></v-spacer>
  <v-btn small class="primary" text @click="close">Cancel</v-btn>
  <v-btn :loading="loader" small class="secondary" text @click="save">Save</v-btn>

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

  <v-text-field autocomplete="on" type="password" v-model="confirm_password" label="Confirm Password"></v-text-field>



  <v-btn small class="primary" text @click="close">Cancel</v-btn>
  <v-btn :loading="loader" small class="secondary" text @click="change_password_func">Save</v-btn>


  </v-form>
  </v-container>
  </v-card-text>


  </template>

  </v-card>

  </v-dialog>
  </v-toolbar>
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
props : ['entity','role_id','additional_column'],    

data: () => ({

// entity : 'Project Admin', 
loader: false, 
dialog: false,
isActive: true,
search:'',
admins : [],
headers: [
{
text: 'Name',
sortable: true,
value: 'name',
},
{
text: 'Email',
sortable: false,
value: 'email',
},
// {
//   text: 'Mobile No',
//   sortable: false,
//   value: 'mobile_no',
// },
{
text: 'Active',
sortable: true,
value: 'isactive',
},


],
data: [],
editedIndex: -1,
editedItem: {
admin : "",
name: "",
email: "",
password: "",
confirm_password: "",
mobile_no: "",
},
defaultItem: {
admin : "",
name: "",
email: "",
password: "",
confirm_password: "",
mobile_no: "",

},
change_password: "",
confirm_password: "",
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
  
this.initialize();
this.isAdditionlColumn();

if(this.role_id == 6){
this.$axios.get(`get_users_by_id/${2}`)
.then(res => {
this.admins = res.data.data;
});
}

},

methods: {
isAdditionlColumn(){
  if(this.additional_column.length > 0){

    this.headers = this.headers.concat(this.additional_column)

  }
  this.headers = this.headers.concat({ text: 'Actions', value: 'actions', sortable: false })
},
initialize () {

this.$axios.get(`get_users_by_id/${this.role_id}`)
.then(res => {
this.data = res.data.data;
});


},

        success(){


        this.$swal.fire({
        icon: 'success',
        title: 'User has been inserted',
        showConfirmButton: false,
        timer: 2000
        })

        },
        failed(){
        this.$swal.fire({
        icon: 'error',
        title: 'User cannot inserted',
        showConfirmButton: false,
        timer: 2000
        })

        },

        delete(){
        this.$swal.fire({
        icon: 'error',
        title: 'User has been deleted',
        showConfirmButton: false,
        timer: 2000
        })

        },

        password_success(){
        this.$swal.fire({
        icon: 'success',
        title: 'Password has been updated',
        showConfirmButton: false,
        timer: 2000
        })

        },

        password_failed(){
        this.$swal.fire({
        icon: 'error',
        title: 'Password not updated',
        showConfirmButton: false,
        timer: 2000
        })

        },

        edit_success(){
        this.$swal.fire({
        icon: 'success',
        title: 'User has been updated',
        showConfirmButton: false,
        timer: 2000
        })

        },

        edit_failed(){
        this.$swal.fire({
        icon: 'error',
        title: 'User cannot updated',
        showConfirmButton: false,
        timer: 2000
        })

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
this.$axios.delete('user/'+item.id)
.then((res) => {

const index = this.data.indexOf(item)
this.data.splice(index, 1)
this.delete();

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



this.$axios.post('change_password/'+this.editedItem.id,{
password:this.change_password,
confirm_password:this.confirm_password,
})
.then((res) => {
if(res.data.success){
this.close()
this.password_success();
}
else{
  this.password_failed();
}

});   
this.loader = false
}
},

save () {

var payload = {
role_id : this.role_id,
name : this.editedItem.name,
email : this.editedItem.email,
admin : this.editedItem.admin,
//   mobile_no : this.editedItem.mobile_no,
cnic : this.editedItem.cnic,
isActive : this.isActive ? 1 : 0,
};

this.loader = true;
if (this.editedIndex > -1) {
//   Object.assign(this.data[this.editedIndex], this.editedItem)

this.$axios.put('user/' + this.editedItem.id, payload)
.then(res => {

const index = this.data.findIndex(item => item.id == this.editedItem.id)

if(res.data.success){
this.data.splice(index, 1,res.data.data);
this.close()
this.errors = []
this.edit_success();


}
else{
this.errors = res.data.errors
this.edit_failed();

}

})
.catch(err => console.log(this.errors = err.response.data.errors));
this.loader= false



} else {
payload.password = this.editedItem.password;
payload.confirm_password = this.editedItem.confirm_password;

this.$axios.post('user',payload)
.then((res) => {

if(res.data.success){
this.data.unshift(res.data.data)
this.close()
this.errors = []
this.success();

}
else{
this.errors = res.data.errors
this.failed();

}
})
.catch(err => console.log(this.errors = err.response.data.errors));
this.loader= false
}

},

},

}
</script>