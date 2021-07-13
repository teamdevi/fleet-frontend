<template>
<v-form  ref="form">
<v-container>
  <v-card class="mt-5">
<v-toolbar flat class="primary" dark>
   <h3>Daily HSE Report</h3>
   <v-spacer></v-spacer>
   <v-btn to="/reports/hse-list" color="secondary" small>HSE List</v-btn>
</v-toolbar>
</v-card>
<v-card>
   <center><h1>Daily HSE Report</h1></center>
  <v-col cols="12" md="12">
    <p class="font-weight-bold">Event/Project</p>

      <v-autocomplete
      :rules="Rules"
      v-model="project_id"
      @change="getRecipientList"
      :items="projects"
      required
      item-text="project_name"
      item-value="id"
      single-line
      auto
      label="Project">
      </v-autocomplete>
  </v-col>

<!-- <v-col cols="12" md="12"><EmailList :recipientList="recipientList" /></v-col> -->

<v-col cols="12" md="12">
<p class="font-weight-bold">Current Date</p>
<v-text-field readonly v-model="today" required></v-text-field>
</v-col>

<!-- <v-col cols="12" md="12">
  <p class="font-weight-bold">Description Confidential</p>
  <v-textarea v-model="description_confidential" label="write your answer" required></v-textarea>
</v-col> -->


<v-col cols="12" md="12">

<p class="font-weight-bold">Daily Situation Summary</p>
<v-textarea v-model="daily_situation_summary" label="write your answer" required></v-textarea>
</v-col>
</v-card>

<v-card class="mt-5">

<v-col>
<p class="font-weight-bold">Event / Project Details</p>
</v-col>

<v-col cols="12" md="12">
<v-simple-table>
  <thead>
    <tr>
    <th> Weather </th>
    <th> Wind Strength </th>
    <th class="primary white--text text-left"> Remarks  </th>
    </tr>

  </thead>
<tbody>
<tr>
<td>
<v-text-field v-model="weather" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
<v-text-field v-model="wind_strength" :rules="Rules" label="write your answer" required></v-text-field>
</td>
<td>
<v-text-field v-model="weather_wind_remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
</tr>
</tbody>
</v-simple-table>
</v-col>


<v-col cols="12" md="12">

<v-simple-table>
  <thead>
    <tr>
    <th> Design and Build Timings </th>
    <th> Daily Operations man-hour </th>
    <th class="primary white--text text-left"> Remarks </th>
    </tr>
  </thead>
<tbody>
<tr>
<td>
<v-text-field v-model="design_build_time" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
<v-text-field v-model="daily_operation_man_hour" type="number" :rules="Rules" label="write your answer" required></v-text-field>
</td>
<td>
<v-text-field v-model="design_time_hour_remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
</tr>
</tbody>
</v-simple-table>
</v-col>

<v-col cols="12" md="12">

<v-simple-table>
<thead>
<tr>
<th> Contractor Name </th>
<th> Staff Numbers</th>

<th class="primary white--text text-left"> Shift Pattern </th>

<th class="primary white--text text-left"> Daily man-hours </th>

<th class="primary white--text text-left">

  <v-btn small class="secondary" @click="add_loop1">Add Row <v-icon >mdi-plus</v-icon></v-btn>

</th>
</tr>

</thead>
<tbody>
<tr v-for="(l1 , i ) in loop1" :key="i">
<td>
<v-text-field v-model="l1.contractors" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
<v-text-field v-model="l1.staff_numbers" type="number"  :rules="Rules" label="write your answer" required></v-text-field>
</td>
<td>
<v-text-field v-model="l1.shift_pattern" :rules="Rules" label="write your answer" required></v-text-field>
</td>
<td>
<v-text-field v-model="l1.daily_man_hours" type="number"  :rules="Rules" label="write your answer" required></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop1(i)" color="error">mdi-delete</v-icon>
</td>
</tr>
</tbody>

</v-simple-table>
</v-col>

<v-col cols="12" md="12">

<v-simple-table>
  <thead>

  <tr>
  <th> Type of Contractor / Sub-Contractor </th>
  <th> Staff Numbers </th>
  <th class="primary white--text text-left"> Shift Pattern </th>
  <th class="primary white--text text-left">
    <v-btn small class="secondary" @click="add_loop2">Add Row <v-icon >mdi-plus</v-icon></v-btn>
  </th>

  </tr>

  </thead>

