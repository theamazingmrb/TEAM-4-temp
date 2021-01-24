import React,{ useState, useEffect } from 'react'

import Posts from './Posts/Posts'
import UploadPost from './Forms/UploadPost'

import { getCurrentUser } from "../services/auth.service"

import { findAll } from '../services/post.service';

// renders posts and comments

const Home = () => {
  const currentUser = getCurrentUser()
  const [posts, setPosts] = useState([])
  const [postId, setPostId] = useState(aws);

  useEffect(() => {
    findAll().then((res) => {
      setPosts(res.data)
      console.log(res.data)
    })
  }, [])

  const setPost = (id) => {
    setPostId()
  }

  return (
      <div>
          <h1 className="title">Welcome to Petflix</h1>
          <div className="gallery">
            <Posts setPost={setPost} posts={posts} />
            <UploadPost postId={postId} setPost={setPost} />
          </div>
      </div>
  );
};

export default Home;
