import './SignUpForm.css'
import googleLogo from '../../assets/icon_google.svg'
import face from '../../assets/Vector.svg'
import applee from '../../assets/ap.svg'


function SignUpForm() {
    return (
        <div className="signUp-form">
            <form>
                <div className='input-group'>
                    <label htmlFor="fName">
                        <span>First Name</span>
                        <input type="text" id="fName" placeholder="First Name" />
                    </label>
                    <label htmlFor="lName">
                        <span>Last Name</span>
                        <input type="text" id="lName" placeholder="Last Name" />
                    </label>
                </div>

                <div className='input-group'>
                    <label htmlFor="Email">
                        <span>Email</span>
                        <input type="email" id="Email" placeholder="Email" />
                    </label>
                    <label htmlFor="phoneNumber">
                        <span>Phone Number</span>
                        <input type="tel" id="phoneNumber" placeholder="Phone Number" />
                    </label>
                </div>
                <div className='input-full'>
                    <label htmlFor="password">
                        <span>Password</span>
                        <input type="password" id="password" placeholder="Password" />
                    </label>
                </div>

                <div className='input-full'>
                    <label htmlFor="confirmPassword">
                        <span>Confirm Password</span>
                        <input type="password" id="confirmPassword" placeholder="Confirm Password" />
                    </label>
                </div>
                <div className='privacy-Policy'>
                    <label htmlFor="privacyPolicy">
                        <input type="checkbox" id="privacyPolicy" />
                        <p>I agree to all the Terms and Privacy Policies</p>
                    </label>
                </div>
                <div className='submit-button'>
                    <button type="submit">Create Account</button>
                </div>
                <div className='have-account'>
                    <p>Already have an account? <a href="Login">Login</a></p>
                </div>
            </form>
            <div >
                <div className='social-text'>
                    <span></span>
                    <p>Or Sign up with</p>
                </div>
                <div className="social-login">
                    <button className="social-login-button">
                        <img src={googleLogo} alt="Google logo" />
                    </button>
                    <button className="social-login-button">
                        <img src={face} alt="Facebook logo" />
                    </button>
                    <button className="social-login-button">
                        <img src={applee} alt="Apple logo" />

                    </button>
                </div>

            </div>
        </div>
    );
}

export default SignUpForm;