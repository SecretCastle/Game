/**
 * 障碍物构造函数
 */
define(function(){
    /**
     * 创建构造函数
     * @param Object  新建对象时传递过来的对象数组
     */
    var Obstacle = function(obj){
        /**
         * width : 长度
         * height : 宽度
         * locationX : 起始X轴位置
         * locationY : 起始Y轴位置
         * dir : 方向 row 纵向 , column 横行
         */
        'use strict';
        this.width  = obj.width;
        this.height = obj.height;
        this.locationX = obj.locationX;
        this.locationY = obj.locationY;
        this.dir = obj.dir;
    };
    return Obstacle;
});
