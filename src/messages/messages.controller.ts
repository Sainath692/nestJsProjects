import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {

    @Get()
    listMessages(){}

    @Post()
    createMessages(@Body() body : CreateMessageDto){
        console.log(body);  
    }

    @Get("/:id")
    getMessages(@Param("id") id:number){
        console.log(id);
        
    }
}