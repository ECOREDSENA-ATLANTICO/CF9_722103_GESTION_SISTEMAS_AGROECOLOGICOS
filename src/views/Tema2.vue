<template lang="pug">

.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Limpieza

    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img22.png', alt='')
      .col-lg-8(data-aos="fade-right")
        p La limpieza es la primera actividad que se realiza para el acondicionamiento de los productos, consiste en eliminar materiales y partículas extrañas que estén adheridos o mezclados con el producto, como por ejemplo restos vegetales (hojas, tallo, flores, raíces, arvenses, cáscaras) animales (insectos, larvas, excreciones) minerales (piedras, tierra, polvo) químicos (fertilizantes, agroquímicos) los cuales generan contaminación, afecten la calidad, presentación y alteran el volumen y peso del producto.
        .cajon.p-4.ps-5.mb-4.clr--lightgreen
          .row
            .col-lg-2
              figure
                img.mb-4.img-t.m-auto(src='@/assets/curso/tema2/img23.svg', alt='')
            .col-lg-10
              p.mb-0 Para llevar a cabo la limpieza se necesita un lugar, personal y equipos con condiciones adecuadas de higiene y, en algunas ocasiones agua potable debido a que existen diversos métodos, los cuales pueden clasificar en secos y húmedos, su selección se da acuerdo a las características del producto. (Borrero y Urrea, 2007).
    
    figure.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema2/img25.svg', alt='')
        h2.d-inline-block.mb-0 Métodos secos

    p.mb-5 Los métodos de limpieza en seco son económicos y se emplean cuando las características del producto no permiten efectuar la limpieza con agua o sustancias líquidas, a continuación, podrá conocer cuáles son los más empleados: 

    .row.mb-4
      .col-lg-8(data-aos="fade-left")
        TabsA.color-secundario.mb-5
          .tarjeta.clr--lightgreen2.p-4(titulo="Tamizado")
            p Son láminas o placas con perforaciones de diversos diámetros que se encargan de filtrar o retener los materiales no deseados.

          .tarjeta.clr--lightgreen2.p-4(titulo="Cepillado")
            p Se realiza mediante cepillos especiales que por medio de la fricción se encargan de remover los contaminantes que se encuentren en la parte superficial o exterior del producto.

          .tarjeta.clr--lightgreen2.p-4(titulo="Abrasión")
            p Es similar al cepillado, pero se realiza de forma más fuerte, llegando a eliminar no solo los contaminantes, sino que también la superficie o exterior del producto, de forma parcial o total.

          .tarjeta.clr--lightgreen2.p-4(titulo="Aspiración o soplado")
            p Es empleado principalmente para eliminar materiales extraños, mediante el uso del aire y la diferencia de densidad, con una corriente de aire suave se puede retirar cáscaras, pelos, polvo, pelos; mientras que una corriente fuerte eliminar elementos como piedras o metales.

          .tarjeta.clr--lightgreen2.p-4(titulo="Separación magnética")
            p Se emplean imanes que se encargan de atraer y adherir los materiales extraños e indeseables.
      .col-lg-4(data-aos="fade-right")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img24.svg', alt='')

    figure.mb-4
        img.img-t.d-inline-block.align-middle.me-2(src='@/assets/curso/tema2/img25.svg', alt='')
        h2.d-inline-block.mb-0 Métodos húmedos
    p.mb-4 La limpieza mediante métodos húmedos requiere del empleo de agua y en algunas ocasiones para mejorar el resultado se agrega soluciones o productos químicos con propiedades desinfectantes. Por tanto, mediante este método no solo se logra eliminar materiales extraños y contaminantes, sino que también se puede remover los residuos de fertilizantes y agroquímicos. Ahora revisemos cuales son los métodos húmedos más empleados: 


    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img26.png", alt="alt")
          .crd_hover_txt--body.text-center
            h6.mb-3 Reporte de ventas diarias
            p.mb-0.text-white Con este tipo de reportes, los gerentes podrán supervisar específicamente, la labor de cada vendedor y de esta manera, saber en qué les va bien y en cuáles actos hay que mejorar. Aquí también, va a encontrar si su fuerza de ventas está entendiendo sus estrategias y le sea más fácil incentivarlos a aumentar su productividad.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img27.png", alt="alt")
          .crd_hover_txt--body.text-center
            h6.mb-3 Reporte de ventas semanal
            p.mb-0.text-white Con estos reportes semanales, podrá encontrar las dificultades que pueda tener algún o algunos vendedores y evitar que se pierdan los clientes fijos. Reportar semanalmente, le permite tener un equipo de ventas fortalecido y bien direccionado, con las correcciones necesarias para lograr las metas de ventas propuestas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/img28.png", alt="alt")
          .crd_hover_txt--body.text-center
            h6.mb-3 Reporte de ventas mensuales
            p.mb-0.text-white Con este tipo de reportes usted va a hacer un seguimiento específico a su equipo de ventas respecto a sus objetivos empresariales a largo plazo.


    .cajon.p-4.ps-5.mb-4.clr--lightorange
      p.mb-0 Es significativo indicar que estos métodos se pueden aplicar de forma individual o también se pueden combinar.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
