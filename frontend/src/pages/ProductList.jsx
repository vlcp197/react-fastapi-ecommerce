import Card from '../components/Card'

const ProductList = ({ products }) => {

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "..."; 
    }
    return text;
  };


  return (
    <div className="card-list">
      {products.map(product => (
          <Card key={product.id} 
                title={product.title} 
                desc={truncateText(product.body, 20)} 
                img={product.img}
                price={product.price} 
                id={product.id}/>
      ))}
    </div>
  );
}
 
export default ProductList;