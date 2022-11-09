const Wrapper = ({children, style}) => {
    return ( 
        <div className={`max-w-primary mx-auto w-full px-8 md:px-5 lg:px-6 relative ${style}`}>{children}</div>
     );
}
 
export default Wrapper;