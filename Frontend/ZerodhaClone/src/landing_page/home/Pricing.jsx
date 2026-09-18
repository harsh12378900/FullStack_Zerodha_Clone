import React from 'react';

export function Pricing() {
    return ( 
   <div className='container m-5'>
    <div className="row">
        <div className="col-4">
            <h1 className='mb-3'>Unbeatable pricing</h1>
            <p>We pionered the consept of discount broking and price transparency in india . flat fees and no hidden charges</p>
            <a href="" className='mx-5' style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>

        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="row text-center">
                <div className="col p-2 border">
                <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                <p className='p-3'>free equity delivery and direct mutual funds</p>
                </div>

                <div className="col p-2 border">
                <h1><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                <p className='p-3 '>free equity delivery and direct mutual funds</p>
                </div>
            </div>
        </div>
    </div>

   </div>
 );
}

    export default Pricing;