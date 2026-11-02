import type {Board} from './model.ts';
export const levels: {name:string;par:number;board:Board}[] = [
  {
    "name": "Primeira brecha",
    "par": 4,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 2
      },
      {
        "id": "A",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 4
      },
      {
        "id": "B",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 3
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 2
      },
      {
        "id": "D",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 5
      },
      {
        "id": "E",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 3
      },
      {
        "id": "F",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 1
      },
      {
        "id": "G",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 4
      },
      {
        "id": "H",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 0
      },
      {
        "id": "I",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 0
      },
      {
        "id": "J",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 1
      }
    ]
  },
  {
    "name": "Troca de faixa",
    "par": 5,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 2
      },
      {
        "id": "A",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 4
      },
      {
        "id": "B",
        "axis": "v",
        "length": 3,
        "x": 5,
        "y": 2
      },
      {
        "id": "C",
        "axis": "h",
        "length": 3,
        "x": 2,
        "y": 1
      },
      {
        "id": "D",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 1
      },
      {
        "id": "E",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 2
      },
      {
        "id": "F",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 3
      },
      {
        "id": "G",
        "axis": "h",
        "length": 2,
        "x": 3,
        "y": 0
      },
      {
        "id": "H",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 5
      },
      {
        "id": "I",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 5
      },
      {
        "id": "J",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 3
      },
      {
        "id": "K",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 0
      }
    ]
  },
  {
    "name": "Entre cargas",
    "par": 6,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 2
      },
      {
        "id": "A",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 1
      },
      {
        "id": "B",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 0
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 3
      },
      {
        "id": "D",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 4
      },
      {
        "id": "E",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 2
      },
      {
        "id": "F",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 0
      },
      {
        "id": "G",
        "axis": "v",
        "length": 3,
        "x": 4,
        "y": 2
      },
      {
        "id": "H",
        "axis": "h",
        "length": 3,
        "x": 3,
        "y": 5
      }
    ]
  },
  {
    "name": "Ponto cego",
    "par": 7,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 2
      },
      {
        "id": "A",
        "axis": "h",
        "length": 2,
        "x": 3,
        "y": 0
      },
      {
        "id": "B",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 0
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 2
      },
      {
        "id": "D",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 0
      },
      {
        "id": "E",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 4
      },
      {
        "id": "F",
        "axis": "h",
        "length": 2,
        "x": 3,
        "y": 4
      },
      {
        "id": "G",
        "axis": "h",
        "length": 3,
        "x": 3,
        "y": 5
      },
      {
        "id": "H",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 4
      },
      {
        "id": "I",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 2
      },
      {
        "id": "J",
        "axis": "v",
        "length": 3,
        "x": 5,
        "y": 1
      }
    ]
  },
  {
    "name": "Efeito dominó",
    "par": 8,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 2
      },
      {
        "id": "A",
        "axis": "v",
        "length": 3,
        "x": 5,
        "y": 1
      },
      {
        "id": "B",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 3
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 2
      },
      {
        "id": "D",
        "axis": "h",
        "length": 3,
        "x": 1,
        "y": 5
      },
      {
        "id": "E",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 4
      },
      {
        "id": "F",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 1
      },
      {
        "id": "G",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 3
      },
      {
        "id": "H",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 5
      },
      {
        "id": "I",
        "axis": "h",
        "length": 3,
        "x": 3,
        "y": 0
      },
      {
        "id": "J",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 0
      }
    ]
  },
  {
    "name": "Via estreita",
    "par": 9,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 2
      },
      {
        "id": "A",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 0
      },
      {
        "id": "B",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 4
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 2
      },
      {
        "id": "D",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 1
      },
      {
        "id": "E",
        "axis": "v",
        "length": 3,
        "x": 5,
        "y": 2
      },
      {
        "id": "F",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 5
      },
      {
        "id": "G",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 3
      },
      {
        "id": "H",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 4
      },
      {
        "id": "I",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 0
      },
      {
        "id": "J",
        "axis": "h",
        "length": 3,
        "x": 1,
        "y": 5
      },
      {
        "id": "K",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 1
      }
    ]
  },
  {
    "name": "Desvio duplo",
    "par": 10,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 2
      },
      {
        "id": "A",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 1
      },
      {
        "id": "B",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 5
      },
      {
        "id": "C",
        "axis": "v",
        "length": 3,
        "x": 0,
        "y": 3
      },
      {
        "id": "D",
        "axis": "h",
        "length": 2,
        "x": 3,
        "y": 4
      },
      {
        "id": "E",
        "axis": "h",
        "length": 2,
        "x": 3,
        "y": 1
      },
      {
        "id": "F",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 2
      },
      {
        "id": "G",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 2
      },
      {
        "id": "H",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 0
      },
      {
        "id": "I",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 4
      },
      {
        "id": "J",
        "axis": "h",
        "length": 2,
        "x": 3,
        "y": 0
      }
    ]
  },
  {
    "name": "Nó de aço",
    "par": 13,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 2
      },
      {
        "id": "A",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 3
      },
      {
        "id": "B",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 1
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 3
      },
      {
        "id": "D",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 1
      },
      {
        "id": "E",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 1
      },
      {
        "id": "F",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 3
      },
      {
        "id": "G",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 0
      },
      {
        "id": "H",
        "axis": "h",
        "length": 3,
        "x": 2,
        "y": 5
      },
      {
        "id": "I",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 3
      },
      {
        "id": "J",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 0
      },
      {
        "id": "K",
        "axis": "v",
        "length": 3,
        "x": 0,
        "y": 0
      }
    ]
  },
  {
    "name": "Último trilho",
    "par": 14,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 2
      },
      {
        "id": "A",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 4
      },
      {
        "id": "B",
        "axis": "h",
        "length": 2,
        "x": 2,
        "y": 1
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 3
      },
      {
        "id": "D",
        "axis": "v",
        "length": 3,
        "x": 2,
        "y": 3
      },
      {
        "id": "E",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 2
      },
      {
        "id": "F",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 0
      },
      {
        "id": "G",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 0
      },
      {
        "id": "H",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 4
      },
      {
        "id": "I",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 2
      },
      {
        "id": "J",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 0
      },
      {
        "id": "K",
        "axis": "v",
        "length": 2,
        "x": 3,
        "y": 4
      },
      {
        "id": "L",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 0
      }
    ]
  },
  {
    "name": "Horizonte livre",
    "par": 15,
    "board": [
      {
        "id": "@",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 2
      },
      {
        "id": "A",
        "axis": "v",
        "length": 3,
        "x": 3,
        "y": 0
      },
      {
        "id": "B",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 4
      },
      {
        "id": "C",
        "axis": "v",
        "length": 2,
        "x": 0,
        "y": 2
      },
      {
        "id": "D",
        "axis": "h",
        "length": 2,
        "x": 0,
        "y": 1
      },
      {
        "id": "E",
        "axis": "v",
        "length": 2,
        "x": 1,
        "y": 4
      },
      {
        "id": "F",
        "axis": "v",
        "length": 2,
        "x": 5,
        "y": 3
      },
      {
        "id": "G",
        "axis": "h",
        "length": 3,
        "x": 3,
        "y": 5
      },
      {
        "id": "H",
        "axis": "h",
        "length": 2,
        "x": 4,
        "y": 0
      },
      {
        "id": "I",
        "axis": "v",
        "length": 2,
        "x": 4,
        "y": 2
      },
      {
        "id": "J",
        "axis": "v",
        "length": 2,
        "x": 2,
        "y": 0
      },
      {
        "id": "K",
        "axis": "h",
        "length": 2,
        "x": 1,
        "y": 3
      }
    ]
  }
];
