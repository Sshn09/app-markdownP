<template>
	<div 
		class="home-view-component"
	>
		<p>home-view-component</p>
        
            <li> 
                <router-link :to="'read/ByZnBSv4O'">
                Support HTML
            </router-link> 
            </li>

            <li> 
                <router-link :to="'read/ByK5SBvV_'">
                Support CSS
            </router-link> 
            </li>
            <li>     
                <router-link :to="'read/HycpVHDNd'">
                Support JS
            </router-link> 
             </li>
            <li> 
                <router-link :to="'read/rJx-CI_VF'">
                Support ES6
            </router-link>  
            </li>
            <li>     <router-link :to="'read/HJramvuEF'">
                Support TS
            </router-link>  
            </li>
            <li>     <router-link :to="'read/r1gvB-xAd'">
                Support Vue
            </router-link>  </li>
           
        
        <!-- 
            Créer une liste de liens :
            Support HTML : https://hackmd.io/@teach-supports/ByZnBSv4O/download
            Support CSS : https://hackmd.io/@teach-supports/ByK5SBvV_/download
            Support JS : https://hackmd.io/@teach-supports/HycpVHDNd/download
            Support ES6 : https://hackmd.io/@teach-supports/rJx-CI_VF/download
            Support TS : https://hackmd.io/@teach-supports/HJramvuEF/download
            Support Vue : https://hackmd.io/@teach-supports/r1gvB-xAd/download

            Capter le clic sur l'un des liens de HomeView pour rediriger l'utilisateur vers un composant SingleView.

            <router-link :to="'read/ByZnBSv4O'">
                Support HTML
            </router-link>
         -->
	</div>
</template>

<script>
	export default {
		name: 'HomeView',
		components: {  },

		data(){
			return {
                SingleView: undefined
				
			}
		},

		methods:{
           
        },
		created(){
            this.$store.subscribe((mutation) => {
                if(mutation.type === "SIGNLEVIEW"){
                    this.SingleView = this.$store.getters.SingleView
                }
            })
        },
		mounted(){}
	}
</script>
<style scoped>

</style>
