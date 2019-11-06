import React from 'react';
const Customers = () => {
  return (
    <div>
      <div className='navbar navbar-expand-lg navbar-dark primary-color bg-dark'>
        <div
          className='collapse navbar-collapse justify-content-center text-center'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <a className='nav-link' href='orders.html'>
                Orders <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='customers.html'>
                Customers
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='products.html'>
                Products
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='categories.html'>
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <form className='border border-light p-5'>
              <p className='h4 mb-4 text-center'>Wprowadź zamówienie</p>
              <input
                type='text'
                id='CustomerName'
                className='form-control mb-4'
                placeholder='Customer Name'
              />
              <input
                type='text'
                id='ProductID'
                className='form-control mb-4'
                placeholder='Product Id'
              />
              <input
                type='number'
                id='Quantity'
                className='form-control mb-4'
                placeholder='Quantity'
              />
              <button className='btn btn-info btn-block my-4' type='submit'>
                Dodaj rekord
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <form
              className='border border-light p-5'
              method='get'
              action='http://127.0.0.1:62270/api/Orders'
            >
              <p className='h4 mb-4 text-center'>Usuń wybrane zamówienie</p>
              <input
                type='number'
                id='id'
                className='form-control mb-4'
                placeholder='Order id'
              />
              <button className='btn btn-danger btn-block my-4' type='submit'>
                Usuń rekord
              </button>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <form
              className='border border-light p-5'
              method='get'
              action='http://127.0.0.1:62270/api/Orders'
            >
              <button
                className='btn btn btn-warning btn-block my-4'
                type='submit'
              >
                Pobiersz wszystkie rekordy
              </button>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  );
};
export default Customers;
