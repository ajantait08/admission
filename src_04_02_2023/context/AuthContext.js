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
  register: () => Promise.resolve()
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

  // ** Hooks
  const router = useRouter()
  useEffect(() => {
    // const initAuth = async (params, errorCallback) => {
    //   setIsInitialized(true)
    //   const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)
    //   if (storedToken) {
    //     setLoading(true)
    //     await axios
    //       .get(url + 'refresh', {
    //         headers: {
    //           Authorization: 'Bearer ' + storedToken
    //         }
    //       })
    //       .then(async response => {
    //         setLoading(false)
    //         //  console.log('ok')

    //         //   console.log(response.data.status)

    //         if (response.data.status === true) {
    //           //    console.log(response.data.data.user_menu_details)
    //           setUser({ ...response.data.data.user_details })
    //           setUserMenu({ ...response.data.data.user_menu_details })
    //         } else {
    //           localStorage.removeItem('userData')
    //           localStorage.removeItem('userMenu')
    //           localStorage.removeItem('refreshToken')
    //           localStorage.removeItem('accessToken')
    //           setUser(null)
    //           setUserMenu(null)
    //           setLoading(false)
    //           alert("Your Session Expire !");
    //           //    toast.error(response)
    //           NotificationManager.error("error", 'Error');
    //           const returnUrl = router.query.returnUrl
    //           const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
    //           router.replace(redirectURL)

    //         }

    //       })
    //       .catch(() => {
    //         NotificationManager.error("error", 'Error');
    //         const returnUrl = router.query.returnUrl
    //         const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
    //         router.replace(redirectURL)
    //         localStorage.removeItem('userData')
    //         localStorage.removeItem('userMenu')
    //         localStorage.removeItem('refreshToken')
    //         localStorage.removeItem('accessToken')
    //         setUser(null)
    //         setUserMenu(null)
    //         setLoading(false)
    //       })
    //   } else {

    //     setLoading(false)
    //   }
    // }
    // initAuth()
  }, [])

  const handleLogin = (params, errorCallback) => {

    // console.log(cryptr)
    console.log(params);
    console.log(errorCallback);
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

  const handleCheckAdmnNo = (params, errorCallback) => {

    // console.log(cryptr)
    console.log(params);
    console.log(errorCallback);
    axios
      .post(url + 'check_admnno',
      {headers: {'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
       params})
      .then(async response => {
        console.log(response.data.status)
        if (response.data.status === true) {
          console.log(response.data.message);
          //  console.log(response.data.data.token)
          // window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.data.token)
          // const returnUrl = router.query.returnUrl
          // setUser({ ...response.data.data.user_details })
          // setUserMenu({ ...response.data.data.user_menu_details })
          // //console.log(JSON.stringify(response.data.data.user_details))

          // await window.localStorage.setItem('userData', JSON.stringify(response.data.data.user_details))
          // await window.localStorage.setItem('userMenu', JSON.stringify(response.data.data.user_menu_details))
          // const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'
          // //console.log(redirectURL)
          // router.replace(redirectURL)
        } else {
          console.log(response.data.message)
          errorCallback(response.data.message)
        }
      }).catch(err => {
        console.log(err);
        // if (errorCallback) errorCallback(err)
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
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    checkAdmnNo: handleCheckAdmnNo
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
