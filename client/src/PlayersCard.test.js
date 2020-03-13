import React, { useState } from "react";
import { render } from "@testing-library/react";
import PlayersCard from "./PlayersCard";




test("Alex Morgan is present", () => {
    const { getByText } = render(<PlayersCard player={"alex morgan"}/>);
    getByText(/blue/i);
});

test("United States is present ", () => {
    const { getByText } = render(<PlayersCard player={"united states"}/>);
     getByText(/blue/i)
    
});


