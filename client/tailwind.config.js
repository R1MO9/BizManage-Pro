/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          primary: "#007BFF", // Vibrant Blue
          secondary: "#6C757D", // Neutral Gray
          background: "#F8F9FA", // Soft Off-White
          text: "#212529", // Dark Charcoal
          accent: "#28A745", // Success Green
          warning: "#FFC107", // Amber Yellow
          danger: "#DC3545", // Alert Red
        },
        // Dark mode colors
        dark: {
          primary: "#007BFF", // Vibrant Blue (consistent)
          secondary: "#ADB5BD", // Light Gray
          background: "#343A40", // Dark Gray
          text: "#E9ECEF", // Light Gray for contrast
          accent: "#28A745", // Success Green
          warning: "#FFC107", // Amber Yellow
          danger: "#DC3545", // Alert Red
        },
      },
    },
  },
  plugins: [],
};
