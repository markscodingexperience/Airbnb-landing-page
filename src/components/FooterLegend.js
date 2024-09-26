import {Box, Typography, Breadcrumbs, Link, Divider, Grid } from '@mui/joy'
import { IoIosArrowForward } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const FooterLegend = () => {
    return ( 
    <Box marginTop="50px">
        <Box marginBottom="30px">
            <Breadcrumbs separator={<IoIosArrowForward />} aria-label="breadcrumbs">
                <Typography>Airbnb</Typography>
                {['Philippines', 'Chalet Rentals'].map((item) => (
                    <Link key={item} color="neutral" href="#separators" underline="always">
                    {item}
                    </Link>
                ))}
            </Breadcrumbs>
        </Box>
        
        <Divider />
        <Box marginTop="30px" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography sx={{
                    fontSize: {
                        xs: '11px',
                        sm: '15px',
                        md: 'initial'
                    }
                }}>© 2024 Airbnb, Inc. • Privacy • Terms • Site Map</Typography>
            </Grid>
            <Grid item display="flex">
                <Typography level="body-lg" margin="10px"><ImFacebook2/> </Typography> 
                <Typography level="body-lg" margin="10px"><FaSquareTwitter/> </Typography>
                <Typography level="body-lg" margin="10px"><FaSquareInstagram/></Typography>
            </Grid>
        </Box>
    </Box>
    );
}
 
export default FooterLegend;