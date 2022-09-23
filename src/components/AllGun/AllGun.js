import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './AllGun.css';

const AllGun = ({countIncrease}) => {
    const [guns, setGuns] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    },[])
    return (
        <div className='mt-6'>
            <div className='my-8'>
                <h2 className='text-4xl text-center mt-5'>Welcome to my <span className='text-secondary'>Gum</span> Store...!</h2>
                <p className='mt-2 p-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit enim id, esse non hic asperiores ut a officia aspernatur beatae iure voluptates fugiat accusamus dicta, voluptatibus quasi possimus repudiandae, veritatis sequi. Illo quo reiciendis tenetur qui expedita nulla, corrupti magnam. </p>
            </div>

            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    guns.map((gun => (
                        <SingleCard gun={gun} countIncrease={countIncrease}></SingleCard>
                    )))
                }
            </div>
        </div>
    );
};

export default AllGun;