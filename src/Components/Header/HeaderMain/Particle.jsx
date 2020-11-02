import React from 'react';
import Particles from 'react-particles-js';
const curParams = [
    // 0
    {
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 3
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    },
    // 1
    {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 10,
                "random": true
            },
            "move": {
                "direction": "bottom",
                "out_mode": "out"
            },
            "line_linked": {
                "enable": false
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "remove"
                }
            },
            "modes": {
                "remove": {
                    "particles_nb": 10
                }
            }
        }
    },
    // 2
    {
        "particles": {
            "number": {
                "value": 8,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "speed": 1,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image",
                    "circle"
                ],
                "image": [
                    {
                        "src": "/react.cd2ab268.svg",
                        "height": 20,
                        "width": 23
                    },
                    {
                        "src": "/k8s.2d579d24.svg",
                        "height": 20,
                        "width": 20
                    },
                    {
                        "src": "/code.b3b4c4f4.png",
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 10,
                    "sync": false
                }
            }
        },
        "retina_detect": false
    },
    // 3
    {
        particles: {
          number: {
            value: 150,
          },
          size: {
            value: 1.5,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      },
    // 4
    {
        polygon: {
            enable: true,
            type: 'inside',
            move: {
                radius: 100
            },
            url: 'path/to/svg.svg'
        }
    },
    // 5
    {
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#c311e7", "#b8e986", "#4dc9ff", "#c70e67", "#FF7E79"]
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.9,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 30,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 80,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 150,
              duration: 1
            },
            push: {
              particles_nb: 3
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
    },
    // 7
    {
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	},
]
const Particle = ({particleParams}) => {
    let param;
    if(particleParams === "headerMain"){
        param = curParams[1];
    }else if(particleParams === "projects"){
      param = curParams[5];
    }else{
      param = curParams[6];
    }
    return (
        <Particles
      // canvasClassName="example"
            height={`${param==='headerMain' ? '100vh' : "fitContent"}`}
            width="100%"
            params={param} />
    );
};

export default Particle;