function Device(){
  this.init();
}
Device.prototype = {
    init: function(){
        var device = this;
        if (window.DeviceMotionEvent) {
          console.log("DeviceMotionEvent supported");
          window.addEventListener('devicemotion', deviceMotionHandler, true);
        }
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', device.deviceOrientationHandler.bind(device), true);
        }
        this.pos = new THREE.Vector3(0, 0, 0);
        this.vel = new THREE.Vector3(0, 0, 0);
        this.accel = new THREE.Vector3(0, 0, 0);
    },
    update: function(){
        this.vel.add(this.accel);
        this.vel.multiplyScalar(damping);
        this.pos.add(this.vel);
        this.accel.multiplyScalar(0);
    },
    deviceOrientationHandler : function(eventData){
        console.log('(' + eventData.alpha + ', '
                        + eventData.beta + ', '
                        + eventData.gamma + ')');
        this.accel.x = eventData.alpha;
        this.accel.y = eventData.beta;
        this.accel.z = eventData.gamma;
    }
} // end Device

function deviceMotionHandler(eventData) {
    var acceleration = eventData.acceleration;
    console.log('acceleration')
    console.log(acceleration)
    acceleration = eventData.accelerationIncludingGravity;

    var rotation = eventData.rotationRate;
    console.log('rotation')
    console.log(rotation)
}


