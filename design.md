---
layout: page
title: "Design Development"
permalink: /design/
order: 5
---

# Design Development

We started by thinking of the articulated part of the project.

Our first idea was a stacked 4 bar linkage, but this was not very effective.

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/0tWREmdf3wI" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 1: Demonstration 4 bar linkage idea</figcaption>
</figure>

This was built using some 3D printed mechano-like parts.

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/l0D05F_FX7s" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 2: Demonstration of 4 bar linkage</figcaption>
</figure>

While it worked, it wasn't the movement we were looking for, so we tried an Ornithopter inspired mechanism.

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/UVbcF6dYFdw" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 3: Demonstration ornithopter test</figcaption>
</figure>

These tests were more bird-like than ray-like, and they were more complex than we wanted.

## Inspiration

While showing an old project for a finger to the team, we realised the mechanism could be reused for the manta ray!

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/Qyg0hTw_8P0" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 4: Finger video</figcaption>
</figure>

Here you can see the system for the tendons and knuckle assembly.

<figure>
  <img src="/images/Screenshot%202024-10-04%20121655.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: Original Finger Design</figcaption>
</figure>

The symmetrical movement was much closer to the ray's movement, in fact, much closer than it was to a hand! 

## CAD Design

We started a fresh CAD model with this design in mind.

<figure>
  <img src="/images/cad%20sketch%201.png" alt="cad sketch" width="500">
  <figcaption>Figure 2: CAD sketch of the ray design concept</figcaption>
</figure>

Here rigid sections are connected by a flexible spring section, the stiffness of the spring can be adjusted by changing the wall thickness. The printer nozzle is 0.4mm so all compliant parts were a multiple of this number. A variable was added to the CAD program (Onshape) to allow for parametric design. The length of the spring section helps spread the stress of the bend over a larger area, this is an important consideration in compliant design (Howell et al., 2013).

We kept the modular design of the finger, designing fins to be attached to a frame by a sliding rail system. 

<figure>
  <img src="/images/rail.png" alt="cad sketch" width="500">
  <figcaption>Figure 3: CAD model of the rail design concept</figcaption>
</figure>

The fins were reversible so the same part could be used for either side of the ray. This was a design decision to reduce the number of parts and increase the ease of assembly.

<figure>
  <img src="/images/integratedtendon.png" alt="cad sketch" width="500">
  <figcaption>Figure 4: CAD model of the rail design concept with fins</figcaption>
</figure>

<div class="stl-viewer-container">
  <script src="https://embed.github.com/view/3d/Ki-D-Talbot/Ki-D-Talbot.github.io/main/models/wing.stl">
  </script>
</div>
<figcaption>Figure 5: Interactive 3D model of the wing design</figcaption>

Here you can see the tendon attached to the tip of the wing; when the tendon is pulled, the wing bends, tip first. In another version we took this design further by adding a tendon to every joint. This would allow more control over the movement of the ray.

<figure>
  <img src="/images/multijoint.png" alt="cad sketch" width="500">
  <figcaption>Figure 6: CAD model of the rail design concept with fins and individual tendons</figcaption>
</figure>

The movement could be controlled by a single motor by using a cam shaft system. By changing the cam shaft, we could "program" different movement patterns. We started to design a configurable camshaft, but it was too complex and would likely need to be machined.

We went back to the single tendon design to keep it simple and designed a gear mechanism. Using a spur gear add-on for Onshape made it easy to dial in the tooth pitch and radius. Each tendon would need its own gear, attached to a print-in-place axle.  

<figure>
  <img src="/images/cog1.png" alt="cad sketch" width="500">
  <figcaption>Figure 7: CAD model of the gear design concept</figcaption>
</figure>

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/igPNVzjSnVo" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 5: Gear Mesh</figcaption>
</figure>

The gear system was designed using Onshape's spur gear add-on, which facilitated precise control over tooth pitch and radius. Each tendon was attached to its own gear, mounted on a print-in-place axle to eliminate post-print assembly requirements.