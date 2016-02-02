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

        // Material // MeshLambertMaterial //MeshBasicMaterial
        this.material = new THREE.MeshBasicMaterial({
            color: 0xAA0000 } );
        this.geometry = new THREE.BoxGeometry( 20, 20, 20 );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.mesh );

        this.pos = new THREE.Vector3(0, 50, 0);
        this.vel = new THREE.Vector3(0, 0, 0);
        this.accel = new THREE.Vector3(0, 0, 0);
    },
    update: function(){
        this.vel.add(this.accel);
        this.vel.multiplyScalar(damping);
        this.pos.add(this.vel);
        this.accel.multiplyScalar(0);

        this.mesh.position.x = this.pos.x;
        this.mesh.position.y = this.pos.y;
        this.mesh.position.z = this.pos.z;
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


