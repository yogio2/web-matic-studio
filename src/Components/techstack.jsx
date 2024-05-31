import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Plane, Html } from '@react-three/drei';
import { TextureLoader } from 'three';
import './StyleJS/techstack.css'

const Techstack = () => {
    const controlsRef = useRef();
    const [cubeData, setCubeData] = useState([]);
    const [dataLen, setDataLen] = useState([0]);
    const [textDesc, setTextDesc] = useState();

    useEffect(() => {
        // Fetch JSON data containing cube information
        fetch('src/Components/tech.json')
            .then(response => response.json())
            .then(data => {
                setDataLen(data.length);
                setCubeData(data);
            })
            .catch(error => console.error('Error fetching JSON data:', error));
    }, []);

    const RotatingBox = ({ index, cube }) => {
        const meshRef = useRef();
        const [hovered, setHovered] = useState(false);
        const [rotationSpeed, setRotationSpeed] = useState(0.005);

        // Rotate the box on y-axis
        useFrame(() => {
            meshRef.current.rotation.y += rotationSpeed;
        });


        const handleHover = (isHovered) => {
            setHovered(isHovered);
            // Adjust rotation speed on hover
            setRotationSpeed(isHovered ? 0.02 : 0.005);
        };

        // Load the image texture
        const texture = new TextureLoader().load(cube.image);

        return (
            <mesh name="rotatingBox" // Assign a name to the mesh
                ref={meshRef}
                position={[(index-parseInt(dataLen/2)) * 10, 20, -20]} // Adjust distance from the ground
                onPointerOver={(e) => handleHover(true)}
                onPointerOut={(e) => handleHover(false)}
                onClick={(e) => {
                    console.log(cube.stackDesc);
                    setTextDesc(cube.stackDesc);
                }}
            >
                <boxGeometry args={[3, 3, 3]} />
                <meshStandardMaterial map={texture} />
                {hovered && (
                    <Html center>
                        <div className='TechText'>{cube.cubeName}</div>
                    </Html>
                )}
            </mesh>
        );
    };

    return (
        <div className="CanvasContainer">
            <Canvas className='techCanvas' camera={{ position: [0, 0, -50] }} style={{ width: '100%', height: '60vh', backgroundColor:'black'} }>
                <ambientLight intensity={1} />
                <directionalLight position={[0, 5, 5]} intensity={0.5} castShadow />
                <OrbitControls
                    ref={controlsRef}
                    enableRotate={true} enablePan={false} minPolarAngle={1}maxPolarAngle={1}
                    enableRotateX={true} enableDamping={true}
                />
                {cubeData.map((cube, index) => (
                    <RotatingBox key={index} index={index} cube={cube} />
                ))}
                <Html><div className="desc"><p>{textDesc}</p></div></Html>
                <Plane className="Plane" receiveShadow rotation={[-Math.PI / 2, 0, 0]} args={[(dataLen * 100), 50]} position={[0, -50, 20]}>
                    <meshStandardMaterial color="orange" />
                </Plane>
            </Canvas>
        </div>
    );
};

export default Techstack;