const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Proof of Putt. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">The Future of Competitive Putting</p>
      </div>
    </footer>
  );
};

export default Footer;
