import SubPages from "./SubPages";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 py-2 md:justify-between mb-4">
        <div className="text-center md:text-start">logo</div>
        <div className="text-center md:text-start">search bar</div>
        <div className="text-center md:text-start">3rd portion</div>
      </div>
      {/* Sub pages starts here */}
      <SubPages />
    </>
  );
};

export default Header;
