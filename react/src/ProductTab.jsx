import Product from "./Product.jsx";
function ProductTab(){
    let options = ["hi-tech", "technology", "ltd"]
    
    return(
        <>
         <Product title = "phone" price={30000} features={options}/>
      <Product title = "laptop" price = {40000} />
    <Product title="pen" price={1} />
        </>
    )
}
export default ProductTab;