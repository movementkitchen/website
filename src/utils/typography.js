import Typography from 'typography';
import { TABLET_MEDIA_QUERY } from 'typography-breakpoint-constants';

// Import typefaces
import 'typeface-raleway';

const theme = {
  baseFontSize: '16px',
  baseLineHeight: 1.47,
  scaleRatio: 5.5,
  googleFonts: [
    {
      name: 'Raleway',
      styles: ['300', '400', '600', '700'],
    },
  ],
  headerFontFamily: ['Raleway', 'sans-serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.8)',
  brandColorPrimaryGreen: '#30a298',
  brandColorPrimaryRed: '#da291c',
  headerWeight: 600,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const styles = {
      a: {
        color: options.bodyColor,
      },
      'a:hover': {
        color: options.brandColorPrimaryRed,
      },
      figcaption: {
        ...scale(-1 / 5),
        marginBottom: rhythm(1),
        textAlign: 'center',
      },
      blockquote: {
        ...scale(0.2),
        fontWeight: '400',
        color: '#777777',
        paddingLeft: rhythm(5 / 4),
        marginLeft: 0,
        marginRight: 0,
      },
      'blockquote p': {
        lineHeight: 1.5,
      },
      'h1:not(:first-child),h2:not(:first-child),h3:not(:first-child),h4:not(:first-child),h5:not(:first-child),h6:not(:first-child)': {
        marginTop: rhythm(1.75),
        marginBottom: rhythm(1),
      },
      h2: {
        ...scale(0.35),
      },
      h4: {
        ...scale(0.25),
      },
      table: {
        ...scale(-1 / 5),
      },
      p: {
        lineHeight: 1.8,
        letterSpacing: '0.1em',
      },
      em: {
        color: options.brandColorPrimaryGreen,
        fontWeight: '600',
        fontStyle: 'normal',
      },
      li: {
        lineHeight: 1.8,
        letterSpacing: '0.1em',
        marginBottom: rhythm(1 / 8),
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
