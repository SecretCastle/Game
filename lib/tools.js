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
        },
        
        /**
         * 复制out对象的原型链进入in对象的原型链里
         * @param  {[type]} ins  得到的对象
         * @param  {[type]} outs 复制的对象
         * @return {[type]}     [description]
         */
        mix:function(ins,outs){
            console.log(ins,outs);
            var arr1 = Object.getOwnPropertyDescriptors(outs);
            console.log(arr1);
        }
    }

    return tools;
});
