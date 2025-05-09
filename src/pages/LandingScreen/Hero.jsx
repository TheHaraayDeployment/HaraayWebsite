// // import React, { useState, useEffect, useRef } from "react";
// // import { useSprings, animated, useSpring } from "@react-spring/web";
// // import { useDrag } from "@use-gesture/react";
// // import "../../styles/Hero.scss";
// // import Projectimg1 from "../../assets/Akoyaheroimg.webp";
// // import Projectimg2 from "../../assets/Bosch/Boschimg.webp";
// // import Projectimg3 from "../../assets/BMS/BMSimg.webp";
// // import Projectimg4 from "../../assets/Lokneta/lokneta.webp";
// // import Projectimg5 from "../../assets/Bakers/Bakers.webp";
// // import googlerank from "./images/googlerank.png"
// // import content from "./images/content.png"
// // import bubble1 from "./images/bubble1.png"
// // import bubble2 from "./images/bubble2.jpg"
// // import bubble3 from "./images/bubble3.png"
// // import bubble4 from "./images/bubble4.jpg"
// // import bubble5 from "./images/bubble5.jpg"
// // import bubble6 from "./images/bubble6.jpg"
// // import bubble7 from "./images/bubble7.jpg"
// // import bubble8 from "./images/bubble8.jpg"
// // import bubble9 from "./images/bubble9.jpg"
// // import bubble10 from "./images/bubble10.jpg"
// // import bubble11 from "./images/bubble11.jpg"
// // import bubble12 from "./images/bubble12.jpg"
// // import bubble13 from "./images/bubble13.jpg"
// // import bubble14 from "./images/bubble14.png"
// // import bubble15 from "./images/bubble15.jpg"

// // // Generate random size between 130 and 200 for each project
// // const generateRandomSize = () => Math.floor(Math.random() * 71) + 130; // 130 to 200

// // const projects = [
// //   { title: "Project 1", image: bubble1, size: generateRandomSize() },
// //   { title: "Project 2", image: bubble2, size: generateRandomSize() },
// //   { title: "Project 3", image: bubble3, size: generateRandomSize() },
// //   { title: "Project 4", image: bubble4, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble5, size: generateRandomSize() },
// //   { title: "Project 1", image: bubble6, size: generateRandomSize() },
// //   { title: "Project 2", image: bubble7, size: generateRandomSize() },
// //   // { title: "Project 3", image: bubble8, size: generateRandomSize() },
// //   // { title: "Project 4", image: bubble9, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble10, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble11, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble12, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble13, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble14, size: generateRandomSize() },
// //   { title: "Project 5", image: bubble15, size: generateRandomSize() },
// // ];

// // // Shuffle array function to randomize fall order
// // const shuffleArray = (array) => {
// //   const newArray = [...array];
// //   for (let i = newArray.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
// //   }
// //   return newArray;
// // };

// // const HeroSection = () => {
// //   const containerRef = useRef(null);
// //   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
// //   const [isDragging, setIsDragging] = useState(false);
// //   const [isInitialAnimation, setIsInitialAnimation] = useState(true);
// //   const [startDelays, setStartDelays] = useState([]);

// //   // Physics constants - adjusted for larger bubbles
// //   const friction = 0.96;
// //   const elasticity = 0.8;
// //   const gravity = 0.35;

// //   // Initialize positions with all cards at top center, but with random delays
// //   const [positions, setPositions] = useState(() => 
// //     projects.map((project, i) => ({
// //       x: 0, // Will be centered later when dimensions are known
// //       y: -300, // Start above the viewport
// //       vx: (Math.random() * 0.6) - 0.3, // Small random horizontal velocity
// //       vy: 0, // Start with no vertical velocity
// //       dragging: false,
// //       active: false, // Cards start inactive and become active based on their delay
// //       radius: project.size / 2, // Half of the size for radius calculation
// //     }))
// //   );

// //   // Generate random start times spread over 10 seconds
// //   useEffect(() => {
// //     const indices = Array.from({ length: projects.length }, (_, i) => i);
// //     const shuffled = shuffleArray(indices);

// //     // Create delays that span across 10 seconds
// //     const delays = shuffled.map((_, i) => {
// //       return Math.random() * 1000; // Random delay between 0-1 seconds
// //     });

// //     setStartDelays(delays);
// //   }, []);

// //   // Update dimensions when component mounts or window resizes
// //   useEffect(() => {
// //     if (!containerRef.current) return;

// //     const updateDimensions = () => {
// //       const width = containerRef.current.offsetWidth;
// //       const height = containerRef.current.offsetHeight;
// //       setDimensions({ width, height });

// //       // Center circles horizontally on resize
// //       setPositions(prev => 
// //         prev.map((pos, idx) => ({
// //           ...pos,
// //           x: width / 2 - pos.radius + (Math.random() * 100 - 50), // Center with slight random offset
// //         }))
// //       );
// //     };

