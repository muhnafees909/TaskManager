import React from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
    return(
        <div className='homepage-container'>
            <h1 className='homepage-header'>Task Manager</h1>
            <button className='new-task-btn'>New Task +</button>
            <div className='outer-flexbox'>
                <div className='inner-flexbox'>
                    <div className='task-header'>Todo</div>
                    <div className='flex-item'>
                        <div className='task-date'>
                            Today*
                        </div>
                        <div className='task-name'>
                            Finish this project
                        </div>
                        <div className='task-time'>
                            9:00 AM - 12:00 PM
                        </div>
                    </div>
                    <div className='flex-item'>todo 2</div>
                </div>
                <div className='inner-flexbox'>
                    <div className='task-header'>In Progress</div>
                    <div className='flex-item'>in progress 1</div>
                </div>
                <div className='inner-flexbox'>
                    <div className='task-header'>Completed</div>
                    <div className='flex-item'>completed</div>
                    <div className='flex-item'>completed</div>
                    <div className='flex-item'>completed</div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;