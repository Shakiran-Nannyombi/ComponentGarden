import { Box } from '@mui/material'
import { keyframes } from '@mui/system'
import { FilterVintage, Yard, Agriculture, Grass, EmojiNature, WaterDrop } from '@mui/icons-material'
import { useEffect, useState, useMemo } from 'react'

// Animation Keyframes
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg) scale(1); }
  33% { transform: translateY(-30px) rotate(10deg) scale(1.1); }
  66% { transform: translateY(10px) rotate(-10deg) scale(0.9); }
  100% { transform: translateY(0px) rotate(0deg) scale(1); }
`

const blink = keyframes`
  0%, 100% { opacity: 0.5; filter: drop-shadow(0 0 0 rgba(0,0,0,0)); }
  50% { opacity: 1; color: #fcbf49 !important; filter: drop-shadow(0 0 15px #fcbf49); transform: scale(1.2); }
`

const Background = () => {
    const [hydrated, setHydrated] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setHydrated(true)
        setIsMobile(window.innerWidth < 900)

        const handleResize = () => setIsMobile(window.innerWidth < 900)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const icons = useMemo(() => [FilterVintage, Yard, Agriculture, Grass, EmojiNature, WaterDrop], [])

    // Generate random particles - Memoized to ensure stable render
    const particles = useMemo(() => {
        if (!hydrated) return []

        // Use lower density on mobile (30) vs desktop (80)
        const count = isMobile ? 30 : 80

        return Array.from({ length: count }).map((_, i) => {
            const IconComponent = icons[i % icons.length]
            const angle = Math.random() * Math.PI * 2
            const distance = 100 + Math.random() * 200

            return {
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                duration: `${20 + Math.random() * 30}s`,
                blinkDuration: `${2 + Math.random() * 4}s`,
                delay: `${Math.random() * 10}s`,
                size: isMobile ? (15 + Math.random() * 25) : (20 + Math.random() * 40), // Smaller on mobile
                Icon: IconComponent,
                color: `rgba(255, 255, 255, ${0.4 + Math.random() * 0.5})`,
                rotation: Math.random() * 360,
                scatterX: Math.cos(angle) * distance,
                scatterY: Math.sin(angle) * distance
            }
        })
    }, [isMobile, hydrated, icons])

    if (!hydrated) return null

    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                background: 'linear-gradient(180deg, #31004a 0%, #33007b 40%, #4c00a4 100%)',
                overflow: 'hidden',
                transition: 'background 1s ease',
            }}
        >
            {/* Ambient Gradient Blobs */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-20%',
                    left: '20%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(171, 0, 255, 0.2) 0%, transparent 70%)',
                    animation: `${float} 25s ease-in-out infinite`,
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                }}
            />

            {/* Interactive Particles */}
            {particles.map((p) => (
                <Box
                    key={p.id}
                    sx={{
                        position: 'absolute',
                        left: p.left,
                        top: p.top,
                        color: p.color,
                        animation: `${float} ${p.duration} ease-in-out infinite, ${blink} ${p.blinkDuration} ease-in-out infinite`,
                        animationDelay: p.delay,
                        transform: `rotate(${p.rotation}deg)`,
                        transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
                        cursor: 'crosshair',
                        '&:hover': {
                            transform: `translate(${p.scatterX}px, ${p.scatterY}px) rotate(${p.rotation + 180}deg) scale(0.5)`,
                            opacity: 0,
                            color: '#fcbf49',
                        }
                    }}
                >
                    <p.Icon sx={{ fontSize: p.size }} />
                </Box>
            ))}
        </Box>
    )
}

export default Background
