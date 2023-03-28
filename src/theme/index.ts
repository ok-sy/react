import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import typography from './typography'

// Create a theme instance.
const theme = createTheme({
    typography,
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
})

export default theme
