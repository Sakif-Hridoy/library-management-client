import React from 'react';
import PropTypes from 'prop-types';

const BorrowModal = props => {
    return (
        <div>
            
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    );
};

BorrowModal.propTypes = {
    
};

export default BorrowModal;