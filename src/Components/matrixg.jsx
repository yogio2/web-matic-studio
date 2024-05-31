import React, { useState, useEffect, useRef } from 'react';
import './StyleJS/contact.css';

const MatrixBG = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Making the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    // Chinese characters - taken from the unicode charset
    let matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    // Converting the string into an array of single characters
    matrix = matrix.split("");

    const font_size = 10;
    const columns = canvas.width / font_size; // Number of columns for the rain
    // Initialize drops array
    let drops = [];
    for (let x = 0; x < columns; x++) {
      drops.push(1);
    }
    
    // Drawing the characters
    const draw = () => {
      // Black BG for the canvas
      // Translucent BG to show trail
      ctx.fillStyle = "rgba(0,0,0,0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#e0000d"; // Green text
      ctx.font = `${font_size}px arial`;
    
      // Looping over drops
      for (let i = 0; i < drops.length; i++) {
        // A random chinese character to print
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        // x = i * font_size, y = value of drops[i] * font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);
    
        // Sending the drop back to the top randomly after it has crossed the screen
        // Adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
    
        // Incrementing Y coordinate
        drops[i]++;
      }
    };
    
    const intervalId = setInterval(draw, 35);
    
    return () => clearInterval(intervalId);
  }, []);
    
  return (
      <canvas className='matrixBG' ref={canvasRef}></canvas>
  );
};

export default MatrixBG;