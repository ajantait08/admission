// ** React Imports
import { useState, Fragment , forwardRef } from 'react'

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
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

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
//import DatePicker from '@mui/lab/DatePicker'

import DatePicker from 'react-datepicker'

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
//import CustomInput from 'src/views/forms/form-elements/pickers/react-datepicker/PickersCustomInput'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
//import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { NoteMultiple } from 'mdi-material-ui'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'


import 'react-datepicker/dist/react-datepicker.css'


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


const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref}  InputProps={{
    startAdornment: (
      <InputAdornment position='start'>
        <Icon icon='uim:calender' style={{ width: '20px', height: '20px' }} />
      </InputAdornment>
    )
  }}
   label=<Typography>Birth Date&nbsp;<span style={{ color : 'red'}}>*</span></Typography>
   autoComplete='off' />
})


const AdmPhdReg = () => {

  // console.log(apiData);
  // ** States
  const [values, setValues] = useState({
      first_name : '',
      middle_name : '',
      last_name : '',
      category : '',
      colorblindness : '',
      mobile : '',
      father_name : '',
      blood_group : '',
      email : '',
      pwd : '',
      gender : '',
      dob : ''
  })

  const [errors , setErrors] = useState({
    first_name : '',
    middle_name : '',
    last_name : '',
    category: '',
    colorblindness : '',
    mobile:'',
    father_name : '',
    blood_group : '',
    email : '',
    pwd : '',
    gender : '',
    dob : ''
  })

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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

  const isAlphanumeric = (str) => {
      return /^[a-zA-Z0-9./]+$/.test(str);
  }

  const isAlphanumeric_middle_last = (str) => {
    return /^[a-zA-Z0-9./]*$/.test(str);
}

  const isAlphanumeric_father = (str) => {
    return /^[a-zA-Z0-9 ./]*$/.test(str);
}

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function containsExactlyTenDigits(inputString) {
    return /^\d{10}$/.test(inputString);
  }

  function isDateFormatValid(dateString) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(dateString);
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    if(year < '1970'){
     return false
    }
    else{
     return true
    }

  }

  const handleChangeFormData =  prop => (event) => {
    setValues({ ...values, [prop]: event.target.value })
    if(prop === 'first_name'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'First Name is Required'})
        setIsButtonDisabled(true)
      }
      else if(!isAlphanumeric(event.target.value)){
        setErrors({...errors , [prop] : 'First Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            console.log('No errors are Found')
            setIsButtonDisabled(false)
          }
        }
      }
    }
    if(prop === 'middle_name'){
      // if(event.target.value === ''){
      //   setErrors({...errors , [prop] : 'Middle Name is Required'})
      //   setIsButtonDisabled(true)
      // }
      if(!isAlphanumeric_middle_last(event.target.value)){
        setErrors({...errors , [prop] : 'Middle Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'last_name'){
      // if(event.target.value === ''){
      //   setErrors({...errors , [prop] : 'Last Name is Required'})
      //   setIsButtonDisabled(true)
      // }
      if(!isAlphanumeric_middle_last(event.target.value)){
        setErrors({...errors , [prop] : 'Last Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'father_name'){
      // if(event.target.value === ''){
      //   setErrors({...errors , [prop] : 'Father Name is Required'})
      //   setIsButtonDisabled(true)
      // }
      if(!isAlphanumeric_father(event.target.value)){
        setErrors({...errors , [prop] : 'Father Name Should Only be Alphanumeric'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'email'){

      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Email is Required'})
        setIsButtonDisabled(true)
      }
      else if(!isValidEmail(event.target.value)){
        setErrors({...errors , [prop] : 'Not a valid email address'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'mobile'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Mobile No. is required'})
        setIsButtonDisabled(true)
      }
      else if(!containsExactlyTenDigits(event.target.value)){
        setErrors({...errors , [prop] : 'Mobile Number Should only contain 10 digits'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'category'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Category is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'pwd'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of PwD is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'gender'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Gender is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if(prop === 'blood_group'){
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selection of Blood Group is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.colorblindness != '' && values.mobile != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.colorblindness == '' && errors.mobile == '' && errors.father_name == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
    }

    if (prop === 'colorblindness') {
      if(event.target.value === ''){
        setErrors({...errors , [prop] : 'Selecting correct option for Color Blindness is required'})
        setIsButtonDisabled(true)
      }
      else {
        setErrors({...errors , [prop] : ''})
        if(values.first_name != '' && values.category != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && basicPicker != ''){
          if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == '' && errors.dob == ''){
            setIsButtonDisabled(false)
          }
        }
      }
  }

}


    // ** State
  const [basicPicker, setBasicPicker] = useState(null) // set date to baseicpicker

  const [selectedDate , setSelectedDate] = useState(new Date())

  const [open, setOpen] = useState(false)
  const handleClickOpen = (event) => {
    if(event.target.value === 'yes'){
    setOpen(true)
    }
    else{
    setOpen(false)
    }
  }
  const handleClose = () => setOpen(false)

  // ** Hook
  //const { i18n } = useTranslation()

    // ** Hooks

  //const sitekey = '6Lf8isYkAAAAAAElKsix4YfzNkQUXWkIBK0CZbfi'


  const submitHandler = (event) => {

     event.preventDefault();
     var firstname = values.first_name;
     var middlename = values.middle_name;
     var lastname = values.last_name;
     var pwd = values.pwd;
     var category = values.category;
     var email = values.email;
     var mobile = values.mobile;
     var gender = values.gender;
     const formattedDate = format(basicPicker, "dd-MM-yyyy");
     var fathername = values.father_name;
     var bloodgroup = values.blood_group;
     var colorblindness = values.colorblindness;

     var datanew  = {
      firstname : firstname,
      middlename : middlename,
      lastname : lastname,
      pwd,
      category,
      email,
      mobile,
      gender,
      formattedDate,
      fathername,
      bloodgroup,
      colorblindness
     }

     auth.registerUser({ datanew }, (response) => {})

  }

  const handleClickColorBlindData = (event) => {
     console.log(event.target.value)
  }

  // const onClick = data => {


  //   auth.checkLoginAdmnNo({ data }, (response) => {

  //     // console.log(auth.admnNoMsg.data.data.date_of_birth);
  //      if(response.status === 1)
  //      {

  //      }
  //      else if(response.status === 2)
  //      {
  //       setToggleResult(response.msg);
  //       setErrorList([])
  //      }
  //      else{
  //       setErrorList(response.msg.response.data.message);
  //       setToggleResult(null);
  //      }
  //   })
  // }



  return (
    <DatePickerWrapper>
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

        <form noValidate autoComplete='off' onSubmit={submitHandler}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>

            <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>First Name<span style={{ color : 'red'}}>*</span></Typography>
                name='first_name'
                placeholder='Enter First Name'
                value={values.first_name}
                onChange={handleChangeFormData('first_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.first_name}</FormHelperText>}
                {/* {errorList.first_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.first_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Last Name</Typography>
                name='last_name'
                placeholder='Enter Last Name'
                value={values.last_name}
                onChange={handleChangeFormData('last_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.last_name}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:trophy-award' style={{ width: '20px', height: '20px' }} />&nbsp;Divyang (PwD)<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.pwd} name='pwd' onChange={handleChangeFormData('pwd')} id='grouped-native-select pwd'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { pwd.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.pwd && <FormHelperText sx={{ color: 'error.main' }}>{errors.pwd}</FormHelperText>}
                </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Email<span style={{ color : 'red'}}>*</span></Typography>
                name='email'
                placeholder='Enter Email'
                value={values.email}
                onChange={handleChangeFormData('email')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:email-edit' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:gender-transgender' style={{ width: '20px', height: '20px' }} />&nbsp;Gender<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More' name='gender' value={values.gender} id='grouped-native-select gender' onChange={handleChangeFormData('gender')}>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { gender.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.gender && <FormHelperText sx={{ color: 'error.main' }}>{errors.gender}</FormHelperText>}
                </FormControl>

                <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Father's Name</Typography>
                name='father_name'
                placeholder='Enter Father Name'
                value={values.father_name}
                onChange={handleChangeFormData('father_name')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.father_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.father_name}</FormHelperText>}
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
                      <Icon icon='mdi:account-outline' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.middle_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.middle_name}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:shape-plus' style={{ width: '20px', height: '20px' }} />&nbsp;Category<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' name='category' value={values.category} onChange={handleChangeFormData('category')} id='grouped-native-select category'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { category.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {errors.category && <FormHelperText sx={{ color: 'error.main' }}>{errors.category}</FormHelperText>}
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <TextField
                fullWidth
                label=<Typography>Mobile Number&nbsp;<span style={{ color : 'red'}}>*</span></Typography>
                name='mobile'
                id='mobile'
                placeholder='Enter Mobile Number'
                value={values.mobile}
                onChange={handleChangeFormData('mobile')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:phone-in-talk' style={{ width: '20px', height: '20px' }} />
                    </InputAdornment>
                  )
                }}
              />
                {errors.mobile && <FormHelperText sx={{ color: 'error.main' }}>{errors.mobile}</FormHelperText>}
                {/* {errorList.last_name && <FormHelperText sx={{ color: 'error.main' }}>{errorList.last_name[0]}</FormHelperText>} */}
              </FormControl>


                <FormControl fullWidth sx={{ mb: 4 }}>

                      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label=<Typography>Date Of Birth<span style={{ color : 'red'}}>*</span></Typography>
                        inputFormat="dd/MM/yyyy"
                        name="dob"
                        openTo="day"
                        value = {basicPicker}
                        onChange={(newValue) => { console.log('newvalue'+ newValue); setBasicPicker(newValue) }}
                        renderInput={params => <TextField {...params}/>}
                        error={Boolean(errors.dob)}
                      />
                    </LocalizationProvider> */}
                    <DatePicker
                    selected={basicPicker}
                    dateFormat="dd-MM-yyyy"
                    showYearDropdown
                    showMonthDropdown
                    placeholderText='DD-MM-YYYY'
                    customInput={<CustomInput />}
                    id='form-layouts-separator-date'
                    onChange={(newValue,basicPicker) => { if(newValue == null || newValue == 'Invalid Date' || !formatDate(newValue)) {
                      //setBasicPicker(basicPicker)
                      setErrors({...errors , dob : 'Date is invalid'})
                      setIsButtonDisabled(true)
                      } else {
                      setBasicPicker(newValue)
                      setErrors({...errors , dob : ''})
                      if(values.first_name != '' && values.category != '' && values.mobile != '' && values.blood_group != '' && values.email != '' && values.pwd != '' && values.gender != '' && values.colorblindness != ''){
                        console.log('None of the fields are empty for dob section');
                        if(errors.first_name == '' && errors.middle_name == '' && errors.last_name == '' && errors.category == '' && errors.mobile == '' && errors.father_name == '' && errors.blood_group == '' && errors.email == '' && errors.pwd == '' && errors.gender == ''){
                          console.log('No error was found here');
                          setIsButtonDisabled(false)
                        }
                      }
                      }
                      }}
                     error={Boolean(errors.dob)}
                    />
                    {errors.dob && <FormHelperText sx={{ color: 'error.main' }}>{errors.dob}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
                    <InputLabel htmlFor='grouped-native-select'><Icon icon='mdi:water-outline' style={{ width: '20px', height: '20px' }} />&nbsp;Blood Group<span style={{ color : 'red'}}>*</span></InputLabel>
                    <Select label='Grouping More More' value={values.blood_group} name='blood_group' onChange={handleChangeFormData('blood_group')} id='grouped-native-select blood_group'>
                    <MenuItem value=''>
                        <em> -- Please Select --</em>
                    </MenuItem>
                    { blood_group.map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                    ))}
                    </Select>
                    {/* <FormHelperText>With label + helper text</FormHelperText> */}
                    {errors.blood_group && <FormHelperText sx={{ color: 'error.main' }}>{errors.blood_group}</FormHelperText>}
                </FormControl>
             </Grid>

             <FormControl sx={{ mb:4, flexWrap: 'wrap', flexDirection: 'row' }}>
             <FormLabel component='legend' sx={{ margin: '16px 0px 0px 8px !important' }} >Do you have Color Blindness/Uniocularity? <span style={{ color : 'red'}}>*</span> &nbsp; &nbsp;</FormLabel>
              <RadioGroup row value={values.colorblindness} name='colorblindness' id='colorblindness' onClick={handleClickOpen} onChange={handleChangeFormData('colorblindness')} aria-label='colorblindness'>
                <FormControlLabel value='yes' control={<Radio />} label='Yes' />
                <FormControlLabel value='no' control={<Radio />} label='No' />
              </RadioGroup>
          </FormControl>
          <Dialog
        open={open}
        disableEscapeKeyDown
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose()
          }
        }}
      >
        <DialogTitle id='alert-dialog-title'>Information!</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
           Candidates with colour blindness / uniocularity are not permissible for Applied Geology (AGL).
          </DialogContentText>
        </DialogContent>
        <DialogActions className='dialog-actions-dense'>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
          <ButtonNew fullWidth size='large' disabled={isButtonDisabled} type='submit' variant='contained' sx={{ mb: 7}}>
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
  </DatePickerWrapper>
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
