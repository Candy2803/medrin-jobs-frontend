import logo from './img/medrin.jpeg'; 

type Props = {};

function LoadingPage({}: Props) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img src={logo} alt="Medrin Jobs Logo" className="w-24 animate-zoom" />
    </div>
  );
}

export default LoadingPage;
