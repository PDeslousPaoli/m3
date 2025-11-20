class OpenAIModel implements ModelLLM {
  constructor(private cfg: any) {}
  async generate(prompt: Prompt): Promise<string> {
    await new Promise(r => setTimeout(r, 80));
    return `OpenAI(${prompt.text})`;
  }
  getName() { return 'OpenAI'; }
}

class AnthropicModel implements ModelLLM {
  constructor(private cfg: any) {}
  async generate(prompt: Prompt): Promise<string> {
    await new Promise(r => setTimeout(r, 120));
    return `Anthropic(${prompt.text})`;
  }
  getName() { return 'Anthropic'; }
}

class DeepSeekModel implements ModelLLM {
  constructor(private cfg: any) {}
  async generate(prompt: Prompt): Promise<string> {
    await new Promise(r => setTimeout(r, 60));
    return `DeepSeek(${prompt.text})`;
  }
  getName() { return 'DeepSeek'; }
}