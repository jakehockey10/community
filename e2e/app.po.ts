import { browser, element, by } from 'protractor';

export class CommunityPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('span.title')).getText();
  }
}
