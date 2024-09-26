import { Box, Card, CardCover, Grid, Typography, Button } from "@mui/joy";
import GradeIcon from '@mui/icons-material/Grade';
import { IoIosArrowForward } from "react-icons/io";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';


const theme = extendTheme({
    components: {
      JoyButton: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState.variant === 'outlineBlack' && {
                color: 'black',
                background: 'white',
                border: '1px solid black',
                borderRadius: '7px',
                marginTop: '15px',
                padding: '5px 15px'
            }),
          }),
        },
      },
    },
  });

const HouseRentals = ({data, title}) => {

    return ( 
        <Box  
            sx={{
                marginTop: '90px', 
            }}>
            <Typography fontSize='26px' fontWeight='600' letterSpacing={'0.01625px'} marginBottom='15px'> {title} </Typography>
            <Grid container spacing={'10px'} width='100%' sx={{flexGrow: 1}}>
                {data.map((img, index) => 
                    <Grid key={index} item xs={12} sm={6} md={6} lg={3} sx={{padding: '5', verticalAlign: 'middle' }}>
                    <Card sx={{ marginBottom: '5px', maxWidth: '100%', p: 0, display: 'contents'}}>
                        <Typography display='flex' fontWeight='bold' borderRadius='15px' width='fit-content' zIndex='1' sx={{padding: '3px 10px', background: 'white', position: 'absolute', margin: '10px 15px'}}>Guest Favorite</Typography>
                        <CardCover sx={{height: 'auto', display: 'contents', p: 0}}>
                            <img
                                src={img.image}
                                loading="lazy"
                                alt=""
                                style={{objectFit: 'cover', display: 'block', width: '100%', aspectRatio: '16/15', verticalAlign: 'middle', height: 'auto'}}
                            />
                        </CardCover>
                    </Card>
                    <Box 
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        direction: 'column',

                      }}
                    >
                        <Typography level="title-md" fontSize='1.17em'>{img.name}</Typography>
                        <Typography startDecorator={<GradeIcon fontSize='small'/>} level='body-md'>{img.rating + ' (' + img.reviews + ')'}</Typography>
                    </Box>
                    <Typography color='neutral' level='body-md' 
                        sx={{ 
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 1, 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          
                        }}>{img.note}</Typography>
                </Grid>
                )}
            </Grid>
            <CssVarsProvider theme={theme}>
                <Button variant="outlineBlack" size='lg' sx={{
                  width: {
                    xs: "-webkit-fill-available",
                    sm: "-webkit-fill-available",
                    md: "initial"
                  }
                }}>Show All <IoIosArrowForward style={{marginLeft: '4px'}}/></Button>
            </CssVarsProvider>
            
        </Box>
        
    );
}
 
export default HouseRentals;