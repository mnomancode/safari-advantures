<script>
import feather from 'feather-icons';
import Button from '../components/reusable/Button.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
	props: ['showModal', 'modal'],
	components: { Button },
  setup () {
		const login_form = ref({});
		const store = useStore();
		const login = () => {
			store.dispatch('login', login_form.value);
		}

		return {
			login_form,
			login,
		}
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<!-- component -->
<header class=" bg-cover border-t-2 border-blue-600 h-full" style="background-image: url('https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg');">
        <div class="content px-8 py-2">
            <div class="body mt-20 mx-8">
                <div class="md:flex items-center justify-between">
                    <div class="w-full md:w-1/2 mr-auto" style="text-shadow: 0 20px 50px hsla(0,0%,0%,8);">
                        <h1 class="text-4xl font-bold text-white tracking-wide">Safari Adventures</h1>
                        <h2 class=" text-2xl font-bold text-white tracking-wide">Welcome <span class="text-gray-800"> Aboard</span></h2>
                        <p class="text-primary-dark dark:text-primary-light text-xl">
                            Login to your account and create your custom tour packages.
                        </p>
                    </div>
                    <div class="w-full md:max-w-md mt-6">
                        <div class="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                            <form @submit.prevent="login">
                                <div class="flex items-center justify-center">
                                    <h2 class="text-2xl font-bold tracking-wide">
                                        Welcome back
                                    </h2> 
                                </div>
                                <h2 class="text-xl text-center font-semibold text-gray-800 mb-2">
                                    Sign In
                                </h2>
                                <input type="text" 
                                  v-model="login_form.email" 
                                  class="w-full mb-5 px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" placeholder="Email Address">
                                <input type="password" 
                                  v-model="login_form.password" 
                                  class="w-full mb-5 px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light" placeholder="Password">
                                <div class="flex login-button justify-between">
                                    <Button type="submit"
                                      value="Login"
                                      class="text-md font-general-large bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300" title = "Login">
                                      Log In</Button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.login-button{
  justify-content: center ;
}
</style>
