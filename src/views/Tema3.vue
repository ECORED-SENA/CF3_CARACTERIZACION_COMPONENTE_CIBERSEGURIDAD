<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Seguridad física y políticas de seguridad

    p.mb-3 La #[b seguridad física] es uno de los aspectos fundamentales en una organización. Esta permite crear los mecanismos de barrera para salvaguardar los activos de la misma; sabiendo esto, a continuación, se precisan algunos conceptos en la figura 3:

  
    .row.justify-content-center.align-items-center.bg_grad-01.mb-3
      .row.justify-content-center.mt-5
        .col-lg-12(data-aos="fade")
          .titulo-sexto.color-acento-botones
            h5 Figura 3. 
            span Conceptos de mecanismos de seguridad
      .row.justify-content-center.mb-5
        .col-lg-4.mb-3.mb-lg-0.col-10
          .tarjeta-1.tarjeta-up
            img(src="@/assets/curso/images/tema3/tj_1.svg", alt= "")
            .tarjeta-up__content.bg-1
              h4 Activo físico:
              p Es todo aquel elemento tangible dentro de un espacio; es decir, todo aquello que se puede palpar; un ejemplo de ello, es una computadora, una mesa, una silla, entre otros.
        .col-lg-4.mb-3.mb-lg-0.col-10
          .tarjeta-1.tarjeta-up
            img(src="@/assets/curso/images/tema3/tj_2.svg", alt= "")
            .tarjeta-up__content.bg-1
              h4 Seguridad física:
              p Busca garantizar la seguridad de los activos físicos, colocando barreras para su protección. Un ejemplo puede ser el guardia de seguridad, quien se encarga de verificar a las personas que ingresan a la organización.
        .col-lg-4.mb-3.mb-lg-0.col-10
          .tarjeta-1.tarjeta-up
            img(src="@/assets/curso/images/tema3/tj_3.svg", alt= "")
            .tarjeta-up__content.bg-1
              h4 Otros:
              p Otro ejemplo puede ser hasta una puerta, en la cual solo el personal autorizado o personas que tengan la llave o mecanismo de autenticación pueden ingresar a esos espacios. 
    
    
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-10(data-aos="fade")
          .cajon.color-custom-2.p-4.mb-3
            p.mb-3 Como se puede apreciar la seguridad física se encarga de velar por los controles físicos establecidos para prevenir la intrusión o vulnerabilidades de la infraestructura de una organización. En estos elementos se pueden consagrar dispositivos, personas y toda medida que permita asegurar los bienes de la organización.


    p.mb-3 Existen muchos aspectos a considerar con respecto a la seguridad física, la cual como se ha expresado, es un conjunto de medidas que permiten garantizar el acceso y control de los lugares de la empresa. Si se explora un poco sobre algunos de estos, se verá que estas medidas van desde la instalación de cámaras de seguridad, sensores, tarjetas inteligentes hasta lectores de huella.

    .bloque-texto-g.color-custom-5.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img(data-aos="fade-right")(
        :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-5.m-right(data-aos="fade-left")
        p.mb-0 En este aspecto, cabe decir, que estas medidas, a pesar de contener componentes tecnológicos, también se hace presente el factor humano, es decir: un celador o guarda de seguridad; por ejemplo, que interactúa en la infraestructura de la empresa como un componente de seguridad y que también toma un valor importante en la misma.

    .bloque-texto-a.color-custom-6.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p En este aspecto, cabe decir, que estas medidas, a pesar de contener componentes tecnológicos, también se hace presente el factor humano, es decir: un celador o guarda de seguridad; por ejemplo, que interactúa en la infraestructura de la empresa como un componente de seguridad y que también toma un valor importante en la misma.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_1.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;")

    p.mb-3 Ahora bien, por otra parte, también se encuentran las políticas de seguridad como un factor primordial y complementario a la seguridad física. Son aspectos que se deben tener en cuenta para el cumplimiento de normas y estatutos orientados a la preservación de los datos e información de una empresa, aunque de igual manera, se debe tener en cuenta que los activos físicos de la compañía se deben proteger en ese mismo sentido.

    .bloque-texto-g.color-custom-1.p-3.p-sm-4.p-md-5.mb-5.d-none.d-lg-block
      .bloque-texto-g__img.m-left(data-aos="fade-left")(
    :style="{'background-image': `url(${require('@/assets/curso/images/tema3/img_2.png')})`}"
    )
      .bloque-texto-g__texto.p-5(data-aos="fade-right")
        p.mb-3 Las políticas son implementadas para dar cumplimiento a los procesos misionales de la organización; es decir, deben estar conectados con la misión de la empresa y sirven de apoyo para lograrlo de una manera adecuada y sin ningún percance.

    .bloque-texto-a.color-custom-6.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p Las políticas son implementadas para dar cumplimiento a los procesos misionales de la organización; es decir, deben estar conectados con la misión de la empresa y sirven de apoyo para lograrlo de una manera adecuada y sin ningún percance.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema3/img_2.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;")

    p.mb-3 De todos los procesos que se llevan a cabo en la organización, el establecer políticas es uno de los más complejos puesto que cada usuario dentro de su proceso quiere tener autonomía en lo que realiza dentro de la empresa. Se puede ver a continuación algunos de esos mecanismos de políticas de seguridad que se implementan en las organizaciones:

    ImagenInfograficaB.color-acento-botones.mb-3
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/images/tema3/info_1.svg', alt='Texto que describa la imagen')
          
      div(x="21%" y="27%" tooltip="Política de estructura organizacional de seguridad de la información")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_1.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            h5.mb-2 Política de estructura organizacional de seguridad de la información
            p De acuerdo al sistema de seguridad de la información, se deben establecer roles y responsabilidades por parte del equipo ejecutor de dichas operaciones. En este caso es importante que se establezcan dichas responsabilidades de acuerdo al perfil técnico de cada integrante del equipo. Adicional a ello, es fundamental la creación de un comité de seguridad para establecer los protocolos a cumplirse en la organización.
        

      div(x="21%" y="49%" tooltip="Política de seguridad para los recursos humanos")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_2.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Política de seguridad para los recursos humanos
            p En este caso particular se debe realizar un proceso de selección de las personas que serán contratadas para el control y manipulación de los procesos de seguridad dentro de la organización. Esto se debe realizar teniendo en cuenta la verificación de antecedentes, y bajo las políticas de tratamiento de datos establecidos en la Ley 1581 de 2012 Hábeas data.

      div(x="21%" y="70%" tooltip="Política de uso de internet")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_3.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Política de uso de internet
            p Esto debe estar establecido de acuerdo a garantizar la eliminación de posibles huecos de seguridad que se puedan presentar, teniendo en cuenta que la conexión de los equipos de la empresa a diferentes sitios de internet hacen parte de los procesos misionales de la empresa. Se deben crear restricciones para el acceso de algunos sitios y procesos que pueden colocar en riesgo la información y la infraestructura de la misma. También, se hace necesario determinar cuáles serán los permisos y acceso que tendrán los usuarios de acuerdo al estudio de seguridad que se realice.

      div(x="64%" y="35%" tooltip="Política de clasificación de la información")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_4.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Política de clasificación de la información
            p Esta política lo que intenta es clasificar la información de acuerdo al nivel de acceso y tratamiento que esta debe tener dentro de la organización. Esto implica tener claro cuál es el protocolo de tratamiento y manipulación por el personal de la empresa. Para ello se ha establecido los siguientes niveles de clasificación: información pública, privada y sensible.

      div(x="81%" y="22%" tooltip="Información pública")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_5.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Información pública
            p Es información que se suministra por parte de un usuario pero que no incurre en ninguna penalización; es decir, es de dominio público, como el nombre, contacto telefónico, correo electrónico, edad, entre otros.

      div(x="81%" y="33%" tooltip="Información privada")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_6.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Información privada
            p Es información que se debe trabajar con un esquema de protección mucho más secreto; es decir, son datos que no puede ser conocidos de manera pública o directa por cualquier persona y necesitan un manejo mucho más complejo. Ejemplo: datos bancarios, datos de religión, preferencia sexual, declaración de renta, entre otros que en algún momento pueden colocar en riesgo la integridad de la persona.

      div(x="81%" y="45%" tooltip="Información sensible")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_6.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Información sensible
            p Esta información puede ser manipulada bajo estrictos protocolos de administración y manejo puesto que son datos que podrían, en algún momento, colocar en riesgo la vida de una persona o su imagen ante la sociedad, entre otras cosas; tales datos podrían ser: historia clínica, preferencias religiosas, personas que han sido amenazadas, entraría la información de ubicación o rutas por donde se moviliza, entre otros.

      div(x="64%" y="57%" tooltip="Política de control de acceso")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_6.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Política de control de acceso
            p Este aspecto está relacionado con las adquisiciones que se realizan desde el departamento de tecnologías, el cual debe haber realizado un estudio previo  de acuerdo a la viabilidad y necesidades tanto de usuarios como de la infraestructura de la empresa.  En algunas ocasiones es importante tener en cuenta que en la mayoría de los casos estos procesos de adquisición tanto de <em>hardware</em> como de <em>software</em> deben estar avalados por una licitación, en la que participen distintos interesados para sí proceder a estudiar dichas propuestas y determinar cuál cumple con los requerimientos que se necesitan.

      div(x="64%" y="79%" tooltip="Política de establecimiento, uso y protección de claves de acceso")
        .row.justify-content-center
          .col-3.col-lg-2.mb-4.mb-lg-0
            img(src='@/assets/curso/images/tema3/ico_6.svg'  alt='', style="width:100px; display:block; margin:auto 0 ;")
          .col-lg-10
            .h5.mb-2 Política de establecimiento, uso y protección de claves de acceso
            p.mb-3 En este caso se deben utilizar diversos componentes que garanticen que el acceso a la información sea conforme a lineamientos de seguridad que verifiquen la autenticidad del ingreso al sistema en todo momento, es decir se debe tener claro quién, cuándo, dónde y cómo está accediendo a la información.

            p.mb-0 Lo primero que se debe establecer es la responsabilidad de los usuarios en el uso de sus credenciales, las cuales son intransferibles. Por otro lado al momento de solicitar el cambio de contraseña, ya que este proceso se debe llevar a cabo con una periodicidad establecida, la cual puede variar de acuerdo a políticas, debe ser solicitado al personal de tecnología de la empresa o cumplir con algunos criterios mínimos, que se han expuesto anteriormente. 

    p.mb3(data-aos="fade")  Lo anterior refleja el panorama genérico de la importancia de establecer políticas de seguridad que garanticen el correcto funcionamiento de los elementos de tecnología de una organización.


    .jumbotron.p-3(data-aos="fade")
      .row.align-items-center.justify-content-center
        .col-lg-1
          img.mx-1(src='@/assets/curso/images/tema1/ico_1.svg' alt='', style="width:100px; display:block; margin:auto 0;")
        .col-lg-11
          h3 Para recordar
          p.mb-3 La definición de una adecuada política minimiza el riesgo de comprometer la información y los datos que se ingresan y procesan en un sistema de información. La seguridad física de una organización, por su parte, no solo son elementos tecnológicos sino que también involucra el personal responsable de asegurar y resguardar la información.

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

<style lang="sass">
.tarjeta-up
  overflow: hidden
  position: relative
  .tarjeta-up__content
    position: absolute
    bottom: -200%
    width: 100%
    height: 83%
    padding: 2rem
    transition: bottom 0.7s ease-in-out
    @media (max-width: 992px)
      height: 85%
    &.bg-1
        background-color: rgba(255, 255, 255, 0.9 )
        h1, h2, h3, h4, h5, p
          color: $black
  &:hover
    .tarjeta-up__content
      bottom: 0%
</style>
