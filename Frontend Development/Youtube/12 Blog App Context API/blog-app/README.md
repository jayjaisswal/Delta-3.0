
### How to Setup Tailwind CSS
Step 1: 


```sh
npm install tailwindcss @tailwindcss/vite
```
Step 2: vite.config.ts 
    Add:```sh import { defineConfig } from 'vite' ```
      ```sh import tailwindcss from '@tailwindcssvite' ```
         export default defineConfig({
            plugins: [
              ```sh tailwindcss(), ```
                    ],
            })

Step 3: Add this to Your App.CSS 
       ```sh @import "tailwindcss"; ```