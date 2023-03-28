import * as React from 'react'
import { FavoriteBorder } from '@mui/icons-material'
import { Box, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { rootSx } from './style'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export default function MuiCheckBox() {
    const [checked, setChecked] = React.useState([true, false])

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, event.target.checked])
    }

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]])
    }

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked])
    }
    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
            <FormControlLabel label="Child 1" control={<Checkbox checked={checked[0]} onChange={handleChange2} />} />
            <FormControlLabel label="Child 2" control={<Checkbox checked={checked[1]} onChange={handleChange3} />} />
        </Box>
    )
    return (
        <Box className="MuiCheckBox_root" sx={rootSx}>
            <Box className="MuiCheckBox_body">
                <Box className="MuiCheckBox_body_text">
                    <Typography variant="h4">기본 체크박스</Typography>
                    <Box className="Contents_Box">
                        <Checkbox {...label} defaultChecked />
                        <Checkbox {...label} />
                        <Checkbox {...label} disabled />
                        <Checkbox {...label} disabled checked />
                    </Box>
                </Box>
                <Box className="MuiCheckBox_body_text">
                    <Typography variant="h4">기본 체크박스 텍스트</Typography>
                    <Box className="Contents_Box">
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                        </FormGroup>
                    </Box>
                </Box>
                <Box className="MuiCheckBox_body_text">
                    <Typography variant="h4">좋아요 표시</Typography>
                    <Box className="Contents_Box">
                        <Checkbox {...label} color="warning" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                        <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
                    </Box>
                </Box>
                <Box className="MuiCheckBox_body_text">
                    <Typography variant="h4">전체동의</Typography>
                    <Box className="Contents_Box">
                        <div>
                            <FormControlLabel
                                label="Parent"
                                control={
                                    <Checkbox
                                        checked={checked[0] && checked[1]}
                                        indeterminate={checked[0] !== checked[1]}
                                        onChange={handleChange1}
                                    />
                                }
                            />
                            {children}
                        </div>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
