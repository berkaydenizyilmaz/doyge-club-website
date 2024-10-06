import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Projelerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-purple-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.mainImg}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
            <p className="mt-2">{project.shortDescription}</p>
            <Link href={`/projeler/${project.id}`} passHref>
              <Button className="bg-purple-400 text-purple-900 font-semibold hover:bg-purple-600 hover:text-purple-100 transition mt-4 py-2 px-4 rounded-lg">
                Proje Detayı
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
