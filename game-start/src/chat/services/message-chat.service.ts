import { Injectable } from '@nestjs/common';
import { CreateMessageChatDto } from '../dto/create-message-chat.dto';
import { UpdateMessageChatDto } from '../dto/update-message-chat.dto';

@Injectable()
export class MessageChatService {
  create(createMessageChatDto: CreateMessageChatDto) {
    return 'This action adds a new messageChat';
  }

  findAll() {
    return `This action returns all messageChat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageChat`;
  }

  update(id: number, updateMessageChatDto: UpdateMessageChatDto) {
    return `This action updates a #${id} messageChat`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageChat`;
  }
}
