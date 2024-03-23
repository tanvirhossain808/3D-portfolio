/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from '@react-three/drei';
import planeScene from '../assets/3d/plane.glb';
import { useEffect, useRef } from 'react';


const Plane = ({ isRotating, ...props }) => {
    const animationRef = useRef(null)
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, animationRef)

    useEffect(() => {
        console.log(actions);
        if (isRotating) {
            actions["Take 001"].play()
        }
        else {
            actions["Take 001"].stop()
        }

    }, [actions, isRotating])
    return (
        <mesh {...props} ref={animationRef}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;