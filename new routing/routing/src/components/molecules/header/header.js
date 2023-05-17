import styles from './header.module.css'
import React from "react"


import { BsTwitter } from "react-icons/bs";
import {useNavigate ,Link} from 'react-router-dom'

export default function Header () {
    const nevigate = useNavigate()

    const navOptions = [
        'Home',
        'AboutUs' ,
        'Register' ,
        'Login' ,
        'Courses' ,
        'Placements' ,
        'Contacts'
    ]
    function handleclick (){
        nevigate('Login')
    }

    return (
        <>
        <header className={styles.header}>
            <div className={styles.navOption}>
            <BsTwitter 
                className={styles.menu} 
               /> <h1 className='head'>Twitter</h1>
              
                {
                    navOptions.map(page => (
                        <p>{page}</p>
                    ))
                }
            <button onClick={handleclick}>click</button>
           </div>
        </header>
        <div className='imagetag'>
        <img src='https://www.techglads.com/wp-content/uploads/2018/05/Organic-Twitter-Followers.jpg'
        height={650}
        width={900}
        align="left"
        /> <p>            Having thousands of followers is great, but unless you’re able to keep them engaged it’s irrelevant. You need to share relevant content that resonates with your audience and gets them to take action. To get started, you can analyze Twitter followers to learn more about who’s following.
So much attention gets put on the number of followers, but very few businesses take the time to understand their audience. You may think you know what to share, but until you analyze your Twitter followers you’re just making assumptions
In social media marketing, you’ll only get a few seconds to make your impression on other users. So, it’s important that you put your best foot forward with your Twitter profile.
You can do that by pinning your best tweet, so it’s visible at the top of your Twitter profile.In social media marketing, you’ll only get a few seconds to make your impression on other users. So, it’s important that you put your best foot forward with your Twitter profile.
You can do that by pinning your best tweet, so it’s visible at the top of your Twitter profile.In social media marketing, you’ll only get a few seconds to make your impression on other users. So, it’s important that you put your best foot forward with your Twitter profile.
You can do that by pinning your best tweet, so it’s visible at the top of your Twitter profile.In social media marketing, you’ll only get a few seconds to make your impression on other users. So, it’s important that you put your best foot forward with your Twitter profile.
You can do that by pinning your best tweet, so it’s visible at the top of your Twitter profile.
            </p>
            <br/>
            <br/>
            <br/>
            <button className={styles.buttonbtn}>click to check </button>
        </div>
        </>
    )
}