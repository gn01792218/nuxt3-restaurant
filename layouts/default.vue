<template>
    <Nav/>
    <slot/>
</template>
<script setup lang="ts">
useHead({
  link:[
    {rel:'stylesheet',href:'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css'}
  ]
})
</script>
