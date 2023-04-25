import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import { updatePost } from "../store/actions/actionCreators";

export default function UpdateNewsView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  function handleFormSubmit(form) {
    dispatch(updatePost(form, id)).then(() => {
      navigate('/posts')
    });
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Add News</h1>
      <PostForm submitButtonName={"Update"} submitHandler={handleFormSubmit} />
    </div>
  );
}
