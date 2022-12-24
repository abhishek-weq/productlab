import React from "react"
import Discord from '../../content/assets/discord.png'
import Slack from '../../content/assets/slack.png'

const HomeCTA = () => {
    return (
        <div className="home-cta-section">
            <div className="container">
                <div className="home-cta-content">
                <div className="join-connect-section">
                        <div className="row">
                        <div className="contact-module">
                        <div className="join-area">
                            <div className="join-head">Join the community</div>
                            <div className="join-btns">
                            <a href="/" className="join-btn">
                                <img src={Discord} alt="discord-btn" className=" btn-img discord-btn"/>
                            </a>
                            <a href="/" className="join-btn">
                                <img src={Slack} alt="slack-btn" className="btn-img slack-btn"/>
                            </a>
                            </div>
                        </div>
                        <div className="contact-area">
                            <div className="contact-head">Connect with us</div>
                            <div className="contact-form">
                            <form  className="contect-form">
                                <input type="email" placeholder="Email ID" className="contact-input"/>
                                <button type="submit" className="submit-btn">
                                Submit
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
 
export default HomeCTA