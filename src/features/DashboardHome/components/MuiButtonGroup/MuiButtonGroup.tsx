import { Box, ButtonGroup, Button, Typography } from '@mui/material'
import { rootSx } from './style'

export default function MuiButtonGroup() {
    return (
        <Box className="MuiButtonGroup_root" sx={rootSx}>
            <Box className="MuiButtonGroup_body">
                <Box className="MuiButtonGroup_body_text">
                    <Typography variant="h4">기본 버튼 그룹</Typography>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </Box>
                <Box className="MuiButtonGroup_body_text">
                    <Typography variant="h4">기본 버튼 그룹 변형 </Typography>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </Box>
    )
}
