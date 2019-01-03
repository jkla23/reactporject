export const getcarts=(data)=>{
    return{
        type:'getcarts',
        payload:data
    }
}
export const addcart=(data)=>{
    return {
        type:"addcart",
        payload:data
    }
}
export const delcart=(data)=>{
    return {
        type:"delcart",
        payload:data
    }
}
