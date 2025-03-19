---
layout: page
title: Mood Board
permalink: /mood/
---

## Mood Board

Get a feel for the vibes.

<div class="row">
  <div class="col-4 col-12-mobile">
    <article class="item">
      <a href="#" class="image fit"><img src="{{ site.baseurl }}/images/images.jpeg" alt="" /></a>
      <header><h3>Project 1</h3></header>
    </article>
    <article class="item">
      <a href="#" class="image fit"><img src="{{ site.baseurl }}/images/pic03.jpg" alt="" /></a>
      <header><h3>Project 2</h3></header>
    </article>
  </div>
  <div class="col-4 col-12-mobile">
    <article class="item">
      <a href="#" class="image fit"><img src="{{ site.baseurl }}/images/pic04.jpg" alt="" /></a>
      <header><h3>Project 3</h3></header>
    </article>
    <article class="item">
      <a href="#" class="image fit"><img src="{{ site.baseurl }}/images/pic05.jpg" alt="" /></a>
      <header><h3>Project 4</h3></header>
    </article>
  </div>
  <div class="col-4 col-12-mobile">
    <article class="item">
      <a href="#" class="image fit"><img src="{{ site.baseurl }}/images/pic06.jpg" alt="" /></a>
      <header><h3>Project 5</h3></header>
    </article>
    <article class="item">
      <a href="#" class="image fit"><img src="{{ site.baseurl }}/images/pic07.jpg" alt="" /></a>
      <header><h3>Project 6</h3></header>
    </article>
  </div>
  
  <!-- Add STL model viewer -->
  <div class="col-12">
    <h3>3D Model Exploration</h3>
    <div class="stl-viewer-container">
      <script src="https://embed.github.com/view/3d/{{ site.github.owner_name }}/{{ site.github.repository_name }}/main/models/models/manta.stl?height=400&width=100%"></script>
    </div>
    <p>Interact with the 3D model above by clicking and dragging to rotate.</p>
  </div>
</div>

<!-- Add more models in a grid if you want -->
<div class="row">
  <div class="col-6 col-12-mobile">
    <div class="stl-viewer-container">
      <script src="https://embed.github.com/view/3d/{{ site.github.owner_name }}/{{ site.github.repository_name }}/main/models/model1.stl?height=300&width=100%"></script>
    </div>
    <h4>Model 1 Name</h4>
  </div>
  
  <div class="col-6 col-12-mobile">
    <div class="stl-viewer-container">
      <script src="https://embed.github.com/view/3d/{{ site.github.owner_name }}/{{ site.github.repository_name }}/main/models/model2.stl?height=300&width=100%"></script>
    </div>
    <h4>Model 2 Name</h4>
  </div>
</div>
