import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import scenePath from "./scene-transformed.glb";

export function Island({
  setIsPlaneAnimating,
  currentFocusPoint,
  onCameraMoveEnd,
  audioRef,
  setShowHint,
  isPlaying,
  ...props
}) {
  const { nodes, materials } = useGLTF(scenePath);

  const { viewport } = useThree();
  const { camera } = useThree();
  const islandGroup = useRef();
  const [rotation, setRotation] = useState(0); // Store rotation state
  const [isDragging, setIsDragging] = useState(false); // Track if currently dragging
  const [lastX, setLastX] = useState(0); // Store the last mouse x position
  const { gl } = useThree(); // Get the WebGL rendering context from React Three Fiber

  // Handle pointer (mouse/touch) drag start
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsDragging(true);
    setIsPlaneAnimating(true);
    // If touch event, use the first touch point
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    setLastX(clientX);

    setShowHint(false);

    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // Handle pointer (mouse/touch) drag end
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsDragging(false);
    setIsPlaneAnimating(false);

    if (isPlaying) {
      audioRef.current.pause();
    }
  };

  // Handle pointer (mouse/touch) drag
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isDragging) {
      // If touch event, use the first touch point
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX) / viewport.width;
      const newRotation = rotation + delta * 0.002 * Math.PI;
      setRotation(newRotation);
      setLastX(clientX);
    }
  };

  // Register event handlers
  useEffect(() => {
    const canvas = gl.domElement; // Get the canvas element
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // UseFrame hook to update rotation
  useFrame((state) => {
    // If a focus point has been set...
    if (currentFocusPoint) {
      const { position, rotation } = currentFocusPoint; // Get the position and rotation of the focus point

      // Check if the distance to target is larger than 0.1 units
      if (state.camera.position.distanceTo(position) > 0.1) {
        // If the camera has not yet reached the target...
        state.camera.position.lerp(position, 0.05); // Move the camera position

        // Convert current camera rotation to quaternion for interpolation
        let cameraQuaternion = state.camera.quaternion.clone();

        // Convert the target rotation to a Quaternion
        let targetQuaternion = new THREE.Quaternion().setFromEuler(rotation);

        // Interpolate between the currentcamera quaternion and the target quaternion
        cameraQuaternion.slerpQuaternions(
          cameraQuaternion,
          targetQuaternion,
          0.1
        );

        // Update the camera's quaternion
        state.camera.quaternion.copy(cameraQuaternion);

        state.camera.updateProjectionMatrix(); // To recalculate the projection.
      } else if (state.camera.position.distanceTo(position) <= 0.1) {
        // If the camera is very close to the target...
        state.camera.position.copy(position); // Set the camera position directly to the target
        state.camera.rotation.copy(rotation); // Set the camera rotation directly to the target
        state.camera.updateProjectionMatrix(); // To recalculate the projection.
      }
    }

    if (islandGroup.current) {
      islandGroup.current.rotation.y = rotation;
    }
  });

  // 6 sections, each section should span 360/6 = 60 degrees. Convert this to radians by multiplying by π/180.
  const sectionThresholds = [
    Math.PI / 3,
    (2 * Math.PI) / 3,
    Math.PI,
    (4 * Math.PI) / 3,
    (5 * Math.PI) / 3,
    2 * Math.PI,
  ]; // Thresholds for each section

  // Update current stage when rotation changes
  useEffect(() => {
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI); // Normalize rotation to be between 0 and 2 * Math.PI

    let sectionIndex = 0;
    while (
      sectionIndex < sectionThresholds.length &&
      normalizedRotation >= sectionThresholds[sectionIndex]
    ) {
      sectionIndex++;
    }

    // console.log("Normalized Rotation: ", normalizedRotation); // Log normalizedRotation
    // console.log("Setting Current Stage to: ", sectionIndex + 1); // Log currentStage

    props.setCurrentStage(sectionIndex + 1);
  }, [rotation]);

  // Play or pause audio when isPlaying changes
  useEffect(() => {
    if (props.isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandGroup} {...props} dispose={null}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

useGLTF.preload(scenePath);
