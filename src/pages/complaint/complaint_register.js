import { forwardRef, useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'
import { useDropzone } from 'react-dropzone'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Papa from 'papaparse'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Icon from 'src/@core/components/icon'
import Radio from '@mui/material/Radio'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useRef } from 'react';
import UserLayout from 'src/layouts/UserLayout'
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

const CustomInput = forwardRef((props, ref) => {
    return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
  })

  const Img = styled('img')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(15.75)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down('sm')]: {
      width: 160
    }
  }))

  const HeadingTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(4)
    }
  }))


const ComplainDetails = () => {

    const defaultValues = {

    }

    let orderNumberRef = useRef(null);
    let confirmOrderNumberRef = useRef(null);
    let emailRef = useRef(null);
    let confirmEmailRef = useRef(null);

    // ** States

  const [value, setValue] = useState('order_no')
  const [date, setDate] = useState(null)
  const [language, setLanguage] = useState([])
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [fileparsed,setFileParsed] = useState('')
  const [userInput, setUserInput] = useState('yes')
  const [formData, setFormData] = useState(defaultValues)
  const [imgSrc, setImgSrc] = useState('')
  const [csvData,setCsvData] = useState('')
  const [errorEnquiry, setErrorEnquiry] = useState('')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)
  const [helperText, setHelperText] = useState('Please Send the Correct Option to Enquire !')
  const [enquiryOption, setEnquiryOption] = useState('')
  const [errorList, setErrorList] = useState([]);

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('')
    setFileParsed('')
    setCsvData('')
  }

  const ImgStyled = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    borderRadius: 4,
    marginRight: theme.spacing(5)
  }))

  const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))

  const ResetButtonStyled = styled(Button)(({ theme }) => ({
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      textAlign: 'center',
      marginTop: theme.spacing(4)
    }
  }))

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(1).required(),
    recaptchaValue: yup.string().required(),
  });

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleTabChange = (event,newValue) => {
    setValue(newValue)
  }

  const handleSubmitEnquiry = event => {
    event.preventDefault()
    if (value === 'best') {
      setError(false)
      setHelperText('You got it!')
    } else if (value === 'worst') {
      setError(true)
      setHelperText('Sorry, wrong answer!')
    } else {
      setError(true)
      setHelperText('Please select an option.')
    }
  }

  return (
    <>
     <Grid container spacing={5}>
     <Grid item xs={12} sm={2}>
     </Grid>
     <Grid item xs={12} sm={8}>
     <Card>
        <CardHeader
           title = "Register Complaint"
           sx={{bgcolor: '#22a0b5'}}
           action={
                  <IconButton
                            edge='start'
                            onMouseDown={e => e.preventDefault()}
                            color='inherit'
                          >
                            <Icon icon='mdi:register-outline' fontSize={20} />
                          </IconButton>
           }
        />
        <CardContent>

        <Card>
        <CardHeader
           title = "Register Complaint"
           sx={{bgcolor: '#22a0b5'}}
           action={
                  <IconButton
                            edge='start'
                            onMouseDown={e => e.preventDefault()}
                            color='inherit'
                          >
                            <Icon icon='mdi:register-outline' fontSize={20} />
                          </IconButton>
           }
        />
        <CardContent>

        <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>

        <form>

{/* <form noValidate autoComplete='off' onSubmit={handleSubmit}> */}
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
          name = 'order_no'
          control = {control}
          rules = {{required:true}}
          render = {({ field: { value,onChange,onBlur,ref }}) => (
            <TextField
            label='Order Number'
            value={value}
            onBlur={onBlur}
            inputRef={orderNumberRef}
            onChange={onChange}
            error={Boolean(errors.order_no)}
            readOnly
            placeholder='Enter Order Number'
          />
          )}
          />
        {errors.order_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.order_no.message}</FormHelperText>}
        {errorList.order_no && <FormHelperText sx={{ color: 'error.main' }}>{errorList.order_no[0]}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
          name = 'confirm_order_no'
          control = {control}
          rules = {{required:true}}
          render = {({ field: { value,onChange,onBlur }}) => (
            <TextField
            label='Confirm Order Number'
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={confirmOrderNumberRef}
            error={Boolean(errors.confirm_order_no)}
            readOnly
            placeholder='Confirm Order Number'
          />
          )}
          />
        {errors.confirm_order_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.confirm_order_no.message}</FormHelperText>}
        </FormControl>
        </form>
        </Grid>
        <Grid item xs={12} sm={6}>
        <form>

{/* <form noValidate autoComplete='off' onSubmit={handleSubmit}> */}
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
          name = 'order_no'
          control = {control}
          rules = {{required:true}}
          render = {({ field: { value,onChange,onBlur,ref }}) => (
            <TextField
            label='Order Number'
            value={value}
            onBlur={onBlur}
            inputRef={orderNumberRef}
            onChange={onChange}
            error={Boolean(errors.order_no)}
            readOnly
            placeholder='Enter Order Number'
          />
          )}
          />
        {errors.order_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.order_no.message}</FormHelperText>}
        {errorList.order_no && <FormHelperText sx={{ color: 'error.main' }}>{errorList.order_no[0]}</FormHelperText>}
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <Controller
          name = 'confirm_order_no'
          control = {control}
          rules = {{required:true}}
          render = {({ field: { value,onChange,onBlur }}) => (
            <TextField
            label='Confirm Order Number'
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            inputRef={confirmOrderNumberRef}
            error={Boolean(errors.confirm_order_no)}
            readOnly
            placeholder='Confirm Order Number'
          />
          )}
          />
        {errors.confirm_order_no && <FormHelperText sx={{ color: 'error.main' }}>{errors.confirm_order_no.message}</FormHelperText>}
        </FormControl>
        </form>
        </Grid>
        </Grid>

        </CardContent>

      </Card>

    </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} sm={2}>
     </Grid>
    </Grid>
     </>
)
}

ComplainDetails.guestGuard = true
ComplainDetails.getlayout = page => <UserLayout>{page}</UserLayout>

export default ComplainDetails