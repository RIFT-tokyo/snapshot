import { useContext, useEffect } from "react"
import { PhotoContext } from '../context/PhotoContext';
import Gallery from "./Gallery";

const Container: React.VFC<{searchTerm: string}> = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {
    runSearch(searchTerm);
  }, [runSearch, searchTerm]);

  return (
    <div className="photo-container">
      {loading ? "Loading..." : <Gallery data={images}/>}
    </div>
  );
};

export default Container;