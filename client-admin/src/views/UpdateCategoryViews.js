import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoryForm from "../components/CategoryForm";
import { updateCategory } from "../store/actions/actionCreators";

export default function UpdateCategoriesView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  function submitCategoryForm(form) {
    dispatch(updateCategory(form, id)).then(() => {
      navigate("/categories");
    });
  }
  return (
    <>
      <h1 className="text-2xl text-center font-bold mb-8">Update Category</h1>
      <CategoryForm
        submitHandler={submitCategoryForm}
        submitButtonName={"Update"}
      />
    </>
  );
}
