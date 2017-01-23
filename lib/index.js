/**
 * config requireJS
 * @type {Object}
 */
require.config({
　　　paths: {
　　　　　"Weapon": "weapon",
        "Bullet": "bullet"
　　　}
});
require(['Weapon',"Bullet"],function(Weapon,Bullet){

    var w1 = new Weapon(0,0,"#fff");
    w1.attack();
});
