"use client";

import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface ProjectDetailsProps {
  params: {
    slug: string[];
  };
}

const ProjectDetail = ({ params }: ProjectDetailsProps) => {
  // Proje verilerini bul
  const project = projects.find((project) => project.id === params.slug[0]);

  if (!project) {
    return (
      <p className="h-screen text-center text-5xl py-32">Proje bulunamadı.</p>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Dijital Oyun Geliştiricileri Kulübü</title>
        <meta
          name="description"
          content={`${project.title} hakkında detaylı bilgi edinin. Projenin teknik detayları, özellikleri ve proje ekibi hakkında bilgi sahibi olun.`}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={`dijital oyun, yazılım projeleri, oyun geliştirme, ${project.title}, DOYGE projeleri`}
        />
        <meta
          property="og:title"
          content={`${project.title} | Dijital Oyun Geliştiricileri Kulübü`}
        />
        <meta
          property="og:description"
          content={`${project.title} projesini detaylarıyla keşfedin.`}
        />
        <meta property="og:image" content={project.mainImg} />
        <meta
          property="og:url"
          content={`https://audoyge.vercel.app/projeler/${project.id}`}
        />
        <meta
          name="twitter:title"
          content={`${project.title} | Dijital Oyun Geliştiricileri Kulübü`}
        />
        <meta
          name="twitter:description"
          content={`${project.title} projesi hakkında bilgi edinin.`}
        />
        <meta name="twitter:image" content={project.mainImg} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="container mx-auto p-8 max-w-6xl">
        {/* Proje Başlığı */}
        <h1 className="text-4xl font-bold text-center p-10">{project.title}</h1>

        {/* Ana Resim ve Kısa Açıklama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-14">
          <div>
            <Image
              src={project.mainImg}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex items-center">
            <p className="text-xl">{project.shortDescription}</p>
          </div>
        </div>

        {/* Detaylı Açıklama ve Teknik Detaylar / Özellikler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 shadow-sm bg-primary-light rounded-sm">
          <div>
            <h2 className="text-2xl font-semibold p-4">Detaylı Açıklama</h2>
            <p className="mb-4 whitespace-pre-line p-4">{project.detail}</p>
          </div>
          <div className="space-y-4 p-4">
            <h2 className="text-2xl font-semibold">Teknik Detaylar</h2>
            <p className="mb-4 whitespace-pre-line">
              {project.technicalDetails}
            </p>

            <h2 className="text-2xl font-semibold">Özellikler</h2>
            <ul className="list-disc ml-5">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diğer Resimler */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-center p-8">Görseller</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {project.img.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={300}
                height={200}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-96 h-60 object-cover rounded-md shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Github Butonu */}
        {project.github && (
          <div className="text-center mb-4">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mt-4 bg-[#7575fc] text-primary-light hover:text-primary-dark">
                {"Github'da İncele"}
              </Button>
            </Link>
          </div>
        )}

        {/* Proje Ekibi */}
        <div>
          <h2 className="text-3xl font-semibold text-center mt-6">
            Proje Ekibi
          </h2>
          <div className="p-6 text-center">
            {project.projectTeam.map((member, index) => (
              <p key={index}>
                {member.name} - {member.role}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
