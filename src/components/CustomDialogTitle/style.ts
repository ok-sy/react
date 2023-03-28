import { SimpleSxProps } from '@/lib/sx-props'

export const rootSx: SimpleSxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pl: 3,
    py: 1,
    pr: 1,
    '& .MuiTypography-root': {
        fontSize: '1.1rem',
        fontWeight: 600,
    },
}
