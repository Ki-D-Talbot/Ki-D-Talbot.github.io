---
layout: page
title: "Mechanical Prototyping & Control System"
permalink: /prototypes2/
order: 8
---

## Mechanical Prototyping & Control System

<figure>
  <img src="/images/orca.png" alt="cad sketch" width="500">
  <figcaption>Slicer setting showing print time and cost</figcaption>
</figure>

Once the parts were printed, we started to assemble them, 1.75mm filament was used as a hinge. the hardware was added and we could do our first test. 

Another quick video of prototypes
<figure>
  <iframe width="700" height="400" src="https://www.youtube.com/embed/ZtRWC7dh7FQ" frameborder="0" allowfullscreen></iframe>
  <figcaption>Demonstration of the prototype</figcaption>
</figure>
You can see proof the mechanism works, as well as the servo encoder feedback loop.

<figure>
  <img src="/images/guts1.jpg" alt="cad sketch" width="500">
  <figcaption></figcaption>
</figure>
<figure>
  <img src="/images/guts2.jpg" alt="cad sketch" width="500">
  <figcaption></figcaption>
</figure>
<figure>
  <img src="/images/guts3.jpg" alt="cad sketch" width="500">
  <figcaption>Some gut shots</figcaption>
</figure>

### Bill of Materials (BOM)

| Item | Quantity | Notes |
|------|----------|-------|
| 360° Continuous Rotation Servos | 4 | For driving the gear mechanisms |
| KY-040 Rotary Encoders | 4 | For position feedback |
| Raspberry Pi Pico | 1 | Main microcontroller |
| PCA9685 Servo Driver | 1 | For controlling multiple servos |
| PLA Filament | ~250g | For 3D printed components |
| Fishing Line | ~2m | Used as tendons for the mechanism |
| Dupont Connectors | ~20 | For electrical connections |

### Code

The code was written in MicroPython and uploaded to the Pico. The switches on the encoders were used to set the maximum distance the servo could turn. It uses PID control to govern the speed and position of the servos. 

<div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 5px; border-left: 5px solid #007bff;">
  <h4><i class="icon brands fa-github"></i> GitHub Repository</h4>
  <p>View the full source code, including documentation and setup instructions:</p>
  <a href="https://github.com/Ki-D-Talbot/manta_ray" class="button" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">View on GitHub</a>
</div>

it was time to think about the covering...

