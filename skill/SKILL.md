---
name: takeaway-skill
description: Distill a reference into reusable mechanisms instead of copying surface style. Use when you need to study a site, effect, page, layout, screenshot, or visual system, decide what can be taken, what should not be copied, what must be redesigned, and how to hand the result to implementation.
---

# Takeaway Skill

## 0. Position

- Chinese alias: `拿来主义skill`
- English name: `takeaway-skill`
- Core stance:
  - Takeaway is not copy-paste.
  - The point is not "How similar can we make it?"
  - The point is "Which mechanisms are worth taking, and how do we turn them into our own version?"

## 1. When To Use

Use this skill when the user says things like:

- "Study this effect, but do not copy it literally."
- "Break down this website and tell me what is worth taking."
- "Distill this reference into something reusable."
- "I want the mechanism, not the skin."
- "Tell me what can be reused and what must be redesigned."
- "学一下这个效果。"
- "拆一下这个网站。"
- "别照抄，把能拿的拿出来。"

Typical reference objects:

- websites
- demos
- interaction effects
- landing pages
- layout systems
- visual systems
- screenshots
- short recordings
- reference videos

## 2. Default Goal

The goal is not to summarize the reference.

The default goal is to:

1. identify the most valuable thing to take away
2. separate transferable mechanisms from non-transferable surface traits
3. suggest how to adapt the idea into the user's own version
4. produce a stable output instead of vague commentary
5. suggest a clear implementation handoff

## 2.1 Repository Reminder

When this skill is used inside this public repository, do not leave the result as a standalone text note only.

The default expectation is:

1. distill the reference
2. turn the result into a reusable entry or placeholder block
3. place the working result into `takeaway_is_here/distilled_entries/`
4. use `takeaway_is_here/OPEN_HOME.html` as the beginner-friendly entry
5. only mirror the public-safe showcase layer into `site/index.html`
6. review it through the webpage instead of treating the skill output as the final destination

In short:

- `skill/SKILL.md` defines the reasoning method
- `references/` provides safe templates
- `takeaway_is_here/` is the default result zone
- `site/index.html` is the public-facing showcase shell

## 3. Default Workflow

### 3.1 Identify the object before judging it

Answer these questions first:

1. What is this object actually doing?
2. Is its strength mainly in mechanism, structure, visual language, or rhythm?
3. Which layer does the user want to take?
4. Is this task about:
   - distillation only
   - implementation
   - adaptation

### 3.2 Split the reference by layers

Analyze the reference through these layers:

1. Structure layer
   - information architecture
   - page skeleton
   - module order
2. Mechanism layer
   - interaction rules
   - layout logic
   - motion triggers
   - state changes
3. Visual layer
   - color
   - material
   - typography
   - texture
   - highlight and shadow
4. Rhythm layer
   - density
   - pause
   - movement
   - breathing room
5. Implementation layer
   - code-driven
   - design-asset-driven
   - media-processing-driven

### 3.3 Produce four judgments every time

Every run should identify all four:

1. Can take directly
2. Cannot take directly
3. Can take after adaptation
4. Evidence still insufficient

## 4. Evidence And Stop-Loss Rules

### 4.1 Evidence priority

Use this evidence priority:

1. real source code
2. user screen recordings
3. user screenshots
4. real DOM and asset structure
5. our own reconstruction demos

Rules:

1. A demo made by us is validation material, not ground truth about the original.
2. If a recording or screenshot conflicts with our demo, trust the recording or screenshot first.
3. If the evidence is not enough, mark it as insufficient instead of forcing a clean conclusion.
4. If the effect is clearly made of multiple layers, split the layers first and judge them separately.

### 4.2 Stop-loss

1. If two rounds still cannot explain which layer is being studied, stop and go back to the evidence.
2. If the same visual problem is pointed out twice, stop guessing parameters and return to source material.
3. For banner, hero, or page-layout tasks, lock:
   - skeleton
   - crop
   - block relationships
   before tuning:
   - font size
   - spacing
   - color
   - decorative details

