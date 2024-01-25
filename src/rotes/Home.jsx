import React from 'react';

const Home = () => {
    return (
        <div className="formgrid grid">
            <div className="field col-12 md:col-6">
                <label htmlFor="firstname6">Firstname</label>
                <input id="firstname6" type="text"
                       className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
            </div>
            <div className="field col-12 md:col-6">
                <label htmlFor="lastname6">Lastname</label>
                <input id="lastname6" type="text"
                       className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
            </div>
        </div>
    );
};

export default Home;