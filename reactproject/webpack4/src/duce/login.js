var initalState={
    login:false
}
function login(state=initalState,action){
    switch (action.type){
        case "on":
            return Object.assign({},state,{login:true});
        case "off":
            return Object.assign({},state,{login:false});
        default:
            return state;
    }
}
export default login;