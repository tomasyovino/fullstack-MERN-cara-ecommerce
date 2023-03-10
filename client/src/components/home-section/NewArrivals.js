import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NewArrivals = ({ products }) => {
  const [ newArrivals, setNewArrivals ] = useState(null);

  useEffect(() => {
    products && setNewArrivals(products.sort((a, b) => a.createdAt - b.createdAt));
  }, [products, newArrivals])
  
  return (
    <section id="newArrivals" className="product1 section-p1">
        <h2>Ingresos Recientes</h2>
        <p>Colección de verano - Nuevo Diseño de Morden</p>
        <div className="pro-container">
          {
            newArrivals && newArrivals.map((product) => (
              <div className="pro" key={product._id}>
                <img src={product.file[0].imgUrl} alt={product.name} />
                <div className="description">
                  <span>{product.brand}</span>
                  <h5>{product.name}</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <h4>${product.price}</h4>
                  </div>
                  <Link to={`/products/${product._id}`}><i className="fa-solid fa-shopping-cart cart"></i></Link>
                </div> 
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default NewArrivals