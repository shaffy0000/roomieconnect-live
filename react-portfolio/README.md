# Shaffy Shafiq - React Portfolio

A modern, responsive React portfolio website showcasing the work and skills of Shaffy Shafiq, a Computer Engineering student and digital creator.

## 🚀 Features

### 🎨 Design & Technology
- **Built with React 18** - Modern component-based architecture
- **Responsive Design** - Works perfectly on all devices
- **Modern CSS** - Custom styling with CSS Grid and Flexbox
- **Smooth Animations** - Interactive hover effects and transitions
- **Professional Typography** - Poppins font for clean readability

### 📱 Sections
- **Hero Section**: Eye-catching introduction with typing animation and floating icons
- **About Me**: Personal information, education, and animated statistics
- **Skills**: Interactive skill tags organized by category
- **Projects**: Featured projects with hover effects and links
- **Experience**: Professional timeline with visual design
- **Contact**: Multiple contact methods and social media links

### ⚡ Interactive Features
- Mobile-responsive navigation with hamburger menu
- Smooth scrolling between sections
- Typing animation for hero title
- Counter animations for statistics
- Floating icon animations
- Project card hover effects
- Scroll-to-top button
- Active navigation highlighting

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Extract the zip file**
2. **Navigate to the project directory**:
   ```bash
   cd react-portfolio
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
5. **Open your browser** and visit `http://localhost:3000`

### Building for Production

To create a production build:
```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📁 Project Structure

```
react-portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   ├── ScrollToTop.js
│   │   └── Skills.js
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Customization

### Changing Images
The website uses placeholder images. To add your own:

1. **Profile Picture** - Update the `src` in `Hero.js`:
   ```jsx
   <img src="your-profile-image.jpg" alt="Shaffy Shafiq" />
   ```

2. **Project Screenshots** - Update the `image` property in the projects array in `Projects.js`:
   ```jsx
   {
     title: "Your Project",
     image: "your-project-screenshot.jpg",
     // ... other properties
   }
   ```

### Updating Content
- **Personal Information**: Edit the content in respective component files
- **Contact Links**: Update the `link` properties in `Contact.js`
- **Social Media**: Add your Instagram handles in `Contact.js`
- **Projects**: Modify the projects array in `Projects.js`

### Color Scheme
Change colors by modifying CSS variables in `src/styles/App.css`:
```css
:root {
  --primary-color: #667eea;    /* Main brand color */
  --secondary-color: #764ba2;  /* Secondary brand color */
  --accent-color: #f093fb;     /* Accent color */
  /* ... other colors */
}
```

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/react-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔧 Technical Details

- **React Version**: 18.2.0
- **Create React App**: 5.0.1
- **CSS**: Custom CSS with modern features
- **Icons**: Font Awesome 6.0.0
- **Fonts**: Google Fonts (Poppins)

## 📱 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing
Feel free to fork this project and customize it for your own portfolio!

## 📝 License
This project is open source and available under the MIT License.

---

**Built with ❤️ and React by Shaffy Shafiq**