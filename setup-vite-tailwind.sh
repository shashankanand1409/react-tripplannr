#!/bin/bash

# Script to automate Vite + React + Tailwind CSS v4+ setup

echo "Enter your project name:"
read PROJECT_NAME

# 1. Create Vite + React project
npm create vite@latest $PROJECT_NAME -- --template react
cd $PROJECT_NAME

# 2. Install dependencies
npm install
npm install -D tailwindcss@latest @tailwindcss/postcss@latest postcss@latest autoprefixer@latest

# 3. Initialize Tailwind config
npx tailwindcss init -p

# Overwrite tailwind.config.js with recommended content
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Overwrite postcss.config.js with recommended content
cat > postcss.config.js <<EOL
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOL

echo "Updated tailwind.config.js and postcss.config.js with recommended settings."

# 4. Update tailwind.config.js
# cat > tailwind.config.js <<EOL
# /** @type {import('tailwindcss').Config} */
# export default {
#   content: [
#     "./index.html",
#     "./src/**/*.{js,jsx,ts,tsx}",
#   ],
#   theme: {
#     extend: {},
#   },
#   plugins: [],
# }
# EOL

# 5. Update postcss.config.js
# cat > postcss.config.js <<EOL
# export default {
#   plugins: {
#     '@tailwindcss/postcss': {},
#     autoprefixer: {},
#   },
# }
# EOL

# 6. Add Tailwind directives to src/index.css
cat > src/index.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# 7. Ensure src/main.jsx imports index.css
if ! grep -q "import './index.css'" src/main.jsx; then
  sed -i '' "1s;^;import './index.css'\n;" src/main.jsx
fi

echo "✅ Vite + React + Tailwind CSS setup complete!"
echo "To get started:"
echo "cd $PROJECT_NAME"
echo "npm run dev"