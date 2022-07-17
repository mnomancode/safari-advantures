<script>

import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"; 
import ProjectSingleForAdmin from '../components/projects/ProjectSingleForAdmin.vue';



export default {
	components: { ProjectSingleForAdmin },

  data() {
    return {
       packages: [],
			projectsHeading: 'Tour Packages From Agents',
			selectedCategory: '',
			searchProject: '',
    };
},
created() {
    this.getPackages();
},

	methods: {
		async getPackages() {
      const tourCollection = (collection(db, 'tours'))
      let allTourCollection = await getDocs(tourCollection);
      allTourCollection.forEach((tour) => {

        this.packages.push(tour.data())
      });
      return this.packages;
    },
  
	},






}
  

  
</script>



<template>
	<!-- Projects grid -->
	<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<!-- <div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
				Search Trips by title or filter by category
			</h3>
			<div
				class="
					flex
					justify-between
					border-b border-primary-light
					dark:border-secondary-dark
					pb-3
					gap-2
				"
			>
				<div class="flex justify-between gap-2">
					<span
						class="
							hidden
							sm:block
							bg-primary-light
							dark:bg-ternary-dark
							p-2.5
							shadow-sm
							rounded-xl
							cursor-pointer
							"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium
						pl-3
						pr-1
						sm:px-4
						py-2
						border-1 border-gray-200
						dark:border-secondary-dark
						rounded-lg
						text-sm
						sm:text-md
						bg-secondary-light
						dark:bg-ternary-dark
						text-primary-dark
						dark:text-ternary-light
						"
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Packages"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @filter="selectedCategory = $event" />
			</div>
		</div> -->

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingleForAdmin
				v-for="tourPackage in packages"
				:key="tourPackage.agentEmail"
				:project="tourPackage"
			/>
      
		</div>
	</section>
</template>
