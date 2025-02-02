import React from 'react'
import Ergo from './ergo-series-horizontal-gallery-desktop-a.webp';
import MX from './mx-master-series-vertical-gallery-desktop-b.webp';
import Coders from './mx-for-coders-vertical-gallery-desktop-d.webp';
import Creatives from './mx-for-creatives-horizontal-gallery-desktop-f.webp';
import Onthego from './on-the-go-horizontal-gallery-desktop-e.webp';
import './Shopseries.css';
const Shopseries = () => {
  return (
    <div className="shopseries">
        <div className="rishith">
            <h1>Shop Series</h1>
        </div>
        <div className="naman">
            <div className="reddy">
                <img src={Ergo} alt="Ergo" />
                <h4>Ergo Series</h4>
                <p>Meet the Ergo products designed to enhance your comfort and productivity.</p>
            </div>
            <div className="reddy">
                <img src={MX} alt="MX" />
                <h4>MX Master Series</h4>
                <p>Unleash your capability to create, make, and do.</p>
            </div>
            <div className="reddy">
                <img src={Coders} alt="Coders" />
                <h4>For Coders</h4>
                <p>Master your workflow until your last line of code is written and compiled.</p>
            </div>
            <div className="reddy">
                <img src={Creatives} alt="Creatives" />
                <h4>For Creatives</h4>
                <p>Logi products are built for every step of the creative process.</p>
            </div>
            <div className="reddy">
                <img src={Onthego} alt="Onthego" />
                <h4>On the go</h4>
                <p>Discover the mobile products and portable tools designed to work and play on the go.</p>
            </div>
        </div>
    </div>
  )
}

export default Shopseries