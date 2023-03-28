import * as React from 'react'
import { pink } from '@mui/material/colors'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Button, FormHelperText, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { rootSx } from './style'

export default function MuiRadio() {
    const [selectedValue, setSelectedValue] = React.useState('a')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value)
    }
    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    })

    const [value, setValue] = React.useState('')
    const [error, setError] = React.useState(false)
    const [helperText, setHelperText] = React.useState('Choose wisely')

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value)
        setHelperText(' ')
        setError(false)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (value === 'best') {
            setHelperText('You got it!')
            setError(false)
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!')
            setError(true)
        } else {
            setHelperText('Please select an option.')
            setError(true)
        }
    }

    return (
        <Box className="MuiRadioRoot" sx={rootSx}>
            <Box className="MuiFAB_body">
                <Box className="MuiRadio_body_text">
                    <Typography variant="h4">기본 라디오 버튼</Typography>
                    <Box className="Contents_Box">
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </Box>
                <Box className="MuiRadio_body_text">
                    <Typography variant="h4">라디오 색상 조절</Typography>
                    <Box className="Contents_Box">
                        <div>
                            <Radio {...controlProps('a')} />
                            <Radio {...controlProps('b')} color="secondary" />
                            <Radio {...controlProps('c')} color="success" />
                            <Radio {...controlProps('d')} color="default" />
                            <Radio
                                {...controlProps('e')}
                                sx={{
                                    color: pink[800],
                                    '&.Mui-checked': {
                                        color: pink[600],
                                    },
                                }}
                            />
                        </div>
                    </Box>
                </Box>
                <Box className="MuiRadio_body_text">
                    <Typography variant="h4">라디오 색상 조절</Typography>
                    <Box className="Contents_Box">
                        <div>
                            {' '}
                            <FormControl>
                                <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-form-control-label-placement"
                                    name="position"
                                    defaultValue="top"
                                >
                                    <FormControlLabel
                                        value="top"
                                        control={<Radio />}
                                        label="Top"
                                        labelPlacement="top"
                                    />
                                    <FormControlLabel
                                        value="start"
                                        control={<Radio />}
                                        label="Start"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="bottom"
                                        control={<Radio />}
                                        label="Bottom"
                                        labelPlacement="bottom"
                                    />
                                    <FormControlLabel value="end" control={<Radio />} label="End" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Box>
                </Box>
                <Box className="MuiRadio_body_text">
                    <Typography variant="h4">라디오 색상 조절</Typography>
                    <Box className="Contents_Box">
                        <form onSubmit={handleSubmit}>
                            <FormControl sx={{ m: 3 }} error={error} variant="standard">
                                <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="quiz"
                                    value={value}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel value="best" control={<Radio />} label="The best!" />
                                    <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                                </RadioGroup>
                                <FormHelperText>{helperText}</FormHelperText>
                                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                                    Check Answer
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
