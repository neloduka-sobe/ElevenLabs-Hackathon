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
      webhookUrl: 'https://elevenlabshackathon.app.n8n.cloud/webhook/76e0b580-dd24-47cb-87a7-424705b0f917/chat',
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
