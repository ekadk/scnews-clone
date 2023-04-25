import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { addPost } from "../store/actions/actionCreators";

export default function AddNewsView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleFormSubmit(form) {
    dispatch(addPost(form)).then(() => navigate("/posts"));
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Add News</h1>
      <PostForm submitHandler={handleFormSubmit} submitButtonName={"Submit"} />
    </div>
  );
}
