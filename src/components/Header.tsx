'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-md" style={{backgroundColor: 'var(--masters-green-medium)'}}>
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
          <div className="text-2xl font-bold text-center lg:text-left">
            <Link href="/" style={{color: 'var(--highlighter-yellow)'}}>Proof of Putt</Link>
          </div>
          <nav>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-end gap-3">
              <li>
                <Link href="/features"
                      className="px-4 py-2 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block text-center"
                      style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/app-showcase"
                      className="px-4 py-2 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block text-center"
                      style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
                  App Showcase
                </Link>
              </li>
              <li>
                <Link href="/achievements"
                      className="px-4 py-2 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block text-center"
                      style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/download"
                      className="px-4 py-2 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block text-center"
                      style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
                  Download
                </Link>
              </li>
              <li>
                <a href="https://app.proofofputt.com/login"
                   className="px-4 py-2 rounded-lg font-semibold transition-colors hover:opacity-90 inline-block text-center border-2"
                   style={{backgroundColor: 'var(--masters-green-dark)', borderColor: 'var(--highlighter-yellow)', color: 'var(--highlighter-yellow)'}}>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;