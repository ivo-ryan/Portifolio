import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Projects from ".";

vi.mock("swiper/react", async () => {
    const Swiper = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
    const SwiperSlide = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
    return { Swiper, SwiperSlide };
});

const mockProjects = [
    {
        id: 1,
        description: "Projeto de teste 1",
        imgUrl:"/images/projeto1.png",
        name: "Projeto Teste 1",
        vercelUrl:"https://projetoteste1.vercel.app",
        technologies: "React, TypeScript",
        gitUrl: "https://github.com/projetoteste1"
    }, 
    {
        id: 2,
        description: "Projeto de teste 2",
        imgUrl:"/images/projeto2.png",
        name: "Projeto Teste 2",
        vercelUrl:"https://projetoteste2.vercel.app",
        technologies: "React, TypeScript",
        gitUrl: "https://github.com/projetoteste2"
    },

    {
        id: 3,
        description: "Projeto de teste 3",
        imgUrl:"/images/projeto3.png",
        name: "Projeto Teste 3",
        vercelUrl:"https://projetoteste3.vercel.app",
        technologies: "React, TypeScript",
        gitUrl: "https://github.com/projetoteste3"
    }
]

describe("Projects Component", () => {

    it("Deve renderizar o titulo da seção de projetos", () => {
        render(<Projects projects={[]} />);
        const title = screen.getByRole("heading", { name: /projetos/i });
        expect(title).toBeInTheDocument();
    });

    it("Deve renderizar os slides dos projetos", () => {
        render(<Projects projects={mockProjects} />);
        const project1 = screen.getByText(/projeto teste 1/i);
        const project2 = screen.getByText(/projeto teste 2/i);
        const project3 = screen.getByText(/projeto teste 3/i);
        expect(project1).toBeInTheDocument();
        expect(project2).toBeInTheDocument();
        expect(project3).toBeInTheDocument();
    });
});