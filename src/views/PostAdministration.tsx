import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { useSnackbar } from 'notistack'
import Root from '../components/Root'
import { Path } from '../types/model/Path'
import MySearchBar from '../components/MyStyledComponents/MySearchBar'
import { Filter } from '../types/model/Filter'
import esLocale from 'date-fns/locale/es'
import showError from '../utils/Erros'
import { postService } from '../services/PostService'
import { Post } from '../types/model/Post'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Icon
} from '@material-ui/core'
import { Color } from '../types/model/Color'
import { Size } from '../types/model/Size'
import dropDownService from '../services/DropDownService'
import { Breed } from '../types/model/Breed'
import { FurLength } from '../types/model/FurLength'
import LoadingLinearProgress from '../components/LoadingLinearProgress'
import { Galleria } from 'primereact/galleria'
import { Picture } from '../types/model/Picture'
import UserContext from '../contexts/UserContext'
import Chip from '../components/Chip'
import MyBox from '../components/MyStyledComponents/MyBox'

const PostAdministration: React.FC = () => {
  const classes = useStyles()

  const { user } = useContext(UserContext)

  const [colors, setColors] = useState<Color[]>([])
  const [breeds, setBreeds] = useState<Breed[]>([])
  const [lenghts, setLenghts] = useState<FurLength[]>([])
  const [sizes, setSizes] = useState<Size[]>([])

  const history = useHistory()

  const [isLoading, setIsLoading] = useState(true)

  const [filter, setFilter] = useState<Filter>({ postStatus: [1, 2, 3] })

  const { enqueueSnackbar } = useSnackbar()

  const [posts, setPosts] = useState<Post[]>([])

  const itemTemplate = (item: Picture) => {
    return <img src={item.url} style={{ width: '100%', display: 'block' }} />
  }

  const thumbnailTemplate = (item: Picture) => {
    return <img src={item.url} style={{ display: 'block' }} />
  }

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ]

  const handleSearch = async () => {
    try {
      setIsLoading(true)
      console.log(filter)
      setPosts(await postService.getPostsByFilter(filter))
      console.log(await postService.getPostsByFilter(filter))
    } catch (error) {
      enqueueSnackbar(showError(error), { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleBreedChange = async (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter((prevState) => ({
      ...prevState,
      breed: event.target.value == 0 ? undefined : (event.target.value as number)
    }))
  }

  const caption = (item) => {
    return (
      <React.Fragment>
        <h4 className="p-mb-2">{'Hola'}</h4>
        <p>{'Hola'}</p>
      </React.Fragment>
    )
  }

  useEffect(() => {
    const getParams = async () => {
      try {
        setBreeds(await dropDownService.getAllBreeds())
        /* await handleSearch() */
        /*setColors(await dropDownService.getAllColors())
        setLenghts(await dropDownService.getAllLengths()) 
        setSizes(await dropDownService.getAllSizes()) */
      } catch (error) {
        enqueueSnackbar(showError(error.message), { variant: 'error' })
      } finally {
        setIsLoading(false)
      }
    }
    getParams()
  }, [])

  useEffect(() => {
    console.log('render')
    const fetchPosts = async () => await handleSearch()
    fetchPosts()
  }, [filter])

  const paths = [
    { name: 'Publicaciones', icon: 'home' } as Path,
    { name: 'Administrar', icon: 'settings', url: '/product' } as Path
  ]

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (filter.postStatus) {
      if (event.target.checked)
        filter.postStatus?.includes(+event.target.name) ? null : filter.postStatus?.push(+event.target.name)
      else filter.postStatus = filter.postStatus?.filter((status) => status !== +event.target.name)
      setFilter((prevState) => ({ ...prevState }))
    }
  }

  const handleAceptPost = async (post: Post) => {
    try {
      setIsLoading(true)
      if (user) await postService.aceptPost(post.Id, user.Id)
      setFilter((prevState) => ({ ...prevState }))
      enqueueSnackbar('La publicacion ha pasado a estar activa', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(showError(error), { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancelPost = async (post: Post) => {
    try {
      setIsLoading(true)
      if (user) await postService.rejectPost(post.Id, user.Id)
      setFilter((prevState) => ({ ...prevState }))
      enqueueSnackbar('La publcacion ha pasado a estar inactiva', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar(showError(error), { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <MuiPickersUtilsProvider locale={esLocale} utils={DateFnsUtils}>
      <Root className={classes.root} paths={paths}>
        <LoadingLinearProgress isLoading={isLoading} />
        <MyBox className={classes.toolBar}>
          {console.log(filter)}
          <div className={classes.searchBarContainer}>
            <div className={classes.checkboxesLabel}>Correo del autor</div>
            <MySearchBar
              /*  className={classes.searchBar} */
              onClick={handleSearch}
              search={filter.ownerEmail}
              setSearch={(search) => setFilter((prevState) => ({ ...prevState, ownerEmail: search }))}
              placeholder="Buscar por mail del autor"
            ></MySearchBar>
          </div>

          <div className={classes.checkboxesContainer}>
            <div className={classes.checkboxesLabel}>Estado</div>
            <div className={classes.checkboxes}>
              <FormControlLabel
                control={
                  <Checkbox checked={filter.postStatus?.includes(1)} onChange={handleChange} name="1" color="primary" />
                }
                label="Activos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={filter.postStatus?.includes(2)} onChange={handleChange} name="2" color="primary" />
                }
                label="Inactivos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={filter.postStatus?.includes(4)} onChange={handleChange} name="4" color="primary" />
                }
                label="Encontados"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={filter.postStatus?.includes(3)} onChange={handleChange} name="3" color="primary" />
                }
                label="Pendientes"
              />
            </div>
          </div>
          <FormControl className={classes.breedContainer}>
            <InputLabel id="demo-simple-select-label">Raza</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleBreedChange}
              defaultValue={0}
              onSelect={handleSearch}
              value={filter.breed}
            >
              <MenuItem value={0}>Todas</MenuItem>
              {breeds.map((breed) => (
                <MenuItem value={breed.Id}>{breed.description}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className={classes.datePickersContainer}>
            <KeyboardDatePicker
              margin="normal"
              lang="esES"
              id="date-picker-dialog"
              label="Desde"
              format="dd/MM/yyyy"
              InputAdornmentProps={{ color: 'blue' }}
              defaultValue={new Date()}
              disableFuture
              cancelLabel="Cancelar"
              okLabel="Aceptar"
              value={filter.createdFrom}
              onChange={(date) => setFilter((prevState) => ({ ...prevState, createdFrom: date }))}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Hasta"
              format="dd/MM/yyyy"
              value={filter.createdTo}
              cancelLabel="Cancelar"
              disableFuture
              okLabel="Aceptar"
              onChange={(date) => setFilter((prevState) => ({ ...prevState, createdTo: date }))}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </div>
        </MyBox>
        <MyBox className={classes.postsGrid}>
          {posts.map((post, index) => (
            /*        <Galleria
              value={post.pictures}
              responsiveOptions={responsiveOptions}
              numVisible={1}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
              caption={caption}
              style={{ maxWidth: '640px' }}
            /> */
            <div
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: ' no-repeat',
                backgroundImage: `linear-gradient(transparent, rgb(0 0 0 / 45%), rgb(0 0 4 / 68%)),url(${post.pictures[0].url})`,
                width: 290,
                height: 250,
                borderRadius: 12
              }}
            >
              {post.pet.breed.description}
              {post.postStatus.Id !== 2 && (
                <IconButton color="secondary" onClick={() => handleCancelPost(post)} disableRipple disableFocusRipple>
                  <Icon className={classes.icon}>block</Icon>
                </IconButton>
              )}
              {post.postStatus.Id !== 1 && (
                <IconButton color="primary" onClick={() => handleAceptPost(post)} disableRipple disableFocusRipple>
                  <Icon className={classes.icon}>done</Icon>
                </IconButton>
              )}
              <Chip status={post.postStatus}> </Chip>
            </div>
          ))}
        </MyBox>
      </Root>
    </MuiPickersUtilsProvider>
  )
}

export default PostAdministration

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      /* padding: '0px 16px', */
      /*   alignItems: 'center', */
      width: '100%'
      /* gap: 32 */
      /*   alignItems: 'center' */
    },
    toolBar: {
      display: 'flex',
      flexDirection: 'row',
      /*   justifyContent: 'space-between', */
      width: '100%',
      gap: 16,
      alignItems: 'flex-end'
    },
    datePickersContainer: {
      display: 'flex',
      gap: 16,
      width: '320px'
    },
    checkboxes: {
      display: 'flex',
      /*   marginBottom: 8, */
      /*  alignItems: 'center', */
      /*  borderWidth: 1,
      borderColor: theme.palette.primary.main,
      border: 'solid', */
      /*   backgroundColor: theme.palette.background.paper, */
      borderRadius: 8,
      /*   alignSelf: 'center', */
      /*   padding: '0px 8px', */
      justifyContent: 'center'
    },
    checkboxesContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    checkboxesLabel: {
      fontSize: '13px',
      fontWeight: 400,
      color: theme.palette.text.secondary
    },
    searchBarContainer: {
      display: 'flex',
      flexDirection: 'column'
      /*  width: '100%' */
    },
    breedContainer: {
      marginBottom: 8,
      width: 160
    },
    postsGrid: {
      display: 'grid',
      /*   justifyContent: 'center', */
      /*  justifyContent: 'space-between', */
      rowGap: 24,
      marginTop: 16,
      /*     flexWrap: 'wrap' */
      /*  gridAutoFlow: 'column', */
      gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))'
      /*     flexWrap: 'wrap' */
    },
    icon: {
      color: theme.palette.primary.main
    }
  })
)
