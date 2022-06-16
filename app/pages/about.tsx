import { NextPage } from "next";
import { Footer } from "../components/Footer";
import {Top} from "../components/Top";
import Image from 'next/image'
import imageLoader from "../styles/imageLoader";




interface Props{
  title: string;
  text: string;
}

const About:NextPage<Props>=({title,text})=> {
  return( 
  <>
  <Top/>
  <div>
    about

  </div>
  {/* <Image 
  loader={imageLoader}
  src="/public/image/picture.png" 
  width="89px" height="86px"
 
  /> */}
  {title}
  {text}
  <Footer/>

  </>
  )
}



export default About
