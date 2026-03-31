import React, { use, useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';

import planescene from '../assets/3d/plane.glb';

const Plane = ({isrotating, ...props}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planescene);
  const { actions } = useAnimations(animations, ref);

useEffect(() => {
  console.log(isrotating); 
  if (isrotating) {
    actions['Take 001'].play();
  } else {
    actions['Take 001'].stop();
  }
}, [actions, isrotating])

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane