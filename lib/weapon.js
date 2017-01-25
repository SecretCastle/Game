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
        width : 3,
        height: 4,
        attack:function(){
            console.log("attack");
        },
        move:function(){
            console.log("move");
        },
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
