import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryForm from "../components/CategoryForm";
import { addCategory } from "../store/actions/actionCreators";

export default function AddCategoriesView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitCategoryForm(form) {
    dispatch(addCategory(form)).then(() => {
      navigate("/categories");
    });
  }
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-8">Add Category</h1>
      <CategoryForm
        submitHandler={submitCategoryForm}
        submitButtonName={"Submit"}
      />
    </>
  );
}
