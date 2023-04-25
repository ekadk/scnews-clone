import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../store/actions/actionCreators";

export default function DetailsView() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { post } = useSelector((state) => {
    return state.postReducer;
  });

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, []);

  let content;
  if (post.content) {
    content = post.content.split("\n");
    content = content.map((paragraph, idx) => {
      return (
        <p key={idx} className="max-w-3xl mb-6 mx-auto">
          {paragraph}
        </p>
      );
    });
  }

  return (
    <div className="mb-32">
      <h1 className="text-3xl font-bold text-center mb-8">{post.title}</h1>
      <img src={post.imgUrl} className="max-w-3xl mx-auto mb-12"></img>
      <div className="divider">
        <div className="flex gap-8">
          <div className="card text-center">
            <span className="font-bold">CreatedBy:</span> {post.User.email}
          </div>
          <div className="card text-center">
            <span className="font-bold">Created At:</span>{" "}
            {post.createdAt.split("T")[0]}
          </div>
          <div className="card text-center">
            <span className="font-bold">Category:</span> {post.Category.name}
          </div>
        </div>
      </div>
      <div className="mt-16 mb-16">{content}</div>
      <div className="divider"></div>
      <div className="mt-8">
        <div className="card text-center">
          <span className="font-bold">Tags:</span> {post.Tags}
        </div>
      </div>
    </div>
  );
}
