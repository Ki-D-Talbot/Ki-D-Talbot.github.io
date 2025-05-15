---
layout: page
title: "Back to the drawing board"
permalink: /design2/
order: 7
---

## Design


### Inspiration
The next source of inspiration came from woodworking and is knows as kerf bent or lattice hinges. Michael from the excellent channel 'Teaching Tech' has a great video on this, check it out [here](https://www.youtube.com/watch?v=8WEqKYa6XRk&t)

We started a fresh cad project and imported a top down view of a manta ray, splines were used to trace the outline of the wing, this was extruded to a multiple of the layer height, 2mm in this case. It was decided to split the ray into 3, 2 mirrored wings and a body, each comfortable fitting on a printer bed.

<figure>
  <img src="/images/raysketch.png" alt="cad sketch" width="500">
    <figcaption>Figure 8: Sketch of the manta ray wing</figcaption>
</figure>
<br>

A separate sketch was created for the kerf cuts, using parametric and using linear patterns we made a part and used a Boolean subtract to create the compliance. This combined with some kind of wire tendon and servo motor would provide the actuation needed. This worked well, we had considered using laser to cut this out of ply but we needed a way to attach the wire so 3d printing was again utilised. the microstructures created by the layer would lend itself to the compliance as [citation noted] noted.

This did however create a fairly complicated first layer that required excellent bed adhesion. To avoid using support we created removable hoops akin to pulleys in your finger. these was designed to be inserted and turned to lock in place. The tolerances were designed to be tight to friction fit. You can see the design in the image below. They get smaller as they go towards the tip of the wing to allow for a break angle to be created.

<figure>
  <img src="/images/hoop.png" alt="cad sketch" width="500">
    <figcaption>Figure 9: Sketch of the hoop design</figcaption>
</figure>
<br>

we added a hinge to marry the parts and we started planning out the mechanism. The idea was to use a servo motor to pull the wire, one for each joint. We opted for servo motors because of the high degree of control and low price. We opted for 360 servos because we were unsure if we needed more rotation than they could offer even with a different gear ratios. 

<figure>
  <img src="/images/servo.png" alt="cad sketch" width="500">
    <figcaption>Figure 10: Sketch of the servo motor</figcaption>
</figure>
<br>

The idea was to attach a cog to the servo and one connected to an axle that goes through the body, the axel is connected to two reels that would simultaneously take in wire on one side and pay out on the other, depending how the cable was initially wound.

<figure>
  <img src="/images/axle.png" alt="cad sketch" width="500">
    <figcaption>Figure 11: Sketch of the axle design</figcaption> 
</figure>
<br>

because we have no positional feedback on 360 motors we used a rotary encoder to measure the number of degrees each servo had travelled. These were also positioned in CAD. some of the clearances were left intentionally oversized so shims can be printed later to fine tune the gap without reprinting the whole thing. 

<figure>
  <img src="/images/encoder.png" alt="cad sketch" width="500">
    <figcaption>Figure 12: Sketch of the encoder design</figcaption>   
</figure>
<br>

<figure>
  <img src="/images/encoder2.png" alt="cad sketch" width="500">
    <figcaption>Figure 13: Sketch of the encoder integration</figcaption>
</figure>

Its getting tight in there!

<br>

A top and bottom case was printed, this serves two purposes, it protects and give somewhere for the aesthetic covering to go but crucially it keeps the axels in place and ensure the teeth of the gears mesh correctly. Speaking of gears the ratio is 2:1 so we double the torque of the servos.

In keeping with the original design we used 3d printed fasteners for the case, the axels had a circlip which proved cheap and reliable if not fiddley to install. the rigidity of the case came from 3d printed nuts and bolts, theses worked incredibly well, by slicing  around 1/4 of the bolt off to give a flat surface to adhere to the bed, the layer lines made the bolts strong

<div class="stl-viewer-container">
  <script src="https://embed.github.com/view/3d/Ki-D-Talbot/Ki-D-Talbot.github.io/main/models/bolt.stl">
    </script>
</div>
<figcaption>Figure 14: Interactive 3D model of the bolt design</figcaption>
<br>

Here is the final assembly.

<figure>
    <iframe width="700" height="400" src="https://www.youtube.com/embed/8EOm7ioHu7w" frameborder="0" allowfullscreen></iframe>
    <figcaption>Video 15: Final assembly of the design</figcaption>
</figure>
<br>
