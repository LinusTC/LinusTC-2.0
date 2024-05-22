import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import LogoSrc from '../Assets/Logo.glb?url';

function Logo() {
  const canvasRef = useRef(null);
  const [playStart, setPlayStart] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    // Scene
    const scene = new THREE.Scene();

    // First Point Light
    const light = new THREE.AmbientLight(0x404040, 50);
    scene.add(light);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      20,
      document.documentElement.clientWidth /
        document.documentElement.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    renderer.setClearColor(0x000000, 0);

    window.addEventListener("resize", onWindowResize, false);
    function onWindowResize() {
      camera.aspect =
        document.documentElement.clientWidth /
        document.documentElement.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      );
    }

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = false;

    // Save the default position
    const defaultCamPos = new THREE.Vector3(0, 1, 10);
    let shouldAutoRotateBack = false;
    let movedOnce = false;
    controls.addEventListener("start", function () {
      shouldAutoRotateBack = false;
      movedOnce = true;
    });
    controls.addEventListener("end", function () {
      shouldAutoRotateBack = true;
    });

    //Start animation
    if (playStart) {
      camera.position.set(0, -25, 0.5);
    }

    // GLTFLoader
    const loader = new GLTFLoader();
    loader.load(LogoSrc, function (gltf) {
      const logo = gltf.scene;
      scene.add(logo);
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);

      if (shouldAutoRotateBack) {
        camera.position.lerp(defaultCamPos, 0.02);
      }
      if (playStart) {
        if (movedOnce) {
          setPlayStart(false);
        } else {
          camera.position.lerp(defaultCamPos, 0.01);
        }
      }
    };
    animate();
  }, [canvasRef]);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 z-0 -mt-48"></canvas>
  );
}

export default Logo;
