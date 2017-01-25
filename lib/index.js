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
        /**
         * createElement
         * @type {[type]}
         */
        var canvas = document.createElement('canvas');
        canvas.setAttribute("id","GS");
        document.getElementById('game').appendChild(canvas);

        var obstacleArr  = Utils.random_obs_info();
        
    })();
});
