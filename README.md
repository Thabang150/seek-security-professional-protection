# Seek Security: Professional Protection

# SECURITY COMPANY WEBSITE — MASTER PROMPT

Build a **premium, modern, production-ready security company website in Next.js** using the company research, logo, images and information provided at the bottom of this prompt.

The goal is to create a website that looks like a **legitimate, established security company**, not a generic AI-generated template.

The priorities are:

**Trust → Clarity → Credibility → Conversion → SEO → Performance**

---

## 1. COMPANY RESEARCH = SOURCE OF TRUTH

The information at the bottom may come from:

* Google Business Profile
* Existing website
* Social media
* Company profiles
* Public business directories
* Supplied company information
* Logo/brand assets
* Supplied photographs

The information will be inconsistent between companies. **Do not expect a fixed structure. Interpret the information intelligently.**

Use only information that is actually supported by the supplied research.

**Never invent:**

* Services
* Locations
* PSIRA registrations
* Certifications
* Years of experience
* Client numbers
* Response times
* Testimonials
* Awards
* Partnerships
* Guarantees
* Statistics
* Security capabilities

If information is missing, simply design around what is known.

Do not fill gaps with fabricated marketing claims.

---

# 2. BRAND & VISUAL IDENTITY

Analyse the supplied logo and visual assets before designing.

Extract the:

* Primary colours
* Secondary colours
* Accent colours
* Typography characteristics
* Visual personality
* Brand positioning

Choose typography that **complements the logo and brand**, rather than automatically using popular fonts.

Create a cohesive visual system around the existing brand.

The website should feel specific to this company.

Do NOT default to the stereotypical:

**black + red + shield icons + generic security guard imagery.**

Use that visual language only if it genuinely suits the brand.

---

# 3. DESIGN DIRECTION

The site should feel:

**Professional**
**Trustworthy**
**Authoritative**
**Modern**
**Premium**
**Clear**
**Human**

Use strong:

* Grid systems
* Typography hierarchy
* White space
* Contrast
* Image composition
* Alignment
* Section rhythm
* CTA hierarchy

Avoid:

* Clutter
* Excessive gradients
* Excessive glassmorphism
* Huge amounts of text
* Excessive rounded cards
* Generic AI aesthetics
* Overuse of icons
* Excessive shadows
* Over-designed sections

The design should be **clean and visually interesting without being overstimulating.**

---

# 4. IMAGERY

Use supplied company imagery as the primary visual content.

Do not simply create a gallery.

Use images strategically throughout:

* Hero
* Services
* About
* Operations
* Team
* Equipment
* Service areas
* Proof
* CTA sections

Prioritise authentic company imagery over generic stock photography.

Use intelligent cropping and responsive image treatment.

If imagery is unavailable for a section, use a strong layout rather than inserting irrelevant stock imagery.

---

# 5. WEBSITE STRUCTURE

Create the pages/sections appropriate to the information available.

At minimum, consider:

### Homepage

* Header/navigation
* Hero
* Trust/credentials
* Services
* Why choose the company
* Service areas
* Proof/testimonials where available
* About/company
* CTA
* Contact
* Footer

### Additional pages

Create dedicated pages where they provide genuine value, such as:

* Individual services
* Service areas
* About
* Contact
* FAQs

Do not create thin pages purely for SEO.

The exact architecture should be determined by the company information.

---

# 6. HERO

The hero must immediately communicate:

**Who they are**
**What they do**
**Where they operate**
**Why they are credible**
**What the visitor should do**

Use:

* Strong headline
* Supporting copy
* Relevant company imagery
* Primary CTA
* Secondary CTA where appropriate
* Trust indicator where available

Use real company claims only.

---

# 7. SERVICES

Clearly communicate exactly what the company provides.

Examples include:

* Armed response
* Security guarding
* Mobile patrols
* Access control
* CCTV
* Event security
* Commercial security
* Residential security
* Estate security
* Construction security

Only include services supported by the research.

Make services highly scannable with concise descriptions and appropriate imagery.

---

# 8. TRUST & CREDIBILITY

Security is a high-trust industry.

Where available, prominently communicate:

* PSIRA registration
* Industry associations
* Certifications
* Licences
* Years of experience
* Client numbers
* Awards
* Insurance
* Reviews
* Testimonials
* Client logos
* Case studies
* Relevant company statistics

Do not fabricate any of these.

If there are limited trust signals, strengthen credibility through authentic company information, photography, experience and clear communication rather than invented claims.

---

# 9. SERVICE AREAS & LOCAL SEO

Clearly communicate the locations the company actually serves.

Use:

**Service + Location**

SEO naturally throughout the website.

Examples:

* Security company Pretoria
* Armed response Centurion
* Security guards Midrand

Only target locations and services supported by the research.

Where enough genuine information exists, create dedicated service/location pages.

Do not create spammy near-identical location pages.

---

# 10. CONVERSION & CONTACT

Make contacting the company extremely easy.

Use the actual contact methods supplied.

### Phone

Use clickable `tel:` links.

### WhatsApp

Use direct WhatsApp links where a number is available.

### Email

Use `mailto:` links where appropriate.

### Contact / Quote Form

Create a simple form using relevant fields such as:

* Name
* Phone
* Email
* Service required
* Location
* Message

The exact fields should be adapted to the business.

The form must have:

* Validation
* Accessible labels
* Error states
* Success state
* Mobile-friendly inputs
* Spam protection

