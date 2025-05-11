import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { VertexNormalsHelper } from 'three/addons/helpers/VertexNormalsHelper.js';
import { VertexTangentsHelper } from 'three/addons/helpers/VertexTangentsHelper.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Section = styled.section`
    padding: 2em;
    margin: 0;
    background-color: white;
    border-radius: 8px;
    box-shadow: none;
    font-family: 'Roboto', sans-serif;
    color: rgb(25, 58, 76);
    font-size: 1.25em;
`;

const ServiceItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
`;

const ChartContainer = styled.div`
    width: ${props => props.large ? '600px' : '300px'};
    height: ${props => props.large ? '600px' : '300px'};
    margin-left: ${props => props.reverse ? '0' : '2em'};
    margin-right: ${props => props.reverse ? '2em' : '0'};
`;

const ServiceTitle = styled.div`
    color: rgb(97, 120, 94);
    font-size: 1.25em;
    font-weight: bold;
`;

const ServiceDescription = styled.div`
    flex: 1;
    max-width: 50%;
`;

const Services = () => {
    const chartRefs = useRef([]);

    useEffect(() => {
        chartRefs.current.forEach((ref, index) => {
            if (ref) {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize(index === 1 ? 600 : 300, index === 1 ? 600 : 300);
                ref.appendChild(renderer.domElement);

                if (index === 0) {
                    const geometry = new THREE.SphereGeometry(1, 32, 32);
                const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                    const sphere = new THREE.Mesh(geometry, material);
                    scene.add(sphere);
                    camera.position.z = 3;
                const animate = () => {
                    requestAnimationFrame(animate);
                        sphere.rotation.x += 0.01;
                        sphere.rotation.y += 0.01;
                    renderer.render(scene, camera);
                };
                animate();
                } else if (index === 1) {
                    renderer.setClearColor(0xffffff, 1);
                    camera.position.set(10, 10, 10);
                        camera.lookAt(scene.position);
                    camera.updateMatrix();

                    const controls = new OrbitControls(camera, renderer.domElement);
                    controls.enableDamping = true;
                    controls.dampingFactor = 0.25;
                    controls.enableZoom = true;

                    const generatePointCloudGeometry = (color, width, length) => {
                        const geometry = new THREE.BufferGeometry();
                        const numPoints = width * length;
                        const positions = new Float32Array(numPoints * 3);
                        const colors = new Float32Array(numPoints * 3);
                        let k = 0;
                        for (let i = 0; i < width; i++) {
                            for (let j = 0; j < length; j++) {
                                const u = i / width;
                                const v = j / length;
                                const x = u - 0.5;
                                const y = (Math.cos(u * Math.PI * 4) + Math.sin(v * Math.PI * 8)) / 20;
                                const z = v - 0.5;
                                positions[3 * k] = x;
                                positions[3 * k + 1] = y;
                                positions[3 * k + 2] = z;
                                const intensity = (y + 0.1) * 5;
                                colors[3 * k] = color.r * intensity;
                                colors[3 * k + 1] = color.g * intensity;
                                colors[3 * k + 2] = color.b * intensity;
                                k++;
                            }
                        }
                        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                        geometry.computeBoundingBox();
                        return geometry;
};

                    const generatePointcloud = (color, width, length) => {
                        const geometry = generatePointCloudGeometry(color, width, length);
                        const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true });
                        return new THREE.Points(geometry, material);
                    };

                    const pcBuffer = generatePointcloud(new THREE.Color(1, 0, 0), 80, 160);
                    pcBuffer.scale.set(5, 10, 10);
                    pcBuffer.position.set(-5, 0, 0);
                    scene.add(pcBuffer);
                    let isUserInteracting = false;
                    const onMouseDown = () => {
                        isUserInteracting = true;
};
                    const onMouseUp = () => {
                        isUserInteracting = false;
};
                    renderer.domElement.addEventListener('mousedown', onMouseDown);
                    renderer.domElement.addEventListener('mouseup', onMouseUp);
                    const animate = () => {
                        if (!isUserInteracting) {
                            pcBuffer.rotation.y += 0.01;
                }
                        controls.update();
                        renderer.render(scene, camera);
};
                    renderer.setAnimationLoop(animate);
                } else if (index === 2) {
                    camera.position.z = 400;
                    const light = new THREE.PointLight();
                    light.position.set(200, 100, 150);
                    scene.add(light);
                    scene.add(new THREE.PointLightHelper(light, 15));

                    const gridHelper = new THREE.GridHelper(400, 40, 0x0000ff, 0x808080);
                    gridHelper.position.y = -150;
                    gridHelper.position.x = -150;
                    scene.add(gridHelper);

                    const polarGridHelper = new THREE.PolarGridHelper(200, 16, 8, 64, 0x0000ff, 0x808080);
                    polarGridHelper.position.y = -150;
                    polarGridHelper.position.x = 200;
                    scene.add(polarGridHelper);

                    const loader = new GLTFLoader();
                    loader.load('models/gltf/LeePerrySmith/LeePerrySmith.glb', function (gltf) {
                        const mesh = gltf.scene.children[0];
                        mesh.geometry.computeTangents();
                        const group = new THREE.Group();
                        group.scale.multiplyScalar(50);
                        scene.add(group);
                        group.updateMatrixWorld(true);
                        group.add(mesh);

                        const vnh = new VertexNormalsHelper(mesh, 5);
                        scene.add(vnh);

                        const vth = new VertexTangentsHelper(mesh, 5);
                        scene.add(vth);

                        scene.add(new THREE.BoxHelper(mesh));

                        const wireframe = new THREE.WireframeGeometry(mesh.geometry);
                        let line = new THREE.LineSegments(wireframe);
                        line.material.depthTest = false;
                        line.material.opacity = 0.25;
                        line.material.transparent = true;
                        line.position.x = 4;
                        group.add(line);
                        scene.add(new THREE.BoxHelper(line));

                        const edges = new THREE.EdgesGeometry(mesh.geometry);
                        line = new THREE.LineSegments(edges);
                        line.material.depthTest = false;
                        line.material.opacity = 0.25;
                        line.material.transparent = true;
                        line.position.x = -4;
                        group.add(line);
                        scene.add(new THREE.BoxHelper(line));

                        scene.add(new THREE.BoxHelper(group));
                        scene.add(new THREE.BoxHelper(scene));
        });

                    const animate = () => {
                        const time = -performance.now() * 0.0003;
                        camera.position.x = 400 * Math.cos(time);
                        camera.position.z = 400 * Math.sin(time);
                        camera.lookAt(scene.position);
                        light.position.x = Math.sin(time * 1.7) * 300;
                        light.position.y = Math.cos(time * 1.5) * 400;
                        light.position.z = Math.cos(time * 1.3) * 300;
                        renderer.render(scene, camera);
};
                    renderer.setAnimationLoop(animate);
                } else {
                    const geometry = new THREE.BoxGeometry();
                    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                    const cube = new THREE.Mesh(geometry, material);
                    scene.add(cube);
                    camera.position.z = 5;
                    const animate = () => {
                        requestAnimationFrame(animate);
                        cube.rotation.x += 0.01;
                        cube.rotation.y += 0.01;
                        renderer.render(scene, camera);
};
                    animate();
                }
            }
        });
    }, []);

    return (
        <Section id="services">
            <h2>Des solutions sur mesure</h2>
            <ServiceItem reverse={false}>
                <ServiceDescription>
                    <ServiceTitle>Optimisation intelligente des tournées logistiques</ServiceTitle>
                    <p>Grâce à des algorithmes de recherche opérationnelle et à des prévisions alimentées par l’IA (trafic, météo, demande), nous optimisons vos tournées de livraison, même dans les zones les plus rurales. Résultat : des trajets plus courts, des coûts réduits, moins de CO₂ émis, et des clients livrés à temps. Une solution idéale pour les acteurs du transport, de l’agroalimentaire ou des coopératives locales.</p>
                </ServiceDescription>
                <ChartContainer reverse={false} ref={el => chartRefs.current[0] = el} />
            </ServiceItem>
            <ServiceItem reverse={true}>
                <ServiceDescription>
                    <ServiceTitle>Visualisation de données</ServiceTitle>
                </ServiceDescription>
                <ChartContainer reverse={true} large ref={el => chartRefs.current[1] = el} />
            </ServiceItem>
            <ServiceItem reverse={false}>
                <ServiceDescription>
                    <ServiceTitle>Modélisation prédictive</ServiceTitle>
                </ServiceDescription>
                <ChartContainer reverse={false} ref={el => chartRefs.current[2] = el} />
            </ServiceItem>
            <ServiceItem reverse={true}>
                <ServiceDescription>
                    <ServiceTitle>Consulting en data science</ServiceTitle>
                </ServiceDescription>
                <ChartContainer reverse={true} ref={el => chartRefs.current[3] = el} />
            </ServiceItem>
        </Section>
);
};

export default Services;