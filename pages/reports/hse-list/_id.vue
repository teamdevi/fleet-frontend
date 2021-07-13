<template>

  <v-card class="mt-5 pl-2 pr-2" elevation="7">

    <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"><b>EVENT/PROJECT NAME</b></v-col>
      <v-col>{{ item.project.project_name }}</v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"><b>Date</b></v-col>
      <v-col>{{ item.date }}</v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"><b>1. Daily Situation Summary</b></v-col>
      <v-col>{{ item.daily_situation_summary }}</v-col>
    </v-row>

    <v-divider></v-divider>
    <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3" class="abc"><b>2. Event / Project Details</b></v-col>
      <v-col>
        <v-row>
         <v-col><b>Weather</b></v-col>
          <v-col><b>Wind Strength</b></v-col>
          <v-col><b>Weather Wind Remarks</b></v-col>
          <v-col><b>Design Build Time</b></v-col>
          <v-col><b>Daily Operation Man Hour</b></v-col>
          <v-col><b>Design Time Hour Remarks</b></v-col>
          <v-col><b>Total Man Days</b></v-col>
          <v-col><b>Total Man Hours</b></v-col>
          <v-col><b>Total Lost Work Hours</b></v-col>
        </v-row>
         <v-row class="pb-2" v-for="(pd) in projectdetails" :key="pd.id">



          <v-col>{{pd.weather}}</v-col>
          <v-col>{{pd.wind_strength}}</v-col>
          <v-col>{{pd.weather_wind_remarks}}</v-col>
          <v-col>{{pd.design_build_time}}</v-col>
          <v-col>{{pd.daily_operation_man_hour}}</v-col>
          <v-col>{{pd.design_time_hour_remarks}}</v-col>

          <v-col>{{pd.total_man_days}}</v-col>

          <v-col>{{pd.total_man_hours}}</v-col>

          <v-col>{{pd.total_lost_work_hours}}</v-col>

        </v-row>

        <v-divider></v-divider>
         <v-row class="pt-4">
          <v-col><b>Contractors</b></v-col>
          <v-col><b>Staff Numbers</b></v-col>
          <v-col><b>Shift Patterns</b></v-col>
          <v-col><b>Daily Man Hours</b></v-col>

        </v-row>



         <v-row v-for="(i,c) in contractors" :key="c">

          <v-col>{{i.contractors}}</v-col>
          <v-col>{{i.staff_numbers}}</v-col>
          <v-col>{{i.shift_pattern}}</v-col>
          <v-col>{{i.daily_man_hours}}</v-col>
        </v-row>

          <v-divider></v-divider>

       <v-row class="pt-4">
          <v-col><b>Contractors Type</b></v-col>
          <v-col><b>Staff Numbers</b></v-col>
          <v-col><b>Shift Patterns</b></v-col>

        </v-row>

         <v-row v-for="(i,tc) in type_contractors" :key="tc">

          <v-col>{{i.type_contractors}}</v-col>
          <v-col>{{i.staff_numbers}}</v-col>
          <v-col>{{i.shift_pattern}}</v-col>
        </v-row>

      </v-col>
    </v-row>

<v-divider></v-divider>

    <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"><b> 3. Event / Project Key Meetings and Action Points</b></v-col>
      <v-col>{{ item.project_key_meeting }}</v-col>
    </v-row>

<v-divider></v-divider>



      <v-row class="pl-5 pb-3 pt-3">
       <v-col cols="3"  class="abc"><b>  4. Design/Build Activities in Progress</b></v-col>

      <v-col>
        <!-- item.nearmissreporting -->
        <v-row>
          <v-col><b>Occurence</b></v-col>
          <v-col><b>Yes or No</b></v-col>
          <v-col><b>Remarks</b></v-col>
        </v-row>
         <v-row class="pb-2" v-for="(bd,b) in item.bulidactivity" :key="b">



           <v-col >{{bd.activites}}</v-col>
          <v-col >{{bd.occurrence}}</v-col>
          <v-col >{{bd.remarks}}</v-col>

        </v-row>
      </v-col>
      </v-row>
      <v-divider></v-divider>

   <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3" ><b>5. Security Inductions and Briefings</b></v-col >

      <v-col>{{ item.toolbox_talk }}</v-col>
      </v-row>

