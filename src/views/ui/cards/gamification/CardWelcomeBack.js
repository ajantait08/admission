// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

// Styled Grid component
const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 13,
  bottom: 0,
  height: 200,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    height: 165,
    position: 'static'
  }
}))

const NewBox = styled('box')(({ theme }) => ({
  fontWeight: 'bold',
  color:theme.palette.primary.main
}))

const CardWelcomeBack = () => {
  return (
    <Card sx={{ position: 'relative', overflow: 'visible', mt: { xs: 0, sm: 14.4, md: 0 } }}>
      <CardContent sx={{ p: theme => theme.spacing(7.25, 7.5, 7.75, 7.5) }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant='h5' sx={{ mb: 6.5 }}>
              Welcome back{' '}
              <Box component='span' sx={{ fontWeight: 'bold' , color:'primary.main' }}>
              Student / Scholars !
              </Box>
            </Typography>
            <Typography variant='body2'>
              <NewBox component='span' md={12}>
              <p>Dear Student, Please change your System Date Format as
              dd-mm-yyyy then proceed</p>
              </NewBox>
              </Typography>
              <Typography variant='body2'>
              <NewBox component='span' >
                <p>
              Please do not use +91 or any country code in the mobile no,
                                    if you are using any such special value in Mobile no please remember it , at the
                                    time of login please enter the exact value you have used during registration
                                    otherwise you will not be able to login.
                                    </p>
              </NewBox>
              </Typography>
              <Typography variant='body2'>
              <NewBox component='span'>
                <p>
              Please note that all further communication will
                                                be done with given email id and mobile number.
                                                </p>
              </NewBox>
              </Typography>
             </Grid>
          <StyledGrid item xs={12} sm={6} md={4}>
            <Img alt='Welcome back John' src='/images/cards/illustration-john.png' />

          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardWelcomeBack
