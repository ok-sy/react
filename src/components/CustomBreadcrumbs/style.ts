import { SimpleSxProps } from '@/lib/sx-props'

export const rootSx: SimpleSxProps = {
    py: 0,
    px: 1,
    '& .MuiTypography-colorInherit': {
        color: '#999999',
    },

    '& .MuiTypography-colorPrimary': {
        color: '#242424',
    },
}
