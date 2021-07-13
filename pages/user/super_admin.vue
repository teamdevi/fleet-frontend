<template>
<div>
  <User entity="Super Admin" :additional_column="arr" :role_id="1" />
</div>
</template>

<script>
import User from '@/components/User';

export default {
  components : { User },
   data : () => ({
    arr : []
  })
}
</script>
