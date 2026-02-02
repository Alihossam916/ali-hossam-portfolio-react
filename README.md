# Ali Hossam Portfolio

A modern, responsive portfolio website showcasing my work as a Frontend Developer. Built with React, TypeScript, and Tailwind CSS, this portfolio features a clean design with smooth scrolling sections and interactive components.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI**: Clean and professional interface with smooth animations
- **Project Showcase**: Display of featured projects with live demos and GitHub repositories
- **Skills Section**: Visual presentation of technical skills with icons
- **Contact Form**: Easy way for visitors to get in touch
- **Smooth Scrolling**: Snap-scrolling sections for better user experience
- **Dark/Light Theme**: (If implemented) Theme switching capability

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful icon library
- **ESLint** - Code linting and quality

## 📂 Project Structure

```
ali-hossam-portfolio/
├── public/
│   └── images/
│       ├── favicon/
│       └── projects-screenshots/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── header.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── contact.tsx
│   │   │   └── footer.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── data/
│   │   └── projects.json
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ali-hossam-portfolio.git
   cd ali-hossam-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## 🎨 Sections

### Hero Section

Introductory section with name, title, and a brief description of skills and experience. Includes resume download and LinkedIn link.

### Projects Section

Showcases featured projects including:

- **Basket** - Modern e-commerce app with React, Redux Toolkit, and Material-UI
- **Time Zone** - E-commerce app with React Query and Formik
- **Exclusive** - Vanilla JavaScript e-commerce site
- **Burger King Clone** - Website clone with HTML/CSS/JS

### Skills Section

Visual display of technical skills including:

- HTML5
- CSS3
- JavaScript
- React
- TypeScript
- Tailwind CSS
- Git & GitHub
- And more...

### Contact Section

Form for visitors to send messages and get in touch.

## 🌐 Deployment

This project can be easily deployed to:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**

To deploy to Vercel:

```bash
npm run build
vercel --prod
```

## 📝 Customization

To customize this portfolio for your own use:

1. Update personal information in [hero.tsx](src/components/sections/hero.tsx)
2. Modify projects in [projects.json](src/data/projects.json)
3. Update skills in [skills.tsx](src/components/sections/skills.tsx)
4. Replace project screenshots in `public/images/projects-screenshots/`
5. Add your resume PDF to `public/`

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **LinkedIn**: [Ali Hossam](https://linkedin.com/in/ali-hossam-051810235)
- **GitHub**: [@Alihossam916](https://github.com/Alihossam916)

---

Built with ❤️ by Ali Hossam
