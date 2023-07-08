import React, { Suspense } from "react";

type Project = {
  id: number;
  name: string;
  src: string;
  description: string;
};

function projectList() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Messika",
      src: require("../../../asset/Messika.jpg"),
      description:
        "Shooting photos pour la marque française de joaillerie Messika",
    },
    {
      id: 2,
      name: "Melissa",
      src: require("../../../asset/Melissa.jpg"),
      description:
        "Shooting photos et vidéo pour l’influenceuse et modele Melissa (138 k)",
    },
    {
      id: 3,
      name: "Babee",
      src: require("../../../asset/Babee.jpg"),
      description:
        "Shooting photos et vidéo pour la marque sportwear Babee avec l’influenceuse Adixia (2,2 M)",
    },
    {
      id: 4,
      name: "Your Futur",
      src: require("../../../asset/psg.jpg"),
      description: "Photos pour l’événement Your Futur au Parc des Princes ",
    },
    {
      id: 5,
      name: "Inesa",
      src: require("../../../asset/Inesa.jpg"),
      description:
        "Shooting photos et vidéo pour l’influenceuse et modèle Inesa ",
    },
    {
      id: 6,
      name: "Nicolas",
      src: require("../../../asset/Nicolas.jpg"),
      description:
        "Photos et vidéo pour le dj Nicolas Franza lors d’un festival CCE sur 4 jours",
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col md:px-[100px] px-3 md:mb-[160px] mb-3">
      <div
        id="PROJECT"
        className="font-black md:text-4xl text-3xl not-italic font-poppins text-white tracking-[0.06em] md:mb-[80px] mb-3"
      >
        &clubs; PROJECT
      </div>
      <div className="flex w-full h-full justify-center mt-3">
        <div className="flex flex-row gap-4 overflow-auto overflow-x-auto overflow-hidden hide-scroll-bar snap-x scroll-smooth">
          {projects.map((project) => (
            <div className="inline-block px-3">
              <div
                className="w-[300px] h-[500px] snap-center max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl relative group transition-shadow duration-300 ease-in-out flex items-center flex-col"
                key={project.id}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <img
                    className="w-full h-[90%] rounded-md object-cover group-hover:opacity-50 transition-all duration-300"
                    src={project.src}
                    color="white"
                    loading="lazy"
                  />
                </Suspense>

                <div className="flex flex-col text-center gap-y-3 group-hover:absolute group-hover:top-[40%] transform transition-all duration-700 delay-300">
                  <div className="Inter text-xl text-white mt-3 group-hover:mt-0">
                    {project.name}
                  </div>
                  <div className="Inter text-xl text-white hidden group-hover:flex transition-all  transform duration-700 delay-300">
                    {project.description}‘
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default projectList;
