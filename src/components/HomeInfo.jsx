import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
<div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to = {link} className="neo-brutalism-white neo-btn ">
    {btnText}
    <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
</div>
)

const renderContent = {
    1: (
        <h1 className="sm-text-xl:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">HI, i am <span className="font-semibold">Mann</span>
        👋         <br />
        a Computer Engineer form Mumbai
</h1> 

    ),
        2: (
            <InfoBox 
            text="I am a Computer Engineer with a passion for coding and problem-solving. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies."
            link="/about"
            btnText="Learn More"
            />
    ),
        3:(
            <InfoBox 
            text="Completed many projects in various domains, including web development, mobile app development, and machine learning. I am always looking for new challenges and opportunities to grow my skills."
            link="/projects"
            btnText="Learn More"
            />
    ),
        4:(
            <InfoBox 
            text="here is how you can reach me"
            link="/contact"
            btnText="Contact Me"
            />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo