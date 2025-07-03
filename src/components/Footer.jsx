import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <footer className=" py-8 px-4 ">
      <div className="container max-w-screen-md mx-auto flex flex-col items-center justify-between">
        
        {/* Contact Information */}
        <div className="text-left font-roboto text-xs">
          <a href="mailto:isaiahalviola1@gmail.com" className="text-blue-600 dark:text-blue-400 flex items-center space-x-2">
            <EmailIcon/>
            <span>isaiahalviola1@gmail.com</span>
          </a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a 
            href="https://www.linkedin.com/in/isaiahalv/"
            className="text-black dark:text-white  hover:text-lime-500 dark:hover:text-red-400"
            target='_blank'
            rel="noopener noreferrer"
          >
            <LinkedInIcon/>
          </a>
          <a 
            href="https://github.com/isaiah-alv"
            className="text-black dark:text-white  hover:text-lime-500 dark:hover:text-red-400"
            target='_blank'
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-stone-600 dark:text-stone-400">
        &copy; {new Date().getFullYear()} isaiah alviola
      </div>
    </footer>
  );
}

export default Footer;
