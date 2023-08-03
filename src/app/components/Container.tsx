'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return ( 
        // wrapper for the logo..
        <div>
            {children}
        </div>
     );
}
 
export default Container;