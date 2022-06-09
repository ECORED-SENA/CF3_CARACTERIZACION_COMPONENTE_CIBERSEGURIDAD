<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Estándar ISO 27001 y estándares para el manejo de la seguridad informática

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-12(data-aos="fade")
        p.mb-3 El estándar ISO 27001 es una norma para el aseguramiento de la seguridad de la información en una organización, en el cual se encuentran todos los lineamientos para su almacenamiento, mantenimiento, confidencialidad y uso. Este estándar es muy importante en las organizaciones y es exigido a las empresas para certificar el uso que le dan a los datos e información que estas manipulan.
        p.mb-0 El propósito de este estándar es garantizar el acceso y protección de la información de acuerdo con los lineamientos establecidos en este mismo estándar. En otras palabras, debe generar confianza y proveer los mecanismos de acceso y tratamiento de la información almacenada. Para ello, se establecen los siguientes riesgos que se pueden revisar en la figura 4:

  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-6.mb-0.cs
    .row.justify-content-center.aling-left
      .col-lg-8
        .titulo-sexto.color-acento-botones
          h5 Figura 4. 
          span Tipos de riesgos
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10(data-aos="fade")
          figure
            img.m-3(src='@/assets/curso/images/tema4/fig_1.svg')


    p.aling-left.mb-3 Por su parte, el ciclo PHVA cumple con un propósito específico para la aplicación de la norma ISO 27001. Consiste en brindar los procesos que se deben seguir y su interrelación; es decir, garantiza la continuidad de los procesos establecidos en la norma ISO 27001 y aplica los enfoques de la mejora continua para cada uno de sus procesos (ver figura 5).

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Figura 5. 
          span Ciclo PHVA
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8(data-aos="fade")
            figure
              img.m-3(src='@/assets/curso/images/tema4/fig_2.svg')

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5
  
  .container.bg-white.px-md-5.px-3.py-2.container-top.fondo-3.mb-0.mg-top-4.cs

    p.mb-3 Ahora bien, así como cualquier norma o estándar establecido, la ISO 27001 debe cumplir con unos procesos o cláusulas que garanticen la aplicabilidad de los procesos dentro de la organización. A continuación, se detalla cada una de ellas:

    .row.align-items-evenly.justify-content-center.mb-5
      .col-lg-8
        TabsA.color-acento-botones.mb-5(data-aos="fade")
          .tarjeta.back-tab.p-4(titulo="Cláusula 1: Alcance")
            
            .row 
              .col-lg-12.mb-4
                h4 Cláusula 1: Alcance
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.font-size
                    | Establecer el propósito de la norma en la organización.
                  li
                    i.fas.fa-circle.font-size
                    | Cuáles son los tipos de organizaciones en los cuales se puede establecer la norma.
                  li
                    i.fas.fa-circle.font-size
                    | Cuáles son los requisitos que debe cumplir la organización para garantizar el cumplimiento de la norma.
       
              p Es importante tener en cuenta que la aplicación de la norma puede ser implementada en cualquier tipo de organización, ya que esta provee los conceptos y principios para el correcto uso de la información. Su grado de complejidad puede estar sometido al tamaño de la organización y a su madurez para la implementación de la misma, aunque en la mayoría de los casos esto no llega a ser impedimento para que una empresa utilice la norma.
                
          .tarjeta.back-tab.p-4(titulo="Cláusula 2: Referencias normativas")
            
            .row 
              .col-lg-12.mb-4
                h4 Cláusula 2: Referencias normativas
                p.mb-0 La terminología aplicada bajo la norma ISO 27001, la cual es totalmente compatible con otras versiones tales como la ISO 27000. Esto quiere decir que en término de version es de la norma es aplicable en todos sus contextos. 

          
          .tarjeta.back-tab.p-4(titulo="Cláusula 3: Términos y definiciones")
            
            .row 
              .col-lg-12.mb-4
                h4 Cláusula 3: Términos y definiciones
                p.mb-0 La norma conversa sobre los riesgos y tratamiento de los mismos al momento de realizar el proceso de manipulación de sistemas de información. También provee los mecanismos para el control de acceso a la evaluación de los riesgos y cómo estos deben ser tratados para evitar problemas de seguridad de la información dentro de la organización.

          .tarjeta.back-tab.p-4(titulo="Cláusula 4: Contexto de la organización")
            
            .row 
              .col-lg-12.mb-4
                h4 Cláusula 4: Contexto de la organización
                p.mb-0 La manera y áreas específicas en la cual se implemente la norma dependerá del contexto mismo de la organización, donde estipule que es un proceso crítico y se establezca cuál es la prioridad. El contexto puede apreciarse desde dos áreas: interno y externo. En el primero se realiza para el control de algunos aspectos de la organización pero que solo afectan de manera interna otros procesos. En el segundo, por su parte, son aquellos aspectos en los que la organización no tiene control; por ejemplo, proveedores, contratistas, entre otros.

            
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/images/tema4/img_1_2.png' alt='', style="width:340px; display:block; margin:auto 2.5rem;")
  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.cs.mb-5
    br
    .row.justify-content-center.align-items-center.my-5
      .jumbotron-2
        .contenedor-text-1
          .row.justify-content-center.p-4
            .col-auto
              p.text-white.mb-3 En la Cláusula Contexto de la organización, como se mencionó, se deben tener en cuenta los aspectos tanto internos como externos de una empresa, tal como se presenta a continuación:
        .row.justify-content-evenly.align-items-center.mt-5.p-5
          .col-lg-5(data-aos="fade-right")
            img(src='@/assets/curso/images/tema4/img_2.svg' alt='', style="width:500px; display:block; margin:auto 0;")
          .col-lg-5(data-aos="fade-left")
            h3.my-5 Aspectos Internos
            LineaTiempoD.color-secundario.especial
              .row(titulo='Formato de la información' numero='1')
                .row.align-items-center
                  .col-lg-12
                    p Conocer los tipos de información que maneja y el porcentaje que tiene en cada una; por ejemplo, información impresa, digital, en medios magnéticos o en la nube. Este aspecto es importante para establecer los mecanismos de acceso y protección de estos activos.
              .row(titulo='Cultura organizacional' numero='2')
                .row.align-items-center
                  .col-lg-12
                    p Se puede establecer en el cómo trabajan las personas en la organización, lo cual también puede definir una ruta específica o maneras de realizar los procesos por parte de la organización.

              .row(titulo='Nivel de madurez' numero='3')
                .row.align-items-center
                  .col-lg-12
                    p Se refiere a si es una organización que apenas está empezando a implementar dentro de sus procesos controles de seguridad o si ya tiene unos procesos implementados y que desea actualizar los que actualmente tiene o implementar nuevos procesos.

        .row.justify-content-evenly.align-items-center.p-5
          .col-lg-5(data-aos="fade-left")
            h3.mb-5 Aspectos Externos
            LineaTiempoD.color-secundario.especial
              .row(titulo='Autorización de cambios' numero='1')
                .row.align-items-center
                  .col-lg-12
                    p Autorización de cambios: se establece si esta necesita de algún agente externo ante el cual la organización no tenga ningún control, es decir que dependa de terceros para poder implementar el modelo o estándar.
              .row(titulo='Nivel económico' numero='2')
                .row.align-items-center
                  .col-lg-12
                    p Que esta se encuentre por crecimientos en la economía o manejo de alguna moneda en particular, lo cual puede afectar en la implementación de procesos que vayan en contra de estos principios y/o procesos.

              .row(titulo='Competencia' numero='3')
                .row.align-items-center
                  .col-lg-12
                    p Cuáles son los rivales o mercados que pueden colocar en riesgo el funcionamiento de la organización, y adicional a ello qué tan competitivo es el mercado en el que esta se encuentra y qué cambios debe realizar periódicamente para mantenerse competitiva frente a la competencia.

              .row(titulo='Manejo del medio ambiente' numero='4')
                .row.align-items-center
                  .col-lg-12
                    p En qué lugar se encuentra la infraestructura la cual pueda tener problemas como inundaciones, terremotos y/o cualquier desastre natural que pueda ocasionar riesgo en la continuidad del negocio, y qué mecanismos o planes de emergencia tiene establecidos para mitigar estos aspectos de seguridad.

              .row(titulo='Ataques informáticos' numero='5')
                .row.align-items-center
                  .col-lg-12
                    p Verificar la frecuencia o huecos de seguridad que puede tener la empresa y que pueden ocasionar que la información se coloque en riesgo bajo la gravedad de los ataques informáticos y qué se hace para minimizar estos comportamientos delictivos.
          .col-lg-5(data-aos="fade-right")
            img.mt-5(src='@/assets/curso/images/tema4/img_3.svg' alt='', style="width:500px; display:block; margin:auto 0;")
         
    .row.align-items-evenly.justify-content-center.mb-5
      .col-lg-12
        TabsA.color-acento-botones.mb-5
    
          .tarjeta.back-tab.p-4(titulo="Cláusula 5: Liderazgo")
            
            .row 
              .col-lg-12.mb-4
                h3 Cláusula 5: Liderazgo
            
                p.mb-3 Un aspecto diferenciador en las organizaciones es la manera en como se establece el liderazgo no solo de los procesos que se deben ejecutar sino también en los aspectos que están incluidos como objetivos en el marco del mejoramiento continuo de la organización. 

                h3.mb-3 Roles y responsabilidades

                p.mb-3 Es importante establecer que las personas que lideren los procesos sean aquellas que cumplan con los perfiles designados para el cumplimiento de estas responsabilidades. Aunque esto en algunas ocasiones no se realiza de la manera más adecuada, se tienen que buscar e implementar los mecanismos para darle cumplimiento a este aspecto, que es uno de los más exigentes en cuanto a la implementación de políticas de seguridad. 

                p.mb-0 Las responsabilidades del personal de seguridad de la información es crucial al momento de presentarse eventualidades que atenten contra la seguridad de componentes tanto físicos como lógicos dentro de la organización. Los roles deben ser establecidos de acuerdo a la experticia y experiencia que tengan los candidatos a ejercer estos tipos de procesos dentro de la organización.
          
          .tarjeta.back-tab.p-4(titulo="Cláusula 6: Planificación")
            
            .row 
              .col-lg-12.mb-4
                h3 Cláusula 6: Planificación
                p.mb-3 La planificación hace parte de la mitigación de los hallazgos que se pueden encontrar. Es una herramienta poderosa para evitar y estudiar posibles eventos futuros que pueden atentar contra la seguridad de la información de la organización. También permite realizar planes de mejora a los aspectos que se encuentran en un nivel de vulnerabilidad visible y aumentar la posibilidad de identificar riesgos que no han sido mitigados y que se pueden convertir en un problema de mayor escala más adelante. De igual forma, incrementa la participación del personal encargado de velar por el correcto funcionamiento de estos procesos. 

                p.mb-3 Los riesgos establecidos se deben tratar de una manera que permita identificar el impacto que estos pueden tener en la organización. Existen riesgos que no se pueden eliminar o simplemente olvidar, ya que estos están inmersos en el quehacer de la organización; para estos riesgos, se determinan aspectos tales como aceptación del riesgo, identificación la de salida más acertada y realización de un estudio que permita determinar si este se puede evadir, escalar a otro nivel, transferirlo a otra dependencia o proceso que se encargue de su tratamiento, o simplemente crear planes de contingencia para que al momento que este ocurra su impacto no sea de una escala mayor para la organización.

          
          .tarjeta.back-tab.p-4(titulo="Cláusula 7: Soportes")
            
            .row 
              .col-lg-12.mb-4
                h3 Cláusula 7: Soportes
                p.mb-3 La implementación del sistema de gestión de la información debe contar con el apoyo de varios entes dentro de la organización; entre ellos se destaca: <b>la competencia, disponibilidad y capacidad.</b>
                p.mb-3 <b>La capacidad</b> está relacionada no solo con el conocimiento de los miembros del equipo sino también con el manejo que estos le puedan dar a los procesos. Es importante establecer que cada miembro del equipo debe contar con un rol específico que asegura el cumplimiento de las políticas de seguridad.
                p.mb-3 <b>Disponibilidad</b> se refiere a los tiempos establecidos para dar cumplimientos con los procesos y protocolos que están establecidos para el manejo de la información y la infraestructura. Por ejemplo, se deben establecer los tiempos para tratamiento de incidentes, atención a usuarios, entre otros.
                p.mb-3 <b>La competencia</b> se refiere a las capacidades de los miembros del equipo de trabajo y cómo establecen los mecanismos para el cumplimiento de cada uno de los requerimientos que se necesitan dentro de la organización. Este aspecto tiene que ver mucho con la interdisciplinariedad del equipo de trabajo.

    .row.justify-content-center.align-items-center.my-5
      .jumbotron-2(data-aos="fade")
        .contenedor-text-1.px-3.py-3
          p.text-white.mb-0 <b>En la Cláusula 7</b>, también se debe establecer qué información se requiere para la implementación del sistema de gestión de la información, la cual debe ser precisa, entendible para los involucrados en el proceso y apoyada en aspectos legales de la organización. Otros aspectos para tener en cuenta ya garantizar frente a este tema, se aprecian en la figura 7:
        .row.justify-content-center.mt-5.p-5
          .col-lg-9
            .titulo-sexto.color-acento-botones
              h5 Figura 6. 
              span Aspectos a garantizar
          .row.justify-content-center.align-items-center
            .col-lg-10(data-aos="fade")
              figure
                img.m-3(src='@/assets/curso/images/tema4/fig_3.jpg')  

    .row.align-items-evenly.justify-content-center.mb-5
      .col-lg-12(data-aos="fade")
        TabsA.color-acento-botones.mb-5
    
          .tarjeta.back-tab.p-4(titulo="Cláusula 8: Operación")
            
            .row 
              .col-lg-12.mb-4
                h3 Cláusula 8: Operación
            
                p.mb-3 La implementación de estos procesos del sistema de seguridad deben estar enmarcados en el cumplimiento de buenas prácticas. Algunas de los componentes a desarrollar para su correcto funcionamiento son los siguientes:
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.font-size
                    P Establecer una comunicación asertiva para la gestión de los riesgos encontrados en la seguridad de la información.
                  li
                    i.fas.fa-circle.font-size
                    P Priorizar las actividades a desarrollar por parte del personal encargado en la organización.
                  li
                    i.fas.fa-circle.font-size
                    P Realizar una adecuada asignación de responsabilidades que deben estar enmarcadas en el perfil de cado uno de los miembros del equipo de trabajo.
                  li
                    i.fas.fa-circle.font-size
                    P Asignar los recursos tanto tecnológicos como humanos para ejecutar de la manera más apropiada el proceso de implementación del sistema.
                  li
                    i.fas.fa-circle.font-size
                    P Establecer la periodicidad de la evaluación de los procesos para determinar que estos están funcionando de la manera más eficiente y en pro de la gestión de la seguridad de la información. 

          .tarjeta.back-tab.p-4(titulo="Cláusula 9: Desempeño y evaluación")
            
            .row 
              .col-lg-12.mb-4
                h3 Cláusula 9: Desempeño y evaluación
                p.mb-3 Se debe fijar un proceso de monitoreo para la verificación del desempeño y evaluación de la implementación del sistema de gestión de la seguridad de la información. Aquí se establecen los controles de seguridad necesarios para garantizar que todo fluye de manera correcta.

                p.mb-3 Así mismo, existen otros aspectos que se deben tener en cuenta tales como las actividades que generan amenazas y la frecuencia en la que se presentan, las vulnerabilidades y su impacto en la infraestructura de la organización, por ejemplo.

                p.mb-3 Hay que determinar qué se puede controlar de una manera sencilla y con el menor de los esfuerzos para colocar su prioridad más baja, ya que son eventos que no tienen un gran impacto y que su control puede ser establecido mediante mecanismos básicos de seguridad. También, definir aquellos procedimientos a seguir en caso de presentarse amenazas a la infraestructura, establecer las responsabilidades de cada uno y cuándo deben actuar para recuperar o mejorar los procesos en los sucesos presentados.
          
          .tarjeta.back-tab.p-4(titulo="Cláusula 10: Mejora continua")
            
            .row 
              .col-lg-12.mb-4
                h3 Cláusula 10: Mejora continua
                p.mb-3 Se establece como un proceso de mecanismos para garantizar el cumplimiento de las políticas de seguridad pero adicional a ello, busca verificar que si se están cumpliendo con los procesos de manera correcta, en la implementación del sistema de gestión de la seguridad de la información; esto incluye hacerse interrogantes tales como: ¿Qué ocurrió? ¿Qué tan grave fue el incidente? ¿Cuánto tiempo costó recuperar el sistema después del suceso? Lo anterior permite evidenciar tanto el buen funcionamiento como los vacíos de  seguridad. 

                p.mb-3 Es importante tener en cuenta que el impacto que esto puede generar es sustancial y que todos los entes de la organización deben girar en torno a estos procesos, ya que de estos depende gran parte de los procesos interno de la empresa.

                p.mb-3 Otra de las cosas a analizar es el estudio detallado de los eventos presentados, este histórico de información permite hacer no solo un balance sino establecer la raíz de muchos de los sucesos presentados, lo que conlleva a la creación de una ruta de trabajo para generar mejores aplicaciones.

    .jumbotron.p-3
      .row.align-items-center.justify-content-center
        .col-lg-2(data-aos="fade")
          img(src='@/assets/curso/images/tema1/ico_1.svg' alt='', style="width:100px; display:block; margin:auto 0;")
        .col-lg-10
          h3 Para recordar
          p.mb-3 La norma ISO 27001, junto con sus cláusulas, permite establecer los lineamientos para realizar una correcta administración de los sistemas y del personal encargado de manipularlos.  

          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Norma._NTC-ISO-IEC_27001.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download      




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
