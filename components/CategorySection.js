import Image from "next/image";

const ProductCategory = () => {
  return (
    <div className="primary-dark-font px-2 md:p-0 mb-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Popular Product Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/01.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/02.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/03.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/04.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/05.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/06.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/07.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
        <div className="flex items-center justify-center light-bg py-2 rounded cursor-pointer">
          <div className="mx-3">
            <Image
              src="/img/productcategory/08.png"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <span className="text-base font-semibold capitalize">
            electronics appliances
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
