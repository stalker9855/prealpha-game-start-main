import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageChatService } from '../services/message-chat.service';
import { CreateMessageChatDto } from '../dto/create-message-chat.dto';
import { UpdateMessageChatDto } from '../dto/update-message-chat.dto';

@Controller('users/chats/users-chats/message/messages-chats')
export class MessageChatController {
  constructor(private readonly messageChatService: MessageChatService) {}

  @Post()
  create(@Body() createMessageChatDto: CreateMessageChatDto) {
    return this.messageChatService.create(createMessageChatDto);
  }

  @Get()
  findAll() {
    return this.messageChatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageChatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageChatDto: UpdateMessageChatDto) {
    return this.messageChatService.update(+id, updateMessageChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageChatService.remove(+id);
  }
}
