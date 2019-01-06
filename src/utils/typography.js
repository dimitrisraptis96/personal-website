import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Abril Fatface", "serif"],
  headerWeight: "normal",
  bodyFontFamily: ["Poppins", "sans-serif"],
  googleFonts: [
    {
      name: 'Poppins',
      styles: [
        '400',
        '700',
      ],
    },
    {
      name: 'Abril Fatface',
      styles: [
        '400',
      ],
    },
  ],
})

export default typography