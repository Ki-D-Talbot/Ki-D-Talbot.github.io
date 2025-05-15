---
layout: page
title: "Prototypes"
permalink: /prototypes/
order: 6
---

# Prototypes

Many prototypes were created throughout the development process. Please endure this poorly edited montage:

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/eGq_Y_jL0Yc" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 6: Montage of prototype development and testing</figcaption>   
</figure>

## Challenges and Solutions

We ran into several interesting challenges with the compliant mechanisms. One major issue was calculating the correct length of the tendons. Whilst rigid joints are relatively easy to animate in CAD programs, compliant mechanisms proved much harder to simulate accurately. This difficulty is well-documented by Mutlu et al., who found that the performance of 3D-printed compliant mechanisms often deviates from simulated predictions due to the complex material behaviour under deformation.

Our solution was practical and hands-on: we printed a wing, marked a spot on the tendon, then bent the wing to the maximum position and measured how far the tendon had moved. This empirical approach proved more reliable than simulation for our specific application.

We also noticed that the joints further away from the base moved less than the ones closer to the base. To compensate for this, we reduced the wall thickness in the last joint to allow for more flexibility, creating a more balanced movement across the entire wing. Schumacher et al. discuss similar approaches to controlling elasticity in 3D printing by strategically varying structural parameters to achieve desired deformation patterns.

## Manufacturing Considerations

The 3D printing process offered significant advantages for our compliant mechanisms. Unlike traditional manufacturing methods that would require assembly of separate components, FDM printing allowed us to create complex, interconnected structures in a single print operation.

Even with a relatively brittle material like PLA, we were able to produce working proof-of-concept models. We found that proper print orientation was critical - printing the flexible sections with layers perpendicular to the bend direction gave the best results and prevented layer delamination during repeated flexing. This aligns with Liu and Hung's (2022) findings that print parameters significantly affect the performance of 3D-printed compliant mechanisms, with infill density and print orientation playing crucial roles in determining flexibility and durability.

A more pliable material like PETG would likely make the mechanism even more robust, offering better layer adhesion and fatigue resistance. TPU was also considered but proved challenging to print with our available equipment due to its extreme flexibility.

## Design Direction Pivot

Despite the promising mechanical results, this design direction was ultimately vetoed by the team due to concerns about the overall girth of the wing. This was disappointing as the totally print-in-place mechanism had shown significant potential for creating fluid, biomimetic movement. Culmone et al. (2020) highlight the advantages of print-in-place mechanisms for creating functional compliant structures, noting that they eliminate assembly requirements whilst enabling complex mechanical behaviours.

From a manufacturing perspective, having a single-part design presents a trade-off between repairability and ease of assembly. If a tendon failed, the entire assembly would need to be replaced. Whilst easy to produce, this approach could be wasteful and environmentally problematic compared to a more modular design that allows replacement of individual components.

This realisation led us to reconsider our approach, exploring more modular alternatives that might sacrifice some of the elegance of the print-in-place design but offer better long-term sustainability and repairability. This pivot reflects a common challenge in biomimetic design noted by Seok et al. (2013), who found that balancing mechanical performance with practical considerations like maintenance and repairability often requires compromises in the design approach.