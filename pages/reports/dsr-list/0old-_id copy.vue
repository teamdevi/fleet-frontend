<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>

      </thead>
      <tbody>
      <tr>
      <th class="text-left">
      EVENT/PROJECT NAME
      </th>

      <td>{{ item.project.project_name }}</td>
      </tr>

           <tr>
      <th class="text-left">
      Date
      </th>

      <td>{{ item.date }}</td>
          </tr>

         <tr>
            <th class="text-left">1. Daily Situation Summary  </th>
            <td>{{ item.daily_situation_summary }}</td> </tr>


       <tr>
      <th class="text-left">2. Event / Project Details</th>

      <td class="pa-5">
        <!-- item.nearmissreporting -->
        <tr>
          <th class="pl-4 pr-4 pb-2 text-left">Weather</th>
          <th class="pl-4 pr-4 pb-2 text-left">Wind Strength</th>
          <th class="pl-4 pr-4 pb-2 text-left">Weather Wind Remarks</th>
          <th class="pl-4 pr-4 pb-2 text-left">Design Build Time</th>
          <th class="pl-4 pr-4 pb-2 text-left">Daily Operation Man Hour</th>
          <th class="pl-4 pr-4 pb-2 text-left">Design Time Hour Remarks</th>
             <th class="pl-4 pr-4 pb-2 text-left">Total Man Days</th>
          <th class="pl-4 pr-4 pb-2 text-left">Total Man Hours</th>
          <th class="pl-4 pr-4 pb-2 text-left">Total Lost Work Hours</th>
        </tr>
         <tr class="inner_tr" v-for="(pd) in projectdetails" :key="pd.id">


          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.weather}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.wind_strength}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.weather_wind_remarks}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.design_build_time}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.daily_operation_man_hour}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.design_time_hour_remarks}}</td>

          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.total_man_days}}</td>

          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.total_man_hours}}</td>

          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{pd.total_lost_work_hours}}</td>
        </tr>

         <tr class="mt-3">
          <th class="pl-4 pr-4 pb-2 text-left">Contractors</th>
          <th class="pl-4 pr-4 pb-2 text-left">Staff Numbers</th>
          <th class="pl-4 pr-4 pb-2 text-left">Shift Patterns</th>
          <th class="pl-4 pr-4 pb-2 text-left">Daily Man Hours</th>

        </tr>

         <tr  class="inner_tr" v-for="(i,c) in contractors" :key="c">

          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.contractors}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.staff_numbers}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.shift_pattern}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.daily_man_hours}}</td>
        </tr>

         <tr class="mt-3">
          <th class="pl-4 pr-4 pb-2 text-left">Contractors Type</th>
          <th class="pl-4 pr-4 pb-2 text-left">Staff Numbers</th>
          <th class="pl-4 pr-4 pb-2 text-left">Shift Patterns</th>

        </tr>

         <tr class="inner_tr" v-for="(i,tc) in type_contractors" :key="tc">

          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.type_contractors}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.staff_numbers}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{i.shift_pattern}}</td>
        </tr>



      </td>


      </tr>

          <tr>
      <th class="text-left">
     3. Event / Project Key Meetings and Action Points
      </th>

      <td>{{ item.project_key_meeting }}</td>
      </tr>


           <tr>
      <th class="text-left">
      4. Security Inductions and Briefings
      </th>

      <td>{{ item.toolbox_talk }}</td>
      </tr>


           <tr>
      <th class="text-left">
      5. Security Incident / Accident or Near Miss Reporting

      </th>

      <td class="pa-5">
        <!-- item.nearmissreporting -->
        <tr>
          <th class="pl-4 pr-4 pb-2 text-left">Occurence</th>
          <th class="pl-4 pr-4 pb-2 text-left">Yes or No</th>
          <th class="pl-4 pr-4 pb-2 text-left">Remarks</th>
        </tr>
         <tr class="inner_tr" v-for="(nm,index) in item.nearmissreporting" :key="index">



           <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{nm.near_miss_activites}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{nm.near_miss_occurrence}}</td>
          <td style="border-bottom:1px solid grey;" class="pl-4 pr-4 pb-2 pt-2">{{nm.near_miss_remarks}}</td>

        </tr>
      </td>
      </tr>





        <tr>
      <th class="text-left">
      6. Security Management Plan and Sub-Contractor Security
      </th>

      <td>{{ item.security_management_plan }}</td>
      </tr>



  <tr>
      <th class="text-left">
     7. Country Travel Security Assessment
      </th>

      <td>{{ item.country_travel_security }}</td>
      </tr>


   <tr>
      <th class="text-left">
     8. Procurement Request
      </th>

      <td>{{ item.procurement_request }}</td>
      </tr>


       <tr>
      <th class="text-left">
     9. Red Flag
      </th>

      <td>{{ item.red_flag }}</td>
      </tr>



      </tbody>
    </template>
  </v-simple-table>
</template>
<script>

export default {

  data : () => ({
    entity : 'Daily Security Report List',
    add : '/reports/form-security',

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
        this.$axios.get('dsr/' + this.$route.params.id).then(res =>  {

          this.projectdetails = res.data.projectdetail
          this.contractors = res.data.projectdetail[0].contractors
          this.type_contractors = res.data.projectdetail[0].type_contractors

          // projectdetails[0].contractors
          console.log(res.data.projectdetail);
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
</style>