// //     updateDimensions();
// //     window.addEventListener("resize", updateDimensions);
// //     return () => window.removeEventListener("resize", updateDimensions);
// //   }, []);

// //   // Activate cards one by one with delays
// //   useEffect(() => {
// //     if (startDelays.length === 0 || !isInitialAnimation) return;

// //     const timers = startDelays.map((delay, index) => {
// //       return setTimeout(() => {
// //         setPositions(prev => {
// //           const newPositions = [...prev];
// //           newPositions[index].active = true;
// //           newPositions[index].vy = 2 + Math.random() * 3; // Start with some downward velocity
// //           return newPositions;
// //         });
// //       }, delay);
// //     });

// //     // After all cards have started falling, disable initial animation mode
// //     const finalTimer = setTimeout(() => {
// //       setIsInitialAnimation(false);
// //     }, 4000);

// //     return () => {
// //       timers.forEach(timer => clearTimeout(timer));
// //       clearTimeout(finalTimer);
// //     };
// //   }, [startDelays, isInitialAnimation]);

// //   // Physics simulation loop
// //   useEffect(() => {
// //     if (dimensions.width === 0) return;

// //     let frameId;

// //     const updatePhysics = () => {
// //       setPositions(prev => {
// //         const newPositions = [...prev];

// //         // Update position and velocity for each circle
// //         for (let i = 0; i < newPositions.length; i++) {
// //           // Skip physics for circles being dragged or not yet active
// //           if (newPositions[i].dragging || (!newPositions[i].active && isInitialAnimation)) continue;

// //           // Apply gravity and update position
// //           newPositions[i].vy += gravity;
// //           newPositions[i].x += newPositions[i].vx;
// //           newPositions[i].y += newPositions[i].vy;

// //           // Apply friction
// //           newPositions[i].vx *= friction;
// //           newPositions[i].vy *= friction;

// //           // Calculate boundaries based on this circle's radius
// //           const radius = newPositions[i].radius;
// //           const maxX = dimensions.width - radius * 2;
// //           const maxY = dimensions.height - radius * 2;

// //           // Handle wall collisions
// //           if (newPositions[i].x > maxX) {
// //             newPositions[i].x = maxX;
// //             newPositions[i].vx *= -elasticity;
// //           } else if (newPositions[i].x < 0) {
// //             newPositions[i].x = 0;
// //             newPositions[i].vx *= -elasticity;
// //           }

// //           if (newPositions[i].y > maxY) {
// //             newPositions[i].y = maxY;
// //             newPositions[i].vy *= -elasticity;
// //           } else if (newPositions[i].y < 0) {
// //             newPositions[i].y = 0;
// //             newPositions[i].vy *= -elasticity;
// //           }

// //           // Check for collisions between circles
// //           for (let j = i + 1; j < newPositions.length; j++) {
// //             // Skip collision check if the other circle is not active yet
// //             if (!newPositions[j].active && isInitialAnimation) continue;

// //             const dx = newPositions[i].x - newPositions[j].x;
// //             const dy = newPositions[i].y - newPositions[j].y;
// //             const distance = Math.sqrt(dx * dx + dy * dy);

// //             // Combined radius for collision detection
// //             const combinedRadius = newPositions[i].radius + newPositions[j].radius;

// //             if (distance < combinedRadius) {
// //               // Calculate collision response
// //               const angle = Math.atan2(dy, dx);
// //               const sin = Math.sin(angle);
// //               const cos = Math.cos(angle);

// //               // Rotate velocities to collision axis
// //               const vx1 = newPositions[i].vx * cos + newPositions[i].vy * sin;
// //               const vy1 = newPositions[i].vy * cos - newPositions[i].vx * sin;
// //               const vx2 = newPositions[j].vx * cos + newPositions[j].vy * sin;
// //               const vy2 = newPositions[j].vy * cos - newPositions[j].vx * sin;

// //               // Exchange velocities along collision axis
// //               const finalVx1 = vx2;
// //               const finalVx2 = vx1;

// //               // Rotate velocities back
// //               newPositions[i].vx = finalVx1 * cos - vy1 * sin;
// //               newPositions[i].vy = vy1 * cos + finalVx1 * sin;
// //               newPositions[j].vx = finalVx2 * cos - vy2 * sin;
// //               newPositions[j].vy = vy2 * cos + finalVx2 * sin;

// //               // Push circles apart to prevent overlap
// //               const overlap = combinedRadius - distance;
// //               const pushX = (overlap / 2) * cos;
// //               const pushY = (overlap / 2) * sin;

