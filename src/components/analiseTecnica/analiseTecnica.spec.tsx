import { beforeEach, describe, expect, it, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import AnaliseTecnica from ".";
import { AiAnalysisModal } from "./modalAnalysis";

const setFeatureMock = vi.fn();

const mockUseAnalysis = vi.fn( () => ({
        analysisRes: "",
        loading: false,
        setFeature: setFeatureMock
    }) )

vi.mock("../customComponent/createAnalysis", async () => ({
    default: () => mockUseAnalysis()
}));

vi.mock("./modalAnalysis", async () => ({
    AiAnalysisModal: vi.fn(() => null)
}));

const mockedUseAnalysis = vi.mocked(mockUseAnalysis);

const mockProject = {
    features: "Funcionalidades do projeto de teste",
    gitUrl: "https://github.com/teste",
    vercelUrl: "https://vercel.com/teste"
}

describe("AnaliseTecnica Component", () => {

    beforeEach(() => {
        vi.clearAllMocks();
        mockedUseAnalysis.mockReturnValue({
            analysisRes: "",
            loading: false,
            setFeature: setFeatureMock
        });
    });

    it("Deve renderizar os links corretamente", () => {
        const { getByText } = render(<AnaliseTecnica { ...mockProject } />);

        const vercelLink = getByText(/Vercel/i);
        const gitHubLink = getByText(/GitHub/i);
        const analysisText = getByText(/Análise Técnica/i);

        expect(vercelLink).toBeInTheDocument();
        expect(gitHubLink).toBeInTheDocument();
        expect(analysisText).toBeInTheDocument();
    });

    it("Deve passar corretamente os valores do hook para o modal", () => {
        mockedUseAnalysis.mockReturnValueOnce({
            analysisRes: "Resultado da análise",
            loading: true,
            setFeature: setFeatureMock
        });

        render(<AnaliseTecnica {...mockProject} />);

        act(() => {
            screen.getByText(/Análise Técnica/i).click();
        });

        expect(AiAnalysisModal).toHaveBeenLastCalledWith(
            expect.objectContaining({
                content: "",
                loading: false,
                isOpen: true,
                onClose: expect.any(Function),
            }),
            undefined
        );

    });


    it("Deve chamar setFeature ao clicar em Análise Técnica", () => {
        render(<AnaliseTecnica {...mockProject} />);

        const analysisText = screen.getByText(/Análise Técnica/i);

        act(() => {
            analysisText.click();
        });

        expect(setFeatureMock).toHaveBeenCalledWith(mockProject.features);
        expect(setFeatureMock).toHaveBeenCalledTimes(1);
        expect(AiAnalysisModal).toHaveBeenLastCalledWith(
            expect.objectContaining({
                isOpen: true
            }),
            undefined
        );

    });


});