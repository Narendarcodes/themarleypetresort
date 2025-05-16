/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marley-white': 'hsl(var(--background))',
        'marley-black': 'hsl(var(--foreground))',
        'marley-orange': 'hsl(var(--primary))',
        'muted': 'hsl(var(--muted))',
        'border': 'hsl(var(--border))',
        'accent': 'hsl(var(--accent))',
        'destructive': 'hsl(var(--destructive))',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
