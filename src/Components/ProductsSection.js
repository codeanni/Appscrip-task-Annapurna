import React, { useEffect, useState } from 'react'

const ProductsSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, [])
    

  return (
    <section className='container my-4'>
        <div className='row'>
            <div className='col-md-3'>
                <div className='mb-3'>
                    <h5><input type="checkbox"/>Customizeable</h5>
                </div>
                {/* deal for */}
                <div className="mb-3">
               <label htmlFor="dealFor" className="form-label">
              The Deal For
              </label>
              <select id="dealFor" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
              </select>
              </div>
              {/* occasion */}
          <div className="mb-3">
            <label htmlFor="occasion" className="form-label">
              Occasion
            </label>
            <select id="occasion" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Casual</option>
              <option>Formal</option>
              <option>Party</option>
            </select>
          </div>
          {/* work */}
          <div className="mb-3">
            <label htmlFor="work" className="form-label">
              Work
            </label>
            <select id="work" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Office</option>
              <option>Outdoor</option>
            </select>
          </div>
          {/* fabric */}
          <div className="mb-3">
            <label htmlFor="fabric" className="form-label">
              Fabric
            </label>
            <select id="fabric" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Cotton</option>
              <option>Polyester</option>
              <option>Wool</option>
            </select>
          </div>
          {/* segment */}
          <div className="mb-3">
            <label htmlFor="segment" className="form-label">
              Segment
            </label>
            <select id="segment" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Luxury</option>
              <option>Affordable</option>
            </select>
          </div>
          {/* suitable for */}
          <div className="mb-3">
            <label htmlFor="suitableFor" className="form-label">
              Suitable For
            </label>
            <select id="suitableFor" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Adults</option>
              <option>Teenagers</option>
              <option>Kids</option>
            </select>
          </div>
          {/* raw materials */}
          <div className="mb-3">
            <label htmlFor="rawMaterials" className="form-label">
              Raw Materials
            </label>
            <select
              id="rawMaterials"
              className="form-select"
              defaultValue="All"
            >
              <option>All</option>
              <option>Cotton</option>
              <option>Silk</option>
              <option>Denim</option>
            </select>
          </div>
          {/* pattern */}
          <div className="mb-3">
            <label htmlFor="pattern" className="form-label">
              Pattern
            </label>
            <select id="pattern" className="form-select" defaultValue="All">
              <option>All</option>
              <option>Striped</option>
              <option>Checked</option>
              <option>Plain</option>
            </select>
          </div>
        </div>

        {/* right side- Products */}
        <div className="col-md-9">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                {" "}
                {/* 3 products in one row (col-md-4) */}
                <div className="card h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    {/* truncate long titles */}
                    <h5 className="card-title text-truncate">
                      {product.title}
                    </h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
</section>
  )
}

export default ProductsSection