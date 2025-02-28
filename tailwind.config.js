/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)",
        accent2: "var(--accent2-color)",
        accent3: "var(--accent3-color)",
        accent4: "var(--accent4-color)",
        primary: "var(--primary-color)",
        "primary-button-text-color": "var(--primary-button-text-color)",
        "primary-button-hover-bg-color": "var(--primary-button-hover-bg-color)",
        "primary-button-bg-color": "var(--primary-button-bg-color)",
        "light-background-color": "var(--light-background-color)",
        "dark-text": "var(--dark-text-color)",
        "gray-text": "var(--gray-text-color)",
        "light-text": "var(--light-text-color)",
        "dark-border": "var(--dark-border-color)",
        "light-border": "var(--light-border-color)",
        "dark-bg": "var(--dark-background-color)",
        "light-bg": "var(--light-background-color)",
        "medium-bg": "var(--medium-background-color)",
        primaryBg: "#1e2023",
        secondaryBg: "#141517",

        primaryTxt: "#ffffff",
        // secondaryTxt: "#18191c",
        secondaryTxt: "#f1faee",
        secondaryTxt100: "#565656",
      },
      backgroundColor: {
        // Or just extend colors as above
        "primary-button": "var(--primary-button-bg-color)",
        "secondary-button": "var(--secondary-button-bg-color)",
        "primary-button-hover": "var(--primary-button-hover-bg-color)",
        "secondary-button-hover": "var(--secondary-button-hover-bg-color)",
      },
      textColor: {
        "primary-button": "var(--primary-button-text-color)",
        "secondary-button": "var(--secondary-button-text-color)",
        "primary-button-hover": "var(--primary-button-hover-text-color)",
        "secondary-button-hover": "var(--secondary-button-hover-text-color)",
      },
      borderColor: {
        dark: "var(--dark-border-color)",
        light: "var(--light-border-color)",
      },
      borderRadius: {
        button: "var(--button-rounded-radius)",
      },
      padding: {
        "button-x": "var(--button-padding-x)",
        "button-y": "var(--button-padding-y)",
      },
    },
  },
  plugins: [], // Add plugins here if needed
};
