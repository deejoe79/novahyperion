---
name: Kinetic Noir
colors:
  surface: '#111125'
  surface-dim: '#111125'
  surface-bright: '#37374d'
  surface-container-lowest: '#0c0c1f'
  surface-container-low: '#1a1a2e'
  surface-container: '#1e1e32'
  surface-container-high: '#28283d'
  surface-container-highest: '#333348'
  on-surface: '#e2e0fc'
  on-surface-variant: '#e8bdb4'
  inverse-surface: '#e2e0fc'
  inverse-on-surface: '#2f2e43'
  outline: '#ae8880'
  outline-variant: '#5e3f39'
  surface-tint: '#ffb4a4'
  primary: '#ffb4a4'
  on-primary: '#640d00'
  primary-container: '#ff5633'
  on-primary-container: '#580a00'
  inverse-primary: '#b82100'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#abc7ff'
  on-tertiary: '#002f66'
  tertiary-container: '#438fff'
  on-tertiary-container: '#002959'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a4'
  on-primary-fixed: '#3e0500'
  on-primary-fixed-variant: '#8d1700'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#abc7ff'
  on-tertiary-fixed: '#001b3f'
  on-tertiary-fixed-variant: '#00458f'
  background: '#111125'
  on-background: '#e2e0fc'
  surface-variant: '#333348'
  surface-subtle: '#24243E'
  background-alt: '#0F0F1B'
  text-muted: '#A0A0B8'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is built upon a **Corporate Modern** foundation with a high-performance, developer-centric edge. It targets a sophisticated B2B audience in the technology and software engineering space, evoking feelings of precision, velocity, and reliability.

The aesthetic is characterized by a deep dark-mode environment that allows vibrant, high-energy accents to command attention. This "Kinetic Noir" style utilizes a strict grid, ample whitespace for technical clarity, and subtle glassmorphic overlays to provide depth without sacrificing the professional, utilitarian feel of a high-end software agency.

## Colors

This design system utilizes a high-contrast dark theme. The palette is dominated by a deep, midnight navy (`#1A1A2E`) which acts as the canvas, providing more depth than pure black. 

- **Primary:** The "Kinetic Orange" (`#F53103`) is used sparingly but impactfully for primary calls to action, active states, and critical branding elements.
- **Secondary:** White (`#FFFFFF`) is reserved for high-priority typography and iconography to ensure maximum legibility against dark backgrounds.
- **Surface Strategy:** Use nested layers of increasing lightness to define hierarchy. Backgrounds start at the darkest value, with cards and containers using slightly lighter navy tints to create a sense of physical stacking.

## Typography

The typography strategy pairs the modern, sharp geometry of **Hanken Grotesk** with the technical precision of **JetBrains Mono**. 

- **Headlines:** Use Hanken Grotesk with tight letter-spacing and heavy weights to create a sense of authority and "tech-forward" momentum. 
- **Body:** Maintains generous line-heights for readability in documentation-heavy or technical contexts.
- **Labels:** Monospaced JetBrains Mono is used for tags, small metadata, and technical labels to reinforce the "Mobile Reality" developer aesthetic.
- **Scaling:** On mobile, reduce display sizes by 25-40% while maintaining the heavy weights to preserve the brand's bold character.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium, editorial feel, while transitioning to a fluid model for mobile devices. 

- **Grid System:** A 12-column grid with 24px gutters. Content should be centered within a 1280px max-width container.
- **Rhythm:** An 8px linear scale (8, 16, 24, 32, 48, 64, 80, 96) governs all padding and margins.
- **Reflow:** On tablet (768px), margins reduce to 32px and columns collapse to 8. On mobile (375px), use a 4-column layout with 16px margins.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface Levels:** 
    - Level 0 (Background): `#1A1A2E`
    - Level 1 (Cards/Containers): `#24243E`
    - Level 2 (Popovers/Tooltips): `#2D2D4D`
- **Outlines:** Use 1px borders with 10% white opacity for containers to define edges against dark backgrounds.
- **Accents:** A subtle "glow" effect (0px blur, primary color tint) can be used on primary button hover states to simulate luminosity.

## Shapes

The shape language is **Soft** but disciplined. 0.25rem (4px) is the standard radius for small components like inputs and checkboxes. Larger containers like cards use 0.5rem (8px). This creates a modern look that feels approachable but maintains the structural integrity required for professional software products. Avoid fully circular "pill" buttons except for small, floating tags or chips.

## Components

- **Buttons:** Primary buttons use the `#F53103` background with white text, 4px radius, and all-caps JetBrains Mono labels. Secondary buttons use a transparent background with a 1px white border.
- **Input Fields:** Darker than the surface level (`#0F0F1B`), with 1px borders that transition to the primary orange on focus.
- **Chips/Tags:** Use the monospaced label style with a subtle background (`#24243E`) and no border. 
- **Cards:** Defined by a 1px border (`rgba(255,255,255,0.1)`) and a slight vertical gradient to give a subtle sense of top-down lighting.
- **Data Visuals:** Use the primary orange for data lines and neutral grays for axes to maintain focus on the metrics.