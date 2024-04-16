<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1(data-aos="fade-right") Herramientas, maquinaria y equipos

    .row.mb-4
      .col-lg-8(data-aos="fade-right")
        p En cada etapa de la poscosecha se emplea herramientas, maquinarias y equipos, los cuales de acuerdo a la normatividad existente y a las buenas prácticas de manufactura deben cumplir con estándares y características específicas de diseño y seguridad para garantizar el adecuado funcionamiento y manipulación, como, por ejemplo, el diseño debe ser ergonómico y seguro, elaborados en acero inoxidables sin bordes en ángulo, ni tuberías expuestas, ni zonas que sean inaccesibles o que dificulten su limpieza y desinfección. 
        .cajon.p-4.ps-5.mb-4.clr--lightgreen
          .row
            .col-lg-2
              figure
                img.img-t.m-auto(src='@/assets/curso/tema6/img84.svg', alt='')
            .col-lg-10
              p.mb-0 De forma general, en las operaciones de recepción, limpieza, clasificación, desinfección, empaque, embalaje, almacenamiento y transporte, los equipos y maquinaria más empleados son báscula (determinar el peso) termómetro (temperatura) penetrómetro (firmeza) calibrador (diámetro) refractómetro (contenido de azúcar) medidor de pH, medidor de humedad, bandas transportadoras, clasificadoras (por color, tamaño, forma, ausencia de daños) tanques de lavado e inmersión, envasadora, empacadora, selladora, flejadora, montacargas, cuartos de almacenamiento.
      
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema6/img85.png', alt='')
      
      p.mb-5 Las herramientas, maquinaria, equipos y utensilios que se emplean en la poscosecha deben estar en buenas condiciones y limpieza, la ubicación se debe dar en un lugar limpio, ordenado y señalizado, se debe realizar y registrar constantemente en formatos los procesos de mantenimiento y calibración preventivo y correctivo, limpieza y desinfección, además se debe tener protocolos, manuales de procedimiento e instructivos de uso y así evitar riesgos de contaminación cruzada, deterioro, accidentes laborales y mal funcionamiento.

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
z
