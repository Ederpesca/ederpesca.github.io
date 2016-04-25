---
title: Recipes
layout: page_raw
ref: recetas
lang: en
---

<div id="posts" class="post-grid col_four_fifth">

  {% assign recetas = site.recetas | where: "lang", page.lang %}
  {% for receta in recetas %}
    {% include recetas-listado.html %}
  {% endfor %}

</div>