// //               if (!newPositions[i].dragging) {
// //                 newPositions[i].x += pushX;
// //                 newPositions[i].y += pushY;
// //               }
// //               if (!newPositions[j].dragging) {
// //                 newPositions[j].x -= pushX;
// //                 newPositions[j].y -= pushY;
// //               }
// //             }
// //           }
// //         }
// //         return newPositions;
// //       });

// //       frameId = requestAnimationFrame(updatePhysics);
// //     };

// //     frameId = requestAnimationFrame(updatePhysics);
// //     return () => cancelAnimationFrame(frameId);
// //   }, [dimensions, isDragging, isInitialAnimation]);

// //   // Spring animations for smooth movement
// //   const springs = useSprings(
// //     projects.length,
// //     positions.map(({ x, y, dragging, active, radius }, i) => ({
// //       transform: `translate3d(${x}px, ${y}px, 0)`,
// //       opacity: active || !isInitialAnimation ? 1 : 0,
// //       width: `${radius * 2}px`,
// //       height: `${radius * 2}px`,
// //       config: dragging
// //         ? { mass: 1, tension: 500, friction: 10 } // Responsive when dragging
// //         : { mass: projects[i].size > 170 ? 2 : 1, tension: 180, friction: 24 }, // Smoother movement with size-based mass
// //     }))
// //   );

// //   // Drag handler
// //   const bind = useDrag(
// //     ({ args: [index], active, velocity: [vx, vy], first, last, xy, movement }) => {
// //       if (isInitialAnimation) return; // Prevent dragging during initial animation

// //       if (first) {
// //         setIsDragging(true);
// //         setPositions(prev => {
// //           const updated = [...prev];
// //           updated[index].dragging = true;
// //           updated[index].vx = 0;
// //           updated[index].vy = 0;
// //           return updated;
// //         });
// //       }

// //       if (active) {
// //         setPositions(prev => {
// //           const updated = [...prev];
// //           const radius = updated[index].radius;
// //           const newX = xy[0] - radius;
// //           const newY = xy[1] - radius;

// //           // Keep within bounds
// //           const maxX = dimensions.width - radius * 2;
// //           const maxY = dimensions.height - radius * 2;

// //           // Apply smooth movement based on bubble size
// //           // Larger bubbles move a bit more heavily
// //           const sizeMultiplier = 1 - ((projects[index].size - 130) / 300); // 1.0 to 0.77

// //           updated[index].x = Math.max(0, Math.min(newX, maxX));
// //           updated[index].y = Math.max(0, Math.min(newY, maxY));
// //           return updated;
// //         });
// //       }

// //       if (last) {
// //         setIsDragging(false);
// //         setPositions(prev => {
// //           const updated = [...prev];
// //           updated[index].dragging = false;

// //           // Apply velocity from drag gesture - based on bubble size
// //           // Larger bubbles have more momentum
// //           const sizeMultiplier = projects[index].size / 130; // 1.0 to ~1.54

// //           updated[index].vx = vx * 0.3 * sizeMultiplier;
// //           updated[index].vy = vy * 0.3 * sizeMultiplier;
// //           return updated;
// //         });
// //       }
// //     }
// //   );

// //   // Fade in animation for container
// //   const containerAnimation = useSpring({
// //     from: { opacity: 0 },
// //     to: { opacity: 1 },
// //     config: { duration: 0 },
// //   });

// //   return (
// //     <animated.div className="hero-section" style={containerAnimation}>
// //       <div className="content"> 
// //         {/* <img src={googlerank} className="googlerank" alt="" /> */}
// //         <img src={content} className="contenttxt" alt="" />
// //       </div>
// //       <div className="circle-container" ref={containerRef}>
// //         {springs.map((style, i) => (
// //           <animated.div
// //             key={i}
// //             {...bind(i)}
// //             className="project-circle"
// //             style={{
// //               ...style,
// //               backgroundImage: `url(${projects[i].image})`,
// //               cursor: isInitialAnimation ? "default" : "grab",
// //               borderRadius: "50%", // Ensure circles remain round
// //               zIndex: positions[i].dragging ? 100 : 10, // Bring dragged items to front
// //               filter: `brightness(${positions[i].dragging ? 1.1 : 1})`, // Subtle effect when dragging
// //               scale: positions[i].dragging ? 1.02 : 1, // Slight scale when dragging
// //             }}
// //           >
// //             <div className="project-info">
// //               <h3>{projects[i].title}</h3>
// //             </div>
// //           </animated.div>
// //         ))}
// //       </div>
// //     </animated.div>
// //   );
// // };

// // export default HeroSection;

