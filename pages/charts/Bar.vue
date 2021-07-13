<template>
<v-row>
  <v-col cols="12">   
    <client-only>
        <BarChart :data="data" :height="200" />
    </client-only>
  </v-col>
</v-row>
</template>

<script>

const colors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

export default {
  data() {
    return {
      color : '',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Income',
            backgroundColor: [
                "rgb(255, 99, 132)", 
                "rgb(255, 159, 64)", 
                "rgb(255, 205, 86)"
                ],
            data: [555,555,555]
          }
        ]
      },
    }
  },
  methods:{
      test(){
          console.log(this.data.datasets[0].label = 'test');
      }
  }
}
</script>