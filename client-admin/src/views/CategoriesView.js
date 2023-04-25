import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Table from "../components/Table";
import { useEffect } from "react";
import { deleteCategory, fetchCategories } from "../store/actions/actionCreators";

export default function CategoriesView() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { categories } = useSelector(state => {
    return state.categoriesReducer
  })

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  function deleteCategoryHandler(id) {
    dispatch(deleteCategory(id));
  }

  function toUpdateCategory(id) {
    navigate('/categories/edit/' + id)
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Categories List</h1>
        <Link to={"/categories/add"} className="btn">
          Add Categories
        </Link>
      </div>
      <div className="shadow-lg">
        <Table tableData={categories} editAction={toUpdateCategory} deleteAction={deleteCategoryHandler} />
      </div>
    </>
  );
}