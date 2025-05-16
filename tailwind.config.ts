import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#FF6B35', // Vibrant Orange
          foreground: '#FFF8F0', // White
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        marley: {
          orange: '#FF6B35', // Vibrant Orange
          white: '#FFF8F0', // White
          black: '#1A1A1A', // Black
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'paw-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'paw-bounce': 'paw-bounce 2s infinite'
      },
      backgroundImage: {
        'paw-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M36 34.15c-2.95 0-5.45-1.73-6.67-4.2-1.12-2.27-.96-4.74.43-6.65.32-.45.83-.73 1.38-.77.55-.03 1.07.18 1.45.59 2.53 2.68 6.26 4.31 10.4 4.56.52.03.99.33 1.27.82.27.48.28 1.06.01 1.56-.68 1.28-1.57 2.4-2.63 3.32-1.25 1.08-2.91 1.69-4.67 1.69zm-4.39-10.14c-.72 1.39-.9 3.28-.03 5.05 1.02 2.06 3.01 3.38 5.35 3.38 1.34 0 2.58-.44 3.51-1.24.64-.55 1.19-1.19 1.65-1.88-3.71-.54-6.74-2.15-8.94-4.45-.26-.27-.77-.12-.82-.07.03 0 .03 0 .03.03l-.75.18z'/%3E%3Cpath d='M44.13 34.82c-3.2 0-5.91-2.31-6.49-5.52-.15-.8.02-1.6.46-2.23.44-.63 1.12-1.03 1.91-1.12h.03c1.14-.12 2.23-.47 3.23-1.02 1.92-1.07 3.33-2.72 3.97-4.64.33-.97 1.26-1.63 2.31-1.63.8 0 1.55.39 2.01 1.04.48.68.63 1.53.4 2.34-.44 1.57-1.23 3.03-2.35 4.33-1.13 1.3-2.54 2.37-4.15 3.16-.25.12-.51.22-.76.33-1.04 2.91-2.39 3.77-2.51 3.85-.24.11-.5.17-.76.17l-.3-.06zm.62-8.16c-.15.03-.17.07-.18.09-.11.15-.18.4-.13.67.42 2.27 2.27 3.91 4.45 3.91h.01c.05-.11.17-.3.34-.63.06-.11.13-.24.2-.37-.21.09-.43.18-.64.25-.61.21-1.24.32-1.87.32a5.52 5.52 0 0 1-2.18-.44zm2.28-.16c.11-.05.22-.11.33-.17.12-.06.24-.13.35-.21 1.29-.66 2.43-1.56 3.35-2.64.78-.91 1.38-1.92 1.74-2.99.03-.12 0-.24-.07-.34-.06-.09-.16-.14-.27-.14-.13 0-.25.08-.3.2-.77 2.26-2.45 4.23-4.74 5.51-.79.44-1.63.76-2.49.93.7.15 1.41.23 2.1.23v-.38z'/%3E%3Cpath d='M51.14 32.96c-2.57 0-5.1-.79-7.43-2.37-1.25-.85-2.26-1.85-3-2.97-.74-1.13-1.24-2.37-1.48-3.68-.15-.8.02-1.6.46-2.23.44-.63 1.12-1.03 1.91-1.12h.03c1.14-.12 2.22-.47 3.23-1.02 1.92-1.07 3.33-2.72 3.97-4.64.33-.97 1.26-1.63 2.31-1.63.8 0 1.55.39 2.01 1.04.48.68.63 1.53.4 2.34-.44 1.57-1.23 3.03-2.35 4.33-1.13 1.3-2.54 2.37-4.15 3.16-1.33.66-2.71 1.12-4.09 1.37.2.8.55 1.59 1.05 2.34.61.93 1.43 1.75 2.45 2.43 1.93 1.28 4.04 1.94 6.11 1.94 1.4 0 2.74-.26 3.96-.78.18-.07.35-.15.52-.23l.1-.05c.88-.44 1.8-.67 2.73-.67 1.53 0 2.98.55 4.12 1.55.11.09.17.22.17.36s-.06.26-.17.36a.499.499 0 0 1-.36.15c-.14 0-.27-.05-.36-.16-.93-.8-2.09-1.25-3.31-1.25-.75 0-1.49.18-2.21.54l-.11.05c-.19.09-.39.19-.58.26-1.39.58-2.88.88-4.43.88z'/%3E%3Cpath d='M23.4 32.69c-1.66 0-3.21-.6-4.38-1.68-1.06-.91-1.95-2.04-2.63-3.32-.27-.5-.26-1.08.01-1.56.27-.48.75-.78 1.27-.82 4.14-.26 7.87-1.88 10.4-4.56.38-.4.9-.62 1.45-.59.55.03 1.06.32 1.38.77 1.39 1.91 1.55 4.38.43 6.65-1.22 2.47-3.72 4.2-6.67 4.2-.09 0-.17 0-.26-.01zm-5.36-6.38c.46.69 1.01 1.33 1.65 1.88.94.8 2.18 1.24 3.51 1.24h.2c2.24-.07 4.15-1.37 
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

