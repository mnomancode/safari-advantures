<script>
export default {
	props: ['client'],
};
</script>

<template>
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="w-64 py-0 px-0 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg h-40 mb-8 cursor-pointer dark:bg-secondary-light"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
