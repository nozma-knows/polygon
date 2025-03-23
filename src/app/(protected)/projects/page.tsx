"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { PlusIcon } from "lucide-react";
import { P } from "~/components/ui/typography";
import { api } from "~/trpc/react";
import { type Project } from "~/validators/projects";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

export default function ProjectsPage() {
  const router = useRouter();

  const createProject = api.project.create.useMutation({
    onSuccess: (project: Project) => {
      console.log(`Project created: ${project.id}`);
      router.push(`/projects/${project.id}/${project.documents?.[0]?.id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const { data: projects } = api.project.getAll.useQuery();

  return (
    <div className="flex flex-col w-full h-full p-4 gap-4 justify-start">
      <div className="flex justify-end">
        <Button onClick={() => createProject.mutate({ name: "New Project", description: null })}>
          <PlusIcon className="size-4 mr-2" />
          <P>Create Project</P>
        </Button>
      </div>
      
      {projects?.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border border-dashed rounded-lg p-6">
          <P className="text-muted-foreground text-center mb-4">You don't have any projects yet</P>
          <Button variant="outline" onClick={() => createProject.mutate({ name: "New Project", description: null })}>
            <PlusIcon className="size-4 mr-2" />
            Create your first project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
          {projects?.map((project) => (
            <Card
              key={project.id}
              className="h-[240px] cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => router.push(`/projects/${project.id}/${project.documents?.[0]?.id}`)}
            >
              <CardHeader>
                <CardTitle className="line-clamp-1">{project.name}</CardTitle>
                <P className="text-gray-600 text-sm line-clamp-3">{project.description}</P>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
