import React, { useState, useContext, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import {
  Button,
  Container,
  createStyles,
  CssBaseline,
  Divider,
  Grid,
  Icon,
  LinearProgress,
  makeStyles,
  Theme
} from '@material-ui/core'

import { Link, useHistory, useParams } from 'react-router-dom'
import UserContext from '../contexts/UserContext'
import { postService } from '../services/PostService'
import { userService } from '../services/UserService'
import { useSnackbar } from 'notistack'
import { Post } from '../types/model/Post'
import { User } from '../types/model/User'
import { title } from 'process'
import MyBox from '../components/MyStyledComponents/MyBox'

const PostCard: React.FC = (props: any) => {
 
  const [post, setPostToShow] = useState<Post>()
  const { postId } = useParams<{ postId: string }>()
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()
  const goBack = () => {
    history.goBack()
  }


  useEffect(() => {
    const getPost = async () => {
      console.log(postId)
      try {
        setPostToShow(await postService.get(Number(postId)))
      } catch (error) {
        enqueueSnackbar('Error al obtener el post: ' + error.message, { variant: 'error' })
      }
    }
    getPost() 
  })

  return (
    <Container className={post?.description} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={post?.description}>
        <img className={post?.description} />
        <Button fullWidth variant="contained" color="primary" className={post?.description} onClick={goBack}>
          Ingresar
        </Button>
        <Grid container>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </Container>
  )
}
export default PostCard
 
