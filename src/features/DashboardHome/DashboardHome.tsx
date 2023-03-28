import { Box } from '@mui/material'
import MuiButton from '../../../pages/MuiButton'
import MuiButtonGroup from './components/MuiButtonGroup'
// eslint-disable-next-line import/default
import MuiCheckBox from './components/MuiCheckBox'
import MuiFloatingActionButton from './components/MuiFloatingActionButton'
import MuiList from './components/MuiList'
import MuiRadio from './components/MuiRadio'
import MuiRating from './components/MuiRating'
import MuiSelect from './components/MuiSelect'
import MuiSlider from './components/MuiSlider'
import MuiTextField from './components/MuiTextField'
import MuiTransferList from './components/MuiTransferList'

export default function DashboardHome() {
    return (
        <Box sx={{ m: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <h1>DashBoard</h1>
            <MuiButton />
            <MuiButtonGroup />
            <MuiCheckBox />
            <MuiFloatingActionButton />
            <MuiRadio />
            <MuiRating />
            <MuiSelect />
            <MuiSlider />
            <MuiTextField />
            <MuiTransferList />
            <MuiList />
        </Box>
    )
}
