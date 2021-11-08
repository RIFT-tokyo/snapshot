import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
export const PhotoContext = createContext<photoContextType>({} as photoContextType);

type photoContextType = {
  images: image[]
  loading: boolean
  runSearch: (query: string) => void
};

type image = {
  id: string
  owner: string
  secret: string
  server: string
  farm: number
  title: string
  ispublic: number
  isfriend: number
  isfamily: number
};

const PhotoContextProvider: React.FC = (props) => {
  const [images, setImages] = useState<image[]>([]);
  const [loading, setLoading] = useState(true);
  const runSearch = (query: string) => {
    axios
      .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log("Encountered an error with fetching and parsing data", error);
      });
  }
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};
export default PhotoContextProvider;
