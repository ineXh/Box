function Device(){
  this.init();
}
Device.prototype = {
    init: function(){
        if (window.DeviceMotionEvent) {
          console.log("DeviceMotionEvent supported");
          window.addEventListener('devicemotion', deviceMotionHandler, true);
        }
        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', deviceOrientationHandler, true);
        }
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

function deviceOrientationHandler(eventData){
    console.log('(' + eventData.alpha + ', '
                    + eventData.beta + ', '
                    + eventData.gamma + ')');

}
