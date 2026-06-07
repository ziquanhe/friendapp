/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, Search, Phone, Video, MoreVertical, Plus, Send, Heart, X, 
  MessageSquare, MapPin, Map, Compass, User, ThumbsUp, Bike, GraduationCap, 
  Clock, Calendar, Coins, CheckCircle, Flame, Utensils, Music, Trophy, 
  Edit, Star, Check, PlusCircle, AlertTriangle, ChevronRight, HelpCircle, 
  Volume2, Users, Layers, MessageCircle, Info, Smile, CheckSquare
} from 'lucide-react';
import { UserProfile, CollaborativeTask, ChatMessage, ChatThread } from '../types';

interface ScreenProps {
  currentUser: UserProfile;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile>>;
  tasks: CollaborativeTask[];
  setTasks: React.Dispatch<React.SetStateAction<CollaborativeTask[]>>;
  threads: ChatThread[];
  setThreads: React.Dispatch<React.SetStateAction<ChatThread[]>>;
  messages: Record<string, ChatMessage[]>;
  setMessages: React.Dispatch<React.SetStateAction<Record<string, ChatMessage[]>>>;
  potentialSwipes: UserProfile[];
  setPotentialSwipes: React.Dispatch<React.SetStateAction<UserProfile[]>>;
  currentScreen: string;
  setScreen: (screen: string) => void;
  selectedThreadId: string | null;
  setSelectedThreadId: (id: string | null) => void;
}

// ==========================================
// 1. WELCOME / SPLASH SCREEN
// ==========================================
export const WelcomeSplash: React.FC<Pick<ScreenProps, 'setScreen'>> = ({ setScreen }) => {
  return (
    <div 
      className="min-h-screen bg-surface flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
      onClick={() => setScreen('auth-chooser')}
    >
      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative animate-bounce">
            <div className="absolute inset-0 bg-secondary-container/20 blur-3xl rounded-full scale-150"></div>
            <img 
              alt="Jewel Logo" 
              className="relative w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_20px_40px_rgba(104,250,221,0.3)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3hNTLiE2YjV6H-4NTqH4gJjtw8DeHnjwm0-8ilCt98F18P3fp5nvkAkLtmF6cEY8DtyFPT3reRG5ItXspxDRugS3V_Ysyc2yemWobfAEFFwaaLGre-0qZGkmAqrS6NdPbzXHxWypRlsK9DMtA7sGjKetvNzz4fmYS1K1uy4QuevbfDxLUWX40iOplZOlDn1pdtIYO8QsEprZe8esToLCLIZqro4eiBBTKbTAnJvksyvlXpElv0meyh0rsMzui2WOYDLHbgInIHS5_"
            />
          </div>
          <div className="space-y-2">
            <h1 className="font-display text-4xl font-extrabold text-primary tracking-tight">
              Jewel <span className="text-secondary">揪我</span>
            </h1>
            <p className="font-sans text-md text-on-surface-variant max-w-[280px] mx-auto leading-relaxed">
              Reliable mutual aid for your campus lifestyle.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 mt-4">
            <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <span className="font-mono text-xs text-outline tracking-wider uppercase">Almost Ready</span>
          </div>
          <p className="text-xs text-outline/50 mt-4 animate-pulse">點擊任意處開始體驗</p>
        </div>
      </main>
      
      {/* Decorative Atmosphere */}
      <div className="absolute top-[-20%] -right-[10%] w-[60%] h-[60%] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-primary-container/5 blur-[100px] rounded-full pointer-events-none"></div>
    </div>
  );
};

