import "./Product.css";
function Product({title, price, features}){
  

   
   

    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>price :{price}</h5>
           {price > 30000 ? <p>50 % discount</p> : null}
        </div>
       
    )
}
export default Product;