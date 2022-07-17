<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default {
	props: ['showBookingModal', 'bookingModal'],
	components: { Button },
    methods: {
    sendEmail(e) {
		let timerInterval
      Swal.fire({
        title: 'Sending Mail',
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
      emailjs.sendForm('service_vdbl9zo', 'template_0zyza2b', this.$refs.form, '-9s72DHEOsMUR_G8C')
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
        
      e.preventDefault()
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
		<div v-show="bookingModal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="bookingModal"
				@click="showBookingModal()"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="bookingModal"
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
									Book this tour Package by adding the information below
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showBookingModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body p-5 w-full h-full">
								<form ref="form" @submit.prevent="sendEmail" class="max-w-xl m-4 text-left">
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="customerName"
											name="customer_name"
											type="text"
											required=""
											placeholder="Full Name"
											aria-label="Full Name"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="contactNumber"
											name="contact_number"
											type="number"
											required=""
											placeholder="Contact Number"
											aria-label="contact Number"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="customerEmail"
											name="email"
											type="email"
											required=""
											placeholder="Email"
											aria-label="Email"
										/>
									</div>
									<div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="numberOFPersons"
											name="number_of_persons"
											type="number"
											required="true"
											placeholder="Number oF Persons"
											aria-label="numberOFPersons"
										/>
									</div>
                  <div class="mt-6">
										<input
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="paymentId"
											name="payment_id"
											type="text"
											required=""
											placeholder="Payment Id"
											aria-label="Payment Id"
										/>
									</div>
                  <div class="mt-6">
										<textarea
											class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
											id="anyMessage"
											name="message"
											cols="14"
											rows="3"
											aria-label="Message"
											placeholder="Write your includings and services here."
										></textarea>
									</div>
                  <!-- <div class="uploader">
                    <Uploader  />
                  </div> -->
									<div class="submit-button sm:pb-1">
										<Button
											title="Book Now"
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
                      value="bookPackage"
											aria-label="Book Now"
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
