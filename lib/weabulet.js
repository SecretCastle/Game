define(['Weapon','Bullet','Utils'],function(Weapon,Bullet,Utils){
    var WeaBulet = function(){
        Weapon.call(this);
    };

    
    //WeaBulet.prototype.constructor = WeaBulet;
    //WeaBulet.prototype = Utils.mix(WeaBulet.prototype,Bullet.prototype);

    return WeaBulet;
});
