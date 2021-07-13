<template>
<div>
    <List :entity="entity" :headers="headers" :add="add" :items="items" />
</div>
</template>

<script>
import List from '@/components/List';

export default {
  components : { List },
  data : () => ({
    entity : 'Daily HSE Report List',
    add : '/reports/form-hse',
    headers : [
          { text: 'Email', value: 'email' },
          { text: 'Actions', value: 'actions', sortable: false },
    ],
    items : [

    ]
  })
}
</script>
