(() => {
  interface Client {
    name?: string;
    age: number;
    address: Address;
    getFullAddress(id: string): string;
    getAge(): number;
  }

  interface Address {
    street: string;
    city: string;
    zip: string;
  }

  const client: Client = {
    name: 'Stefano',
    age: 22,
    address: {
      street: 'Via Roma',
      city: 'Rome',
      zip: '00100',
    },
    getFullAddress(id) {
      return `${this.address.street}, ${this.address.city}, ${this.address.zip}`;
    },
    getAge() {
      return this.age;
    },
  };

  // console.log(client);
})();
