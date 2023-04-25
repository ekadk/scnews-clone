import { Link } from "react-router-dom"

export default function Card({post}) {
  return (
    <div className="mb-16">
      <div
        className="col-span-1 h-72 bg-center bg-cover"
        style={{
          backgroundImage: `url(${post.imgUrl})`,
        }}></div>
      <div className="flex flex-col">
        <h1 className="text-xs mt-4">{post.Category.name}</h1>
        <h1 className="text-xl font-bold mb-2 font-serif hover:text-red-400">
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </h1>
        <h1 className="text-sm">
          <span className="font-bold">{post.User.email}</span><br></br> {post.createdAt}
        </h1>
      </div>
    </div>
  );
}
