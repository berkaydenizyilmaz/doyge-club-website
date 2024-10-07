import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projelerimiz | Dijital Oyun Geliştiricileri Kulübü</title>
        <meta
          name="description"
          content="Dijital Oyun Geliştiricileri Kulübü'nün projelerini keşfedin. Geliştirdiğimiz oyunlar, yazılım projeleri ve daha fazlası hakkında bilgi edinin."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="dijital oyun, yazılım projeleri, oyun geliştirme, DOYGE, Amasya Üniversitesi projeleri"
        />
        <meta
          property="og:title"
          content="Projelerimiz | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          property="og:description"
          content="Dijital Oyun Geliştiricileri Kulübü tarafından geliştirilen projeler ve oyunlar hakkında bilgi alın."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://audoyge.vercel.app/projeler" />
        <meta
          name="twitter:title"
          content="Projelerimiz | Dijital Oyun Geliştiricileri Kulübü"
        />
        <meta
          name="twitter:description"
          content="Dijital Oyun Geliştiricileri Kulübü'nün projelerini inceleyin."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Projelerimiz</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-purple-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={project.mainImg}
                alt={project.title}
                width={500}
                height={300}
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
    </>
  );
};

export default ProjectsPage;
