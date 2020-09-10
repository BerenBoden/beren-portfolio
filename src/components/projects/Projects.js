import React, { Component } from "react";
import ecom from "../../img/ecommerce.png";
import fbclone from "../../img/fbclone.png";
import codeunload from "../../img/codeunload.png";
import twitterclone from "../../img/twitterclone.png";
import Cards from '../cards/Cards';
import Navigation from '../navigation/Navigation';
import './Projects.scss';

export class Projects extends Component {
  state = {
    cards: [
      {
        description:
          "For this project, I used ReactJS, NodeJS, Sass and HTML to create an E-commerce website. The features of this website is add to cart functionality, purchase functionality (PayPal & Credit Card), and page routing functionality.",
        header: "Ecommerce Website With ReactJS",
        liveLink: "https://ecommerce-store-12a29.web.app/",
        codeLink: "https://github.com/BerenBoden/ecommerce-project",
        caseLink: "",
      },

      {
        description:
          "For this project, I used ReactJS, Sass, Redux, Material UI and Firebase with Google authentication to create a small Facebook clone. The main feature of this project is to be able to type a message and add an image in the MessageSender component, and this message will be stored on the Firebase database where it is shown directly on the website in real time.",
        header: "Facebook Clone With ReactJS",
        liveLink: "https://fb-clone-da943.web.app/",
        codeLink: "https://github.com/BerenBoden/facebook-clone",
        caseLink: "",
      },

      {
        description:
          "Codeunload is a website created with WordPress that helps other web developers with problems. While creating this website the main goal was to produce high quality content, using SEO to rank to the top page of Google when a user searches for specifc keywords around web development, specifically to do with networking and web development. Codeunload is still in it's early stages and I am still working on this in my spare time.",
        header: "Codeunload WordPress Website",
        liveLink: "https://codeunload.com/",
        caseLink: "",
      },

      {
        description:
          "This Twitter clone was built using React, and the useState and useEffect hooks with the FireStore database. This app allows you to share a message on the home page in real time.",
        header: "Twitter Clone with reactJS",
        liveLink: "https://twitter-clone-3cf1b.web.app/",
        codeLink: "https://github.com/BerenBoden/twitter-clone",
        caseLink: "",
      },
    ],
  };

  render() {
    return (
      <div className="projects">
        <Navigation />
            <div className="projects__cards">
                <Cards
                caseLink={this.state.cards[0].caseLink}
                codeLink={this.state.cards[0].codeLink}
                liveLink={this.state.cards[0].liveLink}
                image={ecom}
                description={this.state.cards[0].description}
                header={this.state.cards[0].header}
                />
                <Cards
                caseLink={this.state.cards[1].caseLink}
                codeLink={this.state.cards[1].codeLink}
                liveLink={this.state.cards[1].liveLink}
                image={fbclone}
                description={this.state.cards[1].description}
                header={this.state.cards[1].header}
                />
                <Cards
                caseLink={this.state.cards[2].caseLink}
                liveLink={this.state.cards[2].liveLink}
                image={codeunload}
                description={this.state.cards[2].description}
                header={this.state.cards[2].header}
                />
                <Cards
                caseLink={this.state.cards[3].caseLink}
                codeLink={this.state.cards[3].codeLink}
                liveLink={this.state.cards[3].liveLink}
                image={twitterclone}
                description={this.state.cards[3].description}
                header={this.state.cards[3].header}
                />
            </div>
      </div>
    );
  }
}

export default Projects;
