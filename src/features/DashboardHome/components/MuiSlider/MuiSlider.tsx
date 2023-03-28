import * as React from 'react'
import Box from '@mui/material/Box'
import { Slider, Stack, Typography } from '@mui/material'
import { VolumeDown, VolumeUp } from '@mui/icons-material'
import { rootSx } from './style'

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
]

function valuetext(value: number) {
    return `${value}°C`
}
function valueLabelFormat(value: number) {
    return marks.find((mark) => mark.value === value).label
}
// function valueLabelFormat(value: number) {
//     return marks.findIndex((mark) => mark.value === value) + 1
// }
export default function MuiSlier() {
    const [value, setValue] = React.useState<number>(30)
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number)
    }
    return (
        <Box className="MuiSiderRoot" sx={rootSx}>
            <Box className="MuiSliderHead">
                <Typography variant="h1">슬라이더</Typography>
            </Box>
            <Box className="MuiSliderBody">
                <Box className="MuiSliderContents">
                    <Typography variant="h4">연속 슬라이더</Typography>
                    <Box className="ContentsBox">
                        <Box sx={{ width: 200 }}>
                            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                <VolumeDown />
                                <Slider aria-label="Volume" value={value} onChange={handleChange} />
                                <VolumeUp />
                            </Stack>
                            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiSliderContents">
                    <Typography variant="h4">슬라이더 마킹</Typography>
                    <Box className="ContentsBox">
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={30}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={10}
                                marks
                                min={10}
                                max={110}
                            />
                            <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiSliderContents">
                    <Typography variant="h4">마크 고정</Typography>
                    <Box className="ContentsBox">
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Restricted values"
                                defaultValue={20}
                                valueLabelFormat={valueLabelFormat}
                                getAriaValueText={valuetext}
                                step={null}
                                valueLabelDisplay="auto"
                                marks={marks}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
