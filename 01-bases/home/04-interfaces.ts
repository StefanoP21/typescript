// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface IAuto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: IAuto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batiMovil: IAuto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log('...... gogogo!!!');
  },
};

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales
interface IGuason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: IGuason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: IGuason): void => {
  if (guason.reir) {
    console.log('JAJAJAJA');
  }
};

// Cree una interfaz para la siguiente funcion
interface ICiudadGotica {
  (arr: string[]): number;
}

const ciudadGotica: ICiudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface IPersona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;

  imprimirBio(): void {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`
    );
  }
}
