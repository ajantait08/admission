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
import BlankLayout from 'src/@core/layouts/BlankLayout'
import BlankLayoutWithAppBar from 'src/@core/layouts/BlankLayoutWithAppBar'
import useMediaQuery from '@mui/material/useMediaQuery'
import FormHelperText from '@mui/material/FormHelperText'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import 'react-datepicker/dist/react-datepicker.css'

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


// ** Custom Component Imports
import CustomInput from 'src/views/forms/form-elements/pickers/react-datepicker/PickersCustomInput'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
//import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustrationsV1'
import { NoteMultiple } from 'mdi-material-ui'


// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
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

const SidebarComponent = () => {
  <Box sx={{ px:4 , py : 2 , height : 'calc(100vh - 12 rem)', backgroundColor: 'background.paper' }}>
    <h1>Sidebar</h1>
  </Box>
}
const langObj = { fr, ar, en }

const RegisterV1 = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  const [toggleResult , setToggleResult]  = useState(null);

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const [value, setValue] = useState('1')

  const handleChangeTab = (event,newValue) =>{
    setValue(newValue);
  }

  const schema = yup.object().shape({
    admnNo: yup.string().required(),
    date_of_birth: yup.string().required(),
    student_name: yup.string().required(),
    email_address: yup.string().required(),
    confirm_email_address: yup.string().required(),
    mobile_number: yup.string().required(),
    confirm_mobile_number: yup.string().required(),
    aadhar_number: yup.string().required(),
    confirm_aadhar_number: yup.string().required(),
  })

  const defaultValues = {
    admnNo: '',
    date_of_birth:'',
    student_name:'',
    email_address:'',
    confirm_email_address:'',
    mobile_number:'',
    confirm_mobile_number:'',
    aadhar_number:'',
    confirm_aadhar_number:''
  }

    const [showPassword, setShowPassword] = useState(false)
    const [date, setDate] = useState(new Date())


    // ** State
  const [basicPicker, setBasicPicker] = useState(new Date()) // set date to baseicpicker


  // ** Hook
  const { i18n } = useTranslation()

    // ** Hooks

  const {
    control,
    setError,
    handleSubmit,
    handleClick,
    register,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {


    const { admnNo } = data
    const admn_no = admnNo

    // console.log('xyz');

    auth.checkAdmnNo({ admn_no }, (response) => {
      //console.log(auth.admnNoMsg.data.data.date_of_birth);


       if(response.status === 1)
       {
        setToggleResult(response.msg);
       }
       else if(response.status === 2)
       {
        setToggleResult(response.msg);
       }
       else{
        NotificationManager.error(response, 'Error');
        setError('loginerror', {
          type: 'manual',
          message: response
        })
       }
    })
  }

  // console.log(auth.admnNoMsg);


  const onClick = data => {
    console.log('entered onclick'+data)
    const { admnNo } = data
    const admn_no = admnNo
    auth.checkAdmnNo({ admn_no }, (response) => {
       if(response.status === 1)
       {
        setToggleResult(response.msg);
       }
       else if(response.status === 2)
       {
        setToggleResult(response.msg);
       }
       else{
        NotificationManager.error(response, 'Error');
        setError('loginerror', {
          type: 'manual',
          message: response
        })
       }
    })
  }

  return (

    <Typography>
    <Box>
  <Grid container spacing={4} >

    <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>
    <CardWelcomeBack />
  </Grid>
  <Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>
   <Card>
    <CardContent>
      <Box sx={{ mb: 6 }}>
        <Typography variant='h5' sx={{ fontWeight: 600, mb: 1.5 }}>
          <u>Registration</u>
        </Typography>
        <Typography variant='body2'>Please Proceed for Convocation Registration!</Typography>
      </Box>
      <form noValidate autoComplete='off' onSubmit={ toggleResult === 'Admission No. Exists' ? handleSubmit(onSubmit) : handleSubmit(onClick)}>
      {/* <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}> */}
      <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='admnNo'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      label='Admission No.'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.admnNo)}
                      InputProps={{readOnly : toggleResult === 'Admission No. Exists' ? true:false }}
                      placeholder=''
                    />
                  )}

                />
                {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}

              </FormControl>
              {toggleResult === 'Admission No. Does Not Exists' ?
              <FormHelperText sx={{ color: 'error.main' }}>{'Contact IIT(ISM) Academic Section, Your Admission Number is not in list.'}</FormHelperText> :
              toggleResult === 'Admission No. Exists' ? auth.admnNoMsg != null ?
              <>
                <FormControl fullWidth sx={{ mb: 4 }}>
                    <Controller
                    name = 'date_of_birth'
                    control = {control}
                    rules = {{required:true}}
                    render = {({ field: { value,onChange,onBlur }}) => (
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label='Date Of Birth'
                        inputFormat="dd/MM/yyyy"
                        value={auth.admnNoMsg.data.data.date_of_birth}
                        readOnly
                        onChange={newValue => setBasicPicker(newValue)}
                        renderInput={params => <TextField {...params} />}
                        error={Boolean(errors.date_of_birth)}
                      />
                    </LocalizationProvider>
                    )}
                    />
                {errors.date_of_birth && <FormHelperText sx={{ color: 'error.main' }}>{errors.date_of_birth.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'student_name'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Student Name'
                value={auth.admnNoMsg.data.data.student_name}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.student_name)}
                InputProps={{ readOnly: true }}
                placeholder=''

              />
              )}
              />
          {errors.student_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.student_name.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'email_address'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Email Address'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.admnNo)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'confirm_email_address'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Confirm Email Address'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.admnNo)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'mobile_number'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Mobile Number'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.admnNo)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'confirm_mobile_number'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Confirm Mobile Number'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.admnNo)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'aadhar_number'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Aadhar Number'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.admnNo)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'confirm_aadhar_number'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                <TextField
                label='Confirm Aadhar Number'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.admnNo)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.admnNo && <FormHelperText sx={{ color: 'error.main' }}>{errors.admnNo.message}</FormHelperText>}
        </FormControl>
        </> : <h2>Loading1</h2>
              :
              null
                    }

        {/* <TextField fullWidth type='email' label='Email' sx={{ mb: 4 }} /> */}
        {/* <FormControl fullWidth>
          <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
          <OutlinedInput
            label='Password'
            value={values.password}
            id='auth-register-password'
            onChange={handleChange('password')}
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  edge='end'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  aria-label='toggle password visibility'
                >
                  {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
        {/* <FormControlLabel
          control={<Checkbox />}
          label={
            <Fragment>
              <span>I agree to </span>
              <Link href='/' passHref>
                <LinkStyled onClick={e => e.preventDefault()}>privacy policy & terms</LinkStyled>
              </Link>
            </Fragment>
          }
        /> */}
        <Button fullWidth size='large' type="submit" variant='contained' sx={{ mb: 7 }}>
        {toggleResult === null ? 'Submit' : 'Register'}
        </Button>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Typography variant='body2' sx={{ mr: 2 }}>
            Already have an account?
          </Typography>
          <Typography variant='body2'>
            <Link passHref href='/pages/auth/login-v1'>
              <LinkStyled>Sign in instead</LinkStyled>
            </Link>
          </Typography>
        </Box> */}
        {/* <Divider sx={{ my: 5 }}>or</Divider>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href='/' passHref>
            <IconButton component='a' onClick={e => e.preventDefault()}>
              <Facebook sx={{ color: '#497ce2' }} />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <IconButton component='a' onClick={e => e.preventDefault()}>
              <Twitter sx={{ color: '#1da1f2' }} />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <IconButton component='a' onClick={e => e.preventDefault()}>
              <Github
                sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
              />
            </IconButton>
          </Link>
          <Link href='/' passHref>
            <IconButton component='a' onClick={e => e.preventDefault()}>
              <Google sx={{ color: '#db4437' }} />
            </IconButton>
          </Link>
        </Box> */}
      </form>
    </CardContent>
  </Card>
  </Grid>
  </Grid>
  <FooterIllustrationsV1 />
</Box>
    </Typography>
  )
}

RegisterV1.guestGuard = true
RegisterV1.getlayout = page => <UserLayout>{page}</UserLayout>

export default RegisterV1
