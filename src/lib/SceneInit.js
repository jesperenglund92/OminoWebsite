import * as THREE from 'three';

export default class SceneInit {
  constructor(canvasId) {
    // NOTE: Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // NOTE: Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    this.canvasContainer = document.querySelector('#canvasContainer');
    this.canvas = document.querySelector('#myThreeJsCanvas');

    // NOTE: Additional components.
    //this.clock = undefined;
    //this.stats = undefined;

    // NOTE: Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;

    this.omino = undefined;
    this.sphere = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( '#06071A' );
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / (window.innerHeight/3.2),
      1,
      1000
    );
    this.camera.position.y = 34;
    this.camera.position.z = 32;
    this.camera.lookAt( 0, 0, 0 );

    // this.canvasContainer = document.getElementById('canvasContainer');

    // NOTE: Specify a canvas which is already created in the HTML.
    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight/4.4);
    // this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);

    //this.clock = new THREE.Clock();
    //this.stats = Stats();
    //document.body.appendChild(this.stats.dom);

    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    // this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);

    this.sphereIdleSign = 1;

    this.currentOminoPos = 'gameTile';
    this.changeTab = false;
    this.endPosition = 0;

    // if window resizes
    window.addEventListener('resize', () => this.onWindowResize(), false);
  }
  
  animate(t) {
    // NOTE: Window is implied.
    // requestAnimationFrame(this.animate.bind(this));

    if (this.sphere){
      if (this.sphere.position.y >= 1){
        this.sphereIdleSign = -1;
      }
      else if (this.sphere.position.y <= -1){
        this.sphereIdleSign = 1
      }
      this.sphere.position.y += 0.015 * this.sphereIdleSign;
      this.sphere.position.z += -0.01 * this.sphereIdleSign;
      this.sphere.position.x += 0.005 * this.sphereIdleSign;
    }

    //TWEEN.update(t);
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    //this.stats.update();
  }

  render() {
    // NOTE: Update uniform data on each render.
    // this.uniforms.u_time.value += this.clock.getDelta();
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / (window.innerHeight/3.2);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight/4.4);
  }
}
