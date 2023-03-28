import clsx from 'clsx'
import { HomeOutlined, NavigateNext } from '@mui/icons-material'
import { IconButton, Box, Breadcrumbs, Typography, SxProps } from '@mui/material'
import React from 'react'
import { arraySx } from '@/lib/sx-props'
import { rootSx } from './style'
import Link from '../Link'

export type LinkPart = {
    href: string
    title: string
}

export type CustomBreadcrumbsProps = {
    className?: string
    sx?: SxProps
    section?: string
    linkParts?: LinkPart[]
    currentTitle: string
}

export default function CustomBreadcrumbs(props: CustomBreadcrumbsProps) {
    const { className, sx, section, linkParts = [], currentTitle } = props

    return (
        <Box className={clsx('CustomBreadcrumbs-root', className)} sx={[rootSx, {}, ...arraySx(sx)]}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb">
                <Link href="/" color="inherit">
                    <IconButton color="default" size="medium">
                        <HomeOutlined />
                    </IconButton>
                </Link>
                {section && <Typography color="inherit">{section}</Typography>}

                {linkParts.map(({ href, title }, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Link href={href} key={idx} color="inherit">
                        {title}
                    </Link>
                ))}

                <Typography color="textPrimary">{currentTitle}</Typography>
            </Breadcrumbs>
        </Box>
    )
}
