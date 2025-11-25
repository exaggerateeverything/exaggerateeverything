## Fonts

The entire app must treat typography as fluid, swappable, and experiment-friendly. Fonts are a core part of the creative identity of this product, and the system should make it effortless to try new typefaces, toggle styles, and test layouts.

### Core Principles
- Typography should never be rigid. Nothing should be hard-coded beyond clean defaults.  
- Designers and developers should be able to test font changes globally or per component with minimal friction.  
- Typography should stay aligned with the minimal, calm, negative-space-first visual philosophy.  
- Users should be able to bring their own fonts without breaking layout or spacing logic.

### System Requirements
- First-class support for **Google Fonts**, loaded centrally.  
- Support for hot-swapping fonts across components during development.  
- Support for **custom user-uploaded fonts** (TTF/OTF/WOFF/WOFF2).  
- Tailwind’s `fontFamily` config should expose a clean, minimal default set and allow dynamic overrides.  
- Font tokens should integrate cleanly with responsive and accessibility-minded typography.

### Developer Experience
- One single source of truth for fonts.  
- No duplication of imports or font-face declarations.  
- Simple utilities for applying alternate fonts to components.  
- AI should understand available font tokens and always reference them over hardcoding.
