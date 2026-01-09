# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a charity website for Ukraine built with Create React App. It's a single-page application that uses lazy loading for performance optimization and includes donation integration via PayPal and a contact form via EmailJS.

## Development Commands

### Start Development Server
```bash
npm start
```
Runs the app in development mode at http://localhost:3000 with hot reload.

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `build/` directory.

### Run Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

## Architecture

### Component Structure
The project follows a clear separation between **blocks** (page sections) and **components** (reusable UI elements):

- **`src/blocks/`**: Large page sections that compose the single-page layout:
  - `header.jsx` - Sticky navigation header with smooth scroll links
  - `banner.jsx` - Hero section
  - `video.jsx` - Video content section
  - `war.jsx` - Information about the war in Ukraine
  - `approach.jsx` - Organization's approach
  - `help.jsx` - Ways to help
  - `why-us.jsx` - About the organization
  - `timing.jsx` - Timeline/timing information
  - `donation.jsx` - Donation section with PayPal integration
  - `contact.jsx` - Contact form with EmailJS integration
  - `footer.jsx` - Site footer
  - Each block exports from `blocks/index.js` for cleaner imports

- **`src/components/`**: Reusable UI components:
  - `button.jsx` - Configurable button with normal/outlined variants
  - `container.jsx` - Layout wrapper component
  - `paypal.jsx` - PayPal donation widget
  - `iframe.jsx` - Iframe wrapper component

### Styling Approach
- Uses **styled-components** for component styling
- Each block/component has a corresponding `.styled.js` file (e.g., `header.styled.js`)
- Global colors defined in `src/assets/styles/colors.js` with Ukrainian flag colors (blue: #015BBB, yellow: #FED500)

### App Entry Point
- `src/index.js` - React entry point with `react-normalize` for CSS reset
- `src/app.jsx` - Main app component that lazy loads all blocks (except Header/Footer) for performance

### External Integrations
- **EmailJS**: Contact form in `contact.jsx` uses hardcoded service/template IDs
- **PayPal**: Donation widget in `paypal.jsx` component

### Assets
- `src/assets/img/` - Image assets including logos and graphics
- `src/assets/styles/` - Shared style constants (colors)

## Key Patterns

### Lazy Loading
All main blocks (except Header and Footer) are lazy loaded using React's `lazy()` and `Suspense` to improve initial page load performance.

### Smooth Scrolling Navigation
The header uses `react-scroll` for smooth scrolling between sections, with offset calculations to account for the sticky header height (-86px).

### State Management
No global state management - uses React hooks (useState) for local component state.

## Development Notes

- The project uses React 17 (not 18)
- ESLint config extends `react-app` and `react-app/jest`
- Images use `react-lazy-load-image-component` with blur effect for progressive loading
- The header switches logo colors (white to blue) when sticky mode activates
