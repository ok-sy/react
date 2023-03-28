import * as React from 'react'
import Box from '@mui/material/Box'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import Divider from '@mui/material/Divider'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import Link from 'next/link'

import ListSubheader from '@mui/material/ListSubheader'
import { rootSx } from './style'
import Collapse from '@mui/material/Collapse'

export default function MuiList() {
    const [open, setOpen] = React.useState(true)

    const handleClick = () => {
        setOpen(!open)
    }
    return (
        <Box className="MuiListRoot" sx={rootSx}>
            <Box className="MuiListHead">
                <Typography variant="h1">리스트</Typography>
            </Box>
            <Box className="MuiListBody">
                <Box className="MuiListContents">
                    <Typography variant="h4">기본 리스트</Typography>
                    <Box className="ContentsBox">
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <nav aria-label="main mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Inbox" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <DraftsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Drafts" />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                            <Divider />
                            <nav aria-label="secondary mailbox folders">
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary="Trash" />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton component="a" href="#Mui">
                                            <Link href={{ pathname: '../MuiButton' }} passHref>
                                                <ListItemText primary="Spam" />
                                            </Link>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </nav>
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiListContents">
                    <Box className="MuiListContents">
                        <Typography variant="h4">기본 리스트</Typography>
                        <Box className="ContentsBox">
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Nested List Items
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SendIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sent mail" />
                                </ListItemButton>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DraftsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary="Starred" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
