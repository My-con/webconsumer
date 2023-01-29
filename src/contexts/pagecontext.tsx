import React, { createContext, useState } from "react"

interface teste {
    state : [any, any],
    search: [any, any]
}

export let Cont = createContext<teste>({state: [undefined, undefined], search: [undefined, undefined]})
