import React, { useState } from 'react'
import 'primeicons/primeicons.css'
/* import 'primereact/resources/themes/md-dark-indigo/theme.css' */
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { Chart } from 'primereact/chart'
import { createStyles, Icon, IconButton, makeStyles, Theme, useTheme } from '@material-ui/core'
import { Post } from '../types/model/Post'
import Chip from './Chip'

type PieChartProps = {
  post: Post
  onCancel: (post: Post) => void
  onAcept: (post: Post) => void
}

const PetCar: React.FC<PieChartProps> = ({ onAcept, onCancel, post }) => {
  const classes = useStyles()

  const [numberOfPhoto, setNumberOfPhoto] = useState(0)

  const handleChangePhotoLeft = () => {
    if (post.pictures[numberOfPhoto - 1]) {
      setNumberOfPhoto(numberOfPhoto - 1)
    }
  }

  const handleChangePhotoRight = () => {
    if (post.pictures[numberOfPhoto + 1]) {
      setNumberOfPhoto(numberOfPhoto + 1)
    }
  }

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: ' no-repeat',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(transparent, rgb(0 0 0 / 65%), rgb(0 0 4 / 80%)),url(${post.pictures[numberOfPhoto].url})`,
        width: 290,
        height: 250,
        borderRadius: 12,
        display: 'flex',
        justifyContent: 'space-between',
        /*   alignItems: 'flex-end', */
        padding: '16px 16px 4px 16px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Chip status={post.postStatus}></Chip>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {post.pictures[numberOfPhoto - 1] ? (
          <IconButton style={{ padding: 0 }} color="secondary" disableRipple disableFocusRipple>
            <Icon color="primary" onClick={() => handleChangePhotoLeft()}>
              chevron_left
            </Icon>
          </IconButton>
        ) : (
          <div />
        )}
        {post.pictures[numberOfPhoto - 1] ? (
          <IconButton style={{ padding: 0 }} color="secondary" disableRipple disableFocusRipple>
            <Icon color="primary" onClick={() => handleChangePhotoRight()}>
              chevron_right
            </Icon>
          </IconButton>
        ) : (
          <div />
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 14, color: 'white' }}>{post.description}</div>
        {/*   {post.pet.breed.description} */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          {post.postStatus.Id !== 2 && (
            <div onClick={() => onCancel(post)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <IconButton color="secondary" disableRipple disableFocusRipple>
                <Icon className={classes.iconBlock}>block</Icon>
              </IconButton>
              <div style={{ fontSize: 16, color: 'white' }}> Rechazar</div>
            </div>
          )}
          {post.postStatus.Id !== 1 && (
            <div onClick={() => onAcept(post)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <IconButton disableRipple disableFocusRipple>
                <Icon className={classes.iconAcept}>done</Icon>
              </IconButton>
              <div style={{ fontSize: 16, color: 'white' }}> Aceptar</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PetCar

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
      marginBottom: 16,
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
      /*   height: '100%', */
      /*     flexWrap: 'wrap' */
      /*  gridAutoFlow: 'column', */
      gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))'
      /*     flexWrap: 'wrap' */
    },
    iconBlock: {
      color: '#BF1A1A'
    },
    iconAcept: {
      color: '#2AA763'
    },
    noResultsContainer: {
      fontSize: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
      /*  padding: 8 */
    }
  })
)
