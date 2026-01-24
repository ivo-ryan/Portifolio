import { beforeEach, describe, expect, it, vi } from "vitest";
import { AiAnalysisModal } from ".";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const modalPropsMock = {
    isOpen: true,
    onClose: vi.fn(),
    content: "Conteúdo da análise técnica",
    loading: false,
}

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<any>("framer-motion");
  return {
    ...actual,
    motion: {
      div: (props: any) => <div {...props} />
    },
    AnimatePresence: ({ children }: any) => <>{children}</>
  };
});


describe("AiAnalysisModal Component", () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("Deve renderizar o modal com conteúdo corretamente", () => {
        const { getByText } = render(<AiAnalysisModal {...modalPropsMock} />);

        const title = getByText(/🤖 Análise Técnica \(IA\)/i);
        const content = getByText(/Conteúdo da análise técnica/i);

        expect(title).toBeInTheDocument();
        expect(content).toBeInTheDocument();

    });

    it("Deve exibir mensagem de carregamento quando loading for true", () => {
        const loadingProps = { ...modalPropsMock, loading: true };
        const { queryByText, getByText } = render(<AiAnalysisModal {...loadingProps} />);

        const loadingMessage = getByText(/Gerando análise técnica.../i);
        const content = queryByText(/Conteúdo da análise técnica/i);

        expect(loadingMessage).toBeInTheDocument();
        expect(content).not.toBeInTheDocument();

    });

    it("Deve chamar onClose ao clicar no botão de fechar", async () => {
        const { getByLabelText } = render(<AiAnalysisModal {...modalPropsMock} />);

        const closeButton = getByLabelText(/Fechar modal/i);

        await userEvent.click(closeButton);

        expect(modalPropsMock.onClose).toHaveBeenCalled();

    });

    it("Deve mostrar fallback quando content for null", () => {
        const nullContentProps = { ...modalPropsMock, content: null };
        const { queryByText, getByText } = render(<AiAnalysisModal {...nullContentProps} />);

        const content = queryByText(/Conteúdo da análise técnica/i);
        const fallbackMessage = getByText(/Nenhuma análise disponível no momento./i);

        expect(fallbackMessage).toBeInTheDocument();
        expect(content).not.toBeInTheDocument();

    });

});