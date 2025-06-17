/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        gradient: "gradient-shift 3s ease infinite",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "slide-down": "slide-down 0.8s ease-out forwards",
        "zoom-in": "zoom-in 0.6s ease-out forwards",
        "bounce-in": "bounce-in 0.8s ease-out forwards",
        typing: "typing 3s steps(40, end), blink 0.75s step-end infinite",
      },
      backgroundImage: {
        "premium-gradient":
          "linear-gradient(-45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)",
        "text-gradient": "linear-gradient(45deg, #667eea, #764ba2, #f093fb)",
      },
      boxShadow: {
        premium: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        glow: "0 0 30px rgba(102, 126, 234, 0.3)",
      },
      backdropBlur: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
