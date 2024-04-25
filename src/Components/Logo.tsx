import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/Addons.js";

interface LogoProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

function Logo({ canvasRef }: LogoProps) {
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
      document.documentElement.clientWidth / document.documentElement.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });
    renderer.setSize(document.documentElement.clientWidth, document.documentElement.clientHeight);
    renderer.setClearColor(0x000000, 0);

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = document.documentElement.clientWidth / document.documentElement.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      );
    }

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    const defaultCamPos = new THREE.Vector3(0, 1, 10);
    let shouldAutoRotateBack = false;
    controls.addEventListener("start", function () {
      shouldAutoRotateBack = false;
    });
    controls.addEventListener("end", function () {
      shouldAutoRotateBack = true;
    });

    // GLTFLoader
    const loader = new GLTFLoader();
    loader.load("src/assets/logo.glb", function (gltf) {
      const logo = gltf.scene;
      scene.add(logo);
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      if (shouldAutoRotateBack) {
        camera.position.lerp(defaultCamPos, 0.01);
      }
    };
    animate();
  }, [canvasRef]);

  return null;
}

export default Logo;
