function reducer(state={counter:2,list:{}},action){
    switch (action.type){
        case "add":
            return Object.assign({},state,{counter:state.counter + 1});
        case "getlist":
            return Object.assign({},state,{list:action.payload});
        default:
            return state;
    }
}
export default reducer;