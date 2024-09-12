import { Canvas } from '@react-three/fiber'
import React from 'react'
import './Style.css'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

function App() {
  return (
    <div className='w-full h-screen'>
      <div className="navbar line flex gap-10 pt-10 pb-3 absolute  top-0 left-1/2 -translate-x-1/2">
      {["Store", "Mac","iPad","iPhone", "watch", "airpods", "TV & Home", "Entertainment","Accessories","Support",].map((e) => (
        <a href="" className='text-white font-[400] text-sm capitalize'>{e}</a>
      ))}
      </div>
      <div className='absolute flex flex-col items-center top-40 left-1/2 -translate-x-1/2  text-white'>
        <h3 className='masked text-7xl tracking-tighter font-[700]'>Mackbook pro.</h3>
        <h5 className=''>Oh so pro!</h5>
        <p className='text-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex inventore obcaecati enim accusantium.</p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        {/* <OrbitControls /> */}
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr',]} />
        {/* <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',]} /> */}

        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App