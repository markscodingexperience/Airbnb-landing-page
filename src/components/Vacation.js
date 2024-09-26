import { Box, Typography, Grid, Card, CardCover } from '@mui/joy';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Vacation = () => {

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1120, // Adjust this value to target medium devices
            settings: {
              slidesToShow: 2.1,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 742, // Adjust this value for small screens (mobile)
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              infinite: false,
            }
          }
        ]
      };

    const cardDetails = [
        {
            name: "Cottages",
            image: "https://a0.muscache.com/im/pictures/5b2a5847-eae1-432e-bbf2-be13a9941c16.jpg?im_w=480",
            note: "Quaint homes, peaceful surroundings",
            alt: "Cottage"
        },
        {
            name: "Bungalows",
            image: "https://a0.muscache.com/im/pictures/e98f3624-2082-4129-895b-8bf026ca16bb.jpg?im_w=480",
            note: "Intimate homes. inviting architecture",
            alt: "Bungalow"
        },
        {
            name: "Villas",
            image: "https://a0.muscache.com/im/pictures/b5f91d25-c754-41fd-b31e-643f3179dbc1.jpg?im_w=480",
            note: "Luxurious estates for the ultimate escape",
            alt: "Villas"
        }
    ]

    return ( 
        <Box 
            sx={{
                height: '50vh',
                marginTop: '7vh',
            }}
            >

            <Box>
            <Typography fontSize='26px' fontWeight='600' letterSpacing={'0.00165px'}> Vacation rentals for every style</Typography>
            <Typography level='body-md' color='neutral' sx={{marginBottom: '10px', letterSpacing: '0.00165px'}}>Get the amount of space that is right for you</Typography>

            <Slider {...sliderSettings}>
                {cardDetails.map((vacation, index) => 
                    <Grid item key={index} xs={12} sm={6} md={6} lg={3} sx={{padding: '5', verticalAlign: 'middle' }}>
                        <Box sx={{ marginRight:'10px' }}>
                            <Card sx={{ maxWidth: '100%', flexGrow: 1, padding: 0, borderRadius: '10px', display: 'contents' }} >
                                <CardCover sx={{height: 'auto', display: 'contents', p: 0}}>
                                    <img
                                        src={vacation.image}
                                        loading='lazy'
                                        alt={vacation.alt}
                                        style={{objectFit: 'cover', display: 'block', width: '100%', aspectRatio: '16/15', verticalAlign: 'middle', height: 'auto'}}/>
                                </CardCover>
                            </Card>
                            <Box sx={{marginTop: '10px'}}>
                                <Typography level="body-lg" color='#222222' fontWeight={500}>{vacation.name}</Typography>
                                <Typography level="body-md" color='neutral' fontWeight={500}>{vacation.note}</Typography>
                            </Box>
                        </Box>
                    
                </Grid>
                )}
            </Slider>

            </Box>
        </Box>

     );
}
 
export default Vacation;