import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCategoryById } from "../store/actions/actionCreators";

export default function CategoryForm({ submitHandler, submitButtonName }) {
  const dispatch = useDispatch()
  const { id } = useParams()

  const [categoryForm, setCategoryForm] = useState({ name: "" });

  function submitForm(e) {
    e.preventDefault()
    submitHandler(categoryForm)
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    const newInput = { ...categoryForm, [name]: value };
    setCategoryForm(newInput);
  }

  useEffect(() => {
    if(id) {
      dispatch(fetchCategoryById(id)).then(data => {
        console.log(data.name)
        setCategoryForm({
          name: data.name
        })
      })
    }
  }, [])

  return (
    <form className="max-w-2xl mx-auto" onSubmit={submitForm}>
      <div className="form-control mb-4">
        <label className="input-group input-group-vertical">
          <span>Category Name</span>
          <input
            name="name"
            required
            type="text"
            onChange={handleFormChange}
            placeholder="eg: Humans"
            className="input input-bordered"
            value={categoryForm.name}
          />
        </label>
      </div>
      <div className="divider"></div>
      <div className="flex justify-end gap-4">
        <button className="btn btn-primary">{submitButtonName}</button>
        <Link to={"/categories"} className="btn btn-outline">
          Cancel
        </Link>
      </div>
    </form>
  );
}