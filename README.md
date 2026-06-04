# Personal Portfolio Website

A modern, responsive portfolio website built with React and Bootstrap, showcasing skills, projects, and professional experience.

## 🚀 Features

### 1. Modern UI/UX
- Clean, minimalist design with dark theme
- Responsive layout for all devices
- Smooth animations and transitions
- Interactive elements with hover effects
- Dynamic background using Vanta.js

### 2. Key Components

#### Navigation
- Sticky navbar with smooth scrolling
- Responsive mobile menu
- Active link highlighting
- Custom logo design

#### Banner Section
- Dynamic text rotation
- Professional introduction
- Call-to-action button
- Animated background effects

#### Skills Section
- Grid layout of technical skills
- Interactive skill cards with hover effects
- Color-coded technology icons
- Detailed skill descriptions
- Technologies covered:
  - React & Next.js
  - TypeScript
  - Java
  - MongoDB
  - Express.js
  - C Programming
  - HTML5/CSS3
  - JavaScript
  - Tailwind CSS

#### Projects Section
- Filterable project grid
- Project cards with:
  - Project images
  - Technology tags
  - Live demo links
  - GitHub repository links
- Modal view for detailed project information
- Responsive image handling

#### Footer
- Social media links (LinkedIn, Facebook, Instagram)
- Custom SVG icons
- Copyright information
- Responsive design

### 3. Technical Stack

#### Frontend
- React.js
- React Bootstrap
- React Icons
- Framer Motion
- Vanta.js (for background effects)
- Animate.css
- Custom CSS

#### Development Tools
- Node.js
- npm/yarn
- Git

## 🛠️ Project Structure

```
personal-portfolio/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── NavBar.js
│   │   ├── Banner.js
│   │   ├── TechStack.js
│   │   ├── Projects.js
│   │   ├── Footer.js
│   │   └── VantaBackground.js
│   ├── assets/
│   │   ├── img/
│   │   │   ├── linkedin.svg
│   │   │   ├── facebook.svg
│   │   │   └── instagram.svg
│   │   └── font/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Subodh-1370/Portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Customization

### Modifying Content
- Update personal information in respective component files
- Replace project images in `src/assets/img/`
- Modify social media links in `Footer.js`
- Update skills in `TechStack.js`

### Styling
- Main styles are in `App.css`
- Component-specific styles are included in respective component files
- Uses Bootstrap classes for responsive design
- Custom CSS variables for consistent theming

### Adding New Features
1. Create new component in `src/components/`
2. Import and add to `App.js`
3. Add necessary styles
4. Update navigation if needed

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Responsive images and grids
- Adaptive typography
- Touch-friendly interactions

## 🎯 Performance Optimizations
- Lazy loading of components
- Optimized images
- Efficient CSS animations
- Minimal dependencies
- Code splitting

## 🔧 Future Improvements
- [ ] Add dark/light theme toggle
- [ ] Implement contact form
- [ ] Add blog section
- [ ] Integrate CMS for content management
- [ ] Add more interactive elements
- [ ] Implement SEO optimizations

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author
Subodh Singh
- LinkedIn: [Subodh Singh](https://www.linkedin.com/in/subodh-singh-6523391a7/)
- GitHub: [@Subodh-1370](https://github.com/Subodh-1370)

## 🙏 Acknowledgments
- React.js team
- Bootstrap team
- All open-source contributors
- Design inspiration from various portfolios

## 🌐 Live Site

Check out the live site here: [Portfolio Website](https://subodh-1370.github.io/Portfolio)

