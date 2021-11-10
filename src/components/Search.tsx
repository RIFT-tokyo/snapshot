import { useParams } from "react-router-dom";
import Container from "./Container";

const Search: React.VFC = () => {
  const {searchInput} = useParams()

  return (
    <div>
      <h2>{searchInput} Pictures</h2>
      <Container searchTerm={searchInput!} />
    </div>
  );
};

export default Search;