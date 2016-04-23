---
title: Products lines
layout: page_raw
ref: productos
lang: en
---

<div class="col_full clearfix">
  <div class="fancy-title title-dotted-border">
    <h1><span>{{ page.title }}</span></h1>
  </div>
</div>

{% assign lineas = site.lineas | sort: "orden" %}

{% for linea in lineas %}
  {% include linea.html %}
  {% cycle 'group2': '','','<div class="clearfix"></div>' %}
{% endfor %}


<div class="col_full clearfix topmargin">
  <div class="fancy-title title-dotted-border nobottommargin">
    <h2><span>Proceso de preparación del bacalao desalado</span></h2>
  </div>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>1-La Pesca</h3>
  </div>

  <p><img src="/images/ederpesca/pesca.jpg" class="alignleft notopmargin" alt="Image" title="Image" data-animate="rotateInDownRight" />El bacalao se pesca solo en invierno en el mar Atlántico, en las limpias aguas de Islandia y Feroe. Su exclusividad comienza desde la pesca con anzuelo, esta se realiza por barcos pequeños donde a bordo el desangrado es inmediato, regresando a puerto en un máximo de 12 horas se evita que el bacalao se deteriore.</p>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>2-El salado</h3>
  </div>

  <p><img src="/images/mac.png" class="alignright notopmargin" alt="Image" title="Image" data-animate="rotateInDownLeft" />A las pocas horas de pescado se introduce en agua y hielo y después de pasar el Rigor Mortis comienza el proceso de salado, primero en salmuera y después en sal seca de la mejor calidad. Se supervisa todo este proceso para asegurar la calidad de los procedimientos.</p>
</div>


<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>3-El almacén</h3>
  </div>

  <p><img src="/images/mac.png" class="alignleft notopmargin" alt="Image" title="Image" data-animate="rotateInDownRight" />La mercancía recorre media Europa en una flota de camiones frigoríficos hasta que llega a la nave del Polígono de Rentería. En el muelle de entrada y una vez pasado el control de calidad pasa al almacén de materias primas, con una capacidad de almacenaje de hasta 200.000 kilos de pescado, donde permanecerá varios meses completando su curación en sal a temperatura controlada.</p>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>4-El corte</h3>
  </div>

  <p><img src="/images/mac.png" class="alignright notopmargin" alt="Image" title="Image" data-animate="rotateInDownLeft" />Una vez seleccionado por nuestro equipo cualificado y para adaptarnos a los diferentes puntos de sal y usos gastronómicos, hacemos mas de 20 “cortes a medida” siendo clasificados por grosor y peso para facilitar su posterior desalado uniforme.</p>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>5-El desalado</h3>
  </div>

  <p><img src="/images/mac.png" classssss="alignleft notopmargin" alt="Image" title="Image" data-animate="rotateInDownRight" />Disponemos de 5 grandes salas de desalado. Dichas salas están compuestas por cerca de mil bañeras. Utilizando agua de pureza y calidad contrastada por nuestro laboratorio y siempre a una temperatura entre 0º y 2º , el bacalao es desalado lentamente, mediante un proceso exclusivo, natural sin conservantes ni blanqueadores que mantiene intactas tanto sus cualidades organolépticas así como la textura y sus gelatinas. Para conocer y controlar el punto de sal se llevan a cabo varias catas diarias, una vez desalado el bacalao se deja escurrir un mínimo de 12h.</p>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>6-El envasado</h3>
  </div>

  <p><img src="/images/mac.png" class="alignright notopmargin" alt="Image" title="Image" data-animate="rotateInDownLeft" />Una vez escurrido y vuelto a seleccionar llega el momento del envasado que se realiza en condiciones de higiene extremas. Utilizando las más modernas técnicas de envasado en atmosfera protectora llegamos a los 15 días de caducidad por métodos totalmente naturales.</p>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>7-La distribución</h3>
  </div>

  <p><img src="/images/mac.png" class="alignleft notopmargin" alt="Image" title="Image" data-animate="rotateInDownRight" />Desde nuestra sede se distribuyen nuestros productos a todo el mundo. Los establecimientos en Vitoria y una flota de más de 50 distribuidores a nivel nacional e internacional conforman nuestra red de distribución, que está en continua expansión. Países como Portugal, Estados Unidos, Italia, Colombia, Austria, Emiratos Árabes son algunos ejemplos de nuestra consolidación en los mercados internacionales.</p>
</div>

<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>8-La venta</h3>
  </div>

  <p><img src="/images/mac.png" class="alignright notopmargin" alt="Image" title="Image" data-animate="rotateInDownLeft" />Analizamos minuciosamente los gustos y actitudes de nuestra clientela, para ofertar el mejor bacalao desalado, con cortes a medida, manteniendo intachables sus propiedades pero haciéndolo más cómodo y más práctico, un producto gastronómico de primer nivel.</p>
</div>
