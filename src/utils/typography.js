import Typography from 'typography'
import gray from 'gray-percentage'
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants'

// Import typefaces
import "typeface-amatic-sc"
import "typeface-work-sans"

const theme = {
  baseFontSize: '19px',
  baseLineHeight: 1.38,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Amatic SC',
      styles: ['400'],
    },
    {
      name: 'Work Sans',
      styles: ['200', '500'],
    },
  ],
  headerFontFamily: ['Amatic SC', 'cursive'],
  bodyFontFamily: ['Work Sans', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 400,
  bodyWeight: 300,
  boldWeight: 500,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const styles = {
      a: {
        color: options.bodyColor,
      },
      'a:hover': {
        color: '#3498DB',
      },
      blockquote: {
        ...scale(2 / 5),
        lineHeight: 1.3,
        fontWeight: '200',
        color: gray(50),
        paddingLeft: rhythm(5 / 4),
        marginLeft: 0,
        marginRight: 0,
      },
      'h3,h4,h5,h6': {
        marginBottom: rhythm(1 / 2),
      },
      table: {
        ...scale(-1 / 5),
      },
      // Mobile styles.
      [TABLET_MEDIA_QUERY]: {
        html: {
          fontSize: '16px',
        },
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(1 / 2),
        },
      },
    }

    return styles
  },
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
