import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import PlayersCard from "./PlayersCard";




test("United States present", () => {

   const player = [{name: "Alex Morgan",
    country: "United States",
    }]

    const { getByText } = render(<PlayersCard player={"alex morgan"}/>);
    
    getByText(/blue/i);
});

test("testing to see if values from axios call are on dom", () => {
    const { getByText } = render(<PlayersCard player={"united states"}/>);

     getByText(/blue/i)
});


