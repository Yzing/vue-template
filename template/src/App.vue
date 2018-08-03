<template lang="html">
  <div id="app">
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<script>
export default {
}
</script>

{{#sass}}
<style lang="scss">
</style>
{{else}}
<style lang="css">
</style>
{{/sass}}
