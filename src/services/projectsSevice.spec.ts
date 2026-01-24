import { describe, expect, it, vi } from "vitest";
import { projectsService } from "./projectsService";
import { api } from "./api";

vi.mock("./api", () => ({
  api: {
      get: vi.fn(),
      post: vi.fn()
  }
}));

const apiMockedGet = vi.mocked(api.get);
const apiMockedPost = vi.mocked(api.post);

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

        apiMockedGet.mockResolvedValueOnce({ data: [mockProjects] });

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

        apiMockedGet.mockRejectedValueOnce(error);

        const result = await projectsService.projectsAll();

        expect(api.get).toHaveBeenCalledWith("projects");
        expect(result).toEqual(error.response.data);

    });

    it("Deve enviar a feature e fazer a analise corretamente", async () => {
        const feature = {
            data: { answer: "Feature de teste" }
        };

        apiMockedPost.mockResolvedValueOnce(feature);

        const result = await projectsService.iaAnalysis("Feature de teste");

        expect(api.post).toHaveBeenCalledWith("chat", { prompt: "Feature de teste" });
        expect(result).toEqual({
            answer: "Feature de teste"
        });
    });

    it("Deve retornar os dados do erro quando a requisição falhar" , async () => {
        const error ={
            response: {
                data: {
                    message: "Erro ao criar analise"
                }
            }
        };

        apiMockedPost.mockRejectedValueOnce(error);

        const result = await projectsService.iaAnalysis("Feature de teste");
        
        expect(api.post).toHaveBeenCalledWith("chat", { prompt: "Feature de teste" });
        expect(result).toEqual({
            message: "Erro ao criar analise"
        });
        
    } );
});