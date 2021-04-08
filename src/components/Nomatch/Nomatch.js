import React from 'react';

const Nomatch = () => {
    return (
        <div className="container mt-4">
            <div className="alert alert-warning mx-auto text-center">
                <h2 className="display-4 text-danger"> Sorry !! Requested Page NOT FOUND</h2>
                <h3 className="text-danger"> Error 404 </h3>
            </div>
        </div>
    );
};

export default Nomatch;