# I PUT THIS ON CHATGPT :
I am participating in the AB Talks 60-Day Coding Challenge.
I have carefully read the complete challenge requirements. Please create a strong and clear prompt for Google Antigravity based on those requirements.

The design must be mobile-first, with **390px as the main target**

Please act as an expert UI/UX designer and make the visual and layout decisions yourself. The design should be modern, clean, simple, motivating, lightweight and professional. Use 3D or visual effects only when they improve the experience and do not make the website slow. The design should center on three core views: the landing page, the student dashboard, and the challenge day.

It should also include:
Responsive design , Good typography and spacing
Accessibility Semantic HTML
Basic SEO
Meta title and description
Proper heading structure
Image alt text
Proper structured data
Fast loading and optimized assets
Clean and maintainable code
React/Vite setup
Correct React Router setup
Vercel deployment support
Direct access and refresh support for all three required routes

The project should use realistic mock data because authentication, real accounts and a production database are out of scope.
Please also make sure the required edge cases are handled, including a first day with no streak, a missed day and an empty profile.
Before generating the final prompt, carefully review all the challenge requirements and make sure nothing important is missed.

# PROMPT :
# AB TALKS — 60-DAY CODING CHALLENGE
## MASTER BUILD INSTRUCTION FOR GOOGLE ANTIGRAVITY

You are responsible for designing and building the complete AB Talks 60-Day Coding Challenge web experience.

Do not approach this as a generic website-generation task.

Approach it as a **real product design and frontend engineering assignment**.

Act as an expert:

- Product Designer
- UI/UX Designer
- UX Strategist
- Mobile Experience Designer
- Senior React Engineer
- Accessibility Specialist
- Performance Engineer
- Technical SEO Specialist
- QA Engineer
- Visual Design Critic

Your responsibility is not only to build the interface.

Your responsibility is to:

**Understand the requirements → make the right design decisions → build → run → inspect → test → identify weaknesses → fix them → test again → finalize.**

Do not stop at the first acceptable implementation.

---

# 01 — IMMUTABLE PRODUCT REQUIREMENTS

The following requirements are fixed.

They are the highest-priority source of truth for the entire project.

Do not reinterpret them unnecessarily.

Do not remove required functionality.

Do not add unrelated functionality.

Do not expand the product simply to make it look larger.

The objective is to make the required experience exceptionally good through **quality, clarity, UX and visual execution**, not through unnecessary feature count.

---

## PRODUCT CONTEXT

AB Talks runs a 60-day coding challenge for Indian college students.

Students select a track, build something every day, and maintain a public learning streak by submitting:

- A GitHub commit
- A LinkedIn post

This daily proof of work helps students build consistency and become visible to recruiters.

Students primarily use the product on their phones, often late at night after college.

Therefore the experience must prioritize:

**clarity, motivation, speed, low cognitive load, trust and effortless mobile interaction.**

---

# 02 — REQUIRED PRODUCT SURFACE

Build exactly these three primary experiences.

## ROUTE 1


### Landing Page

The first experience for a student who has never heard of AB Talks.

The page must provide enough:

- Trust
- Clarity
- Motivation

for the student to understand the challenge and feel ready to commit to 60 days.

---

## ROUTE 2

### Student Dashboard

The home screen after entering the challenge.

Include:

- Current streak
- Today's task
- Progress through the challenge
- Overall completion
- Student standing or achievements

---

## ROUTE 3

### Challenge Day

The complete experience for a single challenge day.

The student must be able to:

- Read the day's task
- Understand what needs to be built
- Submit proof of work
- Provide GitHub repository/commit proof
- Provide LinkedIn post proof
- Submit the work

These three routes are the core product.

Do not create additional primary product routes.

---

# 03 — STRICT SCOPE CONTROL

Do NOT build:

- Authentication
- Login/signup
- Real user accounts
- Production database
- Backend
- Recruiter dashboard
- Admin panel
- Matching system
- Payment system
- Subscription system
- Real GitHub API integration
- Real LinkedIn API integration
- Unnecessary settings
- Separate profile-management application
- Extra challenge-day routes
- Extra product modules