// import React, { useState, useEffect, useRef } from "react";
// import { useSprings, animated, useSpring } from "@react-spring/web";
// import { useDrag } from "@use-gesture/react";
import "../../styles/Hero.scss";
// import Projectimg1 from "../../assets/Akoyaheroimg.webp";
// import Projectimg2 from "../../assets/Bosch/Boschimg.webp";
// import Projectimg3 from "../../assets/BMS/BMSimg.webp";
// import Projectimg4 from "../../assets/Lokneta/lokneta.webp";
// import Projectimg5 from "../../assets/Bakers/Bakers.webp";
// import googlerank from "./images/googlerank.png"
import txt from "./images/content.png"
import bubble1 from "./images/bubble1.png"
import bubble2 from "./images/bubble2.png"
import bubble3 from "./images/bubble3.png"
import bubble4 from "./images/bubble4.png"
import bubble5 from "./images/bubble5.png"
import bubble6 from "./images/bubble6.png"
import bubble7 from "./images/bubble7.png"
import bubble8 from "./images/bubble8.png"
import bubble9 from "./images/bubble9.png"
import bubble10 from "./images/bubble10.png"
import bubble11 from "./images/bubble11.png"
import bubble12 from "./images/bubble12.png"


// // Generate random size between 130 and 200 for each project
// const generateRandomSize = () => Math.floor(Math.random() * 71) + 130; // 130 to 200

// const projects = [
//   { title: "Project 1", image: bubble1, size: generateRandomSize() },
//   { title: "Project 2", image: bubble2, size: generateRandomSize() },
//   { title: "Project 3", image: bubble3, size: generateRandomSize() },
//   { title: "Project 4", image: bubble4, size: generateRandomSize() },
//   { title: "Project 5", image: bubble5, size: generateRandomSize() },
//   { title: "Project 1", image: bubble6, size: generateRandomSize() },
//   { title: "Project 2", image: bubble7, size: generateRandomSize() },
//   // { title: "Project 3", image: bubble8, size: generateRandomSize() },
//   // { title: "Project 4", image: bubble9, size: generateRandomSize() },
//   { title: "Project 5", image: bubble10, size: generateRandomSize() },
//   { title: "Project 5", image: bubble11, size: generateRandomSize() },
//   { title: "Project 5", image: bubble12, size: generateRandomSize() },
//   { title: "Project 5", image: bubble13, size: generateRandomSize() },
//   { title: "Project 5", image: bubble14, size: generateRandomSize() },
//   { title: "Project 5", image: bubble15, size: generateRandomSize() },
// ];

// // Shuffle array function to randomize fall order
// const shuffleArray = (array) => {
//   const newArray = [...array];
//   for (let i = newArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//   }
//   return newArray;
// };

// const HeroSection = () => {
//   const containerRef = useRef(null);
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [isInitialAnimation, setIsInitialAnimation] = useState(true);
//   const [startDelays, setStartDelays] = useState([]);

//   // Physics constants - adjusted for larger bubbles
//   const friction = 0.96;
//   const elasticity = 0.8;
//   const gravity = 0.35;

//   // Initialize positions with all cards at top center, but with random delays
//   const [positions, setPositions] = useState(() => 
//     projects.map((project, i) => ({
//       x: 0, // Will be centered later when dimensions are known
//       y: -300, // Start above the viewport
//       vx: (Math.random() * 0.6) - 0.3, // Small random horizontal velocity
//       vy: 0, // Start with no vertical velocity
//       dragging: false,
//       active: false, // Cards start inactive and become active based on their delay
//       radius: project.size / 2, // Half of the size for radius calculation
//     }))
//   );

//   // Generate random start times spread over 10 seconds
//   useEffect(() => {
//     const indices = Array.from({ length: projects.length }, (_, i) => i);
//     const shuffled = shuffleArray(indices);

//     // Create delays that span across 10 seconds
//     const delays = shuffled.map((_, i) => {
//       return Math.random() * 1000; // Random delay between 0-1 seconds
//     });

//     setStartDelays(delays);
//   }, []);

//   // Update dimensions when component mounts or window resizes
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const updateDimensions = () => {
//       const width = containerRef.current.offsetWidth;
//       const height = containerRef.current.offsetHeight;
//       setDimensions({ width, height });

//       // Center circles horizontally on resize
//       setPositions(prev => 
//         prev.map((pos, idx) => ({
//           ...pos,
//           x: width / 2 - pos.radius + (Math.random() * 100 - 50), // Center with slight random offset
//         }))
//       );
//     };

//     updateDimensions();
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, []);

//   // Activate cards one by one with delays
//   useEffect(() => {
//     if (startDelays.length === 0 || !isInitialAnimation) return;

//     const timers = startDelays.map((delay, index) => {
//       return setTimeout(() => {
//         setPositions(prev => {
//           const newPositions = [...prev];
//           newPositions[index].active = true;
//           newPositions[index].vy = 2 + Math.random() * 3; // Start with some downward velocity
//           return newPositions;
//         });
//       }, delay);
//     });

//     // After all cards have started falling, disable initial animation mode
//     const finalTimer = setTimeout(() => {
//       setIsInitialAnimation(false);
//     }, 4000);

