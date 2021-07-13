<template>
<div>
    <v-row>

      <!-- <v-col cols="12" sm="8" md="4" >
      <v-card class="pa-5">
      <Chart />
      </v-card>
       </v-col>
       <v-col cols="12" sm="8" md="4" >
      <v-card class="pa-5">
        <PieChart />
      </v-card>
       </v-col>
        -->
        <v-col cols="12" sm="12" md="12" >
                <v-alert class="secondary white--text">
                    <span class="seondary--text">Project : {{project.project_name}}</span>


                </v-alert>


       </v-col>

          <!-- <v-col cols="2" sm="12" md="1" >
            <v-btn to="/project" class="primary white--text" height="55px" width="100%">

                   Go Back
            </v-btn>



       </v-col> -->




          <v-col  cols="12" sm="8" md="4" class="" v-for="(card,i) in cards" :key="i">
            <v-card :to="card.link" :class="card.color" class="pa-2">
            <v-list-item dark>
            <v-list-item-content>
            <div class="text-center">{{added_zero(card.count)}}</div>
            <div class="text-center" v-text="card.text"></div>
            </v-list-item-content>
            </v-list-item>
            </v-card>
          </v-col>

  </v-row>
  <!-- <v-row>
     <v-col  cols="12" sm="8" md="4" v-for="(card,i) in second_cards" :key="i">
            <v-card :class="card.color" class="pa-3">
            <v-list-item dark>
            <v-list-item-content>
            <div class="text-center">{{added_zero(card.count)}}</div>
            <div class="text-center" v-text="card.text"></div>
            </v-list-item-content>
            </v-list-item>
            </v-card>
          </v-col>
  </v-row> -->
  <v-row>

  <v-col cols="6">
        <DoughnutChart v-if="loaded" :data="data" :options="options" :height="200" />
  </v-col>
  <v-col cols="6">
        <LineChart v-if="loaded" :data="data" :options="options"  :height="200" />
  </v-col>
  <v-col cols="6">
        <PieChart v-if="loaded" :data="data" :options="options"  :height="200" />
  </v-col>
  <v-col cols="6">
        <BarChart v-if="loaded" :data="data" :options="options"  :height="200" />
  </v-col>
</v-row>

</div>
</template>

<script>
export default {

  methods : {
    added_zero(v) { return v < 10 ? '0' + v : v }
  },
 data : () => ({
    loaded : false,
    arr : [],
    cards : [],
    value: [],
    data: {
        labels: [],

        datasets: [
          {
            backgroundColor: [],
            data: [],
          },
        ],
      },
      options : {
            showLines: false,
          }
 }),
  computed: {
    project () {
      return this.$store.state.project.project
    }
  },
   async mounted () {
    this.loaded = false
    try {

      await this.$axios.get(`count_by_project/${this.$route.params.id}`)
      .then(res => {

        this.cards = [
                    { link : this.$route.params.id + '/accidentincident',text:'Accident Incident Report',count:res.data.GetAccidentIncidentCount,color:'primary',chartColor : 'rgb(45 87 163)' },
                    { link : this.$route.params.id + '/covid',text:'Covid-19 Report',count:res.data.GetCovidCount,color:'red',chartColor : 'rgb(244 67 54)' },
                    // { link : this.$route.params.id + '/security',text:'Daily Security Report',count:res.data.GetDailySecurityReportCount,color:'info lighten-1',chartColor : 'rgb(75 194 181)' },
                    // { link : this.$route.params.id + '/hse',text:'Daily HSE Report',count:res.data.GetDailyHSEReportCount,color:'orange darken-4', chartColor : 'rgb(230 81 0)' },
                    { link : this.$route.params.id + '/sitevisitor',text:'Daily Site Visitor Report',count:res.data.GetSiteVisiterRecordCount,color:'brown darken-1',chartColor : 'rgb(109 76 65)' },
                    { link : this.$route.params.id + '/traininginduction',text:'Training Induction Report',count:res.data.GetTrainingInductionCount,color:'purple',chartColor : 'rgb(156 39 176)' },
                    { link : this.$route.params.id + '/observation',text:'Observation Report',count:res.data.GetObservationCount,color:'green',chartColor : 'rgb(76 175 80)' },

        ];
        this.data.labels = this.cards.flatMap((v) => v.text )
        this.data.datasets[0].label = 'Reports'
        this.data.datasets[0].data = this.cards.flatMap((v) => v.count )
        this.data.datasets[0].backgroundColor = this.cards.flatMap((v) => v.chartColor )
      });

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
