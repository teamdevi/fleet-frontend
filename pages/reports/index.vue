<template>
<v-row>
      <v-col  cols="12" sm="8" md="6" class="" v-for="(card,i) in cards" :key="i">

            <v-card :to="card.link" :class="card.color" class="pa-2">
            <v-list-item dark>
            <v-list-item-content>
            <!-- <div class="text-center">{{added_zero(card.count)}}</div> -->
            <div class="text-center" v-text="card.text"></div>
            </v-list-item-content>
            </v-list-item>
            </v-card>
          </v-col>
</v-row>
</template>

<script>
  export default {
    data: () => ({ cards : [] }),


    created () {
       this.cards = [
                    {text:'Daily HSE Report',color:'orange darken-4',link : '/reports/form-hse'},
                    {text:'Daily Security Report',color:'info lighten-1',link : '/reports/form-security'},


        ];
    },

    methods: {

      added_zero(v) { return v < 10 ? '0' + v : v },

    },
  }
</script>
