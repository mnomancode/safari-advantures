import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '../firebase'
import Swal from 'sweetalert2'
// import { doc, addDoc } from "firebase/firestore"; 
import { collection, doc, setDoc } from "firebase/firestore"; 



import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  signOut 
} from 'firebase/auth'

export default createStore({
  state: {
    user: null,
    id:null,
    tours: null
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
    },
    SET_ID (state, id) {
      state.user = id
    },
    CLEAR_USER (state) {
      state.user = null
    }

  },
  actions: {
    
    async login ({ commit }, details) {
      const { email, password } = details
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
     


      

       

      try {
        await signInWithEmailAndPassword(auth, email, password)
        if(auth.currentUser.email=="safariadventures.app@gmail.com"){
          router.push('/admin')
          return
        }
        


        if(auth.currentUser.emailVerified){ 
          commit('SET_USER', auth.currentUser)
          Swal.fire({
            title: 'Finaly ',
            text: 'Logged in Successfully Welcome to the Safari Adventures!!!',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          // alert('Logged in Successfully Welcome to the Safari Adventures!!!')
          router.push('/')
         return
         }else{
          await  sendEmailVerification(auth.currentUser)
          Toast.fire({
            icon: 'error',
            title: 'Please Verify Email Firste'
          })

          // alert('Please Verify Email First')
            
         }

        
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            Toast.fire({
              icon: 'error',
              title: 'User not found'
            })
            
            // alert("User not found")
            break
          case 'auth/wrong-password':
            Toast.fire({
              icon: 'error',
              title: 'Wrong password'
            })
            
            // alert("Wrong password")
            break
          default:
            alert(error)
            // alert("Something went wrong")
        }

        return
      }

      
    },

    async register ({ commit}, details) {
       const { email, password, displayName } = details
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      await  sendEmailVerification(auth.currentUser)

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      
      
      Toast.fire({
        icon: 'info',
        title: 'Please check your Email and Verify First'
      })


      // alert('Please check your Email and Verify First')

        updateProfile(auth.currentUser, {displayName})
        await signOut(auth)
        

      } catch (error) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
       
        // alert(error);
        switch(error.code) {
          case 'auth/email-already-in-use':



            
          Toast.fire({
              icon: 'error',
              title: 'Email Already in use'
            })
            // alert("Email already in use")
            break
          case 'auth/invalid-email':
            Toast.fire({
              icon: 'error',
              title: 'Invalid email'
            })
           
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")  
            break
          case 'auth/weak-password':
            Toast.fire({
              icon: 'warning',
              title: 'Invalid email'
            })
            
           
            break
          default:
            Toast.fire({
              icon: 'error',
              title: 'Something went wrong'
            })
            // alert("")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      // alert('You are successfully registered as an Agent!!!')
      router.push('/')
    },

    async createPackage ({ commit}, details) {
      var agentName = '';
      var agentEmail = '';
      if(this.state.user){
       agentName = this.state.user.displayName;
       agentEmail = this.state.user.email;
      }
      const {packageName, bankAccount, price, description, duration,destination,agentNumber,imageUrl} = details

      let timerInterval
      Swal.fire({
        title: 'Creating Package',
        html: 'Please Wait',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      
      try {

        const newTourReference = doc(collection(db, "tours"));
        await setDoc(newTourReference, {
          
            packageName: packageName,
            price: price,
            description: description,
            duration: duration,
            destination: destination,
            agentName: agentName,
            agentNumber:agentNumber,
            agentEmail:agentEmail,
            uniqueKey:newTourReference.id,
            bankAccount:bankAccount,
            imageUrl : imageUrl

        }).then((sp)=>{
          console.log(sp)
location.reload();


        });




        Swal.fire({
          title: 'New Tour Package has been created!!!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

       
        // alert('New Tour Package has been created!!!')


        // alert(newTourReference.id)
        commit('SET_ID', newTourReference.id)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      router.push('/')
    },


       

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')
    },

    // fetchUser ({ commit }) {
    //   auth.onAuthStateChanged(async user => {
    //     if (user === null) {
    //       commit('CLEAR_USER')
    //     } else {
    //       commit('SET_USER', user)

    //       if (router.isReady() && router.currentRoute.value.path === '/login') {
    //         router.push('/')
    //       }
    //     }
    //   })
    // }
    
  }
})


