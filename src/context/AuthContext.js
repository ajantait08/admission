// ** React Imports
import { createContext, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Axios
import axios from 'axios'

//import importGlobal from 'import-global'

// ** Config
import authConfig from 'src/configs/auth'
import toast from 'react-hot-toast'
import { NotificationManager } from 'react-notifications';
import { NotificationContainer } from 'react-notifications';
import MuiAlert from '@mui/material/Alert';
import swal from 'sweetalert';

axios.defaults.baseURL = 'http://localhost:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;


// ** Defaults

const defaultProvider = {
  user: null,
  userMenu: null,
  loading: true,
  setUser: () => null,
  setUserMenu: () => null,
  setLoading: () => Boolean,
  isInitialized: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  setIsInitialized: () => Boolean,
  register: () => Promise.resolve(),
  checkAdmnNo : () => Promise.resolve(),
  registerUser : () => Promise.resolve(),
  checkLoginAdmnNo : () => Promise.resolve(),
  loginUser : () => Promise.resolve(),
  admnNoMsg: null
}
const url = process.env.APIURL;
const AuthContext = createContext(defaultProvider)

//const cryptr = new Cryptr(process.env.CSecretKey);

const AuthProvider = ({ children }) => {
  // ** States
  const [user, setUser] = useState(defaultProvider.user)
  const [userMenu, setUserMenu] = useState(defaultProvider.userMenu)
  const [loading, setLoading] = useState(defaultProvider.loading)
  const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized)
  const [admnNoMsg,setAdmnNoMsg] = useState(defaultProvider.admnNoMsg);

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    const initAuth = async (params, errorCallback) => {
      console.log('entered useeffect');
      setIsInitialized(true)
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
      console.log('stored token '+storedToken);
      if (storedToken) {
        console.log('token is stored in localstoreage');
        setLoading(true)
        await axios
          .get(url + 'refresh', {
            headers: {
              Authorization: 'Bearer ' + storedToken
            }
          })
          .then(async response => {
            setLoading(false)
            //  console.log('ok')

            //   console.log(response.data.status)

            if (response.data.status === true) {
              //    console.log(response.data.data.user_menu_details)
              setUser({ ...response.data.data.user_details })
              setUserMenu({ ...response.data.data.user_menu_details })
            } else {
              localStorage.removeItem('userData')
              localStorage.removeItem('userMenu')
              localStorage.removeItem('refreshToken')
              localStorage.removeItem('accessToken')
              setUser(null)
              setUserMenu(null)
              setLoading(false)
              alert("Your Session Expire !");
              //    toast.error(response)
              NotificationManager.error("error", 'Error');
              const returnUrl = router.query.returnUrl
              const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
              router.replace(redirectURL)

            }

          })
          .catch(() => {
            NotificationManager.error("error", 'Error');
            const returnUrl = router.query.returnUrl
            const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
            router.replace(redirectURL)
            localStorage.removeItem('userData')
            localStorage.removeItem('userMenu')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('accessToken')
            setUser(null)
            setUserMenu(null)
            setLoading(false)
          })
      } else {
        console.log('Token store process completed');
        setLoading(false)
      }
    }
    initAuth()
  }, [router])

  const handleLogin = (params, errorCallback) => {

    // console.log(cryptr)
    // console.log(params);
    // console.log(errorCallback);
    axios
      .post(url + 'login_api', params)
      .then(async response => {
        // console.log(response.data.status)
        if (response.data.status === true) {
          //  console.log(response.data.data.token)
          //window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.data.token)
          const returnUrl = router.query.returnUrl
          // setUser({ ...response.data.data.user_details })
          // setUserMenu({ ...response.data.data.user_menu_details })
          //console.log(JSON.stringify(response.data.data.user_details))

          // await window.localStorage.setItem('userData', JSON.stringify(response.data.data.user_details))
          // await window.localStorage.setItem('userMenu', JSON.stringify(response.data.data.user_menu_details))
          const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          //console.log(redirectURL)
          router.replace(redirectURL)
        } else {
          //  console.log(response.data.message)
          errorCallback(response.data.message)
        }


      }).catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const handleLogout = () => {
    setUser(null)
    setUserMenu(null)
    setIsInitialized(false)
    window.localStorage.removeItem('userData')
    window.localStorage.removeItem('userMenu')
    window.localStorage.removeItem(authConfig.storageTokenKeyName)
    router.push('/login')
  }

  const handleCheckLoginAdmnNo = (params,Callback) => {
    axios
      .post(url + 'check_admnno_login',params)
      .then(async response => {
        //console.log(response);
        if (response.data.data.status === true) {
          setAdmnNoMsg({...response})
          Callback({'msg':response.data.message,'status': 1})
        } else {
          Callback({'msg':response.data.message,'status':2})
          setAdmnNoMsg(null)
        }
      }).catch(err => {
        //console.log(err);
        if (err) Callback({'msg':err , 'status':3})
        setAdmnNoMsg(null)
      })
  }

  const handleRegister = (params, errorCallback) => {
    axios
      .post(authConfig.registerEndpoint, params)
      .then(res => {
        if (res.data.error) {
          if (errorCallback) errorCallback(res.data.error)
        } else {
          handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch(err => (errorCallback ? errorCallback(err) : null))
  }

  const handleCheckAdmnNo = (params, Callback) => {
    //  console.log('Entered check Admn No.');
    //  console.log(params);
    // console.log(cryptr)
    axios
      .post(url + 'check_admnno',params)
      .then(async response => {
        console.log(response);
        if (response.data.data.status === true) {
          setAdmnNoMsg({...response})
          Callback({'msg':response.data.message,'status': 1})
        } else {
          Callback({'msg':response.data.message,'status':2})
          setAdmnNoMsg(null)
        }
      }).catch(err => {
        if (err) Callback({'msg':err , 'status':3})
        setAdmnNoMsg(err.response.data.message)
      })
  }

  const handleRegisterUser = (params, Callback) => {

    axios
      .post(url + 'register_user',
       params)
      .then(async response => {
        console.log(response.data.data.token);

          if(response.data.status === 'error')
          {
             setAdmnNoMsg();
             Callback({'msg':response.data.message,'status':3 });
          }
          else if (response.data.status === true) {
            localStorage.setItem('auth_token',response.data.data.token);
            localStorage.setItem('auth_email',response.data.data.email);
            swal({
              title: "Congratulations !",
              text: response.data.message,
              icon: "success",
              button: "OK",
            }).then(() => {
            router.push({
              pathname: '/pages/auth/login-v1'
          },'/pages/auth/login-v1')
        })
        } else {

        }
      }).catch(err => {
        //console.log(err);
        if (err) Callback({'msg':err , 'status':3})
        setAdmnNoMsg({
          data : {
            data : {
              date_of_birth : params.datanew.date_of_birth_new,
              student_name : params.datanew.student_name_new
            }
          },
        })
    })
  }

  const handleLoginUser = (params, errorCallback) => {

    axios
      .post(url + 'login_user', params)
      .then(async response => {
        // console.log(response.data.status)
        // if (response.data.status === true) {
        //   const returnUrl = router.query.returnUrl
        //   const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
        //   router.replace(redirectURL)
        // } else {

        //   errorCallback(response.data.message)
        // }


      }).catch(err => {
        if (errorCallback) errorCallback(err)
      })
  }

  const values = {
    user,
    loading,
    setUser,
    userMenu,
    setUserMenu,
    setLoading,
    isInitialized,
    setIsInitialized,
    setAdmnNoMsg,
    admnNoMsg,
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    checkAdmnNo: handleCheckAdmnNo,
    registerUser: handleRegisterUser,
    loginUser: handleLoginUser,
    checkLoginAdmnNo : handleCheckLoginAdmnNo
  }

  console.log(values);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