The product must remain focused on the three required experiences.

Use locally structured application data so the interface behaves realistically.

Do not use unfinished placeholders.

Do not use lorem ipsum.

Do not use obviously fake UI.

Do not leave “coming soon” sections.

Do not leave empty demo cards.

Do not leave broken placeholder images.

Everything visible to the user should feel intentionally designed and complete.

---

# 04 — CONTENT INTEGRITY

Never fabricate facts about AB Talks.

Do not invent:

- Student counts
- Recruiter partnerships
- Success rates
- Testimonials
- Awards
- Statistics
- Placement claims
- Company partnerships
- Certifications
- Performance claims

Use the information actually available from the provided context and public brand references.

If a factual detail is unavailable, write clear product-oriented copy instead of inventing a fact.

The interface may use realistic application data for demonstrating the student experience, but it must never falsely present invented information as an official AB Talks fact.

---

# 05 — AB TALKS BRAND REFERENCE

Use AB Talks as the product identity.

Reference the provided public source:

https://share.google/Vyr0Nk513xla9nFai

and the public website:

https://www.abtalks.in/

Use the available identity and visual language as reference.

Do not clone the existing website.

Do not reproduce its layout blindly.

Create a stronger, modern product experience specifically for this challenge.

---

# 06 — DESIGN PRINCIPLE

Do not ask the user to decide:

- Light or dark
- Colors
- Typography
- 3D level
- Navigation
- Card design
- Spacing
- Icons
- Shadows
- Animation
- Layout

You are the designer.

Make these decisions yourself based on:

- Student psychology
- Developer culture
- Mobile-first behavior
- Late-night usage
- Motivation
- Consistency
- Career visibility
- Trust
- Cognitive simplicity
- 390px screenshot judging

The final visual direction should feel:

**premium, modern, clean, focused, intelligent, energetic, trustworthy and memorable.**

Do not make it look like a generic AI-generated SaaS template.

---

# 07 — 390PX IS THE PRIMARY EXPERIENCE

This is critical.

The product will be evaluated at:

**390px viewport width.**

Design for 390px first.

Do not design desktop and shrink it.

The 390px version must feel intentionally designed.

At 390px:

- No horizontal scrolling
- No clipped content
- No overlapping elements
- No broken cards
- No unreadable text
- No awkward wrapping
- No oversized decorative graphics
- No hidden primary actions
- No broken form fields
- No inaccessible controls

The desktop experience should be a natural expansion of the mobile design.

---

# 08 — VISUAL DIRECTION

Create a distinctive visual language for AB Talks.

Use:

- Strong typography
- Excellent spacing
- Refined surfaces
- Clear hierarchy
- Meaningful color
- Subtle depth
- Carefully controlled motion
- Strong progress visualization

Use 3D-inspired visual depth only when it improves the interface.

Examples:

- Layered surfaces
- Dimensional progress indicators
- Subtle perspective
- Floating visual accents
- Depth through lighting/shadows

Do not use heavy WebGL or large 3D scenes merely for decoration.

The product must remain fast.

**Visual sophistication must never come at the cost of usability or performance.**

---

# 09 — LANDING PAGE

The landing page must work for a completely new visitor.

The visitor should quickly understand:

**What is AB Talks?**

**What is the 60-day challenge?**

**What happens every day?**

**Why does public proof of work matter?**

**Why should I commit?**

**What do I do next?**

Primary CTA:

## Start 60-Day Challenge

This should be the dominant action.

Do not create multiple competing primary CTAs.

---

# 10 — LANDING PAGE CONTENT DISCIPLINE

Keep the landing page focused.

Only include sections that directly support:

- Understanding
- Trust
- Motivation
- The 60-day challenge

Do not add generic marketing sections merely because they are common on websites.

Do not create:

