// ** React Imports
import { useState, Fragment } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import CardWelcomeBack from 'src/views/ui/cards/gamification/CardWelcomeBack'
import TabsNav from 'src/views/components/tabs/TabsNav'
import Tab from '@mui/material/Tab'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import MuiTabList from '@mui/lab/TabList'
import UserLayout from 'src/layouts/UserLayout'
import Icon from 'src/@core/components/icon'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import CardStatisticsCharacters from 'src/views/ui/cards/statistics/CardStatisticsCharacters'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormHelperText from '@mui/material/FormHelperText'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'react-datepicker/dist/react-datepicker.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'

//import FormControlLabel from '@mui/material/FormControlLabel'


// ** Third Party Imports
import * as yup from 'yup'
import { useForm , Controller } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'



// ** Icons Imports
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
// ** Third Party Imports
// import DatePicker from 'react-datepicker'
// import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from '@mui/lab/DatePicker'

// import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import MobileDatePicker from '@mui/lab/MobileDatePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import fr from 'date-fns/locale/fr'
import ar from 'date-fns/locale/ar-SA'
import en from 'date-fns/locale/en-US'
import { useTranslation } from 'react-i18next'
import {format} from 'date-fns'

import axios from 'axios'
//import CustomChip from 'src/@core/components/mui/chip'


// ** Custom Component Imports
import CustomInput from 'src/views/forms/form-elements/pickers/react-datepicker/PickersCustomInput'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
//import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { NoteMultiple } from 'mdi-material-ui'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'


// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '34rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const TabList = styled(MuiTabList)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minHeight: 38,
    minWidth: 130,
    borderRadius: theme.shape.borderRadius
  }
}))

  const ButtonNew = styled(Button)(({theme}) => ({

        '& .MuiButton-root' : {
        backgroundColor: `${theme.palette.common.phd_admission_dark} !important`
    }

  }))


const Img = styled('img')({
    right: 7,
    bottom: 0,
    height: 177,
    position: 'absolute'
  })

const SidebarComponent = () => {
  <Box sx={{ px:4 , py : 2 , height : 'calc(100vh - 12 rem)', backgroundColor: 'background.paper' }}>
    <h1>Sidebar</h1>
  </Box>
}
const langObj = { fr, ar, en }

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
}

const category = [
  'General',
  'SC',
  'ST',
  'OBC',
  'EWS'
]

const pwd = [
    'Yes',
    'No'
]

const gender = [
    'Male',
    'Female',
    'Transgender'
]

const blood_group = [
   'A+',
   'A-',
   'B+',
   'B-',
   'O+',
   'O-',
   'AB+',
   'AB-'
]

//const SelectMultiple = () => {
  // ** State


