//This file contains constants variables used in the program

export const STAGES = {
    INTRO_STAGE: 0,
    CARD_STAGE: 1
};

export const CARS = [
    { brand: "Seat", id: 0, icon: "assets/car-icon.png" , 
        models: [ 
            {
                name: "Ibiza", description: "aaaaa", price: "15000", icon: "assets/seat/ibiza.png"
            },
            {
                name: "Leon", description: "bbbb", price: "10000", icon: "assets/seat/leon.png"
            }
        ]
    },
    { brand: "Dacia", id: 0, icon: "assets/car-icon.png" , 
        models: [ 
            {
                name: "Sandero", description: "aaaaa", price: "10000", icon: "assets/seat/ibiza.png"
            },
            {
                name: "Duster", description: "bbbb", price: "20000", icon: "assets/seat/leon.png"
            }
        ]
    }
];
