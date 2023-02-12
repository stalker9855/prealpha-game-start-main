import { Module } from '@nestjs/common';
import { ChatService } from './services/chat.service';
import { ChatController } from './controllers/chat.controller';
import { MessageChatController } from './controllers/message-chat.controller';
import { MessageController } from './controllers/message.controller';
import { MessageChatService } from './services/message-chat.service';
import { MessageService } from './services/message.service';

@Module({
  controllers: [ChatController,MessageChatController,MessageController],
  providers: [ChatService,MessageChatService,MessageService]
})
export class ChatModule {}