- Pricing
- Newsletter
- Blog
- Recruiter marketplace
- Contact forms
- Unrelated service sections
- Unnecessary testimonial sections
- Unnecessary FAQ systems
- Unrelated promotional content

Every visible section must have a clear purpose.

---

# 11 — DASHBOARD

The dashboard must feel like the student's personal daily command center.

It should answer immediately:

**What is my streak?**

**What do I need to do today?**

**Where am I in the 60 days?**

**How much have I completed?**

**What have I achieved?**

Prioritize visual hierarchy in this order:

### PRIMARY

Today's task

### SECONDARY

Current streak

### SUPPORTING

Challenge progress

### SUPPORTING

Overall completion

### SUPPORTING

Standing / achievements

Do not make it look like an enterprise analytics dashboard.

It should feel personal, motivating and actionable.

---

# 12 — CHALLENGE DAY `/day/12`

This is the most actionable screen.

The student should immediately understand:

### DAY 12

### TODAY'S TASK

What needs to be built.

What the requirements are.

What proof must be submitted.

Then:

### GITHUB PROOF

Repository / commit

### LINKEDIN PROOF

Post

### SUBMIT

The student should never have to guess what happens next.

---

# 13 — TASK DESIGN

Make the task highly scannable.

Use:

- Clear task title
- Day number
- Short explanation
- Build requirements
- Important criteria
- Proof requirements

Avoid giant paragraphs.

The student is likely using the product late at night on a phone.

Reduce cognitive load.

---

# 14 — PROOF-OF-WORK UX

Make GitHub and LinkedIn proof extremely clear.

The student should understand:

**What do I need to provide?**

**Have I provided it?**

**Am I ready to submit?**

Use clear status indicators.

Do not pretend to make real external API submissions.

The experience is frontend-driven and should behave consistently without external service credentials.

---

# 15 — THOUGHTFUL EXPERIENCE IMPROVEMENT

The product must contain at least one genuinely thoughtful UX improvement.

Implement it naturally inside the required screens.

Use a polished:

## PROOF-OF-WORK READINESS CHECK

Before submission, clearly communicate:

- GitHub proof — complete/incomplete
- LinkedIn proof — complete/incomplete
- Submission readiness — ready/incomplete

This should reduce uncertainty and prevent incomplete submissions.

After successful submission, show a clear completion state:

**Day 12 Complete**

**Proof submitted**

**Streak maintained**

Keep this mature and product-focused.

Do not add unnecessary gamification.

---

# 16 — REQUIRED EDGE STATES

The interface must support these realistic states.

## FIRST DAY

The student has:

**0 streak**

Make this feel like the beginning of the journey.

---

## MISSED DAY

Show that a day was missed.

Communicate the state clearly without shaming the student.

Help them understand the current situation and continue.

---

## EMPTY PROFILE

If profile information is unavailable:

- Maintain the layout
- Show a deliberate empty state
- Do not show broken content
- Do not leave unexplained blank areas

---

# 17 — DATA ARCHITECTURE

Use centralized local application data.

Prefer something similar to:

`src/data/mockData.json`

or an equivalent clean structure.

Keep data separate from presentation where practical.

The project should be easy to modify.

Do not scatter random hardcoded values throughout components.

---

# 18 — COMPONENT ARCHITECTURE

Create reusable components where repetition genuinely exists.

Maintain a clean structure.

Examples may include:

- Navigation
- Button
- Card
- Progress indicator
- Streak component
- Task card
- Proof field
- Status indicator

Do not over-componentize simple content.

Do not over-engineer.

---

# 19 — RESPONSIVE DESIGN

Support:

- 320px
- 360px
- 375px
- 390px
- 414px
- Tablet
- Desktop
- Large desktop

But optimize the 390px experience first.

Test:

- Text wrapping
- Long URLs
- Form fields
- Buttons
- Navigation
- Cards
- Progress indicators
- Spacing
- Touch targets

No horizontal overflow anywhere.

---

# 20 — ACCESSIBILITY

Use semantic HTML.

