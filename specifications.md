---
layout: page
title: "Specifications"
permalink: /specifications/
order: 4
---

# Project Planning and Requirements

## Design Specifications

The following constraints and requirements were established to guide the design and development process:

1. **Size Limitations**: The artifact must fit on a standard home 3D printer build plate (approximately 220mm × 220mm × 250mm) to ensure accessibility and reproducibility.

2. **Material Selection**: Must use non-exotic, non-toxic, and easy-to-print materials such as PLA or PETG to ensure safety and reliable printing outcomes.

3. **Minimal Support Structure**: Design must minimize or eliminate the need for support structures to reduce material waste, post-processing time, and improve surface finish.

4. **Hardware Efficiency**: Must require minimal additional hardware (such as fasteners, motors, or electronics) to maintain simplicity and reduce assembly complexity.

5. **Functional Requirements**: Must demonstrate biomimetic movement that accurately represents manta ray swimming motion through compliant mechanisms.

These specifications were developed based on both practical manufacturing constraints and the functional goals of the project, aligning with Sartori et al.'s (2010) methodology for integrating biomimetic principles with engineering feasibility considerations.

## Development Timeline

The project followed a structured development process divided into research, prototyping, design iteration, and final implementation phases:

<div class="mermaid">
gantt
    title Manta Ray Robot Development Timeline
    dateFormat  YYYY-MM-DD
    axisFormat  Week %W

    section Research Phase
    Research & Concept           :a1, 2025-01-01, 2w
    First Design Concept         :a2, after a1, 2w

    section Initial Testing
    First Physical Prototype     :a3, after a2, 2w
    Design Pivot                 :a4, after a3, 1w

    section Redesign Phase
    Modular Redesign             :a5, after a4, 2w
    Refined Prototyping          :a6, after a5, 2w

    section Completion
    Final Implementation         :a7, after a6, 2w
</div>

This timeline illustrates the iterative nature of the design process, highlighting the critical design pivot that occurred after initial prototype testing. As noted by Williams (2024), this phase represents a crucial learning point in many biomimetic projects, where theoretical designs must be adjusted based on physical testing outcomes.

The allocation of time across research, testing, and redesign phases reflects Helms, Vattam and Goel's (2009) recommended approach to biomimetic design, which emphasizes the importance of thorough biological research followed by multiple cycles of design translation and testing.