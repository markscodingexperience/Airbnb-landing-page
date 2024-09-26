import { useState } from 'react'
import FloatingLabelInput from "./StyledComponents/StyledLabel";
import { Box, Grid, Typography, Input, Button, } from '@mui/joy';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    components: {
      JoyButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.variant === 'airbnbpink' && {
                color: 'white',
                background: 'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #e51d4f 100%);',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '5px',
                paddingBlock: '2px',
                paddingInline: '1.5rem',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                transition: 'background 0.3s ease-in-out',
            }),
          }),
        },
      },
    },
  });

const Section = () => {
    //for button radial hover
    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setGradientPosition({ x, y });
    }

    return ( 
        <Grid container 
            sx={{
                position: {
                    xs: 'block',
                    sm: 'block',
                    lg: 'relative',
                },
                height: '52vh',
                width: '100%',
            }}>

                <Box 
                    sx={{
                        order: {xs: 2, sm: 2, md: 1,lg: 1,},
                        position: {
                            sm: 'unset',
                            md: 'unset',
                            lg: 'absolute',
                        },
                        zIndex: {
                            md: '1',
                            lg: '1',
                        },
                        background: 'white',
                        padding: {
                            md: '40px 30px',
                            lg: '40px 30px'
                        },
                        borderRadius: '6px',
                        width: {
                            sm: '100%',
                            md: '35%',
                            lg: '355px'
                        },

                        margin: {lg: '10px'},
                        alignSelf: 'center',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        '@media (max-width: 899px)': {
                           boxShadow: 'none', 
                        },
                        display: {
                            xs: 'block'
                        },
                    }}>
                    <Typography level='h2'
                        sx={{
                            padding: 0,
                            marginTop: '15px', 
                            fontSize: {
                                '@media (min-width: 900px) and (max-width: 963px)':{
                                    fontSize: '26px'
                                },
                                '@media (max-width: 611px)':{
                                    fontSize: '28px'
                                },
                                '@media (max-width: 572px)':{
                                    fontSize: '26px'
                                },
                                '@media (max-width: 535px)':{
                                    fontSize: '24px'
                                },
                                '@media (max-width: 497px)': {
                                    fontSize: '20px'
                                },
                                '@media (max-width: 373px)': {
                                    fontSize: '18px'
                                },
                            }
                        }} fontWeight='600' letterSpacing={'-0.01375rem'}>
                        House vacation rentals in Philippines
                    </Typography>
                    <Typography
                        sx={{
                            padding: '7px'
                        }}>
                        Find and book unique houses on Airbnb
                    </Typography>
                    <FloatingLabelInput sx={{padding: '10px'}}/>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <Input label="Check In" placeholder="Add Date" fullWidth
                            sx={{
                                marginBottom: '6px',
                                marginTop: '6px'
                            }} />
                        </Grid>
                        <Grid xs={6}>
                            <Input label="Check Out" placeholder="Add Date" fullWidth 
                            sx={{
                                marginBottom: '6px',
                                marginTop: '6px'
                            }}/>
                        </Grid>
                    </Grid>
                    <CssVarsProvider theme={theme}>
                        <Button variant='airbnbpink' onMouseMove={handleMouseMove}
                            sx={{
                                width: '100%',
                                '&:hover': {
                                    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #FF385C 0%,#E61E4D 27.5%,#E31C5F 40%,#D70466 57.5%,#BD1E59 75%,#BD1E59 100%)`
                                }
                        }}>Search</Button>
                    </CssVarsProvider>     
                </Box>
                <Box 
                sx={{
                    order: {
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 2,
                    },
                    backgroundImage: `url(https://a0.muscache.com/im/pictures/d6ce61b5-87e5-4f45-b54d-42f2f7ef9a55.jpg)`, // Replace with your image URL
                    backgroundSize: 'cover',
                    backgroundPosition: {
                        sm: 'center',
                        md: 'center',
                        lg: 'center'
                    },
                    aspectRatio: {
                        '@media (min-width: 744px)': {
                            aspectRatio: 'unset',
                            contain: 'size',
                        },
                        '@media (max-width: 896px)': {
                            aspectRatio: 9 / 5
                        }
                    },
                    height: {
                        xs: '70%',
                        sm: '70%',
                        md: '50%',
                        lg: '100%'
                    },
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '70%',
                        lg: '70%'
                    },
                    objectFit: 'cover',
                    borderRadius: '10px',
                    right: {
                        xs: 'unset',
                        sm: 'unset',
                        md: '24px',
                        lg: 0,
                    },
                    position: {
                        xs: 'block',
                        sm: 'block',
                        md: 'absolute',
                        lg: 'absolute'
                    } 

                }}
                />

        </Grid>
     );
}
 
export default Section;