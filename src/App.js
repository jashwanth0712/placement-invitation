import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center mb-8">
      <h1 class="mb-4 text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-gray-900">Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">(An Institute of National Importance established by the Government of India)</p>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Melakottaiyur, Vandalur-Kelambakkam Road, Chennai-600127</p>
        <hr className="my-6 w-full" />
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4 w-full md:w-auto flex items-center justify-center">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Mail
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4 md:mb-0 md:mr-4 w-full md:w-auto flex items-center justify-center">
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          Website
        </button>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full md:w-auto flex items-center justify-center">
          <FontAwesomeIcon  className="mr-2" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default App;
