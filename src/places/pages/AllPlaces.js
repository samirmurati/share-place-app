import React, { useEffect, useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import PlaceList from "../components/PlaceList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

import { useHttpClient } from "../../shared/hooks/http-hook";

import "./AllPlaces.css";

const AllPlaces = () => {
  const [allPlaces, setAllPlaces] = useState();

  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/places/all-places"
        );
        setAllPlaces(response.places);
      } catch (err) {}
    };
    getAllUsers();
  }, [sendRequest]);

  const deletePlaceHandler = (placeID) => {
    setAllPlaces((prevPlaces) =>
      prevPlaces.filter((places) => places.id !== placeID)
    );
  };

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && allPlaces && (
        <PlaceList items={allPlaces} onDeletePlace={deletePlaceHandler} />
      )}
    </React.Fragment>
  );
};

export default AllPlaces;
