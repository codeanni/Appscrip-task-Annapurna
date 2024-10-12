import React from 'react'

const Section3 = () => {
  return (
    <section className='d-flex justify-content-between p-3 bg-white px-5'>
        <div>10 items</div>
        <div>
        <label htmlFor="recommended" className="form-label me-2">Recommended:</label>
              <select id="recommended" className="form-select d-inline-block w-auto">
                <option>Newest First</option>
                <option>Popular</option>
                <option>Price: High to Low</option>
                <option>Price: Low to High</option>
              </select>
        </div>
    </section>
  )
}

export default Section3