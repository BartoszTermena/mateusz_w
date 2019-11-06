import React, { useState } from 'react';
import axios from 'axios';
const Orders = () => {
  const [CustomerName, setCustomerName] = useState('');
  const [ProductID, setProductIDChange] = useState('');
  const [Quantity, setQuantityChange] = useState('');
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    const formData = {
      CustomerName: CustomerName,
      ProductID: ProductID,
      Quantity: Quantity
    };
    console.log(formData);
    axios
      .post(`twój_url`, { formData })
      .then(res => {
        console.log(res); //response z servera
      })
      .catch(error => {
        console.log(error.response); //error jeżeli wystąpi jakiś
      });
  };

  const handleCustomerNameChange = event => {
    setCustomerName(event.target.value);
  };
  const handleProductIDChange = event => {
    setProductIDChange(event.target.value);
  };
  const handleSetQuantityChange = event => {
    setQuantityChange(event.target.value);
  };
  return (
    <div className='container-fluid py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-6 py-1'>
          <form className='border border-light p-5' onSubmit={handleSubmit}>
            <p className='h4 mb-4 text-center'>Wprowadź zamówienie</p>
            <input
              onChange={handleCustomerNameChange}
              value={CustomerName}
              type='text'
              id='CustomerName'
              className='form-control mb-4'
              placeholder='Customer Name'
            />
            <input
              onChange={handleProductIDChange}
              value={ProductID}
              type='text'
              id='ProductID'
              className='form-control mb-4'
              placeholder='Product Id'
            />
            <input
              onChange={handleSetQuantityChange}
              value={Quantity}
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

      <div className='row justify-content-center'>
        <div className='col-md-6 py-1'>
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
      </div>

      <div className='row justify-content-center'>
        <div className='col-md-6 py-1'>
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
      </div>
    </div>
  );
};
export default Orders;
