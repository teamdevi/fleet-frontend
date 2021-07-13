<template>
<div>
  <User entity="Security Guards" :additional_column="arr" :role_id="7" />
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
