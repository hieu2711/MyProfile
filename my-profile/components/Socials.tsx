import Link from 'next/link';
import React from 'react'
import {FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'; 
type Props = {
    containerStyles: string,
    iconStyles: string
}
interface Socials {
    icon: any;
    path: string;
}
const socials: Socials[] = [
    {
        icon: <FaGithub />,
        path: "https://github.com/hieu2711"
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/tdh1002/"
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/profile.php?id=100017988961848&mibextid=ZbWKwL"
    },

];
const Socials = ({containerStyles, iconStyles}: Props) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) =>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials