import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";

import ListingItem from "../components/ListingItem";
import Hero from "../components/Hero";
import About from "./About";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation, Autoplay]);
  // console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div className="relative max-w-[95vw] flex font-openSans flex-col items-start gap-10 mx-auto top-[100px]">
      <Hero />
      <Swiper
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* listing results for offer, sale and rent */}

      <div className=" p-3 flex flex-col gap-8">
        <div className="">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent offers
            </h2>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/search?offer=true"}
            >
              Show more offers
            </Link>
          </div>
          {offerListings && offerListings.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
        <div className="">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent places for rent
            </h2>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/search?type=rent"}
            >
              Show more places for rent
            </Link>
          </div>
          {rentListings && rentListings.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
        <div className="">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-slate-600">
              Recent places for sale
            </h2>
            <Link
              className="text-sm text-blue-800 hover:underline"
              to={"/search?type=sale"}
            >
              Show more places for sale
            </Link>
          </div>
          {saleListings && saleListings.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Services />
      <About />
      <Footer />
    </div>
  );
}
