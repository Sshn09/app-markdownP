<template>
	<div 
		class="single-view-component"
	>
		<p>single-view-component</p>
        <vue-marked v-if="markdownValue">{{markdownValue}}</vue-marked>
		
	</div>
</template>

<script>
	import VueMarked from 'vue-marked';
	
	export default {
		name: 'SingleView',
		components: {  VueMarked, },

		data(){
			return {
				singleId: this.$route.params.id,
				markdownValue: undefined,
			}
		},

		methods:{
            fetchData: function(){
                // Dispatch readObjects store action
                this.$store.dispatch('readObject',  { id: this.singleId })
            }
        },
		
		created(){
          // Subscribe to store mutations
            this.$store.subscribe((mutations) => {
                // Check mutation type
                if( mutations.type === "MARKDOWNVALUE" ){ 
                    // Update local users value from $store getters
                    this.markdownValue = this.$store.getters.markdownValue;
					console.log(this.markdownValue);
                } 
                
            })

		},
		
		mounted(){
			this.fetchData();	
		}
	}
</script>
<style scoped>

</style>