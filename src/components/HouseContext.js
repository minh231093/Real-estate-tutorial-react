import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = housesData.map((house) => house.country);
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = housesData.map((house) => house.type);
    const uniqueProperties = ["Property (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    console.log(country, property, price);
    setLoading(true);

    const isDefault = (str) => str.includes("(any)");
    const [minPrice, , maxPrice] = price.split(" ").map(Number);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      if (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      ) {
        return house;
      }
      return false;
    });

    setTimeout(() => {
      setHouses(newHouses.length ? newHouses : []);
      setLoading(false);
    }, 1000);

    console.log(newHouses);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
