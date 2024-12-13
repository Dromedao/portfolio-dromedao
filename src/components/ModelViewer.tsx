import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader, OrbitControls } from "three-stdlib";

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); 
    renderer.setClearColor(0x000000, 0);
    let controls: OrbitControls;

    if (mountRef.current) {
      const aspect = mountRef.current.offsetWidth / mountRef.current.offsetHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();

      renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
      mountRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true; 
      controls.dampingFactor = 0.05;
      controls.enableZoom = false; 
      controls.enablePan = false; 
      controls.maxPolarAngle = Math.PI / 2;
      controls.minPolarAngle = Math.PI / 2; 
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); 
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 2.0);
    pointLight1.position.set(0, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 2.0);
    pointLight2.position.set(-10, 10, 10);
    scene.add(pointLight2);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    hemisphereLight.position.set(0, 20, 0);
    scene.add(hemisphereLight);

    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;

    loader.load(
      "/models/DromedaoConcreteGray.glb", 
      (gltf) => {
        model = gltf.scene;
        model.position.set(0, -12, 0); 
        model.scale.set(20, 20, 20); 
        model.rotation.y = Math.PI; 
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error al cargar el modelo:", error);
      }
    );

    camera.position.z = 10;

    const animate = () => {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.01; 
      }

      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "350px", height: "350px", backgroundColor: "transparent"}} />;
};

export default ThreeScene;

