<template>
<div>
  <User entity="User" :additional_column="arr" :role_id="5" />
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
