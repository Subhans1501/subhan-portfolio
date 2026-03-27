# AI Engineer Portfolio

A cutting-edge, futuristic portfolio showcasing AI/ML engineering projects with an immersive tech-dashboard aesthetic. Built with React, Three.js, and modern web technologies.

![Portfolio Preview](Picture.png)

## Features

### Immersive Visual Experience
- **3D Background**: Auto-rotating particle system built with Three.js and react-three-fiber
- **HUD Frame**: Sci-fi inspired interface overlay with corner brackets and grid overlays
- **Glassmorphism Design**: Modern glass-panel aesthetics with backdrop blur effects
- **Smooth Animations**: Powered by Framer Motion for fluid transitions

### Live Dashboard Components
- **System Metrics**: Real-time simulated CPU, GPU, and Tensor Core usage with animated progress bars
- **Terminal Log**: Scrolling terminal interface that simulates AI system initialization
- **Live Activity Graph**: Decorative data visualization component
- **System Allocation**: Visual system resource indicators

### Project Sections
- **Work**: Showcase your AI/ML projects with detailed project cards
- **Systems**: Display your technical infrastructure and system architecture
- **Deep Reach**: Professional contact modal for networking (Gmail, LinkedIn, etc.)

### Responsive Design
- Mobile-first approach with optimized layouts for all screen sizes
- Collapsible sidebar for smaller viewports
- Touch-friendly navigation

## Tech Stack

### Core
- **React 19** - Modern UI library
- **Vite** - Lightning-fast build tool and dev server
- **React Router DOM** - Client-side routing

### 3D Graphics
- **Three.js** - WebGL 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **maath** - Math utilities for 3D graphics

### Animation & Styling
- **Framer Motion** - Production-ready animation library
- **CSS Variables** - Custom theming system
- **Glassmorphism** - Modern UI design patterns

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Protfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173/
   ```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
Protfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Background3D.jsx      # Three.js particle background
│   │   ├── HudFrame.jsx          # Sci-fi interface overlay
│   │   ├── NavBar.jsx            # Navigation bar
│   │   ├── Metrics.jsx           # System metrics display
│   │   ├── Terminal.jsx          # Terminal log component
│   │   ├── LiveGraph.jsx         # Live activity visualization
│   │   ├── ProjectCard.jsx       # Project display card
│   │   ├── DeepReachModal.jsx    # Contact modal
│   │   └── TopologyGraph.jsx     # Network topology visualization
│   │
│   ├── pages/               # Route pages
│   │   ├── Work.jsx             # Projects showcase page
│   │   └── Systems.jsx          # Systems/infrastructure page
│   │
│   ├── App.jsx              # Main app component & routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & theme variables
│
├── public/                  # Static assets
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies & scripts
```

## Customization

### Color Theme
Edit the CSS variables in `src/index.css`:

```css
:root {
  --color-primary: #00f3ff;    /* Neon Cyan */
  --color-secondary: #ffd700;  /* Gold */
  --color-accent: #00ff9d;     /* Green */
  /* ... more variables */
}
```

### Projects
Add your projects in `src/pages/Work.jsx`:

```jsx
<ProjectCard
  title="Your_Project_Name"
  tech="Technology Stack"
  desc="Brief description"
  stats="Key metrics"
/>
```

### Terminal Messages
Customize terminal logs in `src/components/Terminal.jsx`:

```javascript
const logs = [
  "Your custom message here...",
  // Add more messages
];
```

### Contact Information
Update contact details in `src/components/DeepReachModal.jsx`

## Key Components Explained

### System Metrics
Simulates real-time system monitoring to create a "live development environment" feel. Updates every 2 seconds with randomized values for:
- CPU Usage (20-50%)
- GPU Load (40-80%)
- Tensor Cores (55-65%)

### Terminal Log
Displays scrolling terminal-style logs that cycle through predefined messages every 800ms, creating the impression of an AI system booting up and loading projects.

### 3D Background
Auto-rotating particle system that responds subtly to user interaction, creating depth and movement in the interface.

## Building for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Contributing

Feel free to fork this repository and customize it for your own portfolio!

Install dependencies

Bash
npm install
Start development server

Bash
npm run dev
Open in browser

Plaintext
Navigate to http://localhost:5173/
Available Scripts
npm run dev - Start development server with hot reload

npm run build - Build for production

npm run preview - Preview production build locally

npm run lint - Run ESLint for code quality

Project Structure
Plaintext
Protfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Background3D.jsx      # Three.js particle background
│   │   ├── HudFrame.jsx          # Sci-fi interface overlay
│   │   ├── NavBar.jsx            # Navigation bar
│   │   ├── Metrics.jsx           # System metrics display
│   │   ├── Terminal.jsx          # Terminal log component
│   │   ├── LiveGraph.jsx         # Live activity visualization
│   │   ├── ProjectCard.jsx       # Project display card
│   │   ├── DeepReachModal.jsx    # Contact modal
│   │   └── TopologyGraph.jsx     # Network topology visualization
│   │
│   ├── pages/               # Route pages
│   │   ├── Work.jsx             # Projects showcase page
│   │   └── Systems.jsx          # Systems/infrastructure page
│   │
│   ├── App.jsx              # Main app component & routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & theme variables
│
├── public/                  # Static assets
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies & scripts
Customization
Color Theme
Edit the CSS variables in src/index.css:

CSS
:root {
  --color-primary: #00f3ff;    /* Neon Cyan */
  --color-secondary: #ffd700;  /* Gold */
  --color-accent: #00ff9d;     /* Green */
  /* ... more variables */
}
Projects
Add your projects in src/pages/Work.jsx:

JavaScript
<ProjectCard
  title="Agentic Dialogue System"
  tech="LLMs, Tool Calling, Memory"
  desc="An advanced AI agent capable of utilizing external tools and memory for context-aware interactions."
  stats="Final Year Project"
/>
Terminal Messages
Customize terminal logs in src/components/Terminal.jsx:

JavaScript
const logs = [
  "Initializing Agentic Framework...",
  "Loading DistilBERT weights...",
  "System ready."
];
Contact Information
Update contact details in src/components/DeepReachModal.jsx

Key Components Explained
System Metrics
Simulates real-time system monitoring to create a "live development environment" feel. Updates every 2 seconds with randomized values for:

CPU Usage (20-50%)

GPU Load (40-80%)

Tensor Cores (55-65%)

Terminal Log
Displays scrolling terminal-style logs that cycle through predefined messages every 800ms, creating the impression of an AI system booting up and loading projects.

3D Background
Auto-rotating particle system that responds subtly to user interaction, creating depth and movement in the interface.

Building for Production
Bash
npm run build
The optimized production build will be in the dist/ directory, ready for deployment to Vercel.

Contributing
Feel free to fork this repository and customize it for your own portfolio!

License
This project is open source and available under the MIT License.

Contact
Update your contact information in the Deep Reach modal to connect with visitors!

## Contact

Update your contact information in the Deep Reach modal to connect with visitors!

---

**Built with using React, Three.js, and modern web technologies**
