import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from ".";


describe("Header Top Component", () => {
  it("Deve renderizar logo e menu", () => {
        render(<Header />);
        const title = screen.getByRole("heading", { name: /IR\.DEV/i });
        const button = screen.getByLabelText("Abrir menu");
        const homeLink = screen.getByRole("link", { name: /home/i , hidden: true});
        const projetosLink = screen.getByRole("link", { name: /projetos/i , hidden: true});
        const aboutLink = screen.getByRole("link", { name: /about/i , hidden: true});
        
        expect(homeLink).toBeInTheDocument();
        expect(projetosLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();

        expect(button).toBeInTheDocument();
        expect(title).toBeInTheDocument();
  });

  it("O menu deve iniciar fechado e quando clicado deve abrir", async () => {
        render(<Header />);

        const user = userEvent.setup();

        const nav = screen.getByRole("navigation", { hidden: true });
        const button = screen.getByLabelText("Abrir menu");

        expect(nav).toHaveAttribute("aria-hidden", "true");

        await user.click(button);

        expect(nav).toHaveAttribute("aria-hidden", "false");

    });
});