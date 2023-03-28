import * as React from 'react'
import Box from '@mui/material/Box'
import { TextField, Typography } from '@mui/material'
import { rootSx } from './style'

// function valueLabelFormat(value: number) {
//     return marks.findIndex((mark) => mark.value === value) + 1
// }
export default function MuiTextField() {
    return (
        <Box className="MuiTextFieldRoot" sx={rootSx}>
            <Box className="MuiTextFieldHead">
                <Typography variant="h1">텍스트박스</Typography>
            </Box>
            <Box className="MuiTextFieldBody">
                <Box className="MuiTextFieldContents">
                    <Typography variant="h4">기본 텍스트박스</Typography>
                    <Box className="ContentsBox">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch', backgroundColor: 'white' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="standard-basic" label="Standard" variant="standard" />
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiTextFieldContents">
                    <Typography variant="h4">기본 텍스트박스</Typography>
                    <Box
                        className="ContentsBox"
                        sx={{
                            '& .Contents': { width: '30%' },
                        }}
                    >
                        <Box className="Contents">
                            <TextField required id="outlined-required" label="Required" defaultValue="Hello World" />
                            <TextField disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World" />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                            <TextField
                                id="outlined-read-only-input"
                                label="Read Only"
                                defaultValue="Hello World"
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            <TextField
                                id="outlined-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField id="outlined-search" label="Search field" type="search" />
                            <TextField
                                id="outlined-helperText"
                                label="Helper text"
                                defaultValue="Default Value"
                                helperText="Some important text"
                            />
                        </Box>
                        <Box className="Contents" sx={{ style: { width: '33%' } }}>
                            <TextField
                                required
                                id="filled-required"
                                label="Required"
                                defaultValue="Hello World"
                                variant="filled"
                            />
                            <TextField
                                disabled
                                id="filled-disabled"
                                label="Disabled"
                                defaultValue="Hello World"
                                variant="filled"
                            />
                            <TextField
                                id="filled-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="filled"
                            />
                            <TextField
                                id="filled-read-only-input"
                                label="Read Only"
                                defaultValue="Hello World"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="filled"
                            />
                            <TextField
                                id="filled-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="filled"
                            />
                            <TextField id="filled-search" label="Search field" type="search" variant="filled" />
                            <TextField
                                id="filled-helperText"
                                label="Helper text"
                                defaultValue="Default Value"
                                helperText="Some important text"
                                variant="filled"
                            />
                        </Box>
                        <Box className="Contents">
                            <TextField
                                required
                                id="standard-required"
                                label="Required"
                                defaultValue="Hello World"
                                variant="standard"
                            />
                            <TextField
                                disabled
                                id="standard-disabled"
                                label="Disabled"
                                defaultValue="Hello World"
                                variant="standard"
                            />
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField
                                id="standard-read-only-input"
                                label="Read Only"
                                defaultValue="Hello World"
                                InputProps={{
                                    readOnly: true,
                                }}
                                variant="standard"
                            />
                            <TextField
                                id="standard-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <TextField id="standard-search" label="Search field" type="search" variant="standard" />
                            <TextField
                                id="standard-helperText"
                                label="Helper text"
                                defaultValue="Default Value"
                                helperText="Some important text"
                                variant="standard"
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiTextFieldContents">
                    <Typography variant="h4">기본 텍스트박스</Typography>
                    <Box className="ContentsBox">
                        <Box className="Contents">
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
                                    <TextField
                                        error
                                        id="outlined-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                    />
                                </div>
                                <div>
                                    <TextField
                                        error
                                        id="filled-error"
                                        label="Error"
                                        defaultValue="Hello World"
                                        variant="filled"
                                    />
                                    <TextField
                                        error
                                        id="filled-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        variant="filled"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        error
                                        id="standard-error"
                                        label="Error"
                                        defaultValue="Hello World"
                                        variant="standard"
                                    />
                                    <TextField
                                        error
                                        id="standard-error-helper-text"
                                        label="Error"
                                        defaultValue="Hello World"
                                        helperText="Incorrect entry."
                                        variant="standard"
                                    />
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