<v-divider></v-divider>

  <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"  class="abc"><b>6. Health, Safety and Environmental Compliance</b></v-col>

      <v-col>
        <!-- item.nearmissreporting -->
        <v-row>
          <v-col><b>Occurence</b></v-col>
          <v-col><b>Yes or No</b></v-col>
          <v-col><b>Remarks</b></v-col>
        </v-row>
         <v-row class="pb-2"  v-for="(ph,index) in item.projecthealthcompliance" :key="index">



           <v-col>{{ph.project_health_activites}}</v-col>
          <v-col>{{ph.project_health_occurrence}}</v-col>
          <v-col>{{ph.project_health_remarks}}</v-col>

        </v-row>
      </v-col>
      </v-row>
      <v-divider></v-divider>

 <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"  class="abc"><b>7. New Hazard Identified</b></v-col>

      <v-col>
        <!-- item.nearmissreporting -->
        <v-row>
          <v-col><b>Occurence</b></v-col>
          <v-col><b>Yes or No</b></v-col>
          <v-col><b>Remarks</b></v-col>
        </v-row>
         <v-row class="pb-2"  v-for="(hd,index) in item.hazardidentify" :key="index">



          <v-col>{{hd.hazard_identify_activites}}</v-col>
          <v-col>{{hd.hazard_identify_occurrence}}</v-col>
          <v-col>{{hd.hazard_identify_remarks}}</v-col>

        </v-row>
      </v-col>
      </v-row>
      <v-divider></v-divider>



      <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3"><b> 8. Security Incident / Accident or Near Miss Reporting</b></v-col>

      <v-col>
        <!-- item.nearmissreporting -->
        <v-row>
          <v-col><b>Occurence</b></v-col>
          <v-col><b>Yes or No</b></v-col>
          <v-col><b>Remarks</b></v-col>
        </v-row>
         <v-row class="pb-2"  v-for="(nm,index) in item.nearmissreporting" :key="index">



          <v-col>{{nm.near_miss_activites}}</v-col>
          <v-col>{{nm.near_miss_occurrence}}</v-col>
          <v-col>{{nm.near_miss_remarks}}</v-col>


        </v-row>
      </v-col>
      </v-row>
      <v-divider></v-divider>


       <v-row class="pl-5 pb-3 pt-3" >
      <v-col cols="3"  class="abc" > <b> 9. COVID-19 Mitigation Compliance</b></v-col>

      <v-col >
        <!-- item.nearmissreporting -->
        <v-row>
          <v-col><b>Occurence</b></v-col>
          <v-col><b>Yes or No</b></v-col>
          <v-col><b>Remarks</b></v-col>
        </v-row>
         <v-row class="pb-2"  v-for="(cc,index) in item.covidcompliance" :key="index">


          <v-col>{{cc.covid_compliance_activites}}</v-col>
          <v-col>{{cc.covid_compliance_occurrence}}</v-col>
          <v-col>{{cc.covid_compliance_remarks}}</v-col>


        </v-row>
      </v-col>
      </v-row>
      <v-divider></v-divider>


        <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3" ><b>10. Procurement Request</b></v-col >

      <v-col>{{ item.procurement_request }}</v-col>
      </v-row>

<v-divider></v-divider>


        <v-row class="pl-5 pb-3 pt-3">
      <v-col cols="3" ><b>  11. Red Flag</b></v-col >

      <v-col>{{ item.red_flag }}</v-col>
      </v-row>





    </v-card>

</template>
<script>

export default {

  data : () => ({
    entity : 'Daily HSE Report List',
    add : '/reports/form-hse',

      item :  {

              country_travel_security: '',
              daily_situation_summary: '',
              date: '',
              description_confidential: '',
              nearmissreporting: '',
              procurement_request: '',
              project: '',
              project_key_meeting: '',
              projectdetail: '',
              red_flag: '',
              security_management_plan: '',
              significant_acts_terrorism: '',
              toolbox_talk: '',
              bulidactivity:'',
              covidcompliance: "",
              hazardidentify: "",
              projecthealthcompliance: "",


      },
      projectdetails : [],
      contractors : [],
      type_contractors : []
  }),
    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.$axios.get('dhr/' + this.$route.params.id).then(res =>  {

          this.projectdetails = res.data.projectdetail
          this.contractors = res.data.projectdetail[0].contractors
          this.type_contractors = res.data.projectdetail[0].type_contractors

          // projectdetails[0].contractors
          console.log(res.data);
          this.item = res.data;
        });

      },


    },
}
</script>

<style scoped>
.inner_tr:last-child > td{
border :none !important;
}


.abc {



      padding-top: 5%;
      padding-bottom: 5%;

}
</style>
