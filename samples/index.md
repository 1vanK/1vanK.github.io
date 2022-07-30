---
layout: page
title: Web samples
nav_group: Resources
---
{% comment %}<!--

Copyright (c) 2014-2018 Yao Wei Tjong

-->{% endcomment %}

{% for lang in site.data.web.samples %}
## {{ lang[0] }}
<ul class="clearfix col2">
  {% for sample in lang[1] %}
  {% if lang[0] == 'Native' %}
  <li><a href="{{ BASE_PATH }}/samples/{{ sample }}">{{ sample }}</a></li>
  {% else %}
  <li><a href="{{ BASE_PATH }}/samples/{{ site.data.web.player }}?{{ sample }}">{{ sample |split:'/' |last }}</a></li>
  {% endif %}
  {% endfor %}
</ul>
{% endfor %}
