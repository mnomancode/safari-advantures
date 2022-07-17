<script>
import Button from '../reusable/Button.vue';
import BookingModal from '../BookingModal.vue';
import feather from 'feather-icons';

export default {
  components: {
    BookingModal,
    Button,
	},
	props: ['packages'],
  data() {
		return {
      isOpen: false,
			theme: '',
			bookingModal: false,
		};
	},

  created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
  methods: {
    updateTheme(theme) {
      this.theme = theme;
		},
    showBookingModal() {
			if (this.bookingModal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.bookingModal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.bookingModal = true;
			}
		},
  },
  updated() {
		feather.replace();
	},
};
</script>

<template>
	<div>
		<!-- Project heading and meta info -->
		<p
			class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
		>
			{{ packages.packageName }}
		
    <!-- <span style="float:right;"> -->
      <!-- <router-link
        to="/contact"
        style="border: 1px solid; padding: 10px;"
        class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
        aria-label="Contact"
        >Create Custom Plan</router-link
      > -->
      <Button
        style="float:right;"
        title="Book Now"
        class="text-md ml-5 font-general-medium bg-orange-500 hover:bg-orange-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
        aria-label="Booking Button"
        @click="showBookingModal()"
      />
    <!-- </span> -->
    </p>
		<div class="flex">
			<div class="flex items-center mr-10">
				<!-- <i
					data-feather="clock"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i> -->
				<!-- <span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>{{ tourPackage.uploadedDate }}</span
				> -->
			</div>
			<div class="flex items-center">
				<i
					data-feather="tag"
					class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
				></i>
				<span
					class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
					>{{ packages.price }} PKR</span
				>
			</div>
		</div>
    <BookingModal
      :showBookingModal="showBookingModal"
      :bookingModal="bookingModal"
      aria-modal="Book this Package"
    />
	</div>  
</template>
