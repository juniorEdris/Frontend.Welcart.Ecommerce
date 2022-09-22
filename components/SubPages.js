const SubPages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="">col-1</div>
      <div className="col-start-2 col-span-2 hidden md:block text-center">
        col-2
      </div>
      <div className=" hidden md:block">rest</div>
    </div>
  );
};

export default SubPages;
