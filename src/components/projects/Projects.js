import React from 'react';
import './Projects.scss';
import ecom from '../../img/ecommerce.png';
import styled from 'styled-components';
import fbclone from '../../img/fbclone.png';
import codeunload from '../../img/codeunload.png';
import twitterclone from '../../img/twitterclone.png';


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
                        a {
                            color: #000;
                            text-decoration: none;
                        .button {
                            transition: 0.2s ease-in-out;
                            margin: 3px 0;
                            background: #ccc;
                            padding: 10px 0px;
                            width: 100%;
                            flex-direction: row;
                            border-radius: 5px;
                            text-align: center;
                            &:hover {
                                color: #fff;
                                cursor: pointer;
                                background: #000;
                            }
                            } 
                        }
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
                            <a target="_blank" rel="noopener noreferrer" href="https://ecommerce-store-12a29.web.app/">
                                <div className="button">
                                    View Live
                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden/ecommerce-project">
                                <div className="button">
                                    View Code
                                </div>
                            </a>
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
                            <a target="_blank" rel="noopener noreferrer" href="https://fb-clone-da943.web.app/">
                                <div className="button">
                                    View Live
                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden/facebook-clone">
                                <div className="button">
                                    View Code
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__top">
                        <img src={codeunload} alt="codeunload website" />
                    </div>
                    <div class="card__bottom">
                        <h2>Codeunload WordPress Website</h2>
                        <p>Codeunload is a website created with WordPress that helps other web developers with problems. 
                            While creating this website the main goal was to produce high quality content, using SEO to rank 
                            to the top page of Google when a user searches for specifc keywords around web development, specifically 
                            to do with networking and web development. Codeunload is still in it's early stages and I am still working on this in my spare time
                        </p>
                        <div className="card__button">
                            <a target="_blank" rel="noopener noreferrer" href="https://codeunload.com">
                                <div className="button">
                                    View Live
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card__container">
                    <div className="card__top">
                        <img src={twitterclone} alt="Twitter Clone with reactJS" />
                    </div>
                    <div class="card__bottom">
                        <h2>Twitter Clone with reactJS</h2>
                        <p>This Twitter clone was built using React, and the useState and useEffect hooks with the FireStore database. 
                            This app allows you to  
                        </p>
                        <div className="card__button">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter-clone-3cf1b.web.app/">
                                <div className="button">
                                    View Live
                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/BerenBoden/twitter-clone">
                                <div className="button">
                                    View Code
                                </div>
                            </a>
                        </div>
                    </div>
                </div>        
            </Cards>
        </div>
    )
}

export default Projects
