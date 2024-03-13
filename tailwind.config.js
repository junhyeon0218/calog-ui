/** @type {import('tailwindcss').Config} */

const rem0_10 = { ...Array.from(Array(11)).map((_, i) => `${i / 10}rem`) };
const rem0_100 = { ...Array.from(Array(101)).map((_, i) => `${i / 10}rem`) };
const rem0_800 = { ...Array.from(Array(801)).map((_, i) => `${i / 10}rem`) };

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderWidth: rem0_10,
      borderRadius: rem0_100,
      fontSize: rem0_100,
      lineHeight: rem0_100,
      minWidth: rem0_800,
      minHeight: rem0_800,
      spacing: rem0_800,
      colors: {
        primary: '#112D4E',
        blue: {
          '3F': '#3F72AF',
          76: '#76A5EA',
          DB: '#DBE2EF',
        },
        gray: {
          78: '#787486',
          '9F': '#9FA6B2',
          D9: '#D9D9D9',
          EE: '#EEEEEE',
          FA: '#FAFAFA',
        },
        black: {
          DEFAULT: '#000',
          1717: '#171717',
          3332: '#333236',
          '4B4B': '#4B4B4B',
          overlay: 'rgba(0, 0, 0, 0.70)', // 모달창 뒷 배경
        },
        red: '#D6173A',
        green: '#7AC555',
        purple: '#760DDE',
        orange: '#FFA500',
        blue: '#76A5EA',
        pink: '#E876EA',
        white: '#FFF',
        'beige-f9': '#F9F7F7',
      },
      screens: {
        mobile: '375px',
        tablet: '744px',
        pc: '1199px',
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      zIndex: {
        DEFAULT: '1',
        dropdown: '200',
        sticky: '400',
        popover: '600',
        overlay: '800',
        modal: '1000',
        toast: '1200',
      },
    },
  },
  plugins: [],
};
