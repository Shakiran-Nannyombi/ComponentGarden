import { Box } from '@mui/material'
import React from 'react'
import { useComponentGardenStore } from '@/store/useComponentGardenStore'

const GardenBed = ({ children }: { children: React.ReactNode }) => {
    const { selectComponent } = useComponentGardenStore()

    const handleBackgroundClick = (e: React.MouseEvent) => {
        // Only deselect if clicking directly on the garden background, not on children
        if (e.target === e.currentTarget) {
            selectComponent(null)
        }
    }

    return (
        <Box
            onClick={handleBackgroundClick}
            sx={{
                position: 'relative',
                width: { xs: '98%', md: '100%' },
                maxWidth: { xs: '100%', md: '900px' },
                flexGrow: 1,
                minHeight: { xs: '300px', md: '450px' },
                aspectRatio: { xs: '4/3', md: '16/10' },
                borderRadius: '32px',
                overflow: 'hidden',
                backgroundImage: 'url("/kiran/garden.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 80px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: 1,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(49, 0, 74, 0.2)',
                    zIndex: 0,
                }
            }}
        >
            <Box sx={{ position: 'relative', width: '100%', height: '100%', zIndex: 1 }}>
                {children}
            </Box>
        </Box>
    )
}

export default GardenBed
