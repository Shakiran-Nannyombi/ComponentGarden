'use client'

import { Box, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { LocalFlorist, AutoAwesome } from '@mui/icons-material'

interface IntroPageProps {
    onEnterGarden: () => void
}

export default function IntroPage({ onEnterGarden }: IntroPageProps) {
    return (
        <Box sx={{
            width: '100%',
            minHeight: { xs: 'auto', md: '100vh' },
            height: { xs: 'auto', md: '100vh' },
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden',
            bgcolor: '#0f0518',
            background: {
                xs: 'none',
                md: 'radial-gradient(circle at 30% 50%, #2e1065 0%, #0f0518 100%)'
            },
            p: { xs: 2, md: 4 }
        }}>
            {/* Mobile-Only Background Video */}
            <Box sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                opacity: 0.8,
                display: { xs: 'block', md: 'none' }
            }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <source src="/kiran/hero.mp4" type="video/mp4" />
                </video>
                <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(15, 5, 24, 0.7) 0%, rgba(15, 5, 24, 0.85) 100%)',
                    backdropFilter: 'blur(3px)'
                }} />
            </Box>

            {/* Left Content Side */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10,
                p: { xs: 4, md: 8 },
                color: '#fff',
                textAlign: { xs: 'center', md: 'left' }
            }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '650px' }}
                >
                    <Typography variant="h1" sx={{
                        fontFamily: 'var(--font-permanent-marker)',
                        fontWeight: 400,
                        color: '#fff',
                        lineHeight: 1.1,
                        mb: 3,
                        fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                        letterSpacing: '-2px'
                    }}>
                        Cultivating <br />
                        <span style={{
                            background: 'linear-gradient(135deg, #a78bfa 0%, #f472b6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontStyle: 'italic'
                        }}>Digital Bloom</span>
                    </Typography>

                    <Typography variant="h5" sx={{
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 6,
                        lineHeight: 1.6,
                        maxWidth: '500px',
                        fontSize: { xs: '1.1rem', md: '1.4rem' }
                    }}>
                        Step into a sanctuary where interface components aren&apos;t just code—they&apos;re living entities that grow, interact, and share their DNA.
                    </Typography>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 3,
                        alignItems: 'center'
                    }}>
                        <Button
                            variant="contained"
                            onClick={onEnterGarden}
                            endIcon={<LocalFlorist />}
                            sx={{
                                bgcolor: '#7c3aed',
                                color: '#fff',
                                px: 6,
                                py: 2,
                                borderRadius: '100px',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                textTransform: 'none',
                                fontFamily: 'var(--font-outfit)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                '&:hover': {
                                    bgcolor: '#8b5cf6',
                                    transform: 'scale(1.05) translateY(-5px)',
                                }
                            }}
                        >
                            Enter the Garden
                        </Button>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box sx={{
                                width: 40, height: 40, borderRadius: '50%',
                                border: '1px solid rgba(255,255,255,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#a78bfa'
                            }}>
                                <AutoAwesome fontSize="small" />
                            </Box>
                            <Typography variant="body2" sx={{
                                color: 'rgba(255,255,255,0.5)',
                                fontWeight: 500,
                                fontFamily: 'var(--font-outfit)'
                            }}>
                                Crafted with passion by <span style={{ color: '#fff' }}>Shakiran</span>
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Right Side - Desktop Video container */}
            <Box sx={{
                flex: 1,
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                display: { xs: 'none', md: 'block' },
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                bgcolor: '#000',
                border: '1px solid rgba(255,255,255,0.1)',
                zIndex: 10
            }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                >
                    <source src="/kiran/hero.mp4" type="video/mp4" />
                </video>
            </Box>
        </Box>
    )
}
