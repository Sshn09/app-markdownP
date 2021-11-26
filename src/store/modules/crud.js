export default {
    state: {
        // Define states: each state is a subjet to subscribe
        markdownValue: undefined,
    },
    
    getters: {
        // Define getters: each states must have getters
        markdownValue: (state) => state.markdownValue,
    },

    mutations: {
        // Define mutations: each states must have mutation
        MARKDOWNVALUE( state, payload ){ state.markdownValue = payload.data },
    },

    actions: {
        // CRUD: read one
        readObject(context, data){
            fetch( `https://hackmd.io/@teach-supports/${data.id}/download`, {
                method: `GET`,
            })
            .then( response => response.text(response))
            .then(function (apiResponse) {

                context.commit('MARKDOWNVALUE', { data: apiResponse })
                
            });
           
        }
    }
}