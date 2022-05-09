<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade")
        p.mb-0 El componente formativo «Controles y estándares para el manejo de la seguridad de la información» pretende brindar los conocimientos iniciales para realizar una adecuada comprensión sobre los diferentes riesgos y una estimación de estos. El siguiente video expone cada una de las temáticas a desarrollar y su importancia en esta área

    figure.mb-5
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/n6Dffo75ts0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
