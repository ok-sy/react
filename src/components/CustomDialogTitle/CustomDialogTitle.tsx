import { arraySx } from '@/lib/sx-props'
import { Close as CloseIcon } from '@mui/icons-material'
import { Box, IconButton, SxProps, Typography } from '@mui/material'
import clsx from 'clsx'
import { rootSx } from './style'

type Props = {
    sx?: SxProps
    className?: string
    onClickClose: () => void
    title?: React.ReactNode
}

export default function CustomDialogTitle(props: Props) {
    const { sx, className, title, onClickClose } = props

    const handleClickClose = () => {
        onClickClose()
    }

    return (
        <Box className={clsx('CustomDialogTitle-titleBox', className)} sx={[rootSx, ...arraySx(sx)]}>
            <Typography variant="h6">{title}</Typography>
            <IconButton onClick={handleClickClose}>
                <CloseIcon />
            </IconButton>
        </Box>
    )
}
