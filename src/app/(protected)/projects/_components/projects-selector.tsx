'use client';

import { Select, SelectContent, SelectItem, SelectTrigger } from "~/components/ui/select";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { api } from "~/trpc/react";
import { PROJECTS_BASE_PATH } from "~/constants/links";
import { P } from "~/components/ui/typography";

const SELECT_HEADER_TEXT = 'Projects';

export const ProjectsSelector = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams();
  const projectId = params.projectId as string;

  const { data: projects } = api.project.getAll.useQuery(undefined, {
    enabled: !!projectId,
  });
  const activeProject = projects?.find((project) => project.id === projectId);



  if (!projectId) return null;

  return (
    <>
      <span className="text-4xl text-foreground opacity-20">/</span>
      <Select
        value={activeProject?.id ?? ''}
        onValueChange={async (projectId) => {
          router.push(`${PROJECTS_BASE_PATH}/${projectId}`);
        }}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <SelectTrigger
          className="border-0 bg-transparent p-0 shadow-none hover:bg-transparent focus:ring-0"
        >
          <P
            className="max-w-[120px] truncate"
            title={activeProject?.name}
          >
            {activeProject?.name}
          </P>
        </SelectTrigger>
        <SelectContent>
          <p className="text-muted-foreground text-sm">{SELECT_HEADER_TEXT}</p>
          {projects?.map((project) => (
            <SelectItem
              key={project.id}
              value={project.id}
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <p
                  className="max-w-[120px] truncate"
                  title={project.name}
                >
                  {project.name}
                </p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
