'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    Box,
    Tabs,
    Tab,
    TextField,
    Button,
    alpha,
} from '@mui/material'

interface AuthModalProps {
    variant?: 'light' | 'dark'
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`auth-tabpanel-${index}`}
            aria-labelledby={`auth-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
        </div>
    )
}

export default function AuthModal({ variant = 'light' }: AuthModalProps) {
    const [open, setOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0)

    const isDark = variant === 'dark'

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <Box sx={{ display: 'inline-block' }}>
            {/* Trigger Button */}
            <Button
                variant="contained"
                onClick={() => setOpen(true)}
                sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: '12px',
                    backgroundColor: '#7c3aed',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
                    '&:hover': {
                        backgroundColor: '#6d28d9',
                        boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
                    },
                }}
            >
                Login / Sign Up
            </Button>

            {/* Modal */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="sm"
                fullWidth
                disablePortal
                PaperProps={{
                    sx: {
                        borderRadius: '24px',
                        background: isDark
                            ? 'linear-gradient(135deg, rgba(30, 27, 75, 0.98) 0%, rgba(15, 23, 42, 0.98) 100%)'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                        overflow: 'visible',
                    },
                }}
                sx={{
                    position: 'absolute !important',
                    zIndex: 10,
                    inset: 0,
                    '& .MuiDialog-container': {
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none'
                    },
                    '& .MuiPaper-root': {
                        height: 'auto',
                        maxHeight: '90vh',
                        width: '100%',
                        maxWidth: '480px',
                        m: 2,
                        overflow: 'hidden',
                        borderRadius: '24px',
                        pointerEvents: 'auto',
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    '& input:-webkit-autofill': {
                        WebkitBoxShadow: isDark ? '0 0 0 100px #1e1b4b inset' : '0 0 0 100px #ffffff inset',
                        WebkitTextFillColor: isDark ? '#ffffff' : '#000000',
                        caretColor: isDark ? '#ffffff' : '#000000',
                        borderRadius: '12px',
                    },
                    '& input': {
                        backgroundColor: 'transparent !important'
                    }
                }}
            >
                <DialogContent sx={{
                    p: 4,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    flex: 1
                }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            centered
                            sx={{
                                '& .MuiTab-root': {
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    textTransform: 'none',
                                    minWidth: 120,
                                    color: isDark ? alpha('#fff', 0.6) : alpha('#000', 0.6),
                                    '&.Mui-selected': {
                                        color: '#7c3aed',
                                        fontWeight: 600,
                                    },
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#7c3aed',
                                    height: 3,
                                    borderRadius: '3px 3px 0 0',
                                },
                            }}
                        >
                            <Tab label="Sign In" />
                            <Tab label="Sign Up" />
                        </Tabs>
                    </Box>

                    <TabPanel value={tabValue} index={0}>
                        <Box component="form" onSubmit={handleSignIn}>
                            <TextField
                                fullWidth
                                label="Email address"
                                type="email"
                                variant="outlined"
                                required
                                sx={{
                                    mb: 2.5,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'transparent !important',
                                        color: isDark ? '#fff' : '#000',
                                        '& fieldset': {
                                            borderColor: isDark ? alpha('#fff', 0.3) : alpha('#000', 0.15),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#7c3aed', 0.5),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#7c3aed',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : alpha('#000', 0.6),
                                        backgroundColor: isDark ? '#1e1b4b' : '#fff',
                                        padding: '0 4px',
                                        marginLeft: '-4px',
                                        '&.Mui-focused': {
                                            color: '#7c3aed',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'transparent !important',
                                        color: isDark ? '#fff' : '#000',
                                        '& fieldset': {
                                            borderColor: isDark ? alpha('#fff', 0.3) : alpha('#000', 0.15),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#7c3aed', 0.5),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#7c3aed',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : alpha('#000', 0.6),
                                        backgroundColor: isDark ? '#1e1b4b' : '#fff',
                                        padding: '0 4px',
                                        marginLeft: '-4px',
                                        '&.Mui-focused': {
                                            color: '#7c3aed',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    py: 1.5,
                                    borderRadius: '12px',
                                    backgroundColor: '#7c3aed',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
                                    '&:hover': {
                                        backgroundColor: '#6d28d9',
                                        boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
                                    },
                                }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </TabPanel>

                    <TabPanel value={tabValue} index={1}>
                        <Box component="form" onSubmit={handleSignUp}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                required
                                sx={{
                                    mb: 2.5,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'transparent !important',
                                        color: isDark ? '#fff' : '#000',
                                        '& fieldset': {
                                            borderColor: isDark ? alpha('#fff', 0.3) : alpha('#000', 0.15),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#7c3aed', 0.5),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#7c3aed',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : alpha('#000', 0.6),
                                        backgroundColor: isDark ? '#1e1b4b' : '#fff',
                                        padding: '0 4px',
                                        marginLeft: '-4px',
                                        '&.Mui-focused': {
                                            color: '#7c3aed',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Email address"
                                type="email"
                                required
                                sx={{
                                    mb: 2.5,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'transparent !important',
                                        color: isDark ? '#fff' : '#000',
                                        '& fieldset': {
                                            borderColor: isDark ? alpha('#fff', 0.3) : alpha('#000', 0.15),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#7c3aed', 0.5),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#7c3aed',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : alpha('#000', 0.6),
                                        backgroundColor: isDark ? '#1e1b4b' : '#fff',
                                        padding: '0 4px',
                                        marginLeft: '-4px',
                                        '&.Mui-focused': {
                                            color: '#7c3aed',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                required
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        backgroundColor: 'transparent !important',
                                        color: isDark ? '#fff' : '#000',
                                        '& fieldset': {
                                            borderColor: isDark ? alpha('#fff', 0.3) : alpha('#000', 0.15),
                                        },
                                        '&:hover fieldset': {
                                            borderColor: alpha('#7c3aed', 0.5),
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#7c3aed',
                                        },
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: isDark ? 'rgba(255, 255, 255, 0.7)' : alpha('#000', 0.6),
                                        backgroundColor: isDark ? '#1e1b4b' : '#fff',
                                        padding: '0 4px',
                                        marginLeft: '-4px',
                                        '&.Mui-focused': {
                                            color: '#7c3aed',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    py: 1.5,
                                    borderRadius: '12px',
                                    backgroundColor: '#7c3aed',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)',
                                    '&:hover': {
                                        backgroundColor: '#6d28d9',
                                        boxShadow: '0 6px 20px rgba(124, 58, 237, 0.5)',
                                    },
                                }}
                            >
                                Create Account
                            </Button>
                        </Box>
                    </TabPanel>
                </DialogContent>
            </Dialog>
        </Box>
    )
}
