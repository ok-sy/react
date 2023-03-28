import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { Typography } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import { rootSx } from './style'

// NATIVE NAME 목록
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]
export default function MuiSelect() {
    const [age, setAge] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string)
    }
    const [age2, setAge2] = React.useState('')

    const handleChange2 = (event: SelectChangeEvent) => {
        setAge2(event.target.value as string)
    }

    // NATIVE
    const [personName, setPersonName] = React.useState<string[]>([])
    const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.target
        const value: string[] = []
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }
        setPersonName(value)
    }

    return (
        <Box className="MuiSelectRoot" sx={rootSx}>
            <Box className="MuiSelectHead">
                <Typography variant="h1">선택 창</Typography>
            </Box>
            <Box className="MuiSelectBody">
                <Box className="MuiSelectContents">
                    <Typography variant="h4">기본 선택 창</Typography>
                    <Box className="ContentsBox">
                        <Box sx={{ minWidth: 120, backgroundColor: 'white' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiSelectContents">
                    <Typography variant="h4">넓이 자동조절</Typography>
                    <Box className="ContentsBox">
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: 'white' }}>
                                <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={age2}
                                    onChange={handleChange2}
                                    autoWidth
                                    label="Age2"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={21}>Twenty one</MenuItem>
                                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Box>
                </Box>
                <Box className="MuiSelectContents">
                    <Typography variant="h4">기본 선택 창</Typography>
                    <Box className="ContentsBox">
                        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
                            <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-disabled-label"
                                id="demo-simple-select-disabled"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Disabled</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} error>
                            <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-error-label"
                                id="demo-simple-select-error"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                renderValue={(value) => `⚠️  - ${value}`}
                                style={{ backgroundColor: 'white' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Error</FormHelperText>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-readonly-label"
                                id="demo-simple-select-readonly"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                inputProps={{ readOnly: true }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Read only</FormHelperText>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={age}
                                label="Age *"
                                onChange={handleChange}
                                style={{ backgroundColor: 'white' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </Box>
                </Box>
                <Box className="MuiSelectContents">
                    <Typography variant="h4">NATIVE</Typography>
                    <Box className="ContentsBox">
                        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300, backgroundColor: 'white' }}>
                            <InputLabel shrink htmlFor="select-multiple-native">
                                Native
                            </InputLabel>
                            <Select
                                multiple
                                native
                                value={personName}
                                // @ts-ignore Typings are not considering `native`
                                onChange={handleChangeMultiple}
                                label="Native"
                                inputProps={{
                                    id: 'select-multiple-native',
                                }}
                            >
                                {names.map((name) => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
