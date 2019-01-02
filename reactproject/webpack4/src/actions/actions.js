import axios from 'axios';
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
export function fetchlist(params={page:1,limit:5}){
    return dispatch=>{
        
        const url=`http://localhost:3000/shop?_page=${params.page}&_limit=${params.limit}`;
        axios({
            url:url,
            method:'get'
        }).then(res=>{
            var jsondata={
                total:+res.headers['x-total-count'],
                rows:res.data
            }
            dispatch(getlist(jsondata))
        })
    }
}