**Do not build a CRM, client portal, authentication system, custom lead database, or complex backend.**

We do not know how the company currently manages leads.

The website should simply send enquiries through the simplest available method, such as:

**Email → WhatsApp → existing form service**

depending on what is configured.

The website must remain independent of any particular CRM.

---

# 11. SPAM PROTECTION

Protect forms with lightweight spam prevention.

Prefer:

**Cloudflare Turnstile or Google reCAPTCHA**

Use environment variables for secret credentials.

Never expose private keys in frontend code.

If credentials are not supplied, create the integration/configuration point without inventing credentials.

---

# 12. GOOGLE ANALYTICS

Implement GA4 using:

`@next/third-parties`

Use:

`NEXT_PUBLIC_GA_ID`

rather than hardcoding the Measurement ID.

Track:

* Page views
* WhatsApp clicks
* Phone clicks
* Contact form starts
* Contact form submissions
* Quote requests

Keep analytics lightweight.

Do not build a custom analytics backend.

---

# 13. SEO

Implement proper technical and on-page SEO:

* Unique page titles
* Meta descriptions
* H1/H2/H3 hierarchy
* Semantic HTML
* Canonical URLs
* Open Graph metadata
* Sitemap
* Robots.txt
* Clean URLs
* Image alt text
* Internal linking
* Local SEO
* Relevant structured data/schema

Use structured data only when supported by the available information.

Prioritise genuine search intent over keyword stuffing.

---

# 14. PERFORMANCE & ACCESSIBILITY

Build mobile-first and optimise for:

* Fast loading
* Core Web Vitals
* Optimised images
* Minimal unnecessary JavaScript
* Responsive layouts
* Semantic HTML
* Keyboard navigation
* Accessible forms
* Sufficient contrast
* Visible focus states
* Screen-reader compatibility
* `prefers-reduced-motion`

The website must work beautifully on:

**Mobile → Tablet → Desktop → Large screens**

---

# 15. CTA STRATEGY

Use strong CTAs throughout the site without making the website feel pushy.

Important conversion opportunities should appear naturally after:

* Hero
* Services
* Trust/proof
* Service areas
* About
* Final CTA

Prioritise the actual company's preferred action:

**Call → WhatsApp → Request Quote → Contact**

Use a clear primary CTA and restrained secondary CTAs.

---

# 16. ANIMATION

Use subtle, premium animation only where it improves the experience.

Good:

* Fade/slide reveals
* Image reveals
* Hover states
* Navigation transitions
* Button interactions
* Smooth scrolling

Avoid:

* Constant movement
* Excessive parallax
* Spinning elements
* Excessive page transitions
* Distracting backgrounds

Animation must never hurt performance or usability.

---

# 17. CODE & ARCHITECTURE

Use clean, maintainable Next.js architecture.

Create reusable components such as:

* Header
* Navigation
* Hero
* Trust section
* Service cards
* Service grid
* Testimonials
* Service areas
* CTA
* Contact form
* Footer

Avoid unnecessary dependencies and duplicated code.

Keep future integrations possible without building them now.

---

# 18. FINAL QUALITY STANDARD

Before completing the site, review it as a cautious potential customer.

Within a few seconds, can I understand:

**What does this company do?**

**Where do they operate?**

**Can I trust them?**

**What makes them credible?**

**How do I contact them?**

The finished website should feel:

**Real → Professional → Trustworthy → Clear → Fast → Easy to contact**

It should look custom-designed for this company rather than like a reused template.

---

# COMPANY RESEARCH & ASSETS

Everything below is the research and material available for this specific company.

Information may be provided in any format and may come from multiple sources.

Interpret it intelligently and use it as the source of truth.

## ADDITIONAL INFORMATION
seek1 to  seek11 are galleryimages showing the business/company cars, security armed persons, etc

Seek Security

Seek Security is a South African private security company based in Pierre van Ryneveld, Centurion. Founded in 2019 by the Orren family, the company draws on military, security and corporate security experience.

The company provides comprehensive security services for individuals, homes, businesses, properties and high-value assets. Its positioning focuses on professional protection, peace of mind, highly trained personnel, proactive security and the use of modern security technology.

Services

Armed Response

Security Guarding — Domestic, Commercial, Industrial and Mining

VIP Protection

Bodyguarding

Vehicle Tracking

High-Risk Escorts and High-Value Product Escorts

Investigations

Alarm Monitoring

Offsite Real-Time CCTV Monitoring

Rapid Response / RRU

Medical Response

Event Security

Security Equipment Installation

PSIRA Security Guard Training

Key Differentiators

Tailored security solutions

Experienced and highly trained security personnel

Military and security industry expertise

Proactive threat and risk management

Modern security technology

24/7 monitoring and support

Professionalism, integrity, loyalty and transparent communication

Mission

To provide clients with peace of mind through professional, reliable and effective security services while building long-term relationships with clients, contractors and property developers.

Vision

To expand nationally and become a preferred security provider while maintaining high standards of professionalism, discipline, service delivery and technology.

Location & Contact

78 Van Ryneveld Ave, Pierre van Ryneveld, Centurion, 0157
Office: 012 881 8091
Control Room: 071 324 0605

Brand Positioning

Seek Security presents itself as a trusted, professional security partner focused on protecting people, property and assets through a combination of trained personnel, technology, proactive security and rapid response.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/78b7b974-b172-4bfc-b920-76413a690d96).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
