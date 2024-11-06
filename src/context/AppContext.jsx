import { useNavigate } from 'react-router-dom';
import { createContext, useEffect, useState } from "react"; 
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext()


const AppContextProvider = (props) => {
  
    const currencySymbol = 'XOF'

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)
    const navigate = useNavigate()

    
    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/doctor/list`) 
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message) 
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    } 

    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/profile`, {
                headers: {
                    token
                }
            })
            if (data.success) {
                setUserData(data.userData )
            } else {
                toast.error(data.message)
            }   
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }
    }


    const value = {
        doctors, getDoctorsData,
        currencySymbol,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData 
    }

    useEffect(() => {
        const checkTokenExpiration = () => {
            const tokenExpiration = localStorage.getItem('expiryDate');
            if (tokenExpiration) {
                const now = new Date().getTime();
                if (now > parseInt(tokenExpiration, 10)) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('expiryDate');
                    setToken(false);
                    setUserData(false)
                    toast.error('Session expired. Please log in again.');
                    navigate('/login');
                }
            }
        };
        checkTokenExpiration();
    }, [token, navigate]);
 

    useEffect(() => {
        getDoctorsData()
    }, []) 

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        } else {
            setUserData(false)
        }
    }, [token]) 



    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider