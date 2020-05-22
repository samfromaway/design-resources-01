const CssAnimations1 = [
  {
    title: 'Animate.css',
    link: 'https://animate.style/',
    desc: ' Just-add-water CSS animations',
  },
  {
    title: 'Bounce.js',
    link: 'http://bouncejs.com/',
    desc:
      ' Bounce.js is a tool and JS library that lets you create beautiful CSS3 powered animations ',
  },
  {
    title: 'Anime.js',
    link: 'https://animejs.com/',
    desc:
      ' is a lightweight JavaScript animation library with a simple, yet powerful API. It works with CSS properties, SVG, DOM attributes and JavaScript',
  },
  {
    title: 'Magic Animations',
    link: 'https://www.minimamente.com/project/magic/',
    desc:
      ' Animations has been one of the most impressive animation libraries available',
  },
  {
    title: 'Zdog',
    link: 'https://zzz.dog/',
    desc: ' Round, flat, designer-friendly pseudo-3D engine for canvas & ',
  },
  {
    title: 'CSShake',
    link: 'http://elrumordelaluz.github.io/csshake/',
    desc:
      ' CSShake delivers exactly what it says on the box — a CSS library designed specifically for shaking elements within your web page',
  },
  {
    title: 'Hover.css',
    link: 'http://ianlunn.github.io/Hover/',
    desc:
      ' Hover.css is a CSS animation library designed for use with buttons and other UI elements in your website',
  },
  {
    title: 'AniJS',
    link: 'http://anijs.github.io/',
    desc:
      ' AniJS is an animation library that allows you to add animations to elements in a simple ‘sentence-like’ structure',
  },
  {
    title: 'Animista',
    link: 'http://animista.net/',
    desc: ' CSS Animations On Demand',
  },
  {
    title: 'Tachyons-animate',
    link: 'https://github.com/anater/tachyons-animate',
    desc:
      ' Tachyons itself is an atomic CSS library with a ton of utility classes for essentially designing anything by adding classes to what you need ',
  },
  {
    title: 'Sequence.js',
    link: 'https://www.sequencejs.com/',
    desc:
      ' Sequence.js is a JavaScript library that provides a responsive CSS framework for creating unique sliders, presentations, banners, and other step-based applications ',
  },
  {
    title: 'Infinite',
    link: 'https://tilomitra.github.io/infinite/',
    desc:
      ' These animations, like rotations and pulses, that are specifically designed to run and repeat forever',
  },
  {
    title: 'OBNOXIOUS.CSS',
    link: 'http://tholman.com/obnoxious/',
    desc: ' Animations for the strong of heart, and weak of mind',
  },
  {
    title: 'MOTION UI',
    link: 'https://zurb.com/playground/motion-ui',
    desc:
      ' A Sass library for creating flexible CSS transitions and animations',
  },
];

const CATEGORY = 'CSS Animations';

const CssAnimations = CssAnimations1.map((e, index) => ({
  ...e,
  category: CATEGORY,
  id: CATEGORY.toLowerCase().split(' ').join('') + index,
}));

export default CssAnimations;
