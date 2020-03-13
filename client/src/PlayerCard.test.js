import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PlayersCard from "./PlayersCard"

test("United States present", () => {
    const { getByText } = render(<PlayersCard />);

    getByText(/united states/i);
});

test("testing to see if values from axios call are on dom", async () => {
    const { getByText } = render(<PlayersCard />);

    await getByText(/alex morgan/i)
})

