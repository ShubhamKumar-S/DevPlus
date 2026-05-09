# DevPulse

DevPulse is a developer productivity MVP built for an intern assignment. It helps individual contributors and managers understand DORA-inspired engineering metrics through charts, plain-English interpretation, and concrete next steps.

The goal is not to be a generic analytics dashboard. DevPulse focuses on explaining what the numbers likely mean and what action a developer or manager can take next.

## Tech Stack

- React.js with Vite
- Tailwind CSS for styling and dark mode
- Recharts for charts and sparklines
- Embedded JSON data in the frontend
- No backend or external APIs

## Features

- IC Dashboard with selectable developers and months
- Manager View with manager and month selectors
- Five developer metrics:
  - Lead Time for Changes
  - Cycle Time
  - Bug Rate
  - Deployment Frequency
  - PR Throughput
- Plain-English insight panel for each developer
- Suggested next steps based on metric values
- Team-level manager summary and individual breakdown table
- Dark mode toggle with preference saved in `localStorage`
- Animated metric cards, table rows, and dashboard transitions

## Metric Definitions

| Metric | Meaning |
| --- | --- |
| Lead Time for Changes | Average days from PR opened to successful production deployment |
| Cycle Time | Average days from issue moved to In Progress to Done |
| Bug Rate | Escaped production bugs divided by issues completed that month |
| Deployment Frequency | Count of successful production deployments |
| PR Throughput | Count of merged pull requests |

## Project Structure

```text
src/
  data.js
  utils/
    interpret.js
    nextSteps.js
    colors.js
    avatarColor.js
  components/
    Navbar.jsx
    Avatar.jsx
    MetricCard.jsx
    PatternBadge.jsx
    InsightBox.jsx
    TrendChart.jsx
    ICView.jsx
    ManagerView.jsx
  App.jsx
  main.jsx
  index.css
```

## How It Works

All sample data lives in `src/data.js`. The app filters that data by selected developer, manager, and month.

`interpretMetrics()` generates the "What's likely happening" explanation based on the developer's pattern, while `getNextSteps()` returns two recommended actions based on bug rate, cycle time, or lead time.

The manager view uses the same embedded data to show team-level summaries and an individual breakdown table for the selected manager.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

Build for production:

```bash
npm run build
```

Run the production static server locally after building:

```bash
npm run serve
```

Run lint checks:

```bash
npm run lint
```

## Deploying on Railway

This project is ready to deploy from GitHub on Railway.

1. Push the latest code to GitHub.
2. Open Railway and create a new project.
3. Choose **Deploy from GitHub repo**.
4. Select `ShubhamKumar-S/DevPlus`.
5. Let Railway deploy the service.
6. After deployment, open the service **Settings** or **Networking** section and generate a public domain.

Railway reads `railway.json` from the repository root. The config tells Railway to:

- Build the app with `npm run build`
- Start the production static server with `node server.js`
- Healthcheck the app at `/`

The server uses Railway's `PORT` environment variable automatically, so no manual port setup is needed.

## Dark Mode

The navbar includes a light/dark toggle. The preference is stored using:

```js
localStorage.getItem("devpulse-dark")
```

The app applies dark mode by toggling the `dark` class on the document root, allowing Tailwind's `dark:` variants to style the full UI.