//     return () => {
//       timers.forEach(timer => clearTimeout(timer));
//       clearTimeout(finalTimer);
//     };
//   }, [startDelays, isInitialAnimation]);

//   // Physics simulation loop
//   useEffect(() => {
//     if (dimensions.width === 0) return;

//     let frameId;

//     const updatePhysics = () => {
//       setPositions(prev => {
//         const newPositions = [...prev];

//         // Update position and velocity for each circle
//         for (let i = 0; i < newPositions.length; i++) {
//           // Skip physics for circles being dragged or not yet active
//           if (newPositions[i].dragging || (!newPositions[i].active && isInitialAnimation)) continue;

//           // Apply gravity and update position
//           newPositions[i].vy += gravity;
//           newPositions[i].x += newPositions[i].vx;
//           newPositions[i].y += newPositions[i].vy;

//           // Apply friction
//           newPositions[i].vx *= friction;
//           newPositions[i].vy *= friction;

//           // Calculate boundaries based on this circle's radius
//           const radius = newPositions[i].radius;
//           const maxX = dimensions.width - radius * 2;
//           const maxY = dimensions.height - radius * 2;

//           // Handle wall collisions
//           if (newPositions[i].x > maxX) {
//             newPositions[i].x = maxX;
//             newPositions[i].vx *= -elasticity;
//           } else if (newPositions[i].x < 0) {
//             newPositions[i].x = 0;
//             newPositions[i].vx *= -elasticity;
//           }

//           if (newPositions[i].y > maxY) {
//             newPositions[i].y = maxY;
//             newPositions[i].vy *= -elasticity;
//           } else if (newPositions[i].y < 0) {
//             newPositions[i].y = 0;
//             newPositions[i].vy *= -elasticity;
//           }

//           // Check for collisions between circles
//           for (let j = i + 1; j < newPositions.length; j++) {
//             // Skip collision check if the other circle is not active yet
//             if (!newPositions[j].active && isInitialAnimation) continue;

//             const dx = newPositions[i].x - newPositions[j].x;
//             const dy = newPositions[i].y - newPositions[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);

//             // Combined radius for collision detection
//             const combinedRadius = newPositions[i].radius + newPositions[j].radius;

//             if (distance < combinedRadius) {
//               // Calculate collision response
//               const angle = Math.atan2(dy, dx);
//               const sin = Math.sin(angle);
//               const cos = Math.cos(angle);

//               // Rotate velocities to collision axis
//               const vx1 = newPositions[i].vx * cos + newPositions[i].vy * sin;
//               const vy1 = newPositions[i].vy * cos - newPositions[i].vx * sin;
//               const vx2 = newPositions[j].vx * cos + newPositions[j].vy * sin;
//               const vy2 = newPositions[j].vy * cos - newPositions[j].vx * sin;

//               // Exchange velocities along collision axis
//               const finalVx1 = vx2;
//               const finalVx2 = vx1;

//               // Rotate velocities back
//               newPositions[i].vx = finalVx1 * cos - vy1 * sin;
//               newPositions[i].vy = vy1 * cos + finalVx1 * sin;
//               newPositions[j].vx = finalVx2 * cos - vy2 * sin;
//               newPositions[j].vy = vy2 * cos + finalVx2 * sin;

//               // Push circles apart to prevent overlap
//               const overlap = combinedRadius - distance;
//               const pushX = (overlap / 2) * cos;
//               const pushY = (overlap / 2) * sin;

//               if (!newPositions[i].dragging) {
//                 newPositions[i].x += pushX;
//                 newPositions[i].y += pushY;
//               }
//               if (!newPositions[j].dragging) {
//                 newPositions[j].x -= pushX;
//                 newPositions[j].y -= pushY;
//               }
//             }
//           }
//         }
//         return newPositions;
//       });

//       frameId = requestAnimationFrame(updatePhysics);
//     };

//     frameId = requestAnimationFrame(updatePhysics);
//     return () => cancelAnimationFrame(frameId);
//   }, [dimensions, isDragging, isInitialAnimation]);

//   // Spring animations for smooth movement
//   const springs = useSprings(
//     projects.length,
//     positions.map(({ x, y, dragging, active, radius }, i) => ({
//       transform: `translate3d(${x}px, ${y}px, 0)`,
//       opacity: active || !isInitialAnimation ? 1 : 0,
//       width: `${radius * 2}px`,
//       height: `${radius * 2}px`,
//       config: dragging
//         ? { mass: 1, tension: 500, friction: 10 } // Responsive when dragging
//         : { mass: projects[i].size > 170 ? 2 : 1, tension: 180, friction: 24 }, // Smoother movement with size-based mass
//     }))
//   );

//   // Drag handler
//   const bind = useDrag(
//     ({ args: [index], active, velocity: [vx, vy], first, last, xy, movement }) => {
//       if (isInitialAnimation) return; // Prevent dragging during initial animation

