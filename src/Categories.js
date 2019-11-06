import React from 'react';
const Categories = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <form className='border border-light p-5' method='post'>
              <button className='btn btn-danger btn-block my-4'>
                Brak kontrolera dla kategorii, ale przecież Siwik nie musi o tym
                wiedzieć
              </button>
            </form>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
