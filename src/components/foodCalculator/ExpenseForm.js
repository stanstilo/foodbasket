import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label className = 'calculator-label' htmlFor="expense">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>

      <div className='form-centered'>
      <fieldset className="form-group">
      <label className = 'calculator-label'> Age Category</label>
      <select className='form-control'>
          <option>Select</option>
          <option>Child</option>
          <option>Adolescent</option>
          <option>Middle Age</option>
          <option>Adult</option>
          <option>Aged</option>
        </select>
      </fieldset>
       
      <fieldset className="form-group">
      <label className = 'calculator-label'>Sex</label>
        <select className='form-control'>
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>   
          </select>
        </fieldset>
      </div> 
      <div className='form-centered'>
      <fieldset className="form-group">  
      <label className = 'calculator-label'>
         Food Category
      </label>
      <select className='form-control'>
          <option value=''>Select</option>
          <option value='grains'>Grains</option>
          <option value='soup'>Soup</option>
          <option value='tubers'>Yam</option>
          <option value='legumes'>Legumes</option>
          <option value='stew'>Stew</option>
          <option value='vegetable'>Vegetable</option>
          <option value='fruit'>Fruit</option>
          <option value='beverage'>Beverage</option>
          </select>
        </fieldset>

      <fieldset className="form-group">
      <label className = 'calculator-label'>Meal Type</label>
      <select className='form-control'>
          <option value=''>Select</option>
          <option value='fried_rice'>Fried Rice</option>
          <option value='jollof_rice'>Jollof Rice</option>
          <option value='white_rice'>white Rice</option>
         </select>
        </fieldset>
      </div>
      
     
       <button type="submit" className="calculator-btn">
        {edit ? "edit" : "submit"}
        {/* submit  */}
        <MdSend className="calculator-btn-icon" />
       </button>
    </form>
  );
};

export default ExpenseForm;
