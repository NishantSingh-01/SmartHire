const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-700 to-slate-900 text-gray-300 pt-14 pb-6 px-8">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Smart Hire
          </h2>
          <p className="text-sm leading-6 text-gray-400">
            Great platform for recruiters to find top talent and manage hiring 
            efficiently. Build your team faster with Smart Hire.
          </p>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Companies</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
            <li className="hover:text-white cursor-pointer">Advice</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Docs</li>
            <li className="hover:text-white cursor-pointer">Guide</li>
            <li className="hover:text-white cursor-pointer">Updates</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium mb-4">
            Get job notifications
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            The latest job news, articles, sent to your inbox weekly.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 w-full bg-white text-black rounded-l-md outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm text-gray-400">
          2026 © Smart Hire. All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0 text-lg">
          <span className="cursor-pointer hover:text-white">🌐</span>
          <span className="cursor-pointer hover:text-white">🐦</span>
          <span className="cursor-pointer hover:text-white">🔵</span>
        </div>

      </div>

    </footer>
  )
}

export default Footer