import { Box } from '@mui/joy'
import Header from './components/Header';
import Section from './components/Section';
import Carousel from './components/Carousel';
import Vacation from './components/Vacation';
import Amenities from './components/Amenities';
import HouseRentals from './components/HouseRentals';
import Footer from './components/Footer';
import FooterLegend from './components/FooterLegend';

import './App.css';
import '@fontsource/montserrat/400.css'; // Regular font weight
import '@fontsource/montserrat/700.css'; // Bold font weight


function App() {

  const houseData = [
    {
      name: "Home in General Luna",
      image: "https://a0.muscache.com/im/pictures/2c608461-e2bd-45f8-b976-03607b967521.jpg?im_w=720",
      rating: "4.98",
      reviews: "18",
      note: "Villa Aurora IAO Luxury 2br with pool Villa - V1"
  },
  {
      name: "Home in General Luna",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-847773103427902323/original/3128b188-b495-44f2-aec6-c6a489675c4c.jpeg?im_w=720",
      rating: "5",
      reviews: "18",
      note: "Ricehaven Luxury Villas with Starlink Wifi"
  },
  {
      name: "Home in San Juan",
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ0NzEwMzM2MzgyMDMxMzk2/original/a0e84993-bd4a-4943-8653-ca2ffafae7fd.jpeg?im_w=720",
      rating: "4.91",
      reviews: "123",
      note: "Casa Marisa, cozy beachhouse 5min walk to beach"
  },
  {
      name: "Home in Tagaytay",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-29067036/original/9f4380e7-c987-475b-a306-3dc6488d00fb.jpeg?im_w=720",
      rating: "4.91",
      reviews: "392",
      note: "Tagaytay Home with Heated Pool by: Cedara"
  },
  {
      name: "Home in General Luna",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-1116336323875980692/original/2dc06057-371f-406c-b412-d62f3aa9d24a.jpeg?im_w=720",
      rating: "4.81",
      reviews: "16",
      note: "Villa Ramira (Home near Cloud 9)"
  },
  {
      name: "Home in San Juan",
      image: "https://a0.muscache.com/im/pictures/miso/Hosting-599728177694981130/original/2df965b8-2675-4424-bea3-b23b0e73d203.jpeg?im_w=720",
      rating: "4.96",
      reviews: "142",
      note: "VILLA MARIKIT 3 BR 4BA Pool | 3 Min Walk to Beach"
  },
  {
      name: "Home in Pampanga",
      image: "https://a0.muscache.com/im/pictures/hosting/Hosting-846048384602639614/original/f52a0f6e-0409-4364-b12c-27d6be9023af.jpeg?im_w=720",
      rating: "4.89",
      reviews: "28",
      note: "The Gray House Two-Storey Industrial Modern House"
  },
  {
      name: "Home in San Remigio",
      image: "https://a0.muscache.com/im/pictures/d1933285-0219-4f57-a5f7-496bee195494.jpg?im_w=720",
      rating: "4.89",
      reviews: "76",
      note: "Beachhouse in San Remigio, Cebu"
  },
  ]

  const houseTitle = "House rentals with a pool"

  const weeklyData = [
      {
          name: "Home in Silang",
          image: "https://a0.muscache.com/im/pictures/720247f0-c6d3-4188-b3da-c9a0f5c1475f.jpg?im_w=720",
          rating: "4.92",
          reviews: "73",
          note: "Nordic A villa , private pool"
      },
      {
          name: "Home in General Luna",
          image: "https://a0.muscache.com/im/pictures/f55ff2f6-d237-4a8b-9516-a83ad2ddff66.jpg?im_w=720",
          rating: "4.84",
          reviews: "58",
          note: "CASA BIANCA SIARGAO 4 bedroom Villa in"
      },
      {
          name: "Home in General Luna",
          image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODQ2MzQ5ODMzNzA5NTk4OTM5/original/9596baeb-1348-465b-8505-7012f8629a4d.jpeg?im_w=720",
          rating: "4.89",
          reviews: "38",
          note: "NEW! Design & Luxury Villa in GL w/ Infinity"
      },
      {
          name: "Home in Pampanga",
          image: "https://a0.muscache.com/im/pictures/hosting/Hosting-846048384602639614/original/f52a0f6e-0409-4364-b12c-27d6be9023af.jpeg?im_w=720",
          rating: "4.89",
          reviews: "28",
          note: "The Gray House Two-Storey Industrial"
      },
      {
          name: "Home in Nasugbu",
          image: "https://a0.muscache.com/im/pictures/7e58534a-af07-4c1d-a1af-35954117c97e.jpg?im_w=720",
          rating: "4.99",
          reviews: "92",
          note: "Angelscove Maya Maya Beach House Villa"
      },
      {
          name: "Home in Catmon",
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-871488630902809922/original/618f6c05-3d69-4a2c-8e4d-0a1b8ebc2d47.jpeg?im_w=720",
          rating: "5",
          reviews: "20",
          note: "Reef Side Beachfront Exclusive"
      },
      {
          name: "Home in General Luna",
          image: "https://a0.muscache.com/im/pictures/miso/Hosting-924560966782084209/original/5bc2f3c5-25eb-4cf5-bf96-cd05e521be22.jpeg?im_w=720",
          rating: "5",
          reviews: "20",
          note: "Cozy beachfront 2 bedroom"
      },
      {
          name: "Home in General Luna",
          image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NzkwODY4OTgxNTg1NTM4NA%3D%3D/original/acba438b-2864-4a61-96e3-105e6fffae11.jpeg?im_w=720",
          rating: "5",
          reviews: "20",
          note: "Central 2BR House: 5min to Beach, Patio,"
      },
  ]

  const weeklyTitle = "Weekly house rentals"

  const privateData = [
    {
        name: "Home in Panglao",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0MDI0MTExNDQzMTU5MzcwOQ%3D%3D/original/63c29ef7-cde5-4055-aabe-fbd8767c01c3.jpeg?im_w=720",
        rating: "5",
        reviews: "7",
        note: "Villa Tawala. Sustainable luxury in central"
    },
    {
        name: "Home in Taguig",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-1182533799520020795/original/2e1390eb-dc95-4dc5-99cb-95e478b4df36.jpeg?im_w=720",
        rating: "4.92",
        reviews: "13",
        note: "Probinsya Feels Villa near BGC"
    },
    {
        name: "Home in Argao",
        image: "https://a0.muscache.com/im/pictures/37822de7-72d7-4693-8b70-f91817a9f755.jpg?im_w=720",
        rating: "4.88",
        reviews: "78",
        note: "Beach House in Argao (Porto by Commune)"
    },
    {
        name: "Home in San Juan",
        image: "https://a0.muscache.com/im/pictures/miso/Hosting-843434868078425483/original/ac8a060c-f47b-4c7d-b2bc-00ce3502ea4a.jpeg?im_w=720",
        rating: "5",
        reviews: "40",
        note: "manilokanos Home"
    },
    {
        name: "Home in Panglao",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1125634432120422053/original/a669ee1d-4073-45d6-a9bb-3c851483b747.jpeg?im_w=720",
        rating: "5",
        reviews: "26",
        note: "House of the Rising Sun ( Private house &"
    },
    {
        name: "Home in San Antonio",
        image: "https://a0.muscache.com/im/pictures/bd3b31d7-a2a4-49c1-acc4-436d89c644b2.jpg?im_w=720",
        rating: "4.78",
        reviews: "182",
        note: "beach house zambales fiber internet"
    },
    {
        name: "Home in Coron",
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NzY3NTU1Mzc0ODI2NTg4MQ%3D%3D/original/5e655581-308e-4ffa-b30d-465ddc23a033.jpeg?im_w=720",
        rating: "5",
        reviews: "5",
        note: "4 Bedroom Beachhouse w/pool"
    },
    {
        name: "Home in San Vicente",
        image: "https://a0.muscache.com/im/pictures/7f514b36-2528-433a-969d-02fa8e7fb66e.jpg?im_w=720",
        rating: "5",
        reviews: "25",
        note: "Cozy bungalow. Virgin beaches. All to"
    },
]

const privateTitle = "Private house rentals"

  return (
    <Box 
    sx={{

      p: {
        xs: "0 24px",
        sm: "0 24px",
        md: "0 24px",
        lg: "0 150px",
        xl: "0 300px"
      }

    }}>
      <Header/>
      <Section/>
      <Carousel/>
      <Vacation/>
      <Amenities/>
      <HouseRentals data={houseData} title={houseTitle}/>
      <HouseRentals data={weeklyData} title={weeklyTitle}/>
      <HouseRentals data={privateData} title={privateTitle}/>
      <Footer/>
      <FooterLegend/>
    </Box>
  );
}

export default App;
