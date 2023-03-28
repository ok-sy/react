import { TableBody, TableBodyProps } from '@mui/material'

type StyleProps = {
    loading?: boolean
    stripe?: boolean
}

type Props = StyleProps & TableBodyProps

export default function CustomTableBody(props: Props) {
    const { sx, loading, stripe, children, ...otherProps } = props

    return (
        <TableBody
            sx={{
                opacity: loading ? 0.5 : 1,
                '& .MuiTableRow-root:nth-of-type(odd)': {
                    backgroundColor: (theme) => (stripe ? theme.palette.action.hover : 'inherit'),
                },
                ...sx,
            }}
            {...otherProps}
        >
            {children}
        </TableBody>
    )
}
