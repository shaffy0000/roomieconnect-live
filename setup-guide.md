# Step-by-Step Setup Guide for Shaffy's React Portfolio

## Method 1: Create New React App (Recommended)

### Step 1: Create a new React project
```bash
npx create-react-app shaffy-portfolio
cd shaffy-portfolio
```

### Step 2: Replace the default files with our custom code

#### Replace package.json:
```json
{
  "name": "shaffy-portfolio",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

### Step 3: Create the folder structure
```
src/
├── components/
├── styles/
└── assets/
```

### Step 4: Install dependencies
```bash
npm install
```

### Step 5: Start the development server
```bash
npm start
```

## Method 2: Manual File Creation

If you prefer to create files manually, follow these steps:

1. Create a new folder: `shaffy-portfolio`
2. Inside that folder, create the following structure:
   ```
   shaffy-portfolio/
   ├── public/
   │   ├── index.html
   │   └── manifest.json
   ├── src/
   │   ├── components/
   │   ├── styles/
   │   ├── App.js
   │   └── index.js
   ├── package.json
   └── README.md
   ```
3. Copy the content for each file (provided below)
4. Run `npm install`
5. Run `npm start`