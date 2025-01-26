export default function Footer() {
  return (
    <footer className='border-t border-gray-800 mt-auto'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col items-center gap-4'>
          <div className='text-2xl font-bold text-blue-300'>AuthKit</div>
          <p className='text-gray-400 text-center'>
            The world's best login box, powered by WorkOS + Radix.
          </p>
          <div className='flex items-center gap-4 text-gray-500'>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-gray-300 transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
