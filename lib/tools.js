define(function(){
    var tools = {
        /**
         * 随机生成障碍物对象参数函数，接受参数
         * @param  Number   num 创建的个数
         * @param  {[type]} min 创建的最小值
         * @param  {[type]} max 创建的最大值
         * @return Object       返回的是随机的对象组合
         */
        random_obs_info:function(num,min,max){
            

            var obj = [
                {
                    width : 1,
                    height : 5,
                    locationX : 10,
                    locationY : 10,
                    dir : "row"
                },
                {
                    width : 2,
                    height : 6,
                    locationX : 20,
                    locationY : 20,
                    dir : "column"
                },
                {
                    width : 3,
                    height : 7,
                    locationX : 30,
                    locationY : 30,
                    dir :  "row"
                }
            ];
            return obj;
        }
    }

    return tools;
});
