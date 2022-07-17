<script>
export default {
	props: ['project'],
};
</script>

<template>
	<router-link
    :to="`/projects/${project.uniqueKey}`"
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
		<div>
			<img 
				:src="project.imageUrl"
				:alt="project.title"
				class="rounded-t-xl border-none h-40 w-full"
			/>
		</div>
		<div class="text-center px-4 py-6">
			<p
				class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
			>
				{{ project.packageName }}
			</p>
			<span
				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
				>{{ project.destination }}</span
			><br>
      <span
				class="font-general-medium text-sm text-ternary-dark dark:text-ternary-light"
				>({{ project.duration }})</span
			>
		</div>
	</router-link>
</template>

<style lang="scss" scoped></style>
