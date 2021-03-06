import React from "react";

function Footer() {
    return (
        <footer>
            <section className="page-section contact" id="contact">
      {/* <h2>Contact</h2> */}
      <div>
        <address className="address">
          <a class="email" href="mailto:hadeediqbal@yahoo.com">  Email </a>
          <a class="github" href="https://github.com/hadeediqbal">GitHub</a>
          <a class="linkedin" href="https://www.linkedin.com/in/hadeed-iqbal-a32888200/">LinkedIn</a>
          <a class="twitter" href="https://twitter.com/hadinho1080">twitter</a>
        </address>
      </div>
    </section>
        </footer>
    )
}

export default Footer;