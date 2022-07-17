<script>

import { db } from "../../firebase";
// import { getDocs,collection } from "firebase/firestore";
// import {  query, where } from "firebase/firestore";
// import { collection } from "firebase/firestore";
import {  doc, deleteDoc } from "firebase/firestore"; 
import Swal from "sweetalert2"; 

export default {
	props: ['project'],


	methods: {
  async deleteTour(id) {

	const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
		Toast.fire({
              icon: 'warning',
              title: 'Deleting Tour'
            })

	

	

        

	// const tourCollection = (collection(db, 'tours'))
	// let allTourCollection = await getDocs(tourCollection);
		deleteDoc(doc(db, "tours", id)).then((sd)=>
		{	
			console.log(sd)
location.reload();


		});
	// allTourCollection.forEach((tour) => {
	// 	if (tour['uniqueKey'] == id) {
		
	// 	alert('delition Successfull')
		// }
	// }
	// );


	// const q = query(tourCollection, where("uniqueKey", "==", id));
	
	// let tour = await getDocs(q);
	// // tour = tour[0];
	// alert(tour.docs[0]);


	// await deleteDoc(query(collection(db, 'tours'), where("uniqueKey", "==", id)));
	
	// alert("Tour Deleted");
  }
}
};
</script>

<template>
	<div
		class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
		aria-label="Single Project"
	>
	<div class="flex justify-end ...">
		
 <button @click="deleteTour(`${project.uniqueKey}`)" class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Delete</button>
  
</div>

		<div>
			<!-- <img
				:src="project.img"
				:alt="project.title"
				class="rounded-t-xl border-none"
			/> -->
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
				>({{ project.duration }})</span>   
	

				

			
		</div>
	</div>
</template>

<!-- <style lang="scss" scoped></style> -->