//       if (first) {
//         setIsDragging(true);
//         setPositions(prev => {
//           const updated = [...prev];
//           updated[index].dragging = true;
//           updated[index].vx = 0;
//           updated[index].vy = 0;
//           return updated;
//         });
//       }

//       if (active) {
//         setPositions(prev => {
//           const updated = [...prev];
//           const radius = updated[index].radius;
//           const newX = xy[0] - radius;
//           const newY = xy[1] - radius;

//           // Keep within bounds
//           const maxX = dimensions.width - radius * 2;
//           const maxY = dimensions.height - radius * 2;

//           // Apply smooth movement based on bubble size
//           // Larger bubbles move a bit more heavily
//           const sizeMultiplier = 1 - ((projects[index].size - 130) / 300); // 1.0 to 0.77

//           updated[index].x = Math.max(0, Math.min(newX, maxX));
//           updated[index].y = Math.max(0, Math.min(newY, maxY));
//           return updated;
//         });
//       }

//       if (last) {
//         setIsDragging(false);
//         setPositions(prev => {
//           const updated = [...prev];
//           updated[index].dragging = false;

//           // Apply velocity from drag gesture - based on bubble size
//           // Larger bubbles have more momentum
//           const sizeMultiplier = projects[index].size / 130; // 1.0 to ~1.54

//           updated[index].vx = vx * 0.3 * sizeMultiplier;
//           updated[index].vy = vy * 0.3 * sizeMultiplier;
//           return updated;
//         });
//       }
//     }
//   );

//   // Fade in animation for container
//   const containerAnimation = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: { duration: 0 },
//   });

