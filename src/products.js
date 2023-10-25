import Star from "./star.svg";

const Products = (a) => {
  console.log(a.product[0].rating);
  

  //console.log(click)

  return (
    
   
    <>
     {/* // product-1 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              {/* product-rating */}
              
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
           {a.product[0].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[0]}
              type="button"
              disabled={a.b}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* // product-2 */}
    
      <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
            {a.product[1].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[1]}
              type="button"
              disabled={a.c}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* // product-3 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
            {a.product[2].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[2]}
              type="button"
              disabled={a.d}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* // product-4 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
            {a.product[3].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[3]}
              type="button"
              disabled={a.e}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* // product-5 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
            {a.product[4].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[4]}
              type="button"
              disabled={a.f}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* // product-6 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
           {a.product[5].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[5]}
              type="button"
              disabled={a.g}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>


    {/* // product-7 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
            {a.product[6].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[6]}
              type="button"
              disabled={a.h}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* // product-8 */}
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Fancy Product</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
              <div>
                <img src={Star}></img>
              </div>
            </div>
            {/* <!-- Product price--> */}
            {a.product[7].price}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              onClick={a.a[7]}
              type="button"
              disabled={a.i}
              className="btn btn-outline-dark mt-auto"
              href="#"
            >
              View options
            </button>
          </div>
        </div>
      </div>
    </div>
</>
    
  );
};

export default Products;
