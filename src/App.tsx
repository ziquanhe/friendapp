/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Compass, Heart, MessageSquare, User, Coins, LogOut 
} from 'lucide-react';

import { 
  WelcomeSplash, 
  AuthChooser, 
  LoginScreen, 
  RegisterScreen 
} from './components/CampusScreens';

import { 
  TaskMapAndList, 
  PostTaskForm 
} from './components/TaskViews';

import { 
  TinderSwipe, 
  UserProfileView 
} from './components/SocialMatch';

import { 
  ChatViews 
} from './components/ChatViews';

import { 
  CURRENT_USER_MOCK, 
  INITIAL_TASKS, 
  INITIAL_THREADS, 
  INITIAL_MESSAGES, 
  POTENTIAL_SWIPES 
} from './data';

import { 
  UserProfile, 
  CollaborativeTask, 
  ChatThread, 
  ChatMessage 
} from './types';

export default function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile>(CURRENT_USER_MOCK);
  const [tasks, setTasks] = useState<CollaborativeTask[]>(INITIAL_TASKS);
  const [threads, setThreads] = useState<ChatThread[]>(INITIAL_THREADS);
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>(INITIAL_MESSAGES);
  const [potentialSwipes, setPotentialSwipes] = useState<UserProfile[]>(POTENTIAL_SWIPES);
  
  // Navigation states
  // 'splash' -> 'auth-chooser' -> 'login' -> 'register' -> 'dashboard' -> 'match' -> 'chat' -> 'profile' -> 'post-task'
  const [currentScreen, setScreen] = useState<string>('splash');
  const [selectedThreadId, setSelectedThreadId] = useState<string | null>(null);

  // Helper when user swipes to Match with anyone dynamically
  const handleTriggerMatch = (profile: UserProfile) => {
    const threadId = `thread-${profile.id}`;
    
    // Add new thread dynamically representing this matched user
    setThreads(prev => {
      const exists = prev.some(t => t.id === threadId);
      if (exists) return prev;
      
      const newThread: ChatThread = {
        id: threadId,
        title: profile.name,
        type: 'personal',
        avatar: profile.avatar,
        statusLabel: 'Active just now',
        categoryTag: profile.mbti,
        lastMessageContent: `${profile.name}：嗨！我們配對成功了！很高興認識你！`,
        lastMessageTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        unreadCount: 1
      };
      return [newThread, ...prev];
    });

    // Initialize messages record for this thread
    setMessages(prev => {
      if (prev[threadId]) return prev;
      
      const initialMsg: ChatMessage = {
        id: `msg-match-${Date.now()}`,
        threadId: threadId,
        senderName: profile.name,
        senderAvatar: profile.avatar,
        senderIsMe: false,
        content: `嗨 Peter！我們配對成功囉！我很喜歡你的自我介紹，我也相當喜歡 ${profile.interests.join('、')}。有空可以在校園裡一起吃個飯或協作任務喔！✨`,
        timestampLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };
      
      return {
        ...prev,
        [threadId]: [initialMsg]
      };
    });
  };

  const setThreadOnJoin = (threadId: string) => {
    setSelectedThreadId(threadId);
    setScreen('chat');
  };

  // Determine if we should show the bottom primary nav bar
  const showNavBar = ['dashboard', 'match', 'chat', 'profile'].includes(currentScreen);

  // Render active screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <WelcomeSplash setScreen={setScreen} />;
      
      case 'auth-chooser':
        return <AuthChooser setScreen={setScreen} />;
      
      case 'login':
        return <LoginScreen setScreen={setScreen} />;
      
      case 'register':
      case 'edit-profile':
        return (
          <RegisterScreen 
            currentUser={currentUser} 
            setCurrentUser={setCurrentUser} 
            tasks={tasks}
            setTasks={setTasks}
            threads={threads}
            setThreads={setThreads}
            messages={messages}
            setMessages={setMessages}
            potentialSwipes={potentialSwipes}
            setPotentialSwipes={setPotentialSwipes}
            currentScreen={currentScreen}
            setScreen={setScreen}
            selectedThreadId={selectedThreadId}
            setSelectedThreadId={setSelectedThreadId}
          />
        );
      
      case 'dashboard':
        return (
          <TaskMapAndList 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            tasks={tasks}
            setTasks={setTasks}
            setScreen={setScreen}
            setThreadOnJoin={setThreadOnJoin}
            threads={threads}
            setThreads={setThreads}
            messages={messages}
            setMessages={setMessages}
          />
        );
      
      case 'post-task':
        return (
          <PostTaskForm 
            currentUser={currentUser}
            tasks={tasks}
            setTasks={setTasks}
            setScreen={setScreen}
          />
        );
      
      case 'match':
        return (
          <TinderSwipe 
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            potentialSwipes={potentialSwipes}
            setPotentialSwipes={setPotentialSwipes}
            setScreen={setScreen}
            onTriggerMatch={handleTriggerMatch}
            setSelectedThreadId={setSelectedThreadId}
          />
        );
      
      case 'chat':
        return (
          <ChatViews 
            currentUser={currentUser}
            threads={threads}
            setThreads={setThreads}
            messages={messages}
            setMessages={setMessages}
            selectedThreadId={selectedThreadId}
            setSelectedThreadId={setSelectedThreadId}
            tasks={tasks}
            onBackToDashboard={() => {
              setSelectedThreadId(null);
              setScreen('dashboard');
            }}
          />
        );
      
      case 'profile':
        return (
          <UserProfileView 
            currentUser={currentUser}
            setScreen={setScreen}
          />
        );
      
      default:
        return <WelcomeSplash setScreen={setScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative justify-between font-sans">
      
      {/* Dynamic Screen Viewport */}
      <div className="flex-1 w-full max-w-2xl mx-auto bg-white overflow-hidden shadow-2xl relative">
        {renderScreen()}
      </div>

      {/* Persistent Bottom navigation menu bar - exact layout */}
      {showNavBar && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#e2e7ec] shadow-[0_-5px_15px_rgba(0,0,0,0.03)] h-[76px] flex justify-around items-center max-w-2xl mx-auto">
          {/* Dashboard Tab */}
          <button 
            type="button"
            className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-150 cursor-pointer ${currentScreen === 'dashboard' ? 'text-primary' : 'text-outline hover:text-primary-container'}`}
            onClick={() => {
              setScreen('dashboard');
              setSelectedThreadId(null);
            }}
          >
            <Compass className={`w-5.5 h-5.5 ${currentScreen === 'dashboard' ? 'stroke-[2.5px] scale-105' : 'stroke-[1.5px]'}`} />
            <span className={`text-[10px] mt-1 font-sans ${currentScreen === 'dashboard' ? 'font-extrabold' : 'font-medium'}`}>
              探索
            </span>
          </button>

          {/* Swipe Match Tab */}
          <button 
            type="button"
            className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-150 cursor-pointer ${currentScreen === 'match' ? 'text-secondary font-bold' : 'text-outline hover:text-secondary-fixed'}`}
            onClick={() => {
              setScreen('match');
              setSelectedThreadId(null);
            }}
          >
            <Heart className={`w-5.5 h-5.5 ${currentScreen === 'match' ? 'stroke-[2.5px] fill-current text-secondary scale-105' : 'stroke-[1.5px]'}`} />
            <span className={`text-[10px] mt-1 font-sans ${currentScreen === 'match' ? 'font-extrabold' : 'font-medium'}`}>
              配對
            </span>
          </button>

          {/* Chat Messages Tab */}
          <button 
            type="button"
            className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-150 cursor-pointer ${currentScreen === 'chat' ? 'text-primary' : 'text-outline hover:text-primary-container'}`}
            onClick={() => {
              setScreen('chat');
              // Auto reset thread list if navigating via bottom menu
            }}
          >
            <div className="relative">
              <MessageSquare className={`w-5.5 h-5.5 ${currentScreen === 'chat' ? 'stroke-[2.5px] scale-105' : 'stroke-[1.5px]'}`} />
              {/* Notifications badgeless or badges */}
              <div className="absolute top-[-2px] right-[-2px] w-2 h-2 rounded-full bg-secondary"></div>
            </div>
            <span className={`text-[10px] mt-1 font-sans ${currentScreen === 'chat' ? 'font-extrabold' : 'font-medium'}`}>
              訊息
            </span>
          </button>

          {/* User Profile Tab */}
          <button 
            type="button"
            className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-150 cursor-pointer ${currentScreen === 'profile' ? 'text-primary' : 'text-outline hover:text-primary-container'}`}
            onClick={() => {
              setScreen('profile');
              setSelectedThreadId(null);
            }}
          >
            <User className={`w-5.5 h-5.5 ${currentScreen === 'profile' ? 'stroke-[2.5px] scale-105' : 'stroke-[1.5px]'}`} />
            <span className={`text-[10px] mt-1 font-sans ${currentScreen === 'profile' ? 'font-extrabold' : 'font-medium'}`}>
              我的工作
            </span>
          </button>
        </nav>
      )}
    </div>
  );
}
