"use client";

import { api } from "~/trpc/react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import Scene from "~/app/_components/scene";

export default function DocumentPage() {
  const params = useParams();
  const projectId = params.projectId as string;
  const documentId = params.documentId as string;

  const { data: project } = api.project.get.useQuery({ id: projectId }, { enabled: !!projectId });
  const { data: document } = api.document.get.useQuery({ id: documentId }, { enabled: !!documentId });

  useEffect(() => {
    console.log(`project: `, project)
  }, [project]);

  useEffect(() => {
    console.log(`document: `, document)
  }, [document]);

  return <div className="flex w-full h-full">
    <Scene />
  </div>;
}