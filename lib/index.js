/**
 * config requireJS
 * @type Weapon 、Bullet 、 Obstacle 、 Util
 *
 */
require.config({
　　　paths: {
　　　　　"Weapon": "weapon",
        "Bullet": "bullet",
        "Obstacle" : "obstacle",
        "Utils" : "tools"
　　　}
});

require(['Weapon',"Bullet","Obstacle","Utils"],function(Weapon,Bullet,Obstacle,Utils){
    /**
     * init function
     */
    (function(){
        var gb = {
            cvs:null,           //全局canvas对象
            ctx:null,           //全局ctx对象
            width:500,          //canvas宽度
            height:500,         //canvas高度
            obstacle_loc:[],    //障碍物位置对象数组
            obstacle_obj:[],    //障碍物对象数组
            obstacle_num:20,     //障碍物个数
            obstacle_max:100,    //障碍物设置的最大值
        };
        gb.cvs = document.getElementById('GS');
        gb.ctx = gb.cvs.getContext('2d');
        gb.cvs.width = gb.width;
        gb.cvs.height = gb.height;
        /**
         * 初始化场景
         */
        /*清除场景*/
        gb.ctx.clearRect(0,0,gb.width,gb.height);
        gb.ctx.fillStyle = '#f00';
        /*保存canvas状态*/
        gb.ctx.save();

        /**
         * 新建障碍物对象
         */
        gb.obstacle_loc = Utils.random_obs_info(gb.obstacle_num,gb.obstacle_max);
        var obs;
        for(var i in gb.obstacle_loc){
            obs = new Obstacle(gb.obstacle_loc[i]);
            obs.createLocation(gb.ctx);
        }

        /**
         * 返回全局变量接口
         * @type {Object}
         */
        window.$_$ = {
            gb : gb
        };
    })();
});
