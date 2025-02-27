
### How to Setup Tailwind CSS
Step 1: 


```sh
npm install tailwindcss @tailwindcss/vite
```
Step 2: vite.config.ts 
```sh
     import { defineConfig } from 'vite' 
   
       import tailwindcss from '@tailwindcssvite' 
       ```
         export default defineConfig({
            plugins: [
               tailwindcss(), 
                    ],
            })

Step 3: Add this to Your App.CSS 
        @import "tailwindcss"; 