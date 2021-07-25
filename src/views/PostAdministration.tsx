// import React, { useState, useContext, useEffect } from 'react'
// import TextField from '@material-ui/core/TextField'
// import { trackPromise, usePromiseTracker } from 'react-promise-tracker'
// import { Button, LinearProgress, Table, TableContainer } from '@material-ui/core'
// import { postService } from '../services/PostService'
// import { Post } from '../types/model/Post'
// import { useHistory, useParams } from 'react-router-dom'
// import { useSnackbar } from 'notistack'
// import { path } from '../types/model/Path'
// import { useRef } from 'react'
// import Root from '../components/Root'

// const PostAdministration: React.FC = () => {
//   const [post, setPostToShow] = useState<Post>([])
//   const [numberOfPosts, setNumberOfPosts] = useState(0)
//   const [posts, setPosts] = useState<Post[]>([])
//   const { userId } = useParams<{ userId: string }>()
//   const history = useHistory()
//   const { promiseInProgress } = usePromiseTracker()
//   const { enqueueSnackbar } = useSnackbar()
//   const [loading, setLoading] = useState(true)
//   const paths = [{ name: 'Post', icon: 'home', url: '/PostCard' } as path]
//   const myRef = useRef(document.createElement('table'))

//   const handleGoToPostClick = async (id: number) => {
//     const post = await trackPromise(postService.get(id))
//     history.push('/postCard' + id, posts)
//   }

//  useEffect (() => {
//     const getPosts = async () => {
//       try {
//          setPostToShow(postService.getPostsByUserId(Number(userId)))
//        // const postsData = await trackPromise(postService.getPostsByUserId(Number(userId)))
//        // setNumberOfPosts(postsData.totalItem)
//         //setPosts([...postsData.data])
//         setLoading(false)
//       } catch (error) {
//         console.log(error)
//         enqueueSnackbar('No se pudieron obtener los post: ' + error.message, { variant: 'error' })
//       }
//       setLoading(false)
//     }
//     getPosts()
//   }
//  )
//  return (<div>HOLA</div>)
  
// }
// export default PostAdministration


