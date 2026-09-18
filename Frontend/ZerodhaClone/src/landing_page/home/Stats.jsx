import React from 'react';

export function Stats() {
    return ( 
   <div className="container p-5">
    <div className="row p-5">
        <div className="col-6 p-5">
            <h1 className='fs-3 mb-5'>Trust with confidence</h1>
            <h2 className='fs-4'>
                Customer-first always
            </h2>
            <p className='text-muted'>
                That's why 1.3 crore customer trust Zerodha with 3.5+ lakh crores worth of equity investments.
            </p>

            <h2 className='fs-4'>No spam or gimmicks</h2>
            <p className='text-muted'>No gimmicks spam gamfication or annoying push notifications high quality apps that you use at your pace the way you like</p>

            <h3 className='fs-4'>The Zerodha universe</h3>
            <p className='text-muted'>Not just an app but a whole ecosystem our inversystem in 30+ finitech startups offer you tailored services specific to your needs</p>

            <h3 className='fs-4'>Do better with money</h3>
            <p className='text-muted'>with initiatives like Nudge and kill switch we don't just facilate transitions but actively help you do better with your money</p>
        </div>
        <div className="col-6 p-5">
            <img src="/media/ecosystem.png" alt="" style={{width:"100%",}}/>

            <div>
                <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href="" style={{textDecoration:"none"}}>Try kite demo </a>
            </div>
        </div>
    </div>
   </div>
 );
}

    export default Stats;