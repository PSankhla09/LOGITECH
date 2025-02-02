import React from 'react'
import './Shopproducts.css';
import Product1 from './mice-vertical-gallery-tablet-2-a.webp';
import Product2 from './keyboards-vertical-gallery-tablet-2-c.webp';
import Product3 from './headsets-earbuds-vertical-gallery-tablet-2-e.webp';
import Product4 from './ipad-keyboard-cases-vertical-gallery-tablet-2-b.webp';
import Product5 from './combo-vertical-gallery-tablet-2-d.webp';
import Product6 from './webcams-vertical-gallery-tablet-2-f.webp';
const Shopproducts = () => {
  return (
    <div className="cornitos">
        <div className="puffs">
            <h2>Shop Products</h2>
        </div>
        <div className="crusties">
            <div className="cheese">
            <p>mice</p><img src={Product1} alt="Product1" className="large-image"/>
            <p>Ipad keyboard cases</p><img src={Product4} alt="Product4" className="small-image"/>
            </div>
            <div className="cheese">
            <p>keyboards</p><img src={Product2} alt="Product2" className="small-image"/>
            <p>combos</p><img src={Product5} alt="Product5" className="large-image" />
            </div>
            <div className="cheese">
            <p>headsets & earbuds</p> <img src={Product3} alt="Product3" className="large-image"/>
            <p>webcams</p> <img src={Product6} alt="Product6" className="small-image"/>
            </div>
        </div>
    </div>
  )
}

export default Shopproducts