// ==========================================
// 2. AUTH SELECTION SCREEN
// ==========================================
export const AuthChooser: React.FC<Pick<ScreenProps, 'setScreen'>> = ({ setScreen }) => {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-between relative overflow-hidden py-12">
      {/* Ambient Effect */}
      <div className="absolute top-[-10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>

      <main className="w-full max-w-[440px] px-5 flex flex-col items-center flex-grow justify-center">
        <section className="flex flex-col items-center text-center mb-12 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary blur-2xl opacity-10 animate-pulse"></div>
            <img 
              alt="Jewel App Logo" 
              className="relative w-32 h-32 md:w-36 md:h-36 object-contain drop-shadow-[0_8px_30px_rgba(0,107,92,0.15)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r"
            />
          </div>
          <div className="space-y-1">
            <h1 className="font-display text-2xl font-bold text-on-surface">Jewel 揪我</h1>
            <p className="font-display text-3xl text-secondary font-extrabold tracking-tight">
              揪是do it!
            </p>
          </div>
        </section>

        <section className="w-full space-y-4">
          <button 
            className="w-full h-[60px] bg-secondary text-on-secondary rounded-2xl font-semibold text-lg flex items-center justify-center shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-colors active:scale-95 duration-100"
            onClick={() => setScreen('login')}
          >
            登入
          </button>
          <button 
            className="w-full h-[60px] border-2 border-secondary text-secondary rounded-2xl font-semibold text-lg flex items-center justify-center bg-transparent hover:bg-secondary/5 transition-colors active:scale-95 duration-100"
            onClick={() => setScreen('register')}
          >
            註冊
          </button>

          <div className="pt-8 flex flex-col items-center">
            <span className="text-xs text-outline mb-4">或者透過以下方式繼續</span>
            <div className="flex space-x-4">
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow active:scale-90">
                <svg className="w-5 h-5 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.9 3.34-2.1 4.56-1.14 1.14-2.6 1.88-4.8 1.88-4.24 0-7.7-3.46-7.7-7.7s3.46-7.7 7.7-7.7c2.1 0 3.7.8 4.9 1.9l2.42-2.42c-1.94-1.84-4.5-3.08-7.32-3.08-6.14 0-11.1 4.96-11.1 11.1s4.96 11.1 11.1 11.1c3.34 0 5.86-1.1 7.84-3.14 2.1-2.1 2.8-5.1 2.8-7.58 0-.48-.04-1.04-.12-1.52h-10.52z"></path>
                </svg>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow active:scale-90 text-[12px] font-bold">
                iOS
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow active:scale-90 text-on-surface text-[12px] font-bold">
                LINE
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full px-5 text-center max-w-[440px]">
        <button 
          className="inline-flex items-center space-x-2 text-on-surface-variant/70 hover:text-secondary transition-colors"
          onClick={() => setScreen('register')}
        >
          <GraduationCap className="w-4 h-4" />
          <span className="text-xs underline underline-offset-4 decoration-outline-variant">
            .edu School Email Verification Note
          </span>
        </button>
        <p className="mt-4 text-[10px] text-outline max-w-[280px] mx-auto leading-relaxed">
          使用本服務即代表您同意我們的使用者條款與隱私權政策
        </p>
      </footer>
    </div>
  );
};

