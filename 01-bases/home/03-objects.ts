// Objetos
type CarType = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};

const batimovil: CarType = {
  carroceria: 'Negra',
  modelo: '6x6',
  antibalas: true,
  pasajeros: 4,
};

const bumblebee: CarType = {
  carroceria: 'Amarillo con negro',
  modelo: '4x2',
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El metodo disparar es opcional
    console.log('Disparando');
  },
};

// Villanos debe de ser un arreglo de objetos
type Villain = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};

const villanos: Villain[] = [
  {
    nombre: 'Lex Luthor',
    edad: 54,
    mutante: false,
  },
  {
    nombre: 'Erik Magnus Lehnsherr',
    edad: 49,
    mutante: true,
  },
  {
    nombre: 'James Logan',
    edad: undefined,
    mutante: true,
  },
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type CharlesType = {
  poder: string;
  estatura: number;
};

type ApocalipsisType = {
  lider: boolean;
  miembros: string[];
};

const charles: CharlesType = {
  poder: 'psiquico',
  estatura: 1.78,
};

const apocalipsis: ApocalipsisType = {
  lider: true,
  miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: CharlesType | ApocalipsisType;

mystique = charles;
mystique = apocalipsis;
