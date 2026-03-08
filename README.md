# Aqua Web Assets

Reusable web assets and component styles inspired by classic macOS Aqua, adjusted to follow the Leopard-era Human Interface Guidelines for window structure, spacing, control hierarchy, and chrome treatment.

## Package Usage

This repo is now set up as a reusable package so you can install it directly into other projects.

### Install from this repo locally

```bash
npm install /absolute/path/to/Aqua-Again
```

### Or build and pack it first

```bash
npm install
npm run build
npm pack
```

Then install the generated tarball in another project.

### Publish

The package metadata is ready for npm publishing:

```bash
npm publish --access public
```

There is also a convenience script:

```bash
npm run publish:npm
```

For GitHub Packages, note that GitHub requires a scoped package name such as `@1991acuralegend/aqua-web-assets`. The current package is ready for npm as-is; if you want to publish to GitHub Packages too, rename the package to a scoped name first and then publish against the GitHub Packages registry.

### Import in a React app

```tsx
import "aqua-web-assets/styles.css";
import { AquaButton, AquaWindow, AquaSegmentedControl } from "aqua-web-assets";
import { AquaDashboardExample } from "aqua-web-assets/dashboard-example";
```

### Import individual assets

```ts
import frameUrl from "aqua-web-assets/svg/window-frame.svg";
import sourceListSelectionUrl from "aqua-web-assets/png/source-list-selection.png";
```

Package exports include:

- `aqua-web-assets`: React primitives from `react/aqua-ui.tsx`
- `aqua-web-assets/dashboard-example`: composed dashboard example
- `aqua-web-assets/styles.css`: shared stylesheet
- `aqua-web-assets/svg/*`: vector assets
- `aqua-web-assets/png/*`: raster assets

## Sample Pages

The repo includes two full-page examples that use the shared Aqua asset system.

| Showcase | Dashboard |
| --- | --- |
| ![Showcase page screenshot](https://raw.githubusercontent.com/1991AcuraLegend/Aqua-Again/main/png/showcase.png) | ![Dashboard page screenshot](https://raw.githubusercontent.com/1991AcuraLegend/Aqua-Again/main/png/dashboard.png) |
| `html/showcase.html` is a component gallery and visual reference page. | `html/dashboard.html` is a fuller composition that demonstrates windows, sidebars, sheets, drawers, and data-heavy layouts. |

## Included Files

- `css/aqua-theme.css`: design tokens and shared CSS classes for Aqua chrome, layout, and controls.
- `html/showcase.html`: browser-ready gallery page using the asset system.
- `html/dashboard.html`: larger dashboard/reference composition.
- `react/aqua-ui.tsx`: React component primitives built on the shared CSS.
- `react/dashboard-example.tsx`: composed React example using the primitives.
- `examples/next-page-example.tsx`: App Router-ready Next.js page example.
- `svg/`: vector source assets for individual elements and controls.
- `png/`: raster previews and screenshots for documentation and quick placement.

## Elements And Controls

### Window Chrome And Structural Surfaces

These assets cover the frame, titlebar treatment, utility surfaces, and attached window furniture used throughout the sample pages.

| Element | Preview | Purpose |
| --- | --- | --- |
| Window frame | ![Window frame](png/window-frame.png) | Unified Aqua window chrome with traffic lights and toolbar banding. |
| Traffic lights | ![Traffic lights](png/traffic-lights.png) | Standalone close, minimize, and zoom controls. |
| Pinstripe tile | ![Pinstripe tile](png/pinstripe-tile.png) | Repeating chrome texture for toolbars and frame surfaces. |
| Glass panel | ![Glass panel](png/glass-panel.png) | Soft support surface for cards, panels, and utility areas. |
| Window sheet | ![Window sheet](png/window-sheet.png) | Attached sheet treatment for titlebar-anchored modal actions. |
| Drawer panel | ![Drawer panel](png/drawer-panel.png) | Utility drawer surface for secondary controls and inspectors. |
| Progress dialog | ![Progress dialog](png/progress-dialog.png) | Floating utility dialog for copy, import, and sync states. |

### Buttons, Tabs, And Selection Controls

These assets cover the primary action language used in the examples, from push buttons to segmented controls and scoped selections.

| Control | Preview | Purpose |
| --- | --- | --- |
| Blue action button | ![Blue button](png/button-pill-blue.png) | Primary action button with Aqua highlight treatment. |
| Silver action button | ![Silver button](png/button-pill-gray.png) | Secondary or neutral action button. |
| Segmented control | ![Segmented control](png/segmented-control.png) | Toolbar and view-mode switching control. |
| Tabs bar | ![Tabs bar](png/tabs-bar.png) | Classic tab strip for tabbed window sections. |
| Pill tabs | ![Pill tabs](png/pill-tabs.png) | Scoped filtering or utility-mode switching treatment. |
| Checkbox | ![Checkbox](png/checkbox-selected.png) | Multi-select setting control. |
| Radio button | ![Radio button](png/radio-selected.png) | Single-choice selection control. |
| Source-list selection | ![Source list selection](png/source-list-selection.png) | Active row treatment for primary blue navigation sidebars. |

### Input, Feedback, And Scrolling Controls

These assets cover fields, meters, loading states, and scrolling furniture used by the dashboard and component gallery.

| Control | Preview | Purpose |
| --- | --- | --- |
| Combobox | ![Combobox](png/combobox-pill.png) | Aqua-styled selection field. |
| Slider | ![Slider](png/slider-control.png) | Value adjustment control with Aqua thumb and track. |
| Spinner | ![Spinner](png/spinner-gel.png) | Indeterminate loading spinner. |
| Indeterminate progress | ![Indeterminate progress](png/indeterminate-progress.png) | Barber-pole progress indicator for utility workflows. |
| Scrollbar thumb | ![Scrollbar thumb](png/scrollbar-thumb.png) | Scrollbar furniture for list and document views. |

## What The CSS And React Layers Include

The CSS and React primitives cover more than the raw PNG and SVG exports. The shared system includes:

- Unified window shells with titlebars, toolbars, content areas, and support surfaces.
- Toolbar buttons, segmented controls, tab treatments, and button variants.
- Source lists, list rows, cards, stat panels, notes, and table styling.
- Text fields, search fields, comboboxes, checkboxes, radios, sliders, and progress states.
- Attached sheets, utility drawers, progress dialogs, spinners, and scrollbar furniture.
- Layout utilities for stacks, inline rows, toolbar alignment, and consistent Aqua spacing.

## Usage

1. Run `npm install` in this repo if you want to build or pack the package locally.
2. Run `npm run build` to generate `dist/` output.
3. Open `html/showcase.html` in a browser for the gallery page.
4. Open `html/dashboard.html` for the fuller reference composition.
5. Import `aqua-web-assets/styles.css` and the exported React primitives in your consuming project.
6. Use the SVG and PNG package subpath exports when you want the raw assets directly.

## Notes

- The current pass is aimed at Leopard-era Aqua hierarchy rather than older brushed-metal variants.
- The design system emphasizes unified silver chrome, white content areas, blue source-list selections, and restrained Aqua gloss.
- The package build outputs ESM modules and declaration files into `dist/`.
- The CSS is self-contained and has no framework dependency.
- The React files assume TypeScript and the modern JSX runtime, but do not depend on any component library.
- Import `aqua-web-assets/styles.css` globally from your app shell or layout when using the React and Next examples.