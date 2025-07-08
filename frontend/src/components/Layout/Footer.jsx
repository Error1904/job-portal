import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"

import { RiInstagramFill} from "react-icons/ri"
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; Project by Darshan.</div>
<div>
  <Link to={'https://github.com/Error1904'} target='github'><FaGithub></FaGithub></Link>
  
  <Link to={'https://www.linkedin.com/in/darshan-mandavkar-0693a0341/'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/19darshan_04/'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer