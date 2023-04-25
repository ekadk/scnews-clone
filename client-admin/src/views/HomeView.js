import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StatCard from "../components/StatCard";
import { fetchCategories, fetchPosts } from "../store/actions/actionCreators";

export default function HomeView() {
  const dispatch = useDispatch();
  const [latestPost, setLatestPost] = useState({
    title: "",
    imgUrl: "",
    createdAt: ""
  })

  const { posts } = useSelector((state) => {
    return state.postReducer;
  });

  const { categories } = useSelector((state) => {
    return state.categoriesReducer
  })

  useEffect(() => {
    dispatch(fetchPosts()).then((data) => {
      setLatestPost({
        title: data.posts[0].title,
        imgUrl: data.posts[0].imgUrl,
        createdAt: data.posts[0].createdAt.split('T')[0]
      })
    });
    dispatch(fetchCategories())

  }, []);

  return (
    <>
      <h1 className="text-center font-bold text-2xl mb-8">Dashboard</h1>
      <div className="overflow-x-auto">
        <div className="flex justify-center flex-col max-w-2xl items-center gap-8 flex-1 mx-auto mb-8">
          <div className="card card-side bg-base-100 card-bordered border-slate-500">
            <figure>
              <img src={latestPost.imgUrl} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Latest Post:</h2>
              <p>{latestPost.title}</p>
              <div className="divider"></div>
              <p className="font-bold">Created At:</p>
              <p>{latestPost.createdAt}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8">
        <StatCard title={'Posts'} value={posts.length}/>
        <StatCard title={'Categories'} value={categories.length}/>
        </div>
      </div>
    </>
  );
}
