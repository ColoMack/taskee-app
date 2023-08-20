
import RightContentBox from '../components/RIghtContentBox/RIghtContentBox';
import Navbar from '../components/navbar/Navbar';


// the functional component..
export default function HomeLayout({
  }: {
    children: React.ReactNode
  }) {

    return (
      
      
        <div className='flex flex-row'>
          <Navbar />
          <RightContentBox/>
        </div>
      
    )
  }

