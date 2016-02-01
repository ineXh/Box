function Box(){
  this.create();
}
Box.prototype = {
    create: function(){
        // Material // MeshLambertMaterial //MeshBasicMaterial
        this.material = new THREE.MeshLambertMaterial({
            color: Light_Wood_Brown } );

        this.geometry = new THREE.BoxGeometry( 50, 50, 50 );
        this.mesh = new THREE.Mesh( this.geometry, this.material );
        scene.add( this.mesh );
        this.count = 0;
    },
    update: function(){
        //console.log('update')
        this.count += PI/80;
        this.mesh.position.x = 50*Math.sin(this.count);
        this.mesh.position.y = 50*Math.cos(this.count);
    }

} // end Box
