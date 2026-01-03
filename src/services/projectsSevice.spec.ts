import { describe, expect, it, vi } from "vitest";
import { projectsService } from "./projectsService";
import { api } from "./api";

vi.mock("./api", () => ({
  api: {
      get: vi.fn()
  }
}));

describe("projectsService", () => {
    it("Deve fazer a requisição para buscar projetos", async () => {
        const mockProjects = {
            id: 1,
            name: "Projeto Teste",
            description: "Descrição do projeto teste",
            imgUrl: "http://exemplo.com/imagem.png",
            vercelUrl: "http://vercel.com/projeto-teste",
            technologies: "React, TypeScript",
            gitUrl: "http://github.com/projeto-teste"
        };

        (api.get as any).mockResolvedValueOnce({ data: [mockProjects] });

        const result = await projectsService.projectsAll();

        expect(api.get).toHaveBeenCalledWith("projects");
        expect(result).toEqual([mockProjects]);

    })

    it("Deve mostrar mensagem de erro ao falhar a requisição", async () => {

        const error ={
            response: {
                data: {
                    message: "Erro ao buscar projetos"
                }
            }
        };

        (api.get as any).mockRejectedValueOnce(error);

        const result = await projectsService.projectsAll();

        expect(api.get).toHaveBeenCalledWith("projects");
        expect(result).toEqual(error.response.data);

    });
});