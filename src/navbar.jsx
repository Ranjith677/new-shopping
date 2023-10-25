import React, { useState } from "react";
import Cart from "./cart.svg";
import Products from "./products";

const Navbar = () => {
  const [sart, setsart] = useState(0);
  const [click1, setclick1] = useState(false);
  const [click2, setclick2] = useState(false);
  const [click3, setclick3] = useState(false);
  const [click4, setclick4] = useState(false);
  const [click5, setclick5] = useState(false);
  const [click6, setclick6] = useState(false);
  const [click7, setclick7] = useState(false);
  const [click8, setclick8] = useState(false);


 var delfun=[ function cartdelete(params) {
    if (sart>0) {
      setsart(0);
    }
    
  }]
  
  const Function=[
    
     function adding1(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick1(true);
        console.log(click1);
      },

      function adding2(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick2(true);
        console.log(click2);
      },
    
      function adding3(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick3(true);
        console.log(click3);
      },

      function adding4(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick4(true);
        console.log(click4);
      },

      function adding5(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick5(true);
        console.log(click5);
      },

      function adding6(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick6(true);
        console.log(click6);
      },
      function adding7(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick7(true);
        console.log(click7);
      },

      function adding8(params) {
        console.log("hi ");
        if (sart <= 8) {
          setsart(sart + 1);
        }
        setclick8(true);
        console.log(click8);
      }






  ];
var products_detail=[

{
    price:'15$',
    rating:5

},
{
    price:'13$',
    rating:3

},
{
    price:'100$',
    rating:2

},
{
    price:'10$',
    rating:5

},
{
    price:'10$',
    rating:4

},
{
    price:'10$',
    rating:3

},
{
    price:'10$',
    rating:2

},
{
    price:'10$',
    rating:3

}


]
  
 

  return (
    <div>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit" onClick={delfun[0]}>
              <i>
                  <img src={Cart} />
              </i>  

                <span classNameName="badge bg-dark text-white ms-1 rounded-pill">
                  <h8>
                    <b>{sart}</b>
                  </h8>
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* header  */}

      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
      {/* product list  */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Products a={Function}
                      b={click1}
                      c={click2}
                      d={click3}
                      e={click4}
                      f={click5}
                      g={click6}
                      h={click7}
                      i={click8} 
                      product={products_detail}></Products>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
