<template>

<div>
    <p class="font-weight-bold">Recipient List</p>

    <div v-for="(rl , i) in recipientList" :key="i">
    <span class="primary white--text ma-1 row pa-2" row x-samll>{{ i + 1 }}. {{rl.email}}</span>
    </div>
</div>
   
</template>

<script>
  export default {
    props : ['recipientList']
    }
</script>