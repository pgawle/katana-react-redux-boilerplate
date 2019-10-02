import { createBrowserHistory } from 'history';

class HistoryService {
  constructor() {
    this.history = createBrowserHistory();
  }

  getHistory() {
    return this.history;
  }
}

const historyService = new HistoryService();

export default historyService;
