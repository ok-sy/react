import { Theme, SxProps } from '@mui/material'

import { SystemStyleObject } from '@mui/system'

/**
 * 배열이 아닌 SxProps
 */
export type SimpleSxProps = SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)

export function arraySx(
    sx?: SxProps,
): Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)> {
    return Array.isArray(sx) ? sx : [sx ?? false]
}