const AdmPhdReg = () => {

  // console.log(apiData);
  // ** States
  const [values, setValues] = useState({
      first_name : '',
      middle_name : '',
      last_name : '',
      category : '',
      colorblindness : ''
  })

  const [errors , setErrors] = useState({
    first_name : '',
    middle_name : '',
    last_name : '',
    category: '',
    colorblindness : ''
  })

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

//   const handleChange = prop => event => {
//     setValues({ ...values, [prop]: event.target.value })
//   }


  const schema = yup.object().shape({
    mobile_no: yup.string().required(),
    email: yup.string().required(),
    admn_no: yup.string().required(),
  })

  const defaultValues = {
    mobile_no:'',
    email : '',
    admn_no : '',
    recaptcha_token : false
    }

//     const [showPassword, setShowPassword] = useState(false)
//     const [date, setDate] = useState(new Date())
//     const [studentName, setStudentName] = useState()

//     const onhandleChangeName  = prop => event => {
//       //   console.log(event.target.value)
//       setStudentName({ ...values, [prop]: event.target.value })
//   }

  const handleChangeFormData =  prop => (event) => {
    console.log(prop)
    console.log(event)
    setValues({ ...values, [prop]: event.target.value })
  }


    // ** State
  const [basicPicker, setBasicPicker] = useState(new Date()) // set date to baseicpicker

  const [selectedDate , setSelectedDate] = useState(new Date())

  // ** Hook
  //const { i18n } = useTranslation()

    // ** Hooks

  const sitekey = '6Lf8isYkAAAAAAElKsix4YfzNkQUXWkIBK0CZbfi'

//   const {

//     handleSubmit,
//     control,
//     register,
//     setValue,
//     formState: { errors , isDirty, dirtyFields }
//   } = useForm({
//     defaultValues,
//     mode: 'onChange',
//     resolver: yupResolver(schema)
//   })

//   console.log(errors);
//   console.log("isDirty,dirtyFields",isDirty,dirtyFields);

  const onSubmit = data => {

    // console.log('submitted here after form submit');
    // console.log(data);
    auth.registerUser({ data }, (response) => {


    });
  }

  const onClick = data => {


    auth.checkLoginAdmnNo({ data }, (response) => {

      // console.log(auth.admnNoMsg.data.data.date_of_birth);
       if(response.status === 1)
       {

       }
       else if(response.status === 2)
       {
        setToggleResult(response.msg);
        setErrorList([])
       }
       else{
        setErrorList(response.msg.response.data.message);
        setToggleResult(null);
       }
    })
  }

  return (
    <>
    <Box className='content-center'>
    <Grid container spacing={4} >
    <Grid item xs={12} md={2} sx={{ alignSelf: 'flex-start' }}>
    </Grid>
    <Grid item xs={12} md={10} sx={{ alignSelf: 'flex-start' }}>
        <Card sx={{ width: '800px !important' , backgroundColor: `${theme.palette.common.phd_admission_dark}`}} >
        <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
            <Box sx={{ mb: 8, alignItems: 'center', justifyContent: 'center' }}>
    <Card sx={{ width: '750px !important'}}>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
        <Box sx={{ mb: 8 }}>
        <Card sx={{ backgroundColor: `${theme.palette.common.phd_admission}` , width: '700px !important', overflow: 'visible', position: 'relative' }}>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 6.5, fontWeight: 600 }}>
         Welcome to {themeConfig.templateName} !
        </Typography>
        <Box sx={{ mb: 1.5, rowGap: 1, width: '65%', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Typography variant='h5' sx={{ mr: 1.5 }}>
            Registration Form &nbsp;&nbsp;
            <IconButton
                            edge='start'
                            onMouseDown={e => e.preventDefault()}
                          >
                            <Icon icon='mdi:file-document-edit' fontSize={20} />
                          </IconButton>

          </Typography>

        </Box>

        <Box sx={{ mb: 1.5, rowGap: 1, width: '65%', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Typography variant='small' sx={{ mr: 1.5 , color : '#6F0E11;' }}>
            Please Fill All Details Carefully !
          </Typography>
        </Box>

        <Img src="/images/pages/create-deal-review-complete.png" alt="Ratings"/>
      </CardContent>
    </Card>
        </Box>

        <form noValidate autoComplete='off'>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>

            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='First Name'
                name='first_name'
                placeholder='Enter First Name'
                value={values.first_name}
                onChange={handleChangeFormData('first_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
                {errors.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.first_name.message}</FormHelperText>}
                {/* {errorList.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.first_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Last Name'
                name='last_name'
                placeholder='Enter Last Name'
                value={values.last_name}
                onChange={handleChangeFormData('last_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
                {errors.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.last_name.message}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'>Divyang (PwD)</InputLabel>
                    <Select label='Grouping More' defaultValue='' id='grouped-native-select'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { pwd.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>

                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Email'
                name='email'
                placeholder='Enter Email'
                value={values.email}
                onChange={handleChangeFormData('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:email-edit' />
                    </InputAdornment>
                  )
                }}
              />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

             </Grid>

             <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }} >

             <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Middle Name'
                name='middle_name'
                placeholder='Enter Middle Name'
                value={values.middle_name}
                onChange={handleChangeFormData('middle_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
                {errors.middle_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.middle_name.message}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'>Category</InputLabel>
                    <Select label='Grouping' defaultValue='' id='grouped-native-select'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { category.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label='Mobile Number'
                name='mobile'
                placeholder='Enter Mobile Number'
                value={values.last_name}
                onChange={handleChangeFormData('mobile')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
                {errors.mobile && <FormHelperText sx={{ color: 'error.main' }}>{errors.mobile.message}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>


                <FormControl fullWidth sx={{ mb: 4 }}>

                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label='Date Of Birth'
                        inputFormat="dd/MM/yyyy"
                        value = {basicPicker}
                        //readOnly
                        onChange={newValue => setBasicPicker(newValue)}
                        renderInput={params => <TextField {...params} />}
                        error={Boolean(errors.date_of_birth)}
                      />
                    </LocalizationProvider>

              </FormControl>


             </Grid>

             <FormControl sx={{ mb:4, flexWrap: 'wrap', flexDirection: 'row' }}>
             <FormLabel component='legend' sx={{ margin: '16px 0px 0px 8px !important' }} >Colourblindness &nbsp; &nbsp;</FormLabel>
              <RadioGroup row value={values.colorblindness} name='colorblindness' id='colorblindness' onChange={handleChangeFormData('colorblindness')} aria-label='colorblindness'>
                <FormControlLabel value='checked' control={<Radio />} label='Checked' />
                <FormControlLabel value='unchecked' control={<Radio />} label='Unchecked' />
              </RadioGroup>
          </FormControl>
          <ButtonNew fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7}}>
            Submit
          </ButtonNew>
          </Grid>
          </form>

        <Box sx={{ alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              New To Login?
            </Typography>
            <Typography variant='body2'>
              <Link passHref href='/pages/auth/register-v1'>
                <LinkStyled>Register Here</LinkStyled>
              </Link>
            </Typography>
          </Box>
      </CardContent>
    </Card>
    </Box>
</CardContent>
    </Card>
    </Grid>
    </Grid>
    <FooterIllustrationsV1 />
  </Box>
  </>
  )
}

AdmPhdReg.guestGuard = true
AdmPhdReg.getlayout = page => <UserLayout>{page}</UserLayout>

// export const getStaticProps = async () => {
//     const res = await axios.get('/cards/statistics')
//     const apiData = res.data
//     return {
//       props: {
//         apiData
//       }
//     }
//   }

export default AdmPhdReg
