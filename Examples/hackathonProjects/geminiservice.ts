
import { GoogleGenAI, Type } from "@google/genai";

const ADVISOR_SYSTEM_INSTRUCTION = `
You are a Dendritic Optimization Expert and AI Research Assistant for Perforated AI's hackathon.
Your goal is to help users integrate 'Artificial Dendrites' into their existing PyTorch models.

Context:
- Artificial neurons (invented 1943) are missing computation that happens in biological dendrites.
- Perforated AI adds these dendrites to PyTorch projects to make models Smarter, Smaller, and Cheaper.
- This is done via 'Dendritic Optimization'.
- Users MUST bring an existing functional PyTorch project.
`;

const STORYTELLER_SYSTEM_INSTRUCTION = `
You are a professional Tech Storyteller. Your task is to write a compelling 500-word presentation script for a hackathon finalist.
Structure:
1. About the Project: High-level overview.
2. Inspiration: The "biological spark" and the 1943 vs 2012 realization.
3. The Build: How PyTorch and Dendritic kernels were used.
4. Challenges: Technical hurdles and hyperparameter sweeps.
5. What was learned: Efficiency gains and future potential.

Formatting: 
- Exactly 500 words.
- Markdown format.
- Embed the video link at the top.
- Use LaTeX for any mathematical formulas (e.g., $f(x) = \sum w_i x_i + b$).
`;

const REPORTER_SYSTEM_INSTRUCTION = `
You are a Technical Documentation Expert. Your task is to write a comprehensive 600-word project report for a hackathon submission.
Required Sections:
1. About the project: Clear definition and scope.
2. What inspired you: The scientific and biological motivation.
3. What you learned: Technical insights into dendritic computation vs standard MLP layers.
4. How you built your project: Implementation details in PyTorch, specific layer swaps.
5. Challenges you faced: Memory bottlenecks, weight initialization, and W&B hyperparameter tuning.

Formatting: 
- Exactly 600 words.
- Professional Markdown.
- Video demo link included at the top.
- Strong emphasis on LaTeX math for equations and efficiency proofs.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getAdvisorResponse(userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction: ADVISOR_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "There was an error connecting to the neural network advisor.";
    }
  }

  async generateSubmissionContent(type: 'presentation' | 'report', projectDetails: { name: string, core: string, challenges: string, learnings: string, videoLink?: string }) {
    try {
      const instruction = type === 'presentation' ? STORYTELLER_SYSTEM_INSTRUCTION : REPORTER_SYSTEM_INSTRUCTION;
      const wordCount = type === 'presentation' ? '500' : '600';
      
      const prompt = `
      PROJECT NAME: ${projectDetails.name}
      VIDEO LINK: ${projectDetails.videoLink || '[Insert Link Here]'}
      CORE STORY/BUILD: ${projectDetails.core}
      SPECIFIC CHALLENGES: ${projectDetails.challenges}
      LESSONS: ${projectDetails.learnings}

      TASK: Write the full ${wordCount}-word ${type}. 
      You MUST cover: About the project, Inspiration, What was learned, How it was built, and Challenges.
      Use Markdown and LaTeX.
      `;

      const response = await this.ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: {
          systemInstruction: instruction,
          temperature: 0.8,
        }
      });

      return response.text || `Failed to generate ${type}.`;
    } catch (error) {
      console.error(`Gemini ${type} Error:`, error);
      return "The AI encountered a neural block.";
    }
  }
}

export const geminiService = new GeminiService();
