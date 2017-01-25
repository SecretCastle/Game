/**
 * config requireJS
 * @type {Object}
 */
require.config({
　　　paths: {
　　　　　"Weapon": "weapon",
        "Bullet": "bullet",
        "Obstacle" : "obstacle"
　　　}
});

require(['Weapon',"Bullet","Obstacle"],function(Weapon,Bullet,Obstacle){
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



    })();
});
