'use client'

import { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import Background from '@/components/garden-elements/Background'
import GardenBed from '@/components/garden-elements/GardenBed'
import GardenPlant from '@/components/garden-elements/GardenPlant'
import PreviewBubble from '@/components/garden-elements/PreviewBubble'
import Character from '@/components/garden-elements/Character'
import IntroPage from './IntroPage'
import { useComponentGardenStore, GardenComponent } from '@/store/useComponentGardenStore'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const { components } = useComponentGardenStore()

  if (showIntro) {
    return <IntroPage onEnterGarden={() => setShowIntro(false)} />
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: { xs: 1, md: 2 },
        gap: 0
      }}
    >
      <Background />

      {/* Header Section - Pushed to the RIGHT */}
      <Box sx={{
        zIndex: 10,
        mt: { xs: 1, md: 2 },
        mb: { xs: 1, md: 1 },
        width: '100%',
        maxWidth: '1400px',
        alignSelf: 'center',
        px: { xs: 2, md: 4 },
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 2
      }}>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="h4" sx={{
            fontFamily: 'var(--font-permanent-marker)',
            whiteSpace: 'nowrap',
            mb: 0.1,
            fontSize: { xs: '1.2rem', md: '2.5rem' },
            letterSpacing: '-1.2px'
          }}>
            Shakiran&apos;s Design Garden
          </Typography>

          <Box sx={{
            display: 'inline-block',
            padding: '2px 10px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(252, 191, 73, 0.95) 0%, rgba(247, 127, 0, 0.95) 100%)',
            boxShadow: '0 4px 15px rgba(252, 191, 73, 0.3)',
          }}>
            <Typography variant="body2" sx={{
              fontFamily: 'var(--font-outfit)',
              fontWeight: 'bold',
              color: '#31004a',
              fontSize: { xs: '0.6rem', md: '0.8rem' },
              lineHeight: 1
            }}>
              Living interface sanctuary • Growing with code
            </Typography>
          </Box>
        </Box>

        <Button
          size="small"
          variant="contained"
          onClick={() => setShowIntro(true)}
          sx={{
            background: '#fcbf49', // Solid Premium Gold
            color: '#31004a',
            fontFamily: 'var(--font-outfit)',
            fontWeight: 900,
            textTransform: 'none',
            borderRadius: '10px',
            padding: '6px 16px',
            fontSize: { xs: '0.75rem', md: '0.9rem' },
            minWidth: 'auto',
            boxShadow: '0 4px 12px rgba(252, 191, 73, 0.4)',
            '&:hover': {
              background: '#f77f00',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(247, 127, 0, 0.4)'
            }
          }}
        >
          Intro
        </Button>
      </Box>

      {/* Main Content Area */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        flexGrow: 1,
        zIndex: 10,
        position: 'relative',
        px: { xs: 1, md: 4 }
      }}>

        {/* Layout Container */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, lg: 8 },
          width: '100%',
          mt: { xs: 8, md: 0 } // Space above the character on mobile
        }}>

          {/* Character Container */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: { xs: 0, lg: -12 },
            transformOrigin: 'top center',
            zIndex: 20
          }}>
            <Character />
          </Box>

          {/* Garden Bed */}
          <Box sx={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <GardenBed>
              <Box sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {components.map((comp: GardenComponent) => (
                  <GardenPlant key={comp.id} component={comp} />
                ))}
              </Box>
            </GardenBed>
          </Box>
        </Box>

        {/* Components Preview */}
        <Box sx={{
          width: '100%',
          maxWidth: '1300px',
          mt: { xs: 1, md: 4 },
          mb: 2
        }}>
          <PreviewBubble />
        </Box>
      </Box>
    </Box>
  )
}
