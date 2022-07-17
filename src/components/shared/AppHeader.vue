<script>
import ThemeSwitcher from '../ThemeSwitcher';
import HireMeModal from '../HireMeModal.vue';
import CreatePackage from '../CreatePackage.vue';
import feather from 'feather-icons';
import AppHeaderLinks from './AppHeaderLinks.vue';
import Button from '../reusable/Button.vue';

export default {
	components: {
		ThemeSwitcher,
		HireMeModal,
		AppHeaderLinks,
    CreatePackage,
		Button,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			packageModal: false,
		};
	},
  computed: {
   user() {
    return this.$store.state.user
    }
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
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
    showPackageModal() {
			if (this.packageModal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.packageModal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.packageModal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<!-- Header menu links and small screen hamburger menu -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos -->
				<div>
					<router-link to="/"
						><img
							v-if="theme === 'light'"
							src="@/assets/images/logo2.png"
							class="w-36"
							alt="Dark Logo"
						/>
						<img
							v-else
							src="@/assets/images/logo2.png"
							class="w-36"
							alt="Light Logo"
						/>
					</router-link>
				</div>

				<!-- Theme switcher small screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
				/>

				<!-- Small screen hamburger menu -->
				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="button"
						class="focus:outline-none"
						aria-label="Hamburger Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							></path>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Header links -->
			<AppHeaderLinks :showModal="showModal" :isOpen="isOpen" />

			<!-- Header right section buttons -->
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
				<!-- Login button -->
				<div v-if="!user" class="hidden md:block">
          <router-link to="/login">
            <Button
						title="Login"
						class="text-md font-general-medium bg-green-500 hover:bg-green-600 text-white shadow-sm rounded-md mx-5 px-5 py-2.5 duration-300"
						aria-label="Login Button"
					/>
          </router-link>
				</div>

        <!-- Become an Agent button -->
				<div v-if="!user" class="hidden md:block">
					<Button
						title="Become an Agent"
						class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						@click="showModal()"
						aria-label="Become an Agent Button"
					/>
				</div>
        <!-- Logout button -->
        <div v-if="user" class="hidden md:block">
					<Button
						title="Logout"
						class="text-md ml-5 font-general-medium bg-blue-500 hover:bg-blue-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						@click="$store.dispatch('logout')"
						aria-label="Logout"
					/>
				</div>
        <!-- Creata a new Package button -->
        <div v-if="user" class="hidden md:block">
					<Button
						title="Create Package"
						class="text-md ml-5 font-general-medium bg-orange-500 hover:bg-orange-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
						aria-label="Create Package"
						@click="showPackageModal()"
					/>
				</div>

				<!-- Theme switcher large screen -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/>
			</div>
		</div>

		<!-- Become an Agent modal -->
		<HireMeModal
			:showModal="showModal"
			:modal="modal"
			aria-modal="Become an Agent Modal"
		/>
    <CreatePackage
      :showPackageModal="showPackageModal"
			:packageModal="packageModal"
			aria-modal="Create a New Package"
    />
	</nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>
