<template>
  <v-data-table
    :headers="headers"
    :items="data.data"
    :search="search"
    class="elevation-1"
    @pagination="paginate"
    :server-items-length="data.total"
    :items-per-page="5"
    :footer-props="{
    itemsPerPageOptions : [5,10,15,20]
    }"

  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>{{entity}}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field
        label="Search"
        hide-details v-model="search"></v-text-field>


      </v-toolbar>
    </template>
    <template v-slot:item.attachments="{ item }">


        <img height="150px" width="150px"  :src="item.attachments" />

    </template>

    <template v-slot:item.actions="{ item }">
      <!-- <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon> -->
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    data: () => ({

      entity : 'Training Induction',
      search:'',
      headers: [
        {
          text: 'attachments',
          sortable: true,
          value: 'attachments',
        },

        {
          text: 'Project',
          sortable: true,
          value: 'project.project_name',
        },
        {
          text: 'session_type',
          sortable: true,
          value: 'session_type',
        },
        {
          text: 'subject',
          sortable: true,
          value: 'subject',
        },
        {
          text: 'no_attendees',
          sortable: true,
          value: 'no_attendees',
        },



        { text: 'Delete', value: 'actions', sortable: false },

      ],
      data: [],


    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New' : 'Edit'
      },

    },


    methods: {

            paginate (e) {
            this.$axios.get(`traininginduction/project/${this.$route.params.id}?page=${e.page}`, {

            params: { per_page : e.itemsPerPage}

            }).then(res => {
            this.data = res.data;
            });
        },




      deleteItem (item) {

         confirm('Are you sure you want to delete this item?') &&
         this.$axios.delete('traininginduction/'+item.id)
            .then((res) => {

              const index = this.data.indexOf(item)
              this.data.splice(index, 1)

            });
      },



    },
  }
</script>
