<template>
<div>
    <v-row v-if="isSuperAdmin">

          <v-col cols="12"  md="8">
           <v-row>
              <v-col cols="12" sm="8" md="4" class="" v-for="(card,i) in cards" :key="i">
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
          </v-col>

          <v-col cols="12" md="4">

          <v-card>






          <v-img :src="src" height="200px" />


          <div >
            <v-row >
              <v-col cols="5" ></v-col>
              <v-col cols="2" >
                 <v-img height="75px" width="75px" :src="`https://openweathermap.org/img/w/${ weather.weather[0].icon}.png`"></v-img>
              </v-col>
              <v-col cols="5"></v-col>
            </v-row>


          </div>
           <v-row >
                <v-col v-if="weather && weather.main.temp" cols="12" class="text-center">
                 {{ weather.main.temp }} °C
              </v-col>
            </v-row>

          <v-divider></v-divider>

          <div class="pa-5">
              <v-row>
                <v-col cols="9">
                  <b>Description</b>
                </v-col>

                <v-col cols="3" class="text-right">{{ weather.weather[0].description}}</v-col>
          </v-row>
          </div>

          <v-divider></v-divider>

          <div class="pa-5" >
              <v-row>
                <v-col cols="9">
                  <b>Humidity</b>
                </v-col>
                <v-col cols="3" class="text-right" v-if="weather && weather.main.humidity">{{ weather.main.humidity}}%</v-col>
          </v-row>
          </div>

          <v-divider></v-divider>

          <div class="pa-5">
              <v-row>
                <v-col cols="9">
                  <b>Visibility</b>
                </v-col>
                <v-col cols="3" class="text-right">{{ weather.visibility}}</v-col>
          </v-row>
          </div>


        <v-divider></v-divider>

          <div class="pa-5">
              <v-row>
                <v-col cols="9">
                  <b>Wind Speed</b>
                </v-col>
                <v-col cols="3" class="text-right">{{ weather.wind.speed}}</v-col>
          </v-row>
          </div>
          </v-card>
          </v-col>
  </v-row>

  <v-row v-if="isProjectAdmin || isManager || isProjectAdmin">
    <v-col md="12"><Project /></v-col>
  </v-row>




</div>


</template>

<script>
import Project from '@/components/Project';
import axios from 'axios';


export default {

  components : { Project },

  methods : {
    added_zero(v) { return v < 10 ? '0' + v : v },

  },
 data : () => ({
    //src : 'https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Forcast',
    src : '/weather_bg.png',
    weather :
    {

"weather": [
{
"description": "",
"icon": ""
}
],
"main": {
"temp": "",
"humidity":"",
},
"visibility": "",
"wind": {
  "speed":""
},


},

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
 beforeCreate () {
  axios.get('https://api.openweathermap.org/data/2.5/weather?lon=55.3047&lat=25.2582&units=metric&appid=c77442b715a725c1a34e37121bca1d5c')
      .then(res => {
        this.weather = res.data
      });



},
   async mounted () {



    this.loaded = false
    try {

      await this.$axios.get('all')
      .then(res => {

        this.cards = [
                    {link : '/project',text:'Total Projects',count:res.data.ProjectCount,color:'primary',chartColor : 'rgb(45 87 163)'},
                    {link : '/user/project_admin',text:'Total Project Admins (Clients)',count:res.data.ProjectAdminCount,color:'green',chartColor : 'rgb(45 87 163)'},
                    {link : '/user/wewatchmanager',text:'Total Wewatch Managers',count:res.data.WewatchManagerCount,color:'purple',chartColor : 'rgb(244 67 54)'},
                    {link : '/user/user',text:'Total Users',count:res.data.UserCount,color:'info lighten-1',chartColor : 'rgb(75 194 181)'},
                    {link : '/user/security_guard',text:'Total Security Guard',count:res.data.SecurityGuardCount,color:'orange darken-4', chartColor : 'rgb(230 81 0)'},

        ];

      });

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  computed : {
    isSuperAdmin () {
          return this.$auth.user && this.$auth.user.user_type == 'Super Admin'
    },

    isProjectAdmin () {
      return this.$auth.user && this.$auth.user.user_type == 'project Admin'
    },

    isManager () {
      return this.$auth.user && this.$auth.user.user_type == 'Wewatch Manager'
    }

  }
}
</script>
