import React from 'react';




const Category = (props) => {
    // const { id, name } = props.ticket;
    const { name, id } = props.categoryItem;
    const handleViewDetails = props.viewDetailsBtn;



    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">{name}</div>
                    

                    <button onClick={() => handleViewDetails(id)} className="btn btn-primary">View Destination</button>

                </div>
            </div>
        </div>
    );
};

export default Category;