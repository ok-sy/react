import * as React from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NavigationIcon from '@mui/icons-material/Navigation'
import { Typography } from '@mui/material'
import { rootSx } from './style'

export default function MuiFloatingActionButton() {
    return (
        <Box className="MuiFAB_root" sx={rootSx}>
            <Box className="MuiFAB_body">
                <Box className="MuiFAB_body_text">
                    <Typography variant="h4">기본 플로팅 버튼</Typography>
                    <Box className="Contents_Box">
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon />
                        </Fab>
                        <Fab variant="extended">
                            <NavigationIcon sx={{ mr: 1 }} />
                            Navigate
                        </Fab>
                        <Fab disabled aria-label="like">
                            <FavoriteIcon />
                        </Fab>
                    </Box>
                </Box>
                <Box className="MuiFAB_body_text">
                    <Typography variant="h4">확장</Typography>
                    <Box className="Contents_Box">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab variant="extended" size="small" color="primary" aria-label="add">
                                <NavigationIcon sx={{ mr: 1 }} />
                                Extended
                            </Fab>
                            <Fab variant="extended" size="medium" color="primary" aria-label="add">
                                <NavigationIcon sx={{ mr: 1 }} />
                                Extended
                            </Fab>
                            <Fab variant="extended" color="primary" aria-label="add">
                                <NavigationIcon sx={{ mr: 1 }} />
                                Extended
                            </Fab>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
