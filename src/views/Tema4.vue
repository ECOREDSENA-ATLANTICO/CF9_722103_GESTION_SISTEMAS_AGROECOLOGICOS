<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Envase y empaques 
    
    .grd--white-lightgreen-white
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/img49.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El envase y el empaque son dos elementos distintos, su diferencia radica en el grado de contacto que tienen con el producto. Siendo el envase la pieza que está en contacto directo, es el recipiente que contiene al producto; mientras que el empaque es la envoltura que lo protege, no todos los productos cuentan con envases, mucho solo tiene empaque; los siguientes son algunos usos:
      

      .row.justify-content-center.mb-5
        .col-10.col-md-7.col-lg-5.mb-5.mb-lg-0(data-aos="fade-right")
          .tarjeta-icon
            img.img-t.mx-auto(src='@/assets/curso/tema4/img50.svg' alt='Imagen Decorativa')
            .clr--acccent-color.text-center.p-4.pt-5
              h5.mb-0 Envase
            .clr--lightorange.text-center.p-3
              p Todo recipiente o estructura rígida o semirrígida que se emplea para contener o guarda productos líquidos o sólidos.

       
        .col-10.col-md-7.col-lg-5.mb-5.mb-lg-0(data-aos="fade-left")
          .tarjeta-icon
            img.img-t.mx-auto(src='@/assets/curso/tema4/img51.svg' alt='Imagen Decorativa')
            .clr--green.text-center.p-4.pt-5
              h5.mb-0 Empaque
            .clr--lightgreen2.text-center.p-3
              p Material que protege al envase y que adicionalmente tiene fines comerciales.

    .row.mb-4
      .col-lg-8(data-aos="fade-left")
        p Sin embargo, tanto el envase como el empaque se encarga de proteger su contenido de factores que generen deterioro a lo largo del almacenamiento y la comercialización, evitando al máximo daños físicos como roturas, humedad, pérdidas de peso; daños químicos como contaminación microbiana, respiración y migración de gases; daños térmicos como cambios de temperatura y daños mecánicos como golpes, deslizamientos y vibraciones.
        .cajon.p-4.mb-4.clr--lightgreen
          .row
            .col-lg-2
              figure
                img.img-t.m-auto(src='@/assets/curso/tema4/img52.svg', alt='Imagen Decorativa')
            .col-lg-10
              p.mb-0 Es de aclarar que ni los empaques ni los envases mejoran la calidad, sino que la conservan, siendo indispensable empacar productos limpios, seleccionados, clasificados y desinfectados. Tampoco los empaques sustituyen los tratamientos para la conservación como la refrigeración, teniendo que la adecuada conservación se logra con un empaque apropiado y un almacenamiento en condiciones idóneas de acuerdo a los requerimientos de cada producto.
      
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img53.png', alt='Imagen Decorativa')
      
      p.mb-5 Cada empaque es único y existe gran variedad de materiales, formas, colores, tamaños, diseños y estilos, los cuales varían de acuerdo con el producto que se desee empacar. Por tanto, a la hora de seleccionarlo es importante tener en cuenta el comportamiento fisiológico y las características físicas, la forma, volumen, peso, tamaño, firmeza del producto a empacar, al igual que la temperatura, humedad, luz y demás condiciones ambientales que puedan influir.

      figure.mb-5
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema2/img25.svg', alt='Imagen Decorativa')
        h2.d-inline-block.mb-0 Funciones y propiedades

      .row
        .col-lg-1
          figure.mb-4
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema4/img54.svg', alt='Imagen Decorativa')
        .col-lg-11
          p.mb-5 Los empaques cumplen diferentes funciones, las cuales como se observa en la figura 5 se pueden clasificar de forma general en proteger, conservar y distribuir. Es decir, los empaques tienen la función de contener el producto para mostrarlo en las condiciones y cantidades demandadas por el consumidor, proteger los artículos de los diferentes riesgos y factores externos que puedan generar deterioro manteniendo su calidad y facilitar la manipulación, distribución y transporte; a continuación se presentan algunas de las funciones de los empaques:

      .row
        .col-lg-9(data-aos="fade-left")
          TabsA.color-secundario.mb-5
            .tarjeta.clr--lightgreen2.p-4(titulo="Proteger")
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-chevron-right
                  | Daños por insectos, roedores, aves, microorganismos.
                li 
                  i.fas.fa-chevron-right
                  | Daños mecánicos por rupturas, golpes, caída, vibraciones, cambios climáticos.

            .tarjeta.clr--lightgreen2.p-4(titulo="Conservar")
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-chevron-right
                  | Garantizar mayor tiempo de vida útil del producto.
                li 
                  i.fas.fa-chevron-right
                  | Reducir las pérdidas en la cadena de suministro.

            .tarjeta.clr--lightgreen2.p-4(titulo="Distribuir")
              ul.lista-ul--color.lista-ul--separador
                li 
                  i.fas.fa-chevron-right
                  | Facilitar manipulación.
                li 
                  i.fas.fa-chevron-right
                  | Mejorar la eficacia en la distribución del producto.
                li 
                  i.fas.fa-chevron-right
                  | Ser una estrategia comercial y herramienta de posicionamiento.
        .col-lg-3(data-aos="fade-right")
          figure.mb-4
            img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema4/img55.png', alt='Imagen Decorativa')
          
    .cajon.p-4.ps-5.mb-5.clr--lightorange
      p.mb-0 Sin embargo, los empaques también cumplen una función comercial y de comunicación ya que posibilitan la exhibición, exposición y localización, siendo fundamental para la aceptación y diferenciación del producto la apariencia externa y el diseño gráfico del empaque, el cual proporciona un valor agregado mediante un adecuado diseño y presentación que informe, identifique y establezca sus características de forma atractiva, motivando así la promoción, marketing y compra. Veamos en el siguiente recurso la función ecológica de los empaques en las diferentes industrias:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/W4YsN748hJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    figure.mb-5
      img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema2/img25.svg', alt='')
      h2.d-inline-block.mb-0 Clasificación y materiales 

    .row.mb-4
      
      .col-lg-8(data-aos="fade-right")
        p Como lo indica la Norma Técnica Colombiana NTC 5422 y Salguero R, S. & Gutiérrez, A (2009): 
        .p-4.ps-5.clr--lightorange.mb-4
          .row
            .col-lg-2
              figure
                img.mb-4.img-t.m-auto(src='@/assets/curso/tema4/img56.svg', alt='Imagen Decorativa')
            .col-lg-10
              p.mb-0 Los empaques se clasifican principalmente en primarios, secundarios y terciarios. Siendo los empaques primarios aquellos que contienen, están en contacto directo y se encargan de presentar de forma simple el artículo o producto. Los empaques secundarios son los encargados de contener el empaque primario, permitiendo su agrupación (uno o varios empaques primarios) proporcionando protección, facilitando la manipulación, favoreciendo la exposición y presentación, además tienen la particularidad de que se pueden separar del producto sin verse afectadas sus características.
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img57.png', alt='Imagen Decorativa')

      p.mb-5 Por último, el empaque terciario permite la fácil manipulación, transporte y distribución de los productos debido a que reúne y contiene los empaques primarios y secundarios. En la siguiente figura se presenta de manera gráfica la clasificación de los empaques de acuerdo al producto: 

      .row.mb-5.grd--white-lightyellow-white
        .col-lg-10.mx-auto
          .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
            h5 Figura 2.
            span Clasificación de los empaques

          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img58.svg', alt='Muestra la clasificación de los empaques, primario, secundario y terciario.')

      .row.mb-4
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img59.png', alt='Imagen Decorativa')
        .col-lg-8(data-aos="fade-right")
          p Existe diversas clases de empaques que varían de acuerdo al material en que fueron elaborados, como, por ejemplo, madera, papel, cartón, plástico (polietileno PE, poliéster PET, polipropileno PP, policloruro de vinilo PVC, poliestireno PS, policarbonato PS), fibras vegetales (yute, fique, bambú), vidrio, textil y metal, los cuales tiene sus propias características, utilidades, ventajas y desventajas (Tabla 4); siendo común la existencia de empaques de materiales compuestos, es decir mezclen o combinen diversos materiales con la finalidad lograr mayor protección. En la siguiente tabla se relacionan los materiales con los que se lleva a cabo la producción de los empaques de los distintos productos.
        
      .row.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-4
            h5 Tabla 4.
            span Materiales de los empaques

          .tabla-b.color-acento-contenido
            table
              caption
                strong Nota 
                span 
                  | Chala, L. A. (2009)  Chala, L. A. (2009) https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/3049/2949_empaques_y_embalajes2.pdf
              thead
                tr.tabla-b__header
                  th Materiales
                  th Tipo
                  th Ejemplo de empaques y embalajes
                  th Ventajas
                  th Desventajas
              tr
                th Metales
                td Láminas de aluminio, acero. Recubiertas de estaño, etc.
                td Toneles, bidones, contenedores, recipientes bajo presión, cajas metálicas.
                td Solidez, fácil estibado, reutilizables.
                td Costo elevado, corrosión, difícil eliminación, pesado, voluminoso.
              tr
                th Madera
                td Madera en bruto, cepillada, contrachapada.
                td Cajas, pallets, canastas.
                td Fácil de manipular y estibar.
                td Altos costos, sensible al sol y a la humedad, fácil descomposición, contaminable, sensible a plagas, voluminoso, pesado, inflamable.
              tr
                th Cartón
                td Plano, ondulado. 
                td Cajas de cartón.
                td Económico, reciclable, fácil manipulación.
                td Muy frágil, sensible a la humedad y al calor, poco sólido, no reutilizable.
              tr
                th Plástico
                td Polietileno, poliestireno (PVC).
                td Bolas, toneles, bidones, cajas, contenedores semirígidos y rígidos.
                td Impermeabilidad, gran diversidad, reutilizable.
                td Inflamable, costoso, difícil eliminación.
              tr
                th Papel
                td 
                td 
                td Bajos costos, fácil eliminación, reciclable.
                td Muy frágil, sensible a la humedad y al calor.
              tr
                th Vidrio
                td 
                td Botellas, frascos, botellones.
                td Visibilidad del contenido, estibado fácil, reciclable, eliminación fácil.
                td Frágil a los golpes, pesado y voluminoso.

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
