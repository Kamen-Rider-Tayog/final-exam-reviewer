# 🎓 QuizMaster

[![Deploy to GitHub Pages](https://github.com/Kamen-Rider-Tayog/final-exam-reviewer/actions/workflows/deploy.yml/badge.svg)](https://github.com/Kamen-Rider-Tayog/final-exam-reviewer/actions/workflows/deploy.yml)

> A comprehensive quiz platform for computer science students to review course materials with randomized questions, performance tracking, and leaderboard functionality.

## 🌐 Live Demo

**Live App:** [https://kamen-rider-tayog.github.io/final-exam-reviewer/](https://kamen-rider-tayog.github.io/final-exam-reviewer/)

---

## 📚 Subjects Covered

1. **MATH 1A** - Analytic Geometry
2. **COSC 55A** - Discrete Structures II
3. **COSC 60A** - Digital Logic Design
4. **DCIT 50** - Object Oriented Programming
5. **DCIT 24A** - Information Management
6. **INSY 50** - Fundamentals of Information Systems

---

## ✨ Features

### 🎯 Core Functionality
- ✅ **50 Questions Per Subject** - Comprehensive coverage of all topics
- ✅ **Randomized Questions & Choices** - Different order every time
- ✅ **Multiple Question Types** - Multiple choice and true/false
- ✅ **Instant Grading** - GPA grades (1.00-5.00) with percentage
- ✅ **Answer Review** - Detailed explanations for learning
- ✅ **Leaderboard** - Track top 10 scores per subject
- ✅ **Progress Saving** - Resume quiz if browser closes
- ✅ **Offline Support** - Works without internet after first load

### 🎨 User Experience
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- 🎭 **Clean UI** - Professional academic design
- 🚀 **Fast Performance** - Optimized with Vite
- ♿ **Accessible** - Keyboard navigation support
- 💾 **Data Persistence** - LocalStorage for state management

---

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Kamen-Rider-Tayog/final-exam-reviewer.git

# Navigate to project directory
cd final-exam-reviewer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
final-exam-reviewer/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── dist/ (ignored)
├── eslint.config.js
├── index.html
├── node_modules/ (ignored)
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   └── vite.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── HomePage.tsx
│   │   ├── Leaderboard.tsx
│   │   ├── QuizInterface.tsx
│   │   ├── QuizModal.tsx
│   │   ├── ResultsPage.tsx
│   │   └── ReviewAnswers.tsx
│   ├── data/
│   │   ├── index.ts
│   │   ├── questions/
│   │   │   ├── cosc55a.ts
│   │   │   ├── cosc60a.ts
│   │   │   ├── dcit24a.ts
│   │   │   ├── dcit50.ts
│   │   │   ├── insy50.ts
│   │   │   └── math1a.ts
│   │   └── subjects.ts
│   ├── index.css
│   ├── main.tsx
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       ├── grading.ts
│       ├── shuffle.ts
│       └── storage.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🎮 How to Use

1. **Select Subject** - Choose from 6 available subjects
2. **Enter Username** - 3-20 characters required
3. **Take Quiz** - Answer 50 randomized questions
4. **Review Results** - See score, GPA grade, and performance message
5. **Check Leaderboard** - Compare with other users
6. **Review Answers** - Learn from detailed explanations

---

## 🔧 Deployment

### Automatic Deployment (CI/CD)
Every push to the `main` branch triggers automatic deployment:

1. GitHub Actions runs build
2. Vite creates optimized production bundle
3. Deploys to GitHub Pages
4. Live site updates automatically

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## 📊 Grading System

Based on Philippine university GPA scale (1.00 = highest, 5.00 = failing):

| Grade | Percentage | Performance Message |
|-------|-----------|---------------------|
| 1.00  | 97-100%   | Outstanding performance |
| 1.25  | 94-96%    | Outstanding performance |
| 1.50  | 91-93%    | Outstanding performance |
| 1.75  | 88-90%    | Excellent work |
| 2.00  | 85-87%    | Excellent work |
| 2.25  | 82-84%    | Excellent work |
| 2.50  | 79-81%    | Good job |
| 2.75  | 76-78%    | Good job |
| 3.00  | 75%       | Good job |
| 4.00  | 70-74%    | Review needed |
| 5.00  | Below 70% | Keep practicing |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Kamen Rider Tayog**
- GitHub: [@Kamen-Rider-Tayog](https://github.com/Kamen-Rider-Tayog)

---

## 🙏 Acknowledgments

- Course materials from university finals reviewers
- React and Vite communities
- Tailwind CSS team
- Lucide icons contributors

---

## 📞 Support

If you encounter any issues or have questions:
- Open an [issue](https://github.com/Kamen-Rider-Tayog/final-exam-reviewer/issues)
- Check existing issues for solutions

---

**Made with ❤️ for CS students preparing for finals**