<template>
<div>
  <User entity="Client" :additional_column="arr" :role_id="6" />
</div>
</template>

<script>
import User from '@/components/User';

export default {
  components : { User },
  data : () => ({
    arr : [ 
      { 
      text: 'Project Admin', 
      sortable: false, 
      value: 'admin.name'
    }
    ]
  })
}
</script>
