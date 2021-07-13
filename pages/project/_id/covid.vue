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

        <v-text-field
        class="mx-4"
        label="Search"
        hide-details v-model="search"></v-text-field>

      </v-toolbar>
    </template>
    <template v-slot:item.image="{ item }">


      <!-- {{item.image}} -->
        <img height="150px" width="150px"  :src="item.image" />

    </template>

    <template v-slot:item.open_file="{ item }">

      <a :href="`/project/${item.project_id}/covid/${item.id}`">

        <v-btn
        small
        class="primary">
        Open File &nbsp;

        <v-icon
        small

        >
        mdi-open-in-new
        </v-icon>
        </v-btn>

      </a>


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

      entity : 'Covid',
      search:'',
      headers: [
        {
          text: '#',
          sortable: true,
          value: 'id',
        },
         {
          text: 'Project',
          sortable: true,
          value: 'project.id',
        },
         {
          text: 'FIle',
          sortable: true,
          value: 'open_file',
        },
        {
          text: 'Staff Name',
          sortable: true,
          value: 'staff_name',
        },
        {
          text: 'Company',
          sortable: true,
          value: 'company',
        },
         {
          text: 'Remarks',
          sortable: false,
          value: 'remarks',
        },


        { text: 'Actions', value: 'actions', sortable: false },

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
           this.$axios.get(`covid/project/${this.$route.params.id}?page=${e.page}`, {

                params: { per_page : e.itemsPerPage}

              }).then(res => {
                this.data = res.data;
            });
        },




      openFile(){

        this.$router.push(`/project/${item.id}`);

      },
      deleteItem (item) {

         confirm('Are you sure you want to delete this item?') &&
         this.$axios.delete('covid/'+item.id)
            .then((res) => {

              const index = this.data.indexOf(item)
              this.data.splice(index, 1)

            });
      },


    },
  }
</script>
