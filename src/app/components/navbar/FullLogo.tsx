import Logo from "./Logo";

const FullLogo = () => {
    return ( 
        <div className="logo-cont">
            <Logo/>

            {/* The logo text */}
            <span className="logo-text">taksee</span>
        </div>
    );
}
 
export default FullLogo;