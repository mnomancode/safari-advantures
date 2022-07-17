<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Popular Destinations',
			clients: [
				{
					id: 1,
					title: 'Amazon',
					img: require('@/assets/images/brands/amazon_color.png'),
				},
				{
					id: 2,
					title: 'Sony',
					img: require('@/assets/images/brands/fahadhanifff.jpg'),
				},
				{
					id: 3,
					title: 'hello_skardu1',
					img: require('@/assets/images/brands/hello_skardu1.jpg'),
				},
				{
					id: 4,
					title: 'jamal-mahfud',
					img: require('@/assets/images/brands/jamal-mahfudz.jpg'),
				},
		
				{
					id: 5,
					title: 'pexels',
					img: require('@/assets/images/brands/pexels1.jpg'),
				},
				{
					id: 6,
					title: 'SAMSUNG',
					img: require('@/assets/images/brands/pexels.jpg'),

				},
				{
					id: 7,
					title: 'CANON',
					img: require('@/assets/images/brands/fahadhanifff.jpg'),


				},
				{
					id: 7,
					title: 'PUMA',
					img: require('@/assets/images/brands/amazon_color.png'),

				},
			],
		};
	},
};
</script>

<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>
