# Code Standards

This project is built with Next.js 14, TypeScript, and Tailwind CSS. The following conventions keep the codebase consistent and accessible.

## TypeScript and React
- Prefer typed, functional components. Use `React.FC` sparingly; type props with explicit interfaces or type aliases.
- Keep components small and focused. Extract reusable UI into `/components`.
- Avoid default exports for components; named exports improve discoverability.
- Handle asynchronous operations with `async`/`await` and minimal side effects.
- Guard against undefined data before rendering; avoid optional chaining in JSX attributes when it may produce invalid values.

## Next.js routing and navigation
- Use `next/link` for internal navigation. Only use `a` tags for external URLs or protocols (`mailto:`, `tel:`) with appropriate `rel` attributes.
- Co-locate page-level styles in the relevant component when practical; prefer global styles only for primitives and design tokens.

## Styling with Tailwind CSS
- Use semantic HTML first, then apply Tailwind utility classes for layout and spacing.
- Favor composable utility classes over deep custom CSS when possible.
- Keep class order logical: layout → spacing → typography → color → state.
- Use responsive variants (`sm:`, `md:`, `lg:`) to ensure mobile-first design.
- Prefer `prose` typography styles for rich text content.

## Accessibility and content
- Provide descriptive text for buttons and links; avoid ambiguous labels like "Click here".
- Ensure focusable elements have visible focus states and adequate contrast.
- Use ARIA attributes sparingly and only when semantic HTML is insufficient.
- Keep user-facing copy concise and free of jargon; prefer sentence case for headings and buttons.

## Testing and quality
- Run `npm run lint` for code changes to catch common issues early.
- Add unit or integration coverage when adding complex behavior, and document manual testing steps for UI tweaks.

Following these standards helps maintain a predictable, high-quality experience for visitors and contributors.
