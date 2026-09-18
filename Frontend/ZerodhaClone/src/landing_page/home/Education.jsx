import React from 'react';

export function Education() {
    return ( 
   <div className="container m-5">
    <div className="row">
        <div className="col-6 ">
          <img src="/media/education.svg" alt="" />
        </div>

        <div className="col-6">
        <h1 >Free and open market education</h1>
          <p className='p-4'>Varsity, the largest online stock market education book in the world convering everything from the basics to advanced trading.</p>
          <a href="" className='mx-5' style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
          <p className='p-4'>TradingQ&A, the most active trading and investment community in india for all your manipulated</p>
          <a href="" className='mx-5' style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
    </div>
   </div>
 );
}

    export default Education;