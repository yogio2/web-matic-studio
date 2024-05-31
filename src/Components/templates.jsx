import React, { useRef, useEffect, useState } from 'react';
import './StyleJS/templates.css'
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faEye, faCartShopping } from '@fortawesome/free-solid-svg-icons'

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [graphical, setGraphical] = useState(true);
  const [products2, setProducts2] = useState([]);

  useEffect(() => {
    const fetchData = async (url, setState) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData('src/Components/products.json', setProducts);
    fetchData('src/Components/graphics.json', setProducts2);
  }, []);

  const handleToggle = (isGraphical) => {
    setGraphical(isGraphical);
  };

  //-----------------------------------------------------------------------------------------------------------------------
  
  //-----------------------------------------------------------------------------------------------------------------------

  return (
    <section className='tempContainer'>
      
      <header>
        <h1 className="header__title headings"><span>Most </span>Popular Products</h1>
      </header>
      <div className="switchTemplate">
        <button className={`switcheroo ${graphical ? 'Selected' : ''}`} onClick={() => handleToggle(true)}>Web Pages</button>
        <button className={`switcheroo ${graphical ? '' : 'Selected'}`} onClick={() => handleToggle(false)}>Graphics</button>
      </div>
      {graphical ? (
      <div className="webTemp templateWrapper">
        <div className="most-popular-products">
          {products.map(product => (
            <div className="product-card" key={product.id} data-product-id={product.id}>
              <div className="product-card__container" style={{ backgroundImage: `url(${product.images[0].url})` }} alt={product.name}>
                <div className="product-card__btn cart" data-tooltip="add to cart">
                  <span className="material-symbols-rounded"> shopping_bag </span>
                </div>
                <div className="product-card__btn fav" data-tooltip="add to wishlist">
                  <span className="material-symbols-rounded"> favorite </span>
                </div>
                <div className="product-card__img">
                  {/* <img src={product.images[0].url} alt={product.name} /> */}
                </div>
              </div>
              <div className="product-card__description">
                <div className="descript">
                  <div className="product-card__text">{product.name}</div>
                  <div className="product-card__price">APR</div>
                </div>
                <div className="preview">
                  <div className="buttons">
                  <Popup trigger={<button className="button"> <FontAwesomeIcon icon={faEye} /> </button>} modal>
                    <canvas className='presenter'></canvas>
                    <div className="quickView" /* style={{ backgroundImage: `url(${product.images[0].url})` }} alt={product.name} */>
                      <img className='viewImg' src={product.images[0].url} alt={product.name}/>
                    </div>
                  </Popup>
                  {/* <button><FontAwesomeIcon icon={faCartShopping} /></button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>) : (
      <div className="graphics templateWrapper">
        <div className="most-popular-products">
          {products2.map(product => (
            <div className="product-card" key={product.id} data-product-id={product.id}>
              <div className="product-card__container">
                <div className="product-card__btn cart" data-tooltip="add to cart">
                  <span className="material-symbols-rounded"> shopping_bag </span>
                </div>
                <div className="product-card__btn fav" data-tooltip="add to wishlist">
                  <span className="material-symbols-rounded"> favorite </span>
                </div>
                <div className="product-card__img" style={{ backgroundImage: `url(${product.images[0].url})` }} alt={product.name}>
                  <img src={product.images[0].url} alt={product.name} />
                </div>
              </div>
              <div className="product-card__description">
                <div className="desc">
                  <div className="product-card__text">{product.name}</div>
                  <div className="product-card__price">APR</div>
                </div>
                <div className="preview">
                  <div className="buttons">
                  <Popup
                    trigger={<button className="button"> <FontAwesomeIcon icon={faEye} /> </button>}
                    modal
                  >
                    <canvas className='presenter'></canvas>
                    <div className="quickView" /* style={{ backgroundImage: `url(${product.images[0].url})` }} alt={product.name} */>
                    <img className='viewImg' src={product.images[0].url} alt={product.name}/>
                    </div>
                  </Popup>
                  {/* <button className='buyNow'><FontAwesomeIcon icon={faCartShopping} /></button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> ) }
    </section>
  );
}

export default ProductCard;
