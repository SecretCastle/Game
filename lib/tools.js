define(function(){
    'use strict';
    var tools = {
        /**
         * 随机生成障碍物对象参数函数，接受参数
         * @param  Number   num 创建的个数
         * @param  {[type]} min 创建的最小值
         * @param  {[type]} max 创建的最大值
         */
        random_obs_info:function(num,max){
            /**
             * 定义一个数组，里面包括位置对象
             * @type {Array}
             */
            var obj = [];
            var data = {};
            for (var i = 0 ; i < num ; i++){
                data = {};
                data.width = this.mathFn(max);
                data.height = this.mathFn(max);
                data.locationX = this.mathFn(max*5);
                data.locationY = this.mathFn(max*5);
                obj.push(data);
            }
            console.log(obj);
            return obj;
        },
        /**
         * 产生随机数的数学方法
         * @param  {[type]} param [description]
         * @return {[type]}       [description]
         */
        mathFn:function(a){
            var num;
            if(a > 500){
                a = 500
            }
            num = Math.round(Math.random()*a);
            return num;
        }
    }

    return tools;
});
