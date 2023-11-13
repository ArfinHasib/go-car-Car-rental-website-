import quoteIcon from '../assets/quote-icon.svg';

const Testimonial = ({ name }) => {
   return (
      <div>
         <img src={quoteIcon} alt='' className='mx-auto' />
         <h3 className='text-light-gray text-3xl text-center tracking-wider'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            repudiandae accusantium magni quos itaque ratione nobis aperiam,
            reiciendis eligendi recusandae.
         </h3>

         <p className='text-dark-gray font-bold text-center uppercase mt-[30px]'>
            {name}
         </p>
      </div>
   );
};

export default Testimonial;
