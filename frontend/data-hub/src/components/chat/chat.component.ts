import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  
  ],
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  constructor(){
    createChat({
      webhookUrl: 'https://cezpolsl.app.n8n.cloud/webhook/9e6cf716-0089-49fa-a268-7c97e4daa454/chat',
      webhookConfig: {
        method: 'POST',
        headers: {}
      },
      target: '#n8n-chat',
      mode: 'fullscreen',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      metadata: {},
      showWelcomeScreen: false,
      defaultLanguage: 'en',
      initialMessages: [
       "HI"
      ],
      
    });
  }

}
