import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ({isrotating}) => {
    const gltf = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
      if (isrotating) {
        skyRef.current.rotation.y += 0.15 * delta
      }
    })
  return (
    <mesh ref={skyRef}> 
        <primitive object={gltf.scene} />
    </mesh>
  )
}

export default Sky