import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import catItems from '../fakeData/categoryitem';

const CategoryDetails = () => {
    const [categoryItem, setCategoryItem] = useState({location:''});

    let {id} = useParams();
    
    const handleSearch = (e) => {
        e.preventDefault();
        setCategoryItem(catItems)

    }
    return (
        <div className="container mt-5">
            <div className="row text-white">
                <div className="col-md-4">
                    <div className="card bg-warning">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="">From</label>
                                    <input  className="form-control" type="text" name="" id="" placeholder="Komlapur"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">From</label>
                                    <input className="form-control"  type="text" name="" id="" placeholder="Chittagong"/>
                                </div>
                                <button className="btn btn-primary btn-sm" onClick={handleSearch}>Search</button>
                            </form>
                            <hr/>
                            <br/>

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h4>{catItems.c}</h4>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;