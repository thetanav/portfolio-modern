# UI Guidelines

A quick reference for sustaining the minimal, gradient-driven aesthetic across existing and future pages.

## Design Principles

- **Sleek minimalism:** Favour clean layouts, lots of negative space, and a limited set of components. Every new section should feel airy—start with vertical stacks and generous padding.
- **Gradient atmosphere:** The root background uses multi-stop gradients with blurred radial glows. New pages should avoid solid fills; instead, rely on translucent surfaces over the global gradient.
- **Glass surfaces:** Cards, nav bars, and modals use semi-transparent backgrounds with subtle borders (`var(--surface)` / `var(--surface-soft)` and `var(--border)`) plus soft shadows and backdrop blur for depth.
- **Accent restraint:** The accent colour derives from `--accent-rgb`. Use it sparingly for hovers, focus states, and pills rather than large fills.

## Typography

- **Headings:** `Instrument Serif` at heavy weights for page titles. Keep tracking tight (`tracking-tight`) and line-height close to `1.05`–`1.1` for the hero moments.
- **Body:** `Plus Jakarta Sans` (loaded via `layout.tsx`) is the base sans. Maintain `text-[color:var(--text-muted)]` for secondary copy to keep contrast soft.
- **Uppercase meta text:** Tags, link labels, and buttons use uppercase text with increased letter spacing (`tracking-[0.3em]` to `0.35em`).

## Color & Tokens

The theme toggles through CSS custom properties defined in `app/global.css`:

| Token                          | Light                                                  | Dark                                                   | Usage                                |
| ------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------ |
| `--bg-gradient`                | `linear-gradient(135deg, #f6f7fb → #eef1ff → #ffffff)` | `linear-gradient(150deg, #020617 → #0b1120 → #131c2b)` | Body background.                     |
| `--surface` / `--surface-soft` | Translucent white                                      | Translucent slate                                      | Card and navbar backgrounds.         |
| `--border`                     | `rgba(15,23,42,0.08)`                                  | `rgba(148,163,184,0.18)`                               | Subtle outlines for all components.  |
| `--text`                       | `#0f172a`                                              | `#e2e8f0`                                              | Primary text colour.                 |
| `--text-muted`                 | `#475569`                                              | `#94a3b8`                                              | Secondary text.                      |
| `--chip-bg`, `--chip-border`   | Soft translucent surfaces                              | Dark glass                                             | Icon chips and pills.                |
| `--accent-rgb`                 | `93,106,255`                                           | `129,140,248`                                          | Hover accents, gradients, and icons. |
| `--accent-soft`                | `rgba(accent, 0.12–0.14)`                              | Same tone                                              | Overlay tints inside cards.          |

## Components & Patterns

- **Surface Card:** Rounded-3xl container, border (`var(--border)`), `bg-[color:var(--surface)]`, `backdrop-blur-xl`, and long-shadow `shadow-[0_20px_80px_-70px_rgba(15,23,42,0.85)]`. Include a subtle radial overlay for depth.
- **Pill Header / Tag:** `inline-flex`, rounded-full, uppercase letters, `bg-[color:var(--surface-soft)]`, with icon support (e.g., sparkles icon). These lead most sections.
- **Navigation:** Glass pill bar with individual uppercase links (`tracking-[0.2em]`). Hover states use `hover:bg-[rgba(var(--accent-rgb),0.12)]` and accent text.
- **CTA / Buttons:** Rounded-full, bordered pills. Use uppercase meta styling and keep height at 44–48px (`h-10` or `h-11`).
- **Icon Chips:** Rounded-full, bordered with `var(--chip-border)` and default muted text. On hover, shift to accent tint.
- **Animation:** Entrance animations use `.animate-entry` (`animate-in`, `slide-in-from-bottom-3`, `fade-in-5`, `duration-300`). Keep interactions subtle (translations of `-translate-y-1`, soft shadows).

## Layout

- **Shell:** `layout.tsx` wraps content in a central glass card. Maintain the `max-w-4xl` container with generous padding (`px-4 py-8` on mobile → `px-6 py-12` desktop).
- **Spacing:** Use `gap-6` to `gap-12` for major section spacing. Inside cards, `gap-4` (16px) keeps things tight yet breathable.
- **Grid Usage:** For sections like stacks or focus areas, default to single column on mobile with `md:grid-cols-2/3` at 768px+.

## Content Treatments

- **Blog Cards:** Wrap each entry in a surface card with meta row (date + call to action), main title, and accent dot on hover.
- **Projects:** Use the shared `ProjectCard` style with image chips and uppercase meta row (“visit”). Keep copy succinct (`text-sm`).
- **Markdown (Posts):** `prose` class customised for neutral text and accent-coloured code/links. Keep blockquotes and inline code aligned with accent colour.
- **Error / 404:** Cards mirror hero styling with supportive copy and pill buttons for actions.

## Interaction Patterns

- **Hover states:** Combine micro-translation (`hover:-translate-y-1`) with enhanced shadow and accent border. Avoid harsh colour shifts.
- **Theme toggle:** Circular pill with border and accent hover. Icons swap between sun/moon; this component sets the tone for other controls.
- **Share button:** Uses the pill CTA style. When adding new utility buttons, match its sizing and casing.

## Implementation Notes

- Extract shared styles via tailwind classes referencing the CSS variables. Avoid hardcoding colours; rely on `text-[color:var(--text)]`, etc.
- For new surfaces or overlays, reuse the radial-gradient pattern seen in `app/page.tsx` (`radial-gradient(circle at…)`). Tweak opacity rather than adding extra colours.
- Keep new SVG/icon additions within the existing icon sets (`react-icons` or Radix) to maintain consistency.
- Ensure dark mode legibility by testing against both light and dark variable sets.
- The `--font-sans` CSS variable is globally available; prefer it for any custom components needing explicit font stacks.

Following these guidelines will keep future pages aligned with the portfolio’s current minimal, modern, and gradient-rich direction.
