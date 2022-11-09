const Wrapper = ({children, style}) => {
    return ( 
        <div className={`max-w-[1400px] mx-auto w-full px-8 lg:px-3 relative ${style}`}>{children}</div>
     );
}
 
export default Wrapper;