<template>
  <v-app dark>
    <v-navigation-drawer
    style="min-height: 100%;     z-index: 0;"
    class="primary"
    dark
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"

          router
          exact
        >
          <v-list-item-action >
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="white"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon  @click.stop="drawer = !drawer" />
      <v-btn
        class="hidden-sm-and-down"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-toolbar-title v-text="title" /> -->

        <Logo class="hidden-sm-and-down" src="/logo.png" alt="login" style="width:15%;margin: 15px;" />
        <Logo class="hidden-md-and-up" src="/logo.png" alt="login" style="width: 70%; margin: 20px; padding: 10px;" />

        <!-- <img class="hidden-sm-and-down" src="/logo.png" alt="login" style="width:15%;margin: 15px;">
        <img class="hidden-md-and-up" src="/logo.png" alt="login" style="width: 70%; margin: 20px; padding: 10px;"> -->

      <v-spacer />
       <span class="secondary--text hidden-sm-and-down">{{Greetings}}</span>
      <v-btn @click="logout" icon color="secondary">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
      <v-breadcrumbs class="hidden-sm-and-down" :items="items">
      <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
      </template>
      </v-breadcrumbs>
      <nuxt />
      </v-container>
    </v-main>

    <v-footer
      dark
      class="grey"
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      links : [],
      hide : false,
      clipped: true,
      drawer: false,
      fixed: false,
      items: [],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      text:'fleet'
    }
  },
  created () {



    var AllMenu = [
      {
          icon: 'mdi-apps',
          text:'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          text:'Project Admin',
          to: '/user/project_admin',
         },
          {
          icon: 'mdi-chart-bubble',
          text:'Client',
          to: '/user/client'
        },
        {
          icon: 'mdi-chart-bubble',
          text:'Project',
          to: '/project'
        },

         {
          icon: 'mdi-chart-bubble',
          text:'wewatch Manager',
          to: '/user/wewatchmanager'
        },
         {
          icon: 'mdi-chart-bubble',
          text:'User',
          to: '/user/user'
        },
         {
          icon: 'mdi-chart-bubble',
          text:'Security Guards',
          to: '/user/security_guard'
        },


        {
          icon: 'mdi-chart-bubble',
          text:'Allocation',
          to: '/allocations'
        },

        {
          icon: 'mdi-chart-bubble',
          text:'Email Allocation',
          to: '/recipients/add_recipients'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   text:'HSE',
        //   to: '/hse',
        //   external : '',
        // }
        // ,
        // {
        //   icon: 'mdi-chart-bubble',
        //   text:'Securtiy',
        //   to: '/security',
        //   external : '',
        // }

          {
            icon: 'mdi-chart-bubble',
            text:'Report',
            to: '/reports'
          },
    ];


    if(this.isSecurityGuard){
    this.items = [
        {
          icon: 'mdi-apps',
          text:'Dashboard',
          to: '/'
        },

    ]
    }
    else if(this.isUser){
      this.items = [
        {
          icon: 'mdi-apps',
          text:'Dashboard',
          to: '/'
        },

    ]
    }
    else if(this.isProjectAdmin){
      this.items = [
        {
          icon: 'mdi-apps',
          text:'Dashboard',
          to: '/'
        }
    ]
    }
    else if(this.isManager){
      this.items = [
        {
          icon: 'mdi-apps',
          text:'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          text:'Project',
          to: '/project'
        },

    ]
    }

    else{
      this.items = AllMenu;
    }

  },
  computed : {

    Greetings () {
      return 'Welcome, ' + this.$auth.user.email;
    },


    isSecurityGuard () {
      return this.$auth.user && this.$auth.user.user_type == "Security Guard";
    },

    isProjectAdmin () {
      return this.$auth.user && this.$auth.user.user_type == "project Admin";
    },

    isUser () {
      return this.$auth.user && this.$auth.user.user_type == "User";
    },
    isManager () {
      return this.$auth.user && this.$auth.user.user_type == 'Wewatch Manager'
    }
  },
  methods:{
     logout() {
       this.$auth.logout();
},
  }
}
</script>
