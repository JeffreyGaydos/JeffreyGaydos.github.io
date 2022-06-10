import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import CornerHeader from '../components/corner_header';
import '../css/article/NWNToolset.css';
import '../css/article/article_page.css';

class Unum extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }
        document.title = "Unum - Accessibility Web Developer - Jeffrey Gaydos Portfolio";
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
                <h1 className="article" python-backend="title">Unum - Accessibility Web Developer</h1>
                <h2 className="article date" python-backend="date">June, 2021 - August 2021</h2>
                <div className="content-divider"></div>
                <img className="article NWN" python-backend="image" src={require("../images/UnumLogoWhite.jpg")} />
                <div className="content-divider"></div>
                <h2 className="article" python-backend="content">My internship at Unum (pronounced yo͞o-nəm) was my first professional experience in the computer science industry, and a great introduction to my career. I worked fully remote on a team of 8 with positions ranging from Backend Developers to Business Analysts. Due to the diversity in positions in this team, I was introduced to the potential roles that I could move into in my future career. However, within this job I was a Frontend Developer, an area that I had the most experience in at the time (and today).</h2>
                <h2 className="article">With Unum being such a large company (within the fortune 250 at the time), I was skeptical of how supportive it would be as a company. However, on my first couple days I realized that the company and corporate culture of Unum had a strong emphasis on professional development. This was the perfect fit for me approaching the industry for the first time. In addition, the onboarding from my team was extremely informative and there was always designated time to ask questions each week. One of my teammates mentioned early on that Unum has one of the best onboarding experiences, and so far in my career I would have to agree.</h2>
                <h2 className="article">Before making my first official commit, I needed to learn the primary framework that my team dealt with daily: Lightning and its Lightning Web Components (from Salesforce). This framework (and Salesforce for that matter) were completely new to me. Luckily there was a <a className="article link" href="https://trailhead.salesforce.com/trails?products=lightningex&sort=NEWEST">suite of tutorials</a> from Salesforce that covered the basics and then some. These tutorials also enhanced my onboarding experience considerably. In addition to learning about lightning web components, I was told that I may be working on accessibility-based programming. As such, I devoted time to understanding what accessibility looks like for webapps.</h2>
                <h2 className="article">Accessibility was also brand new to me, and I had little to no knowledge of how users with disabilities accessed websites effectively. To begin, I did a quick Google (well, a Bing actually) and stumbled upon the <a className="article link" href="https://www.accessibility-developer-guide.com/">Accessibility Developer Guide</a> (ADG). I would highly recommend anyone making accessible webapps to read through this site in its majority if not entirety. It describes not just what attributes to add to your HTML, but how various disabilities affect web browsing, and the tools these individuals use to enable them to browse effectively. It has a large focus on keyboard only web browsing and screen readers, arguably the most influential aspects of accessible web development.</h2>
                <h2 className="article">I must admit that when I was first told that I would be assigned accessibility tasks, I was a little disappointed. I wanted to work on more "technically complex" issues than accessibility. However, I soon realized that accessible development was indeed a complex issue. There is a balance between too little and too much, how to implement accessibility without harming existing functionality, and attempting to give a unified experience to all users. I loved how user-oriented the work was, and I found a strong sense of fulfillment when I realized the importance of the work I was completing.</h2>
                <h2 className="article">Unum was a great place to work. Even working remotely, I could grasp (and enjoy) the culture of the company and my team. I was able to examine the many different positions within a development team and how they work together. I was included in all meetings and never felt out of place. By the end of the internship, I felt that I had actually contributed effective code that my team would continue to use. In fact, I was asked to explain and document what I had learned about accessibility to the other developers so that they could pick up where I left off and understand the intent behind my code. I would personally recommend Unum to anyone looking for an internship, and I may (if the right position opens) join the Unum team once again later in my career.</h2>
                <p className="article inline">*I am not a representative of Unum Group, and this article is not legally affiliated with or endorsed by Unum Group in any way. These are my own personal opinions.</p>
                <p className="article inline footer">Category: <Link className="link" to="/web-development"><span python-backend="category">Web Development</span></Link></p>
                <p className="article inline footer">Last Updated: 8/8/2021</p>
            </div>
            <Footer />
            </>
        );
    }
}

export default Unum;