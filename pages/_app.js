import './index.module.css'
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavbarSidebar from './components/NavbarSidebar'; // Import the navbar sidebar component

function MyApp({ Component, pageProps }) {
    console.log("MyApp component loaded");
    return (
      <div className="my-body">
        <NavbarSidebar /> {/* Use the navbar sidebar component */}
        <div className="main">
          <Component {...pageProps} />
        </div>
      </div>
    )
  }
  

export default MyApp
