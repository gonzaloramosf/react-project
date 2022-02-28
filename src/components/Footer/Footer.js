import './FooterStyles.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <ul>
                    <li> Explore </li>
                    <li> Store </li>
                    <li> Contact </li>
                    <li> About Us </li>
                </ul>
                <ul>
                    <li> Social media </li>
                    <li> Twitter </li>
                    <li> Youtube </li>
                </ul>
                <ul>
                    <li> Support </li>
                    <li> Products help </li>
                    <li> Contact our team </li>
                </ul>
            </div>

            <div>
                <div>
                    <p> Copyright © 2022 Crocodrile Inc. All rights reserved.</p>
                </div>
                <div>
                    <span className='footerLogo'> logo </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;