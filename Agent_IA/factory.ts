type AgentConfig = { id: string; modelType: string; modelConfig?: any; toolConfigs?: any[] };

class ModelFactory {
  static createModel(type: string, cfg: any): ModelLLM {
    // cfg may refer to any specifics about the model : tokens, temperature, etc)
    switch (type.toLowerCase()) {
      case 'openai': return new OpenAIModel(cfg);
      case 'anthropic': return new AnthropicModel(cfg);
      case 'deepseek': return new DeepSeekModel(cfg);
      default: throw new Error(`Unknown model type ${type}`);
    }
  }
}

class AgentFactory {
  static createAgent(conf: AgentConfig): Agent {
    const model = ModelFactory.createModel(conf.modelType, conf.modelConfig);
    const tool = new CompositeTool();
    return new Agent(conf.id, model, tool);
  }
}