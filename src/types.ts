/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  isMe: boolean;
  schoolEmail?: string;
  tel?: string;
  lineId?: string;
  emergencyContact?: string;
  mbti?: string;
  interests?: string[];
  age?: number;
  height?: number;
  bio?: string;
  points?: number; // e.g. 850
  ratings?: number; // e.g. 4.9
  helpCount?: number; // e.g. 124
  punctuality?: number; // e.g. 98%
}

export type TaskCategory = 'dining' | 'sports' | 'arts' | 'assistance' | 'support' | 'errand' | 'all';

export interface CollaborativeTask {
  id: string;
  title: string;
  category: TaskCategory | string;
  customStatusLabel?: string; // e.g. "DELIVERY", "URGENT", "DORM", "LIBRARY"
  description: string;
  reward?: number; // in 揪幣
  deadline?: string;
  location?: string;
  joinProgressMax?: number; // e.g. 5
  joinedHelpersCount: number; // e.g. 3
  joinedHelperAvatars: string[];
  createdByUserId: string;
  createdByName: string;
  createdByAvatar: string;
  timeAgoLabel?: string;
  joinedMe?: boolean;
}

export interface ChatMessage {
  id: string;
  threadId: string;
  senderName: string;
  senderAvatar: string;
  senderIsMe: boolean;
  content: string;
  timestampLabel: string;
  type: 'text' | 'sticker' | 'task_card';
  stickerIcon?: string; // Material symbol or emoji
  associatedTaskId?: string; // for task card attachments
}

export interface ChatThread {
  id: string;
  title: string;
  type: 'group' | 'personal';
  avatar: string;
  statusLabel?: string; // e.g., "Active 2m ago", "24 位成員", "3 位成員"
  categoryTag?: string; // e.g., "美食", "運動", "單車夜騎", "求筆記"
  lastMessageContent?: string;
  lastMessageTime?: string;
  unreadCount?: number;
}
