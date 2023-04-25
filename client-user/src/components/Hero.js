import { Link } from "react-router-dom"
export default function Hero({ data }) {
  return (
    <div className="border-b border-black">
      <div className="grid grid-cols-5 pb-4">
        <div className="col-span-3 border-r border-black px-4">
          <div>
            <img
              className="w-full"
              src={data[0] ? data[0].imgUrl : ""}
              ></img>
            <p className="text-sm underline font-sans mt-4">{data[0] ? data[0].Category.name : ""}</p>
            <h1 className="text-3xl font-serif font-bold mt-1 hover:text-red-500">
            <Link to={data[0] ? `/posts/${data[0].id}` : ""}  >
              {data[0] ? data[0].title : ""}
            </Link>
            </h1>
            <div className="flex gap-2 mt-1">
              <p className="text-base font-sans">{data[0] ? data[0].User.email : ""}</p>
              <p>|</p>
              <p className="text-base font-sans">{data[0] ? data[0].createdAt.split('T')[0] : ""}</p>
            </div>
          </div>
        </div>

        <div className="col-span-2 px-4">
          <div className="w-full h-1/2 pb-2">
            <div className="h-full">
              <div
                className="px-4 h-full py-4 bg-cover"
                style={{
                  backgroundImage: `url(${data[1] ? data[1].imgUrl : ""})`,
                }}>
                <span className="text-sm underline font-sans mt-4 text-white bg-black">
                {data[1] ? data[1].Category.name : ""}
                </span>
                <div>
                  <span className="text-xl font-serif font-bold mt-1 text-white bg-black hover:bg-red-500">
                  <Link to={data[1] ? `/posts/${data[1].id}` : ""}>
                  {data[1] ? data[1].title : ""}
                  </Link>
                  </span>
                </div>
                <div className="flex gap-2 mt-1 items-end">
                  <p className="text-base font-sans">
                    <span className="text-white bg-black">
                      By {data[1] ? data[1].User.email : ""}
                    </span>
                  </p>
                  <p className="text-base font-sans">
                    <span className="text-white bg-black">{data[1] ? data[1].createdAt.split('T')[0] : ""}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 pt-2">
            <div className="h-full">
              <div
                className="px-4 h-full py-4 bg-cover"
                style={{
                  backgroundImage: `url(${data[2] ? data[2].imgUrl : ""})`,
                }}>
                <span className="text-sm underline font-sans mt-4 text-white bg-black">
                {data[2] ? data[2].Category.name : ""}
                </span>
                <div>
                  <span className="text-xl font-serif font-bold mt-1 text-white bg-black hover:bg-red-500">
                  <Link to={data[2] ? `/posts/${data[2].id}` : ""}>
                  {data[2] ? data[2].title : ""}
                  </Link>
                  </span>
                </div>
                <div className="flex gap-2 mt-1 items-end">
                  <p className="text-base font-sans">
                    <span className="text-white bg-black">
                    {data[2] ? data[2].User.email : ""}
                    </span>
                  </p>
                  <p className="text-base font-sans">
                    <span className="text-white bg-black">{data[2] ? data[2].createdAt.split('T')[0] : ""}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
