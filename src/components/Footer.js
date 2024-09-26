import {Box, Typography, Tabs, TabList, Tab, TabPanel } from '@mui/joy'


const Footer = () => {

    const stayOptions = [
        "Rentals with an accessible height bed",
        "Houseboat rentals",
        "Rentals with a home theater",
        "Serviced apartment rentals",
        "Family-friendly rentals",
        "Townhouse rentals",
        "Beach house rentals",
        "Aparthotel rentals",
        "Villa rentals",
        "Apartment rentals",
        "Rentals with pools",
        "Hostel rentals",
        "Vacation home rentals",
        "Monthly Rentals",
        "Treehouse rentals",
        "Tent rentals",
        "Rentals with a fire pit",
        "Serviced apartment rentals"
    ];

    const tabs = [
        "Other types of stays",
        "Unique stays",
        "Things to do",
        "Travel tips & inspiration"
    ]

    const rentalTypes = [
        { name: "Yurt Rentals", location: "United States" },
        { name: "Yurt Rentals", location: "United Kingdom" },
        { name: "Castle Rentals", location: "United States" },
        { name: "Houseboats", location: "United States" },
        { name: "Holiday Caravans", location: "United Kingdom" },
        { name: "Private Island Rentals", location: "United States" },
        { name: "Farm Houses", location: "United States" },
        { name: "Farm Cottages", location: "United Kingdom" },
        { name: "Cabin Rentals", location: "Australia" },
        { name: "Luxury Cabins", location: "United Kingdom" },
        { name: "Luxury Cabins", location: "United States" },
        { name: "Holiday Chalets", location: "United Kingdom" },
        { name: "Cottage Rentals", location: "United States" },
        { name: "Holiday Cottages", location: "United Kingdom" },
        { name: "Mansion Rentals", location: "United States" },
        { name: "Villa Rentals", location: "United Kingdom" },
        { name: "Holiday Bungalows", location: "United Kingdom" },
        { name: "Bungalow Rentals", location: "United States" },
        { name: "Condo Rentals", location: "United States" },
        { name: "Holiday Apartments", location: "Australia" },
        { name: "Holiday Houses", location: "United States" },
        { name: "Holiday Houses", location: "United Kingdom" },
        { name: "Private Holiday Rentals", location: "United Kingdom" },
        { name: "Big House Rentals", location: "United States" },
        { name: "Big Cottages", location: "Australia" },
        { name: "Large Villas", location: "United Kingdom" },
        { name: "House Rentals with a Pool", location: "United States" },
        { name: "Cabin Rentals with a Pool", location: "United States" },
        { name: "Villas with a Pool", location: "United Kingdom" },
        { name: "Holiday Cottages with a Hot Tub", location: "United Kingdom" },
        { name: "Beach Cabins", location: "United States" },
        { name: "Beach Condos", location: "United States" },
        { name: "Beachfront Rentals", location: "United States" },
        { name: "Beach Houses", location: "United States" },
        { name: "Beach Villas", location: "United States" },
        { name: "Coastal Cottages", location: "United Kingdom" },
        { name: "Pet-Friendly Vacation Rentals", location: "United States" },
        { name: "Pet-Friendly Beach Rentals", location: "United States" },
        { name: "Pet-Friendly Cabin Rentals", location: "United States" },
        { name: "Dog-Friendly Cottages", location: "United Kingdom" },
        { name: "Luxury Dog-Friendly Cottages", location: "United Kingdom" }
      ];

      const categories1 = [
        { name: "Things to do", location: "Philippines" },
        { name: "Sightseeing", location: "Philippines" },
        { name: "Nature and outdoors", location: "Philippines" },
        { name: "Food and drink", location: "Philippines" },
        { name: "Art and culture", location: "Philippines" }
      ];

      const categories2 = [
        { name: "Family travel hub", location: "Tips and inspiration" },
        { name: "Family budget travel", location: "Get there for less" },
        { name: "Vacation ideas for any budget", location: "Make it special without making it expensive" },
        { name: "Travel Europe on a budget", location: "How to take the kids to Europe" },
        { name: "Outdoor adventure", location: "Explore nature with the family" },
        { name: "Bucket list national parks", location: "Must-see parks for family travel" },
        { name: "Kid-friendly state parks", location: "Check out these family-friendly parks" }
      ];

    return ( 
        <Box marginTop="100px">
            <Typography fontSize='26px' fontWeight='600' letterSpacing={'0.00165px'}> Destinations to explore</Typography>
            <Tabs>
            <TabList>
                {tabs.map((tab, index) => 
                    <Tab key={index}>{tab}</Tab>
                )}

            </TabList>
            <TabPanel value={0}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                    gap: '20px',
                    wordWrap: '',
                    overflow: 'hidden',
                    }}>
                        {stayOptions.map((option, index) => (
                        <Box key={index}>
                            <Typography level="body-sm" fontWeight="bold" sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1, 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {option}
                            </Typography>
                            <Typography level="body-xs" color="neutral">
                                Philippines
                            </Typography>
                        </Box>
                ))}
                </Box>
            </TabPanel>
            <TabPanel value={1}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                    gap: '20px',
                    wordWrap: '',
                    overflow: 'hidden',
                    }}>
                        {rentalTypes.map((option, index) => (
                        <Box key={index}>
                            <Typography level="body-sm" fontWeight="bold" sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1, 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {option.name}
                            </Typography>
                            <Typography level="body-xs" color="neutral">
                                {option.location}
                            </Typography>
                        </Box>
                ))}
                </Box>
            </TabPanel>
            <TabPanel value={2}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                    gap: '20px',
                    wordWrap: '',
                    overflow: 'hidden',
                    }}>
                        {categories1.map((option, index) => (
                        <Box key={index}>
                            <Typography level="body-sm" fontWeight="bold" sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1, 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {option.name}
                            </Typography>
                            <Typography level="body-xs" color="neutral" sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1, 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {option.location}
                            </Typography>
                        </Box>
                ))}
                </Box>
            </TabPanel>
            <TabPanel value={3}>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
                    gap: '20px',
                    wordWrap: '',
                    overflow: 'hidden',
                    }}>
                        {categories2.map((option, index) => (
                        <Box key={index}>
                            <Typography level="body-sm" fontWeight="bold" sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1, 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {option.name}
                            </Typography>
                            <Typography level="body-xs" color="neutral" sx={{
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1, 
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}>
                                {option.location}
                            </Typography>
                        </Box>
                ))}
                </Box>
            </TabPanel>
            </Tabs>
        </Box>
    );
}
 
export default Footer;