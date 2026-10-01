import './LoginForm.css'
import googleLogo from '../../assets/icon_google.svg';
import face from '../../assets/Vector.svg';
import apple from '../../assets/ap.svg';

function LoginForm() {
    return (
        <main className="login-page">
            <section className="login-card">
                <p className="frame-label">Frame 258</p>
                <h1 id="login-title" className="sr-only">Log in</h1>
                <form className="login-form">
                    <div className="field-group">
                        <label className="floating-field">
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                defaultValue="john.doe@gmail.com"
                                autoComplete="email"
                            />
                        </label>
                    </div>

                    <div className="field-group">
                        <label className="floating-field">
                            <span>Password</span>
                            <input
                                name="password"
                                defaultValue="password123"
                                autoComplete="current-password"
                            />
                        </label>
                    </div>

                    <div className="options-row">
                        <label className="remember-option">
                            <input type="checkbox" name="remember" />
                            <span>Remember me</span>
                        </label>
                        <a href="#forgot-password" className="coral-link">Forgot Password</a>
                    </div>

                    <button type="submit" className="login-button">Login</button>
                </form>

                <p className="signup-prompt">
                    Don't have an account? <a href="#sign-up" className="coral-link">Sign up</a>
                </p>

                <div className="divider" aria-hidden="true">
                    <span>Or login with</span>
                </div>

                <div className="social-login">
                    <button className="social-login-button">
                        <img src={googleLogo} alt="Google logo" />
                    </button>
                    <button className="social-login-button">
                        <img src={face} alt="Facebook logo" />
                    </button>
                    <button className="social-login-button">
                        <img src={apple} alt="Apple logo" />

                    </button>
                </div>

            </section>
        </main>
    );
}

export default LoginForm;