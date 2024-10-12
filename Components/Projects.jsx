import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={project.image} alt={project.title} className="project-image img-fluid" />
      <div className="project-overlay">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  const sliderRef = useRef(null);

  const projects = [
    {
      title: 'Proyecto 1',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMYfd5_AkjKerAVMCatKRaVwp6Vgi7A95ULc7rh-eeXmQMBobjHnaief9cCGlqyRQ-CmP1p0JtIoeWoye8jON7IIsnJ0Ar9i2qrl_PSv1iEJwf8pkfkYD_8nW4kZT_NM4mGfIAlre7ZS0Txt-ZJatk=w1862-h930-s-no-gm?authuser=0',
      description: 'Descripción detallada del Proyecto 1.',
      link: ''
    },
    {
      title: 'Proyecto 2',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczNeyPNYt5v_E6moHP1_BFSFzsKg606RAIBt0SygnUYMjGpKVdfEi2snZrtwS8LeIBbuqtCLLVOWd1qFt1VlHBoK1YZNdxqjuT1jcsar-wwqQZ739By6UBwj6aBMy1P84yaULk3ios5djPWG2d05KvQ=w1861-h931-s-no-gm?authuser=0',
      description: 'Descripción detallada del Proyecto 2.',
      link: ''
    },
    {
      title: 'Proyecto 3',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMcibpffH4gSDkVjRRixxZqHRnYqQ2qM2hAxVEZkTqJqXrvB07lEmpQw_ZggcsbJvhM3ol_1BWB2-B0ywlp8xRx3mrmtnuQC57h7Ml3yZEwk2qT7z-tVWowpQip44I7DGGhILaFlbcWAE_nZw0CFA0=w1863-h927-s-no-gm?authuser=0',
      description: 'Descripción detallada del Proyecto 3.',
      link: ''
    },
    {
      title: 'Proyecto 4',
      image: 'https://lh3.googleusercontent.com/pw/AP1GczM6zU2_CBLQUpvmxiTO5YvXmb10LFS4YwxKzGUm__L11OmbO7z-6sUZIp8WyIt2PptrpUr_ZQkLbpIfbMN561Cleud5PxL9Um49MoSwbuOLRTVegA9bHmeXCQq5eXSQMYS_IBC8ik0pcRgZVsWTEOE=w1857-h850-s-no-gm?authuser=0',
      description: 'Descripción detallada del Proyecto 4.',
      link: ''
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projectos div">
      <h1 className="text-center card-title">Mis Proyectos</h1>
      <div className="na container-fluid">
        <Slider {...settings} ref={sliderRef}>
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
        <div className="carousel-buttons text-center mt-4 container-fluid">
          <button className="btn carousel-prev"onClick={() => sliderRef.current.slickPrev()}>←</button>
          <button className="btn carousel-next"onClick={() => sliderRef.current.slickNext()}>→</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