<tbody>
<tr v-for="(l1 , i ) in loop2" :key="i">
<td>
<v-text-field v-model="l1.type_contractors" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
<v-text-field v-model="l1.staff_numbers" type="number"  :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
<v-text-field v-model="l1.shift_pattern" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop2(i)" color="error">mdi-delete</v-icon>
</td>
</tr>


<tr>
<td>TOTAL man-days</td>
<td>
<v-text-field v-model="total_man_days" type="number"  :rules="Rules" required label="write your answer"></v-text-field>
</td>
</tr>

<tr>
<td>Total man-hours</td>
<td>
<v-text-field v-model="total_man_hours" type="number"  :rules="Rules" required label="write your answer"></v-text-field>
</td>
</tr>

<tr>
<td>Total lost work hours</td>

<td>
<v-text-field v-model="total_lost_work_hours" type="number"  :rules="Rules" required label="write your answer"></v-text-field>
</td>

</tr>
</tbody>

</v-simple-table>
</v-col>
</v-card>


<v-card class="mt-5">



<v-col cols="12" md="12">

<p class="font-weight-bold">Event / Project Key Meetings and Action Points</p>
<v-textarea
:rules="Rules"
v-model="project_key_meeting"
label="write your answer"
required
></v-textarea>
</v-col>

</v-card>


<v-card class="mt-5">

<v-col cols="12" md="12">
<p class="font-weight-bold">Design/Build Activities in Progress</p>

<v-simple-table>
  <thead>


<tr>
<th> Occurrence </th>
<th> Yes or No </th>
<th class="primary white--text text-left"> Remarks </th>
<th class="primary white--text text-left">

  <v-btn small class="secondary" @click="add_loop3">Add Row <v-icon >mdi-plus</v-icon></v-btn>

</th>
</tr>

</thead>
<tbody>

<tr v-for="(l1 , i ) in loop3" :key="i">
<td>
<v-text-field v-model="l1.activites" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>

        <v-radio-group
        v-model="l1.occurrence"
        :rules="Rules"
        row
        >
        <v-radio
        label="Yes"
        value="1"
        ></v-radio>
        <v-radio
        label="No"
        value="0"
        ></v-radio>
        </v-radio-group>

</td>
<td>
<v-text-field v-model="l1.remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop3(i)" color="error">mdi-delete</v-icon>
</td>
</tr>

</tbody>

</v-simple-table>
</v-col>

</v-card>



<v-card class="mt-5">
<v-col cols="12" md="12">
<p class="font-weight-bold">Inductions and Briefings </p>
<v-textarea
:rules="Rules"
v-model="toolbox_talk"
label="write your answer"
required
></v-textarea>
</v-col>

</v-card>


<v-card class="mt-5">
<v-col cols="12" md="12">


<p class="font-weight-bold">Event/Project Health, Safety and Environmental Compliance</p>

<v-simple-table>
  <thead>
<tr>
<th> Occurrence </th>
<th> Yes or No </th>
<th class="primary white--text text-left"> Remarks </th>

<th class="primary white--text text-left">

<v-btn small class="secondary" @click="add_loop4">Add Row <v-icon >mdi-plus</v-icon></v-btn>

</th>
</tr>

</thead>

<tbody>

<tr v-for="(l1 , i ) in loop4" :key="i">
<td>
<v-text-field v-model="l1.project_health_activites" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
        <v-radio-group
        v-model="l1.project_health_occurrence"
        :rules="Rules"
        row
        >
        <v-radio
        label="Yes"
        value="1"
        ></v-radio>
        <v-radio
        label="No"
        value="0"
        ></v-radio>
        </v-radio-group>

</td>
<td>
<v-text-field v-model="l1.project_health_remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop4(i)" color="error">mdi-delete</v-icon>
</td>
</tr>

</tbody>

</v-simple-table>

</v-col>
</v-card>


<v-card class="mt-5">


<v-col cols="12" md="12">

<p class="font-weight-bold">New Hazard Identified</p>

<v-simple-table>
  <thead>
<tr>
<th> Add to Event / Project Risk Assessment </th>
<th> Yes or No </th>
<th class="primary white--text text-left"> Corrective Actions </th>
<th class="primary white--text text-left">

  <v-btn small class="secondary" @click="add_loop5">Add Row <v-icon >mdi-plus</v-icon></v-btn>

</th>
</tr>

</thead>

<tbody>

