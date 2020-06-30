module.exports = {
  purge: [],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      'red-50': '#FFEBEE',
      'red-100': '#FFCDD2',
      'red-200': '#EF9A9A',
      'red-300': '#E57373',
      'red-400': '#EF5350',
      'red-500': '#F44336',
      'red-600': '#E53935',
      'red-700': '#D32F2F',
      'red-800': '#C62828',
      'red-900': '#B71C1C',
      'red-a100': '#FF8A80',
      'red-a200': '#FF5252',
      'red-a400': '#FF1744',
      'red-a700': '#D50000',

      'pink-50': '#FCE4EC',
      'pink-100': '#F8BBD0',
      'pink-200': '#F48FB1',
      'pink-300': '#F06292',
      'pink-400': '#EC407A',
      'pink-500': '#E91E63',
      'pink-600': '#D81B60',
      'pink-700': '#C2185B',
      'pink-800': '#AD1457',
      'pink-900': '#880E4F',
      'pink-a100': '#FF80AB',
      'pink-a200': '#FF4081',
      'pink-a400': '#F50057',
      'pink-a700': '#C51162',

      'purple-50': '#F3E5F5',
      'purple-100': '#E1BEE7',
      'purple-200': '#CE93D8',
      'purple-300': '#BA68C8',
      'purple-400': '#AB47BC',
      'purple-500': '#9C27B0',
      'purple-600': '#8E24AA',
      'purple-700': '#7B1FA2',
      'purple-800': '#6A1B9A',
      'purple-900': '#4A148C',
      'purple-a100': '#EA80FC',
      'purple-a200': '#E040FB',
      'purple-a400': '#D500F9',
      'purple-a700': '#AA00FF',

      'deep-purple-50': '#EDE7F6',
      'deep-purple-100': '#D1C4E9',
      'deep-purple-200': '#B39DDB',
      'deep-purple-300': '#9575CD',
      'deep-purple-400': '#7E57C2',
      'deep-purple-500': '#673AB7',
      'deep-purple-600': '#5E35B1',
      'deep-purple-700': '#512DA8',
      'deep-purple-800': '#4527A0',
      'deep-purple-900': '#311B92',
      'deep-purple-a100': '#B388FF',
      'deep-purple-a200': '#7C4DFF',
      'deep-purple-a400': '#651FFF',
      'deep-purple-a700': '#6200EA',

      'indigo-50': '#E8EAF6',
      'indigo-100': '#C5CAE9',
      'indigo-200': '#9FA8DA',
      'indigo-300': '#7986CB',
      'indigo-400': '#5C6BC0',
      'indigo-500': '#3F51B5',
      'indigo-600': '#3949AB',
      'indigo-700': '#303F9F',
      'indigo-800': '#283593',
      'indigo-900': '#1A237E',
      'indigo-a100': '#8C9EFF',
      'indigo-a200': '#536DFE',
      'indigo-a400': '#3D5AFE',
      'indigo-a700': '#304FFE',

      'blue-50': '#E3F2FD',
      'blue-100': '#BBDEFB',
      'blue-200': '#90CAF9',
      'blue-300': '#64B5F6',
      'blue-400': '#42A5F5',
      'blue-500': '#2196F3',
      'blue-600': '#1E88E5',
      'blue-700': '#1976D2',
      'blue-800': '#1565C0',
      'blue-900': '#0D47A1',
      'blue-a100': '#82B1FF',
      'blue-a200': '#448AFF',
      'blue-a400': '#2979FF',
      'blue-a700': '#2962FF',

      'light-blue-50': '#E1F5FE',
      'light-blue-100': '#B3E5FC',
      'light-blue-200': '#81D4FA',
      'light-blue-300': '#4FC3F7',
      'light-blue-400': '#29B6F6',
      'light-blue-500': '#03A9F4',
      'light-blue-600': '#039BE5',
      'light-blue-700': '#0288D1',
      'light-blue-800': '#0277BD',
      'light-blue-900': '#01579B',
      'light-blue-a100': '#80D8FF',
      'light-blue-a200': '#40C4FF',
      'light-blue-a400': '#00B0FF',
      'light-blue-a700': '#0091EA',

      'cyan-50': '#E0F7FA',
      'cyan-100': '#B2EBF2',
      'cyan-200': '#80DEEA',
      'cyan-300': '#4DD0E1',
      'cyan-400': '#26C6DA',
      'cyan-500': '#00BCD4',
      'cyan-600': '#00ACC1',
      'cyan-700': '#0097A7',
      'cyan-800': '#00838F',
      'cyan-900': '#006064',
      'cyan-a100': '#84FFFF',
      'cyan-a200': '#18FFFF',
      'cyan-a400': '#00E5FF',
      'cyan-a700': '#00B8D4',

      'teal-50': '#E0F2F1',
      'teal-100': '#B2DFDB',
      'teal-200': '#80CBC4',
      'teal-300': '#4DB6AC',
      'teal-400': '#26A69A',
      'teal-500': '#009688',
      'teal-600': '#00897B',
      'teal-700': '#00796B',
      'teal-800': '#00695C',
      'teal-900': '#004D40',
      'teal-a100': '#A7FFEB',
      'teal-a200': '#64FFDA',
      'teal-a400': '#1DE9B6',
      'teal-a700': '#00BFA5',

      'green-50': '#E8F5E9',
      'green-100': '#C8E6C9',
      'green-200': '#A5D6A7',
      'green-300': '#81C784',
      'green-400': '#66BB6A',
      'green-500': '#4CAF50',
      'green-600': '#43A047',
      'green-700': '#388E3C',
      'green-800': '#2E7D32',
      'green-900': '#1B5E20',
      'green-a100': '#B9F6CA',
      'green-a200': '#69F0AE',
      'green-a400': '#00E676',
      'green-a700': '#00C853',

      'light-green-50': '#F1F8E9',
      'light-green-100': '#DCEDC8',
      'light-green-200': '#C5E1A5',
      'light-green-300': '#AED581',
      'light-green-400': '#9CCC65',
      'light-green-500': '#8BC34A',
      'light-green-600': '#7CB342',
      'light-green-700': '#689F38',
      'light-green-800': '#558B2F',
      'light-green-900': '#33691E',
      'light-green-a100': '#CCFF90',
      'light-green-a200': '#B2FF59',
      'light-green-a400': '#76FF03',
      'light-green-a700': '#64DD17',

      'lime-50': '#F9FBE7',
      'lime-100': '#F0F4C3',
      'lime-200': '#E6EE9C',
      'lime-300': '#DCE775',
      'lime-400': '#D4E157',
      'lime-500': '#CDDC39',
      'lime-600': '#C0CA33',
      'lime-700': '#AFB42B',
      'lime-800': '#9E9D24',
      'lime-900': '#827717',
      'lime-a100': '#F4FF81',
      'lime-a200': '#EEFF41',
      'lime-a400': '#C6FF00',
      'lime-a700': '#AEEA00',

      'yellow-50': '#FFFDE7',
      'yellow-100': '#FFF9C4',
      'yellow-200': '#FFF59D',
      'yellow-300': '#FFF176',
      'yellow-400': '#FFEE58',
      'yellow-500': '#FFEB3B',
      'yellow-600': '#FDD835',
      'yellow-700': '#FBC02D',
      'yellow-800': '#F9A825',
      'yellow-900': '#F57F17',
      'yellow-a100': '#FFFF8D',
      'yellow-a200': '#FFFF00',
      'yellow-a400': '#FFEA00',
      'yellow-a700': '#FFD600',

      'amber-50': '#FFF8E1',
      'amber-100': '#FFECB3',
      'amber-200': '#FFE082',
      'amber-300': '#FFD54F',
      'amber-400': '#FFCA28',
      'amber-500': '#FFC107',
      'amber-600': '#FFB300',
      'amber-700': '#FFA000',
      'amber-800': '#FF8F00',
      'amber-900': '#FF6F00',
      'amber-a100': '#FFE57F',
      'amber-a200': '#FFD740',
      'amber-a400': '#FFC400',
      'amber-a700': '#FFAB00',

      'orange-50': '#FFF3E0',
      'orange-100': '#FFE0B2',
      'orange-200': '#FFCC80',
      'orange-300': '#FFB74D',
      'orange-400': '#FFA726',
      'orange-500': '#FF9800',
      'orange-600': '#FB8C00',
      'orange-700': '#F57C00',
      'orange-800': '#EF6C00',
      'orange-900': '#E65100',
      'orange-a100': '#FFD180',
      'orange-a200': '#FFAB40',
      'orange-a400': '#FF9100',
      'orange-a700': '#FF6D00',

      'deep-orange-50': '#FBE9E7',
      'deep-orange-100': '#FFCCBC',
      'deep-orange-200': '#FFAB91',
      'deep-orange-300': '#FF8A65',
      'deep-orange-400': '#FF7043',
      'deep-orange-500': '#FF5722',
      'deep-orange-600': '#F4511E',
      'deep-orange-700': '#E64A19',
      'deep-orange-800': '#D84315',
      'deep-orange-900': '#BF360C',
      'deep-orange-a100': '#FF9E80',
      'deep-orange-a200': '#FF6E40',
      'deep-orange-a400': '#FF3D00',
      'deep-orange-a700': '#DD2C00',

      'brown-50': '#EFEBE9',
      'brown-100': '#D7CCC8',
      'brown-200': '#BCAAA4',
      'brown-300': '#A1887F',
      'brown-400': '#8D6E63',
      'brown-500': '#795548',
      'brown-600': '#6D4C41',
      'brown-700': '#5D4037',
      'brown-800': '#4E342E',
      'brown-900': '#3E2723',

      'gray-50': '#FAFAFA',
      'gray-100': '#F5F5F5',
      'gray-200': '#EEEEEE',
      'gray-300': '#E0E0E0',
      'gray-400': '#BDBDBD',
      'gray-500': '#9E9E9E',
      'gray-600': '#757575',
      'gray-700': '#616161',
      'gray-800': '#424242',
      'gray-900': '#212121',

      'blue-gray-50': '#ECEFF1',
      'blue-gray-100': '#CFD8DC',
      'blue-gray-200': '#B0BEC5',
      'blue-gray-300': '#90A4AE',
      'blue-gray-400': '#78909C',
      'blue-gray-500': '#607D8B',
      'blue-gray-600': '#546E7A',
      'blue-gray-700': '#455A64',
      'blue-gray-800': '#37474F',
      'blue-gray-900': '#263238',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundOpacity: (theme) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor'),
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    },
    borderWidth: {
      default: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),
    fill: {
      current: 'currentColor',
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: '0',
      default: '1',
    },
    flexShrink: {
      0: '0',
      default: '1',
    },
    fontFamily: {
      sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      0: '0',
      auto: 'auto',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      0: '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      0: '0',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
    },
    padding: (theme) => theme('spacing'),
    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2',
    },
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
    },
    gap: (theme) => theme('spacing'),
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      180: '180deg',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      0: '0',
      3: '3deg',
      6: '6deg',
      12: '12deg',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms',
    },
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textOpacity: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
  },
  corePlugins: {},
  plugins: [],
};
