/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ArrowLeft, Search, Plus, Send, Compass, User, ThumbsUp, Bike, GraduationCap, 
  Clock, Calendar, Coins, CheckCircle, Flame, Utensils, Music, Trophy, 
  MapPin, Map, Layers, ChevronRight, CheckSquare, PlusCircle, AlertTriangle, 
  SlidersHorizontal, Sparkles, Navigation, Info, Group, Check
} from 'lucide-react';
import { CollaborativeTask, TaskCategory } from '../types';

interface TaskViewsProps {
  currentUser: { id: string; name: string; avatar: string; points: number };
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
  tasks: CollaborativeTask[];
  setTasks: React.Dispatch<React.SetStateAction<CollaborativeTask[]>>;
  setScreen: (screen: string) => void;
  setThreadOnJoin: (threadId: string) => void;
}

export const TaskMapAndList: React.FC<TaskViewsProps> = ({ 
  currentUser, setCurrentUser, tasks, setTasks, setScreen, setThreadOnJoin 
}) => {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map'); // 'map' is default following screen 11 (Map Canvas background)
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle joining a task
  const handleJoinTask = (taskId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setTasks(prevTasks => prevTasks.map(t => {
      if (t.id === taskId) {
        if (t.joinedMe) return t; // Already joined
        
        const isCompleted = t.joinedHelpersCount >= t.joinProgressMax!;
        if (isCompleted) {
          alert('本項活動招募已滿額囉！');
          return t;
        }

        // Add me
        const newHelpersCount = t.joinedHelpersCount + 1;
        // Award points to CURRENT_USER
        setCurrentUser((prev: any) => ({
          ...prev,
          points: prev.points + 10 // +10 points as show in PeterLin badge screen
        }));

        alert(`恭喜加入「${t.title}」！已為您增加 10 點社群使用積分。`);

        return {
          ...t,
          joinedMe: true,
          joinedHelpersCount: newHelpersCount,
          joinedHelperAvatars: [...t.joinedHelperAvatars, currentUser.avatar]
        };
      }
      return t;
    }));
  };

  // Categories mapping to custom icons & tags
  const categoriesList = [
    { key: 'all', label: '全部活動' },
    { key: 'dining', label: '美食聚餐' },
    { key: 'sports', label: '運動健身' },
    { key: 'arts', label: '藝文展覽' },
    { key: 'support', label: '技術支援/學業協助' }
  ];

  // Filtering tasks
  const filteredTasks = tasks.filter(task => {
    const matchCategory = selectedCategory === 'all' || task.category === selectedCategory;
    const matchQuery = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  // Material symbols icon selectors
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'dining': return <Utensils className="w-5 h-5 text-primary" />;
      case 'sports': return <Bike className="w-5 h-5 text-secondary" />;
      case 'arts': return <Music className="w-5 h-5 text-tertiary" />;
      default: return <GraduationCap className="w-5 h-5 text-primary" />;
    }
  };

  const getStyleByCategory = (cat: string) => {
    switch (cat) {
      case 'dining': return { bg: 'bg-primary/10', text: 'text-primary', labelBg: 'bg-primary/10 text-primary' };
      case 'sports': return { bg: 'bg-secondary/15', text: 'text-secondary', labelBg: 'bg-secondary/10 text-secondary' };
      case 'arts': return { bg: 'bg-tertiary/15', text: 'text-tertiary', labelBg: 'bg-tertiary/10 text-tertiary' };
      default: return { bg: 'bg-slate-100', text: 'text-slate-600', labelBg: 'bg-slate-100 text-slate-600' };
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex flex-col relative pb-24">
      {/* Header */}
      <header className="bg-surface shadow-[0_4px_20px_rgba(0,91,191,0.04)] fixed top-0 w-full z-50 flex justify-between items-center px-5 h-16 max-w-2xl mx-auto left-0 right-0">
        <div className="flex items-center gap-3">
          <button className="text-primary hover:bg-surface-container-low transition-colors rounded-full p-1.5 active:scale-95 duration-100">
            <span className="material-symbols-outlined font-bold text-primary">arrow_back</span>
          </button>
          <img 
            alt="Jewel Logo" 
            className="h-10 w-auto object-contain flex-shrink-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r"
          />
          <h1 className="text-md md:text-lg font-sans font-bold text-primary truncate ml-1">
            {viewMode === 'map' ? '揪團探索地圖' : '附近需求總覽'}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
            className="text-primary hover:bg-surface-container-low p-2 rounded-full active:scale-95 transition-all text-xs font-semibold flex items-center gap-1 border border-primary/20"
          >
            {viewMode === 'map' ? <Layers className="w-4 h-4" /> : <Map className="w-4 h-4" />}
            <span>{viewMode === 'map' ? '地圖' : '看板'}</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 mt-16 w-full max-w-2xl mx-auto relative min-h-screen">
        
        {/* VIEW 1: MAP BACKGROUND CANVAS */}
        {viewMode === 'map' && (
          <div className="fixed inset-0 z-0 max-w-2xl mx-auto left-0 right-0">
            {/* Map Blueprint Backdrop */}
            <img 
              alt="Taipei Campus Architect Map" 
              className="w-full h-full object-cover opacity-60 grayscale-[15%] pointer-events-none" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvhDyXNPCRFFa_yFGYfDZzb6I9G3l73qki80CckRcvPn1IAhxdMQJhqhY_Wl64rStb3b94YD--UgLA37HbfEYDELexi2JqEyPw-Q2w28xe5htKkgsdjlhAwUxjzaTCBddWBpQsuHs8Sad57jDe5ncnCd4xMEkB7FgXWFTS_-mE1Zj42hrEl4_j0OsIabIDni84HtZkj_LuR8xQcmo-7j901QXRhYuZUOq8MwjhauyM99rK6XDTNPQ7v2vjnIH_bq6Z_ubk8QDcRjoN"
            />
            {/* Pulsing interactive pin markers corresponding to actual activities */}
            <div 
              className="absolute top-[28%] left-[36%] cursor-pointer group"
              onClick={() => {
                setSelectedCategory('dining');
                alert('已為您在地圖上定位「刷乃葉吃到飽聚餐」點！');
              }}
            >
              <div className="bg-primary text-white p-3 rounded-full shadow-lg border-2 border-white animate-bounce group-hover:scale-110 transition-transform">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-md font-sans text-on-surface whitespace-nowrap font-bold block">
                涮乃葉吃到飽
              </div>
            </div>

            <div 
              className="absolute top-[52%] left-[64%] cursor-pointer group"
              onClick={() => {
                setSelectedCategory('sports');
                alert('已為您在地圖上定位「單車夜騎集合點」！');
              }}
            >
              <div className="bg-secondary text-white p-3 rounded-full shadow-lg border-2 border-white animate-pulse group-hover:scale-110 transition-transform">
                <Bike className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-md font-sans text-on-surface whitespace-nowrap font-bold block">
                單車夜騎去
              </div>
            </div>

            <div 
              className="absolute top-[68%] left-[28%] cursor-pointer group"
              onClick={() => {
                setSelectedCategory('sports');
                alert('已為您在地圖上定位「室外羽球練習球場」！');
              }}
            >
              <div className="bg-secondary text-white p-3 rounded-full shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white">sports_tennis</span>
              </div>
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-md font-sans text-on-surface whitespace-nowrap font-bold">
                清晨羽球團
              </div>
            </div>
            
            {/* Floating zoom overlay helpers */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
              <button 
                className="bg-white/80 p-2 rounded-xl shadow border border-outline-variant/30 text-primary active:scale-95 cursor-pointer font-bold"
                onClick={() => alert('GPS 定位：校本部行政特區 - 精確鎖定')}
              >
                <Navigation className="w-4 h-4 text-primary" />
              </button>
              <button className="bg-white/80 p-2 rounded-xl shadow border border-outline-variant/30 text-primary active:scale-95 cursor-pointer">
                <SlidersHorizontal className="w-4 h-4 text-primary" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: FULL ISOMETRIC 3D RENDER (Screen FEED Mode) */}
        {viewMode === 'list' && (
          <section className="relative w-full h-[220px] overflow-hidden bg-primary/5 rounded-b-2xl border-b border-outline-variant/20 shadow-sm animate-in fade-in duration-300">
            <img 
              alt="Futuristic Isometric Campus" 
              className="w-full h-full object-cover opacity-60 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDwDDOvM4WuE59aVPcgMOt8LSv4ow7iNZc595f3-B9INlEGiv1oHhZiq_CmvS1BsHdM7Bhdj0ACdw10tm2y_vHGA-TW_YCAQPxcw08Sf9TSvx9QZCpuA6q1TZz_nY0h_pwP0iltypWBa3KWlv9lXsuUeRm_VeLp6nr94MNBZhqknERlm5AR3_qqVyzOws-yQatINYXEzcIkOjK3LsrgXk4fAlQYsmieAKgHL8nPCa9rpNwaqnIRcT_-A9FMAaLgp6BJO8621jxC9l"
            />
            {/* Local ambient dots on the clean 3D graphic */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-secondary rounded-full animate-ping"></div>
            
            {/* Visual Title Header */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#F7FAFD] to-transparent flex flex-col justify-end">
              <h2 className="text-headline-md font-sans font-bold text-on-surface">校園週邊即時看板</h2>
              <p className="text-xs text-on-surface-variant">快速搜尋鄰近同學發佈的支援請求或協作召募</p>
            </div>
          </section>
        )}

        {/* COMPONENT CONTENT OVERLAY CHIPS & BENTO LISTS */}
        <div className={`relative z-10 p-5 ${viewMode === 'map' ? 'pt-4' : 'pt-2'} space-y-5`}>
          {/* Quick Category Filters Horizontal Scrolling Scroller */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1.5 pt-1">
            {categoriesList.map(cat => {
              const active = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  className={`cursor-pointer px-4.5 py-2 rounded-full font-serif text-xs font-semibold whitespace-nowrap transition-all duration-200 border border-outline-variant/20 shadow-sm ${active ? 'bg-secondary-container text-on-secondary-container font-extrabold border-secondary' : 'bg-white/90 backdrop-blur text-on-surface-variant hover:bg-white'}`}
                  onClick={() => setSelectedCategory(cat.key)}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search box overlay */}
          <div className="relative flex items-center group">
            <Search className="w-5 h-5 text-outline absolute left-4 pointer-events-none group-focus-within:text-primary transition-colors" />
            <input 
              className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur border border-outline-variant rounded-full text-body-sm font-sans focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-outline"
              type="text" 
              placeholder="搜尋附近的揪團標題或關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Dynamic Feed list header */}
          <div className="flex justify-between items-center">
            <h3 className="text-headline-sm font-sans font-bold text-on-surface flex items-center gap-1.5">
              <span>{selectedCategory === 'all' ? '探索附近活動' : categoriesList.find(c => c.key === selectedCategory)?.label}</span>
              <span className="text-[11px] font-mono font-medium text-outline bg-surface-container py-0.5 px-2 rounded-full">{filteredTasks.length} 條新動態</span>
            </h3>
          </div>

          {/* Grid Cards lists */}
          <div className="grid grid-cols-2 gap-4">
            {filteredTasks.map(task => {
              const styles = getStyleByCategory(task.category);
              const progressPct = task.joinProgressMax ? Math.min(100, Math.floor((task.joinedHelpersCount / task.joinProgressMax) * 100)) : 100;
              const completed = task.joinedHelpersCount >= task.joinProgressMax!;

              return (
                <div 
                  key={task.id}
                  className="bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow active:scale-[0.99] duration-150 cursor-pointer"
                >
                  {/* Category ribbon / image representation */}
                  <div className="p-3 bg-slate-50 border-b border-outline-variant/10 relative">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono tracking-widest font-bold ${styles.labelBg}`}>
                        {task.customStatusLabel || task.category.toUpperCase()}
                      </span>
                      {task.reward ? (
                        <div className="flex items-center gap-0.5 text-xs text-primary font-bold">
                          <Coins className="w-3.5 h-3.5 text-yellow-500" />
                          <span>{task.reward} 揪幣</span>
                        </div>
                      ) : (
                        <span className="text-[9px] text-outline">純友情協作</span>
                      )}
                    </div>
                    <h4 className="font-sans font-bold text-sm text-on-surface mt-2 truncate">{task.title}</h4>
                    <p className="text-[11px] text-on-surface-variant font-sans line-clamp-2 mt-1 leading-normal h-8">
                      {task.description}
                    </p>
                  </div>

                  {/* Bottom progression section matching screens details */}
                  <div className="p-3 bg-white mt-auto space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-medium text-outline-variant">
                      <span className="text-on-surface-variant text-[11px] font-medium flex items-center gap-0.5">
                        <MapPin className="w-3.5 h-3.5 text-outline" /> {task.location ? task.location.split('市')[0].split('區')[0] : '校區附近'}
                      </span>
                      <span className="text-secondary font-mono tracking-wide">
                        {task.joinedHelpersCount}/{task.joinProgressMax} Joined
                      </span>
                    </div>

                    {/* Mint progression bar */}
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-secondary-fixed h-full transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      ></div>
                    </div>

                    {/* Actions and Social helpers */}
                    <div className="flex justify-between items-center gap-2 pt-1">
                      <div className="flex -space-x-2.5 overflow-hidden flex-shrink-0">
                        {task.joinedHelperAvatars.slice(0, 3).map((av, idx) => (
                          <img 
                            key={idx} 
                            src={av} 
                            className="w-5.5 h-5.5 rounded-full border-2 border-white object-cover" 
                            alt="Helper" 
                          />
                        ))}
                        {task.joinedHelpersCount > 3 && (
                          <div className="w-5.5 h-5.5 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold text-outline">
                            +{task.joinedHelpersCount - 3}
                          </div>
                        )}
                      </div>
                      
                      <button 
                        disabled={task.joinedMe || completed}
                        className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-colors active:scale-95 duration-100 cursor-pointer ${task.joinedMe ? 'bg-slate-100 text-outline-variant' : completed ? 'bg-slate-100 text-outline' : 'bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-white'}`}
                        onClick={(e) => {
                          handleJoinTask(task.id, e);
                          // Simulated match thread join inside PeterLin state
                          if (task.createdByUserId === 'coolguy') setThreadOnJoin('thread-coolguy');
                        }}
                      >
                        {task.joinedMe ? '已加入' : completed ? '額滿' : '加入任務'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* MutAid indicator tip block on bottom */}
          <div className="p-4 bg-white/75 backdrop-blur border border-outline-variant/30 rounded-2xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                <Bike className="w-6 h-6 text-secondary" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xs font-mono font-bold tracking-widest text-primary">COLLABORATIVE TASK</h3>
                <p className="text-headline-sm font-sans text-sm font-bold">Riverfront Cycling Meetup</p>
              </div>
            </div>
            <button 
              className="bg-secondary text-on-secondary px-4 py-2.5 rounded-full text-xs font-bold font-sans shadow-md shadow-secondary/10 hover:brightness-110 active:scale-95 duration-100"
              onClick={() => {
                alert('即將帶您進入「CoolGuy」單車夜騎協作群組聊天空間！');
                setScreen('chat');
              }}
            >
              View Task
            </button>
          </div>
        </div>

        {/* Global Floating Action button bottom right */}
        <div className="fixed bottom-24 right-5 z-40">
          <button 
            className="bg-primary text-white flex items-center gap-2 px-5 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl active:scale-95 duration-100 transition-all cursor-pointer"
            onClick={() => setScreen('post-task')}
          >
            <Plus className="w-5 h-5 text-white" />
            <span className="text-sm font-sans font-bold">發佈任務</span>
          </button>
        </div>
      </main>
    </div>
  );
};

interface PostTaskFormProps {
  currentUser: { id: string; name: string; avatar: string; points: number };
  tasks: CollaborativeTask[];
  setTasks: React.Dispatch<React.SetStateAction<CollaborativeTask[]>>;
  setScreen: (screen: string) => void;
}

// ==========================================
// 5. POST TASK FORM (Transactional gig or chores)
// ==========================================
export const PostTaskForm: React.FC<PostTaskFormProps> = ({ 
  setScreen, currentUser, tasks, setTasks 
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>('all');
  const [description, setDescription] = useState('');
  const [reward, setReward] = useState<number>(100);
  const [deadline, setDeadline] = useState('2026-06-08');
  const [location, setLocation] = useState('');

  const availableTags = [
    { key: 'assistance', label: '學業協助' },
    { key: 'errand', label: '生活代辦' },
    { key: 'support', label: '技術支援' },
    { key: 'all', label: '跑腿外送' }
  ];

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert('請填寫任務標題與說明內容！');
      return;
    }

    const newTask: CollaborativeTask = {
      id: `task-custom-${Date.now()}`,
      title,
      category,
      customStatusLabel: category.toUpperCase(),
      description,
      reward: reward || 0,
      deadline,
      location: location || '校園中園區廣場',
      joinProgressMax: 3,
      joinedHelpersCount: 0,
      joinedHelperAvatars: [],
      createdByUserId: currentUser.id,
      createdByName: currentUser.name,
      createdByAvatar: currentUser.avatar,
      timeAgoLabel: 'Just now'
    };

    setTasks([newTask, ...tasks]);
    alert(`成功發佈協作生命任務「${title}」！`);
    setScreen('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-on-surface font-body-md">
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm flex items-center justify-between px-5 h-16 max-w-2xl mx-auto left-0 right-0">
        <button 
          className="active:scale-95 transition-transform text-outline"
          onClick={() => setScreen('dashboard')}
        >
          <ArrowLeft className="w-5 h-5 text-primary" />
        </button>
        <h1 className="text-md font-sans font-bold text-primary">發佈任務</h1>
        <div className="w-5"></div>
      </header>

      <main className="pt-20 pb-36 max-w-2xl mx-auto">
        <section className="px-5 py-6 bg-gradient-to-b from-primary-fixed/20 to-transparent flex flex-col items-center text-center">
          <div className="w-14 h-14 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shadow-md mb-3">
            <span className="material-symbols-outlined font-extrabold !text-2xl">assignment_add</span>
          </div>
          <h2 className="text-xl font-sans font-bold text-on-primary-fixed tracking-tight uppercase">Start A New Task</h2>
          <p className="text-xs text-on-surface-variant mt-1 px-8">讓校園夥伴協助你完成日常瑣事，輕鬆減輕生活負擔</p>
        </section>

        <form onSubmit={handlePostSubmit} className="px-5 space-y-6">
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#727785] ml-1">任務標題</label>
            <div className="bg-white rounded-xl px-3 py-3 shadow-sm border border-outline-variant/40">
              <input 
                className="w-full bg-transparent border-none p-0 outline-none text-body-md focus:ring-0 placeholder:text-outline/50" 
                type="text" 
                placeholder="例如：代取包裹、程式除錯、筆記共筆"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#727785] ml-1">任務類別</label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag.key}
                  type="button"
                  className={`px-4 py-2 rounded-full border text-xs font-semibold transition-all cursor-pointer ${category === tag.key ? 'border-primary/20 bg-primary/10 text-primary font-bold' : 'border-outline-variant bg-surface-container-low text-on-surface-variant hover:bg-slate-100'}`}
                  onClick={() => setCategory(tag.key)}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#727785] ml-1">任務描述</label>
            <div className="bg-white rounded-xl px-3 py-3 shadow-sm border border-outline-variant/40">
              <textarea 
                className="w-full bg-transparent border-none p-0 outline-none text-body-md focus:ring-0 placeholder:text-outline/50 min-h-[100px] resize-none" 
                placeholder="請詳細說明任務內容與難易程度、預期交付或會合地點、注意事項等..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={300}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#727785] ml-1">任務報酬</label>
              <div className="flex items-center bg-white rounded-xl px-3 py-3 shadow-sm border border-outline-variant/40">
                <Coins className="w-5 h-5 text-yellow-500 mr-2" />
                <input 
                  className="w-full bg-transparent border-none p-0 outline-none text-body-md focus:ring-0" 
                  type="number" 
                  value={reward}
                  onChange={(e) => setReward(parseInt(e.target.value) || 0)}
                  min="0"
                />
                <span className="text-xs text-on-surface-variant font-bold ml-1 font-sans">揪幣</span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#727785] ml-1">截止日期</label>
              <div className="flex items-center bg-white rounded-xl px-3 py-3 shadow-sm border border-outline-variant/40">
                <Calendar className="w-5 h-5 text-outline mr-2" />
                <input 
                  className="w-full bg-transparent border-none p-0 outline-none text-body-md focus:ring-0" 
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#727785] ml-1">執行地點</label>
            <div className="bg-white rounded-xl px-3 py-3 shadow-sm border border-outline-variant/40 flex items-center justify-between">
              <div className="flex items-center flex-1">
                <MapPin className="w-5 h-5 text-outline mr-2" />
                <input 
                  className="w-full bg-transparent border-none p-0 outline-none text-body-md focus:ring-0 placeholder:text-outline/50" 
                  type="text" 
                  placeholder="例如：總圖書館、第二宿舍交誼廳"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <button 
                type="button" 
                className="text-primary hover:scale-105 transition-transform"
                onClick={() => setLocation('大學行政總圖書館 K書特區')}
              >
                <Map className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Interactive Layer Visual Map Preview */}
          <div className="h-32 rounded-xl overflow-hidden relative shadow-sm border border-outline-variant/20 mb-6">
            <img 
              alt="Live Precise coordinate preview" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2NOeWRr_QG29fe7v-XJH01vPGK67DX8VWfPalGXZyIIX-1rQl5oI_jMCKjUc0Ekd34ILDj2kRGbugiKoeiS3T_jqpCglPnod_Uu6bLjGG4fyjqSZ-82_070sJzRj8iVmE0gfuFnUcFey8Tl9VbNE6kU7tb1sMrtk7F-p_saJZxufIZqNl2lqKqfZc53q0aE70SUx6yQmW0ljp-3ZR1Z7lxN83Pgj2Dgyc5Fiw9kTOIgYYnpEK9gADxqfg3zqkhuxX8jej1EammWzZ"
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <button 
                type="button"
                className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 active:scale-95 duration-100"
                onClick={() => alert('GPS 定位：已自動設定任務精確地理座標點')}
              >
                <span className="material-symbols-outlined text-primary text-sm font-bold">near_me</span>
                <span className="text-xs font-bold text-primary font-sans">設定精確座標</span>
              </button>
            </div>
          </div>

          {/* Absolute bottom actions bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md px-5 py-4 flex flex-col items-center gap-4 z-40 max-w-2xl mx-auto border-t border-outline-variant/10 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            <button 
              type="submit" 
              className="w-full h-14 bg-primary text-on-primary rounded-xl font-headline-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-container active:scale-[0.98] transition-all cursor-pointer font-sans"
            >
              <Send className="w-5 h-5 text-white" />
              <span>確認發佈任務</span>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
