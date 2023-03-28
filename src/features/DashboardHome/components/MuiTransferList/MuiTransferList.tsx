import * as React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import Card from '@mui/material/Card'
import { rootSx } from './style'

function not(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.indexOf(value) === -1)
}

function intersection(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.indexOf(value) !== -1)
}
// 전체선택 TransferList
function not2(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.indexOf(value) === -1)
}

function intersection2(a: readonly number[], b: readonly number[]) {
    return a.filter((value) => b.indexOf(value) !== -1)
}

function union(a: readonly number[], b: readonly number[]) {
    return [...a, ...not(b, a)]
}
export default function MuiTransferList() {
    const [checked, setChecked] = React.useState<readonly number[]>([])
    const [left, setLeft] = React.useState<readonly number[]>([0, 1, 2, 3])
    const [right, setRight] = React.useState<readonly number[]>([4, 5, 6, 7])

    const leftChecked = intersection(checked, left)
    const rightChecked = intersection(checked, right)

    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const handleAllRight = () => {
        setRight(right.concat(left))
        setLeft([])
    }

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked))
        setLeft(not(left, leftChecked))
        setChecked(not(checked, leftChecked))
    }

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked))
        setRight(not(right, rightChecked))
        setChecked(not(checked, rightChecked))
    }

    const handleAllLeft = () => {
        setLeft(left.concat(right))
        setRight([])
    }

    const customList = (items: readonly number[]) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value: number) => {
                    const labelId = `transfer-list-item-${value}-label`
                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    )
                })}
            </List>
        </Paper>
    )
    // 전체선택 TransferList
    const [checked2, setChecked2] = React.useState<readonly number[]>([])
    const [left2, setLeft2] = React.useState<readonly number[]>([0, 1, 2, 3])
    const [right2, setRight2] = React.useState<readonly number[]>([4, 5, 6, 7])

    const leftChecked2 = intersection2(checked2, left2)
    const rightChecked2 = intersection2(checked2, right2)

    const handleToggle2 = (value: number) => () => {
        const currentIndex2 = checked2.indexOf(value)
        const newChecked2 = [...checked2]

        if (currentIndex2 === -1) {
            newChecked2.push(value)
        } else {
            newChecked2.splice(currentIndex2, 1)
        }

        setChecked2(newChecked2)
    }

    const numberOfChecked = (items: readonly number[]) => intersection2(checked2, items).length

    const handleToggleAll = (items: readonly number[]) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked2(not2(checked2, items))
        } else {
            setChecked2(union(checked2, items))
        }
    }

    const handleCheckedRight2 = () => {
        setRight2(right2.concat(leftChecked2))
        setLeft2(not2(left2, leftChecked2))
        setChecked2(not2(checked2, leftChecked2))
    }

    const handleCheckedLeft2 = () => {
        setLeft2(left2.concat(rightChecked2))
        setRight2(not2(right2, rightChecked2))
        setChecked2(not2(checked2, rightChecked2))
    }

    const customList2 = (title: React.ReactNode, items: readonly number[]) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                        disabled={items.length === 0}
                        inputProps={{
                            'aria-label': 'all items selected',
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: 200,
                    height: 230,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((value: number) => {
                    const labelId = `transfer-list-all-item-${value}-label`

                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle2(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked2.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItem>
                    )
                })}
            </List>
        </Card>
    )

    return (
        <Box className="MuiTransferListRoot" sx={rootSx}>
            <Box className="MuiTransferListHead">
                <Typography variant="h1">리스트 변환</Typography>
            </Box>
            <Box className="MuiTransferListBody">
                <Box className="MuiTransferListContents">
                    <Typography variant="h4">기본 리스트 변환</Typography>
                    <Box className="ContentsBox">
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customList(left)}</Grid>
                            <Grid item>
                                <Grid container direction="column" alignItems="center">
                                    <Button
                                        sx={{ my: 0.5 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleAllRight}
                                        disabled={left.length === 0}
                                        aria-label="move all right"
                                    >
                                        ≫
                                    </Button>
                                    <Button
                                        sx={{ my: 0.5 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleCheckedRight}
                                        disabled={leftChecked.length === 0}
                                        aria-label="move selected right"
                                    >
                                        &gt;
                                    </Button>
                                    <Button
                                        sx={{ my: 0.5 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleCheckedLeft}
                                        disabled={rightChecked.length === 0}
                                        aria-label="move selected left"
                                    >
                                        &lt;
                                    </Button>
                                    <Button
                                        sx={{ my: 0.5 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleAllLeft}
                                        disabled={right.length === 0}
                                        aria-label="move all left"
                                    >
                                        ≪
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item>{customList(right)}</Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box className="MuiTransferListContents">
                    <Typography variant="h4">기본 리스트 변환</Typography>
                    <Box className="ContentsBox">
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item>{customList2('Choices2', left2)}</Grid>
                            <Grid item>
                                <Grid container direction="column" alignItems="center">
                                    <Button
                                        sx={{ my: 0.5 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleCheckedRight2}
                                        disabled={leftChecked2.length === 0}
                                        aria-label="move selected right"
                                    >
                                        &gt;
                                    </Button>
                                    <Button
                                        sx={{ my: 0.5 }}
                                        variant="outlined"
                                        size="small"
                                        onClick={handleCheckedLeft2}
                                        disabled={rightChecked2.length === 0}
                                        aria-label="move selected left"
                                    >
                                        &lt;
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item>{customList2('Chosen2', right2)}</Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
