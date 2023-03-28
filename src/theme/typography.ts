import { Palette } from '@mui/material/styles'

const typography = (palette: Palette) => ({
    fontFamily: [
        'Noto Sans KR', //
        '나눔스퀘어라운드',
        '맑은 고딕',
        'sans-serif',
        'Nanum Gothic Coding',
        'y_spotlight',
    ]
        .map((it) => `'${it}'`)
        .join(','),
    h1: {
        // color: palette.text.primary,
        fontWeight: 600,
        fontSize: '2.188rem',
        letterSpacing: '-0.24px',
        lineHeight: '2.5rem',
    },
    h2: {
        // color: palette.text.primary,
        fontWeight: 600,
        fontSize: '1.813rem',
        letterSpacing: '-0.24px',
        lineHeight: '2rem',
    },
    h3: {
        // color: palette.text.primary,
        fontWeight: 600,
        fontSize: '1.5rem',
        letterSpacing: '0.5px',
        lineHeight: '1.75rem',
    },
    h4: {
        // color: palette.text.primary,
        fontWeight: 600,
        fontSize: '1.25rem',
        letterSpacing: '0.5px',
        lineHeight: '1.5rem',
    },
    h5: {
        // color: palette.text.primary,
        fontWeight: 600,
        fontSize: '1rem',
        letterSpacing: '0.5px',
        lineHeight: '1.313rem',
    },
    h6: {
        // color: palette.text.primary,
        fontWeight: 600,
        fontSize: '0.875rem',
        letterSpacing: '0.5px',
        lineHeight: '1.313rem',
    },
    subtitle1: {
        // color: palette.text.primary,
        fontSize: '1rem',
        letterSpacing: '0.5px',
        lineHeight: '1.563rem',
    },
    subtitle2: {
        // color: palette.text.primary,
        fontSize: '0.875rem',
        letterSpacing: 0,
        lineHeight: '1rem',
    },
    body1: {
        // color: palette.text.primary,
        fontSize: '0.85rem',
        // letterSpacing: '-0.05px',
        lineHeight: '1.313rem',
    },
    body2: {
        // color: palette.text.primary,
        fontSize: '0.82rem',
        letterSpacing: '-0.04px',
        lineHeight: '0.95rem',
    },
    button: {
        color: palette.text.primary,
        fontSize: '0.875rem',
    },
    caption: {
        color: palette.text.disabled,
        fontSize: '0.75rem',
        letterSpacing: '0.3px',
        lineHeight: '1rem',
    },
})

export default typography
