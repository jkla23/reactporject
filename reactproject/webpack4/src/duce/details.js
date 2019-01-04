function det(state={details:{}},action){
    switch (action.type){
        case "getcart":
            return Object.assign({},state,{details:action.payload});
        default:
            return state;
    }
}
export default det;