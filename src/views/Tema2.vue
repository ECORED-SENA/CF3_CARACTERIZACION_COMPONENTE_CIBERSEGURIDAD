<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Controles de seguridad en una red
    
    .bloque-texto-a.color-custom-3.p-md-0.d-none.d-lg-block
      .row.m-4.align-items-center.justify-content-between
        .col-lg-7(data-aos="fade-right")
          .bloque-texto-a__texto.p-4.my-5
            p La seguridad, como ya se ha evidenciado, es un factor importante en las empresas y organizaciones, y por tanto conlleva una gran responsabilidad, junto con los métodos y procesos que se deben seguir para lograr establecer un nivel óptimo que permita garantizar la seguridad e integridad de la información.
        .col-lg-5.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema2/img_1_1.png').mg-top-3

    .bloque-texto-a.color-custom-6.p-md-0.mb-5.d-block.d-lg-none
      .row.m-4.align-items-center.justify-content-between
        .col-lg-9(data-aos="fade-right")
          .bloque-texto-a__texto.p-5.my-5
            p La seguridad, como ya se ha evidenciado, es un factor importante en las empresas y organizaciones, y por tanto conlleva una gran responsabilidad, junto con los métodos y procesos que se deben seguir para lograr establecer un nivel óptimo que permita garantizar la seguridad e integridad de la información.
        .col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/images/tema2/img_1_2.png' alt='', style="width:400px; display:block; margin:-1rem 0 ;")
    
    p.mb-3 Hoy día existen muchas herramientas que ayudan a realizar este proceso de una manera adecuada. Algunas de ellas se abordan a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta-blue-1")(data-aos="fade")
      div(titulo="Actualización de los parches de seguridad de los dispositivos de conexión")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3
            img(src='@/assets/curso/images/tema2/img_2.png'  alt='', style="width:600px; display:block; margin:auto 0 ;").mb-3
          .col-lg-9
            p.mb-3 Este aspecto es de suma importancia, puesto que los dispositivos de conexión tienen instalado en sus sistemas parches de seguridad, los cuales previenen en la mayoría de ocasiones ataques informáticos y conductas en la red.  

            .cajon.color-custom-4.p-4.mb-3
              p.mb-3 Un ejemplo muy particular de esto son los algoritmos de encriptación que utilizan muchos de ellos; hasta hace unos años el algoritmo de cifrado para redes era el WEP, el cual fue reemplazado por el WPA, luego este último fue reemplazado por el algoritmo WPA-2, el cual genera claves mucho más robustas y con mayor nivel de seguridad. Lo anterior demuestra lo importante que es la actualización de estos dispositivos de conexión, ya que al no realizar estos procesos, se tendrán reglas obsoletas que se pueden convertir en huecos de seguridad para vándalos informáticos.

          p.mb-3 La actualización de estos parches de seguridad se realiza ingresando al sistema de configuración del dispositivo, en algunas ocasiones cuando se tiene contratado un servicio con una empresa es ella quien realiza este proceso de actualización de manera remota, pero en los casos de tener autonomía total en los dispositivos se pueden comprar las actualizaciones o servicios para que se realicen lo más pronto posible.

      div(titulo="Contraseñas")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3
            img(src='@/assets/curso/images/tema2/img_3.png'  alt='', style="width:600px; display:block; margin:auto 0 ;").mb-3
          .col-lg-9
            p.mb-3 Aunque muchos sistemas informáticos contemplan la posibilidad de utilizar contraseñas con nivel de seguridad débil, es responsabilidad de las personas encargadas de estos sistemas de información garantizar que las contraseñas cumplan con una longitud y combinación de caracteres que permitan una autenticación mucho más segura a los sistemas informáticos y por su puesto a la información. Estas son algunas de las consideraciones a tener en cuenta:

            .cajon.color-custom-4.p-4.mb-3
              p.mb-3 Utilizar como mínimo 8 caracteres, mezclar mayúsculas, minúsculas, números, letras y caracteres especiales, no incluir fechas especiales, nombres o información que se encuentre almacenada en el registro previo realizado al sistema.

          p.mt-3 También es importante tener en cuenta realizar el cambio de contraseña con frecuencia, la cual se puede establecer en un periodo determinado; puede estar fijado por una fecha específica desde la asignación de la contraseña o por el número de intentos acertados del usuario.

      
      div(titulo="Autenticación")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3
            img(src='@/assets/curso/images/tema2/img_4.png'  alt='', style="width:600px; display:block; margin:auto 0 ;").mb-3
          .col-lg-9
            p.mb-3 Este concepto está relacionado con la verificación de quienes ingresan al sistema. Es decir, tener la certeza de que quién esté utilizando las credenciales de acceso sea la persona que le corresponden; para estos casos particulares se utilizan hoy día métodos de autenticación biométricos para garantizar un margen de error mínimo, aunque se sabe que ningún método es 100% seguro. Sin embargo, la utilización de estos en gran manera minimiza la brecha de seguridad de ellos. 

            p Dichos dispositivos requieren de una configuración y en algunos casos de una calibración tal que es necesario, en algunos momentos, la contratación de personal experto para realizar el montaje y puesta en marcha de los mismos, dentro de los cuales se destacan: lector de huella, lectura de iris, comandos con reconocimiento de voz, detección de rostro, entre otros.
           
      
      div(titulo="Soluciones de <em>hardware</em> y <em>software</em>")
        .row.align-items-center.justify-content-center.p-4
          .col-lg-3
            img(src='@/assets/curso/images/tema2/img_5.png'  alt='', style="width:600px; display:block; margin:auto 0;").mb-3
          .col-lg-9
            p.mb-3 De acuerdo a las necesidades de la empresa se deben implementar soluciones a la medida y que estas estén debidamente acopladas a los lineamientos técnicos necesarios de la empresa; es decir, la adquisición de estos bienes deben estar soportados por una necesidad real.

            p Cuando se hace referencia a soluciones de <em>hardware</em> y <em>software</em> se debe tener en cuenta que pueden ser físicas o lógicas y que deben ser usados para minimizar el riesgo de acceso o vulnerabilidades del sistema dentro de los cuales se encuentran: <em>software</em> generadores de contraseñas seguras, lectores de tarjetas inteligentes, lectores de huella, <i>firewall</i>, antivirus, entre otros.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10(data-aos="fade")
        .cajon.color-custom-2.p-4.mb-3
          p.mb-3 Uno de los aspectos a tener en cuenta al momento de la implementación o adquisición de estos elementos es la cantidad de usuarios que utilizan estos dispositivos, sobre todo en la solución de <em>hardware</em> y <em>software</em>, la cantidad de datos que estos producirán y cómo será el proceso de respaldo de esta información; puesto que es importante no solo pensar en la implementación sino cómo estos nuevos datos deben ser tratados y manipulados.
  
  .container.bg-white.px-md-5.px-3.py-0.container-top.fondo.mb-0.cs

    p.mb-5 De igual forma, la manera en la que se establecerá la comunicación entre dos o más equipos en una red también es fundamental. El modelo de referencia OSI refleja los protocolos y fases en las cuales se establece dicha interacción entre las computadoras. Es la referencia en donde se puede observar la transformación de la información, pues cada capa de este modelo realiza su aporte a la comunicación y con base en este estándar se crean las reglas para establecer dicho proceso. Siguiendo esta línea, a continuación, se detalla cada una:
  
  .container.bg-white.px-md-5.px-3.py-0.container-top.fondo-2.mb-0.cs.d-none.d-lg-block
    .row.justify-content-center.align-items-center.mb-5.p-4
      .col-lg-6.p-1.mb-2(data-aos="fade-left")
        LineaTiempoD
          .p-1(titulo='Aplicación' numero='7')
            .row.align-items-center
              .col-lg-12
                p Esta capa brinda soporte a los <em>software</em> que se utilizan y su propósito dentro de la infraestructura, esto incluye la utilización de diferentes protocolos de comunicación tales como: HTTP, FTP, SMTP, POP, entre 
          .p-1(titulo='Presentación' numero='6')
            .row.align-items-center
              .col-lg-12
                p En esta capa se realiza la representación de los datos e información que se muestra al usuario. También se realiza el proceso de encriptación de los datos y provee los mecanismos de interacción con los datos que se almacenan o procesan en el sistema.

          .p-1(titulo='Sesión' numero='5')
            .row.align-items-center
              .col-lg-12
                p Establece los tiempos que debe durar la conexión de acuerdo a la comunicación establecida entre las dos partes. Este aspecto es importante debido a que la sesión se mantendrá abierta, siempre y cuando se encuentre el #[i host] conectado; una vez se desconecta, se debe cerrar o destruir la sesión.
          
          .p-1(titulo='Transporte' numero='4')
            .row.align-items-center
              .col-lg-12
                p Realiza el transporte de los datos de forma segura entre un extremo y el otro. En esta capa también  se utilizan de dos tipos de protocolos esenciales para este proceso, los UDP y TCP. El primero hace el proceso pero no asegura la retroalimentación de si el paquete o dato llegó de manera correcta, mientras que el segundo sí garantiza la llegada y corrobora que los datos llegaron de forma correcta.
              

          .p-1(titulo='Red' numero='3')
            .row.align-items-center
              .col-lg-12
                p Se encarga de transmitir los datos entre los diferentes #[i host] de la red y mantener las conexiones mientras se transmiten los datos entre extremos.  Esto concluye cuando se realiza la entrega de los datos o paquetes enviados entre los #[i host].

          .p-1(titulo='Enlace de datos' numero='2')
            .row.align-items-center
              .col-lg-12
                p Realiza la revisión de errores al momento del envío de los datos o paquetes a través de la red. Adicional a ello, controla el flujo de datos entre los diferentes #[i host] de la red y provee la secuencia de entrega de los diferentes paquetes.
            
          .p-1(titulo='Físico' numero='1')
            .row.align-items-center
              .col-lg-12
                p Son los componentes de conexión físicos dentro de los cuales se destacan los cables eléctricos, de red, <i>routers, modems</i> y todo elemento físico utilizado para la transmisión de información. Es importante destacar que cada uno de los elementos físicos y de conexión crean los mecanismos físicos para establecer la conexión entre cada #[i host] de la red; es decir, este aspecto trata sobre todos los elementos físicos empleados para establecer la conexión.
      .col-lg-5.mt-5(data-aos="fade-right")     
        img.mt-5(src='@/assets/curso/images/tema2/img_6.svg'  alt='', style="width:360px; display:block; margin: -2.5rem 7rem;")

  .container.bg-white.p-md-5.p-4.container-bottom.mt-0.mb-5.cs  

    .row.justify-content-center.align-items-center.fondo-mobile.mb-5.p-4.d-block.d-lg-none
      .col-lg-6.p-1.mb-2
        LineaTiempoD
          .p-1(titulo='Aplicación' numero='7')
            .row.align-items-center
              .col-lg-12
                p Esta capa brinda soporte a los <em>software</em> que se utilizan y su propósito dentro de la infraestructura, esto incluye la utilización de diferentes protocolos de comunicación tales como: HTTP, FTP, SMTP, POP, entre 
          .p-1(titulo='Presentación' numero='6')
            .row.align-items-center
              .col-lg-12
                p En esta capa se realiza la representación de los datos e información que se muestra al usuario. También se realiza el proceso de encriptación de los datos y provee los mecanismos de interacción con los datos que se almacenan o procesan en el sistema.

          .p-1(titulo='Sesión' numero='5')
            .row.align-items-center
              .col-lg-12
                p Establece los tiempos que debe durar la conexión de acuerdo a la comunicación establecida entre las dos partes. Este aspecto es importante debido a que la sesión se mantendrá abierta, siempre y cuando se encuentre el #[i host] conectado; una vez se desconecta, se debe cerrar o destruir la sesión.
          
          .p-1(titulo='Transporte' numero='4')
            .row.align-items-center
              .col-lg-12
                p Realiza el transporte de los datos de forma segura entre un extremo y el otro. En esta capa también  se utilizan de dos tipos de protocolos esenciales para este proceso, los UDP y TCP. El primero hace el proceso pero no asegura la retroalimentación de si el paquete o dato llegó de manera correcta, mientras que el segundo sí garantiza la llegada y corrobora que los datos llegaron de forma correcta.
              

          .p-1(titulo='Red' numero='3')
            .row.align-items-center
              .col-lg-12
                p Se encarga de transmitir los datos entre los diferentes #[i host] de la red y mantener las conexiones mientras se transmiten los datos entre extremos.  Esto concluye cuando se realiza la entrega de los datos o paquetes enviados entre los #[i host].

          .p-1(titulo='Enlace de datos' numero='2')
            .row.align-items-center
              .col-lg-12
                p Realiza la revisión de errores al momento del envío de los datos o paquetes a través de la red. Adicional a ello, controla el flujo de datos entre los diferentes #[i host] de la red y provee la secuencia de entrega de los diferentes paquetes.
            
          .p-1(titulo='Físico' numero='1')
            .row.align-items-center
              .col-lg-12
                p Son los componentes de conexión físicos dentro de los cuales se destacan los cables eléctricos, de red, <i>routers, modems</i> y todo elemento físico utilizado para la transmisión de información. Es importante destacar que cada uno de los elementos físicos y de conexión crean los mecanismos físicos para establecer la conexión entre cada #[i host] de la red; es decir, este aspecto trata sobre todos los elementos físicos empleados para establecer la conexión.
      .col-lg-5.mt-5(data-aos="fade-right")     
        img(src='@/assets/curso/images/tema2/img_6.svg'  alt='', style="width:360px; display:block; margin: -1.5rem -1.5rem;")
    .jumbotron.p-3(data-aos="fade")
      .row.align-items-center.justify-content-center
        .col-lg-1
          img.mx-1(src='@/assets/curso/images/tema1/ico_1.svg' alt='', style="width:100px; display:block; margin:auto0 ;")
        .col-lg-11
          h3 Para recordar
          p.mb-3 Aunque se han precisado diferentes mecanismos para la seguridad en redes, es importante destacar que la protección de la información y el correcto uso de los sistemas informáticos de una empresa dependen de la cultura informática y de seguridad de las personas que allí laboran, pues son ellas quienes interactúan con estos elementos de la empresa y deben estar siempre alerta y al tanto de todo.











  

</template>

<script>
export default {
  name: 'Tema2',
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
