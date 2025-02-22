import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

@Component({
  selector: 'app-data-search',
  imports: [],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA  
    ],
  templateUrl: './data-search.component.html',
  styleUrl: './data-search.component.scss'
})
export class DataSearchComponent {
constructor(){
    createChat({
      webhookUrl: 'https://elevenlabshackathon.app.n8n.cloud/webhook/e9df56ab-7374-4c45-92a0-4114994d1b5a/chat',
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
      ],
      
    });
  }
}