//   return (
//     <animated.div className="hero-section" style={containerAnimation}>
//       <div className="content"> 
//         {/* <img src={googlerank} className="googlerank" alt="" /> */}
//         <img src={content} className="contenttxt" alt="" />
//       </div>
//       <div className="circle-container" ref={containerRef}>
//         {springs.map((style, i) => (
//           <animated.div
//             key={i}
//             {...bind(i)}
//             className="project-circle"
//             style={{
//               ...style,
//               backgroundImage: `url(${projects[i].image})`,
//               cursor: isInitialAnimation ? "default" : "grab",
//               borderRadius: "50%", // Ensure circles remain round
//               zIndex: positions[i].dragging ? 100 : 10, // Bring dragged items to front
//               filter: `brightness(${positions[i].dragging ? 1.1 : 1})`, // Subtle effect when dragging
//               scale: positions[i].dragging ? 1.02 : 1, // Slight scale when dragging
//             }}
//           >
//             <div className="project-info">
//               <h3>{projects[i].title}</h3>
//             </div>
//           </animated.div>
//         ))}
//       </div>
//     </animated.div>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect, useRef } from "react";
import { useSprings, animated, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { Link } from "react-router-dom";
// Bubble configs based on screen size
const bubbleConfigs = {
  desktop: { count: 12, sizeRange: [130, 200] },
  tablet: { count: 9, sizeRange: [100, 160] },
  mobile: { count: 8, sizeRange: [80, 120] },
};

// Get screen size type
const getScreenSize = (width) => {
  if (width >= 1024) return 'desktop';
  if (width >= 768) return 'tablet';
  return 'mobile';
};

// Placeholder for bubble images (replace with your actual images)
const bubbleImages = [
  bubble1, bubble2, bubble3, bubble4, bubble5, bubble6, bubble7, bubble8, bubble9 ,bubble10,bubble11,bubble12
];

// Shuffle array function to randomize fall order
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Function to generate bubbles
const generateBubbles = (count, sizeRange) => {
  const [minSize, maxSize] = sizeRange;
  const bubbles = [];

  for (let i = 0; i < count; i++) {
    const size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
    const image = bubbleImages[i % bubbleImages.length];
    bubbles.push({ id: i, size, image });
  }

  return bubbles;
};

const BubbleAnimation = () => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isInitialAnimation, setIsInitialAnimation] = useState(true);
  const [startDelays, setStartDelays] = useState([]);

  // Get current screen size
  const [screenSize, setScreenSize] = useState('desktop');
  const [bubbles, setBubbles] = useState([]);

  // Physics constants
  const friction = 0.96;
  const elasticity = 0.8;
  const gravity = 0.35;

  // Update screen size and regenerate bubbles when window resizes
  useEffect(() => {
    const handleResize = () => {
      const newScreenSize = getScreenSize(window.innerWidth);
      if (newScreenSize !== screenSize) {
        setScreenSize(newScreenSize);
        const newBubbles = generateBubbles(
          bubbleConfigs[newScreenSize].count,
          bubbleConfigs[newScreenSize].sizeRange
        );
        setBubbles(newBubbles);

        // Reset positions when screen size changes
        setPositions(newBubbles.map((bubble) => ({
          x: 0,
          y: -300,
          vx: (Math.random() * 0.6) - 0.3,
          vy: 0,
          dragging: false,
          active: false,
          radius: bubble.size / 2,
        })));

        // Reset animation state
        setIsInitialAnimation(true);

        // Generate new delays
        const indices = Array.from({ length: newBubbles.length }, (_, i) => i);
        const shuffled = shuffleArray(indices);
        const delays = shuffled.map(() => Math.random() * 1000);
        setStartDelays(delays);
      }

      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        setDimensions({ width, height });
      }
    };

    // Initial setup
    const initialScreenSize = getScreenSize(window.innerWidth);
    setScreenSize(initialScreenSize);
    const initialBubbles = generateBubbles(
      bubbleConfigs[initialScreenSize].count,
      bubbleConfigs[initialScreenSize].sizeRange
    );
    setBubbles(initialBubbles);

    // Add resize listener
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize positions when bubbles change
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    if (bubbles.length > 0) {
      setPositions(bubbles.map((bubble) => ({
        x: 0,
        y: -300,
        vx: (Math.random() * 0.6) - 0.3,
        vy: 0,
        dragging: false,
        active: false,
        radius: bubble.size / 2,
      })));

      // Generate initial delays
      const indices = Array.from({ length: bubbles.length }, (_, i) => i);
      const shuffled = shuffleArray(indices);
      const delays = shuffled.map(() => Math.random() * 1000);
      setStartDelays(delays);
    }
  }, [bubbles]);

  // Update dimensions when component mounts or window resizes
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      setDimensions({ width, height });

      // Center circles horizontally on resize
      setPositions(prev =>
        prev.map((pos) => ({
          ...pos,
          x: width / 2 - pos.radius + (Math.random() * 100 - 50), // Center with slight random offset
        }))
      );
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Activate bubbles one by one with delays
  useEffect(() => {
    if (startDelays.length === 0 || !isInitialAnimation || bubbles.length === 0) return;

    const timers = startDelays.map((delay, index) => {
      return setTimeout(() => {
        setPositions(prev => {
          if (index >= prev.length) return prev;

          const newPositions = [...prev];
          newPositions[index].active = true;
          newPositions[index].vy = 2 + Math.random() * 3; // Start with some downward velocity
          return newPositions;
        });
      }, delay);
    });

    // After all bubbles have started falling, disable initial animation mode
    const finalTimer = setTimeout(() => {
      setIsInitialAnimation(false);
    }, 4000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearTimeout(finalTimer);
    };
  }, [startDelays, isInitialAnimation, bubbles]);

  // Physics simulation loop
  useEffect(() => {
    if (dimensions.width === 0 || positions.length === 0) return;

    let frameId;

    const updatePhysics = () => {
      setPositions(prev => {
        const newPositions = [...prev];

        // Update position and velocity for each bubble
        for (let i = 0; i < newPositions.length; i++) {
          // Skip physics for bubbles being dragged or not yet active
          if (newPositions[i].dragging || (!newPositions[i].active && isInitialAnimation)) continue;

          // Apply gravity and update position
          newPositions[i].vy += gravity;
          newPositions[i].x += newPositions[i].vx;
          newPositions[i].y += newPositions[i].vy;

          // Apply friction
          newPositions[i].vx *= friction;
          newPositions[i].vy *= friction;

          // Calculate boundaries based on this bubble's radius
          const radius = newPositions[i].radius;
          const maxX = dimensions.width - radius * 2;
          const maxY = dimensions.height - radius * 2;

          // Handle wall collisions
          if (newPositions[i].x > maxX) {
            newPositions[i].x = maxX;
            newPositions[i].vx *= -elasticity;
          } else if (newPositions[i].x < 0) {
            newPositions[i].x = 0;
            newPositions[i].vx *= -elasticity;
          }

          if (newPositions[i].y > maxY) {
            newPositions[i].y = maxY;
            newPositions[i].vy *= -elasticity;
          } else if (newPositions[i].y < 0) {
            newPositions[i].y = 0;
            newPositions[i].vy *= -elasticity;
          }

          // Check for collisions between bubbles
          for (let j = i + 1; j < newPositions.length; j++) {
            // Skip collision check if the other bubble is not active yet
            if (!newPositions[j].active && isInitialAnimation) continue;

            const dx = newPositions[i].x - newPositions[j].x;
            const dy = newPositions[i].y - newPositions[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Combined radius for collision detection
            const combinedRadius = newPositions[i].radius + newPositions[j].radius;

            if (distance < combinedRadius) {
              // Calculate collision response
              const angle = Math.atan2(dy, dx);
              const sin = Math.sin(angle);
              const cos = Math.cos(angle);

              // Rotate velocities to collision axis
              const vx1 = newPositions[i].vx * cos + newPositions[i].vy * sin;
              const vy1 = newPositions[i].vy * cos - newPositions[i].vx * sin;
              const vx2 = newPositions[j].vx * cos + newPositions[j].vy * sin;
              const vy2 = newPositions[j].vy * cos - newPositions[j].vx * sin;

              // Exchange velocities along collision axis
              const finalVx1 = vx2;
              const finalVx2 = vx1;

              // Rotate velocities back
              newPositions[i].vx = finalVx1 * cos - vy1 * sin;
              newPositions[i].vy = vy1 * cos + finalVx1 * sin;
              newPositions[j].vx = finalVx2 * cos - vy2 * sin;
              newPositions[j].vy = vy2 * cos + finalVx2 * sin;

              // Push bubbles apart to prevent overlap
              const overlap = combinedRadius - distance;
              const pushX = (overlap / 2) * cos;
              const pushY = (overlap / 2) * sin;

              if (!newPositions[i].dragging) {
                newPositions[i].x += pushX;
                newPositions[i].y += pushY;
              }
              if (!newPositions[j].dragging) {
                newPositions[j].x -= pushX;
                newPositions[j].y -= pushY;
              }
            }
          }
        }
        return newPositions;
      });

      frameId = requestAnimationFrame(updatePhysics);
    };

    frameId = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(frameId);
  }, [dimensions, isDragging, isInitialAnimation, positions.length]);

  // Spring animations for smooth movement
  const springs = useSprings(
    positions.length,
    positions.map(({ x, y, dragging, active, radius }, i) => ({
      transform: `translate3d(${x}px, ${y}px, 0)`,
      opacity: active || !isInitialAnimation ? 1 : 0,
      width: `${radius * 2}px`,
      height: `${radius * 2}px`,
      config: dragging
        ? { mass: 1, tension: 500, friction: 10 } // Responsive when dragging
        : { mass: bubbles[i]?.size > 170 ? 2 : 1, tension: 180, friction: 24 }, // Smoother movement with size-based mass
    }))
  );

  // Drag handler
  const bind = useDrag(
    ({ args: [index], active, velocity: [vx, vy], first, last, xy }) => {
      if (isInitialAnimation) return; // Prevent dragging during initial animation

      if (first) {
        setIsDragging(true);
        setPositions(prev => {
          const updated = [...prev];
          updated[index].dragging = true;
          updated[index].vx = 0;
          updated[index].vy = 0;
          return updated;
        });
      }

      if (active) {
        setPositions(prev => {
          const updated = [...prev];
          const radius = updated[index].radius;
          const newX = xy[0] - radius;
          const newY = xy[1] - radius;

          // Keep within bounds
          const maxX = dimensions.width - radius * 2;
          const maxY = dimensions.height - radius * 2;

          updated[index].x = Math.max(0, Math.min(newX, maxX));
          updated[index].y = Math.max(0, Math.min(newY, maxY));
          return updated;
        });
      }

      if (last) {
        setIsDragging(false);
        setPositions(prev => {
          const updated = [...prev];
          updated[index].dragging = false;

          // Apply velocity from drag gesture - based on bubble size
          // Larger bubbles have more momentum
          const sizeMultiplier = bubbles[index]?.size / 100; // Adjust momentum based on size

          updated[index].vx = vx * 0.3 * sizeMultiplier;
          updated[index].vy = vy * 0.3 * sizeMultiplier;
          return updated;
        });
      }
    }
  );

  // Fade in animation for container
  const containerAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 800 },
  });

  return (
    <animated.div className="bubble-container "
      style={{
        ...containerAnimation,
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f0f0f0"
      }}
    >
     <div className="contentTxt">
      <h1> Elevating brands through design precision and digital brilliance—Haraay, the choice of industry leaders.</h1>
      <p>Haraay Design Studio – Redefining digital excellence with be spoke design solutions that empower visionary brands to thrive</p>
      <div className="btnDiv"><Link to={"/works"} className="filledButton" >Explore Work</Link><Link className="emptyButton" to={"/expertise"}>See All Services</Link></div>
     </div>
     
      {/* <img src={txt} alt="" className="txt" /> */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
      >
        {springs.map((style, i) => (
          bubbles[i] && (
            <animated.div
              key={i}
              {...bind(i)}
              style={{
                ...style,
                position: "absolute",
                backgroundImage: `url(${bubbles[i].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: isInitialAnimation ? "default" : "grab",
                borderRadius: "50%",
                zIndex: positions[i]?.dragging ? 100 : 10,
                filter: `brightness(${positions[i]?.dragging ? 1.1 : 1})`,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
              }}
            >
              {/* {i + 1} */}
            </animated.div>
          )
        ))}
      </div>
    </animated.div>
  );
};

export default BubbleAnimation;