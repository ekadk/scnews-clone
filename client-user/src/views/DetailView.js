import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPostsById } from "../store/actions/actionCreators";

export default function DetailView() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { post } = useSelector((state) => {
    return state.postReducer;
  });

  useEffect(() => {
    dispatch(fetchPostsById(id))
  }, []);

  return (
    <>
      {post ? (
        <div className="2xl:px-64 px-24 mt-10">
          <p className="text-base text-center text-sky-400 font-semibold mb-3">{post.Category.name}</p>
          <h1 className="text-4xl text-center font-serif font-semibold">
            {post.title}
          </h1>
          <img src={post.imgUrl} className="mt-8 max-w-3xl mx-auto mb-10" />
          <div className="flex flex-col justify-center gap-2 items-center">
            <p className="font-bold text-lg">{post.User.email}</p>
            <p>{post.createdAt.split('T')[0]}</p>
          </div>
          <div className="mt-10 mb-16">
            {post.content.split("\n").map((paragraph, idx) => {
              console.log(paragraph);
              return (
                <p key={idx} className="max-w-3xl mb-6 mx-auto">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
