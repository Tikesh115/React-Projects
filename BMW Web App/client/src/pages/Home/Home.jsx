import React from 'react'
import './Home.css'
import topImage from '../../assets/top.jpg'
import sideImage from '../../assets/images/Background-route-img.jpg'
import carImage from '../../assets/images/-bmw-m5-cs-side-car-removebg-preview.png'
import card1 from '../../assets/images/bmw_m5_cs_84 card (1).jpg'
import card2 from '../../assets/images/bmw_m5_cs_84 card (2).jpg'
import card3 from '../../assets/images/bmw_m5_cs_84 card (3).jpg'

const Home = () => {
  return (
    <div>
        <div classNameName='top'>
            <img src={topImage}/>
            <h1 classNameName="car-name">The M5 CS</h1>
        </div>
        <div className="side-view">
            <img src={sideImage} classNameName='side-image'/>
            <div classNameName="skew"></div>
            <h1 classNameName="M5-F90">M5 F90</h1>
            <img src={carImage} classNameName="car"/>
        </div>
        <div classNameName="intro">
            <div classNameName="svg-flag">
                <div classNameName="blue"></div>
                <div classNameName="darkb-blue"></div>
                <div classNameName="red"></div>
            </div>
            <div classNameName="details">
                <h1>The BMW M5 CS F90</h1>
                <h3>Even sportier, even more luxurious, even more exclusive: The BMW M5 CS is the new top model from BMW M.</h3>
                <p>Get ready for the most powerful BMW M production model there has ever been: With the BMW M5 CS, BMW M expands its model programme of the BMW M5 sedan for the first time in its history with an exclusive CS model. CS stands for Competition Sport: The BMW M5 CS delivers ground-breaking performance and motor sport genetics right down to the smallest detail. With exclusive suspension, lightweight-construction and design components, only available for this model, it achieves a unique character in terms of performance and premium sports aspirations</p>
            </div>
        </div>
        {/* Elevating-Performance-start  */}
        <div className="performance">
            <div>
                <div className="box">
                    <div className="img"><img src={card1}/></div>
                    <div className="info">
                        <h1>Unique Performance</h1>
                        <p>Exclusive design highlights like carbon elements and accents in Gold Bronze underline the pre-eminence of the BMW M5 CS both aerodynamically and optically.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="info1">
                        <h1>LightWeight Technologies</h1>
                        <p>The intelligent material mix with carbon fibre-reinforced plastic (CFRP) along with special lightweight construction measures reduce the weight of the BMW M5 CS – while at the same time increasing its agility and performance. This is particularly visible through the exclusive carbon bonnet with exposed carbon fibre air ducts.</p>
                    </div>
                    <div className="img"><img src={card2}/></div>
                </div>
                <div className="box">
                    <div className="img"><img src={card3}/></div>
                    <div className="info">
                        <h1>M Power - Refined </h1>
                        <p>Under the carbon bonnet, everything points to motor racing: With 467 kW (635 hp) and 750 Nm of torque, the M TwinPower Turbo 8-cylinder petrol engine accelerates the vehicle from 0 to 100 km/h in 3.0 seconds. Thanks to two TwinScroll turbochargers, High-Precision Injection and Valvetronic fully variable valve control, the 4.4-litre engine delivers energetic thrust even from low rpms, direct responsiveness and tremendous power.</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Elevating-Performance-end */}
    </div>
  )
}

export default Home
