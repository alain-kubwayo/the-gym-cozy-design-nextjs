const Button = ({children}) => {
    return ( 
        <button className="bg-primary-400 hover:bg-primary-200 duration-700 uppercase text-primary-100 text-xl py-7.5 px-10 bg-noise rounded-lg-md w-full lg:w-auto font-bold leading-4.5">{children}</button>
     );
}
 
export default Button;