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
import 'react-datepicker/dist/react-datepicker.css';
import ReCAPTCHA from 'react-google-recaptcha'

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
  const [errorResult , setErrorResult] = useState(null);
  const [isAdmnNo , setIsAdmnNo] = useState(true);
  const [isEmail , setIsEmail] = useState(false);
  const [isMobile , setIsMobile] = useState(false);
  const [isAadharNumber , setIsAadharNumber] = useState(false);
  const [isdummyname , setdummyname] = useState('ajanta');
  const [newValue , setnewvalue] = useState('');
  const [errorList, setErrorList] = useState([]);

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

  //const [value, setValue] = useState('1')

  const handleChangeTab = (event,newValue) =>{
    setValue(newValue);
  }

  const handleChangeDateOfBirth = (event) => {
    //   console.log(event.target.value)
    set(event.target.value)
}

  const schema = yup.object().shape({
    admnNo: yup.string().required(),
    //address: yup.string().required(),
    isEmail : yup.boolean(),
    isMobile : yup.boolean(),
    isAadharNumber : yup.boolean(),
    email_address: yup.string().when('isEmail', {
      is: true,
      then: yup.string()
      .email('Invalid Email Format')
      .required('Enter Email ID'),
      otherwise: yup.string(),
   }),
    confirm_email_address: yup.string().oneOf([yup.ref("email_address","confirm_email_address")],'Confirm Email Address and Email Address must match'),
    mobile_number: yup.string().when('isMobile', {
          is: true,
          then: yup.string()
          .required('Enter Mobile number')
          .oneOf([yup.ref("confirm_mobile_number"),null],'Confirm Mobile No. and Mobile No. must match'),
          otherwise: yup.string(),
      }),
      confirm_mobile_number: yup.string().oneOf([yup.ref("mobile_number"),null],'Confirm Mobile No. and Mobile No. must match'),
      aadhar_number :  yup.string().when('isAadharNumber', {
        is: true,
        then: yup.string()
        .required('Enter Aadhar number')
        .oneOf([yup.ref("confirm_aadhar_number"),null],'Confirm Aadhar Number and Aadhar Number must match'),
        otherwise: yup.string(),
    }),
    confirm_aadhar_number: yup.string().oneOf([yup.ref("aadhar_number"),null] , 'Confirm Aadhar No. and Aadhar No. must match')
  })

  const defaultValues = {

    admnNo: '',
    date_of_birth:'',
    student_name:'',
    email_address:'',
    isAdmnNo : true,
    isEmail : false,
    isMobile: false,
    isAadharNumber : false,
    confirm_email_address:'',
    mobile_number:'',
    confirm_mobile_number:'',
    aadhar_number:'',
    confirm_aadhar_number:'',
    recaptcha_token : false
    }

    const [showPassword, setShowPassword] = useState(false)
    const [date, setDate] = useState(new Date())
    const [studentName, setStudentName] = useState()

    const onhandleChangeName  = prop => event => {
      //   console.log(event.target.value)
      setStudentName({ ...values, [prop]: event.target.value })
  }


    // ** State
  const [basicPicker, setBasicPicker] = useState(new Date()) // set date to baseicpicker


  // ** Hook
  const { i18n } = useTranslation()

    // ** Hooks

