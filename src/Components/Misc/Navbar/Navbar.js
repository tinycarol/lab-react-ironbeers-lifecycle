
import React from 'react';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-center' style={{ backgroundColor: '#33D7FF'}}>
                <nav class="navbar navbar-light" style={{ backgroundColor: '#33D7FF' }}>
                    <a className="navbar-brand" href="#">
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fas fa-home fa-xl mt-2" style={{ color: '#FFF' }}></i>
                            </span>
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
