const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.685,
    longitude: 90.3563,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
];

/** location data get function */

const getLocation = () => {
  return data;
};

const getLocationByName = (location) => {
  if (!location) return null;

  const filteredLocation = data.filter((item) => item.location === location);

  if (filteredLocation.length > 0) {
    return filteredLocation[0];
  } else {
    const defaultLoation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLoation;
  }
};

export { getLocation, getLocationByName };
