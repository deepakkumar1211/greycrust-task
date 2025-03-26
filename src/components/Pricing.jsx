// import React from 'react'
// import "./Pricing.css"

// function Pricing() {
//     return (
//         <div className='pricing' id='pricing'>
//             <div>
//                 <h1>Pricing Plan</h1>
//                 <p className='pricing-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi facere accusamus possimus</p>
//                 <p className='pricing-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae </p>
//             </div>
//             <div className='pricing-sec2'>
//                 <div className='card'>
//                     <div className='send-icon'>

//                     </div>
//                     <h2>Basic Plan</h2>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti. Ullam, iure saepe ipsam quis architecto magni?</p>
//                     <div>
//                         <h2 className='price'>$100</h2>
//                         <button>Booking</button>
//                     </div>
//                 </div>

//                 <div className='card'>
//                     <div className='send-icon'>

//                     </div>
//                     <h2>Basic Plan</h2>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti. Ullam, iure saepe ipsam quis architecto magni?</p>
//                     <div>
//                         <h2 className='price'>$100</h2>
//                         <button>Booking</button>
//                     </div>
//                 </div>

//                 <div className='card'>
//                     <div className='send-icon'>

//                     </div>
//                     <h2>Basic Plan</h2>
//                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti. Ullam, iure saepe ipsam quis architecto magni? lorem5</p>
//                     <div>
//                         <h2 className='price'>$100</h2>
//                         <button>Booking</button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Pricing




// import React from 'react';
// import { GrSend } from "react-icons/gr";
// import "./Pricing.css";

// function Pricing() {
//     return (
//         <div className='price' id='pricing'>
//             <div className='pricing' >
//                 <div>
//                     <h1>Pricing Plan</h1>
//                     <p className='pricing-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi facere accusamus possimus</p>
//                     <p className='pricing-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae </p>
//                 </div>
//                 <div className='pricing-sec2'>
//                     <div className='card'>
//                         <div className='send-icon'>
//                             <GrSend className="telegram-icon" />
//                         </div>
//                         <h2>Basic Plan</h2>
//                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti.</p>
//                         <div>
//                             <h2 className='price'>$100</h2>
//                             <button>Booking</button>
//                         </div>
//                     </div>

//                     <div className='card'>
//                         <div className='send-icon'>
//                             <GrSend className="telegram-icon" />
//                         </div>
//                         <h2>Standard Plan</h2>
//                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti.</p>
//                         <div>
//                             <h2 className='price'>$200</h2>
//                             <button>Booking</button>
//                         </div>
//                     </div>

//                     <div className='card'>
//                         <div className='send-icon'>
//                             <GrSend className="telegram-icon" />
//                         </div>
//                         <h2>Premium Plan</h2>
//                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti.</p>
//                         <div>
//                             <h2 className='price'>$300</h2>
//                             <button>Booking</button>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Pricing;



import React from "react";
import { GrSend } from "react-icons/gr";
import "./Pricing.css";

const Pricing = () => {
    const plans = [
        { name: "Basic Plan", price: "$100" },
        { name: "Standard Plan", price: "$200" },
        { name: "Premium Plan", price: "$300" },
    ];

    return (
        <section className="pricing-container" id="pricing">
            <div className="pricing">
                <h1>Pricing Plan</h1>
                <p className="pricing-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi facere accusamus possimus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, autem?
                </p>
            </div>

            <div className="pricing-sec2">
                {plans.map((plan, index) => (
                    <div className="card" key={index}>
                        <div className="send-icon">
                            <GrSend className="telegram-icon" />
                        </div>
                        <h2>{plan.name}</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur beatae perspiciatis natus corrupti.
                        </p>
                        <div className="price-section">
                            <h2 className="price">{plan.price}</h2>
                            <button>Booking</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;

