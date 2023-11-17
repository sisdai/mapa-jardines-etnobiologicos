<script setup>
import JardinesEtnobiologicos from '@/components/mapas/JardinesEtnobiologicos.vue'
const public_path = process.env.BASE_URL
</script>

<template>
  <JardinesEtnobiologicos
    :ruta_zip="`${public_path}data/hcti_jardines_etnobiologicos_210923_xy_p.zip`"
  />
</template>

<style lang="scss">
// Estilos de la biblioteca
@import 'node_modules/sisdai-css/src/eni.scss';
</style>
