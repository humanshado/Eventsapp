import { EventsappPage } from './app.po';

describe('eventsapp App', () => {
  let page: EventsappPage;

  beforeEach(() => {
    page = new EventsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
