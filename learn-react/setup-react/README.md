
# 1. Create a React App with Tailwindcss
 - terminal command write
 ```
npm create vite@latest
```
 - now install tailwindcss 
 ```
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
 -  now edit **Three** file  
 ### 1.tailwind.config.js
  ```
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  ```
 ### 2.src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 3.vite.config.js
``` 
 server:{open:true}
 ````
now our basic react app with tailwindcss is created...

[back to home](../../)