# Design Guidelines: EduCenter Diabetes Website

## Design Approach

**Selected Approach:** Hybrid Design System + Healthcare Best Practices

Drawing inspiration from trusted healthcare platforms (Mayo Clinic, WebMD) combined with modern educational interfaces (Coursera, Khan Academy). Emphasizes clarity, accessibility, and gentle engagement over aggressive visual design. The goal is building trust while maintaining approachability for health-anxious users.

**Core Principles:**
- Calm, reassuring aesthetics that reduce health anxiety
- Clear information hierarchy for easy scanning
- Gentle animations that guide attention without distraction
- Warm, human-centered approach to medical content

## Typography

**Font Families:**
- Primary: Inter (headings, UI elements) - clean, highly legible sans-serif
- Secondary: Source Sans Pro (body text, long-form content) - excellent readability for educational content

**Hierarchy:**
- Hero Title: text-5xl to text-6xl, font-bold, leading-tight
- Section Headers: text-3xl to text-4xl, font-semibold
- Subsection Headers: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Captions/Labels: text-sm, font-medium
- Button Text: text-base, font-semibold

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 (mobile), p-8 (tablet), p-12 (desktop)
- Section vertical spacing: py-16 to py-24
- Element gaps: gap-6 to gap-8
- Card spacing: p-6 to p-8

**Grid Structure:**
- Container: max-w-7xl mx-auto px-4 to px-6
- Content sections: max-w-4xl for readability
- Multi-column grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
Sticky header with smooth scroll behavior:
- Logo left, navigation center/right
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections with offset for fixed header
- Subtle shadow on scroll for depth

### Hero Section
Full-width, 70vh minimum height with soft gradient overlay:
- Large hero image showing diverse people in healthy lifestyle activities
- Centered headline + supporting text + dual CTAs
- Subtle floating animation on CTA buttons
- Scroll indicator at bottom

### Information Hub (EduCenter)
Multi-section accordion or tabbed interface:
- Icon-led section headers using Lucide React (Heart, Activity, AlertCircle, Shield, Info)
- Expandable/collapsible content panels
- Grid layout for sub-topics (2 columns desktop, 1 mobile)
- Highlight boxes for critical information (symptoms, warning signs)
- Progress indicator if implementing scroll-through journey

### Quiz Interface
Interactive card-based design:
- Question card: Elevated, rounded corners, generous padding
- Multiple choice: Large touch-friendly radio buttons with hover states
- Progress bar at top showing quiz completion
- Instant feedback: Green checkmark for correct, gentle red for incorrect
- Score card: Celebratory design with performance gauge, share buttons
- Retry button with encouraging messaging

### Meal Planning Section
Visual-first approach with 2-column grid (image + content):
- Meal category cards (Breakfast, Lunch, Snacks, Dinner)
- Large meal images (400x300px placeholders) with subtle zoom on hover
- Ingredient lists with checkmark icons
- Nutritional highlights in badge format
- "Pro Tip" callouts with lightbulb icon

### Contact/Consultation Section
Two-column layout (desktop) / stacked (mobile):
- Left: Contact methods with large, friendly icons (Phone, Mail, MessageCircle)
- Right: Quick consultation form or direct action buttons
- WhatsApp button: Gradient green with phone icon
- Email button: Professional blue with mail icon
- Hover states: Gentle lift (translateY) with shadow increase

## Animations

**Entrance Animations (Subtle, Professional):**
- Fade-in with slight slide-up (20px) on scroll: opacity-0 to opacity-100, translate-y-5 to translate-y-0
- Duration: 600ms with ease-out
- Stagger children by 100ms in lists/grids

**Interaction Animations:**
- Button hover: Scale 1.02, subtle shadow increase
- Card hover: Lift 4px (translateY), shadow-lg to shadow-xl
- Quiz selection: Smooth background transition, scale 1.01
- Accordion expand: Smooth height transition with rotate icon (180deg)

**Scroll-Triggered:**
- Progress bars: Animate from 0 to target width on viewport entry
- Number counters: Count-up animation for statistics
- Navigation: Background opacity on scroll past hero

## Images

**Hero Section:**
- Large, warm lifestyle image (1920x1080)
- Shows diverse individuals exercising, preparing healthy food, or family cooking together
- Soft gradient overlay (bottom to top) for text readability
- Optimistic, empowering tone

**Meal Planning Section:**
- 4 high-quality food photography images (800x600 each)
- Well-lit, appetizing presentations of healthy meals
- Natural lighting, clean backgrounds
- Each image shows plated meal matching menu description

**Information Hub:**
- Decorative spot illustrations for each diabetes type (simple, medical-style icons)
- Infographic-style visuals for risk factors and prevention tips
- Before/after comparison images for lifestyle changes (optional but impactful)

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px - Single column, stacked elements, larger touch targets (min 44px)
- Tablet: 768px - 1024px - Two columns where appropriate, moderate spacing
- Desktop: > 1024px - Full grid layouts, maximum information density

**Mobile Optimizations:**
- Navigation: Full-screen overlay menu
- Quiz: Full-width cards, larger radio buttons
- Meal cards: Full width with image above content
- Consultation buttons: Full-width, stacked vertically
- Text sizes: Slightly larger for readability (text-lg base)

## Accessibility Features

- ARIA labels on all interactive elements
- Focus indicators: 2px solid ring with appropriate offset
- Sufficient contrast ratios (WCAG AA minimum: 4.5:1 for text)
- Keyboard navigation support with visible focus states
- Alt text for all images describing content relevance
- Form labels always visible, never placeholder-only
- Skip navigation link for screen readers

## Special Considerations

**Healthcare Sensitivity:**
- Avoid alarming red tones for warnings; use amber/orange
- Use encouraging language in UI (e.g., "Let's learn together" vs "You must")
- Provide multiple contact options respecting user comfort
- Make quiz non-judgmental; focus on learning, not testing

**Trust Signals:**
- Clean, professional aesthetic throughout
- Consistent visual language
- Clear information sourcing (if applicable)
- Easy-to-find contact information
- Responsive, working interactions build confidence

This comprehensive design creates a welcoming, informative experience that respects users' health concerns while encouraging engagement and learning.