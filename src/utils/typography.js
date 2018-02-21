import Typography from 'typography';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';

// Import typefaces
import 'typeface-cormorant-garamond';
import 'typeface-raleway';

const theme = {
  baseFontSize: '16px',
  baseLineHeight: 1.47,
  scaleRatio: 5.5,
  googleFonts: [
    {
      name: 'Cormorant Garamond',
      styles: ['400'],
    },
    {
      name: 'Raleway',
      styles: ['200', '400', '700'],
    },
  ],
  headerFontFamily: ['Cormorant Garamond', 'serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const styles = {
      a: {
        color: options.bodyColor,
      },
      'a:hover': {
        color: '#3498DB',
      },
      blockquote: {
        ...scale(0.3),
        lineHeight: 1.4,
        fontWeight: '200',
        color: '#777777',
        paddingLeft: rhythm(5 / 4),
        marginLeft: 0,
        marginRight: 0,
      },
      'h1:not(:first-child),h2:not(:first-child),h3:not(:first-child),h4:not(:first-child),h5:not(:first-child),h6:not(:first-child)': {
        marginTop: rhythm(1.75),
        marginBottom: rhythm(1),
      },
      h4: {
        ...scale(0.25),
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
    };

    return styles;
  },
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
