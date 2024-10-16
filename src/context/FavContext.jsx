import React, { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);

  const toggleFavourite = (recipe) => {
    setFavourite((prevFavourites) => {
      if (prevFavourites.some((fav) => fav.id === recipe.id)) {
        return prevFavourites.filter((fav) => fav.id !== recipe.id);
      } else {
        return [...prevFavourites, recipe];
      }
    });
  };

  return (
    <FavContext.Provider value={{ favourite, toggleFavourite }}>
      {children}
    </FavContext.Provider>
  );
};

export const useFavourite = () => useContext(FavContext);
