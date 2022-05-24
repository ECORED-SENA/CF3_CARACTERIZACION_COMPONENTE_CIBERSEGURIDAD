<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Análisis de riesgo y recuperación de desastres
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-6.mb-0.cs
    .row.align-items-center.justify-content-center.mb-5.p-2
      .col-lg-12
        p.aling-left.mb-3 Se denomina desastre a cualquier evento que sucede de manera repentina y que ocasiona que los procesos que realiza una organización se detengan por completo; esto implica toda actividad, sea de índole económica o social. En el caso específico de la seguridad de la información son sucesos que afectan el correcto funcionamiento hasta llegar a la interrupción de la disponibilidad de los servicios informáticos.

        p.aling-left.mb-0  El plan de recuperación de desastres, también denominado DRP, por sus siglas en inglés, es un mecanismo para establecer la prioridad de los eventos causados y la responsabilidad que esto implica en la organización. 
    

    .bloque-texto-g.color-custom-1.p-md-4.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema5/img_1_1.svg')})`}"
    )
      .bloque-texto-g__texto.my-4.p-5.mx-4
    
        p.mb-0 Los planes de recuperación de desastres establecen procedimientos y métricas para analizar los posibles desastres y cómo se puede recuperar el sistema después de ocurridos estos eventos, dentro de los cuales pueden existir causas que no son predecibles en momentos determinados como son los desastres naturales.


    .bloque-texto-a.color-custom-6.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Los planes de recuperación de desastres establecen procedimientos y métricas para analizar los posibles desastres y cómo se puede recuperar el sistema después de ocurridos estos eventos, dentro de los cuales pueden existir causas que no son predecibles en momentos determinados como son los desastres naturales.de comportamiento ha cambiado a lo largo de los tiempos, ya que los ataques son cada vez más directos y dañinos.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema5/img_1.svg' alt='', style="width:400px; display:block; margin:-1rem 0 ;")

    .row.justify-content-center.align-items-center.mb-3.p-2
      .col-lg-10(data-aos="fade")
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 Como en toda organización deben existir responsables de los procesos que se llevan a cabo. El caso de la recuperación de desastres no es la excepción a la regla, de hecho en este proceso no solo se debe establecer <b>el grupo de responsables</b>, quienes deben velar porque los planes de recuperación funcionen, sino que deben establecer un <b>comité específico para su vigilancia y supervisión</b>. Este comité está en la facultad de determinar la validez del plan de recuperación de desastres con base en la evaluación de incidentes presentados o que pueden llegar a presentarse. Adicional a ello, se establece la aprobación para la adquisición de recursos que pueden ser tecnológicos o humanos para velar por el cumplimiento y ejecución del plan de recuperación de desastres.

    p.mb-3.aling-left Cada grupo tiene a su cargo la implementación del plan de recuperación de desastres de acuerdo con las responsabilidades establecidas y equivalentes a los tiempos de respuesta establecidos para el cumplimiento de los planes, tal como se expone en la siguiente figura 8:

    .row.justify-content-center.p-5
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 7. 
          span Responsabilidades de los responsables

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade")
        figure
          img.m-3(src='@/assets/curso/images/tema5/fig_1.svg')  
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5
    p.mb-3 Cabe destacar que la implementación de un plan de recuperación de desastres contiene varios aspectos para tener en cuenta, a continuación se pueden conocer:

    .row.justify-content-center.align-items-center.mt-5.p-3
      .col-lg-6.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_2.png' alt='', style="width:500px; display:block; margin:auto 0;")
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .p(titulo='Protección de la información en los ambientes TIC' numero='1')
            .row.align-items-center
              .col-lg-12
                p.mb-3  Uno de los aspectos a tener en cuenta dentro del <b>DRP</b> es la protección de la información en los lugares donde se procesa y se almacena la misma, esto incluye todos los espacios, dispositivos y demás elementos usados para este proceso.
                p.mb-0 Dicha protección requiere la implementación de mecanismos de seguridad donde también el recurso humano juega un papel importante. Entiéndase como ambiente TIC todo lugar que debe tener una medida de seguridad y donde se encuentran los dispositivos esenciales para llevar a cabo las funciones sustantivas de la empresa; en palabras técnicas, serían los centros de datos donde se encuentran los dispositivos de comunicación, tales como: <i>switches</i>, <i>routers</i>, <i>modems</i>, cableado, servidores, NAS, entre otros.
          .p(titulo='Estrategia de recuperación' numero='2')
            .row.align-items-center
              .col-lg-12
                p.mb-3  Existen muchas estrategias que se pueden implementar para tal propósito, pero lo que sí se debe  tener presente es que, como esta estrategia se encuentra reflejada en el <b>DRP</b>, existen muchos factores a tener en cuenta para establecer una ruta de ejecución. Uno de ellos es la <b>evaluación de los datos</b>, que consiste en la verificación de lo ocurrido en el suceso presentado, dando un punto de partida para la estrategia de recuperación.
                p.mb-0 Otro factor a tener en cuenta es el <b>tiempo estimado de la recuperación</b> en donde se validan. En algunas ocasiones se trata de buscar los mecanismos que permitan disminuir este tiempo puesto que en algunos casos la empresa puede perder dinero cuando el sistema deja de estar operativo. Un ejemplo de ellos son los bancos. Estos deben tener unas estrategias de recuperación con tiempos que no generen grandes pérdidas o caídas del sistema que perjudiquen a los procesos del negocio.

          .p(titulo='Niveles de contingencia' numero='3')
            .row.align-items-center
              .col-lg-12
                p.mb-3  Se establecen en la mayoría de ocasiones para definir el tamaño del daño ocurrido, permitiendo ejecutar la estrategia dependiendo de las causas que pueden ocasionar la caída o mal funcionamiento del sistema. Ahora bien dentro de dichas categorías se encuentran:
                p.mb-3 <b>Contingencias menores:</b>  son provocadas por eventos que pueden afectar a una o varias unidades de negocio pero que su recuperación se puede hacer en tiempos sumamente rápidos y no extienden la pérdida del sistema por mucho tiempo.
                p.mb-3 <b>Contingencias de grado mayor:</b>  son aquellas que provocan afectación en procesos de negocio críticos y que su proceso de operación y recuperación se debe establecer en un periodo no mayor a 24 horas.
                p.mb-0 <b>Contingencias catastróficas:</b> provocan la interrupción de los servicios en un lapso de tiempo prolongado y por tanto, el plan de recuperación de desastre requiere mayor tiempo de recuperación.

          .p(titulo='Activación del Plan de Recuperación' numero='4')
            .row.align-items-center
              .col-lg-12
                p.mb-3 La activación del plan de recuperación de desastres debe establecer los escenarios necesarios para la adaptación o implementación del sistema de recuperación. Cada uno de ellos debe permitir coordinar y efectuar la implementación del plan, sin necesidad de afectar el sistema actual que este implementado. Se debe tener en cuenta aspectos tales como: el impacto y los problemas de implementación que se pueden presentar, la modificación o cambios que se realicen deben estar debidamente autorizados por el grupo de recuperación y establecer, de acuerdo a los niveles de contingencia, los tiempos en la activación del plan.
     
              .col-lg-12
                .titulo-sexto.color-acento-botones
                  h5 Figura 9. 
                  span Declaración del desastre

              .row.justify-content-center.align-items-center.mb-5
                .col-lg-12
                  figure
                    img.m-3(src='@/assets/curso/images/tema5/fig_2.svg') 

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6.mb-3(data-aos="fade-left")
        LineaTiempoD.color-secundario.especial
          .p(titulo='Notificación de eventos' numero='5')
            .row.align-items-center
              .col-lg-12
                p.mb-3 Todo parte desde que se detecta el suceso y se notifica para generar la alerta de la posible contingencia a presentar; estas luego son evaluadas por el equipo y se le coloca el nivel de contingencia de acuerdo a lo establecido por los procedimientos. Luego, pasa al proceso de análisis para estimar el posible daño que este puede generar y se procede a construir una estrategia para mitigarlo o darle el tratamiento que este requiera y así evitar el suceso. 
                p.mb-3 En la mayoría de los casos, los eventos se controlan desde una primera instancia y no generan una gran alarma, pero de igual manera el equipo debe atender todos los requerimientos de forma urgente ya que por descuido se puede generar un problema mayor.
                p.mb-0 Para generar el reporte de algún suceso se deben crear mecanismos como plataformas o formatos para que este sea atendido en la mayor brevedad posible. Estos recursos deben solicitar información tal como: nombre de la persona que reporta el evento, departamento, cargo, breve descripción del incidente, si existen alguna afectación incluirla, número de contacto donde esta persona pueda ser ubicada para posteriormente entrevistarla o conocer más detalles del suceso si es necesario.
          .p(titulo='Análisis de riesgo' numero='6')
            .row.align-items-center
              .col-lg-12
                p.mb-3  El análisis de riesgo es un componente fundamental para la implementación de los planes de recuperación de desastres, ya que permiten estimar el impacto que este podría ocasionar al momento de suceder.
                p.mb-0 En algunas ocasiones, requiere la compra de herramientas y componentes que ayuden a la mitigación del suceso. Cuando el riesgo es demasiado evidente y no se puede evitar, se debe contemplar la realidad y proceder a incluir en el plan de recuperación, que una vez que este suceda hay que lograr recuperar el sistema y sus componentes lo más pronto posible para que el negocio realice su continuidad de manera óptima.

          .p(titulo='Análisis y gestión del riesgo' numero='7')
            .row.align-items-center
              .col-lg-12
                p.mb-3 En este proceso se realiza el inventario de activos que posee la compañía y luego se asigna un valor para establecer las amenazas y riesgos a los que estos pueden estar expuestos. Adicional a ello, se debe determinar el impacto que generaría si alguno de estos dispositivos es vulnerado y cuánto sería el tiempo estimado para su recuperación o puesta en marcha.
                p.mb-0 Todo esto se puede determinar realizando una lista de chequeo con dicha información y que este documento sea conocido por el grupo de recuperación de desastre. Así mismo, se pueden crear los mecanismos de protección y manipulación de estos dispositivos, su ubicación y protección tanto física como lógica.
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/images/tema5/img_3.png' alt='', style="width:500px; display:block; margin:auto -0.5rem;").mb-3

    p.mb-3 Ahora bien, para la gestión de todos esos procesos se encuentra lo que se conoce como <em>Cobit</em>, el cual es un marco de trabajo establecido para garantizar el gobierno de tecnología a través del establecimiento de guías y procesos que aseguren un correcto manejo de la información en las organizaciones (ver figura 10).

    .row.justify-content-center.p-5
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 10. 
          span Entorno <em>Cobit</em>
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="fade")
          figure
            img.mb-2(src='@/assets/curso/images/tema5/fig_3.svg') 
            figcaption #[p.mb-0 Nota. Tomado de ISACA (s.f.).]

    p.mb-3 Ya sabiendo lo anterior, es preciso saber que <em>Cobit</em> comprende cinco principios de trabajo que estipulan la manera en cómo interactúan los procesos dentro de una organización. A continuación se pueden reconocer:

    h3.text-center.mb-5 Principios <em>Cobit</em>

    .row.justify-content-center.mb-3
      .col-lg-4.col-auto.mb-3.mb-lg-0(data-aos="fade")
        .tarjeta-numerada.color-acento-botones.h-100.p-5.mx-3
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 La satisfacción de las partes involucradas en los procesos de la empresa. Este aspecto está estrechamente relacionado con la gobernanza, establece que realizar un correcto proceso conlleva un correcto entendimiento de las personas, tecnología y procesos en una organización.

      .col-lg-4.col-auto.mb-3.mb-lg-0(data-aos="fade")
        .tarjeta-numerada.color-acento-contenido.h-100.p-5.mx-3
          .tarjeta-numerada__numero
            .h2 2
          p.mb-4 Se refiere al cubrimiento total de los procesos de la empresa. Esto implica que no solo se concentra en la tecnología, dispositivos, <em>hardware</em> y <em>software</em> sino que involucra al factor humano como eje fundamental en los objetivos de la organización.

      .col-lg-4.col-auto.mb-3.mb-lg-0(data-aos="fade")
        .tarjeta-numerada.color-primario.h-100.p-5.mx-3
          .tarjeta-numerada__numero
            .h2 3
          p.mb-1 Aplica un marco de referencia integrado en el cual se implementan buenas prácticas para lograr que los procesos funcionen de manera articulada y correcta.

          p.mb-0 Todos los actores de la organización deben estar comprometidos para que los resultados sean positivos en un largo, mediano y corto plazo.

    .row.justify-content-center.mb-5
  
      .col-lg-4.col-auto.mb-3.mb-lg-0(data-aos="fade")
        .tarjeta-numerada.color-secundario.h-100.p-5.mb-3
          .tarjeta-numerada__numero
            .h2 4
          p  Requiere un enfoque holístico en el cual se tienen en cuenta los principios de la organización, los procesos, la estructura organizativa, la cultura organizacional y la información como eje fundamental de los componentes misionales de la organización.
      
      .col-lg-4.col-auto.mb-3.mb-lg-0(data-aos="fade")
        .tarjeta-numerada.color-primario.h-100.p-5
          .tarjeta-numerada__numero.color-custom-7
            .h2 5
          p.mb-0  Se deben separar los componentes de gestión de los componentes de gobierno. Es decir, dividir las necesidades primarias, ya que estas generan el equilibrio y son la razón de ser del negocio, y, por otra parte, la gestión, la cual genera un punto de equilibrio entre todos los componentes de la organización.


    .bloque-texto-a.color-custom-6.p-md-0.mb-5
      .row.m-4.align-items-center.justify-content-between
        .col-lg-8.mb-3(data-aos="fade-right")
          .bloque-texto-a__texto.p-4.my-4
            p Cabe destacar que <em>Cobit</em> es válido en su aplicación para cualquier organización teniendo grandes beneficios en la optimización de procesos y mejorando los niveles de riesgo de los recursos tecnológicos. Es una herramienta esencial para el gobierno de tecnología en una organización, ya que este entrega las guías que se deben tener en cuenta para realizar un proceso de gestión de la tecnología y la información de manera adecuada, permitiendo, además, que la infraestructura como la información funcionen de una manera armónica.
        .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema5/img_4.svg')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="fade")
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 Los principios de <em>Cobit</em> son aplicados independientemente del tamaño de la organización y genera cultura organizacional y buenas prácticas en la organización.






















</template>

<script>
export default {
  name: 'Tema3',
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
