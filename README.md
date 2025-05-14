# Landing Page Test

A modern, responsive landing page built with Vite and vanilla JavaScript. This project serves as a template for testing and deploying static landing pages.

## 👤 Author

**Konstantin Bozhyk**  
[GitHub](https://github.com/supgreyd)

## 🌐 Production URL
 https://ornate-cat-4aa2a7.netlify.app/

## 🚀 Features

- ⚡️ Fast build and hot-reload using [Vite](https://vitejs.dev/)
- 🎨 Custom styling with SCSS
- 🌐 Ready for deployment on platforms like Netlify
- ✋ Netlify edge-functions for restricted connections 

## 📂 Project Structure

```
landing-page-test/
├── netlify/             # Netlify Edge Functions
├── public/              # Static assets (images, fonts, etc.)
├── src/                 # Source files (JS, CSS)
├── index.html           # Main HTML file
├── restricted.html      # HTML page for restricted connections
├── netlify.toml         # Netlify configuration
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/supgreyd/landing-page-test.git
   cd landing-page-test
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173/` by default.

## 🧪 Building for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The optimized files will be generated in the `dist/` directory.

## 🌐 Deployment

This project is configured for deployment on [Netlify](https://www.netlify.com/). The `netlify.toml` file contains the necessary settings. To deploy:

1. Push your repository to GitHub.
2. Log in to Netlify and create a new site from GitHub.
3. Select your repository and configure the build settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist/`
4. Deploy the site.

For more details, refer to Netlify's [documentation](https://docs.netlify.com/).

