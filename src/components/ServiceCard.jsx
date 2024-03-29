const ServiceCard = ({ iconSrc, title }) => {
   return (
      <div className='bg-white py-10 px-6 rounded-10 flex flex-col items-center shadow-lg max-w-[312px]'>
         <img src={iconSrc} alt={title} />
         <p className='uppercase text-dark-gray font-bold mb-2.5 mt-[18px] text-center'>
            {title}
         </p>

         <p className='text-subtitle-gray text-gray text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            distinctio.
         </p>
      </div>
   );
};

export default ServiceCard;
