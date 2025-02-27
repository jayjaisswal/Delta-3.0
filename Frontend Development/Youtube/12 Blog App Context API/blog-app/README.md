
### How to Setup Tailwind CSS
### Step 1: 


```sh
npm install tailwindcss @tailwindcss/vite
```
### Step 2: vite.config.ts Add

     import { defineConfig } from 'vite' 
```sh   
       import tailwindcss from '@tailwindcssvite' 
```
         export default defineConfig({
            plugins: [
```sh
               tailwindcss(),
``` 
                    ],
            })

Step 3: Add this to Your App.CSS 
```sh
        @import "tailwindcss"; 
```
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