<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")(data-aos="zoom-in-left")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Se ha llegado al final de este componente. A continuación, conozca una gráfica que sintetiza las temáticas desarrolladas:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade")
        img(src="@/assets/curso/images/tema5/info_sintesis.svg")

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
