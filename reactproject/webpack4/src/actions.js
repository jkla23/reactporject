export const add=()=>{
    return{
        type:'add'
    }
}
export const getlist=(data)=>{
    return{
        type:'getlist',
        payload:data
    }
}
export function fetchlist(){
    return dispatch=>{
        
        const url='http://localhost:3000/shop';
        return fetch(url).
        then(res=>{ return res.json()}).then(data=>{
            dispatch(getlist(data))
        })
    }
}