
### How to Setup Tailwind CSS
### Step 1: 


```sh
npm install tailwindcss @tailwindcss/vite
```
### Step 2:Update vite.config.ts File
```sh
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})
```



### Step 3: Add this to Your App.CSS 
```sh
@import "tailwindcss"; 
```
### Step 4: Color Mark And Suggestion                                                                            
In Tailwind Latest Version **tailwind.config.js** file is no longer but for
**Color suggestion** Add this by creating this File Manually
```sh
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Specify files for scanning
    theme: {
      extend: {}, // Extend default theme
    },
    plugins: [], // Add plugins if needed
  };
  

```
### Add Custom Color in App.css
```sh
@layer base {
  .text-clr {
    color: #1E40AF; /* Custom Blue */
  }

  .bg-jay {
    background-color: #1E40AF; /* Custom Blue */
  }

  .text-prince {
    color: #F59E0B; /* Custom Yellow */
  }

  .bg-rj {
    background-color: #F59E0B; /* Custom Yellow */
  }
}
```

### Alternate Way to use Custom Color
```sh
:root {
    --color-primary: #1E40AF; /* Custom Blue */
    --color-secondary: #F59E0B; /* Custom Yellow */
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
  
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  

```




