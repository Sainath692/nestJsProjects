import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(public messsagesSerivce: MessagesService) {}

  @Get()
  listMessages() {
    return this.messsagesSerivce.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messsagesSerivce.create(body.content);
  }

  @Get("/:id")
  async getMessages(@Param("id") id: string) {
    const message = await this.messsagesSerivce.findOne(id);

    if (!message) {
      throw new NotFoundException("Message not found");
    }
    return message;
  }
}
