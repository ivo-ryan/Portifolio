import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Slide from ".";

const projectMock = {
    id: 1,
    name: "Projeto Exemplo",
    description: "Descrição do projeto exemplo.",
    imgUrl: "https://example.com/image.png",
    technologies: "React, TypeScript, SCSS",
    vercelUrl: "https://vercel.com/exemplo",
    gitUrl: "https://github.com/exemplo"
}

describe("Slide Component", () => {
    it("Deve renderizar o componente Slide corretamente", () => {
        render(<Slide project={projectMock} />);

        const title = screen.getByText("Projeto Exemplo");
        const description = screen.getByText("Descrição do projeto exemplo.");
        const technologies = screen.getByText("React, TypeScript, SCSS");
        const vercelLink = screen.getByText("Vercel");
        const gitHubLink = screen.getByText("GitHub");
        const image = screen.getByAltText("Projeto Exemplo") as HTMLImageElement;

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(technologies).toBeInTheDocument();
        expect(vercelLink).toHaveAttribute("href", "https://vercel.com/exemplo");
        expect(gitHubLink).toHaveAttribute("href", "https://github.com/exemplo");
        expect(image.src).toBe("https://example.com/image.png");
    });
});