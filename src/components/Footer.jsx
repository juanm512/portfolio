const Footer = () => {
  return (
    <section id="footer">
        <div className="inner">
            <h2 className="major">Get in touch</h2>
            <p>Send me an email or contact me in any social media.</p>
            <form method="post" action="https://formspree.io/f/moqrnenn">
                <div className="fields">
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="4"></textarea>
                    </div>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Send Message" /></li>
                </ul>
            </form>
            <ul className="contact">
                <li className="icon brands fa-github"><a href="https://github.com/juanm512">github.com/juanm512</a></li>
                <li className="icon brands fa-twitter"><a href="https://twitter.com/juanm512">@juanm512</a></li>
                <li className="icon brands fa-discord"><a href="#contact">juanm512#5622</a></li>
                <li className="icon brands fa-instagram"><a href="https://www.instagram.com/juuanmav">@juuanmav</a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Juan Manuel Vila. All rights reserved.</li>
            </ul>
        </div>
    </section>
  )
}

export default Footer;