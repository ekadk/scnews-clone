import Table from "../components/Table";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts, loadingStop } from "../store/actions/actionCreators";

export default function NewsListView() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => {
    return state.postReducer;
  });

  const [formatted, setFormatted] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts()).then((data) => {
      const formattedData = data.posts.map((el) => {
        delete el.content;
        delete el.slug;
        el.createdAt = el.createdAt.split('T')[0]
        el.updatedAt = el.updatedAt.split('T')[0]
        return el;
      });
      setFormatted(formattedData);
      dispatch(loadingStop())
    }).then(() => {
    });
  }, []);

  function toDetails(id) {
    navigate("/posts/" + id);
  }

  function toEdit(id) {
    navigate("/posts/edit/" + id);
  }

  function deleteRow(id) {
    dispatch(deletePost(id)).then((data) => {
      const formattedData = data.posts.map((el) => {
        delete el.content;
        delete el.slug;
        return el;
      });
      setFormatted(formattedData);
    });
  }

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">News List</h1>
        <Link to={"/posts/add"} className="btn">
          Add News
        </Link>
      </div>
      <div className="shadow-lg">
        {posts ? (
          <Table
            tableData={formatted}
            infoAction={toDetails}
            editAction={toEdit}
            deleteAction={deleteRow}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
