Absolutely 💪 — here’s a professional, elegant, and developer-friendly README.md for your portfolio project, formatted for GitHub.

It includes visuals, structure, setup instructions, customization guidance, and a professional tone.

⸻

🧠 Avneet Singh — Developer Portfolio

🚀 Overview

Welcome to my developer portfolio — a VSCode-themed, interactive portfolio built with Next.js, TypeScript, and CSS Modules.
It showcases my projects, experience, publications, certifications, and GitHub activity, all designed in a sleek, developer-centric layout.

<p align="center">
  <img src="public/preview.png" width="80%" alt="Portfolio Preview" />
</p>



⸻

✨ Features

Section	Description
🏠 Home	Landing page with dynamic VSCode-style code animation and resume download
💼 Work	Detailed career timeline with collapsible experience cards
📚 Publications	Research publications with journal, citation, and DOI details
💻 Projects	Showcases major personal and professional projects with previews
🧾 Certifications	Achievements from Coursera, AWS, and more with certificate links
🐙 GitHub	Live integration showing repositories and contribution heatmap
👨‍🎓 About	Short summary of education, goals, and background


⸻

🧩 Tech Stack
	•	Framework: Next.js 14
	•	Language: TypeScript
	•	Styling: CSS Modules + Variables
	•	UI Icons: React Icons
	•	Deployment: Vercel
	•	Data Integration:
	•	GitHub API for repositories and contributions
	•	ORCID / Research Data for publications
	•	Design Theme: Visual Studio Code inspired (dark mode)

⸻

⚙️ Installation

# Clone the repository
git clone https://github.com/avneetxsingh/portfolio.git

# Enter the folder
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

Then open http://localhost:3000 in your browser.

⸻

🧱 Project Structure

📁 src
├── components/
│   ├── WorkCard.tsx
│   ├── PublicationsCard.tsx
│   ├── CertificationCard.tsx
│   └── RepoCard.tsx
│
├── pages/
│   ├── index.tsx             # Home page
│   ├── work.tsx              # Career / Experience page
│   ├── projects.tsx          # Project showcase
│   ├── publications.tsx      # Publications from Research / ORCID
│   ├── certifications.tsx    # Certifications page
│   └── github.tsx            # GitHub API integration
│
├── styles/
│   ├── HomePage.module.css
│   ├── WorkCard.module.css
│   ├── PublicationsCard.module.css
│   ├── CertificationCard.module.css
│   ├── CertificationsPage.module.css
│   └── ...
│
└── public/
    ├── images/
    │   ├── projects/
    │   ├── certifications/
    │   └── publications/
    ├── logos/
    └── AvneetSinghResume.pdf


⸻

🌐 Environment Variables

Create a .env.local file at the root of your project with:

NEXT_PUBLIC_GITHUB_USERNAME=avneetxsingh

(You can add more API keys if using ResearchGate or ORCID integrations.)

⸻

📸 Customization

Feature	How to Edit
🧑‍💼 Work Experience	pages/work.tsx → update the workData array
💻 Projects	data/projects.ts → update title, description, image, and link
📚 Publications	pages/publications.tsx → add your publications manually or via ORCID
🎓 Certifications	pages/certifications.tsx → update certifications array
🏠 Resume	Replace /public/AvneetSinghResume.pdf with your own
🎨 Theme Colors	Edit CSS variables in globals.css or page-specific modules


⸻

🚀 Deployment

Deploy easily with Vercel:

npm run build
npm run start

Or connect your GitHub repo directly at vercel.com.

⸻

🧠 Author

Avneet Singh
🎓 University of Toledo | Student Developer
💻 Passionate about software engineering, AI, and system design.
🌐 Portfolio Website
🐙 GitHub
🔗 LinkedIn

⸻

📜 License

This project is licensed under the MIT License — feel free to use and modify it with attribution.

⸻

💬 Acknowledgements
	•	Next.js
	•	Vercel
	•	React Icons
	•	GitHub Calendar

Project Template Inspiration:
https://nitinranganath.com