
export interface ScheduleItem {
  date: string;
  time: string;
  event: string;
  description?: string;
}

export interface Judge {
  name: string;
  organization: string;
  role?: string;
  imageUrl: string;
}

export interface Prize {
  rank: string;
  amount: string;
  description: string;
}

export type MessageRole = 'user' | 'assistant';

export interface ChatMessage {
  role: MessageRole;
  content: string;
}
