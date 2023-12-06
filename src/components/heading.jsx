import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Import the logo image

function Heading (){
    return(
        <div className="flex flex-col items-center justify-center  p-4">
        <div className="text-center mb-8 flex flex-col items-center md:flex-row md:items-start justify-center">
            <img src={logo} alt="Logo" className="h-24 md:h-32 mr-3" /> {/* Display the logo */}
             <div className="text-left">
              <h1 className="mb-2 text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-gray-900">Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram</h1>
              <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">(An Institute of National Importance established by the Government of India)</p>
              <p className="mb-2 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Melakottaiyur, Vandalur-Kelambakkam Road, Chennai-600127</p>
              <hr className="my-6 w-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around w-full">
            <a href="mailto:placement@iiitdm.ac.in" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4 w-full md:w-auto flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Placement Cell Mail
            </a>
            <a href="https://www.iiitdm.ac.in/" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4 w-full md:w-auto flex items-center justify-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              Institute Website
            </a>
            <a href="https://www.linkedin.com/company/training-and-placement-cell-iiitdm-kancheepuram/" target="_blank" rel="noopener noreferrer" className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto flex items-center justify-center">
              <FontAwesomeIcon className="mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
    )
}
export default Heading;