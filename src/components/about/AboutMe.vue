<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 2,
					bio:
					"Welcome to website of SAFARI ADVENTURES Services, a Tour-operator and travel agent in Pakistan. We are here to operate Tours to Pakistan which include culture tours, adventure tours and trekking in Pakistan, for foreigners and Pakistanis. Pakistan is a destination for everyone but is very little visited by the world due to bad image from the media. You can rely on SAFARI ADVENTURES Services in Pakistan to show you this fabulous country. Ours is an owner managed company that takes every care to make your stay in Pakistan comfortable and hassle free.Our main aim is to provide quality service to you at a very reasonable cost. We promote Pakistan as a safe and the most enjoyable secrets of Asia. Our tours are specially designed to give comfort and a variety of things to do. We take special care of our clients during their Travel in Pakistan, by providing them a very personal touch. SAFARI ADVENTURES invites you to come to our fabulous country where men and the mountains meat. We promise you the most pleasant tour of your life. Our hard work in designing and operating your tour wil please you.",
				},
				{
					id: 1,
					bio:
						'We are a team of enthusiastic young professionals who understand the ethos of tourism trade and ready to render high quality services to our valued clients through a range of pleasing, adventurous, cultural & heritage tours.organizing tours & treks is not only our profession but a thrilling passion as well.our personalized tour plans are designed for relaxation, to rejuvenate your energy and to send your precious time with your loved ones in a remember-able way.',
				},{
					id: 3,
					bio:
						'We are a team of enthusiastic young professionals who understand the ethos of tourism trade and ready to render high quality services to our valued clients through a range of pleasing, adventurous, cultural',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/logo2.png"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>

		
		
		</div>
		
	</div>
</template>