<tr v-for="(l1 , i ) in loop5" :key="i">
<td>
<v-text-field v-model="l1.hazard_identify_activites" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
        <v-radio-group
        v-model="l1.hazard_identify_occurrence"
        :rules="Rules"
        row
        >
        <v-radio
        label="Yes"
        value="1"
        ></v-radio>
        <v-radio
        label="No"
        value="0"
        ></v-radio>
        </v-radio-group>
</td>
<td>
<v-text-field v-model="l1.hazard_identify_remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop5(i)" color="error">mdi-delete</v-icon>
</td>
</tr>

</tbody>

</v-simple-table>
</v-col>
</v-card>


<v-card class="mt-5">


<v-col cols="12" md="12">
<p class="font-weight-bold"> Incident / Accident or Near Miss Reporting</p>

<v-simple-table>
  <thead>


<tr>
<th> Occurrence </th>
<th> Yes or No </th>
<th class="primary white--text text-left"> Remarks </th>
<th class="primary white--text text-left">

  <v-btn small class="secondary" @click="add_loop6">Add Row <v-icon >mdi-plus</v-icon></v-btn>

</th>
</tr>

</thead>

<tbody>

<tr v-for="(l1 , i ) in loop6" :key="i">
<td>
<v-text-field v-model="l1.near_miss_activites" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
   <v-radio-group
        v-model="l1.near_miss_occurrence"
        :rules="Rules"
        row
        >
        <v-radio
        label="Yes"
        value="1"
        ></v-radio>
        <v-radio
        label="No"
        value="0"
        ></v-radio>
        </v-radio-group>
</td>
<td>
<v-text-field v-model="l1.near_miss_remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop6(i)" color="error">mdi-delete</v-icon>
</td>
</tr>

</tbody>

</v-simple-table>
</v-col>
</v-card>

<v-card class="mt-5">

<v-col cols="12" md="12">
<p class="font-weight-bold">COVID-19 Mitigation Compliance</p>

<v-simple-table>
  <thead>


<tr>
<th> Occurrence </th>
<th> Yes or No </th>
<th class="primary white--text text-left"> Remarks </th>
<th class="primary white--text text-left">

  <v-btn small class="secondary" @click="add_loop7">Add Row <v-icon >mdi-plus</v-icon></v-btn>

</th>
</tr>

</thead>

<tbody>

<tr v-for="(l1 , i ) in loop7" :key="i">
<td>
<v-text-field v-model="l1.covid_compliance_activites" :rules="Rules" required label="write your answer"></v-text-field>
</td>
<td>
   <v-radio-group
        v-model="l1.covid_compliance_occurrence"
        :rules="Rules"
        row
        >
        <v-radio
        label="Yes"
        value="1"
        ></v-radio>
        <v-radio
        label="No"
        value="0"
        ></v-radio>
        </v-radio-group>

</td>
<td>
<v-text-field v-model="l1.covid_compliance_remarks" :rules="Rules" label="write your answer" rows="3" required></v-text-field>
</td>
<td>
<v-icon v-if="i > 0" @click="deleteLoop7(i)" color="error">mdi-delete</v-icon>
</td>
</tr>

</tbody>

</v-simple-table>
</v-col>

</v-card>

<v-card class="mt-5">

<v-col cols="12" md="12">

<p class="font-weight-bold">Procurement Request</p>
<v-textarea
:rules="Rules"
v-model="procurement_request"
label="write your answer"
required
></v-textarea>
</v-col>

</v-card>

<v-card class="mt-5">


<v-col cols="12" md="12">
<p class="font-weight-bold">Red Flag</p>
<v-textarea
:rules="Rules"
v-model="red_flag"
label="write your answer"
required
></v-textarea>
</v-col>
</v-card>





<v-card class="mt-5">
  <v-col>


  <v-btn :loading="loader" class="primary ma-2" @click="save">Submit</v-btn>
</v-col>

</v-card>


