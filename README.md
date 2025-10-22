Avneet Singh's Portfolio
Welcome to my personal portfolio website, showcasing my projects, GitHub repositories, and technical skills as a Computer Science & Engineering student at the University of Toledo. This site is built with Next.js and deployed on Vercel, featuring a modern, interactive design to highlight my work and contributions.
Features

Home Page: Displays a code-like animation introducing my name, role, and a downloadable resume.
Projects Page: Showcases a curated list of projects with images, descriptions, and links to live demos or repositories.
GitHub Page: Integrates with the GitHub API to display my public repositories, user profile, and contribution graph using react-github-calendar.
Responsive Design: Optimized for both desktop and mobile devices with a clean, modern UI.
Static Site Generation: Uses Next.js's getStaticProps with Incremental Static Regeneration (ISR) for fast performance and dynamic data updates.

Tech Stack

Framework: Next.js (v15.5.3)
Language: TypeScript
Styling: CSS Modules
Icons: React Icons
GitHub Integration: GitHub API for fetching user and repository data
Calendar: react-github-calendar for contribution graph
Image Optimization: Next.js Image component
Deployment: Vercel
Linting: ESLint with react/jsx-no-comment-textnodes rule enforced
Environment Variables: Managed via .env.local and Vercel dashboard

Prerequisites
Before setting up the project, ensure you have the following installed:

Node.js (v16 or higher)
npm or yarn
A GitHub Personal Access Token for API access

Installation

Clone the repository:
git clone https://github.com/avneetxsingh/portfolio.git
cd portfolio


Install dependencies:
npm install


Set up environment variables:Create a .env.local file in the project root and add your GitHub Personal Access Token:
GITHUB_TOKEN=ghp_yourPersonalAccessTokenHere


Generate a token from GitHub Settings > Developer settings > Personal access tokens.
Required scopes: public_repo, user.


Add image assets:

Place project images (e.g., project1.jpg, project2.jpg) in the public/images/ directory.
Ensure paths in src/data/projects.ts match the file names.


Run the development server:
npm run dev

Open http://localhost:3000 to view the site.

Build for production:
npm run build
npm start



Project Structure

pages/:
index.tsx: Home page with animated code display and resume download.
github.tsx: Displays GitHub profile, repositories, and contribution graph.
ProjectsPage.tsx: Lists portfolio projects with cards.


components/:
ProjectCard.tsx: Renders individual project cards with images and links.
RepoCard.tsx: Renders GitHub repository cards with stats (stars, forks, language).


data/:
projects.ts: Static data for projects (title, description, image, link, slug).


types/:
types.ts: TypeScript interfaces for Project, Repo, User, and Article.


styles/:
CSS Modules for each page/component (e.g., HomePage.module.css, ProjectCard.module.css).


public/:
Static assets like images and resume (AvneetSinghResume.pdf).



Environment Variables

GITHUB_TOKEN: GitHub Personal Access Token for API requests.
Local: Set in .env.local.
Vercel: Add to Vercel dashboard under Settings > Environment Variables.
Without a token, GitHub API requests are rate-limited (60 requests/hour).



Deployment
The project is deployed on Vercel for fast, scalable hosting.

Push to GitHub:Ensure your repository is pushed to GitHub:
git push origin main


Set up Vercel:

Create a Vercel account and link your GitHub repository.
Import the repository in Vercel and configure the project.
Add GITHUB_TOKEN in Vercel’s Environment Variables settings.


Deploy:Vercel automatically builds and deploys on each push to the main branch. Check build logs for errors.


API Integration

GitHub API: Fetches user profile and repositories in github.tsx using getStaticProps.
Endpoint: https://api.github.com/users/avneetxsingh (user profile).
Endpoint: https://api.github.com/users/avneetxsingh/repos?sort=pushed&per_page=6 (latest 6 repositories).
Uses Incremental Static Regeneration (ISR) with revalidate: 600 (10 minutes).



Troubleshooting

Build errors:
TypeScript errors: Ensure types in types.ts match API responses and component usage.
ESLint react/jsx-no-comment-textnodes: Wrap JSX comments in {/* */} or disable the rule in .eslintrc.
API errors: Verify GITHUB_TOKEN is set and has correct scopes. Check GitHub API rate limits.


Image issues: Ensure image paths in projects.ts match files in public/images/.
Run npm run build locally to catch errors before deploying.

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

Project Inspiration:
Project template from Nitin

Contact

Name: Avneet Singh
GitHub: avneetxsingh
Email: info.avneetsingh@gmail.com

