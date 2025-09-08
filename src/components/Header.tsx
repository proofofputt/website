'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-md" style={{backgroundColor: 'var(--masters-green-medium)'}}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/" style={{color: 'var(--highlighter-yellow)'}}>Proof of Putt</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/download" 
                    className="transition-colors hover:opacity-80"
                    style={{color: 'var(--text-white)'}}>
                Download
              </Link>
            </li>
            <li>
              <a href="https://app.proofofputt.com/login" 
                 className="px-4 py-2 rounded-lg font-semibold transition-colors hover:opacity-90"
                 style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;