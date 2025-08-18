# Shaffy Shafiq - Portfolio Website

A modern, responsive portfolio website showcasing the work and skills of Shaffy Shafiq, a Computer Engineering student and digital creator.

## Features

### 🎨 Design
- Modern gradient design with purple/blue color scheme
- Fully responsive layout for all devices
- Smooth animations and transitions
- Interactive hover effects
- Professional typography using Poppins font

### 📱 Sections
- **Hero Section**: Eye-catching introduction with animated floating icons
- **About Me**: Personal information, education, and interests
- **Skills**: Technical and creative skills with interactive tags
- **Projects**: Featured projects with hover effects and links
- **Experience**: Timeline of professional experience
- **Contact**: Multiple contact methods and social media links

### ⚡ Interactive Features
- Mobile-responsive navigation with hamburger menu
- Smooth scrolling between sections
- Typing animation for hero title
- Counter animations for statistics
- Parallax effects for floating icons
- Project card tilt effects
- Scroll-to-top button
- Active navigation highlighting

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Python 3 (for local development server)

### Running the Website

1. **Clone or download the files**
2. **Start a local server** (optional, for development):
   ```bash
   python3 -m http.server 8000
   ```
3. **Open in browser**:
   - If using local server: `http://localhost:8000`
   - Or simply open `index.html` directly in your browser

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Customization

### Changing Images
The website uses placeholder images from `via.placeholder.com`. To add your own images:

1. **Profile Picture**: Replace the `src` attribute in the hero section:
   ```html
   <img src="your-profile-image.jpg" alt="Shaffy Shafiq" class="profile-img">
   ```

2. **Project Screenshots**: Update the `src` attributes in the projects section:
   ```html
   <img src="your-project-screenshot.jpg" alt="Project Name">
   ```

### Updating Content
- **Personal Information**: Edit the text content in `index.html`
- **Contact Links**: Update the `href` attributes with your actual links
- **Social Media**: Add your Instagram handles and other social media links
- **Projects**: Add your actual project links and GitHub repositories

### Color Scheme
To change the color scheme, modify the CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;    /* Main brand color */
    --secondary-color: #764ba2;  /* Secondary brand color */
    --accent-color: #f093fb;     /* Accent color */
    /* ... other colors */
}
```

## 📊 Performance Features
- Optimized CSS with minimal external dependencies
- Efficient JavaScript with intersection observers
- Smooth animations with CSS transforms
- Responsive images and layouts

## 🌐 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 License
This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing
Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Shaffy Shafiq**