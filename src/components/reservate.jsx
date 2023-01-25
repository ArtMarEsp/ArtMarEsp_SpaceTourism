// import e from "express";
import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const ReservateComponent = () => {

    function makeClick(res) {
        console.log('Make click');
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_uajorcw', 'template_fbt5xx3', form.current, 'f0ofoNw8X5bVKvP8P') //  
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="reservate">
            <div className='title'>
                <h1>R E S E R V A T E </h1>
            </div>
            <div className="reservate-form">
                <form ref={form} onSubmit={sendEmail} className="form">
                    <p className="subject-p">
                        <input name="from_name" type="text" id="subject" placeholder="Name" />
                    </p>
                    <p className="email-p">
                        <input name='reply_to' type="email" id="email" placeholder="E-mail" />
                    </p>
                    <p className="des_res-p">
                        <select name="des_res" id="des_res">
                            <option value="Moon">Moon</option>
                            <option value="Mars">Mars</option>
                            <option value="Europa">Europa</option>
                            <option value="Titan">Titan</option>
                        </select>
                    </p>
                    <p className="comment-p">
                        <textarea name="message" type="text" id="comment" placeholder="Comment" />
                    </p>
                    <div className='button-form'>
                        <input type="submit" value="Reservate" className='button-send' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReservateComponent;