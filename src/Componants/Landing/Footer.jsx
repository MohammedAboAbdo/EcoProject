import appleIcon from '../../assets/icon_google.svg'
import googlePlayIcon from '../../assets/ap.svg'
import './Footer.css'

const categories = [
    'Staples',
    'Beverages',
    'Personal Care',
    'Home Care',
    'Baby Care',
    'Vegetables & Fruits',
    'Snacks & Foods',
    'Dairy & Bakery',
]

const customerServices = [
    'About Us',
    'Terms & Conditions',
    'FAQ',
    'Privacy Policy',
    'E-waste Policy',
    'Cancellation & Return Policy',
]

function Footer() {
    return (
        <footer className="site-footer">
            <div className="site-footer__content">
                <section className="site-footer__contact" aria-labelledby="footer-brand">
                    <h2 className="site-footer__brand" id="footer-brand">MegaMart</h2>
                    <h3>Contact Us</h3>
                    <a className="site-footer__contact-link" href="https://wa.me/12029182132">
                        <svg className="site-footer__contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
                            <path d="M9 8.5c.5 2.7 2 4.2 4.7 5l1-1.2 2 1c-.2 1.6-1.2 2.4-2.7 2.2-3.7-.6-6.8-3.7-7.4-7.4-.2-1.5.6-2.5 2.2-2.7l1 2L9 8.5Z" />
                        </svg>
                        <span>Whats App<br />+1 202-918-2132</span>
                    </a>
                    <a className="site-footer__contact-link" href="tel:+12029182132">
                        <svg className="site-footer__contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6.6 3.5 9.4 7l-1.8 2.4a15.5 15.5 0 0 0 7 7l2.4-1.8 3.5 2.8-.8 3c-.2.7-.9 1.1-1.6 1C10 20.1 3.9 14 2.6 5.9c-.1-.7.3-1.4 1-1.6l3-.8Z" />
                        </svg>
                        <span>Call Us<br />+1 202-918-2132</span>
                    </a>
                    <h3 className="site-footer__download-heading">Download App</h3>
                    <div className="site-footer__badges">
                        <a className="site-footer__badge" href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
                            <img src={appleIcon} alt="" />
                            <span><small>Download on the</small>App Store</span>
                        </a>
                        <a className="site-footer__badge" href="https://play.google.com/store" aria-label="Get it on Google Play">
                            <img src={googlePlayIcon} alt="" />
                            <span><small>Get it on</small>Google Play</span>
                        </a>
                    </div>
                </section>

                <nav className="site-footer__column" aria-labelledby="footer-categories">
                    <h3 id="footer-categories">Most Popular Categories</h3>
                    <ul>
                        {categories.map((category) => <li key={category}>{category}</li>)}
                    </ul>
                </nav>

                <nav className="site-footer__column" aria-labelledby="footer-services">
                    <h3 id="footer-services">Customer Services</h3>
                    <ul>
                        {customerServices.map((service) => <li key={service}>{service}</li>)}
                    </ul>
                </nav>
            </div>

            <div className="site-footer__copyright">
                © 2022 All rights reserved. Reliance Retail Ltd.
            </div>
        </footer>
    )
}

export default Footer
