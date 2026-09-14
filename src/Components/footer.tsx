import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 mb-8 border-t border-gray-200 bg-white">

      <div className="mx-auto grid max-w-7xl grid-cols-5 gap-10 px-6 py-10">

        {/* Logo Section - 2 Columns */}
        <div className="col-span-2">

          <img
            src={logo}
            alt="Dev Stack Logo"
            className="mb-5 w-36"
          />

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Learn and explore the best development resources,
            technologies, and coding essentials.
          </p>

          <div className="mt-6 flex gap-5">

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-violet-600"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-violet-600"
            >
              Twitter
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 hover:text-violet-600"
            >
              LinkedIn
            </a>

          </div>

        </div>


        {/* Product Section */}
        <div>

          <h3 className="mb-5 text-xs font-bold tracking-wider text-gray-900">
            PRODUCT
          </h3>

          <ul className="space-y-3">

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Resources
              </a>
            </li>

          </ul>

        </div>


        {/* Company Section */}
        <div>

          <h3 className="mb-5 text-xs font-bold tracking-wider text-gray-900">
            COMPANY
          </h3>

          <ul className="space-y-3">

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Contact
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Careers
              </a>
            </li>

          </ul>

        </div>


        {/* Legal Section */}
        <div>

          <h3 className="mb-5 text-xs font-bold tracking-wider text-gray-900">
            LEGAL
          </h3>

          <ul className="space-y-3">

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-violet-600"
              >
                Terms of Service
              </a>
            </li>

          </ul>

        </div>

      </div>


      {/* Copyright */}
      <div className="mx-auto w-3/4 border-t border-gray-200 px-6 py-5">
       <div className="flex items-center justify-between">   
        <p className="text-xs text-gray-400">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-xs text-gray-400 hover:text-violet-600"
          >
            Privacy
          </a>
        <a
            href="#"
            className="text-xs text-gray-400 hover:text-violet-600"
          >
            Terms
          </a>
        </div>
         </div>
      </div>

    </footer>
  );
};

export default Footer;