interface ModelLLM {
  generate(prompt: Prompt): Promise<string>;
  getName(): string;
}