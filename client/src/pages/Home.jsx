import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ListingItem from "../components/ListingItem";
import Hero from "../components/Hero";
import About from "./About";
import Footer from "../components/Footer";
import Features from "../components/Features";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
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

  const location = useLocation();

  useEffect(() => {
    // Check if the state indicates scrolling to "About"
    if (location.state && location.state.scrollTo === "about") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div className="relative font-openSans max-w-[95vw] flex flex-col items-start gap-10 mx-auto top-[100px]">
      <Hero />

      {/* listing results for offer, sale and rent */}

      <div className=" p-3 flex flex-col gap-8">
        <div className="">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-blue-600">
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
            <h2 className="text-2xl font-semibold text-blue-600">
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
            <div className="flex flex-wrap gap-6">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
        <div className="">
          <div className="my-3">
            <h2 className="text-2xl font-semibold text-blue-600">
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
            <div className="flex flex-wrap gap-6">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Features />
      <div id="about">
        <About />
      </div>
      <Footer />
    </div>
  );
}
