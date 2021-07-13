<template>
  <v-app dark>
    <v-container>
        <nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Report',
          to: '/report'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Client',
          to: '/client'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Project',
          to: '/project'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Manager',
          to: '/Manager'
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'fleet'
    }
  }
}
</script>
