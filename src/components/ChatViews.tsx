/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Phone, Video, MoreVertical, Send, ThumbsUp, MapPin, Coins, 
  Smile, ShieldAlert, BadgeInfo, Star, CheckCheck, Landmark, Sparkles, 
  MessageSquare, CircleAlert, CheckCircle, Volume2, Gamepad
} from 'lucide-react';
import { ChatThread, ChatMessage, UserProfile, CollaborativeTask } from '../types';

interface ChatViewsProps {
  currentUser: UserProfile;
  threads: ChatThread[];
  setThreads: React.Dispatch<React.SetStateAction<ChatThread[]>>;
  messages: Record<string, ChatMessage[]>;
  setMessages: React.Dispatch<React.SetStateAction<Record<string, ChatMessage[]>>>;
  selectedThreadId: string | null;
  setSelectedThreadId: (id: string | null) => void;
  tasks: CollaborativeTask[];
  onBackToDashboard: () => void;
}

export const ChatViews: React.FC<ChatViewsProps> = ({
  currentUser, threads, setThreads, messages, setMessages, 
  selectedThreadId, setSelectedThreadId, tasks, onBackToDashboard
}) => {
  const [inputText, setInputText] = useState('');
  const [showStickers, setShowStickers] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'group' | 'personal'>('all');

  const bottomRef = useRef<HTMLDivElement>(null);

  // Filter threads
  const filteredThreads = threads.filter(t => {
    if (activeTab === 'all') return true;
    return t.type === activeTab;
  });

  const selectedThread = threads.find(t => t.id === selectedThreadId);
  const selectedThreadMessages = selectedThreadId ? (messages[selectedThreadId] || []) : [];

  // Scroll to bottom on updates
  useEffect(() => {
    if (selectedThreadId && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedThreadId, selectedThreadMessages.length]);

  // Handle reaction toggles on chat messages
  const handleReactionClick = (messageId: string) => {
    if (!selectedThreadId) return;

    setMessages(prev => {
      const threadMsgs = prev[selectedThreadId] || [];
      const updatedMsgs = threadMsgs.map(msg => {
        if (msg.id === messageId) {
          // Toggle sticker reaction count
          const updatedContent = msg.content;
          // React with simple alert
          return {
            ...msg,
            reactionMe: !((msg as any).reactionMe)
          };
        }
        return msg;
      });
      return {
        ...prev,
        [selectedThreadId]: updatedMsgs
      };
    });
  };

  // Pre-programmed simulated answers for each contact
  const getSubsequentBotReply = (threadId: string, userMessage: string): string => {
    const textLower = userMessage.toLowerCase();
    if (threadId === 'thread-coolguy') {
      if (textLower.includes('大燈') || textLower.includes('車')) {
        return '對的！記得裝好前後燈，晚上安全最重要。待會集合見！';
      }
      return '收到！那下午三點我們準時在公館水源地出口不見不散！🚴';
    }
    if (threadId === 'thread-brunch') {
      return '林小華：好的，我也快到囉，先在路口等大家！';
    }
    if (threadId === 'thread-badminton') {
      return '陳大文：收到！我們帶了三筒羽球，放心來玩就好。';
    }

    // Check if is a dynamically joined task room
    const taskId = threadId.replace('thread-', '');
    
    if (threadId.startsWith('thread-swipe-')) {
      const swipeId = threadId.replace('thread-', '');
      if (swipeId === 'swipe-lucas') {
        return 'Lucas：哈哈！太棒了，那我們週末早上約吃早午餐或者一起去打球囉！期待跟你碰面！🏸☕';
      }
      if (swipeId === 'swipe-sarah') {
        return 'Sarah：哇，真的嗎！我也很高興能認識你，有空可以一起去那家有 5 隻大橘貓的貓咪咖啡廳！☕🐾';
      }
      if (swipeId === 'swipe-emma') {
        return 'Emma：好啊！這週五晚上剛好有音樂表演，到時我們約在大草皮那邊見好了！🎸';
      }
      if (swipeId === 'swipe-leo') {
        return '阿智 Leo：讚啦！這週末剛好有新款遊戲聯名活動，或是我們晚上一起出來騎河濱吹個風！🚴🔥';
      }
      if (swipeId === 'swipe-bebe') {
        return '貝貝 Bebe：好期待喔！那家早午餐的厚鬆餅超有名的，那我們週六早上見囉，到時候一起猛拍照！📸🥞';
      }
      if (swipeId === 'swipe-kev') {
        return '宸愷 Kev：好的，我也挺期待的。這週五下午我會在總圖二期二樓自習，有空可以來討論或一起專注。📖';
      }
      if (swipeId === 'swipe-sunny') {
        return '子晴 Sunny：太好了！那我就拿起我的古董相機，這週一起去尋找校園好拍的秘密光影美景囉！📸✨';
      }
    }

    const matchedTask = tasks.find(t => t.id === taskId);
    if (matchedTask) {
      return `${matchedTask.createdByName}：太棒了，很高興你能加入本項「${matchedTask.title}」！大家可以在這裡多加討論活動細節喔！👋`;
    }

    return '哈哈！聽起來不錯耶。那我們晚點線上繼續聊，揪團加油！';
  };

  // Sending a chat message
  const handleSendMessage = (textToSend?: string, isSticker: boolean = false) => {
    if (!selectedThreadId) return;
    const content = textToSend || inputText;
    if (!content.trim()) return;

    const newMessageId = `m-user-${Date.now()}`;
    const newMessage: ChatMessage = {
      id: newMessageId,
      threadId: selectedThreadId,
      senderName: currentUser.name,
      senderAvatar: currentUser.avatar,
      senderIsMe: true,
      content: content,
      timestampLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: isSticker ? 'sticker' : 'text',
      stickerIcon: isSticker ? content : undefined
    };

    // Update messages
    setMessages(prev => {
      const currentArr = prev[selectedThreadId] || [];
      return {
        ...prev,
        [selectedThreadId]: [...currentArr, newMessage]
      };
    });

    // Update thread last message
    setThreads(prev => prev.map(t => {
      if (t.id === selectedThreadId) {
        return {
          ...t,
          lastMessageContent: isSticker ? '傳送了一個表情貼圖' : content,
          lastMessageTime: newMessage.timestampLabel,
          unreadCount: 0
        };
      }
      return t;
    }));

    setInputText('');
    setShowStickers(false);

    // Trigger automated response 1 second later
    setTimeout(() => {
      const replyText = getSubsequentBotReply(selectedThreadId, content);
      const botMessageId = `m-bot-${Date.now()}`;
      const botMessage: ChatMessage = {
        id: botMessageId,
        threadId: selectedThreadId,
        senderName: selectedThread?.title.split(' ')[0] || 'Campus Friend',
        senderAvatar: selectedThread?.avatar || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r',
        senderIsMe: false,
        content: replyText,
        timestampLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      };

      setMessages(prev => {
        const currentArr = prev[selectedThreadId] || [];
        return {
          ...prev,
          [selectedThreadId]: [...currentArr, botMessage]
        };
      });

      setThreads(prev => prev.map(t => {
        if (t.id === selectedThreadId) {
          return {
            ...t,
            lastMessageContent: replyText,
            lastMessageTime: botMessage.timestampLabel
          };
        }
        return t;
      }));

    }, 1000);
  };

  // Find associated task for branding
  const getAssociatedTask = () => {
    if (!selectedThreadId) return null;
    if (selectedThreadId === 'thread-coolguy') return tasks.find(t => t.id === 'task-2');
    if (selectedThreadId === 'thread-brunch') return tasks.find(t => t.id === 'task-5');
    if (selectedThreadId === 'thread-badminton') return tasks.find(t => t.id === 'task-7');
    return null;
  };

  const associatedTask = getAssociatedTask();

  // Stickers array
  const stickerList = ['👍', '❤️', '🔥', '😆', '🚴', '🍕', '🏸', '📝', '✨', '👏'];

  return (
    <div className="min-h-screen bg-slate-50 text-on-surface font-body-md flex flex-col relative pb-20">
      {/* 2-COLUMN VIEW DESIGN */}
      {!selectedThreadId ? (
        // ==========================================
        // CHAT LIST SIDEBAR INDEX (Screen 10 & 24)
        // ==========================================
        <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full">
          <header className="bg-surface shadow-[0_4px_20px_rgba(0,91,191,0.04)] h-16 flex justify-between items-center px-4 fixed top-0 w-full z-50 max-w-2xl mx-auto left-0 right-0">
            <h1 className="text-md md:text-lg font-sans font-bold text-primary flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>訊息服務列表</span>
            </h1>
            <div className="flex items-center gap-2">
              <button className="p-1.5 rounded-full hover:bg-slate-100 transition-colors text-primary">
                <span className="material-symbols-outlined font-bold">search</span>
              </button>
            </div>
          </header>

          <main className="mt-16 flex-1 py-4 space-y-4 px-4 overflow-y-auto w-full">
            {/* Friendly reminder bulletin safety card inside inbox list header area */}
            <div className="bg-surface border border-outline-variant/30 rounded-2xl p-4 flex gap-3 shadow-sm alert-glow">
              <div className="w-10 h-10 bg-error/10 text-error rounded-full flex items-center justify-center flex-shrink-0">
                <ShieldAlert className="w-5 h-5 text-error" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-error uppercase font-mono tracking-wider flex items-center gap-1">
                  <span>安全防詐與誠信警示</span>
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans">
                  本系統與學校學籍系統連動。見面進行校園互助或物品交換時，請務必選擇大廳或校警能見等公開明亮環境、保持和善態度，若遭遇危險請立即點擊求助！
                </p>
              </div>
            </div>

            {/* Quick message class sub-tab filter selectors */}
            <div className="flex gap-1 border-b border-[#e1e6eb] pb-3 pt-1">
              {(['all', 'group', 'personal'] as const).map(tab => (
                <button
                  key={tab}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer ${activeTab === tab ? 'bg-primary-container text-on-primary-container font-extrabold scale-[1.01]' : 'text-outline hover:bg-slate-100'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'all' ? '全部對話' : tab === 'group' ? '協作群組' : '私人對話'}
                </button>
              ))}
            </div>

            {/* Thread Lists loop */}
            <div className="space-y-2">
              {filteredThreads.map(thr => (
                <div 
                  key={thr.id}
                  className="bg-white rounded-xl border border-outline-variant/20 p-4 transition-all duration-150 hover:shadow-md cursor-pointer flex items-center justify-between group active:scale-[0.99]"
                  onClick={() => {
                    setSelectedThreadId(thr.id);
                    // Clear unread bubbles
                    setThreads(prev => prev.map(t => t.id === thr.id ? { ...t, unreadCount: 0 } : t));
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img 
                        src={thr.avatar} 
                        alt={thr.title} 
                        className="w-11 h-11 rounded-full object-cover border border-slate-100 shadow-sm" 
                      />
                      {thr.unreadCount && thr.unreadCount > 0 ? (
                        <div className="absolute -top-1 -right-1 bg-secondary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                          {thr.unreadCount}
                        </div>
                      ) : null}
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-sans font-bold text-sm text-on-surface line-clamp-1">{thr.title}</h3>
                        {thr.categoryTag && (
                          <span className="text-[9px] text-[#006b5c] bg-[#e6fbf7] px-1.5 py-0.5 rounded font-medium">
                            {thr.categoryTag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-on-surface-variant font-sans line-clamp-1">
                        {thr.lastMessageContent}
                      </p>
                    </div>
                  </div>

                  <div className="text-right flex flex-col justify-between h-9 flex-shrink-0 select-none">
                    <span className="text-[10px] text-outline font-mono">{thr.lastMessageTime}</span>
                    <span className="text-[10px] text-outline-variant bg-slate-50 border px-1.5 py-0.5 rounded-full capitalize font-sans">
                      {thr.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      ) : (
        // ==========================================
        // ACTIVE INTERACTIVE CHATROOM MODULE 
        // ==========================================
        <div className="flex-1 flex flex-col justify-between max-w-2xl mx-auto w-full bg-slate-50 h-screen fixed top-0 left-0 right-0 z-50">
          
          {/* Header Block with Actions */}
          <header className="bg-surface shadow-[0_4px_20px_rgba(0,91,191,0.04)] h-16 flex items-center justify-between px-3 shrink-0">
            <div className="flex items-center gap-2">
              <button 
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
                onClick={() => setSelectedThreadId(null)}
              >
                <ArrowLeft className="w-5 h-5 text-primary" />
              </button>
              <img 
                src={selectedThread?.avatar} 
                alt="Avatar" 
                className="w-9.5 h-9.5 rounded-full object-cover border" 
              />
              <div>
                <h2 className="font-sans font-bold text-sm text-on-surface line-clamp-1 max-w-[140px] md:max-w-xs">{selectedThread?.title}</h2>
                <p className="text-[9px] text-[#006b5c] font-medium tracking-wide uppercase font-sans">
                  {selectedThread?.statusLabel || 'Online'}
                </p>
              </div>
            </div>

            {/* Simulated Phone and Video calls */}
            <div className="flex items-center gap-1">
              <button 
                className="p-2 rounded-full text-primary hover:bg-slate-100 active:scale-90"
                onClick={() => alert(`即將對「${selectedThread?.title}」撥打學校網路加密語音電話...`)}
              >
                <Phone className="w-4 h-4 text-primary" />
              </button>
              <button 
                className="p-2 rounded-full text-primary hover:bg-slate-100 active:scale-90"
                onClick={() => alert(`即將對「${selectedThread?.title}」發起視訊通話請求...`)}
              >
                <Video className="w-4 h-4 text-primary" />
              </button>
              <button className="p-2 rounded-full text-primary hover:bg-slate-100">
                <MoreVertical className="w-4 h-4 text-primary" />
              </button>
            </div>
          </header>

          {/* Floating task context card embedded directly inside message wrapper area */}
          {associatedTask && (
            <section className="bg-secondary p-3.5 flex items-center justify-between text-white shrink-0 shadow shadow-secondary/10 select-none animate-in slide-in-from-top-12 duration-300">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white flex-shrink-0 animate-bounce">
                  <span className="material-symbols-outlined !text-xl text-white">directions_bike</span>
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xs">專屬任務貼圖共備空間</h3>
                  <p className="text-[10px] text-white/80 line-clamp-1 leading-normal font-sans">
                    {associatedTask.title} · {associatedTask.location} · 報酬: {associatedTask.reward || 0} 揪幣
                  </p>
                </div>
              </div>
              <button 
                className="border border-white/40 hover:bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold font-sans transition-colors active:scale-95 text-white whitespace-nowrap"
                onClick={() => alert(`任務詳情說明：${associatedTask.description}`)}
              >
                了解詳情
              </button>
            </section>
          )}

          {/* Messages Flow Area */}
          <main className="flex-grow overflow-y-auto px-4 py-4 space-y-4 min-h-0">
            {selectedThreadMessages.map(msg => {
              const fromMe = msg.senderIsMe;
              
              return (
                <div 
                  key={msg.id} 
                  className={`flex items-end gap-2.5 ${fromMe ? 'justify-end' : 'justify-start'} group/msg`}
                >
                  {!fromMe && (
                    <img 
                      src={msg.senderAvatar} 
                      alt="Sender" 
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0 border" 
                    />
                  )}

                  <div className="max-w-[70%]">
                    {/* Timestamp overlay info */}
                    {!fromMe && (
                      <span className="text-[9px] text-[#727785] pl-1 font-serif">{msg.senderName}</span>
                    )}

                    {/* Chat Bubble card container */}
                    <div 
                      onClick={() => handleReactionClick(msg.id)}
                      className={`relative px-4 py-3 rounded-2xl text-xs font-sans leading-relaxed shadow-sm transition-all cursor-pointer ${fromMe ? 'bg-primary text-white rounded-br-none' : 'bg-white border rounded-bl-none text-on-surface'} hover:brightness-95`}
                    >
                      {msg.type === 'sticker' ? (
                        <span className="text-3xl select-none block text-center animate-bounce duration-500">{msg.stickerIcon}</span>
                      ) : (
                        msg.content
                      )}

                      {/* Visual reaction indicator toggles click */}
                      {((msg as any).reactionMe) && (
                        <div className="absolute -bottom-2 -right-1 bg-white border rounded-full px-1.5 py-0.5 shadow flex items-center gap-0.5 animate-in scale-in duration-100 select-none">
                          <CheckCircle className="w-3 h-3 text-secondary" />
                          <span className="text-[8px] font-bold text-secondary font-mono">1</span>
                        </div>
                      )}
                    </div>

                    <span className="text-[8px] text-outline-variant font-mono mt-0.5 block px-1 text-right">
                      {msg.timestampLabel}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef}></div>
          </main>

          {/* Bottom stickers collection popups selection list view */}
          {showStickers && (
            <div className="bg-white border-t p-3 shrink-0 flex gap-3 overflow-x-auto no-scrollbar animate-in slide-in-from-bottom border-outline-variant-low">
              {stickerList.map(stick => (
                <button
                  key={stick}
                  className="text-2xl p-1.5 active:scale-90 transition-transform cursor-pointer"
                  onClick={() => handleSendMessage(stick, true)}
                >
                  {stick}
                </button>
              ))}
            </div>
          )}

          {/* Input text send bar */}
          <footer className="bg-white px-4 py-3 flex items-center gap-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] border-t border-outline-variant/10 shrink-0 select-none">
            <button 
              className={`p-2 rounded-full hover:bg-slate-100 transition-colors ${showStickers ? 'bg-secondary-container text-secondary' : 'text-outline-variant'}`}
              onClick={() => setShowStickers(!showStickers)}
            >
              <Smile className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-slate-100 rounded-full px-4 items-center flex border focus-within:bg-white focus-within:border-primary transition-all">
              <input 
                className="w-full bg-transparent border-none py-2.5 outline-none text-xs focus:ring-0 placeholder:text-outline/60" 
                type="text" 
                placeholder="輸入您的回覆..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
            </div>
            <button 
              className="bg-primary text-white p-2.5 rounded-full shadow-md hover:shadow-lg active:scale-90 transition-all flex items-center justify-center cursor-pointer"
              onClick={() => handleSendMessage()}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};