</v-container>
</v-form>
</template>
<script>
export default {
data: () => ({

        project_id :"",
        user_id :"",
        description_confidential : "",
        daily_situation_summary : "",
        project_key_meeting : "",
        toolbox_talk : "",
        procurement_request : "",
        red_flag : "",
        weather : "" ,
        wind_strength : "",
        weather_wind_remarks : "" ,
        design_build_time : "",
        daily_operation_man_hour : "",
        design_time_hour_remarks : "",

        total_man_days : "",
        total_man_hours : "",
        total_lost_work_hours : "",

        loop1 : [{contractors : '', staff_numbers : '', shift_pattern : '', daily_man_hours : '' }],
        loop2 : [{type_contractors : '', staff_numbers : '', shift_pattern : ''}],
        loop3 : [{activites : '', occurrence : '', remarks : ''}],
        loop4 : [{project_health_activites : '', project_health_occurrence : '', project_health_remarks : ''}],
        loop5 : [{hazard_identify_activites : '', hazard_identify_occurrence : '', hazard_identify_remarks : ''}],
        loop6 : [{near_miss_activites : '', near_miss_occurrence : '', near_miss_remarks : ''}],
        loop7 : [{covid_compliance_activites : '', covid_compliance_occurrence : '', covid_compliance_remarks : ''}],
        // loop8 : [{email : ''}],

        today : '',

        projects : [],

        Rules: [
          v => !!v || 'This field is required',
        ],
        recipientList : [],


        loader: false,

}),

methods : {
  add_loop1 () {
    this.loop1.push({contractors : '', staff_numbers : '', shift_pattern : '', daily_man_hours : '' })
  },
  add_loop2 () {
    this.loop2.push({type_contractors : '', staff_numbers : '', shift_pattern : ''})
  },
  add_loop3 () {
    this.loop3.push({activites : '', occurrence : '', remarks : ''})
  },
  add_loop4 () {
    this.loop4.push({project_health_activites : '', project_health_occurrence : '', project_health_remarks : ''})
  },
  add_loop5 () {
    this.loop5.push({hazard_identify_activites : '', hazard_identify_occurrence : '', hazard_identify_remarks : ''})
  },
  add_loop6 () {
      this.loop6.push({near_miss_activites : '', near_miss_occurrence : '', near_miss_remarks : ''})
    },
  add_loop7 () {
      this.loop7.push({covid_compliance_activites : '', covid_compliance_occurrence : '', covid_compliance_remarks : ''})
    },
  // add_loop8 () {
  //     this.loop8.push({email : ''})
  //   },



  deleteLoop1 (i) { this.loop1.splice(i, 1) },
  deleteLoop2 (i) { this.loop2.splice(i, 1) },
  deleteLoop3 (i) { this.loop3.splice(i, 1) },
  deleteLoop4 (i) { this.loop4.splice(i, 1) },
  deleteLoop5 (i) { this.loop5.splice(i, 1) },
  deleteLoop6 (i) { this.loop6.splice(i, 1) },
  deleteLoop7 (i) { this.loop7.splice(i, 1) },
  // deleteLoop8 (i) { this.loop8.splice(i, 1) },




  success(){
  this.$swal.fire({
  icon: 'success',
  title: 'Email has been sent',
  showConfirmButton: false,
  timer: 2000
  })

  },
  failed(){
  this.$swal.fire({
  icon: 'error',
  title: 'Email not sent',
  showConfirmButton: false,
  timer: 2000
  })



  },



  getRecipientList () {
    this.$axios.get(`recipient/${this.project_id}`)
      .then(res => (this.recipientList = res.data));
  },






  save () {

      if(this.$refs.form.validate()){

            var payload = {
             project_id :  this.project_id,
              user_id : this.$auth.user.id,
              date : this.today,
              description_confidential : this.description_confidential,
              daily_situation_summary : this.daily_situation_summary,
              project_key_meeting : this.project_key_meeting,
              toolbox_talk : this.toolbox_talk,
              procurement_request : this.procurement_request,
              red_flag : this.red_flag,
              weather : this.weather,
              wind_strength : this.wind_strength,
              weather_wind_remarks : this.weather_wind_remarks,

              design_build_time : this.design_build_time,
              daily_operation_man_hour : this.daily_operation_man_hour,
              design_time_hour_remarks : this.design_time_hour_remarks,

              total_man_days : this.total_man_days,
              total_man_hours : this.total_man_hours,
              total_lost_work_hours : this.total_lost_work_hours,

              contractors : this.loop1,

              type_contractors : this.loop2,
              build_activities : this.loop3,
              project_health : this.loop4,
              hazard_identify : this.loop5,
              near_miss_activities : this.loop6,
              covid_compliance : this.loop7,


        };

         this.loader = true;

        this.$axios.post('dhr',payload).then(res => {
            res.data.success ? this.success() : this.failed();
            this.loader = false

          })
      }

},
},







created () {
this.$axios.get('project').then(res => this.projects = res.data);



var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

this.today = dd + '/' + mm + '/' + yyyy;
// document.write(today);
}
}
</script>


<style scoped>
th
{
border-right:2px solid white;
background:#2d57a3;
color: white !important;
width:250px ;
}

</style>
