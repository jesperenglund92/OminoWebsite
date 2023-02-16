import * as THREE from 'three';

import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export const createSceneObjects = (scene) => {
    const textureLoader = new THREE.TextureLoader();
    const textureMap = textureLoader.load('dist/images/shiny.png');

    const boxGeometry = new THREE.BoxGeometry(20, 20, 20);
    const boxMaterial = new THREE.MeshPhysicalMaterial({
      map: textureMap,
    });
    boxMaterial.reflectivity = 0.5;
    boxMaterial.transmission = 0.85;
    boxMaterial.roughness = 0.05;
    boxMaterial.metalness = 0;
    boxMaterial.clearcoat = 4;
    boxMaterial.clearcoatRoughness = 0.5;
    boxMaterial.color = new THREE.Color(0xffffff);
    boxMaterial.thickness = 2;
    boxMaterial.specularIntensity = 1;
    //boxMaterial.transparent = true;
    boxMaterial.opacity = 0.5;
    boxMaterial.side = THREE.DoubleSide;
    scene.omino = new THREE.Mesh(boxGeometry, boxMaterial);
    scene.omino.position.set( -20, 0, 0 );
    scene.omino.updateMatrixWorld();
    scene.scene.add(scene.omino);

    const sphereGeometry = new THREE.SphereGeometry( 6, 58, 28 );
    const sphereMaterial = new THREE.MeshPhysicalMaterial( { color: 0xddaa00 } );
    scene.sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    scene.sphere.position.set( -20, 0, 0 );
    scene.scene.add(scene.sphere);

    const groundGeometry = new THREE.BoxGeometry(20, 0.1, 20);
    const groundMaterial = new THREE.MeshPhysicalMaterial();
    groundMaterial.color = new THREE.Color(0x31344C);
    const groundMesh1 = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh1.position.set( 0, -10, 0 );
    groundMesh1.name = 'gameTile';
    groundMesh1.updateMatrixWorld();
    scene.scene.add(groundMesh1);

    const groundMesh2 = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh2.position.set( -20.2, -10, 0 );
    groundMesh2.name = 'homeTile';
    groundMesh2.updateMatrixWorld();
    scene.scene.add(groundMesh2);

    const groundMesh3 = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh3.position.set( 20.2, -10, 0 );
    groundMesh3.name = 'usTile';
    groundMesh3.updateMatrixWorld();
    scene.scene.add(groundMesh3);

    const fontLoader = new FontLoader();
    fontLoader.load(
      'dist/fonts/BigPixel_Regular.json',
      (bigPixel) => {
        const homeTextGeometry = new TextGeometry('home', {
          size: 4,
          height: 0.1,
          font: bigPixel,
        });
        const textMaterial = new THREE.MeshStandardMaterial({ color: 0xddaa00 });
        const homeTextMesh = new THREE.Mesh(homeTextGeometry, textMaterial);
        homeTextMesh.position.set(-28, -9.85, 1.5);
        homeTextMesh.rotation.set(-Math.PI/2,0,0);
        homeTextMesh.name = 'homeText';
        scene.scene.add(homeTextMesh);
        const gameTextGeometry = new TextGeometry('game', {
          size: 4,
          height: 0.1,
          font: bigPixel,
        });
        const gameTextMesh = new THREE.Mesh(gameTextGeometry, textMaterial);
        gameTextMesh.position.set(-7.5, -9.85, 1.5);
        gameTextMesh.rotation.set(-Math.PI/2,0,0);
        gameTextMesh.name = 'gameText';
        scene.scene.add(gameTextMesh);
        const usTextGeometry = new TextGeometry('us', {
          size: 4,
          height: 0.1,
          font: bigPixel,
        });
        const usTextMesh = new THREE.Mesh(usTextGeometry, textMaterial);
        usTextMesh.position.set(15.5, -9.85, 1.5);
        usTextMesh.rotation.set(-Math.PI/2,0,0);
        usTextMesh.name = 'usText';
        scene.scene.add(usTextMesh);
      }
    );
}