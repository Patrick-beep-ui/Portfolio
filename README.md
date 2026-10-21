# Patrick Solis — Software Engineering Portfolio

Personal portfolio presenting production experience, selected software projects, websites, technical capabilities, and professional background.

**Live site:** [patrick-solis.vercel.app](https://patrick-solis.vercel.app/)

## Overview

The portfolio is built around a multidisciplinary software-engineering profile: full-stack product development, AI and LLM integrations, workflow automation, API and CRM integrations, and conversion-focused web development.

Rather than presenting projects as a static list, the site organizes them by category and provides expanded media galleries, technology details, source links, and live demos when available.

## Content

- Professional introduction and technical focus
- Work experience and education timeline
- Filterable project collection
- Project cards with stacks, descriptions, source links, and live links
- Image and video galleries for detailed project walkthroughs
- Responsive navigation and contact information

The selected work includes production real-estate platforms and lead pipelines, AI-powered applications, university operations systems, full-stack academic products, and client websites.

## Featured engineering themes

- React and Next.js product development
- Node.js, Express, Laravel, MySQL, PostgreSQL, and Supabase
- AI and LLM-powered workflows
- CRM, API, analytics, and lead-generation integrations
- Serverless functions and business automation
- Responsive websites, SEO, and conversion-oriented experiences

## Technical implementation

- **Framework:** React 19 with Vite
- **Styling:** Component-level CSS and responsive layouts
- **Motion:** GSAP and OGL-powered visual effects
- **Content model:** Structured JSON files for projects, experience, education, and profile content
- **Media:** Optimized images and project demonstration videos
- **Quality:** ESLint and production builds through Vite
- **Deployment:** Vercel

Keeping portfolio content in structured data files separates the presentation components from the project and experience records. This makes new work easier to add without rewriting the page structure.

## Local development

### Prerequisites

- Node.js 18 or newer
- npm

### Setup

~~~bash
git clone https://github.com/Patrick-beep-ui/Portfolio.git
cd Portfolio
npm install
npm run dev
~~~

## Available scripts

~~~bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run ESLint
~~~

## Updating portfolio content

Project and profile information is maintained under `src/data`. Project media belongs under `public/img/projects` and should be optimized before it is committed.

## Author

**Patrick Solis** — Software Engineer and Full-Stack Developer based in Nicaragua, focused on web applications, AI/LLM integrations, automation, and business-oriented digital systems.

- [Portfolio](https://patrick-solis.vercel.app/)
- [GitHub](https://github.com/Patrick-beep-ui)

