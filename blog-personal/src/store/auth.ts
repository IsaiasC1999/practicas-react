import { create } from 'zustand'
import { UserLogin } from '../Types/types.d'
import { LoginUser } from '../services/servicesAuth.js'
import { persist } from 'zustand/middleware'


interface State {
    logged: boolean
    token: string
    errorLoggeoVisible: boolean
    loggin: (dataLogin: UserLogin) => void
    resetState: () => void
}


export const useAuthStore = create<State>()(persist((set) => {
    return {
        logged: false,
        token: "",
        errorLoggeoVisible: false,

        loggin: (datos: UserLogin) => {
            LoginUser(datos.userName, datos.password).then(res => {
                // console.log(res.data.token);               
                set({ token: res.data.token })
                set({ logged: true })
                set({errorLoggeoVisible: false})
            }).catch(error => {

                set({errorLoggeoVisible:true})
                console.log("errorlogeo");
                set({logged:false})

            })
        },
        resetState : ()=> {
            set({logged:false})
            set({errorLoggeoVisible: false})
        }
        
    }
},{    
    name : 'auth'
}))


