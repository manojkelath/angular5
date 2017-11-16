import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private message = '';

    sendMessage(message: string) {
        this.message = message;
    }

    // tslint:disable-next-line:one-line
    getMessage(){
        return this.message;
    }

}
