import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;
    const slideforward = () => {
        if (tx > -50){
            tx -= 25;
        }
        // console.log(tx);
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slidebackward = () => {
        if (tx < 0){
                tx += 25;
        }
        // console.log(tx);
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn'
                onClick={slideforward} />
            <img src={back_icon} alt="" className='back-btn'
                onClick={slidebackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>kendra mia</h3>
                                    <span>korea VIIT</span>
                                </div>
                            </div>
                            <p>
                            It's difficult to sum up the memories and experience of four years in few lines. I consider myself very lucky for being a part of VIIT. There is something motivational and special in this environment which made us study and enjoy co-curricular activities.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>vijay sardesai</h3>
                                    <span>india viit</span>
                                </div>
                            </div>
                            <p>
                            It's been one and a half year in the department and it has been my second home ever since my first semester here. Before joining the department I was filled with a misleading notion that the journey is extremely difficult. But now I proudly beg to differ.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Ms. Lina</h3>
                                    <span>usa Viit</span>
                                </div>
                            </div>
                            <p>
                            It's been one and a half year in the department and it has been my second home ever since my first semester here. Before joining the department I was filled with a misleading notion that the journey is extremely difficult. But now I proudly beg to differ.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>atish</h3>
                                    <span>india viit</span>
                                </div>
                            </div>
                            <p>
                            It's been one and a half year in the department and it has been my second home ever since my first semester here. Before joining the department I was filled with a misleading notion that the journey is extremely difficult. But now I proudly beg to differ.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
