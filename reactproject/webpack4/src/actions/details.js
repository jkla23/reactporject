import axios from 'axios';
export const getcart=(data)=>{
    return{
        type:'getcart',
        payload:data
    }
}
export function cartlist(params={id:1}){
    return dispatch=>{
        const url=`http://localhost:3000/shop/`;
        var pro={}
        axios({
            url:url,
            method:'get'
        }).then(res=>{
           for(let i=0;i<res.data.length;i++){
               if(params.id==res.data[i].id){
                  pro=res.data[i]
               }
           }
           dispatch(getcart(pro))   
        })
    }
}