Implement:

- Proper heading hierarchy
- Accessible labels
- Keyboard navigation
- Visible focus states
- Proper buttons and links
- Meaningful alt text
- Accessible status messages
- Sufficient contrast
- Reduced-motion support

Do not use color alone to communicate status.

Do not use clickable `div` elements where semantic controls are appropriate.

---

# 21 — SEO

Implement complete basic SEO.

Include:

- Unique title
- Meta description
- Correct H1
- Logical H2/H3 hierarchy
- Semantic HTML
- Natural keyword-focused content
- Appropriate canonical metadata
- Meaningful alt text

Do not keyword stuff.

Do not sacrifice usability for SEO.

---

# 22 — STRUCTURED DATA

Do not use `LocalBusiness` schema.

AB Talks is not a local business.

Use only technically appropriate structured data when useful, such as:

- Organization
- WebSite
- WebApplication / SoftwareApplication

Only use properties supported by actual information.

Never fabricate structured-data facts.

---

# 23 — SOCIAL SHARING

Implement professional:

- Open Graph metadata
- Twitter/X Card metadata

Ensure the landing page has a valid social preview.

---

# 24 — TECHNICAL SEO FILES

Generate:

`robots.txt`

`sitemap.xml`

Only include appropriate routes.

---

# 25 — FAVICON

Do not use the default Vite/React favicon.

Create an AB Talks-aligned favicon.

---

# 26 — PERFORMANCE

The product must be lightweight and fast.

Optimize:

- Images
- JavaScript
- CSS
- Fonts
- Assets

Use modern image formats where appropriate.

Lazy-load non-critical images.

Avoid unnecessary libraries.

Avoid heavy animation systems.

Avoid unnecessary 3D.

Avoid large assets.

Avoid duplicate code.

Respect:

`prefers-reduced-motion`

---

# 27 — TECHNOLOGY

Use:

**React + Vite + React Router**

Use a clean lightweight styling architecture.

No backend.

No database.

No authentication.

No unnecessary frameworks or infrastructure.

---

# 28 — VERCEL DEPLOYMENT

The project will be deployed on Vercel.

These URLs must work directly:

`/`

`/dashboard`

`/day/12`

Direct browser navigation must work.

Hard refresh must work.

React Router must work.

Configure Vercel SPA fallback/rewrite correctly.

A refresh of:

`/dashboard`

must NOT return 404.

A refresh of:

`/day/12`

must NOT return 404.

---

# 29 — REQUIRED ROUTING TESTS

Actually test:

1. `/`
2. `/dashboard`
3. `/day/12`

Then:

4. Navigate between all routes.
5. Hard refresh `/dashboard`.
6. Hard refresh `/day/12`.
7. Inspect browser console.
8. Run production build.
9. Verify production build.
10. Verify Vercel-compatible routing.

If anything fails, fix it before completion.

---

# 30 — 390PX VISUAL INSPECTION

After implementation, inspect the actual application at exactly:

**390px width**

Do not rely only on code inspection.

### LANDING

Check:

- First impression
- Hero
- Brand identity
- Challenge explanation
- CTA
- Typography
- Spacing
- Above-the-fold composition
- No overflow

### DASHBOARD

Check:

- Today's task
- Streak
- Challenge progress
- Completion
- Achievements/standing
- Hierarchy
- Scanability
- Touch usability

### DAY 12

Check:

- Day number
- Task
- Build requirements
- GitHub proof
- LinkedIn proof
- Submit action
- Completion state
- Long URL behavior
- Form usability

Fix anything that looks weak.

---

# 31 — VISUAL QUALITY REVIEW

Review the actual result as a world-class designer.

Ask:

- Does this feel intentional?
- Does it feel premium?
- Does it feel like one coherent product?
- Is the hierarchy obvious?
- Is anything unnecessary?
- Does the first screen make sense immediately?
- Is the dashboard too dense?
- Is Day 12 too complicated?
- Is the 3D distracting?
- Are animations helping?
- Does the mobile version look designed rather than compressed?
- Would a student actually enjoy using this?