## 5. Fixed Deliverables

Every run should produce at least four of the following:

1. Distilled object
2. One-line judgment
3. Most valuable takeaway
4. Directly reusable list
5. Not safe to copy list
6. Adaptation suggestions
7. Recommended next implementation handoff

Recommended output order:

1. What this object is
2. What is most worth taking
3. Which parts are mechanism
4. Which parts are only surface
5. How to adapt it into the user's own version
6. What to do next

If you need a stable response skeleton, read:

- `references/output_template.md`

If you need safe prompt placeholders instead of third-party examples, read:

- `references/prompt_slots.md`

## 6. Public Release Boundary

This public package should not become a hidden archive of third-party examples.

Rules:

1. Do not store third-party site names as official examples in this public repo.
2. Do not store third-party screenshots, recordings, or protected copy in reusable example files.
3. If examples are needed, prefer:
   - blank templates
   - placeholder slots
   - anonymous object types
4. Use your own banner, copy, and assets if you want branding in a public release.

If you need a public-safety check, read:

- `references/open_source_safety.md`

### 6.1 Public intake safety

When this public package borrows ideas from GitHub repositories, design libraries, or UI tools, treat them as:

- method references
- taxonomy references
- output-shape references

Do not treat them as trusted execution chains to copy wholesale.

Do not import directly:

1. full executable prompts
2. external automation pipelines
3. install scripts or environment-specific setup
4. third-party screenshot collections
5. private notes from the internal workflow

### 6.2 Public identity boundary

This public package must not automatically carry over:

1. private identity details
2. private links
3. local absolute paths
4. internal-only workflow traces
5. third-party screenshots or recordings kept for private study

## 7. Downstream Handoff

This skill decides what is worth taking and how it should be adapted.

It does not have to implement everything itself.

Typical downstream destinations:

- web implementation workflow
- SVG or vector workflow
- image extraction workflow
- static visual refinement workflow
- copywriting or narrative rewrite workflow

When handing off, always include:

1. which layer is being implemented
2. which evidence is most trustworthy
3. what should not be touched yet
4. what the smallest valid result is
5. what the stop-loss condition is

If the repository already contains a site shell, the default public workflow is:

1. save working outputs into `takeaway_is_here/distilled_entries/`
2. keep beginner entry routing in `takeaway_is_here/OPEN_HOME.html`
3. mirror only the public-safe showcase layer into `site/index.html`

### 7.1 Public v2.0 output boundary

For the public `v2.0` package:

1. `references/` is for method templates, not for the user's long-term distilled result library.
2. `takeaway_is_here/` is the default place to store user-facing distilled outputs.
3. `takeaway_is_here/OPEN_HOME.html` is the beginner-safe shortcut back to the homepage.
4. `site/index.html` should be treated as the public showcase shell, not the only storage location for every result.

## 8. Boundaries

1. Do not turn takeaway into full-site cloning.
2. Do not encourage copying someone else's brand identity, signature typography, or highly recognizable facade.
3. Do not confuse reference analysis with project completion.
4. If the user clearly wants implementation or adaptation, continue with a real handoff instead of stopping at commentary.

## 9. Trigger Samples

- "Study this, but do not copy it."
- "Break down this site and tell me what is worth taking."
- "Distill this reference into a version I can use."
- "I only want its rhythm and mechanism, not its visual skin."
- "看看哪些能直接复用，哪些必须改。"

## 10. Wrap-Up Review Rule

If a takeaway task clearly went wrong, the wrap-up review should also capture:

1. what object was misunderstood
2. where the earliest stop-loss point should have been
3. whether the lesson belongs in:
   - this skill
   - the implementation workflow
   - or only project documentation

If the lesson is reusable across projects, prefer writing it back into the skill instead of leaving it only in chat history.
