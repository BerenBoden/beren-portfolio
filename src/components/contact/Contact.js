import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'; 
import './Contact.scss'

/* eslint-disable */
const subjectRE=/^[a-zA-Z0-9_ ]{2,10}$/;
const nameRE=/^[a-zA-Z_ ]{2,10}$/;
const emailRE=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

export default function ContactUs() {
    const [user, setUser] = useState({
        subject: '',
        subjectErr: '',
        name: '',
        nameErr: '',
        email: '',
        emailErr: '',
        message: '',
        messageErr: ''
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setUser(prevData => {
                return({...prevData, subjectErr: '', nameErr: '', emailErr: ''})
            });
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [user.subjectErr, user.nameErr, user.emailErr])

    function sendEmail(e) {
    e.preventDefault();

    if(
        userValidation(subjectRE, user.subject, 'subjectErr') && 
        userValidation(nameRE, user.name, 'nameErr') &&
        userValidation(emailRE, user.email, 'emailErr'))
        {
        emailjs.sendForm('gmail', 'email_beren', e.target, 'user_UbO2fdiEpLffF0OdcXUY3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset() 
            alert('Form has been submitted :)')
        }
    };
    const handleChange = (e) => {
        const {name, value} = e.target
        setUser(prevData => {
            return({...prevData, [name]:value})
        });
    };

    const userValidation = (re, fieldName, err) => {
        if(!re.test(fieldName)){
            setUser(prevData =>{
                return({
                    ...prevData,
                    [err]:'Please enter a valid input',
                });
            });
            return false
        } else {
            setUser(prevData =>{
                return({
                    ...prevData,
                    [err]:'',
                });
            });
            return true
        }
    };
    return (
    <div id="contact" className="contact">
        <h1>
            Contact Me
        </h1>
        <form className="contact__form" onSubmit={sendEmail}>
            <div className="contact__block">
                <label>Subject</label>
                <input type="text" name="subject" value={user.subject} placeholder="Enter your subject..." onChange={(e) => handleChange(e)} className={user.subjectErr && 'err'}/>
                {user.subjectErr && <small>{user.subjectErr}</small>}
            </div>
            <div className="contact__block">
                <label>Name</label>
                <input type="text" name="name" value={user.name} placeholder="Enter your name..." onChange={(e) => handleChange(e)} className={user.nameErr && 'err'}/>
                {user.nameErr && <small>{user.nameErr}</small>}
            </div>
            <div className="contact__block">
                <label>Email</label>
                <input type="email" name="email" noValidate value={user.email} placeholder="Enter your email..." onChange={(e) => handleChange(e)} className={user.emailErr && 'err'}/>
                {user.emailErr && <small>{user.emailErr}</small>}
            </div>
            <div className="contact__block">
                <label>Message</label>
                <textarea name="message" value={user.message} placeholder="Enter your message..." onChange={(e) => handleChange(e)}/>
            </div>
            <div className="button">
                <input type="submit" value="Send" />
            </div>
        </form>
    </div>
    );
}
