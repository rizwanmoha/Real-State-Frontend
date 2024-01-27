import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);

  // flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto

  return (
    <div>
      {/* top */}
      <div className="flex">
      <div className='mt-12 ml-48'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 mt-5 text-xs sm:text-sm'>
          Sahand Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm mt-5 text-blue-800 font-bold hover:underline'
        >
          Let's get started...
        </Link>
      </div>
      <div class="ml-24 mt-12">
  <img
    src="https://shareables-prod-static.clutch.co/badges/top_clutch.co_local_seo_company_2022_award.svg"
    alt="about us"
    style={{ width: "160px", height: "120px" }}
  />
  <img src="https://comradeweb.com/wp-content/uploads/2021/12/new-badge20211005-28345-go5i2d-1-1.webp" alt="about us"  style={{ width: "160px", height: "120px" }}/>
</div>
      </div>

     
    </div>
  );
}
