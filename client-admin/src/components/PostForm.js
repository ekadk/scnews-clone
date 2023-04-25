import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchCategories,
  fetchPostById,
} from "../store/actions/actionCreators";

export default function PostForm({ submitHandler, submitButtonName }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { categories } = useSelector((state) => {
    return state.categoriesReducer;
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(id)).then((data) => {
        setForm({
          title: data.post.title,
          tags: data.post.tags,
          slug: data.post.slug,
          content: data.post.content,
          imgUrl: data.post.imgUrl,
          categoryId: data.post.Category.id,
          Tags: data.post.Tags,
        });
      });
    }
  }, []);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    tags: "",
    content: "",
    imgUrl: "",
    categoryId: "",
    Tags: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    submitHandler(form);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    const newInput = { ...form, [name]: value };
    newInput.slug = newInput.title.split(" ").join("-");
    setForm(newInput);
  }

  return (
    <form className="mb-16 max-w-3xl" onSubmit={handleFormSubmit}>
      <div className="form-control mb-6">
        <label className="input-group input-group-vertical">
          <span>Article Title</span>
          <input
            required
            name="title"
            type="text"
            placeholder="eg: What's Going On?"
            className="input input-bordered"
            onChange={handleFormChange}
            value={form.title}
          />
        </label>
      </div>

      <div className="form-control mb-6">
        <label className="input-group input-group-vertical">
          <span>Image URL</span>
          <input
            required
            name="imgUrl"
            type="text"
            placeholder="eg: https://www.example.com"
            className="input input-bordered"
            onChange={handleFormChange}
            value={form.imgUrl}
          />
        </label>
      </div>

      <div className="flex w-full gap-8 mb-6">
        <div className="form-control w-1/2">
          <label className="input-group input-group-vertical">
            <span>Category</span>
            <select
              required
              name="categoryId"
              className="select select-bordered"
              onChange={handleFormChange}
              value={form.categoryId}>
              <option disabled value={""}>
                Category
              </option>
              {categories
                ? categories.map((category) => {
                    return (
                      <option value={category.id} key={category.id}>
                        {category.name}
                      </option>
                    );
                  })
                : ""}
            </select>
          </label>
        </div>

        <div className="form-control w-1/2">
          <label className="input-group input-group-vertical">
            <span>Tags</span>
            <input
              required
              name="Tags"
              type="text"
              placeholder="eg: Jazz, Music"
              className="input input-bordered"
              onChange={handleFormChange}
              value={form.Tags}
            />
          </label>
          <label className="label">
            <span className="label-text-alt">
              {'Separated by comma or space. Ex: "Jazz, Music"'}
            </span>
          </label>
        </div>
      </div>

      <div className="form-control mb-6">
        <label className="input-group input-group-vertical">
          <span>Text</span>
          <textarea
            required
            name="content"
            className="textarea textarea-bordered h-64"
            onChange={handleFormChange}
            value={form.content}
            placeholder="Tell me, what happened?"></textarea>
        </label>
      </div>

      <div className="flex gap-4 justify-end">
        <button className="btn btn-primary" type="submit">
          {submitButtonName}
        </button>
        <Link to={"/posts"} className="btn btn-outline" type="button">
          Cancel
        </Link>
      </div>
    </form>
  );
}
