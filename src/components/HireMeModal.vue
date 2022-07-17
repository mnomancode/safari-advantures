<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	props: ['showModal', 'modal', 'categories'],
	components: { Button },
  setup () {
		const register_form = ref({});
		const store = useStore();
		const register = (e) => {
      store.dispatch('register', register_form.value);
      register_form.value = {};
      e.preventDefault()
		}
		return {
			register_form,
			register
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
	<transition name="fade">
		<div v-show="modal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="modal"
				@click="showModal()"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="modal"
						class="modal-wrapper flex items-center z-30"
					>
						<div
							class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class=" text-primary-dark dark:text-primary-light text-xl"
								>
									Signup to become an agent and post your own tour plans?
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<form @submit.prevent="register" class="max-w-xl m-4 text-left">
									<div class="mt-0">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="name"
                      v-model="register_form.displayName"
											name="displayName"
											type="text"
											required=""
											placeholder="Type your Name here"
											aria-label="Full Name"
										/>
									</div>
									<div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="email"
                      v-model="register_form.email"
											name="email"
											type="email"
											required="true"
											placeholder="Email"
											aria-label="Email"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="password"
                      v-model="register_form.password"
											name="password"
											type="password"
											required=""
											placeholder="Password"
											aria-label="Password"
										/>
									</div>
									<div class="submit-button sm:pb-1">
										<Button
											title="Sign Up"
											class="px-4
											sm:px-6
											py-2
                      m-10
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
											type="submit"
                      value="Register"
											aria-label="Sign me up"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 500px;
}
.submit-button{
  text-align-last: center;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
