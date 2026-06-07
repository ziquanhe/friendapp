/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Heart, X, ArrowLeft, Search, MessageSquare, Compass, User, Trophy, Star, 
  MapPin, Clock, Calendar, CheckCircle, ChevronRight, Sliders, Check, Bike, 
  Plus, Handshake, ShieldCheck, UserCheck, Flame, Layers, HelpCircle, Sparkles, Edit
} from 'lucide-react';
import { UserProfile, CollaborativeTask } from '../types';

interface SocialMatchProps {
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  potentialSwipes: UserProfile[];
  setPotentialSwipes: React.Dispatch<React.SetStateAction<UserProfile[]>>;
  setScreen: (screen: string) => void;
  // Trigger matching coolguy thread
  onTriggerMatch: () => void;
}

export const TinderSwipe: React.FC<SocialMatchProps> = ({
  potentialSwipes, setPotentialSwipes, setScreen, onTriggerMatch
}) => {
  const [deck, setDeck] = useState<UserProfile[]>(potentialSwipes);
  const [currentIndex, setCurrentXIndex] = useState(0);
  const [matchModalOpen, setMatchModalOpen] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState<UserProfile | null>(null);

  const activeProfile = currentIndex < deck.length ? deck[currentIndex] : null;

  const handleSwipeLeft = () => {
    // Unliked - Proceed to next profile
    if (currentIndex < deck.length) {
      setCurrentXIndex(prev => prev + 1);
    }
  };

  const handleSwipeRight = () => {
    // Liked! Trigger match for Lucas or Sarah
    if (activeProfile) {
      setMatchedProfile(activeProfile);
      setMatchModalOpen(true);
      onTriggerMatch(); // Enable simulated CoolGuy discussion in database
    }
  };

  const keepSwiping = () => {
    setMatchModalOpen(false);
    setCurrentXIndex(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex flex-col relative pb-24">
      {/* Top Header */}
      <header className="flex justify-between items-center px-5 h-16 w-full fixed top-0 z-50 bg-white shadow-sm left-0 right-0 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <button className="p-1.5 hover:bg-slate-100 rounded-full active:scale-95 duration-100">
            <span className="material-symbols-outlined text-primary font-bold">menu</span>
          </button>
          <img 
            alt="Jewel Logo" 
            className="h-8 w-auto object-contain flex-shrink-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r"
          />
          <h1 className="font-display text-md md:text-lg font-bold text-primary tracking-tight">Jewel Match</h1>
        </div>
        <button className="p-1.5 hover:bg-slate-100 rounded-full active:scale-95 duration-100 text-primary">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      {/* Main Container */}
      <main className="mt-16 flex-1 px-5 py-6 max-w-md mx-auto w-full flex flex-col justify-between">
        <div>
          <h2 className="font-sans font-bold text-lg md:text-xl text-on-surface leading-normal">Friendship Match</h2>
          <p className="text-xs text-on-surface-variant font-sans mt-0.5">尋找適合跟你一起解日常任務或下午喝杯咖啡的校園好夥伴吧！</p>
        </div>

        {/* Card Content Display */}
        <div className="my-6 relative flex items-center justify-center min-h-[350px]">
          {activeProfile ? (
            <div className="w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between aspect-[3/4] relative animate-in fade-in zoom-in-95 duration-200">
              
              {/* Top Cover Portrait */}
              <div className="relative h-2/3">
                <img 
                  alt={activeProfile.name} 
                  className="w-full h-full object-cover" 
                  src={activeProfile.avatar}
                />
                {/* Bottom name overlays */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <h3 className="font-sans text-md font-bold text-white">{activeProfile.name}, {activeProfile.age}</h3>
                      <span className="bg-secondary text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold">
                        {activeProfile.mbti || 'ENFJ'}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/80 line-clamp-1 leading-normal font-sans">
                      {activeProfile.bio}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests specifications */}
              <div className="p-5 h-1/3 flex flex-col justify-between bg-white text-on-surface">
                <div className="space-y-1">
                  <span className="text-[10px] tracking-widest uppercase font-mono font-bold text-outline">INTERESTS</span>
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {activeProfile.interests?.map(it => (
                      <span 
                        key={it} 
                        className="bg-primary/5 text-primary text-xs font-semibold px-3 py-1 rounded-full font-serif border border-primary/10"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 text-[#006b5c]">
                  <Handshake className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-secondary font-sans text-xs font-semibold">擁有相同的興趣和生活圈</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-2xl shadow border border-outline-variant/10 max-w-sm">
              <Sparkles className="w-12 h-12 text-secondary-fixed mx-auto mb-3 animate-pulse" />
              <h3 className="font-sans font-bold text-sm text-on-surface">今天已經沒有附近的配對對象囉！</h3>
              <p className="text-xs text-on-surface-variant mt-1.5 leading-relaxed">請稍候再回來，我們將為您重新挖掘探索更有趣的校園夥伴！</p>
              <button 
                className="mt-6 px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold font-sans shadow-md"
                onClick={() => setCurrentXIndex(0)}
              >
                重複配對練習
              </button>
            </div>
          )}
        </div>

        {/* Action swipes buttons */}
        {activeProfile && (
          <div className="flex justify-center items-center gap-6 pb-2">
            <button 
              className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-outline shadow-sm active:scale-90 transition-all duration-150 cursor-pointer"
              onClick={handleSwipeLeft}
            >
              <X className="w-6 h-6 text-on-surface-variant" />
            </button>
            <button 
              className="w-18 h-18 flex items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/20 hover:scale-105 active:scale-90 transition-all duration-150 cursor-pointer"
              onClick={handleSwipeRight}
            >
              <Heart className="w-8 h-8 fill-current text-white" />
            </button>
          </div>
        )}
      </main>

      {/* IT'S A MATCH SUCCESS CELEBRATION MODAL */}
      {matchModalOpen && matchedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-md transition-all">
          <div className="bg-white w-full max-w-[400px] rounded-3xl p-6 flex flex-col gap-6 shadow-2xl items-center text-center animate-in zoom-in-95 duration-200 relative overflow-hidden border border-outline-variant/10">
            {/* Ambient Success ribbon overlay */}
            <div className="absolute top-0 left-0 right-0 bg-inverse-surface py-2 px-margin-mobile flex items-center justify-center gap-2 shadow-sm font-sans">
              <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded text-[10px] font-mono tracking-widest font-extrabold uppercase">
                配對成功
              </span>
              <span className="text-white text-xs opacity-90">Start collaborating now!</span>
            </div>

            <div className="py-4"></div>

            {/* Micro avatar avatars overlay */}
            <div className="flex items-center justify-center gap-4 relative">
              <div className="relative">
                <img 
                  alt="Me" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeHXrl4P_gsq3opHcCrgPAQuGAfMEoDjv2pUOn-9UX-oyZcgVywByfwg6EXjNBm2Qt6FJ5vrvCHXCRX7liSxPd_HUL1tHQyUDunwLWUX3NKioW1tQPjvdvCSDB3dXj7x4mT54Hf9ZtMLoj1klnB_1cBPwhZrF2aBFL8ly3XH1YSEVlmI6QMwwQUTuNzJ7M7-RhjYb9Co2o3P-bZz9bJr9RrwxE9ABYMpFQGcmLtncRb0WJlyb4zx4HfSZXCKInV4jC8-DyAQNXxNdh" 
                  className="w-20 h-20 rounded-full border-4 border-white shadow object-cover"
                />
              </div>
              <div className="absolute -center-x w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white scale-110 shadow z-10">
                <Heart className="w-4 h-4 text-white fill-current" />
              </div>
              <div className="relative">
                <img 
                  alt={matchedProfile.name} 
                  src={matchedProfile.avatar} 
                  className="w-20 h-20 rounded-full border-4 border-white shadow object-cover animate-pulse"
                />
              </div>
            </div>

            <div className="space-y-1.5 mt-2">
              <h3 className="font-sans font-bold text-headline-md text-on-surface">你和 {matchedProfile.name} 成功連線！</h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed max-w-[280px] mx-auto">
                {matchedProfile.name} 也是 {matchedProfile.mbti} 人格！你們都喜歡 <b>{matchedProfile.interests?.slice(0, 2).join(' & ')}</b>，立即開啟聊天討論下一個好玩的校園協作吧！
              </p>
            </div>

            <div className="w-full flex flex-col gap-2 mt-4">
              <button 
                className="w-full bg-primary hover:bg-primary-container text-white py-3.5 rounded-xl font-semibold transition-colors active:scale-95 duration-100 text-sm flex items-center justify-center gap-1.5"
                onClick={() => {
                  setMatchModalOpen(false);
                  setScreen('chat');
                }}
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>立即傳送訊息</span>
              </button>
              <button 
                className="w-full bg-slate-50 border border-slate-200 text-outline-variant hover:bg-slate-100 py-3 rounded-xl font-semibold transition-colors active:scale-95 duration-100 text-xs text-on-surface-variant"
                onClick={keepSwiping}
              >
                稍後再說，繼續探索
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface UserProfileViewProps {
  currentUser: UserProfile;
  setScreen: (screen: string) => void;
}

// ==========================================
// 6. USER PROFILE OVERVIEW SCREEN
// ==========================================
export const UserProfileView: React.FC<UserProfileViewProps> = ({ 
  currentUser, setScreen 
}) => {
  const [activeLongRelationship, setActiveLong] = useState(false);

  // Completed history derived mock
  const completedTaskMocks = [
    { title: 'Cycling', detail: '昨晚 19:30 · 校園西側河濱', icon: <Bike className="w-5 h-5 text-on-surface-variant" /> },
    { title: 'Note sharing', detail: '2天前 · 二期總圖書館', icon: <span className="material-symbols-outlined text-on-surface-variant text-sm font-bold">description</span> }
  ];

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md flex flex-col pb-24">
      {/* Top Banner Navigation */}
      <header className="bg-surface shadow-[0_4px_20px_rgba(0,91,191,0.04)] fixed top-0 w-full z-50 h-16 flex justify-between items-center px-5 max-w-2xl mx-auto left-0 right-0">
        <div className="flex items-center gap-3">
          <button 
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors active:scale-95 duration-100"
            onClick={() => setScreen('dashboard')}
          >
            <ArrowLeft className="w-5 h-5 text-primary" />
          </button>
          <img 
            alt="Jewel Logo" 
            className="h-10 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r"
          />
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors active:scale-95">
          <span className="material-symbols-outlined text-primary font-bold">search</span>
        </button>
      </header>

      {/* Main Container */}
      <main className="mt-20 px-5 max-w-xl mx-auto w-full space-y-6 flex-1">
        
        {/* User Card Top Block */}
        <section className="bg-white rounded-[16px] p-6 shadow-sm shadow-primary/5 text-center flex flex-col items-center border border-outline-variant/10">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-secondary-container p-1 shadow-sm">
              <img 
                alt={currentUser.name} 
                className="w-full h-full object-cover rounded-full" 
                src={currentUser.avatar}
              />
            </div>
            <div className="absolute -bottom-1 -right-2 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full flex items-center gap-1 shadow">
              <span className="material-symbols-outlined !text-[14px]">stars</span>
              <span className="text-[10px] font-bold font-sans">+10 使用積分</span>
            </div>
          </div>
          <h2 className="text-headline-md font-sans font-bold text-on-surface">{currentUser.name}</h2>
          <p className="text-xs text-on-surface-variant max-w-[240px] mx-auto mt-1 leading-normal font-sans">
            {currentUser.bio || '專注於校園互助與單車愛好者'}
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 mt-3">
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded font-mono">
              {currentUser.mbti}
            </span>
            {currentUser.interests?.slice(0, 3).map(it => (
              <span key={it} className="bg-slate-100 text-outline text-[10px] px-2 py-0.5 rounded font-sans">
                {it}
              </span>
            ))}
          </div>
        </section>

        {/* Action Toggle relationship button exact layout */}
        <button 
          className={`w-full py-4 px-6 rounded-[16px] flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer ${activeLongRelationship ? 'bg-secondary text-white shadow-xl shadow-secondary/15' : 'bg-primary text-on-primary shadow-xl shadow-primary/15'}`}
          onClick={() => {
            setActiveLong(!activeLongRelationship);
            alert(activeLongRelationship ? '已取消長期互助匹配篩選。' : '長期校園互助關係媒合篩選已啟用！');
          }}
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-white">handshake</span>
            <span className="text-headline-sm text-sm font-bold text-white font-sans">建立長期互助關係</span>
          </div>
          <span className="bg-white/20 text-white text-[10px] font-bold font-sans px-3 py-1 rounded-full backdrop-blur-sm">
            {activeLongRelationship ? '進行中' : '目前可用'}
          </span>
        </button>

        {/* Quick Edit CTA */}
        <button 
          className="w-full bg-white text-on-surface py-3 px-6 rounded-[16px] border border-outline-variant/40 flex items-center justify-between group active:scale-[0.98] hover:bg-slate-50 transition-all font-sans cursor-pointer h-14"
          onClick={() => setScreen('register')} // allows reediting profile setup
        >
          <div className="flex items-center gap-3">
            <Edit className="w-5 h-5 text-outline" />
            <span className="text-sm font-bold text-on-surface-variant font-sans">編輯個人詳細檔案 (MBTI & 興趣)</span>
          </div>
          <ChevronRight className="w-5 h-5 text-outline-variant" />
        </button>

        {/* Shared Completed activities */}
        <section className="bg-white rounded-[16px] p-6 shadow-sm border border-outline-variant/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-sans font-bold text-headline-sm text-on-surface">我們參與的歷史任務</h3>
            <span className="text-[10px] font-bold font-sans text-secondary bg-secondary-container/20 px-2 py-0.5 rounded">
              完成 {currentUser.helpCount} 次
            </span>
          </div>
          <ul className="space-y-4">
            {completedTaskMocks.map((task, index) => (
              <li key={index} className="flex items-center justify-between py-2 border-b border-outline-variant/10 last:border-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {task.icon}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-body-md">{task.title}</p>
                    <p className="text-xs text-on-surface-variant font-sans">{task.detail}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary">check_circle</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Trust Points and credit details segment */}
        <section className="bg-white rounded-[16px] p-6 shadow-sm border border-outline-variant/10">
          <div className="flex flex-col gap-1 mb-5">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="font-mono text-[9px] tracking-widest uppercase font-bold text-on-surface-variant mb-1">TOTAL POINTS</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-3xl text-primary">{currentUser.points || 850}</span>
                  <span className="text-xs text-on-surface-variant font-sans">/ 1000</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-headline-sm text-sm font-bold text-secondary font-sans">Helper Star 🎓</span>
                <p className="text-xs text-on-surface-variant mt-0.5 font-sans">
                  信用評級：<b>優良卓越</b>
                </p>
              </div>
            </div>
          </div>

          {/* Points Progress */}
          <div className="relative h-4.5 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-secondary-fixed to-primary rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${Math.min(100, Math.floor(((currentUser.points || 850) / 1000) * 100))}%` }}
            ></div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 py-1">
            <div className="text-center">
              <p className="text-xs text-on-surface-variant font-sans">準時率</p>
              <p className="text-headline-sm text-[15px] font-bold text-on-surface mt-1">{currentUser.punctuality || 98}%</p>
            </div>
            <div className="text-center border-x border-[#ebeef2]">
              <p className="text-xs text-on-surface-variant font-sans">好評度</p>
              <p className="text-headline-sm text-[15px] font-bold text-on-surface mt-1">{currentUser.ratings || 4.9} ★</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-on-surface-variant font-sans">互助次數</p>
              <p className="text-headline-sm text-[15px] font-bold text-on-surface mt-1">{currentUser.helpCount || 124} 次</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
