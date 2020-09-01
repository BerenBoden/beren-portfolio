import React from 'react';
import './Projects.scss';
import ecom from '../../img/ecommerce.png';
import styled from 'styled-components';
import fbclone from '../../img/fbclone.png'

const Cards = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    .card__container {
        margin-top: 50px;
        min-height: 500px;
        width: 340px;
        background: #fff;
        border-radius: 1px;
        box-shadow: 0 1px 6px rgba(0,0,0, 0.6);
        cursor: pointer;
        transition: 250ms all;
        &:hover {
            transform: scale(1.01);
        }
        .card__top {
            height: 40%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1px 1px 0 0;
            }
        }
        .card__bottom {
            height: 60%;
            padding: 10px;
            font-size: 0.8rem;
                p {
                color: #000;
                margin-top: 5px;
                }
                .card__button {
                    display: flex;
                    flex-direction: column;
                        .button {
                            transition: 0.2s ease-in-out;
                            margin: 10px 0;
                            background: #ccc;
                            padding: 10px 0px;
                            width: 100%;
                            flex-direction: row;
                            border-radius: 5px;
                            text-align: center;
                            &:hover {
                                cursor: pointer;
                                background: #000;
                                a {
                                color: #fff;
                        }
                    }
                    a {
                        width: 100%;
                        transition: 0.2s ease-in-out;
                        font-family: 'Poppins', sans-serif;
                        outline: none;
                        border: none;
                        border-radius: 5px;
                        padding: 10px 20px;
                        font-weight: 500;
                        color: #000;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
@media only screen and {max-width: 768px} {
    padding: 10px;
}
`

const Projects = () => {
    return (
        <div id="project" className="project">
            <h1>
                My Projects
            </h1>
            <Cards>
                <div className="card__container">
                    <div className="card__top">
                        <img src={ecom} alt="ecommerce project with ReactJS" />
                    </div>
                    <div class="card__bottom">
                        <h2>Ecommerce Website With ReactJS</h2>
                        <p>For this project, I used ReactJS, NodeJS, Sass and HTML to create
                            an E-commerce website. The features of this website is add to cart
                            functionality, purchase functionality (PayPal & Credit Card), and page routing functionality. 
                        </p>
                        <div className="card__button">
                            <div className="button">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden/ecommerce-project">View Live</a>
                            </div>
                            <div className="button">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden/ecommerce-project">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__top">
                        <img src={fbclone} alt="facebook clone with ReactJS" />
                    </div>
                    <div class="card__bottom">
                        <h2>Facebook Clone With ReactJS</h2>
                        <p>For this project, I used ReactJS, Sass, Redux, Material UI and Firebase with Google authentication to create
                            a small Facebook clone. The main feature of this project is to be able to type a message and add an image in the MessageSender component,
                            and this message will be stored on the Firebase database where it is shown directly on the website in real time. 
                        </p>
                        <div className="card__button">
                            <div className="button">
                                <a target="_blank" rel="noopener noreferrer" href="https://fb-clone-da943.web.app/">View Live</a>
                            </div>
                            <div className="button">
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden/facebook-clone">View Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__top">
                        <img src="/img/ecommerce.png" alt="#" />
                    </div>
                    <div class="card__bottom">
                        <h2>Ecommerce Website With ReactJS</h2>
                        <p>For this project, I used ReactJS, NodeJS, Sass and HTML to create
                            an E-commerce website. The features of this website is add to cart
                            functionality, purchase functionality (PayPal & Credit Card), and page routing functionality. 
                        </p>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__top">
                        <img src="/img/ecommerce.png" alt="#" />
                    </div>
                    <div class="card__bottom">
                        <h2>Ecommerce Website With ReactJS</h2>
                        <p>For this project, I used ReactJS, NodeJS, Sass and HTML to create
                            an E-commerce website. The features of this website is add to cart
                            functionality, purchase functionality (PayPal & Credit Card), and page routing functionality. 
                        </p>
                    </div>
                </div>        
            </Cards>
        </div>
    )
}

export default Projects
