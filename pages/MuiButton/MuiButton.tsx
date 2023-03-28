import { PhotoCamera } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { rootSx } from './style'

export default function MuiButton() {
    return (
        <Box className="MuiButton-root" sx={rootSx}>
            <Box className="MuiButton-test">
                <Typography variant="h4">기본 버튼 : </Typography>
                <Box>
                    <Button variant="text">기본값</Button>
                    <Button variant="contained">채움</Button>
                    <Button variant="outlined">윤각선</Button>
                </Box>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">비활성/링크(채움) : </Typography>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">비활성/링크(윤곽선) : </Typography>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">클릭처리 : </Typography>
                <Button
                    onClick={() => {
                        alert('clicked')
                    }}
                >
                    Click me
                </Button>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">클릭처리 : </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">
                        Success
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                </Stack>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">크기 : </Typography>
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                    </div>
                    <div>
                        <Button variant="outlined" size="small">
                            Small
                        </Button>
                        <Button variant="outlined" size="medium">
                            Medium
                        </Button>
                        <Button variant="outlined" size="large">
                            Large
                        </Button>
                    </div>
                    <div>
                        <Button variant="contained" size="small">
                            Small
                        </Button>
                        <Button variant="contained" size="medium">
                            Medium
                        </Button>
                        <Button variant="contained" size="large">
                            Large
                        </Button>
                    </div>
                </Box>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">크기 : </Typography>
                <Box sx={{ '& button': { m: 1 } }}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Upload
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Stack>
                </Box>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">아이콘 : </Typography>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Box>
            <Box className="MuiButton-test">
                <Typography variant="h4">아이콘 :</Typography>
                <Stack direction="row" spacing={1}>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="delete" disabled color="primary">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add an alarm">
                        <AlarmIcon />
                    </IconButton>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Stack>
            </Box>
            <Box className="MuiButton-test"></Box>
            <Box className="MuiButton-test"></Box>
        </Box>
    )
}
