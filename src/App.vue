<template>
    <div id="app">
        <main>
            <h1><router-link to="/">MARKDOWN</router-link></h1>

            <!-- Use router-view directive to display route views -->
            <router-view :key="$route.fullPath"/>
        </main>
    </div>
</template>

<script>
    /* 
    Define component
    */
        export default {
            name: 'App',
            components:{

            },
            
            data(){
                return{}
            },
            methods: {},
            created(){},
            mounted(){}
        }
    //
</script>