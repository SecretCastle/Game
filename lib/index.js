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
    (function(GMS){
        var gb = {
            cvs:null,           //全局canvas对象
            ctx:null,           //全局ctx对象
            width:500,          //canvas宽度
            height:500,         //canvas高度
            obstacle_loc:{},    //障碍物位置对象数组
            obstacle_obj:[],    //障碍物对象数组
            obstacle_num:20,     //障碍物个数
            obstacle_max:100,    //障碍物设置的最大值
            weapon_obj:null,
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
         * 运用storage存储数据
         */
        if(!sessionStorage.getItem('location_arr')){
            /**
             * 本地存储浏览器打开时初始化的障碍物
             */
            sessionStorage.setItem('location_arr', JSON.stringify(Utils.random_obs_info(gb.obstacle_num,gb.obstacle_max)));
        }
        gb.obstacle_loc = JSON.parse(sessionStorage.getItem('location_arr'));
        var obs;
        for(var i in gb.obstacle_loc){
            obs = new Obstacle(gb.obstacle_loc[i]);
            obs.createLocation(gb.ctx);
        }

        /**
         * @return {[type]} [description]
         */
        function initTank(){
            gb.weapon_obj = new Weapon(10,10,"#0ff");
            gb.weapon_obj.createFn(gb.ctx);
        }

        initTank();


        /**
         * 控制
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         * 参数传入
         * a keycode
         * b 全局对象gb
         */
        GMS.onkeydown = function(e){
            switch (parseInt(e.keyCode)) {
                case 37:                    //left
                    gb.weapon_obj.move(37,gb);
                    break;
                case 38:                    //up
                    gb.weapon_obj.move(38,gb);
                    break;
                case 39:                    //right
                    gb.weapon_obj.move(39,gb);
                    break;
                case 40:                    //down
                    gb.weapon_obj.move(40,gb);
                    break;
                case 65:                    //"A"
                    gb.weapon_obj.attack();
                    break;
                default:
                    console.log("none");
            }
        }

        /**
         * 返回全局变量接口
         * @type {Object}
         */
        window.$_$ = {
            gb : gb
        };
    })(this);
});