const sitekey = '6Lf8isYkAAAAAAElKsix4YfzNkQUXWkIBK0CZbfi'

  const {

    handleSubmit,
    control,
    register,
    setValue,
    setError,
    formState: { errors , isDirty, dirtyFields }
  } = useForm({
        defaultValues,
        mode: 'onChange',
       resolver: yupResolver(schema)
  })

  console.log(errors);
  console.log("isDirty,dirtyFields",isDirty,dirtyFields);

  const onSubmit = (data,e) => {
     e.preventDefault();
    // console.log(data);
    const { admnNo , date_of_birth, student_name_new, date_of_birth_new,  student_name , email_address , mobile_number , aadhar_number } = data

      const datanew = {
        admn_no : admnNo,
        date_of_birth_new: date_of_birth_new,
        student_name_new: student_name_new,
        email_address : email_address,
        mobile_number : mobile_number,
        aadhar_number : aadhar_number
      }
      auth.registerUser({ datanew }, (response) => {
      if(response.status === 3)
      {
        setErrorList(response.msg.response.data.message);
      }
    });
  }

  const onClick = data => {
    const { admnNo , google_captcha } = data

    const datanew = {
      admn_no : admnNo,
      google_captcha : google_captcha
    }

    auth.checkAdmnNo({ datanew }, (response) => {
      // console.log(auth.admnNoMsg.data.data.date_of_birth);
       if(response.status === 1)
       {
        setToggleResult(response.msg);
        setValue("isAdmnNo",false , {shouldDirty:true})
        setValue("isEmail",true , {shouldDirty:true})
        setValue("isMobile",true, {shouldDirty:true})
        setValue("isAadharNumber",true,{shouldDirty:true})
        setErrorList([]);
        // auth.admnNoMsg.data.data.student_name
        //setValue("student_name_new",'xyz',{shouldDirty:true})
       }
       else if(response.status === 2)
       {
        setToggleResult(response.msg);
        setErrorList([]);
       }
       else{
        setErrorList(response.msg.response.data.message);
        setToggleResult(null);
        // NotificationManager.error(response.msg, 'Error');
        // setError('loginerror', {
        //   type: 'manual',
        //   message: response.msg
        //})
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
      <form noValidate autoComplete='off' onSubmit={ toggleResult === 'Admission No. Exists' ? handleSubmit(onSubmit) : handleSubmit(onClick) }>
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
                {errorList.admn_no && <FormHelperText sx={{ color: 'error.main' }}>{errorList.admn_no[0] === 'The admn no has already been taken.' ? 'You have already registered , Please Login to Proceed' : errorList.admn_no[0] }</FormHelperText>}
              </FormControl>

             { (toggleResult === 'Admission No. Exists' || errorList.admn_no && errorList.admn_no[0] === 'The admn no has already been taken.') ? '' :
               <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'google_captcha'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
              <ReCAPTCHA sitekey={sitekey} value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.google_captcha)} />
              )}
              />
             {errors.google_captcha && <FormHelperText sx={{ color: 'error.main' }}>{errors.google_captcha.message}</FormHelperText>}
             {errorList.google_captcha && <FormHelperText sx={{ color: 'error.main' }}>{errorList.google_captcha[0]}</FormHelperText>}
            </FormControl>
            }

              {toggleResult === 'Google Recaptcha Error' ? <FormHelperText sx={{ color: 'error.main' }}>{'Error while validating Google Captcha , Please Refresh and Try again'}</FormHelperText> : toggleResult === 'Admission No. Does Not Exists' ?
              <FormHelperText sx={{ color: 'error.main' }}>{'Contact IIT(ISM) Academic Section, Your Admission Number is not in list.'}</FormHelperText> :
              (toggleResult === 'Admission No. Exists' || errorResult !== null) ? auth.admnNoMsg !== null ?
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
                        value = {auth.admnNoMsg.data.data.date_of_birth}
                        //readOnly
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
                onBlur={onBlur}
                onChange={onChange}
                value = {auth.admnNoMsg.data.data.student_name}
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
              render = {({ field: { value,onChange,onBlur,ref }}) => (
                <TextField
                label='Email Address'
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref}
                error={Boolean(errors.email_address)}
                readOnly
                placeholder=''
              />
              )}
              />
          {errors.email_address && <FormHelperText sx={{ color: 'error.main' }}>{errors.email_address.message}</FormHelperText>}
        </FormControl>

              <input type="hidden" name="date_of_birth_new" value={auth.admnNoMsg.data.data.date_of_birth} {...register('date_of_birth_new')}  />
              <input type="hidden" name="student_name_new" value={auth.admnNoMsg.data.data.student_name} {...register('student_name_new')} />
              <input type="hidden" name="isAdmnNo" {...register('isAdmnNo')} />
              <input type="hidden" name="isEmail" {...register('isEmail')} />
              <input type="hidden" name="isMobileNumber" {...register('isMobileNumber')} />
              <input type="hidden" name="isAadharNumber" {...register('isAadharNumber')} />
        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'confirm_email_address'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur , ref}}) => (
                <TextField
                label='Confirm Email Address'
                value={value}
                onBlur={onBlur}
                inputRef={ref}
                onChange={onChange}
                error={Boolean(errors.confirm_email_address)}
                readOnly
                placeholder=''
              />
              )}
              />
          {errors.confirm_email_address && <FormHelperText sx={{ color: 'error.main' }}>{errors.confirm_email_address.message}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'mobile_number'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur,ref }}) => (
                <TextField
                label='Mobile Number'
                value={value}
                onBlur={onBlur}
                inputRef={ref}
                onChange={onChange}
                error={Boolean(errors.mobile_number)}
                readOnly
                placeholder=''
              />
              )}
              />
          {errors.mobile_number && <FormHelperText sx={{ color: 'error.main' }}>{errors.mobile_number.message}</FormHelperText>}
          {errorList.mobile_number && <FormHelperText sx={{ color: 'error.main' }}>{errorList.mobile_number[0]}</FormHelperText>}
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
                error={Boolean(errors.confirm_mobile_number)}
                readOnly
                placeholder=''
              />
              )}
              />
          {errors.confirm_mobile_number && <FormHelperText sx={{ color: 'error.main' }}>{errors.confirm_mobile_number.message}</FormHelperText>}
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
                error={(Boolean(errors.aadhar_number) || Boolean(errorList.aadhar_number) )}
                readOnly
                placeholder=''
              />
              )}
              />
          {errors.aadhar_number && <FormHelperText sx={{ color: 'error.main' }}>{errors.aadhar_number.message}</FormHelperText>}
          {errorList.aadhar_number && <FormHelperText sx={{ color: 'error.main' }}>{errorList.aadhar_number[0]}</FormHelperText>}
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
                error={Boolean(errors.confirm_aadhar_number)}
                readOnly
                placeholder=''

              />
              )}
              />
          {errors.confirm_aadhar_number && <FormHelperText sx={{ color: 'error.main' }}>{errors.confirm_aadhar_number.message}</FormHelperText>}
        </FormControl>


        </> : <h2> { 'auth'+auth.admnNoMsg } Loading1</h2>
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
        { errorList.admn_no && errorList.admn_no[0] === 'The admn no has already been taken.' ? '' :
        <Button fullWidth size='large' type="submit" variant='contained' sx={{ mb: 7 }}>
        {toggleResult === 'Admission No. Exists' ? 'Register' : 'Submit'}
        </Button>
       }
      </form>


      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Typography variant='body2' sx={{ mr: 2 }}>
              Already Registered?
            </Typography>
            <Typography variant='body2'>
              <Link passHref href='/pages/auth/login-v1'>
                <LinkStyled>Login Here</LinkStyled>
              </Link>
            </Typography>
          </Box>
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
