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

{% assign pasos=site.procesos | where:"lang",page.lang | sort: "orden" %}
{% for paso in pasos %}
<div class="col_full clearfix">
  <div class="fancy-title title-border">
    <h3>{{ paso.orden }}- {{ paso.title }}</h3>
  </div>
  <p><img src="{{ paso.imagen | prepend: "/images/ederpesca/procesos/"}}" alt="{{ paso.title }}" class="{% cycle "group3": "alignleft","alignright" %} notopmargin" data-animate="{% cycle "group4": "rotateInDownRight","rotateInDownLeft" %}">{{ paso.content | strip_html }}</p>
</div>
{% endfor %}
