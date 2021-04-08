import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Category from '../Categories/Category';
import categoryData from '../fakeData/category.json';
import './Home.css';


const Home = () => {
    const [category, setCategory] = useState([]);
    let history = useHistory()

    useEffect(() => {
        setCategory(categoryData);

    }, [category])

    

    const viewTicketDetails = (id) => {
        history.push(`/category-details/${id}`);
    }

    return (
        <div className="container p-0 ">
            <div className="row mt-5 align-items-center">

                {
                    category.map(category => <Category categoryItem={category} viewDetailsBtn={viewTicketDetails}></Category>)
                }

            </div>
        </div>
    );
};

export default Home;