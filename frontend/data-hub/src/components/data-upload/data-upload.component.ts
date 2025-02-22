import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

@Component({
  selector: 'app-data-upload',
  imports: [],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA  
    ],
  templateUrl: './data-upload.component.html',
  styleUrl: './data-upload.component.scss'
})
export class DataUploadComponent {
constructor(){
    createChat({
      webhookUrl: 'https://elevenlabshackathon.app.n8n.cloud/webhook/c62a62b5-e105-4426-a5ec-e8b1b6c26ab9/chat',
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
