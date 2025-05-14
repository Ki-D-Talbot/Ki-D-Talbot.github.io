---
layout: page
title: "Design Development"
permalink: /design/
order: 4
---

# Design Development

we started by thinking of the articulated part of the project.
our first idea was a stacked 4 bar linkage, but this was not very effective
<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/0tWREmdf3wI" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 1: Demonstration 4 bar linkage idea</figcaption>
</figure>
this was built using some 3d printed mechano like parts
<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/l0D05F_FX7s" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 2: Demonstration of 4 bar linkage</figcaption>
</figure>
while it worked, it wasn't the movnemt we were looking for, we tried an Ornithopter inspired mechanism
<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/UVbcF6dYFdw" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 3: Demonstration ornithopter test</figcaption>
</figure>
these test were more bird like than ray like, and they were more complex then we wanted

# Inspiration

while showing an old project for a finger to the team, we realised the mechanism could be reused for the manta ray!
<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/Qyg0hTw_8P0" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 4: Finger video</figcaption>
</figure>
here you can see the system for the tendons and knuckle assembly
<figure>
  <img src="/images/Screenshot%202024-10-04%20121655.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: original Finger Design</figcaption>
</figure>

the symetrical movment was much closer to the rays movment, infact ,much closer than it was to a hand! 

# CAD Design
we started a fresh cad model with this design in mind

<figure>
  <img src="/images/cad%20sketch%201.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: CAD sketch of the ray design concept</figcaption>
</figure>

here rigid section are connected by a flexible spring section, the stiffness of the spring can be adjusted by changing the wall thickness. teh printer nozzel is 0.4 so all complient parts were a multiple of this number. a variable was added to the cad program (onshape) to allow for parametric design. the length of the spring section helps spead the stress of the bend over a larger area, this is an important consideration in compiant design [citation needed].

we kept the modular design of the finger, designing fins to be attached to a frame by a sliding rail system. 
<figure>
  <img src="/images/rail.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: CAD model of the rail design concept</figcaption>
</figure>

the fins were reversable so the same part could be used for either side of the ray. this was a design decision to reduce the number of parts and increase the ease of assembly.
<figure>
  <img src="/images/integratedtendon.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: CAD model of the rail design concept with fins</figcaption>
</figure>
    <div class="stl-viewer-container">
      <script src="https://embed.github.com/view/3d/Ki-D-Talbot/Ki-D-Talbot.github.io/main/models/wing.stl">
      </script>
    </div>

here you can see the tendon attatched to the tip of the wing, when the tendon is pulled the wing bend, tip first. in another version pwe took this design further by adding a tendon to every joint this would allow more control over the movement of the ray.
<figure>
  <img src="/images/multijoint.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: CAD model of the rail design concept with fins and individual tendons
  </figcaption>
</figure>

the movment coudl be controlled by a single motor by using a cam 
shaft system, by changing the cam shaft we could 'program'different movment patterns. we started to design a configurable camshaft but it was too complex and would likly need to be machined.

we went back to the single tendon design to keep it simple and designed a gear mechanism. using an spur gear add-on for onshape made it easy to dial in the tooth pitch and radius. each tendon would need its own gear, attatched to a print in place axle.  
<figure>
  <img src="/images/cog1.png" alt="cad sketch" width="500">
  <figcaption>Figure 1: CAD model of the gear design concept</figcaption>

