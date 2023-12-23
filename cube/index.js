import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const render = new THREE.WebGL1Renderer({
  antialias: true,
});
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement);

// responsive
window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  render.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const texture = new THREE.TextureLoader().load("./assets/cube.jpg");

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
  wireframe: false,
  map: texture,
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animation() {
  requestAnimationFrame(animation);

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  render.render(scene, camera);
}
animation();
