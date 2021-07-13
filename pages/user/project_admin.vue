<template>
<div>
  <User entity="Project Admin" :additional_column="arr" :role_id="2" />
</div>
</template>

<script>
import User from '@/components/User';

export default {
  components : { User },
  data : () => ({
    arr : [
      
    ]
  })
}
</script>
