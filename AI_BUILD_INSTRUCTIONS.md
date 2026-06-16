# Beyond Bots Website Build Instructions

You are a senior UI/UX designer, SEO strategist, frontend architect, and conversion optimization specialist.
Your task is to build a production-ready static business website for Beyond Bots.
You must strictly follow the requirements defined in:
1. PROJECT_OVERVIEW.md
2. SITE_ARCHITECTURE.md
3. CONTENT_MASTER.md
4. DESIGN_SYSTEM.md

Do not invent additional sections, messaging, or visual styles unless explicitly required.

---

# PROJECT INFORMATION

* **Company Name:** Beyond Bots
* **Domain:** www.bb360.in
* **Product Ecosystem:** BB360
* **Industry:** Technology Services
* **Primary Services:** Web Development, AI Agentic Solutions, Digital Marketing
* **Business Goal:** Generate consultation requests and qualified leads.

---

# WEBSITE TYPE

Single-page static website. Navigation should smoothly scroll between sections.
Required Sections:
1. Home
2. About
3. Services
4. BB360
5. Process
6. FAQ
7. Contact
Footer included.

---

# DESIGN PRIORITIES

The website should communicate:
* Trust
* Technical expertise
* Business automation
* Professionalism
* Scalability

Visitors should immediately understand that Beyond Bots builds intelligent business systems.

Avoid making the website look like:
* A generic marketing agency
* A startup landing page template
* A crypto company
* A futuristic neon AI product

Instead create a modern technology-company experience.

---

# BRAND IDENTITY

Use the official Beyond Bots logo.
Logo placement:
* Navbar
* Footer
Maintain logo proportions. Do not recolor the logo.

---

# COLOR SYSTEM

* Primary Orange: #F65E1E
* Black: #000000
* White: #FFFFFF
* Light Gray: #F2F2F2
* Neutral Gray: #7A7A7A

Follow the color ratio: 70% White | 20% Black | 10% Orange.
Orange should primarily appear in:
* CTA buttons
* Interactive elements
* Accent graphics
* Hover states

---

# TYPOGRAPHY

* Font Family: Inter
* Fallback: system-ui, sans-serif
Typography hierarchy must match DESIGN_SYSTEM.md. Do not use decorative fonts.

---

# SEO REQUIREMENTS

Critical: Follow all content from CONTENT_MASTER.md exactly.
Implement:
* Single H1 only
* Proper H2/H3 hierarchy
* Semantic HTML (header, main, section, article, footer)
* Meta Title
* Meta Description
* Canonical URL
* Open Graph tags
* Twitter Card tags

Structure correctly.

---

# SCHEMA MARKUP

Add JSON-LD structured data.
Required Schemas:

## Organization Schema
* Name: Beyond Bots
* URL: https://www.bb360.in

## Service Schema
* Web Development
* AI Agentic Solutions
* Digital Marketing

## FAQ Schema
* Generate from FAQ content.

---

# PERFORMANCE REQUIREMENTS

Target Lighthouse Scores:
* Performance: 95+
* Accessibility: 95+
* SEO: 100
* Best Practices: 95+

Requirements:
* Lazy load assets
* Optimize SVGs
* Minimize JavaScript
* Avoid unnecessary libraries
* Use responsive images

---

# NAVIGATION

Sticky navbar.
* **Desktop:** Logo left | Menu right | CTA button right
* **Mobile:** Hamburger menu | Smooth animations
Accessible navigation.

---

# HERO SECTION

Use content from CONTENT_MASTER.md.
* **Layout:** Desktop: 2-column layout | Left: Headline, Description, CTA buttons | Right: Custom SVG illustration.
* Do NOT use stock photos.
* Visual should represent: Web Development, AI Agents, Automation, Growth.

---

# ABOUT SECTION

Use provided content. Add subtle visual separator. Use readable content width. Prioritize clarity over visual effects.

---

# SERVICES SECTION

Display three service cards:
1. Web Development
2. AI Agentic Solutions
3. Digital Marketing

Each card includes: Icon, Description, Service bullets, CTA.
Cards should have hover interaction.

---

# BB360 SECTION

This section is strategically important. Visual hierarchy should be elevated.
* **Use:** Dark background | White text | Orange accents
* Create custom SVG ecosystem diagram.
* **Show relationship:** Website → AI Agents → Automation → Analytics → Growth
This should feel proprietary and unique.

---

# PROCESS SECTION

Display process timeline: Discover → Build → Automate → Scale
* **Desktop:** Horizontal timeline
* **Mobile:** Vertical timeline
Include subtle animations.

---

# FAQ SECTION

Use accordion design. Only one accordion item open at a time. Accessible implementation required. Add FAQ schema markup.

---

# CONTACT SECTION

Use content from CONTENT_MASTER.md.
Form Fields: Name, Business Name, Email, Phone, Service, Project Description.
Include validation. Show success state after submission. Design should focus on conversion.

---

# FOOTER

Include: Company summary, Quick links, Services, Contact information, Copyright. Do not overcrowd footer.

---

# ANIMATIONS

* **Allowed:** Fade In, Slide Up, Hover Lift, Counter Animation.
* **Avoid:** Heavy motion, continuous animation loops, excessive parallax, flashing effects.
Animations should feel professional.

---

# RESPONSIVENESS

Must work perfectly on Mobile, Tablet, Laptop, and Desktop.
Test widths: 320px | 768px | 1024px | 1440px | 1920px. No horizontal scrolling.

---

# ACCESSIBILITY

* **Required:** Keyboard navigation, focus states, proper labels, proper contrast, screen reader support.
WCAG-friendly implementation.

---

# FINAL QUALITY CHECK

Before completing the project verify:
✓ SEO implemented
✓ Meta tags implemented
✓ Schema markup implemented
✓ Responsive design complete
✓ Accessibility complete
✓ Content matches CONTENT_MASTER.md
✓ Design matches DESIGN_SYSTEM.md
✓ BB360 section highlighted
✓ Contact form working
✓ Performance optimized
✓ Lighthouse goals achievable

The final result should feel like a premium technology company website that combines web development, AI automation, and digital growth services under the Beyond Bots brand while showcasing the BB360 ecosystem as a strategic differentiator.
