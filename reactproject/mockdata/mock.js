var Mock=require('mockjs');
var lodash=require('lodash');
module.exports=function(){
    return{
        shop:lodash.times(100,function(n){
            return {
                id:n,
                name:Mock.Random.ctitle(10,11),
                img:Mock.Random.image('400×400',Mock.Random.color()),
                text:Mock.Random.ctitle(10,12),
                stars:Mock.mock({
                    'number|1-100':100
                })
            }
        })
    }
}