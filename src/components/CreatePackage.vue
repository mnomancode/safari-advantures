<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import Upload from './Upload.vue';
// import ImagePicker from '../src/components/projects/ImagePicker.vue';

export default {
	props: ['showPackageModal', 'packageModal'],
	components: { Button,
	Upload
	},
	methods: {
      getPath (value) {
		this.create_package_form.imageUrl=value
		alert(value);
          console.log(value) // someValue
      }
	},
  setup () {
		const create_package_form = ref({});
		const store = useStore();
		const createPackage = (e) => {
			store.dispatch('createPackage', create_package_form.value);
      create_package_form.value = {};
      e.preventDefault()
		}
		return {
			create_package_form,
			createPackage
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
		<div v-show="packageModal" class="font-general-regular fixed inset-1 z-30  ">
			<!-- Modal body background as backdrop -->
			<div 
				v-show="packageModal"

				@click="showPackageModal()"
				
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-auto h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="packageModal"
						class="modal-wrapper flex items-center z-30"
					>
						<div
							class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class=" text-primary-dark dark:text-primary-light text-xxl"
								>
									Create your own Package by adding the information
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showPackageModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body  p-5 w-full h-full overflow-scroll">
								<form @submit.prevent="createPackage" class="max-w-xl text-left">
                  <div class="">
								<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="packageName"
                      v-model="create_package_form.packageName"
											name="packageName"
											type="text"
											required=""
											placeholder="Type the Package Name here"
											aria-label="Tour Name"
										/>
					</div><div class="md-3">
								<Upload @imagePath="getPath"></Upload>
									</div>

									<div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="duration"
                      v-model="create_package_form.duration"
											name="duration"
											type="text"
											required="true"
											placeholder="Duration"
											aria-label="Duration"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="price"
                      v-model="create_package_form.price"
											name="price"
											type="number"
											required=""
											placeholder="Price per head"
											aria-label="price"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="destination"
                      v-model="create_package_form.destination"
											name="destination"
											type="text"
											required=""
											placeholder="Destination"
											aria-label="Destination"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="agentnumber"
                      v-model="create_package_form.agentNumber"
											name="agentnumber"
											type="number"
											required=""
											placeholder="Type the agent Number"
											aria-label="Agent Number"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="bankAccount"
                      v-model="create_package_form.bankAccount"
											name="bankAccount"
											type="number"
											required="true"
											placeholder="Type the Bank Account"
											aria-label="Agent Number"
										/>
									</div>
                  <div class="mt-6">
										<textarea
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="description"
											name="description"
                      v-model="create_package_form.description"
											cols="14"
											rows="2"
											aria-label="Description"
											placeholder="Write your includings and services here."
										></textarea>

									
									</div>
									<!-- <div> -->
                              
                               <!-- <div>
                                 <p>Progress: {{uploadValue.toFixed()+"%"}}
                                 <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
                               </div>
                               <div v-if="imageData!=null">                     
                                   <img class="preview" :src="picture">
                                   <br>
                                 <button click="onUpload">Upload</button>
                               </div>    -->
                             <!-- </div> -->
                  <!-- <div class="uploader">
                    <Uploader  />
                  </div> -->
									<div class="submit-button sm:pb-1">
										<Button
											title="Creaete Package"
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
                      value="CreaetePackage"
											aria-label="creaetePackage"
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
