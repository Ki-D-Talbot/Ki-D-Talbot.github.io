---
layout: page
title: "Design Development"
permalink: /design/
order: 4
---

# Design Development

This section documents the evolution of the design process, from initial mechanism concepts through to the final biomimetic implementation, focusing on the integration of virtual design with physical prototyping.

## Initial Mechanism Exploration

The development process began with an exploration of traditional articulated mechanisms that could potentially recreate the swimming motion of a manta ray. Our first approach utilized a stacked four-bar linkage system, which offered a simple mechanical solution with predictable motion characteristics.

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/0tWREmdf3wI" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 1: Demonstration of initial four-bar linkage concept</figcaption>
</figure>

This prototype was constructed using modular 3D printed components designed to function similarly to Meccano/Erector sets, providing flexibility for rapid iteration and testing.

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/l0D05F_FX7s" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 2: Physical testing of the four-bar linkage mechanism</figcaption>
</figure>

### Critical Evaluation of Traditional Mechanisms

While the four-bar linkage successfully created articulated movement, analysis revealed that it failed to reproduce the fluid, wave-like motion characteristic of manta rays. The movement was excessively mechanical and angular, lacking the smooth transitions observed in biological systems (Fish et al., 2018).

This limitation led to exploration of ornithopter-inspired mechanisms, which use crankshafts to create flapping motions similar to bird wings:

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/UVbcF6dYFdw" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 3: Testing of ornithopter-inspired mechanism</figcaption>
</figure>

The ornithopter approach provided more fluid motion but was better suited to bird-like flapping than the undulating movement of ray fins. Additionally, the mechanical complexity would have increased manufacturing difficulty and reduced reliability. This testing phase highlighted the challenge identified by Vincent et al. (2006) regarding the transfer of biological principles to engineered systems - direct mechanical mimicry often fails to capture the essential characteristics of biological movement.

## Biomimetic Design Breakthrough

A significant pivot point occurred during review of a previous project involving articulated finger mechanisms. Analysis revealed that the finger's compliant joints and tendon actuation system closely resembled the biomechanical principles of batoid fin movement.

<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/Qyg0hTw_8P0" frameborder="0" allowfullscreen></iframe>
  <figcaption>Video 4: Finger mechanism that inspired the biomimetic approach</figcaption>
</figure>

### Adaptation of Compliant Mechanisms

The finger design utilized flexible joints and a tendon system that, when adapted, could create the symmetrical, wave-like motion required for the manta ray sculpture:

<figure>
  <img src="/images/Screenshot%202024-10-04%20121655.png" alt="Original finger design showing compliant joints and tendon system" width="500">
  <figcaption>Figure 1: Original finger design showing compliant joints and tendon system</figcaption>
</figure>

This approach aligned with Howell et al.'s (2013) principles for compliant mechanism design, which emphasize the advantages of achieving motion through material flexibility rather than traditional joints. The symmetrical movement pattern of the finger mechanism proved remarkably similar to the undulating motion of manta ray fins - in fact, significantly closer to ray locomotion than to human finger movement.

## CAD Development Process

### Technology Selection and Implementation

Computer-Aided Design (CAD) development was conducted using Onshape, a parametric cloud-based platform. This software was selected over alternatives like Fusion 360 or SolidWorks due to its browser-based accessibility, robust parametric capabilities, and collaborative features that facilitated team input.

The parametric approach was particularly valuable for this project as it allowed systematic testing of different flexibility profiles through controlled dimensional variations. This aligns with Megaro et al.'s (2017) findings on the importance of parametric control in compliant mechanism design.

<figure>
  <img src="/images/cad%20sketch%201.png" alt="CAD sketch showing the compliant joint design concept for the ray" width="500">
  <figcaption>Figure 2: CAD sketch of the ray design concept showing compliant joint arrangement</figcaption>
</figure>

### Compliant Joint Engineering

The design utilized rigid sections connected by flexible "spring" sections that function as compliant joints. Critical design considerations included:

1. **Wall thickness optimization**: All compliant parts were designed as multiples of the 0.4mm printer nozzle diameter to ensure printability and consistent mechanical properties
2. **Parametric variables**: Key dimensions were defined as variables within Onshape to facilitate rapid iteration and testing
3. **Stress distribution**: The length of spring sections was carefully calculated to distribute bending stress over a larger area, reducing the risk of material failure

This approach to stress distribution follows principles outlined by Kumar and Gupta (2021), who emphasize the importance of geometry optimization in compliant mechanisms to prevent localized stress concentrations and premature failure.

### Modular Design Architecture

The design maintained a modular approach, with fins designed to attach to a central frame using a sliding rail system:

<figure>
  <img src="/images/rail.png" alt="CAD model showing the rail attachment system" width="500">
  <figcaption>Figure 3: CAD model of the rail attachment system</figcaption>
</figure>

This modular architecture offered several advantages:
- Simplified manufacturing by dividing the structure into manageable components
- Enabled replacement of individual components if damaged
- Facilitated iteration of fin designs without reprinting the entire structure
- Allowed for mirrored use of the same components on either side, reducing unique part count

<figure>
  <img src="/images/integratedtendon.png" alt="CAD model showing the integrated tendon system" width="500">
  <figcaption>Figure 4: CAD model showing the integrated tendon system with attached fins</figcaption>
</figure>

The design incorporated an integrated tendon system attached to the tip of each wing. When the tendon is actuated, the wing bends in a tip-first manner, creating the characteristic wave-like motion of manta ray swimming.

<div class="stl-viewer-container">
  <script src="https://embed.github.com/view/3d/Ki-D-Talbot/Ki-D-Talbot.github.io/main/models/wing.stl">
  </script>
</div>
<figcaption>Figure 5: Interactive 3D model of the wing design with compliant joints</figcaption>

### Design Iteration and Refinement

Further exploration led to a more complex design with individual tendons for each joint, allowing for more precise control over the movement pattern:

<figure>
  <img src="/images/multijoint.png" alt="CAD model showing the multi-tendon design variant" width="500">
  <figcaption>Figure 6: CAD model showing the multi-tendon design variant with individual joint control</figcaption>
</figure>

While this approach offered greater motion control, it required a more complex actuation system. Initial designs explored a configurable camshaft system that could "program" different movement patterns. However, technical analysis revealed that this would require precision machining beyond the capabilities of available 3D printing technology.

### Final Design Approach

The design was ultimately simplified back to a single tendon system actuated by a gear mechanism, balancing biomimetic movement with manufacturing feasibility:

<figure>
  <img src="/images/cog1.png" alt="CAD model of the gear actuation system" width="500">
  <figcaption>Figure 7: CAD model of the gear actuation system for tendon control</figcaption>
</figure>

The gear system was designed using Onshape's spur gear add-on, which facilitated precise control over tooth pitch and radius. Each tendon was attached to its own gear, mounted on a print-in-place axle to eliminate post-print assembly requirements.

This final design approach represents what Pawlyn (2016) describes as "biomimicry maturity" - moving beyond superficial copying of forms to implementing the underlying functional principles within the constraints of available materials and manufacturing technologies.
