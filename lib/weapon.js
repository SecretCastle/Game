/**
 * 这是一个“武器”模型，主要作用是定义一个”武器“的构造函数
 */
define(function(){
    /**
     * [Weapon description]
     * @param Number a 初始X轴位置
     * @param Number b 初始X轴位置
     * @param String c 初始颜色
     */
    var Weapon = function (a,b,c) {
        'use strict';
        this.initX = a;
        this.initY = b;
        this.color = c;
    }
    /**
     * weapon的原型链
     * @type {Object}
     */
    Weapon.prototype = {
        width : 10,
        height: 10,
        points:[],
        createFn:function(cvs){
            cvs.fillStyle = this.color;
            for(var i = 0 ; i < 4 ; i++){
                if(i < 3){
                    cvs.fillRect(this.initX+i*this.width,this.initY,this.width,this.height);
                }
                if(i === 3){
                    cvs.fillRect(this.initX+this.width,this.initY+this.height,this.width,this.height);
                }
            }
            //cvs.restore();   //不还原canvas上一次保存前的状态
            cvs.save();
        },
        attack:function(){
            console.log("attack");
        },
        /**
         * move 和 clearRect 和 createRect 还需要优化
         * @param  {[type]} dir 方向keycode
         * @param  {[type]} gb  传递过来的全局变量
         * @return {[type]}     [description]
         */
        /***********************************************************************需要修改的地方*******************************************************************/
        move:function(dir,gb){
            switch (dir) {
                case 37:
                    this.clearRect(37,gb.ctx);
                    this.initX = this.initX - this.width;
                    this.createRect(37,gb.ctx);
                    break;
                case 38:
                    this.clearRect(38,gb.ctx);
                    this.initY = this.initY - this.height;
                    this.createRect(38,gb.ctx);
                    break;
                case 39:
                    this.clearRect(39,gb.ctx);
                    this.initX = this.initX + this.width;
                    this.createRect(39,gb.ctx);
                    break;
                case 40:
                    this.clearRect(40,gb.ctx);
                    this.initY = this.initY + this.height;
                    this.createRect(40,gb.ctx);
                    break;
            }
        },
        clearRect:function(dir,obj) {
            obj.restore();
            obj.save();
            switch (dir) {
                case 37:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.clearRect(this.initX,this.initY+i*this.height,this.width,this.height);
                        }
                        if(i === 3){
                            obj.clearRect(this.initX-this.width,this.initY+this.height,this.width,this.height);
                        }
                    }
                    break;
                case 38:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.clearRect(this.initX+i*this.width,this.initY,this.width,this.height);
                        }
                        if(i === 3){
                            obj.clearRect(this.initX-this.width,this.initY-this.height,this.width,this.height);
                        }
                    }
                    break;
                case 39:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.clearRect(this.initX,this.initY+i*this.height,this.width,this.height);
                        }
                        if(i === 3){
                            obj.clearRect(this.initX+this.width,this.initY+this.height,this.width,this.height);
                        }
                    }
                    break;
                case 40:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.clearRect(this.initX+i*this.width,this.initY,this.width,this.height);
                        }
                        if(i === 3){
                            obj.clearRect(this.initX+this.width,this.initY+this.height,this.width,this.height);
                        }
                    }
                    break;
            }
        },
        createRect:function(dir,obj){
            obj.restore();
            obj.save();
            switch (dir) {
                case 37:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.fillRect(this.initX,this.initY+i*this.height,this.width,this.height);
                        }
                        if(i === 3){
                            obj.fillRect(this.initX-this.width,this.initY+this.height,this.width,this.height);
                        }
                    }
                    break;
                case 38:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.fillRect(this.initX+i*this.width,this.initY,this.width,this.height);
                        }
                        if(i === 3){
                            obj.fillRect(this.initX + this.width,this.initY-this.height,this.width,this.height);
                        }
                    }
                    break;
                case 39:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.fillRect(this.initX,this.initY+i*this.height,this.width,this.height);
                        }
                        if(i === 3){
                            obj.fillRect(this.initX+this.width,this.initY+this.height,this.width,this.height);
                        }
                    }
                    break;
                case 40:
                    for(var i = 0 ; i < 4 ; i++){
                        if(i < 3){
                            obj.fillRect(this.initX+i*this.width,this.initY,this.width,this.height);
                        }
                        if(i === 3){
                            obj.fillRect(this.initX+this.width,this.initY+this.height,this.width,this.height);
                        }
                    }
                    break;
            }
        },
        /******************************************************************************************************************************************/
        destory:function(){
            console.log("destory");
        },
        kill:function(){
            console.log("kill");
        },
        scroe:function(){
            console.log("score");
        }
    }
    return Weapon;
});
