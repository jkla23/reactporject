var mock=require('mockjs');
var lodash=require('lodash');
module.exports=function(){
    return{
        shop:lodash.times(100,function(n){
            return {
                id:n,
                name:mock.Random.cname(),
                img:mock.Random.image('200×200',mock.Random.color()),
                text:mock.Random.cparagraph(),
                stars:mock.mock({
                    'number|1-100':100
                })
            }
        })
    }
}