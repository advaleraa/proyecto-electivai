import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloAndName(name: string) {
    return `Hello ${name}`;
  }

  getproducts(limit: number, offset: number) {
    return `Mostrando el listado de productos desde el id: ${offset}. Cantidad a mostrar: ${limit}`;
  }

  getname() {
    return 'Hola mi nombre es Angie';
  }
}
