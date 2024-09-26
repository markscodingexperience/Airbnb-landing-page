import { useState } from 'react'
import { Grid, Avatar, Typography, Button } from '@mui/joy';
import '../styles/header.css'
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

const Header = () => {

    const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setGradientPosition({ x, y });
    }

    return ( 
        <Grid 
            container
            spacing={8} 
            display="flex"
            direction="row"
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: 'Montserrat, sans-serif'
            }}>
            <Grid item size={6}>
                <Avatar size='md' variant='plain' alt="Remy Sharp" src="../airbnb-svgrepo-com.png" 
                sx={{
                    padding: "15px 0"
                }}/>
            </Grid>
            <Grid item size={6}
                sx={{
                    display: "flex", 
                    alignItems: "center", 
                    // padding: 'inherit'
                }}>
                <Typography>Ready to Airbnb it?</Typography>
                <CssVarsProvider theme={theme}>
                        <Button className="butt" size="lg" variant='airbnbpink' onMouseMove={handleMouseMove}
                            sx={{
                                width: '100%',
                                '&:hover': {
                                    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #FF385C 0%,#E61E4D 27.5%,#E31C5F 40%,#D70466 57.5%,#BD1E59 75%,#BD1E59 100%)`
                                }
                            }}>
                        <ion-icon name="home-sharp" 
                        style={{
                            paddingRight: "3px",
                            margin: "0 3px"
                        }}></ion-icon>Airbnb Setup</Button>
                    </CssVarsProvider>
            </Grid>    
            
            
        </Grid>
    );
}
 
export default Header;