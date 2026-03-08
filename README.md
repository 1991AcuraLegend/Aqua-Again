# Aqua Web Assets

This folder contains a reusable set of web-oriented assets inspired by classic macOS Aqua UI references.

Contents:

- `css/aqua-theme.css`: design tokens and component classes for glossy Aqua surfaces
- `html/showcase.html`: browser-ready component gallery and composition reference
- `html/dashboard.html`: fuller landing/dashboard composition using the asset system
- `react/aqua-ui.tsx`: React/Next-friendly component primitives built on the shared CSS
- `react/dashboard-example.tsx`: composed dashboard example for a React app
- `examples/next-page-example.tsx`: App Router-ready page example for Next.js
- `svg/window-frame.svg`: Aqua-style window chrome with traffic lights and pinstripe toolbar
- `svg/button-pill-blue.svg`: blue gel button treatment
- `svg/button-pill-gray.svg`: neutral gel button treatment
- `svg/segmented-control.svg`: segmented control with active segment
- `svg/tabs-bar.svg`: classic rounded Aqua tab strip
- `svg/checkbox-selected.svg`: glossy selected checkbox treatment
- `svg/radio-selected.svg`: glossy selected radio treatment
- `svg/combobox-pill.svg`: rounded Aqua combo box chrome
- `svg/slider-control.svg`: Aqua slider track and thumb
- `svg/spinner-gel.svg`: glossy loading spinner ring
- `svg/indeterminate-progress.svg`: barber-pole progress bar treatment
- `svg/source-list-selection.svg`: selected source-list row treatment
- `svg/scrollbar-thumb.svg`: silver Aqua scrollbar thumb
- `svg/window-sheet.svg`: attached Aqua sheet window treatment
- `svg/drawer-panel.svg`: brushed-metal style side drawer treatment
- `svg/pill-tabs.svg`: glossy pill-style preference tabs
- `svg/progress-dialog.svg`: classic Aqua progress dialog composition
- `svg/traffic-lights.svg`: standalone window controls
- `svg/pinstripe-tile.svg`: seamless toolbar background tile
- `svg/glass-panel.svg`: translucent striped panel asset
- `png/`: raster exports for quick placement and previews

Usage:

1. Open `html/showcase.html` in a browser.
2. Open `html/dashboard.html` for a fuller website reference.
3. Copy classes from `css/aqua-theme.css` into your project or link the stylesheet directly.
4. Import `react/aqua-ui.tsx` and `react/dashboard-example.tsx` in React or Next.js projects.
5. Use the SVGs as-is or inline them for easier recoloring.

Notes:

- The look intentionally favors early-2000s Aqua: pinstripes, pronounced gloss, cool blue accents, and rounded capsules.
- The fidelity pass now leans harder into Panther-era Aqua: smaller window titles, stronger silver titlebar cuts, source-list blue selections, and barber-pole progress.
- The extended control set now includes attached sheets, drawers, pill tabs, and utility progress dialogs.
- The CSS is self-contained and does not depend on a framework.
- The React files assume modern JSX runtime and TypeScript, but they do not depend on any styling library.
- Import `css/aqua-theme.css` globally from your app shell or layout when using the React and Next examples.