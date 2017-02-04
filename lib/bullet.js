define(function(){
    /**
     * [Bullet description]
     * @param Number a 炮筒的X轴坐标
     * @param Number b 炮筒的Y轴最婊
     */
    var Bullet = function(a,b){
        'use strict';
        this.X = a;
        this.Y = b;
    };
    /**
     * [move description]
     * @param  String c 移动方向
     * @return {[type]}   [description]
     */
    Bullet.prototype = {
        /**
         * 画子弹
         * @param  {[type]} cvs [description]
         * @return {[type]}     [description]
         */
        create:function(cvs){
            cvs.fillStyle = "#f00";
            cvs.fillRect(this.X,this.Y,5,5);
            cvs.restore();
            cvs.save();
        },
        move:function(){
            console.log("move");
        },
        hit:function(){
            console.log("hit");
        }
    }
    return Bullet;
});