// ==========================================
// 3. LOGIN SCREEN
// ==========================================
export const LoginScreen: React.FC<Pick<ScreenProps, 'setScreen'>> = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotOpenEmail] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    setScreen('dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-5 relative overflow-hidden">
      <main className="w-full max-w-[440px] bg-white rounded-3xl shadow-xl shadow-primary/5 p-6 md:p-8 flex flex-col gap-6 relative z-10 border border-outline-variant/10">
        <header className="flex flex-col items-center text-center gap-3">
          <img 
            alt="Jewel Logo" 
            className="w-16 h-16 object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiS6aKFaaJDw-NVlEuzWqRIotIJJcrjQrzQidleFoAfy5ZAHeL6LBF6-g57O2MG7TopXmY0GYoACYFGRpgSIhHTWk_vGJk2eXxM2TXlO2cAWuWxjbFzKZcfvBCyEBIo5fEoZxeO-BWLqOuqzLtFEklD8wgSu3qpj_Fq8Tn1FeSUXsu_C_27Jelu6TQDEdES4D5kR5xdrbrixEg2w83wTk1NeJU0uc7enOMLi89iigE0W03-bk_rV2NpfAimWVrCGkzEx9se4GfysuU"
          />
          <h1 className="text-md md:text-lg font-sans font-medium text-on-surface-variant max-w-[280px]">
            歡迎回來！請輸入您的學號或學校 Email 登入。
          </h1>
        </header>

        <form className="flex flex-col gap-5" onSubmit={handleLoginSubmit}>
          <div className="relative border border-outline-variant/60 rounded-xl bg-white px-3 py-3.5 flex items-center gap-3 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
            <span className="material-symbols-outlined text-outline">person</span>
            <input 
              className="w-full bg-transparent border-none p-0 outline-none text-body-md placeholder:text-outline/60 focus:ring-0" 
              placeholder="帳號 / School Email" 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="relative border border-outline-variant/60 rounded-xl bg-white px-3 py-3.5 flex items-center gap-3 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-outline">lock</span>
              <input 
                className="w-full bg-transparent border-none p-0 outline-none text-body-md placeholder:text-outline/60 focus:ring-0" 
                placeholder="密碼" 
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="text-outline hover:text-primary transition-colors focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
            <div className="flex justify-end">
              <button 
                type="button" 
                className="text-xs text-outline hover:text-on-surface-variant transition-colors"
                onClick={() => setForgotOpen(true)}
              >
                忘記密碼？
              </button>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-container text-white py-4 rounded-xl font-semibold shadow-lg shadow-primary/10 transition-colors active:scale-95 duration-100 mt-2"
          >
            登入
          </button>
        </form>

        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-[1px] bg-outline-variant/40"></div>
          <span className="text-xs text-outline font-medium">或者</span>
          <div className="flex-1 h-[1px] bg-outline-variant/40"></div>
        </div>

        <button 
          className="w-full border border-secondary-fixed/40 text-on-secondary-container hover:bg-secondary-container/5 py-4 rounded-xl font-semibold transition-colors active:scale-95 duration-100"
          onClick={() => setScreen('register')}
        >
          還沒有帳號？立即註冊
        </button>

        <footer className="text-center mt-3">
          <p className="text-[11px] text-outline/65 leading-relaxed px-2">
            登入即代表您同意<span className="underline hover:text-outline cursor-pointer mx-1">使用者條款</span>與<span className="underline hover:text-outline cursor-pointer">隱私權政策</span>
          </p>
        </footer>
      </main>

      {/* Forgot Password Modal */}
      {forgotOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/40 backdrop-blur-sm transition-all">
          <div className="bg-white w-full max-w-[400px] rounded-2xl p-6 flex flex-col gap-6 shadow-2xl animate-in scale-in-95 duration-200">
            <div className="flex flex-col gap-2">
              <h3 className="text-headline-md font-bold text-on-surface">重設密碼</h3>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">請輸入您的註冊 Email，我們將發送驗證密碼信函給您。</p>
            </div>
            <div className="relative border border-outline-variant rounded-xl bg-surface-container-low px-3 py-3 flex items-center gap-3">
              <span className="material-symbols-outlined text-outline">mail</span>
              <input 
                className="w-full bg-transparent border-none p-0 outline-none text-body-md focus:ring-0" 
                placeholder="Email 地址" 
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotOpenEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              <button 
                className="flex-1 py-3 rounded-lg hover:bg-surface-container font-semibold transition-colors text-body-sm"
                onClick={() => setForgotOpen(false)}
              >
                取消
              </button>
              <button 
                className="flex-1 py-3 bg-primary text-white rounded-lg hover:shadow-md font-semibold transition-all text-body-sm"
                onClick={() => {
                  alert(`驗證連結已寄出至: ${forgotEmail || 'student@university.edu.tw'}`);
                  setForgotOpen(false);
                }}
              >
                發送驗證信
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. REGISTRATION / PROFILE CREATION MODULE
// ==========================================
export const RegisterScreen: React.FC<ScreenProps> = ({ 
  setScreen, currentUser, setCurrentUser 
}) => {
  const [step, setStep] = useState(1); // 1 = Registration form, 2 = Profile Creation (MBTI, Interests, details)

  // Step 1 states
  const [schoolEmail, setSchoolEmail] = useState(currentUser.schoolEmail || '');
  const [password, setPassword] = useState('');
  const [tel, setTel] = useState(currentUser.tel || '');
  const [lineId, setLineId] = useState(currentUser.lineId || '');
  const [emergencyContact, setEmergencyContact] = useState(currentUser.emergencyContact || '');

  // Step 2 states
  const [selectedMbti, setSelectedMbti] = useState(currentUser.mbti || 'INFJ');
  const [interests, setInterests] = useState<string[]>(currentUser.interests || []);
  const [age, setAge] = useState<number>(currentUser.age || 20);
  const [height, setHeight] = useState<number>(currentUser.height || 175);
  const [bio, setBio] = useState<string>(currentUser.bio || '');

  // Static interest options
  const AVAILABLE_INTERESTS = ['音樂', '運動', '電競', '旅遊', '攝影', '美食', '閱讀', '登山', '羽球', '桌遊'];

  const mbtis = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP'
  ];

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Update local state with registered profile values
    setCurrentUser(prev => ({
      ...prev,
      schoolEmail,
      tel,
      lineId,
      emergencyContact,
      mbti: selectedMbti,
      interests,
      age,
      height,
      bio: bio || `我是一名熱心助人的 ${selectedMbti} 校友！`
    }));
    // Take directly to dashboard!
    setScreen('dashboard');
  };

  const toggleInterest = (tag: string) => {
    if (interests.includes(tag)) {
      setInterests(interests.filter(i => i !== tag));
    } else {
      setInterests([...interests, tag]);
    }
  };

  // Determine password strength
  const getPasswordStrength = () => {
    if (!password) return { label: '未輸入', progress: 0, color: 'bg-outline-variant/30' };
    if (password.length < 6) return { label: '強度：太弱', progress: 1, color: 'bg-error' };
    if (password.length < 10) return { label: '強度：普通', progress: 2, color: 'bg-yellow-500' };
    return { label: '強度：良好', progress: 4, color: 'bg-secondary' };
  };

  const strength = getPasswordStrength();

  // Dynamic progress calculator for Step 2 profile details
  const getCompletionPercentage = () => {
    let completedFields = 0;
    const totalFields = 5;
    if (selectedMbti) completedFields++;
    if (interests.length > 0) completedFields++;
    if (age > 0) completedFields++;
    if (height > 0) completedFields++;
    if (bio.trim().length > 3) completedFields++;
    return Math.floor((completedFields / totalFields) * 100);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFD] text-on-surface font-body-md flex flex-col">
      {/* Top Bar for Back Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-16 flex justify-between items-center px-5">
        <div className="flex items-center gap-3">
          <button 
            className="p-1 rounded-full hover:bg-surface-container-low transition-colors duration-100"
            onClick={() => {
              if (step === 2) setStep(1);
              else setScreen('auth-chooser');
            }}
          >
            <ArrowLeft className="w-5 h-5 text-primary" />
          </button>
          <img 
            alt="Jewel Logo" 
            className="h-8 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r" 
          />
          <h1 className="font-sans text-lg font-bold text-primary">
            {step === 1 ? '帳號註冊' : '建立個人檔案'}
          </h1>
        </div>
        <button className="p-1 rounded-full hover:bg-surface-container-low text-primary">
          <span className="material-symbols-outlined">search</span>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mt-16 pb-28 px-5 overflow-y-auto w-full max-w-2xl mx-auto">
        {/* Progress Indicators */}
        <div className="py-6 flex items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-sans text-xs ${step >= 1 ? 'bg-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
              1
            </div>
            <div className={`w-12 h-[2px] rounded-full ${step >= 2 ? 'bg-primary' : 'bg-outline-variant/30'}`}></div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs ${step >= 2 ? 'bg-primary text-white' : 'bg-primary-fixed text-primary'}`}>
              2
            </div>
            <div className="w-12 h-[2px] bg-outline-variant/30 rounded-full"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-sans text-xs">
            3
          </div>
        </div>

        {/* STEP 1: Registration Form */}
        {step === 1 && (
          <form className="space-y-6" onSubmit={handleStep1Submit}>
            {/* Account verify section */}
            <section className="bg-white p-5 rounded-2xl shadow-md space-y-4 border border-outline-variant/10">
              <h2 className="font-sans text-md font-semibold text-on-surface">帳號驗證</h2>
              
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-sans">學校信箱</label>
                <input 
                  className="w-full bg-slate-50 border border-outline-variant/50 rounded-xl px-4 py-3 text-body-md focus:border-primary transition-all outline-none" 
                  type="email" 
                  placeholder="student@university.edu.tw"
                  value={schoolEmail}
                  onChange={(e) => setSchoolEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1 pt-1">
                <label className="text-xs text-on-surface-variant font-sans">密碼設定</label>
                <input 
                  className="w-full bg-slate-50 border border-outline-variant/50 rounded-xl px-4 py-3 text-body-md focus:border-primary transition-all outline-none" 
                  type="password" 
                  placeholder="請設定登入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                
                {/* Strength bars */}
                <div className="flex gap-1 pt-2">
                  {[1, 2, 3, 4].map((barIndex) => (
                    <div 
                      key={barIndex} 
                      className={`h-1.5 flex-1 rounded-full ${strength.progress >= barIndex ? strength.color : 'bg-outline-variant/30'}`}
                    ></div>
                  ))}
                </div>
                <p className={`text-[10px] font-sans ${strength.progress >= 2 ? 'text-secondary' : 'text-error'} mt-1`}>
                  {strength.label}
                </p>
              </div>
            </section>

            {/* Contact details section */}
            <section className="bg-white p-5 rounded-2xl shadow-md space-y-4 border border-outline-variant/10">
              <h2 className="font-sans text-md font-semibold text-on-surface">聯絡資訊</h2>
              
              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-sans">手機號碼</label>
                <input 
                  className="w-full bg-slate-50 border border-outline-variant/50 rounded-xl px-4 py-3 text-body-md focus:border-primary transition-all outline-none" 
                  type="tel" 
                  placeholder="請輸入您的手機號碼"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-sans">LINE ID (選填)</label>
                <input 
                  className="w-full bg-slate-50 border border-outline-variant/50 rounded-xl px-4 py-3 text-body-md focus:border-primary transition-all outline-none" 
                  type="text" 
                  placeholder="請輸入 LINE ID"
                  value={lineId}
                  onChange={(e) => setLineId(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-on-surface-variant font-sans">緊急聯絡人</label>
                <input 
                  className="w-full bg-slate-50 border border-outline-variant/50 rounded-xl px-4 py-3 text-body-md focus:border-primary transition-all outline-none" 
                  type="text" 
                  placeholder="緊急聯絡人姓名與關係"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  required
                />
              </div>
            </section>

            {/* Submit button fixed at page bottom area */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#F7FAFD] via-[#F7FAFD]/90 to-transparent p-5 z-40 max-w-2xl mx-auto">
              <button 
                type="submit" 
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-sans font-semibold text-md shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-primary-container"
              >
                確認送出
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Profile Details Sheet */}
        {step === 2 && (
          <form className="space-y-6 animate-in slide-in-from-right-8 duration-300" onSubmit={handleStep2Submit}>
            {/* Visual Photo Upload Mock */}
            <section className="flex flex-col items-center py-2">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                  <span className="material-symbols-outlined text-outline text-4xl">add_a_photo</span>
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-on-primary p-1 rounded-full shadow-md">
                  <span className="material-symbols-outlined text-sm">edit</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-outline font-medium">上傳大頭照</p>
            </section>

            {/* MBTI Selector Grid */}
            <section className="bg-white p-5 rounded-2xl shadow-md border border-outline-variant/10">
              <label className="block text-headline-sm font-sans font-semibold text-on-surface mb-4">MBTI</label>
              <div className="grid grid-cols-4 gap-2">
                {mbtis.map((mbti) => (
                  <div 
                    key={mbti} 
                    className={`border rounded-lg py-2.5 text-center cursor-pointer font-mono font-medium text-[11px] transition-all active:scale-95 duration-100 ${selectedMbti === mbti ? 'border-primary bg-primary-fixed text-primary font-bold shadow-sm' : 'border-outline-variant text-on-surface-variant hover:bg-slate-50'}`}
                    onClick={() => setSelectedMbti(mbti)}
                  >
                    {mbti}
                  </div>
                ))}
              </div>
            </section>

            {/* Interest Tags Picker */}
            <section className="bg-white p-5 rounded-2xl shadow-md border border-outline-variant/10">
              <div className="flex justify-between items-center mb-3">
                <label className="font-sans font-semibold text-headline-sm text-on-surface">興趣愛好</label>
                <span className="text-primary text-xs font-semibold font-sans cursor-pointer">+ 自訂新增</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_INTERESTS.map((tag) => {
                  const active = interests.includes(tag);
                  return (
                    <span 
                      key={tag} 
                      className={`px-3.5 py-1.5 rounded-full border text-xs font-medium cursor-pointer transition-all flex items-center gap-1 active:scale-95 duration-100 ${active ? 'bg-primary/10 text-primary border-primary/30' : 'bg-surface-container-high text-on-surface-variant border-transparent'}`}
                      onClick={() => toggleInterest(tag)}
                    >
                      {tag}
                      {active && <span className="material-symbols-outlined text-[14px]">close</span>}
                    </span>
                  );
                })}
              </div>
            </section>

            {/* Age & Height */}
            <section className="bg-white p-5 rounded-2xl shadow-md border border-outline-variant/10">
              <label className="block font-sans font-semibold text-headline-sm text-on-surface mb-4">個人詳情</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-on-surface-variant font-sans mb-1.5">年齡</label>
                  <div className="relative flex items-center border border-outline-variant/50 rounded-xl px-3 bg-slate-50">
                    <input 
                      className="w-full bg-transparent border-none py-3 pr-6 text-body-md focus:ring-0 outline-none" 
                      type="number" 
                      value={age} 
                      onChange={(e) => setAge(parseInt(e.target.value) || 20)}
                      min="18"
                      max="100"
                    />
                    <span className="absolute right-3 font-sans text-xs text-outline font-medium">歲</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-on-surface-variant font-sans mb-1.5">身高</label>
                  <div className="relative flex items-center border border-outline-variant/50 rounded-xl px-3 bg-slate-50">
                    <input 
                      className="w-full bg-transparent border-none py-3 pr-8 text-body-md focus:ring-0 outline-none" 
                      type="number" 
                      value={height} 
                      onChange={(e) => setHeight(parseInt(e.target.value) || 175)}
                      min="100"
                      max="250"
                    />
                    <span className="absolute right-3 font-sans text-xs text-outline font-medium">cm</span>
                  </div>
                </div>
              </div>
            </section>

            {/* About me bio */}
            <section className="bg-white p-5 rounded-2xl shadow-md border border-outline-variant/10">
              <label className="block font-sans text-headline-sm font-semibold text-on-surface mb-2">個人簡介</label>
              <textarea 
                className="w-full bg-slate-50 border border-outline-variant/50 rounded-xl p-3 text-body-md focus:border-primary transition-all outline-none resize-none" 
                placeholder="簡單介紹一下你自己，讓學長姐學弟妹更容易認識你..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                maxLength={200}
              />
              <div className="text-right mt-1 text-[11px] text-outline font-medium">
                {bio.length} / 200
              </div>
            </section>

            {/* Progress completion card */}
            <div className="relative overflow-hidden rounded-2xl bg-primary text-on-primary p-5 shadow-lg mb-8">
              <div className="relative z-10 space-y-1">
                <h3 className="font-sans text-sm font-semibold">資料完成度 {getCompletionPercentage()}%</h3>
                <p className="text-xs opacity-90 leading-relaxed">提供豐富的個人檔案可以提高 3 倍與校園夥伴成功配對的機率喔！</p>
                <div className="w-full h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                  <div 
                    className="h-full bg-secondary-container transition-all duration-500 ease-out" 
                    style={{ width: `${getCompletionPercentage()}%` }}
                  ></div>
                </div>
              </div>
              <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -left-10 -bottom-10 w-28 h-28 bg-secondary-container/15 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* Save Button Drawer */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#F7FAFD] via-[#F7FAFD]/90 to-transparent p-5 z-40 max-w-2xl mx-auto">
              <button 
                type="submit" 
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-sans font-semibold text-md shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 hover:bg-primary-container"
              >
                <span>儲存並完成</span>
                <CheckCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};
