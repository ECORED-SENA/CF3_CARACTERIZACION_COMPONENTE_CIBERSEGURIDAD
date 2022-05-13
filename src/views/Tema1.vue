<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Riesgo y estimación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade")
        p.mb-0 En la actualidad el riesgo informático se ha convertido en uno de los temas de mayor conversación a lo largo del mundo, puesto que en tiempos actuales ha generado pánico entre la comunidad internacional. Por ejemplo, se han escuchado de ataques informáticos tales como Ransomware, que han desatado la pérdida de millones de dólares a empresas y particulares.

    
    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left.p-5(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1_1.svg')})`}"
    )
      .bloque-texto-g__texto.p-4.my-5.p-5
        p.mb-5 Esta realidad lleva a reflexionar que los riesgos están presentes y llegaron para quedarse. No obstante, este tipo de comportamiento ha cambiado a lo largo de los tiempos, ya que los ataques son cada vez más directos y dañinos.
    
    .bloque-texto-a.color-custom-6.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Esta realidad lleva a reflexionar que los riesgos están presentes y llegaron para quedarse. No obstante, este tipo de comportamiento ha cambiado a lo largo de los tiempos, ya que los ataques son cada vez más directos y dañinos.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema1/img_1.svg' alt='', style="width:400px; display:block; margin:-1rem 0 ;")

    p.mb-5 El riesgo latente es la carencia de seguridad o de tranquilidad que no permite el correcto funcionamiento de los procesos empresariales y personales a lo largo del mundo. De ahí que las compañías hoy día invierten cantidades considerables de millones de dólares para minimizar los riesgos a los cuales están expuestos todos los días.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade")
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 Cabe decir que la seguridad es una disciplina de constante evolución y permanencia; en otras palabras, es una actividad que se debe realizar de manera continua y permanente para mitigar los problemas y riesgos que se pueden presentar todos los días en contra de la infraestructura de las empresas.
  
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-1.mb-0.cs.mg-top-1
    p.my-5 Pero bueno, ¿qué se entiende por riesgo y estimación?, a continuación se conocerá un poco de ello:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6.col-lg-8.col-xl-8(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img.m-3(src='@/assets/curso/images/tema1/info.svg')
          
          .tarjeta.tarjeta-blue(x="23.5%" y="88%" numero="+")
            h5 Riesgo
            .px-3
              p.mb-3 Se conoce como riesgo la posibilidad que ocurra un incidente o situación que atente contra la integridad de algo o alguien. Dentro del contexto informático, el riesgo es toda situación a la que se encuentra expuesta la infraestructura de una empresa y mayormente la información que se determina como “Activo importante”, y está contemplado en la ley 1273 del 2009 de esa manera.

              p.mb-0 De acuerdo a muchos estudios y conceptos no se puede eliminar el riesgo, pero sí crear mecanismos que permitan disminuir la frecuencia o el momento que este suceda. En algunos casos el riesgo es tan grande que no se puede evitar solo minimizar su impacto cuando este sucede.

          .tarjeta.tarjeta-blue(x="71.5%" y="20%" numero="+")
            h5 Estimación
            .px-3
              p.mb-3 La estimación es una aproximación de la realidad de un suceso. Se puede decir son los tiempos establecidos para que un hecho ocurra o se presente. 

              p.mb-0 En algunas ocasiones, la estimación se convierte en un arma fundamental ya que permite preparar y anticipar lo que puede ocurrir, aunque estos datos en la mayoría de ocasiones no son precisos. Se pueden utilizar datos históricos para darle un ambiente más serio a estos asuntos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade")
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 Aunque la estimación no es precisa en la mayoría de las ocasiones es importante aclarar que puede ser una herramienta que acompaña al diagnóstico de la infraestructura, ya que se puede predecir, de acuerdo a información de diversas fuentes, un suceso a ocurrir. En la mayoría de los casos, la estimación es utilizada para medir la gravedad del impacto de un ataque y de esta manera determinar el plan de contingencia si este llega a ocurrir.  

    p.mb-3 El riesgo y la estimación van acompañados, ya que ambos impactan los planes de contingencia y de recuperación de la empresa. La siguiente figura 1 expone la importancia de este balance.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 1. 
          span El riesgo y la estimación
    .row.justify-content-center.mb-5
      .col-lg-10-xl-5(data-aos="fade")
        figure
          img.m-3(src='@/assets/curso/images/tema1/img_2.svg')
    
    p.mb-5 La matriz de riesgo es una herramienta que permite establecer cuáles son las amenazas y cuánto es el valor que las coloca en un rango de mayor prioridad. Por ejemplo, un ataque por virus es muy diferente a un ataque de <i>ransomware</i>, pues el impacto que este generaría es diferente y la mitigación y manera de prevenirlo es totalmente distinta; para este caso particular se debe tener en cuenta la categorización de impacto: bajo, medio y alto, dependiendo del daño que pueda ocasionar y qué tanto puede hacer que el negocio se detenga, tal como se observa en el ejemplo de la figura 2:

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-botones
          h5 Figura 2. 
          span Matriz de riesgo
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12(data-aos="fade")
            figure
              img.m-3(src='@/assets/curso/images/tema1/figure_1.svg')
    
    .jumbotron.p-5(data-aos="fade")
      .row.align-items-center.justify-content-center
        .col-lg-1
          img.mx-1(src='@/assets/curso/images/tema1/ico_1.svg' alt='', style="width:100px; display:block; margin:auto0 ;")
        .col-lg-11
          h3 Para recordar
          p.mb-3 La relación que existe entre el riesgo y la estimación siempre será uno de los pilares relevantes de toda empresa, puesto que involucra a todo el personal, como aquellos que deben velar por la seguridad y la información de la misma.      
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5  

















































 
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    indicadorTarjetaFlip: true,
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
