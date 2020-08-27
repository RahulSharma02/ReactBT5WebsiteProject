import React from 'react';
import {NavLink} from "react-router-dom";


const Basecompo = (props) => {
    return (
        <>
          <section id = "header" className ="d-flex align-items-center">
          <div className = "container-fluid">
                <div className = "row">
                <div className = "col-10 mx-auto">
                 <div className = "row">
                  <div className ="col-md-6 pt-5 order-2 order-lg-2 d-flex justify-content-center flex-column">
                   <h1>
                   {props.name} <br/><strong className ="brand-name">Rahul Fangalia</strong>

                   </h1>
                    <h2 className ="my-3">
                    We are a team of dedicated web developers and digital marketters.

                    </h2>
                    <div className ="mt-3">
                        <NavLink to ={props.visit} className ="btn-get-started ">{props.btname}</NavLink>
                    </div>

                  </div>
                       {/* image div starts here */}
                   
                    <div className ="col-lg-6 order-1 order-lg-2 header-img">
                        <img src = {props.img} className = "img-fluid animated" alt ="animate"/>
                    </div>
                    </div>

                </div>
                </div>
            </div>

          </section>  
        </>
    );
}

export default Basecompo;
