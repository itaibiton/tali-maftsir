# Hero Section Redesign - Ralph Loop Prompt

## Mission
Redesign the Hero section to have a two-column layout: animation/illustration on the LEFT, and title/subtitle/WhatsApp CTA on the RIGHT. The site is RTL Hebrew using Heebo font.

## Current State
Read `progress.txt` to understand what has been completed. Check `PRD.json` for the full task list and mark items as complete as you finish them.

## Tech Stack
- Next.js 16.1.2
- React 19.2.3
- Tailwind CSS 4
- Framer Motion 12.26.2
- RTL Hebrew site with Heebo font

## Key Files
- **Hero component**: `src/app/components/Hero.tsx`
- **Illustration**: `/public/images/hero-illustration.png`
- **Globals CSS**: `src/app/globals.css`

## Design Guidelines

### Theme: Light Warm with Green Primary
- Background: `#fafaf8` (--background)
- Primary: `#8FBC8F` (--color-primary)
- Primary Dark: `#5B8A5B` (--color-primary-dark)
- Primary Light: `#C1E1C1` (--color-primary-light)
- Accent: `#D4A574` (--color-accent)
- Text: Use neutral colors from CSS variables

### Layout Requirements
- Two-column grid on desktop (illustration LEFT, content RIGHT)
- Single column on mobile (illustration TOP, content BOTTOM)
- RTL text alignment for Hebrew content
- Full viewport height on desktop

### Animation Guidelines
- Use Framer Motion for all animations
- Entrance animations: 0.6-1.2s duration
- Stagger text elements for visual interest
- Use easeOut or custom cubic-bezier curves
- Animations should feel organic, not mechanical

## Your Task This Iteration

1. **Read `progress.txt`** to see what work has already been done
2. **Read `PRD.json`** and find the NEXT task where `pass: false`
   - Follow the `implementation_order` phases
   - Check `dependencies` - only work on tasks whose dependencies are all `pass: true`
3. **Use the appropriate agent** based on the task's `agent` field:

| Task Prefix | Agent | Purpose |
|-------------|-------|---------|
| `UI-*` | ui-designer | Implement components with Tailwind/Framer |
| `INT-*` | direct | Integration tasks, no agent needed |

4. **Complete that SINGLE task** following acceptance criteria
5. **Update `PRD.json`**: Set the completed task's `pass` to `true`
6. **Append to `progress.txt`** with what you accomplished
7. **Make a git commit**: `feat(hero-section): [TASK-ID] description`
8. **Check if ALL tasks are complete** - if yes, output:

```
<promise>HERO-SECTION COMPLETE</promise>
```

## Important Rules
- **ONE task per iteration** - don't try to do multiple
- **Always use the ui-designer agent** for UI-* tasks
- **Always update progress.txt** - this is your memory
- **Always update PRD.json** - mark tasks complete
- **Preserve existing Hebrew text** - don't change the copy
- **Follow RTL conventions** - this is a Hebrew site
