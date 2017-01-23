define(function(){
    /**
     * [Bullet description]
     * @param Number a 炮筒的X轴坐标
     * @param Number b 炮筒的Y轴最婊
     */
    var Bullet = function(a,b){
        this.X = 0;
        this.Y = 0;
    };
    /**
     * [move description]
     * @param  String c 移动方向
     * @return {[type]}   [description]
     */
    Bullet.prototype = {
        move = function(c){
            console.log(c);
        }
    }
    return Bullet;
});
