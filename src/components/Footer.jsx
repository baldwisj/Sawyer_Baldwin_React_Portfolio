import React from 'react'
import githubLogo from "../../assets/logos/githublogo.png";
import linkedinLogo from "../../assets/logos/linkedinlogo.png";
import stackOverflowLogo from "../../assets/logos/stackoverflow.png";

//The following code imports the logos from the assets folder and sets a link to each one
export default function Footer() {
    return (
        <div className='row mt-5'>
            <div className="footer">
                <a href="https://github.com/baldwisj" target='_blank' className='singleLogo'>
                    <img
                        className="logos"
                        src={githubLogo}
                    >
                    </img>
                </a>
                <a href="https://github.com/https://www.linkedin.com/in/sawyer-baldwin-841b31131/" target='_blank' className='singleLogo'>
                    <img
                        className="logos"
                        src={linkedinLogo}
                    >
                    </img>
                </a>
                <a href="https://stackoverflow.com/users/22452146/soyboy" target='_blank' className='singleLogo'>
                    <img
                        className="logos"
                        src={stackOverflowLogo}
                    >
                    </img>
                </a>
            </div>
        </div>
    );
}