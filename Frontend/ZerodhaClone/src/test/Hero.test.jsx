import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
    test("renders Hero component correctly", () => {
        render(
            <BrowserRouter>
                <Hero />
            </BrowserRouter>
        );

        const heroimage = screen.getByAltText("Hero Image");

        expect(heroimage).toBeInTheDocument();
        expect(heroimage).toHaveAttribute(
            "src",
            "/media/homeHero.png"
        );
    });
});