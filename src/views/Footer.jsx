import logo from '../assets/logo.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import youtubeIcon from '../assets/facebook-icon.svg';

const Footer = () => {
   return (
      <div className='py-36'>
         <div className='wrapper flex flex-col lg:flex-row justify-start lg:justify-between gap-12'>
            <div>
               <img src={logo} alt='logo' className='mx-auto lg:mx-0' />
               <p className='to-light-gray my-7 text-center lg:text-start'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ullam, assumenda.
               </p>
               <div className='flex items-start gap-[18px] justify-center sm:justify-start'>
                  <img
                     src={facebookIcon}
                     alt='facebook'
                     className='cursor-pointer'
                  />
                  <img
                     src={twitterIcon}
                     alt='twitter'
                     className='cursor-pointer'
                  />
                  <img
                     src={instagramIcon}
                     alt='instagram'
                     className='cursor-pointer'
                  />
                  <img
                     src={linkedinIcon}
                     alt='linkedin'
                     className='cursor-pointer'
                  />
                  <img
                     src={youtubeIcon}
                     alt='youtube'
                     className='cursor-pointer'
                  />
               </div>
            </div>

            <ul className='flex flex-col sm:flex-row gap-10 items-center gap-10 mx-auto lg:mx-0'>
               <li className='link border-primary-green'>Home</li>
               <li className='link border-transparent'>Booking</li>
               <li className='link border-transparent'>About</li>
               <li className='link border-transparent'>Cars</li>
               <li className='link border-transparent'>Services</li>
               <li className='link border-transparent'>Contact</li>
            </ul>
         </div>
      </div>
   );
};

export default Footer;
