import NavBar from '../molecules/NavBar'
import PrimaryButton from '../atoms/PrimaryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";



const Contact = () => {
  return (
    <>
        <NavBar />
        <div>
            <h1>INTERESTED IN COLLABORATING?</h1>
            <h2>LET'S CONNECT!</h2>            
        </div>

        <section
        style={{display: "flex", flexDirection: "row", backgroundColor: "#dedede"}}>
            <div>
                <h3>// Reach out to me</h3>
                <form style={{display: "flex", alignItems: "center", flexDirection: "column", flexWrap: "wrap", width: "600px"}}>
                    <input type="text" placeholder='Your Name *' required />
                    <input type="email" placeholder='Your Email *' required />
                    <select>
                        <option>WHAT SERVICE DO YOU NEED?</option>
                        <option>Consulting</option>
                        <option>Development</option>
                        <option>Design</option>
                    </select>
                    <textarea placeholder='WRITE YOUR MESSAGE HERE...'></textarea>
                    <PrimaryButton type="submit">SEND</PrimaryButton>
                </form>
            </div>

            <div className="contact-info">

          <div className="social-media">
            <p>Connect on social media!</p>
            <div className="social-icons">
              <a href="#" className="twitter-icon">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
              <a href="#" className="facebook-icon">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="instagram-icon">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="github-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Contact