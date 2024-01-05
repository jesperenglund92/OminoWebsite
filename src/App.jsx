import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { Snackbar, Alert } from '@mui/material';

import SceneInit from './lib/SceneInit';
import Home from './features/Home';
import Game from './features/Game';
import Us from './features/Us';

import { createSceneObjects } from './utils/threeUtils';
import getBrowsername from './utils/getBrowsername';
import getIsUsingMobile from './utils/getIsUsingMobile';

function App() {
  const homeRef = useRef(null);
  const gameRef = useRef(null);
  const aboutUsRef = useRef(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const goToAnchor = (id, canvasHeight) => {
    var element = document.querySelector(`#${id}`);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
  };

  useEffect(() => {
    if (getBrowsername() === 'Safari' && getIsUsingMobile()) {
      setSnackbarOpen(true);
    }
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const test = new SceneInit('myThreeJsCanvas');
    test.initialize();
    test.animate();
    createSceneObjects(test);

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    const animate = (t) => {
      TWEEN.update(t);
      window.requestAnimationFrame(animate);
    };
    animate();

    //const canvasBounds = test.renderer.domElement.getBoundingClientRect();

    let isTweening = false;
    let isTweeningLeft = false;
    let isTweeningRight = false;

    let chainTween = false;
    let chainTweenLeft = false;
    let chainTweenRight = false;

    const tweenCubeLeftToMid = new TWEEN.Tween({ x: -20, y: 0, zRotation: 0 })
      .to({ x: 0, y: 0, zRotation: -Math.PI / 2 }, 300)
      .onUpdate((coords) => {
        isTweening = true;
        isTweeningRight = true;
        test.omino.position.x = coords.x;
        test.omino.position.y = Math.sin(-coords.zRotation * 2) * 5;
        test.omino.rotation.z = coords.zRotation;
      })
      .easing(TWEEN.Easing.Quadratic.In)
      .onComplete(() => {
        if (chainTweenRight){
          tweenCubeMidToRight.start();
        }
        else if (chainTweenLeft){
          tweenCubeMidToLeft.start();
        }
        else {
          isTweeningRight = false;
          isTweening = false;
        }
      });

    const tweenSphereLeftToMid = new TWEEN.Tween({ x: -20, y: 0 })
      .to({ x: 0, y: 0 }, 300)
      .onUpdate((coords) => {
        test.sphere.position.x = coords.x;
      })
      .easing(TWEEN.Easing.Cubic.InOut)
      .onComplete(() => {
        if (chainTweenRight){
          tweenSphereMidToRight.start();
        }
        else if (chainTweenLeft){
          tweenSphereMidToLeft.start();
        }
      });

    const tweenCubeMidToRight = new TWEEN.Tween({ x: 0, y: 0, zRotation: 0 })
      .to({ x: 20, y: 0, zRotation: -Math.PI / 2 }, 300)
      .onUpdate((coords) => {
        isTweening = true;
        test.omino.position.x = coords.x;
        test.omino.position.y = Math.sin(-coords.zRotation * 2) * 5;
        test.omino.rotation.z = coords.zRotation;
      })
      .easing(TWEEN.Easing.Quadratic.In)
      .onComplete(() => {
        chainTween = false;
        chainTweenRight = false;
        isTweening = false;
        isTweeningRight = false;
      });

    const tweenSphereMidToRight = new TWEEN.Tween({ x: 0, y: 0 })
      .to({ x: 20, y: 0 }, 300)
      .onUpdate((coords) => {
        test.sphere.position.x = coords.x;
      })
      .easing(TWEEN.Easing.Cubic.InOut);

    const tweenCubeMidToLeft = new TWEEN.Tween({ x: 0, y: 0, zRotation: 0 })
      .to({ x: -20, y: 0, zRotation: Math.PI / 2 }, 300)
      .onUpdate((coords) => {
        isTweening = true;
        test.omino.position.x = coords.x;
        test.omino.position.y = Math.sin(coords.zRotation * 2) * 5;
        test.omino.rotation.z = coords.zRotation;
      })
      .easing(TWEEN.Easing.Quadratic.In)
      .onComplete(() => {
        chainTween = false;
        chainTweenLeft = false;
        isTweening = false;
        isTweeningLeft = false;
      });

    const tweenSphereMidToLeft = new TWEEN.Tween({ x: 0, y: 0 })
      .to({ x: -20, y: 0 }, 300)
      .onUpdate((coords) => {
        test.sphere.position.x = coords.x;
      })
      .easing(TWEEN.Easing.Cubic.InOut);

    const tweenCubeRightToMid = new TWEEN.Tween({ x: 20, y: 0, zRotation: 0 })
      .to({ x: 0, y: 0, zRotation: Math.PI / 2 }, 300)
      .onUpdate((coords) => {
        isTweening = true;
        isTweeningLeft = true;
        test.omino.position.x = coords.x;
        test.omino.position.y = Math.sin(coords.zRotation * 2) * 5;
        test.omino.rotation.z = coords.zRotation;
      })
      .easing(TWEEN.Easing.Quadratic.In)
      .onComplete(() => {
        if (chainTweenRight){
          tweenCubeMidToRight.start();
        }
        else if (chainTweenLeft){
          tweenCubeMidToLeft.start();
        }
        else {
          isTweening = false;
          isTweeningLeft = false;
        }
      });

    const tweenSphereRightToMid = new TWEEN.Tween({ x: 20, y: 0 })
      .to({ x: 0, y: 0 }, 300)
      .onUpdate((coords) => {
        test.sphere.position.x = coords.x;
      })
      .easing(TWEEN.Easing.Cubic.InOut)
      .onComplete(() => {
        if (chainTweenRight){
          tweenSphereMidToRight.start();
        }
        else if (chainTweenLeft){
          tweenSphereMidToLeft.start();
        }
      });

    const onMouseMove = (event) => {
      const canvasBounds = test.renderer.domElement.getBoundingClientRect();
      pointer.x = ( ( event.clientX - canvasBounds.left ) / ( canvasBounds.right - canvasBounds.left ) ) * 2 - 1;
      pointer.y = - ( ( event.clientY - canvasBounds.top ) / ( canvasBounds.bottom - canvasBounds.top) ) * 2 + 1;
      raycaster.setFromCamera(pointer, test.camera);
      const intersects = raycaster.intersectObjects(test.scene.children);
      if (intersects.length > 0) {
        if (['homeTile', 'homeText'].includes(intersects[0].object.name)){
          document.body.style.cursor = 'pointer';
        }
        else if (['usTile', 'usText'].includes(intersects[0].object.name)){
          document.body.style.cursor = 'pointer';
        }
        else if (['gameTile', 'gameText'].includes(intersects[0].object.name)){
          document.body.style.cursor = 'pointer';
        }
        else {
          document.body.style.cursor = 'default';
        }
      }
      else {
        document.body.style.cursor = 'default';
      }
    };

    const onMouseClick = (event) => {
      const canvasBounds = test.renderer.domElement.getBoundingClientRect();
      pointer.x = ( ( event.clientX - canvasBounds.left ) / ( canvasBounds.right - canvasBounds.left ) ) * 2 - 1;
      pointer.y = - ( ( event.clientY - canvasBounds.top ) / ( canvasBounds.bottom - canvasBounds.top) ) * 2 + 1;
      raycaster.setFromCamera(pointer, test.camera);
      const intersects = raycaster.intersectObjects(test.scene.children);
      if (intersects.length > 0) {
        if (['homeTile', 'homeText'].includes(intersects[0].object.name)){
          if (test.omino.position.x === 0){
            tweenCubeMidToLeft.start();
            tweenSphereMidToLeft.start();
          }
          else if (test.omino.position.x === 20){
            chainTweenLeft = true;
            tweenCubeRightToMid.start();
            tweenSphereRightToMid.start();
          }
          goToAnchor('homeSection', canvasBounds.height);
        }
        else if (['usTile', 'usText'].includes(intersects[0].object.name)){
          if (test.omino.position.x === 0){
            tweenCubeMidToRight.start();
            tweenSphereMidToRight.start();
          }
          else if (test.omino.position.x === -20){
            chainTweenRight = true;
            tweenCubeLeftToMid.start();
            tweenSphereLeftToMid.start();
          }
          goToAnchor('usSection', canvasBounds.height);
        }
        else if (['gameTile', 'gameText'].includes(intersects[0].object.name)){
          if (test.omino.position.x === 20){
            tweenCubeRightToMid.start();
            tweenSphereRightToMid.start();
          }
          else if (test.omino.position.x === -20){
            tweenCubeLeftToMid.start();
            tweenSphereLeftToMid.start();
          }
          goToAnchor('gameSection', canvasBounds.height);
        }
      }
    };

    window.addEventListener('click', onMouseClick);
    window.addEventListener('mousemove', onMouseMove);

    const intersectionThreshold = window.innerWidth / 2500 > 1 ? 1 : window.innerWidth / 2500;

    let options = {
      rootMargin: '-100px 0px 100px 0px',
      threshold: intersectionThreshold
    }
    
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          if (elem.id === 'homeSection'){
            if (!isTweening){
              if (test.omino.position.x === 0){
                tweenCubeMidToLeft.start();
                tweenSphereMidToLeft.start();
              }
            }
            else {
              if (isTweeningLeft) chainTweenLeft = true;
              else chainTweenRight = true;
            }
          }
          else if (elem.id === 'gameSection'){
            if (!isTweening){
              if (test.omino.position.x === -20){
                tweenCubeLeftToMid.start();
                tweenSphereLeftToMid.start();
              }
              else if (test.omino.position.x === 20){
                tweenCubeRightToMid.start();
                tweenSphereRightToMid.start();;
              }
            }
          }
          else if (elem.id === 'usSection'){
            if (!isTweening){
              if (test.omino.position.x === 0){
                tweenCubeMidToRight.start();
                tweenSphereMidToRight.start();
              }
            }
            else {
              if (isTweeningLeft) chainTweenLeft = true;
              else chainTweenRight = true;
            }
          }
        }
      });
    }

    let observer = new IntersectionObserver(intersectionCallback, options);

    let homeSection = document.querySelector('#homeSection');
    let gameSection = document.querySelector('#gameSection');
    let usSection = document.querySelector('#usSection');
    observer.observe(homeSection);
    observer.observe(gameSection);
    observer.observe(usSection);

  }, []);

  return (
    <>
      <canvas id="myThreeJsCanvas" />
      <div id="pageContent" className='pageContent scroller'>
        <Home />
        <Game />
        <Us />
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={12000}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
            Using Safari on a mobile device is a combo that has been known to be a recipe for a lesser experience on this site. Tread lightly or try another browser/device why don't you!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default App;