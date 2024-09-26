import { Box, Typography, Grid, Card } from "@mui/joy";
import { FaKitchenSet } from "react-icons/fa6";
import { IoWifi } from "react-icons/io5";
import { TbPool } from "react-icons/tb";
import { LuParkingCircle } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import Slider from 'react-slick';
import '../styles/carousel.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/amenities.css'

const Amenities = () => {

    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 816, // Adjust this value to target medium devices
            settings: {
              slidesToShow: 4.3,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 680, // Adjust this value for small screens (mobile)
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 1,
              infinite: false,
            }
          }
        ]
      };
    

    const icons = [
        {
            name: "Kitchen",
            iconNeed: <FaKitchenSet/>
        },
        {
            name: "Wifi",
            iconNeed: <IoWifi/>
        },
        {
            name: "Pool",
            iconNeed: <TbPool/>
        },
        {
            name: "Free parking on premises",
            iconNeed: <LuParkingCircle/>
        },
        {
            name: "Air conditioning",
            iconNeed: <TbAirConditioning/>
        }
    ]

    return ( 
        <Box minHeight={'auto'} className="box">
          <Typography fontSize='26px' fontWeight='600' marginBottom="20px" letterSpacing={'0.01625px'}> Popular amenities for Philippines chalet rentals </Typography>
            <Slider {...sliderSettings}>
              {icons.map((iconObj, index) => (
                <div key={index}>
                  <div  style={{borderRadius: "8px", padding: "15px", marginBottom: "10px", marginRight: "10px", border: "1px solid rgba(0, 0, 0, 0.2)", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px", height: "115px", overflowX: 'hidden' }}>
                    <Typography fontSize="35px">{iconObj.iconNeed}</Typography>
                    <Typography fontWeight="600">{iconObj.name}</Typography>
                  </div>
                </div>
              ))}
            </Slider>       
      </Box>
    );
}
 
export default Amenities;