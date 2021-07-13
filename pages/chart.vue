<template>
<v-row>
  
  <v-col cols="6">
      <client-only>
        <DoughnutChart :data="data" :height="200" />
      </client-only>
  </v-col>
    <v-col cols="6">
        <client-only>
        <LineChart :data="data" :height="200" />
      </client-only>

  </v-col>
    <v-col cols="6">
        <client-only>
          <PieChart :data="data" :height="200" />
      </client-only>
        </v-col>
  <v-col cols="6">
        <client-only>
          <BarChart :data="data" :height="200" />      
        </client-only>

  </v-col>
</v-row>
</template>

<script>

export default {
  data() {
    return {
  
     cards_Arr : [],
     comps : ['DoughnutChart'],
        
      data: {
        labels: [],
          
        datasets: [
          {
            label: '',
            backgroundColor: [],
            data: [],
           
          }
        ]
      },
      
    }
  },
  mounted(){
    var arr = [
       {text:'Accident Incident Report',count:9},
        {text:'Covid-19 Register',count:15},
        {text:'Daily Security Report',count:23},
        {text:'Daily HSE Report',count:559},
        {text:'Daily Man Hours',count:125},
        {text:'Daily Site Visiter Register',count:199},
        {text:'Lost Work Hours',count:523},
    ];


    this.data.labels = arr.flatMap((v) => v.text)
    this.data.datasets[0].data = arr.flatMap((v) => v.count)
    
    // this.data.datasets[0].label = 'francis'
    this.data.datasets[0].backgroundColor = [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 159, 64)',
            'rgb(201, 203, 207)',
            'rgb(153, 102, 255)',
            'rgb(255, 205, 86)'
    ]
    
  },

  computed: {
    myStyles () {
      return {
        height: `${this.height}px`,
        position: 'relative'
      }
    }
  },

}
</script>