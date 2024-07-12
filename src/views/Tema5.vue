<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Transporte

    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema5/img60.png', alt='')
      .col-lg-8(data-aos="fade-right")
        .cajon.p-4.ps-5.mb-4.clr-paleYellow
          p.mb-0 El transporte consiste en movilizar los productos a diferentes destinos internos (cultivo al lugar de poscosecha) y externos (hacia la comercialización y consumidor) para lo cual se emplean vehículos y embalajes que deben proporcionar condiciones idóneas, además de comodidad, higiene e inocuidad, evitando generar daños, deterioro, contaminación física, química y microbiana y pérdidas de producto. 
      
        p.mb-5 Además, a la hora de transportar no se deben mezclar productos (frutas o verduras con agroquímicos) se requiere determinar el costo del transporte, analizar el estado de las vías por donde se va a transitar, determinar el tiempo de recorrido, conocer el tipo de empaque y embalaje. Durante esta etapa de la poscosecha, se pueden registrar riesgos de tipo mecánico, biológico, climáticos, contaminación, robos y hurtos, que afectan el producto transportado y en algunas ocasiones genera daños en los medios de transporte. Colombia, P. (2003) Para conocer sobre los riegos durante el transporte, te invitamos analizar el siguiente recurso:
     
      .row.col-lg-10.mx-auto.mb-4
          .p-4.clr--lightgreen.mb-2(data-aos="fade-left")
            .row
              .col-lg-4
                figure
                  img.mb-4.img-t.m-auto(src='@/assets/curso/tema5/img61.png', alt='')
              .col-lg-8
                h6 Riesgos mecánicos
                p Impactos y choques producidos por caídas durante las operaciones de carga y descarga; los esfuerzos de compresión producidos durante el almacenamiento en fábrica o durante el transporte cuando los productos están apilados, y las vibraciones producidas por el movimiento de los medios de transporte.
          
          .p-4.clr--lightorange.mb-2(data-aos="fade-right")
            .row
              .col-lg-4
                figure
                  img.mb-4.img-t.m-auto(src='@/assets/curso/tema5/img62.png', alt='')
              .col-lg-8
                h6 Riesgo Biológicos
                p Hace referencia a la afectación por microorganismos, insectos y roedores.

          .p-4.clr--lightgray.mb-2(data-aos="fade-left")
            .row
              .col-lg-4
                figure
                  img.mb-4.img-t.m-auto(src='@/assets/curso/tema5/img63.png', alt='')
              .col-lg-8
                h6 Riesgos climáticos
                p El agua de lluvia o de mar puede filtrarse a través de agujeros en los medios de transporte. La humedad relativa y la temperatura pueden registrar grandes variaciones y causar condensaciones.
                
          .p-4.clr--greengray.mb-2(data-aos="fade-right")
            .row
              .col-lg-4
                figure
                  img.mb-4.img-t.m-auto(src='@/assets/curso/tema5/img64.png', alt='')
              .col-lg-8
                h6 Riesgos de contaminación
                p Contaminación por fugas de contenido de otras sustancias o materiales adyacentes al empaque. 
               
          .p-4.clr--lightgreen.mb-2(data-aos="fade-left")
            .row
              .col-lg-4
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema5/img65.png', alt='')
              .col-lg-8
                h6 Riesgos por robo o saqueo
                p Comúnmente se presenta pérdidas por robo durante el transporte y la exportación. Por lo que se requiere del empleo de contenedores. 

      separador

      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 5.1 Embalaje 

      .row
        .col-lg-1
          figure.mb-4
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema5/img67.svg', alt='')
        .col-lg-11
          p.mb-5 El embalaje hace referencia al tipo de empaque terciario y se encarga de brindar la protección requerida para resistir todos los riesgos a los que está expuesto el producto a lo largo del almacenamiento, transporte y distribución. Al igual que los empaques, existen diferentes tipos de embalajes, los cuales se pueden clasificar de acuerdo al material empleado para proteger y conservar el producto, por ejemplo, pueden ser de madera (cajas, guacales y estibas), fibras naturales (sacos), papel, vidrio, metal, plásticos (garrafas, tambores, bidones, cuñete, toneles), como se puede evidenciar en la siguiente tabla.

            
      .row.mb-5
        .col-lg-10.mx-auto
          .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
            h5 Tabla 5.
            span Tipos de embalajes 
          
          h4.p-4.mb-0.clr--acccent-color.text-center Tipos de embalaje

          .tabla-b
            table
              caption
                strong Nota 
                span 
                | Colombia, P. (2003). Cartilla de empaques y embalajes para exportación. 
              thead
                tr.clr--lightorange
                  td
                    h4.mb-0 Tipos de embalajes
                  td
                    h4.mb-0 Principales características
                  td
                    h4.mb-0 Usos
              tr
                td Cajas de cartón
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Se fabrican a partir de cartón corrugado.
                    li
                      i.fas.fa-chevron-right
                      | Son fácilmente adaptables a todos los modos de transporte: tierra, mar, aire.
                    li
                      i.fas.fa-chevron-right
                      | Se pueden adaptar para productos líquidos y semilíquidos, mediante el sistema de bolsas en caja (Bags in box)

                td 
                  p Permite el agrupamiento de productos que tienen formas distintas en una forma geométrica, homogénea, sencilla y estable. Se emplean para el embalaje de:
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Frutas y verduras frescas.
                    li
                      i.fas.fa-chevron-right
                      | Electrodomésticos, máquinas industriales y productos a granel.
                    li
                      i.fas.fa-chevron-right
                      | Empaques primarios de alimentos.
 
              tr
                td Embalajes de madera
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Presentan buena resistencia a la flexión, a la comprensión y al impacto.
                    li
                      i.fas.fa-chevron-right
                      | La densidad, humedad y dureza de la madera afectan la calidad de los embalajes.
                    li
                      i.fas.fa-chevron-right
                      | Su utilización está sujeta a restricciones medioambientales.
                    li
                      i.fas.fa-chevron-right
                      | Los principales embalajes de madera son las cajas y estibas.
                      
                td
                  p Son muy utilizadas para la exportación de:
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Mercancía pesada como maquinaria y electrodomésticos.
                    li
                      i.fas.fa-chevron-right
                      | Mercancía muy frágil como los productos de vidrio y artesanías.

              tr
                td Sacos
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Se fabrican a partir de materiales plásticos y materiales naturales como la fibra de yute y el papel.
                    li
                      i.fas.fa-chevron-right
                      | Se pueden combinar con otros materiales flexibles, mejorando sus propiedades.
                    li
                      i.fas.fa-chevron-right
                      | El uso de sacos a partir de materiales naturales está sujeto a restricciones fitosanitarias.

                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Frutas y hortalizas.
                    li
                      i.fas.fa-chevron-right
                      | Abonos, productos químicos.
                    li
                      i.fas.fa-chevron-right
                      | Café.
                    li
                      i.fas.fa-chevron-right
                      | Carbón.

              tr
                td Sacos Jumbo Big – bags
                td
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Son fabricados a partir de material plástico tejido.
                    li
                      i.fas.fa-chevron-right
                      | Requieren de sistemas mecánicos para su manipulación. Los hay de carga pesada, carga estándar y de un solo uso.

                td
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Se emplean para la distribución a granel de materiales sólidos en forma de polvo, gránulos o pasta.
              tr
                td Garrafas
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Son elaborados en vidrio, aunque también se fabrican en metal, cerámica o plástico.
                    li
                      i.fas.fa-chevron-right
                      | Requieren materiales de amortiguamiento para ser usados como embalaje de transporte.

                td
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Se emplean para el transporte de líquidos.
             
              tr
                td Tambores o bidones
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Son de forma cilíndrica, fabricados en acero, plástico o cartón. Su capacidad oscila entre los 10 y 240 litros.
                    li
                      i.fas.fa-chevron-right
                      | Transporte a granel de alimentos en estado líquido o pastoso: pulpas de frutas.

                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Productos químicos y mercancías peligrosas.
             
              tr
                td Jerry can o cuñete
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Pueden ser de metal o plásticos punto al Samsung la capacidad hasta de 5 galones.
                   
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Gasolina y líquidos similares.
             
              tr
                td Toneles
                td  
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Embalajes cilíndricos fabricados a partir de madera.
                td
                  ul.lista-ul--color.lista-ul--separador
                    li
                      i.fas.fa-chevron-right
                      | Vino, whisky, cerveza y bebidas alcohólicas.
    
    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema5/img60.png', alt='')
      .col-lg-8(data-aos="fade-right")
        .cajon.p-4.ps-5.mb-4.clr--lightgreen2
          p.mb-0 Como lo indica la Cartilla empaques y embalajes para exportación (Colombia, P. 2003), existen aspectos importantes que deben ser tenidos en cuenta a la hora de seleccionar el material de embalaje y empaque, por ejemplo, deben tener compatibilidad con el producto a contener, propiedades de protección y estabilidad, operabilidad, conveniencia, aspectos mercadológicos, económicos y legales, disponibilidad y factibilidad. Además de resistencia la cual se establece en relación con la facultad de sostener y resistir el producto a empacar, es decir si se pueden apilar y logran soportan encima sin dañarse varias veces su propio peso, clasificándose en autoportantes, semi portantes y no autoportantes, tal como se puede apreciar a continuación
      
    .tarjeta.p-4.mb-5.clr-paleYellow
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Compatibilidad del producto
            p El material no debe interactuar con el producto a contener ni modificar sus características. Así mismo, el producto contenido no debe afectar las características del material y hacerle variar sus propiedades. Los alimentos no deben tomar olores o sabores del material del empaque que los contiene.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img69.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Resistencia mecánica 
            p Dependiendo del producto, el material debe ser resistente a la tracción, a la comprensión, al desgarre, a la fricción, al impacto o a la penetración. Los artículos electrónicos coman las obras de arte y las artesanías, debido a su fragilidad, requieren de materiales de empaque que sean resistentes a la comprensión y al impacto.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img70.png', alt='Texto que describa la imagen')
        
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Propiedades de protección 
            p Dependiendo de las características del producto se requerirá de impermeabilidad a gases, al agua, a la humedad; intersección a los rayos ultravioleta y aislamiento de la luz de insectos. Algunos productos como perfumes, alimentos, y drogas requieren materiales con características específicas de impermeabilidad.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img71.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Propiedades de estabilidad 
            p Se refiere a la actitud del empaque para no presentar modificaciones de su estructura debido al contacto con el producto o con agentes externos. Algunos materiales de empaque presentan cambios en su estructura al pasar de unas condiciones a otras. El polipropileno, por ejemplo, se vuelve frágil cuando se somete a bajas temperaturas.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img72.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Operacionalización
            p Se refiere a la actitud del material para ser operado dentro de una línea de empacado. Por ejemplo, si se utiliza un material de empaque que no tiene buenas propiedades del izamiento, se puede atascar en la línea de empacado.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img73.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Convivencia
            p Se refiere a las características que hacen qué un empaque sea el ideal para un determinado producto. Aspectos como el peso, la ergonomía y la durabilidad, entre otros, deben ser considerados al seleccionar un material. Los productos que no se consumen completamente una vez abiertos y que pueden permanecer empacados por mucho tiempo, requieren de un material de empaque sea duradero.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img74.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Aspectos mercadológicos 
            p Facilidad de impresión, brillo, transparencia o claridad. Algunos productos, como las artesanías y las confecciones, requieren ser vistas con el cliente final antes de la compra, por lo cual es preferible el uso de empaques transparentes o con ventanas que permitan apreciar el producto.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img75.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Aspectos económicos
            p Costos de materiales, de almacenamiento, de producción. Un material de empaque determinado puede tener un costo total que su utilización, como para un producto, sea poco rentable.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img76.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Aspectos legales
            p Legislación y normativa vigente en cuanto al uso de materiales de empaque en los países de destino. El policloruro de vinilo (pvc) no es permitido en algunos países como Alemania.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img77.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Disponibilidad y factibilidad del proceso
            p Se debe considerar la disponibilidad de proveedores de los materiales de empaque a seleccionar. Si se selecciona un material de empaque de difícil consecución, es posible, que el exportador no pueda cumplir con entregas por no disponer de material de empaque. Igualmente, se debe considerar la factibilidad del proceso requerido para producir el empaque.
          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img78.png', alt='Texto que describa la imagen')
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.2 Métodos de transporte  

      
    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        p Dentro de los métodos de transporte existentes y más empleados son, está el transporte terrestre, en Colombia es el transporte más empleado, se caracteriza por que permite el traslado de los productos a corta y larga distancia mediante el empleo de vehículos como automotores (motocicleta, carros) animales (caballos, mulas, burros) y también por la facilidad para llevar a cabo los procesos de cargue y descargue de mercancía.         
        .cajon.p-4.mb-4.clr--lightgreen
          .row
            .col-lg-2
              figure
                img.mb-4.img-t.m-auto(src='@/assets/curso/tema5/img79.svg', alt='')
            .col-lg-10
              p.mb-0 Pero su efectividad está sujeta al estado de las vías, que en varios territorios no están pavimentadas y cuando llueve se dificulta el tránsito. Dentro del grupo de automotores empleados para el transporte, específicamente los carros, existen gran variedad, con diferentes capacidades, diseños y dispositivos como la refrigeración y atmósferas controladas que ayudan a la conservación y mantenimiento de la calidad. A continuación, podrá identificar los métodos de transporte usados en nuestro país:
      
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema5/img80.png', alt='')
    
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img81.png", alt="alt")
          .crd_hover_txt--body.text-center
            h6.mb-3 Transporte fluvial y marítimo
            p.mb-0.text-white Como su nombre lo indica, este transporte se da mediante vías acuáticas (mares, ríos, canales) y se emplea a nivel internacional barcos de carga y a nivel local los desplazamientos se realizan en canoas y lanchas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img82.png", alt="alt")
          .crd_hover_txt--body.text-center
            h6.mb-3 Transporte aéreo
            p.mb-0.text-white Las ventajas de este medio de transporte son la rapidez, pero sus costos son elevados; los desplazamientos pueden ser a nivel nacional e internacional.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/img83.png", alt="alt")
          .crd_hover_txt--body.text-center
            h6.mb-3 Transporte ferroviario
            p.mb-0.text-white Aunque este tipo de transporte, tiene un menor costo y permite transportar productos a distancias largas, en Colombia no están empleados ya que requiere de la existencia de cías férreas y de vagones.
    

</template>

<script>
export default {
  name: 'Tema3',
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
