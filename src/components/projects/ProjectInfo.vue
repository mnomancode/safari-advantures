<script>
import feather from 'feather-icons';

export default {
	props: ['packages'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div>
			<img 
				:src="packages.imageUrl"
				:alt="packages.title"
				class="rounded-t-xl border-none h-40 w-full"
			/>
		</div>
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2">
				<b>	Agent information </b>
        </p>
				<ul class="leading-loose">
					<li class="font-general-medium text-ternary-dark dark:text-ternary-light">
            <span>Name: {{ packages.agentName }} </span>
          </li>
          <li class="font-general-regular text-ternary-dark dark:text-ternary-light">
            <span>Contact Number: {{ packages.agentNumber }}</span>
          </li>
          <li class="font-general-regular text-ternary-dark dark:text-ternary-light">
            <span>Email: {{ packages.agentEmail }}</span>
          </li>
          <li v-if="packages.bankAccount" class="font-general-medium text-ternary-dark dark:text-ternary-light">
            <span>Bank Acoount {{ packages.bankAccount }} </span>
          </li>
          <li class="font-general-regular text-ternary-dark dark:text-ternary-light">
            <a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 no-underline" target="blank"
             :href=" `https://api.whatsapp.com/send?phone=${packages.agentNumber}&text=Hello this is the starting message`">
             <span style="display:inline-block; align-items:stretch; " > <svg style="color: rgb(12, 125, 31);" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" fill="#0c7d1f"></path> </svg></span>  Whatsapp Chat
            </a>




          </li>
				</ul>
			</div>

			<!-- Single project objectives -->
			<!-- <div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.objectivesHeading }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.objectivesDetails }}
				</p>
			</div> -->

			<!-- Single project technologies -->
			<!-- <div class="mb-7">
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.technologies[0].title }}
				</p>
				<p
					class="font-general-regular text-primary-dark dark:text-ternary-light"
				>
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div> -->

			<!-- Single project social sharing -->
			<!-- <div>
				<p
					class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
					></a>
				</div>
			</div> -->
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				Package Details:
			</p>
			<p class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				<span>Destination: {{ packages.destination }}</span>
        <span style="float:right;" >Duration: {{ packages.duration }} </span>
			</p>
      <p class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
				{{ packages.description }}
			</p>
		</div>
	</div>
</template>
