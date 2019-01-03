import _ from 'lodash'
function carts(state={cartlist:[]},action){
    switch (action.type){
        case "getcarts":
            var pos= _.findIndex(state,{id:action.payload.id})
            
            if(pos!=-1){
                state[pos].quantity=state[pos].quantity+1;
                return state; 
            }else{
                var product=Object.assign({},action.payload,{quantity:1})
                return [...state,product]; 
            };
        case "addcart":
            var pos= _.findIndex(state,{id:action.payload.id}) 
            state[pos].quantity=state[pos].quantity + 1;
            return state; 
        case "delcart":
            var pos= _.findIndex(state,{id:action.payload.id}) 
            if(state[pos].quantity>=1){
               state[pos].quantity=state[pos].quantity - 1; 
               return state; 
            }else{
               state[pos].quantity=0;
               return state; 
            }
        default:
            return state;
    }
}
export default carts;