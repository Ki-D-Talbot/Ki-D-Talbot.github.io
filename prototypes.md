---
layout: page
title: "Prototypes"
permalink: /prototypes/
order: 6
---

# Prototypes

Many prototypes were created throughout the development process. Please endure this poorly edited montage:

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/eGq_Y_jL0Yc?cc_load_policy=1" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 6: Montage of prototype development and testing</figcaption>   
</figure>


## Challenges and Solutions

We ran into several interesting challenges with the compliant mechanisms. One major issue was calculating the correct length of the tendons. Whilst rigid joints are relatively easy to animate in CAD programs, compliant mechanisms proved much harder to simulate accurately. This difficulty is well-documented by Mutlu et al., who found that the performance of 3D-printed compliant mechanisms often deviates from simulated predictions due to the complex material behaviour under deformation.

Our solution was practical and hands-on: we printed a wing, marked a spot on the tendon, then bent the wing to the maximum position and measured how far the tendon had moved. This empirical approach proved more reliable than simulation for our specific application.

We also noticed that the joints further away from the base moved less than the ones closer to the base. To compensate for this, we reduced the wall thickness in the last joint to allow for more flexibility, creating a more balanced movement across the entire wing. Schumacher et al. discuss similar approaches to controlling elasticity in 3D printing by strategically varying structural parameters to achieve desired deformation patterns.

## Manufacturing Considerations

The 3D printing process offered significant advantages for our compliant mechanisms. Unlike traditional manufacturing methods that would require assembly of separate components, FDM printing allowed us to create complex, interconnected structures in a single print operation.

Even with a relatively brittle material like PLA, we were able to produce working proof-of-concept models. We found that proper print orientation was critical; printing the flexible sections with layers perpendicular to the bend direction gave the best results and prevented layer delamination during repeated flexing. This aligns with Liu and Hung's (2022) findings that print parameters significantly affect the performance of 3D-printed compliant mechanisms, with infill density and print orientation playing crucial roles in determining flexibility and durability.

We took advantage of 3d printings impressive bridging capability and used paint on supports to minimise material use and ensure no internal binding occurred.

<figure>
  <img src="/images/paint.png" alt="cad sketch" width="500">
  <figcaption>Figure 7: painted on support to aid bridging</figcaption>
</figure>

A more pliable material like PETG would likely make the mechanism even more robust, offering better layer adhesion and fatigue resistance. TPU was also considered but proved challenging to print with our available equipment due to its extreme flexibility.

## Design Direction Pivot

Despite the promising mechanical results, this design direction was ultimately vetoed by the team due to concerns about the overall thickness of the wing. This was disappointing as the totally print-in-place mechanism had been a novel and exciting development. It was ultimately the right decision though.

From a manufacturing perspective, having a single-part design presents a trade-off between repairability and ease of assembly. If a tendon failed, the entire assembly would need to be replaced. Whilst easy to produce, this approach could be wasteful and environmentally problematic compared to a more modular design that allows replacement of individual components.

<div class="stl-viewer-container">
  <script src="https://embed.github.com/view/3d/Ki-D-Talbot/Ki-D-Talbot.github.io/main/models/show.stl">
  </script>
</div>
<figcaption>Figure 8: Interactive 3D model of the abandoned design</figcaption>