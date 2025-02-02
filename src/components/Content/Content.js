import React from 'react'
import './Content.css';
import Img1 from './keys-to-go-2-hpb-secondary.webp';
import Img2 from './combo-touch-ipad-air-12.9-inch-hpb-desktop1.webp';
import Img3 from './pop-icon-hpb-secondary.webp';

const Content = () => {
  return (
    <div className="pushkar">
        <div className="harsh">
           <a href="https://www.logitech.com/en-in/products/tablet-keyboards/keys-to-go2-universal.html"><img src={Img1} alt="Img1"  /></a>
            <h2>Powerfully portable. For tablets.</h2>
            <p>A slim, ultra-portable tablet keyboard that goes anywhere.</p>
            <a href="https://www.logitech.com/en-in/products/tablet-keyboards/keys-to-go2-universal.html" className='shop-now'>Shop Keys-To-Go 2<span className="arrow">→</span></a>
        </div>
        <div className="shlok">
            <a href="https://www.logitech.com/en-in/products/ipad-keyboards/combo-touch-ipad-learn.html"><img src={Img2} alt="Img2" /></a>
            <h2>Take iPad further</h2>
            <p>Type, sketch, view and read with Combo Touch keyboard case for the new iPad Pro and iPad Air.</p>
            <a href="https://www.logitech.com/en-in/products/ipad-keyboards/combo-touch-ipad-learn.html" className='shop-now'>LEARN MORE<span className="arrow">→</span></a>
        </div>
        <div className="kushagra">
            <a href="https://www.logitech.com/en-in/products/combos/pop-icon-combo.html" ><img src={Img3} alt="Img3" /></a>
            <h2>Start with a POP</h2>
            <p>Add an extra pop to your desk with the POP Icon combo, a wireless keyboard and mouse that are stylish, compact and customizable.</p>
            <a href="https://www.logitech.com/en-in/products/combos/pop-icon-combo.html" className='shop-now'>Shop Now<span className="arrow">→</span></a>
        </div>
    </div>
  )
}

export default Content