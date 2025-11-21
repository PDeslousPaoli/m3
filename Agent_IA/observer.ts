interface Observer {
  notify(event: Event): void;
}

class LoggerObserver implements Observer {
  notify(event: Event) {
    console.log(`[LOG] ${event.type}`, event.payload ?? '');
  }
}

class MetricsObserver implements Observer {
  notify(event: Event) {
    if (event.type === 'interaction') {
      console.log(`[METRICS] interaction by ${event.payload.agentId}`);
    }
  }
}

//setup a subject for the observer 