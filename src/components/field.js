import React from 'react';

const field = (props) => {
    
    return (
        <div className="form-group">
            <label htmlFor="">{props.label}</label>
            <input {...props} className="form-control" type="text"/>
        </div>
    )
}

export default field 