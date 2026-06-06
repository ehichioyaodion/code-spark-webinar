# ⚡ CODE SPARK — Modern App Build Matrix (Vite + ES6)

<p align="center">
  <img src="https://img.shields.io/badge/Bundler-Vite-%23646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Language-JavaScript_ES6--%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Styling-CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Deployment-Vercel-%23000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🚀 Project Overview

Welcome to the official repository for the **CODE SPARK Live Coding Masterclass**. This project utilizes a lightning-fast development engine powered by **Vite** to build, modularize, and deploy a responsive application shell.

By shifting away from local static file management to a managed build pipeline, this template helps entry-level students learn professional directory structures while providing advanced creators with optimized, zero-lag build tools.

### ✨ Architecture Highlights
*   **Instant HMR:** Live browser modifications instantly refresh without breaking the global state.
*   **Modular Asset Core:** Styles, source logic, and assets are isolated to teach clean project separation.
*   **Production Bundle Optimization:** Compiles asset scripts automatically into lightweight production folders upon build completion.

---

## 📂 Project Blueprint

The repository isolates logic structures into standard modular trees:

```
├── public/                 # Static global assets (Logos, Icons, Data files)
├── src/                    # Main development environment
│   ├── assets/             # Brand graphics and custom styling assets
│   ├── components/         # Independent visual blocks and interfaces
│   ├── main.js             # Root application script and entry execution logic
│   └── style.css           # Global typography, color schemes, and layout variables
├── index.html              # Main HTML mounting container
├── package.json            # Node dependency mapping script
└── vite.config.js          # Core engine compilation settings

## 🛠️ Local Installation & Launch Blueprint

​Follow these commands to clone the source and run the native development server locally on your machine:
​Prerequisite
​Ensure you have Node.js installed on your operating system.

​1. Clone the Source Container

git clone https://github.com/ehichioyaodion/code-spark-webinar

2. Hydrate Dependencies

npm install

3. Spin Up the Local Engine

npm run dev

​The terminal will display a local address link (usually http://localhost:5173/). Open this link in your browser to interact with the live sandbox code.

​💻 Sample Logic Block

​src/main.js (Modular Event Triggers)

// Clean document interaction handling demonstrated during the live masterclass
import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="card">
    <h2>⚡ CODE SPARK Engine Active</h2>
    <button id="action-trigger">Launch Application</button>
  </div>
`;

document.querySelector('#action-trigger').addEventListener('click', () => {
  console.log('⚡ Pipeline initialized successfully via Vite.');
  alert('Welcome to eDev Global! Building the future line by line.');
});

🌐 Production Deployment Flow

​Vite compiles optimized bundles cleanly to any cloud runtime environment:

[Development Workspace] ───(npm run build)───> [/dist Folder Out] ───> [Live Server Edge]

To push your web application live manually or via automated CI/CD chains:

1. ​Connect this repo directory tree to your Vercel or Netlify user interface dashboard.

2. ​Ensure the framework setting reads Vite.

3. ​Set the target build output directory path parameter explicitly to dist.

4. ​Click Deploy. Your live production domain link will generate automatically.

---

### Reference Architecture Images

When users land on this repository, these visuals instantly help them grasp what the project environment looks like behind the scenes:

<Image alt="Dark code screenshot highlighting a clean modular Vite directory layout structure including src assets components main.jsx package.json and index.html" caption="Vite Directory Architecture Guide" src="image_agent_tag_7830788897780894971"/>

By reviewing this layout, students will immediately recognize the difference between messy unorganized local folders and a streamlined industrial project layout. When the final build runs smoothly, it displays a premium, modern dashboard structure on screen:

<Image alt="Sleek dark mode technology website user interface layout featuring premium neon glowing lines blue graphs user data and clear clean metrics" caption="CODE SPARK Live App Output Preview" src="image_agent_tag_7830788893946"/>
