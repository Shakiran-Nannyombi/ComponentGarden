import { useRef, useEffect, useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Home, Menu as MenuIcon } from '@mui/icons-material'

interface ScrollNavbarProps {
    variant?: 'default' | 'dark'
}

export const ScrollNavbar = ({ variant = 'default' }: ScrollNavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Handle scroll events to update navbar state
        const handleScroll = () => {
            const scrollTop = container.scrollTop

            // When scrolled more than 10px, navbar becomes fully visible
            if (scrollTop > 10) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        container.addEventListener('scroll', handleScroll)
        handleScroll() // Initialize on mount

        return () => container.removeEventListener('scroll', handleScroll)
    }, [])

    const isDark = variant === 'dark'

    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '500px',
            overflow: 'hidden',
            bgcolor: isDark ? '#020617' : '#ffffff'
        }}>
            {/* 1. Main Navbar Background (Appears on scroll) */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 40,
                    background: isScrolled
                        ? (isDark ? 'rgba(2, 6, 23, 0.9)' : 'rgba(255, 255, 255, 0.9)')
                        : 'transparent',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                    borderBottom: isScrolled
                        ? `1px solid ${isDark ? 'rgba(76, 29, 149, 0.3)' : 'rgba(0,0,0,0.1)'}`
                        : '1px solid transparent',
                    height: isScrolled ? '96px' : '0px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    pointerEvents: 'none'
                }}
            />

            {/* 2. Floating Content Layer */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>

                {/* LEFT: DK Logo */}
                <Box sx={{
                    position: 'absolute',
                    top: isScrolled ? '28px' : '40px',
                    left: isScrolled ? '32px' : '48px',
                    transition: 'all 0.3s ease',
                    zIndex: 50,
                    pointerEvents: 'auto',
                    cursor: 'pointer'
                }}>
                    <svg width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: isScrolled ? '40px' : '56px', width: 'auto', transition: 'all 0.3s ease' }}>
                        <path d="M10 5V45M10 25H30M30 5L30 25L45 45" stroke={isDark ? "#d946ef" : "#c026d3"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 5H30C35 5 38 8 38 15C38 22 35 25 30 25H10" stroke={isDark ? "#ab00ff" : "#9333ea"} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>

                {/* CENTER: Navigation Pill / Links */}
                <Box sx={{
                    position: 'absolute',
                    top: isScrolled ? '32px' : '36px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 50,
                    pointerEvents: 'auto',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',

                    // Pill Style Logic
                    ...(isScrolled ? {
                        background: 'transparent',
                        padding: '0',
                        boxShadow: 'none',
                        border: '1px solid transparent'
                    } : {
                        background: isDark ? 'rgba(2, 6, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(12px)',
                        padding: '12px 24px',
                        borderRadius: '999px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        border: `1px solid ${isDark ? 'rgba(76, 29, 149, 0.3)' : 'rgba(0,0,0,0.05)'}`
                    })
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1.5, md: 2.5 } }}>
                        {['Home', 'Work', 'Projects', 'Garden', 'Blog'].map((item, i) => (
                            <Typography key={item} sx={{
                                color: isDark ? '#e2e8f0' : '#1e293b',
                                fontWeight: 700,
                                fontSize: { xs: '0.8rem', md: '0.95rem' },
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 0.5,
                                opacity: 0.9,
                                transition: 'all 0.2s',
                                '&:hover': {
                                    color: isDark ? '#d946ef' : '#c026d3',
                                    opacity: 1,
                                    transform: 'scale(1.05)'
                                }
                            }}>
                                {item}
                                {(item === 'Home' || item === 'Garden') && (
                                    <Box component="span" sx={{ fontSize: '0.7em', opacity: 0.7 }}>▼</Box>
                                )}
                            </Typography>
                        ))}
                    </Box>
                </Box>

                {/* RIGHT: User & Theme */}
                <Box sx={{
                    position: 'absolute',
                    top: isScrolled ? '28px' : '40px',
                    right: isScrolled ? '32px' : '48px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    zIndex: 50,
                    pointerEvents: 'auto',
                    transition: 'all 0.3s ease'
                }}>
                    <Box sx={{
                        width: isScrolled ? 40 : 48,
                        height: isScrolled ? 40 : 48,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: `2px solid ${isDark ? '#d946ef' : '#c026d3'}`,
                        transition: 'all 0.3s ease',
                        backgroundImage: 'url("https://api.dicebear.com/7.x/avataaars/svg?seed=Shakiran&backgroundColor=b6e3f4")',
                        backgroundSize: 'cover'
                    }} />
                </Box>

            </Box>

            {/* 3. SCROLL CONTENT */}
            <Box
                ref={containerRef}
                sx={{
                    width: '100%',
                    height: '100%',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    '&::-webkit-scrollbar': { width: '8px' },
                    '&::-webkit-scrollbar-track': { background: 'transparent' },
                    '&::-webkit-scrollbar-thumb': { background: isDark ? '#4c1d95' : '#ccc', borderRadius: '4px' }
                }}
            >
                <Box sx={{ minHeight: '200vh' }}>
                    <Box sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        backgroundImage: isDark
                            ? 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #020617 100%)'
                            : 'radial-gradient(circle at 50% 50%, #f0f9ff 0%, #fff 100%)',
                    }}>
                        <Typography variant="h1" sx={{
                            fontWeight: 900,
                            color: isDark ? '#fff' : '#0f172a',
                            fontSize: 'clamp(3rem, 6vw, 6rem)',
                            mb: 2,
                            textAlign: 'center'
                        }}>
                            Creative<br />Developer
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