If the answer to any important question is no:

**Fix the design.**

---

# 32 — PRODUCT QUALITY REVIEW

Review as the student.

A first-time user must be able to understand the experience without explanation.

The product should naturally communicate:

**Discover → Understand → Start → Continue → Submit → Complete**

Do not require the user to figure out the interface.

---

# 33 — FINAL TECHNICAL QA

Before completion, verify:

- No console errors
- No broken links
- No broken images
- No missing assets
- No horizontal overflow
- No text clipping
- No broken buttons
- No broken interactions
- No accessibility issues
- No routing 404s
- No refresh 404s
- Production build succeeds
- Vercel routing is configured
- SEO metadata exists
- robots.txt exists
- sitemap.xml exists
- favicon exists

---

# 34 — FINAL REQUIREMENT AUDIT

Compare the finished application against every requirement in this document.

If something is missing:

**Implement it.**

If something unnecessary was added:

**Remove it.**

If something looks unfinished:

**Finish it.**

If something looks generic:

**Improve it.**

If something hurts performance:

**Optimize or remove it.**

Do not leave known problems unresolved.

---

# 35 — FINAL QUALITY BAR

The finished product must NOT feel like:

- An AI-generated template
- A random collection of cards
- A desktop site squeezed into mobile
- A generic student dashboard
- An over-designed 3D experiment
- An unfinished prototype
- A collection of placeholder content

It should feel like:

**A carefully designed, launch-quality student product centered around the discipline of building every day for 60 days.**

The experience should make the student think:

**“I understand this.”**

Then:

**“I know what I need to do.”**

Then:

**“I want to keep my streak.”**

---

# 36 — MANDATORY BUILD WORKFLOW

Follow this sequence.

### PHASE 1 — UNDERSTAND

Read every requirement.

Separate mandatory requirements from out-of-scope items.

### PHASE 2 — PLAN

Plan:

- Information architecture
- UX hierarchy
- Visual system
- Components
- Mock data
- Routing
- Responsive behavior
- Accessibility
- SEO
- Performance

### PHASE 3 — DESIGN

Design the three required experiences with 390px as the primary viewport.

### PHASE 4 — BUILD

Implement the complete React/Vite application.

### PHASE 5 — RUN

Run the application locally.

### PHASE 6 — TEST

Test all interactions and routes.

### PHASE 7 — INSPECT

Inspect the real UI at 390px.

### PHASE 8 — CRITIQUE

Find visual, UX, accessibility, performance and technical weaknesses.

### PHASE 9 — FIX

Fix every reasonable issue found.

### PHASE 10 — RE-TEST

Run the complete test process again.

### PHASE 11 — PRODUCTION BUILD

Build and verify the production version.

### PHASE 12 — FINAL AUDIT

Confirm every requirement is satisfied.

Only after all of these steps are complete may the project be considered finished.

---

# 37 — FINAL ROUTE MAP

At the very end, provide the route map exactly in this order:

/
 /dashboard
/day/12

Do not add any other route.

---

# FINAL COMMAND

Do not rush.

Do not settle for the first acceptable design.

Do not add unnecessary features.

Do not leave unfinished content.

Do not use fake claims.

Do not optimize for code quantity.

Optimize for the quality of the actual student experience.

The final result must be:

**Mobile-first.  
Visually exceptional.  
Clear.  
Motivating.  
Fast.  
Accessible.  
Responsive.  
Technically reliable.  
Vercel-ready.  
Faithful to every requirement.**

Most importantly:

**Make the three required screens exceptionally good at 390px.**

Build it.

Run it.

Inspect it.

Critique it.

Fix it.

Test it again.

Only then finish.

# END OF MASTER BUILD INSTRUCTION

The final prompt should clearly tell Google Antigravity to build, test, review and verify the project before considering it complete.

Do not add anything outside the challenge scope unless it is necessary for a better user experience.
