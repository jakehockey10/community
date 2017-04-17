import { TestBed, inject } from '@angular/core/testing';

import { ChatBotService } from './chat-bot.service';

describe('ChatBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatBotService]
    });
  });

  it('should ...', inject([ChatBotService], (service: ChatBotService) => {
    expect(service).toBeTruthy();
  }));
});
