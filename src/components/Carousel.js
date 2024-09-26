import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css'

import Slider from 'react-slick';
import GradeIcon from '@mui/icons-material/Grade';

import { Box, Typography, Grid, Card, CardCover } from '@mui/joy';


const Carousel = () => {

   // Settings for react-slick carousel
   const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1112, // Adjust this value to target medium devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        }
      },
      {
        breakpoint: 742, // Adjust this value for small screens (mobile)
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          swipeToSlide: true,  // Enables free scrolling
          draggable: true, 
        }
      }
    ]
  };

  const rentals = [
    {
      title: 'Home in San Juan',
      image: 'https://a0.muscache.com/im/pictures/107350041/7200dff0_original.jpg?im_w=720',
      rating: '4.87',
      reviews: '108',
      note: 'Guest Favorite',
      description: 'Rhumbutan House is located on the west coast of Siquijor Island on a low bluff above a narrow beach (15m wide) with incredible sunset views to Apo Island. Two air conditioned bedrooms, a small private plunge / swimming pool in the front garden overlooking the sea. A large shaded front deck and direct beach access. At high tide the sea almost reaches the garden; at low tide a rocky platform is exposed where locals search for shellfish in the traditional way. Tropical gardens. There are no hawkers',
      
    },
    {
      title: 'Home in Baguio',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-48175307/original/4caf60cc-e3db-4328-9ee0-b2940da7d088.jpeg?im_w=720',
      rating: '4.97',
      reviews: '157',
      note: 'Guest Favorite',
      description: 'Just 3.5 kms from city center but tucked away in a lush, very fresh environment. Enjoy clean cold mountain air, sweet smell of pine trees, and amazing sight of fog. The industrial rustic design and warm interiors bow to the stunning natural beauty of its surroundings. Large glass walls let in glorious natural light at daytime and astonishing city lights at night. The majestic views from the large roof deck will take your breath away. Baguio Hillhouse is beyond accommodation, it is an experience',
    },
    {
      title: 'Home in Subic Bay',
      image: 'https://a0.muscache.com/im/pictures/807bf821-b136-40e3-b3b7-844a46062ecf.jpg?im_w=720',
      rating: '4.93',
      reviews: '141',
      note: 'Guest Favorite',
      description: 'Tuki Nest: Pet Friendly...',
    },
    {
      title: 'Home in Lian',
      image: 'https://a0.muscache.com/im/pictures/04a49d9d-9a71-4d23-85f0-7f53d539689d.jpg?im_w=720',
      rating: '4.97',
      reviews: '172',
      note: 'Superhost',
      description: "This beach property has been with our family for decades. We are a tribe that loves living seaside..partaking of nature's bounty of freshly caught seafood.. loving our daily afternoon beach swims and sunset watches, and we just love this local community! We opened up our home because we wanted to share our healing space, our little patch of paradise with like-minded souls. Our home is set-up to the type of places we like to stay in, and it is our hope that you will too. Come give us a visit. :)",
      
    },
    {
      title: 'Home in Real',
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-538388921852847247/original/960343c1-47a5-4439-b478-b7cbe7a5045b.jpeg?im_w=720',
      rating: '4.92',
      reviews: '138',
      note: 'Guest Favorite',
      description: "Take it easy at this unique and tranquil getaway. Relax in your own exclusive beach front property with a one bedroom tiny house and a special farm vibe. Have a taste of living in the barrio with your own chicken house which provides you with fresh eggs in the morning. Hear the roosters crow at dawn and have fun buying fresh fish and seafood at the nearby fishing village. Pitch your own tent, stargaze and bond with your family and friends around the BBQ firepit. Enjoy the sound of the waves.",
    },
    {
      title: 'Home in General Luna',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-36391297/original/998bc4d3-1699-4568-9839-057011e6a668.jpeg?im_w=720',
      rating: '4.94',
      reviews: '109',
      note: 'Guest Favorite',
      description: "Kali Villa is a rustic two-bedroom private villa with own dipping pool, right in the middle of General Luna, Siargao. Have a cook out, pool party, yoga session, or just lounge around and drink a good cup of coffee while basking in uninterrupted privacy. Al fresco shower, dining and living areas are situated beside the pool, completing the au naturele vibe. Perfect for families with water babies (young and old), or friends who want to enjoy their privacy in the middle of a bustling paradise.",
    },
    {
      title: 'Home in Tagaytay',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-594461988075344597/original/496dd0f4-455d-4915-a563-d32cab0a4b64.jpeg?im_w=720',
      rating: '4.87',
      reviews: '220',
      note: 'Superhost',
      description: 'Hyssop House Casa Uno...',
    },
    {
      title: 'Home in Infanta',
      image: 'https://a0.muscache.com/im/pictures/f863e534-59c2-4cc3-9fa9-b64b3cb874e1.jpg?im_w=720',
      rating: '4.89',
      reviews: '225',
      note: 'Guest Favorite',
      description: 'Hyssop House Casa Uno...',
    },
    { 
      title: 'Home in Mabini',
      image: 'https://a0.muscache.com/im/pictures/f7baf640-1d42-4d26-aa20-572297ecef80.jpg?im_w=720',
      rating: '4.93',
      reviews: '227',
      note: 'Guest Favorite',
      description: 'Hyssop House Casa Uno...',
    },
    { 
      title: 'Home in San Juan',
      image: 'https://a0.muscache.com/im/pictures/cb7de9d0-6678-4153-b8ee-267998a8276a.jpg?im_w=720',
      rating: '4.9',
      reviews: '109',
      note: 'Guest Favorite',
      description: 'Hyssop House Casa Uno...',
    },
    { 
      title: 'Home in Santander',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-632282132126391844/original/06cba92a-ba86-4e24-b7ae-24a1573d9a8e.jpeg?im_w=720',
      rating: '4.88',
      reviews: '100',
      note: 'Guest Favorite',
      description: 'Hyssop House Casa Uno...',
    },
    { 
      title: 'Home in Alfonso',
      image: 'https://a0.muscache.com/im/pictures/3ef7902d-719d-41a9-8790-110671be4eca.jpg?im_w=720',
      rating: '4.98',
      reviews: '107',
      note: 'Guest Favorite',
      description: 'Hyssop House Casa Uno...',
    },
  ];

    return ( 
        <Box
            sx={{
                marginTop: {
                  xs: '150px',
                  sm: '155px',
                  md: '80px',
                  lg: '60px'
                },

            }}>
            <Typography fontSize='26px' fontWeight='600' letterSpacing={'0.01625px'}> Top-rated house rentals in Philippines </Typography>
            <Typography level='body-lg' sx={{marginBottom: '20px'}}>Guest agree: these houses are highly rated for location, cleanliness, and more.</Typography>

            <Slider {...settings}>
              {rentals.map((rental, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Box sx={{ marginRight:'10px' }}>
                  <Card sx={{ marginBottom: '5px', maxWidth: '100%', p: 0, display: 'contents'}}>
                        <Typography display='flex' fontWeight='bold' borderRadius='15px' width='fit-content' zIndex='1' sx={{padding: '3px 10px', background: 'white', position: 'absolute', margin: '10px 15px'}}>Guest Favorite</Typography>
                        <CardCover sx={{height: 'auto', display: 'contents', p: 0}}>
                            <img
                                src={rental.image}
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
                        <Typography level="title-md" fontSize='1.17em'>{rental.title}</Typography>
                        <Typography startDecorator={<GradeIcon fontSize='small'/>} level='body-md'>{rental.rating + ' (' + rental.reviews + ')'}</Typography>
                    </Box>
                    <Typography color='neutral' level='body-md' 
                        sx={{ 
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 5, 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          
                        }}>{rental.description}</Typography>
                  </Box>
                  
                </Grid>
              ))}
              </Slider>
           
        </Box>
    );
}
 
export default Carousel;