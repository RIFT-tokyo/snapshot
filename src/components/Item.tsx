import Container from "./Container";

const Item: React.VFC<{searchTerm: string}> = ({searchTerm}) => {
  return (
    <div>
      <h2>{searchTerm} Pictures</h2>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;