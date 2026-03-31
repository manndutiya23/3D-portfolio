import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">Wanna get in touch? <br className="sm:block hidden"/>
        Fill out this from and I'll get back to you as soon as possible.</p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
    </section>
  )
}

export default CTA