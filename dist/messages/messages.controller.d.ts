import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";
export declare class MessagesController {
    messsagesSerivce: MessagesService;
    constructor(messsagesSerivce: MessagesService);
    listMessages(): Promise<any>;
    createMessage(body: CreateMessageDto): Promise<void>;
    getMessages(id: string): Promise<any>;
}
