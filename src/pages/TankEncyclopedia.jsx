import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/article_page.css';
import '../css/article/TE.css';

class TankEnc extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Tank Encyclopedia - Jeffrey Gaydos Portfolio";
        document.body.style.backgroundColor = 'rgb(89, 89, 89)';
    }
    
    render() {
        return (
            <>
            <div className="article-ch-pos">
                <CornerHeader />
            </div>
            <div className="article-wrapper"></div>
            <div className="content-wrapper">
                <h1 className="article" python-backend="title">Volunteer Web Developer - Tank Encyclopedia</h1>
                <h2 className="article date" python-backend="date">May, 2020 - Present</h2>
                <div className="content-divider"></div>
                {/* <img className="article" python-backend="image" src={require("../images/TankEncyclopediaHomepage.png")} /> */}
                <img className="article" src={require("../images/TankEncyclopedia/logo-big-border.png")} />
                <div className="content-divider"></div>
                {/* <h2 className="article" python-backend="content">Tank Encyclopedia is run by a community of volunteers ranging from amateur historians to professionals. Near the end of 2019, the managers of this community switched hosts for the website and started using Wordpress. After urgings from my brother Brian Gaydos (who had been considerably involved in the community), I decided to aid in creating features for the website as well as helping with general maintenance. Having little to no experience in Wordpress was a learning curve, but using my background in CSS and a few tutorials, I made my first feature for the website in a week. Since May of 2020, I have implemented roughly 5 features and other small modifications for the website. Considerable local testing was done for each feature, and I eventually set up a local development server using XAMP. Recently, I moved all the code from my child theme to a plugin with togglable features to aid in maintenance and stability of the website. This project advanced my knowledge and experience in Web Development principles, networking principles, JavaScript (and jQuery), and CSS.</h2> */}
                <h2 className="article"><a href="https://tanks-encyclopedia.com/" className="link article">Tank Encyclopedia</a> is run by a community of volunteers ranging from amateur historians to professionals. Near the end of 2019, the managers of this community switched hosts for the website and started using Wordpress. After urgings from my brother Brian Gaydos (who had been considerably involved in the community), I decided to aid in creating features for the website as well as helping with general maintenance. Having little to no experience in Wordpress was a learning curve, but using my background in CSS and a few tutorials, I made my first feature for the website in a week. Since May of 2020, I have implemented roughly 5 features and other small modifications for the website. Considerable local testing was done for each feature, and I eventually set up a local development server using XAMPP. Recently, I moved all the code from my child theme to a plugin with togglable features to aid in maintenance and stability of the website. This project advanced my knowledge and experience in Web Development principles, networking principles, JavaScript (and jQuery), and CSS.</h2>
                <h2 className="article heading">Dark Mode</h2>
                <h2 className="article">My first task a volunteer was to create a dark mode button (and dark theme) for the website. After the switch to Wordpress, some of the <a href="https://tanks-encyclopedia.com/" className="link article">Tank Encyclopedia</a> community disliked the modern, light look of the website. I started by figuring out which DOM elements I wanted to change and which colors I should use to match the original theme. After creating a theme I liked well enough, I wondered if I could create the theme in Wordpress, and simply switch to that theme when the dark mode button wears pressed. However, being the lone developer for the site and lacking in any Wordpress experience, I figured the safest option would be to use JavaScript to change the inline CSS of elements I needed.</h2>
                <h2 className="article">Anticipating that this feature’s code would become unreadable in seconds, I made numerous functions to help me gather all the DOM elements I needed. At this point, I did not know of jQuery’s power to quickly select elements, and at the time I wanted to focus on building a foundation for myself in JavaScript. Unfortunately, this feature’s code remains difficult to read, and it will be changed in the future to use some form of theme switching, likely via toggling a new stylesheet.</h2>
                <h2 className="article">The dark mode feature was met with a positive response from the community and created only a few visual bugs that required small additions to the feature. Currently, this feature is very stable, and the community has not reported any new issues with the dark mode button for an extended period of time.</h2>
                <h2 className="article heading">Header Modifications</h2>
                <h2 className="article">Tanks Encyclopedia is run using funding from ads and donors. As such, I was soon after tasked with creating more visible donation links, specifically in the header. The header also needed to follow the user, but only when they scrolled up on the page.</h2>
                <h2 className="article">I underestimated the difficulty of adding the donation links to the header once I realized the incompatibility found with mobile users. Reusing CSS classes created by Wordpress, I was able to make everything for this feature mobile compatible. And after some quick Google searches, I was able to get the header to follow the user properly.</h2>
                <h2 className="article">These features were fairly small, and Adding these features did not create any major bugs either, but having a full local hosted version of the website (as I do currently) would have removed most if not all room for error.</h2>
                <h2 className="article heading">Random Article and Discord Button</h2>
                <h2 className="article">These two features involved creating a button to invite users to the community’s Discord server and to redirect a user to a random article on the website. I worked on the front end of these features, using <a href="https://wordpress.org/plugins/redirect-url-to-post/" className="article link">a plugin made by Chatty Mango</a> for the random article button backend. The random article button is most notable for its ability to aid in testing future features quickly while the website is live before users have a chance to encounter them, not to mention a boost in the site’s SEO. The front end of both buttons reuses a class found in the social media buttons they are near to (<a href="https://wordpress.org/plugins/social-pug/" className="link article">a plugin by Mediavine</a>). Obviously, these small additions created no readability issues in the code, and only minor, quickly fixed bugs on mobile devices.</h2>
                <h2 className="article heading">Contents Index</h2>
                <h2 className="article">This feature required me to create a dynamically generated, linked table of contents for all articles, similar to Wikipedia. The general idea of the feature is to find all necessary headings and subheadings and place them into a collapsible box with each heading linked to scroll the user to that heading.</h2>
                <h2 className="article">Though not as lengthy, this feature was more technically complex and included an object store the kind of element, its vertical position on the page, and index number. The primary challenge was in ordering and formatting the headings correctly, since h2 and h3 tags were supported. Essentially, I could get an ordered list of all h2 elements, and another ordered list for h3 elements easily, but combining these 2 lists into another list ordered by height required me to keep track of more data.</h2>
                <h2 className="article">The feature turned out surprisingly well, and I am proud to say that it works for almost all articles. The only current issues it has is with old articles that native ads (the feature picks up these ads as relevant subheadings). Recently, this feature has been updated to include animations to smooth out the "dropping" down of the list.</h2>
                <h2 className="article heading">Conclusion</h2>
                <h2 className="article">Currently, the main issue with the <a href="https://tanks-encyclopedia.com/" className="link article">Tank Encyclopedia</a> website is performance. The leading factor of this issue is the large number of images on the website (this was determined by Chromium’s "Lighthouse" website evaluator). We have used lazy load features in the past, but most do not work well with the current plugins we have, which may necessitate the creation of a custom lazy load plugin in the future.</h2>
                <h2 className="article">Overall, I learned personally about the danger of working with a website while its live and the importance of testing features locally before moving it to a live website. Additionally, I gained a foundation in JavaScript and became acquainted with the various inconsistencies and flexibility of the language.</h2>
                <h2 className="article">Here is a list of features that I have made for <a href="https://tanks-encyclopedia.com/" className="link article">Tank Encyclopedia</a> with a picture example of each:</h2>
                <ul>
                    <li className="article">Dark Mode</li>
                    <div className="split-right inline">
                        <img src={require("../images/TankEncyclopedia/DarkMode.png")} alt="dark mode" className="inline split-right"/>
                    </div>
                    <div className="split-left inline">
                        <img src={require("../images/TankEncyclopedia/LightMode.png")} alt="light mode" className="inline split-left" id="TE-lightmode"/>
                    </div>
                    <li className="article">Header Modifications</li>
                    <img src={require("../images/TankEncyclopedia/HeaderModifications.png")} alt="header modifications" className="article" />
                    <li className="article">Random Article and Discord Buttons</li>
                    <img src={require("../images/TankEncyclopedia/Buttons.png")} alt="random article and discord buttons integrated with social buttons" className="article" />
                    <li className="article">Article Contents Generator</li>
                    <img src={require("../images/TankEncyclopedia/ContentsGen.png")} alt="contents generator" className="article" />
                    <li className="article">To Top Button</li>
                    <img src={require("../images/TankEncyclopedia/ToTop.png")} alt="to top button" className="article" />
                </ul>
                <p className="article inline footer">Last Updated: 6/19/2021</p>
                <p className="article inline footer">Category: <Link className="link" to="/web-development"><span python-backend="category">Web Development</span></Link></p>
            </div>
            <Footer />
            </>
        );
    }
}

export default TankEnc;