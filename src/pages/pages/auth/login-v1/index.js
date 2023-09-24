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

const SidebarComponent = () => {
  <Box sx={{ px:4 , py : 2 , height : 'calc(100vh - 12 rem)', backgroundColor: 'background.paper' }}>
    <h1>Sidebar</h1>
  </Box>
}
const langObj = { fr, ar, en }

const LoginV1 = () => {
  // ** States
  const [values, setValues] = useState({
    mobile_no:'',
    email : '',
    admn_no : '',

  })

  const [toggleResult , setToggleResult]  = useState(null);
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
    mobile_no: yup.string().required(),
    email: yup.string().required(),
    admn_no: yup.string().required(),
    isStudentName : yup.boolean(),
    isProgrammeName : yup.boolean(),

  })

  const defaultValues = {
    mobile_no:'',
    email : '',
    admn_no : '',
    recaptcha_token : false,
    programme_name : '',
    student_name : '',
    isStudentName : false,
    isProgrammeName : false
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
    console.log(data);
    const { admn_no , student_name_new, programme_name_new,  email , mobile_no, google_captcha} = data

      const datanew = {
        mobile_no : mobile_no,
        email: email,
        admn_no: admn_no,
        student_name : student_name_new,
        programme_name : programme_name_new,
        google_captcha: google_captcha
      }

      auth.loginUser({datanew},(response) => {
      if(response.status === 3)
      {
        setErrorList(response.msg.response.data.message);
      }
      });
  }



  const onClick = data => {


    auth.checkLoginAdmnNo({ data }, (response) => {

      // console.log(auth.admnNoMsg.data.data.date_of_birth);
       if(response.status === 1)
       {
        console.log('initial_msg'+response.msg);
        setToggleResult(response.msg);
        setValue('isStudentName',true,{shouldDirty:true});
        setValue('isProgrammeName',true,{shouldDirty:true});
        setErrorList([])
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
    <Box className='content-center'>
    <Grid container spacing={4} >
  <Grid item xs={12} md={4} sx={{ alignSelf: 'flex-start' }}>
</Grid>
<Grid item xs={12} md={6} sx={{ alignSelf: 'flex-start' }}>
    <Card sx={{ zIndex: 1 }}>
      <CardContent sx={{ p: theme => `${theme.spacing(12, 9, 7)} !important` }}>
        <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
 <Card>
  <CardContent>
        <Box sx={{ mb: 8 }}>
          <Typography variant='h5' sx={{ fontWeight: 600, mb: 1.5 }}>
            {/* Welcome to {themeConfig.templateName}! */}
            Welcome , Please Login 👋🏻
          </Typography>
          <Typography variant='body2'>Please sign-in to your account</Typography>
        </Box>
        <form noValidate autoComplete='off' onSubmit={ toggleResult === 'Admission No. Exists' ? handleSubmit(onSubmit) : handleSubmit(onClick) }>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'mobile_no'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                    <TextField
                    fullWidth
                      label='Mobile No.'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.mobile_no)}
                      InputProps={{readOnly : toggleResult === 'Admission No. Exists' ? true:false }}
                      placeholder=''
                    />
              )}
              />
              {errors.mobile_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.mobile_no.message}</FormHelperText>}
              {errorList.mobile_no && <FormHelperText sx={{ color: 'error.main' }}>{errorList.mobile_no[0]}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'email'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
                  <TextField
                    fullWidth
                      label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      InputProps={{readOnly : toggleResult === 'Admission No. Exists' ? true:false }}
                      placeholder=''
                    />
              )}
              />
              {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              {errorList.email && <FormHelperText sx={{ color: 'error.main' }}>{errorList.email[0]}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth sx={{ mb: 4 }}>
              <Controller
              name = 'admn_no'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur }}) => (
              <TextField
              fullWidth
              label='Admission No.'
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              error={Boolean(errors.admn_no)}
              InputProps={{readOnly : toggleResult === 'Admission No. Exists' ? true:false }}
              placeholder=''
                />
              )}
              />
              {errors.admn_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.admn_no.message}</FormHelperText>}
              {errorList.admn_no && <FormHelperText sx={{ color: 'error.main' }}>{errorList.admn_no[0]}</FormHelperText>}
             </FormControl>

             {toggleResult === 'Please Register First to Proceed' ? <FormHelperText sx={{ color: 'error.main' , fontWeight: '600' , fontSize: '12px' , mb: 4 }}>User Not Yet Registered , Please Register First To Proceed</FormHelperText> :
              toggleResult === 'Library Dues Error' ? <FormHelperText sx={{ color: 'error.main' , fontWeight: '600' , fontSize: '12px' , mb: 4 }}>Dear Student it seems there is some
              outstanding books or dues against your name , you are requested to please contact Deputy
              Librarian at dlib@iitism.ac.in and get your dues cleared. Once it is done you
              will be able to register for the coming convocation.After the student paid/cleared their dues the
              same has to be communicated to Automation Center thru Library / Deputy Librarian so that we can
              mark them active again</FormHelperText> : toggleResult === 'Admission No. Exists' ?  auth.admnNoMsg !== null ?
              <>
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
                value = {auth.admnNoMsg.data.data.name}
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
              name = 'programme_name'
              control = {control}
              rules = {{required:true}}
              render = {({ field: { value,onChange,onBlur,ref }}) => (
                <TextField
                label='Programme Name'
                value={auth.admnNoMsg.data.data.programme_name}
                onBlur={onBlur}
                onChange={onChange}
                error={Boolean(errors.programme_name)}
                InputProps={{ readOnly: true }}
                placeholder=''
              />
              )}
              />
          {errors.programme_name && <FormHelperText sx={{ color: 'error.main' }}>{errors.programme_name.message}</FormHelperText>}
        </FormControl>
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

            <input type="hidden"  value={auth.admnNoMsg.data.data.name} {...register('student_name_new')}  />
            <input type="hidden" value={auth.admnNoMsg.data.data.programme_name} {...register('programme_name_new')} />
            <input type="hidden"  {...register('isStudentName')} />
            <input type="hidden" {...register('isProgrammeName')} />

        </>
         : '' : ''

             }



              {/* <FormControl fullWidth sx={{ mb: 4 }}>
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
            </FormControl> */}
          <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
          {toggleResult === 'Admission No. Exists' ? 'Login' : 'Submit' }
          </Button>
        </form>

        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
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
  )
}

LoginV1.guestGuard = true
LoginV1.getlayout = page => <UserLayout>{page}</UserLayout>

export default LoginV1
