import { projectsService } from "@/services/projectsService";
import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useAnalysis from "./createAnalysis";


vi.mock("@/services/projectsService", () => ({
    projectsService: {
        iaAnalysis: vi.fn()
    }
}));

const mockedProjectService = vi.mocked(projectsService.iaAnalysis);

const mockResponse = { answer: "Análise de IA gerada com sucesso" };

describe("createAnalysis Component", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("Deve conter estados iniciais corretos",  async () => {
        const hook = renderHook(() => useAnalysis());

        expect(hook.result.current.analysisRes).toBe('');
        expect(hook.result.current.loading).toBe(false);
        expect(typeof hook.result.current.setFeature).toBe('function');

       
    
    });


    it("Deve buscar análise quando a feature for definida", async () => {
        const hook = renderHook(() => useAnalysis());
        mockedProjectService.mockResolvedValueOnce(mockResponse);

         act(() => {
            hook.result.current.setFeature("feature de teste");
        });

        expect(hook.result.current.loading).toBe(true);
        
        await waitFor(() => {
            expect(hook.result.current.loading).toBe(false);
            expect(projectsService.iaAnalysis).toHaveBeenCalledWith("feature de teste");
            expect(projectsService.iaAnalysis).toHaveBeenCalledTimes(1);
            expect(hook.result.current.analysisRes).toBe("Análise de IA gerada com sucesso");
        });

    });
        

    it("Deve lidar com erro na busca de análise", async () => {
        const hook = renderHook(() => useAnalysis());
        mockedProjectService.mockRejectedValueOnce(new Error("Erro na requisição"));

        act(() => {
            hook.result.current.setFeature("feature de teste");
        });

        await waitFor(() => {
            expect(hook.result.current.loading).toBe(false);
            expect(projectsService.iaAnalysis).toHaveBeenCalledWith("feature de teste");
            expect(projectsService.iaAnalysis).toHaveBeenCalledTimes(1);
            expect(hook.result.current.analysisRes).toBe('Erro ao gerar análise técnica. Tente novamente mais tarde.');
        });

    });

    it("Não deve buscar análise quando a feature for nula", async () => {
    const hook = renderHook(() => useAnalysis());
    mockedProjectService.mockResolvedValueOnce(mockResponse);

        act(() => {
            hook.result.current.setFeature(null);
        });

        await waitFor(() => {
            expect(hook.result.current.loading).toBe(false);
            expect(projectsService.iaAnalysis).not.toHaveBeenCalled();
        });
    });
});