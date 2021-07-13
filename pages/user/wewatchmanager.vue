<template>
<div>
  <User entity="wewatch Manager" :additional_column="arr" :role_id="4" />
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
