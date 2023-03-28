import React from 'react'
import { Box, Typography, Stack, styled, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Rating, { IconContainerProps } from '@mui/material/Rating'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied'
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied'
import { rootSx } from './style'

const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
}
// 아이콘 변경
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
})
// 라디오 그룹
const StyledRating2 = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}))
const customIcons: {
    [index: string]: {
        icon: React.ReactElement
        label: string
    }
} = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
}
function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props
    return <span {...other}>{customIcons[value].icon}</span>
}
//
function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
}

export default function MuiRating() {
    const [value, setValue] = React.useState<number | null>(2)
    const [hover, setHover] = React.useState(-1)

    return (
        <Box className="MuiRatingRoot" sx={rootSx}>
            <Box className="MuiRatingHead">
                <Typography variant="h1">등급 버튼</Typography>
            </Box>
            <Box className="MuiRatingBody">
                <Box className="MuiRatingContents">
                    <Typography variant="h4">기본 등급 버튼</Typography>
                    <Box className="ContentsBox">
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Typography component="legend">Controlled</Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue)
                                }}
                            />
                            <Typography component="legend">Read only</Typography>
                            <Rating name="read-only" value={value} readOnly />
                            <Typography component="legend">Disabled</Typography>
                            <Rating name="disabled" value={value} disabled />
                            <Typography component="legend">No rating given</Typography>
                            <Rating name="no-value" value={null} />
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiRatingContents">
                    <Typography variant="h4">등급 단위 설정</Typography>
                    <Box className="ContentsBox">
                        <Stack spacing={1}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </Box>
                </Box>
                <Box className="MuiRatingContents">
                    <Typography variant="h4">등급 단위별 레이블 설정</Typography>
                    <Box className="ContentsBox">
                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                getLabelText={getLabelText}
                                onChange={(event, newValue) => {
                                    setValue(newValue)
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover)
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                            />
                            {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiRatingContents">
                    <Typography variant="h4">아이콘 변경 및 개수 변경</Typography>
                    <Box className="ContentsBox">
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Typography component="legend">Custom icon and color</Typography>
                            <StyledRating
                                name="customized-color"
                                defaultValue={2}
                                getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            />
                            <Typography component="legend">10 stars</Typography>
                            <Rating name="customized-10" defaultValue={2} max={10} />
                        </Box>
                    </Box>
                </Box>
                <Box className="MuiRatingContents">
                    <Typography variant="h4">라디오 그룹</Typography>
                    <Box className="ContentsBox">
                        <StyledRating2
                            name="highlight-selected-only"
                            defaultValue={2}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value: number) => customIcons[value].label}
                            highlightSelectedOnly
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
