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
                <button
                  className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                  type="button"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
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
