export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 w-full">
      <p className="text-sm">Weather App © {new Date().getFullYear()}</p>
      <p className="text-sm">
        Powered by{" "}
        <a
          href="https://github.com/githoaitandev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Tan
        </a>{" "}
        &{" "}
        <a
          href="https://www.weatherapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Weatherapi
        </a>
      </p>
    </footer>
  );
};
