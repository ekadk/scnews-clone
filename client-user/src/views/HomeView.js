import Card from "../components/Card";
import Hero from "../components/Hero";
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { fetchPosts } from "../store/actions/actionCreators";

export default function HomeView() {
  const dispatch = useDispatch()
  const [heroPosts, setHeroPosts] = useState([])
  const [moreStories, setMoreStories] = useState([])
  const { posts } = useSelector(state => {
    return state.postReducer
  })

  useEffect(() => {
    dispatch(fetchPosts()).then((data) => {
      const firstThree = data.slice(0, 3)
      const remains = data.slice(3)
      setHeroPosts(firstThree)
      setMoreStories(remains)
    })
  }, [])
  return (
    <>
    {heroPosts ? 
      <Hero data={heroPosts} /> : ""
    }

      <div className="2xl:px-64 px-24">
        <h1 className="text-3xl font-bold text-center mt-4">More Stories</h1>
        <div className="mt-8 mb-32 grid gap-8 grid-cols-3">
        {moreStories.map(post => {
          return <Card key={post.id} post={post} />
        })}
        </div>
      </div>
    </>
  );
}
