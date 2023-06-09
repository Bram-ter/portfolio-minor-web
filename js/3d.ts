/// <reference path="globals.d.ts" />

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' 
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Scene
const scene = new THREE.Scene()

const canvas = document.querySelector('canvas') as HTMLCanvasElement

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#2E20CA' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight
}

/**
 * Screen resize
 */

window.addEventListener('load', handleLoadAndResize);
window.addEventListener('resize', handleLoadAndResize);

function handleLoadAndResize() {
    // Update sizes
    sizes.width = window.innerWidth / 2
    sizes.height = window.innerHeight

    if (window.innerWidth < 700) { 
      sizes.width = window.innerWidth
      sizes.height = window.innerHeight / 2
      console.log("klein")
    } else {
      console.log("groot")
    }
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

/**
 * Fullscreen toggle
 */

canvas.addEventListener('dblclick', () => {
  const fullscreenElement = document.fullscreenElement

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((Element as any).document.webkitExitFullscreen) {
        (Element as any).webkitExitFullscreen();
    }
  }
});

// const loader = new GLTFLoader();

// loader.load( '/cool.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

/**
 * Camera
 */

// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const tick = () =>
{
    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()