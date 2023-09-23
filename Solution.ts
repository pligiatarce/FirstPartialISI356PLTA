/*Solution

SOLID Principles:
Single Responsibility Principle: La clase LibraryManager se ocupa únicamente de la lógica de la biblioteca, mientras que el servicio EmailService se ocupa del envío de correos electrónicos.
Open/Closed Principle: Las clases están abiertas para extensión (por ejemplo, añadiendo más tipos de notificaciones) pero cerradas para modificación.
Liskov Substitution Principle: User implementa la interfaz IObserver, lo que significa que se puede sustituir por cualquier otro objeto que también implemente la interfaz.
Dependency Inversion Principle: Se inyecta IEmailService en LibraryManager, lo que significa que LibraryManager no depende de una implementación concreta.

Inyección de Dependencias:
Inyectar IEmailService en LibraryManager.*/

class LibraryManger {
    sendLibrary(agregar: string, eliminar: string, prestar:string, devolver:string) {
        console.log(`Sending email to ${agregar}: ${eliminar}:${prestar}: ${devolver}`);
    }
}
class IEmailService {
    iemailService: IEmailService;

    constructor() {
        this.iemailService = new IEmailService();
    }

    sendMessage(agregar: string, eliminar: string, prestar:string, devolver:string) {
        this.iemailService.sendMessage(agregar, eliminar, prestar, devolver);
    }
}
interface IMessagingService {
    sendMessage(agregar: string, eliminar: string, prestar:string, devolver:string): void;
}

class EmailService implements IMessagingService {
    sendMessage(agregar: string, eliminar: string, prestar:string, devolver:string) {
        console.log(`Sending email to ${agregar}: ${eliminar}:${prestar}: ${devolver}`);
    }
}
class SMSService implements IMessagingService {
    sendMessage(agregar: string, eliminar: string, prestar:string, devolver:string) {
        console.log(`Sending email to ${agregar}: ${eliminar}:${prestar}: ${devolver}`);
    }
}
class MessageService {
    messagingService: IMessagingService;

    constructor(messagingService: IMessagingService) {
        this.messagingService = messagingService;
    }

    sendMessage(agregar: string, eliminar: string, prestar:string, devolver:string) {
        this.messagingService.sendMessage(agregar, eliminar, prestar, devolver);
    }
}
const emailService = new EmailService();
const messageService1 = new MessageService(emailService);
messageService1.sendMessage("se ha agregado!", "ligia@gmail.com");

const smsService = new SMSService();
const messageService2 = new MessageService(smsService);
messageService2.sendMessage("se ha agregado!", "75287521");

/*

Lambda Expressions:
Usar expresiones lambda en funciones como find y forEach.*/


let prestar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(n: number): boolean {
    return n % 10 === 0;
}

let evenPrestar = prestar.filter(isEven);
console.log(evenPrestar);


let devolver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evendevolver = devolver.filter(n => n % 2 === 0);
console.log(evendevolver); 

/*
Singleton Pattern:
Garantizar que solo haya una instancia de LibraryManager con el método getInstance.

Observer Pattern:
Los usuarios (User) se registran como observadores y son notificados cuando se añade un nuevo libro.

Builder Pattern:
Se utiliza para construir instancias de Book de una manera más limpia y escalable.*/


class LibraryManager {
    private static instance: LibraryManager;

    private constructor() {
        
    }

    public static getInstance(): LibraryManager {
        if (!LibraryManager.instance) {
            LibraryManager.instance = new LibraryManager();
        }
        return LibraryManager.instance;
    }

    public someMethod(): void {
        console.log("Una sola instancia de la libreria");
    }
}
/*
Refactorización:
eliminar el uso de ANY mejorar el performance*/

class Orden {
    agregar: string
    eliminar:string
    prestar:string
    devolver:string

    constructor() {
        this.agregar = [];
        this.eliminar = [];
        this.prestar = [];
        this.devolver =[]
    }

    addAgregar(agregar: string) {
        this.agregar.push(agregar);
    }

    addEliminar(eliminar: string) {
        this.eliminar.push(eliminar);
    }

    addPrestar(prestar: string) {
        this.prestar.push(prestar);
    }

    addDevolver(devolver: string) {
        this.devolver.push(devolver);
    }

    orderSummary(): string {
        return `
        agregar: ${this.agregar}
        eliminar: ${this.eliminar}
        prestar: ${this.prestar}
        devolver: ${this.devolver}
        `;
    }
}
/*


Aspectos (Opcional)
Puedes anadir logs de info, warning y error en las llamadas, para un mejor control

Diseño por Contrato (Opcional):
Puedes anadir validaciones en precondiciones o postcondiciones como lo veas necesario*/
