<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 Le damos la bienvenida al componente formativo denominado “Poscosecha”.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este componente formativo se abordarán temáticas relacionadas con las actividades de poscosecha, las cuales están enfocadas a mantener y preservar la calidad de los productos cosechados, sean para consumo inmediato en fresco o para ser transformados. Este manejo poscosecha va de la mano de las buenas prácticas de manufactura y comprende las operaciones de acondicionamiento como recepción, separación, limpieza, selección y clasificación, además de actividades de desinfección, empaque, embalaje, transporte y almacenamiento que pueden ser realizadas parcial o totalmente y su orden varía de acuerdo a cada cultivo. Lo invitamos a ver el siguiente video antes de iniciar este componente:
  
      p.mb-5 
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/T0vPPV8bj40" title="Video Gestión de Sistemas Agroecológicos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
