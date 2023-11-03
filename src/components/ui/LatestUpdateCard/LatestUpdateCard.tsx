import Image from "next/image";
import Link from "next/link";

const LatestUpdateCard = ({ latestUpdate }: any) => {
  const { title, image, text, id } = latestUpdate;

  return (
    <div className="relative flex flex-col w-[340px] my-3    lg:min-h-[350px]  rounded-lg bg-gray-100 border text-gray-700  ">
      <div className="relative    overflow-hidden  bg-blue-gray-500 bg-clip-border text-white  ">
        <div className="flex justify-center h-[200px] ">
          <Image
            src={image}
            width={300}
            height={350}
            alt="pic"
            layout="responsive"
          ></Image>
        </div>
      </div>
      <div className="">
        <div className="my-2 px-1 flex flex-col ">
          <h5 className="block hover:text-blue-500   text-lg font-bold leading-snug tracking-normal text-black antialiased">
            {title}
          </h5>
        </div>
        <hr />
        <div className="px-2 min-h-6 mb-2">
          <h4>
            {text.slice(0, 80)}{" "}
            {text.length > 80 ? (
              <Link href={`/latest-update/${id}`}>
                <p className="text-blue-600 font-bold cursor-pointer">
                  Continue Reading
                </p>
              </Link>
            ) : (
              ""
            )}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdateCard;
