/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CollaborativeTask, ChatThread, ChatMessage, UserProfile } from './types';

// Let's declare our default user profile representing the logged in student: PeterLin
export const CURRENT_USER_MOCK: UserProfile = {
  id: 'me',
  name: 'PeterLin',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeHXrl4P_gsq3opHcCrgPAQuGAfMEoDjv2pUOn-9UX-oyZcgVywByfwg6EXjNBm2Qt6FJ5vrvCHXCRX7liSxPd_HUL1tHQyUDunwLWUX3NKioW1tQPjvdvCSDB3dXj7x4mT54Hf9ZtMLoj1klnB_1cBPwhZrF2aBFL8ly3XH1YSEVlmI6QMwwQUTuNzJ7M7-RhjYb9Co2o3P-bZz9bJr9RrwxE9ABYMpFQGcmLtncRb0WJlyb4zx4HfSZXCKInV4jC8-DyAQNXxNdh',
  isMe: true,
  schoolEmail: 'student@university.edu.tw',
  tel: '0912-345-678',
  lineId: 'peter_cycle',
  emergencyContact: '林媽媽 (母親, 0922-111-222)',
  mbti: 'INFJ',
  interests: ['音樂', '運動', '電競', '旅遊', '美食', '攝影'],
  age: 20,
  height: 175,
  bio: '我是一個人格特質是 INFJ 的清大學生，熱愛探索隱藏美食、彈吉他與夜間騎乘。歡迎在校園裡揪我！',
  points: 850,
  ratings: 4.9,
  helpCount: 124,
  punctuality: 98,
  coins: 1250
};

// Initial state for nearby collaborative tasks
export const INITIAL_TASKS: CollaborativeTask[] = [
  {
    id: 'task-1',
    title: '涮乃葉吃到飽',
    category: 'dining',
    customStatusLabel: 'DELIVERY',
    description: '吃涮乃葉耶！還差兩個人！來吃肉聊天，晚上七點集合。',
    reward: 100,
    deadline: '2026-06-07',
    location: '公館水源地分店',
    joinProgressMax: 5,
    joinedHelpersCount: 3,
    joinedHelperAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAclEWSdO2r5QrNV4rszqGQCCRGhre6vodCEQxRPomJUH3bDRYSb3dLUscLtnLFkERWtZIPz1WRqG8VniTOYA6pORKKau7alpGU4VacWEt1Z35_1fYqpMIU6ORgqEMNoVoC0SfHISLGFP7sOkKjF3vHKJqNOwv4zvTTBpQNCOvyEWxllcLGo-mWeXhAMUpqR2yCsAXMjuvftX4hJpKlwgbWMCZ_IU9IncEkEMkU4UU8w1OJZX3oPWJIf3PDHmfflEA-WtOXH6o_qyCt',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBstVlYH-yfllltP3jd38DxlJpiZL8HFDVj1w-5NKIZXX0X-fcAyMasrYzUtCO04Vz0Su_Ym0GYQo_7B8f6hEyngUV_qHOFi-8XRbL6gFK63CPzKhRRS3xbkyG5-Hdki_zNoQj89RlfX0usVnPrEFFyh20xi3zJrl8mOPTyvwHZjH7FE-KR-DB8Vphk0Gwpp_RfNNEpUpb3-teMKxrQmyJSpx7Wpb82MiMwqaoiKdpLGw4Z-DD-3l79f0VRwUbcec32NvpxOPEICAy_'
    ],
    createdByUserId: 'xiaoming',
    createdByName: '小明',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBstVlYH-yfllltP3jd38DxlJpiZL8HFDVj1w-5NKIZXX0X-fcAyMasrYzUtCO04Vz0Su_Ym0GYQo_7B8f6hEyngUV_qHOFi-8XRbL6gFK63CPzKhRRS3xbkyG5-Hdki_zNoQj89RlfX0usVnPrEFFyh20xi3zJrl8mOPTyvwHZjH7FE-KR-DB8Vphk0Gwpp_RfNNEpUpb3-teMKxrQmyJSpx7Wpb82MiMwqaoiKdpLGw4Z-DD-3l79f0VRwUbcec32NvpxOPEICAy_',
    timeAgoLabel: '5 mins ago'
  },
  {
    id: 'task-2',
    title: '今晚單車夜騎去',
    category: 'sports',
    customStatusLabel: 'URGENT',
    description: '嘿 Peter！看到你也想去河濱騎車。那我們下午三點在公館水源地出口集合好嗎？輕鬆河濱行程。',
    reward: 150,
    deadline: '2026-06-07',
    location: '公館水源地出口',
    joinProgressMax: 4,
    joinedHelpersCount: 1,
    joinedHelperAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeHXrl4P_gsq3opHcCrgPAQuGAfMEoDjv2pUOn-9UX-oyZcgVywByfwg6EXjNBm2Qt6FJ5vrvCHXCRX7liSxPd_HUL1tHQyUDunwLWUX3NKioW1tQPjvdvCSDB3dXj7x4mT54Hf9ZtMLoj1klnB_1cBPwhZrF2aBFL8ly3XH1YSEVlmI6QMwwQUTuNzJ7M7-RhjYb9Co2o3P-bZz9bJr9RrwxE9ABYMpFQGcmLtncRb0WJlyb4zx4HfSZXCKInV4jC8-DyAQNXxNdh'
    ],
    createdByUserId: 'coolguy',
    createdByName: 'CoolGuy',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBav6p8BHFMfUs9lBDDZjf6pQov4xm6UiBuMNArHBGttHEmrmf3Z7Xu4ICx4qp-R1TCwAZAm0x6VgxViS8EXF7nYcv6LPu5Ipl2hTg3Jb8sU0nifVl4F8SwB-j58-ku-BVc7qqfYgSL_0hn184wAAOIi4rpocdww6H39R0mO_UnkWvq4DOYsTUxMAMpmlHlfThy5YTY5kX-8UGBkLH2lZwBVFrSVi0j8_ynlYnVuNgdza-EdOF1hcIXBkALGsGh69-Z4ltefz2UbakM',
    timeAgoLabel: '10 mins ago'
  },
  {
    id: 'task-3',
    title: '晚上打籃球缺一',
    category: 'sports',
    customStatusLabel: 'DORM',
    description: '校本部體育館 3對3，缺一個能投能切的中鋒！程度中等，歡迎加入。',
    reward: 50,
    deadline: '2026-06-07',
    location: '校本部體育館',
    joinProgressMax: 6,
    joinedHelpersCount: 5,
    joinedHelperAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAgVuO3yNbuIVAs4LbkJl-tTHzddmuI4_ZDruK3R48kUpwWsFFYnByBpqc-5DLekp7FrYNCRTHno-uXT2PSZhsf5ppqB3Z-WJE8Mrnzx9kNM1n14RGMoaFGxZHjXFEzu7XkV1hldzSOj8zwWyV6P8MbGMInyCcGmVL-zIo9E9pESyjaQAQhwTijLfH9domUgP_wXzJ4gJo1JIlOdmV-MnqyPBgx7YKHrqxuFSkQDAeG-tJ8n0S7ZJgQ9kjGtQSyj-ol-_Z2-lV0YTNV',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeHXrl4P_gsq3opHcCrgPAQuGAfMEoDjv2pUOn-9UX-oyZcgVywByfwg6EXjNBm2Qt6FJ5vrvCHXCRX7liSxPd_HUL1tHQyUDunwLWUX3NKioW1tQPjvdvCSDB3dXj7x4mT54Hf9ZtMLoj1klnB_1cBPwhZrF2aBFL8ly3XH1YSEVlmI6QMwwQUTuNzJ7M7-RhjYb9Co2o3P-bZz9bJr9RrwxE9ABYMpFQGcmLtncRb0WJlyb4zx4HfSZXCKInV4jC8-DyAQNXxNdh'
    ],
    createdByUserId: 'alex',
    createdByName: '阿吉',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa',
    timeAgoLabel: '30 mins ago'
  },
  {
    id: 'task-4',
    title: '一起去逛光影展覽',
    category: 'arts',
    customStatusLabel: 'LIBRARY',
    description: '市區文創基地「沉浸式光影展覽」。有一張早鳥多餘門票，希望徵求同校文青夥伴一同觀展探討！',
    reward: 200,
    deadline: '2026-06-12',
    location: '華山文創展區',
    joinProgressMax: 2,
    joinedHelpersCount: 1,
    joinedHelperAvatars: [],
    createdByUserId: 'emma',
    createdByName: 'Emma',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5z0f6653k4UQiBPIVl-cQrQ4GFMwVuqlkZ03CBm04adQ0rrOKQqt2Nh-M-7-MNjifRWzMWP9DyHU80UBMrMtW4vpf0KlTue1tOclHa7doYFaIQxg5RNV5qjOiWMBbHDk96ip_Tp6zotbrp97vzISGEGURYqesBOG_ShG0k12VsQjuKS-QjdbV_f1-nY8KTMux8_NGY3c1t6PlfqmEcwHB94QbqFlQ7kvsHXhpauFKbLpRocVSO-A18kLVVpWnN2-6XQXm8hQdNFn',
    timeAgoLabel: '1 hour ago'
  },
  {
    id: 'task-5',
    title: '週末早午餐約會',
    category: 'dining',
    customStatusLabel: 'DINING',
    description: '林小華：這家的班尼迪克蛋很有名！週六一起去群聚吃頓美好的早午餐！',
    reward: 120,
    deadline: '2026-06-14',
    location: '中山區隱藏法式早餐',
    joinProgressMax: 4,
    joinedHelpersCount: 2,
    joinedHelperAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAclEWSdO2r5QrNV4rszqGQCCRGhre6vodCEQxRPomJUH3bDRYSb3dLUscLtnLFkERWtZIPz1WRqG8VniTOYA6pORKKau7alpGU4VacWEt1Z35_1fYqpMIU6ORgqEMNoVoC0SfHISLGFP7sOkKjF3vHKJqNOwv4zvTTBpQNCOvyEWxllcLGo-mWeXhAMUpqR2yCsAXMjuvftX4hJpKlwgbWMCZ_IU9IncEkEMkU4UU8w1OJZX3oPWJIf3PDHmfflEA-WtOXH6o_qyCt',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoqc7mQzo11PJjCzd5ZYGzKkSxjlP6HzhjUAYJMsljwJaxS5-mgWSsKU4mWQgls_6vY-V0HykKU_sr2RcT7rQ--I0fmThVujoPQrHa6WQMvkjz9ZAGg-7vjPlk4Pxcqjh2K4ZTMBUSODakk3DDWvBnEHkFa50_LE0kBr1gv4Y4LA0ivA4Xk3X5qKfYalrIY-wiA6W_sg30Jva1JbEXOR6YEiEg5gKJkJ5dpvom9dLKs7q2BjQxuwEAYUBoj4C6gC8LRxJahI1AJmiJ3'
    ],
    createdByUserId: 'xiaohua',
    createdByName: '林小華',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAclEWSdO2r5QrNV4rszqGQCCRGhre6vodCEQxRPomJUH3bDRYSb3dLUscLtnLFkERWtZIPz1WRqG8VniTOYA6pORKKau7alpGU4VacWEt1Z35_1fYqpMIU6ORgqEMNoVoC0SfHISLGFP7sOkKjF3vHKJqNOwv4zvTTBpQNCOvyEWxllcLGo-mWeXhAMUpqR2yCsAXMjuvftX4hJpKlwgbWMCZ_IU9IncEkEMkU4UU8w1OJZX3oPWJIf3PDHmfflEA-WtOXH6o_qyCt',
    timeAgoLabel: '2 hours ago'
  },
  {
    id: 'task-6',
    title: '攝影機 & Premiere',
    category: 'support',
    customStatusLabel: 'MEDIA PRODUCTION',
    description: '徵求支援 Premiere 剪輯基礎教學，以及短暫借用單眼攝影機一小時。地點在社團大樓。',
    reward: 310,
    deadline: '2026-06-15',
    location: '社團大樓 302 視聽室',
    joinProgressMax: 3,
    joinedHelpersCount: 1,
    joinedHelperAvatars: [],
    createdByUserId: 'emma',
    createdByName: 'Emma',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5z0f6653k4UQiBPIVl-cQrQ4GFMwVuqlkZ03CBm04adQ0rrOKQqt2Nh-M-7-MNjifRWzMWP9DyHU80UBMrMtW4vpf0KlTue1tOclHa7doYFaIQxg5RNV5qjOiWMBbHDk96ip_Tp6zotbrp97vzISGEGURYqesBOG_ShG0k12VsQjuKS-QjdbV_f1-nY8KTMux8_NGY3c1t6PlfqmEcwHB94QbqFlQ7kvsHXhpauFKbLpRocVSO-A18kLVVpWnN2-6XQXm8hQdNFn',
    timeAgoLabel: '20 min ago'
  },
  {
    id: 'task-7',
    title: '清晨羽球團',
    category: 'sports',
    customStatusLabel: 'SPORTS',
    description: '校門口球場晨練羽球，雙打缺一！程度不限，意者直接帶球拍來！',
    reward: 80,
    deadline: '2026-06-08',
    location: '校門口室外羽球場',
    joinProgressMax: 2,
    joinedHelpersCount: 1,
    joinedHelperAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa'
    ],
    createdByUserId: 'dawen',
    createdByName: '陳大文',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa',
    timeAgoLabel: '3 hours ago'
  },
  {
    id: 'task-8',
    title: '草地音樂節',
    category: 'arts',
    customStatusLabel: 'MUSIC',
    description: '大草皮野餐配音樂節！放鬆心情，享受現場民謠吉他演出。帶些零食在草地上度過愜意下午。',
    reward: 0,
    deadline: '2026-06-19',
    location: '校本部情人坡大草皮',
    joinProgressMax: 20,
    joinedHelpersCount: 10,
    joinedHelperAvatars: [],
    createdByUserId: 'student_union',
    createdByName: '學生會藝文部',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r',
    timeAgoLabel: '5 hours ago'
  },
  {
    id: 'task-9',
    title: '桌遊馬拉松',
    category: 'all',
    customStatusLabel: 'GAMES',
    description: '卡卡頌、璀璨寶石、卡坦島！策略遊戲腦力激盪，不插電的終極快樂。',
    reward: 60,
    deadline: '2026-06-20',
    location: '學生活動中心 4 樓桌遊社',
    joinProgressMax: 6,
    joinedHelpersCount: 3,
    joinedHelperAvatars: [],
    createdByUserId: 'xiaoming',
    createdByName: '小明',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBstVlYH-yfllltP3jd38DxlJpiZL8HFDVj1w-5NKIZXX0X-fcAyMasrYzUtCO04Vz0Su_Ym0GYQo_7B8f6hEyngUV_qHOFi-8XRbL6gFK63CPzKhRRS3xbkyG5-Hdki_zNoQj89RlfX0usVnPrEFFyh20xi3zJrl8mOPTyvwHZjH7FE-KR-DB8Vphk0Gwpp_RfNNEpUpb3-teMKxrQmyJSpx7Wpb82MiMwqaoiKdpLGw4Z-DD-3l79f0VRwUbcec32NvpxOPEICAy_',
    timeAgoLabel: '1 day ago'
  },
  {
    id: 'task-10',
    title: '徵活動攝影人手',
    category: 'support',
    customStatusLabel: 'EVENT STAFF',
    description: '校友返校日需要 2 名攝影志願者協助，需自備設備，提供精緻午餐、車馬費及校方參與證明。',
    reward: 500,
    deadline: '2026-06-21',
    location: '行政大樓一樓大禮堂',
    joinProgressMax: 2,
    joinedHelpersCount: 1,
    joinedHelperAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa'
    ],
    createdByUserId: 'admin_office',
    createdByName: '課外活動指導組',
    createdByAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt1JKtEXwLdtrhfFRGxkvhnDPM9O3-nz6npiZc-PbE0VWN2z1Qe9YJn9UbZPHAlvzE1WaLOC9DZ9Eeuu6w8lZfFl4SvuxtIm_2YiMf_L6a165ys8twOBG7_CePBsJktG_o-zUtyfowRe1C13XzNDW4XoUxZQN8tFR6Dcgxije3k2_Bt1cOyXV5ITzTLMnslIrFtVcsjJ7E8qpj3O-qQgCHQpAdaJTYgaWmWkyjqkkSoyS1H3SGryz1iLTQQxP0iUjPuOxFenjpxZ6r',
    timeAgoLabel: '1 hr ago'
  }
];

// Tinder swipe potential matches
export const POTENTIAL_SWIPES: UserProfile[] = [
  {
    id: 'swipe-fan',
    name: '范宇廷',
    avatar: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?auto=format&fit=crop&q=80&w=600',
    isMe: false,
    mbti: 'ESTP',
    interests: ['汽車', '探店', '旅遊', '音樂', '電競'],
    age: 21,
    bio: '哈囉！我是范宇廷，大家都叫我「大員范將軍」。平常喜歡開車兜風、熱愛潮流與各式特色美食探店！希望能在這裡遇到志同道合或性格有趣的校園好夥伴，一起出門踩點玩耍！✌️',
    ratings: 4.9,
    helpCount: 42
  },
  {
    id: 'swipe-tong',
    name: '童錦程',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=600',
    isMe: false,
    mbti: 'ENTP',
    interests: ['電競', '硬體改裝', '旅遊', '汽車', '探店'],
    age: 23,
    bio: '哈囉，我是童錦程！大家都叫我江南第一深情。平常愛開車兜風、探索城市夜生活！希望能遇到性格有趣的人，一起出門遊玩探店！',
    ratings: 4.9,
    helpCount: 99
  },
  {
    id: 'swipe-lucas',
    name: 'Lucas',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvLVokpaPx63i8-5HFbYn9CEsoyf31Glbqjj1WHExuDFdm1cISq5NcF_FusylMRoWVX5jj-8CiStDMwRaDrYIbjDAwrKyyr4pNJrQauOG0l4IHCpbGG05JYsNuArXxK1k9rg-7p33lreSwVUpkTajOuviPjXhevUojSPTlgEHdYTIMWTfr0TUOpJueoHlNoE8CGF98JDrVg72_BysrJyJNgqZvlOOyQ3Wm5eSX2gr4fRNYXSaaoQioTZ2GLGJNYWdvtp-yQXXkTm8Z',
    isMe: false,
    mbti: 'ENFJ',
    interests: ['Badminton', 'Brunch', 'Photography'],
    age: 22,
    bio: '哈囉！我是 Lucas。主修土木，平時熱愛清晨打羽球、周末吃精緻早午餐以及單眼紀實攝影。來當好夥伴吧！',
    ratings: 4.8,
    helpCount: 45
  },
  {
    id: 'swipe-sarah',
    name: 'Sarah',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCroFn2DmrPW8fvRjXL_mgN2VoGL6CFsbjeFW8xDWYDj_e-UnLUjSgHsSwUHJ4pvOrKcxSjojxolXcB9jBjMdhsInGVEVr2OaxFtgUXe1yQvyHyMgOLfZlRXlfBUR-0WHSt4wJu4IOQ8uKJcsdjPONfHWALUR60j3kpQyWs9A2sv0nlkD3ub9eLHT9ENWejIGxanZu-8zPIZ005YqJl7aA07QLsLlqDCaK6Jv916cwmDiGePdqQ1fF6QP6Od7-tBiTWD7hxhkzKHhAB',
    isMe: false,
    mbti: 'INFP',
    interests: ['Coding', 'Cat Cafe', 'Brunch'],
    age: 24,
    bio: '雙子座的 Sarah，資工研究所。喜歡靜靜地在貓咪咖啡廳寫程式，或者週末睡飽去吃美味法式吐司！',
    ratings: 5.0,
    helpCount: 32
  },
  {
    id: 'swipe-emma',
    name: 'Emma',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoqc7mQzo11PJjCzd5ZYGzKkSxjlP6HzhjUAYJMsljwJaxS5-mgWSsKU4mWQgls_6vY-V0HykKU_sr2RcT7rQ--I0fmThVujoPQrHa6WQMvkjz9ZAGg-7vjPlk4Pxcqjh2K4ZTMBUSODakk3DDWvBnEHkFa50_LE0kBr1gv4Y4LA0ivA4Xk3X5qKfYalrIY-wiA6W_sg30Jva1JbEXOR6YEiEg5gKJkJ5dpvom9dLKs7q2BjQxuwEAYUBoj4C6gC8LRxJahI1AJmiJ3',
    isMe: false,
    mbti: 'ENFP',
    interests: ['音樂', '熱舞', '桌遊'],
    age: 21,
    bio: '我是 Emma！企管系大三，熱愛獨立樂團跟社交活動。也是重度桌遊愛好者，隨時歡迎揪團！',
    ratings: 4.7,
    helpCount: 56
  },
  {
    id: 'swipe-leo',
    name: '阿智 Leo',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeHXrl4P_gsq3opHcCrgPAQuGAfMEoDjv2pUOn-9UX-oyZcgVywByfwg6EXjNBm2Qt6FJ5vrvCHXCRX7liSxPd_HUL1tHQyUDunwLWUX3NKioW1tQPjvdvCSDB3dXj7x4mT54Hf9ZtMLoj1klnB_1cBPwhZrF2aBFL8ly3XH1YSEVlmI6QMwwQUTuNzJ7M7-RhjYb9Co2o3P-bZz9bJr9RrwxE9ABYMpFQGcmLtncRb0WJlyb4zx4HfSZXCKInV4jC8-DyAQNXxNdh',
    isMe: false,
    mbti: 'ISTP',
    interests: ['電競', '運動', '音樂'],
    age: 20,
    bio: '我是化學系的阿智！平時最喜歡在線上跟人組隊打戰術電競，也常在夜晚河濱騎行，追求風一般的速度感。來配對找尋最靠譜的校園戰友吧！',
    ratings: 4.9,
    helpCount: 61
  },
  {
    id: 'swipe-bebe',
    name: '貝貝 Bebe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBstVlYH-yfllltP3jd38DxlJpiZL8HFDVj1w-5NKIZXX0X-fcAyMasrYzUtCO04Vz0Su_Ym0GYQo_7B8f6hEyngUV_qHOFi-8XRbL6gFK63CPzKhRRS3xbkyG5-Hdki_zNoQj89RlfX0usVnPrEFFyh20xi3zJrl8mOPTyvwHZjH7FE-KR-DB8Vphk0Gwpp_RfNNEpUpb3-teMKxrQmyJSpx7Wpb82MiMwqaoiKdpLGw4Z-DD-3l79f0VRwUbcec32NvpxOPEICAy_',
    isMe: false,
    mbti: 'ESFP',
    interests: ['美食', '音樂', '旅遊'],
    age: 19,
    bio: '嗨！我是貝貝，管院大一。超級外向！沒事最喜歡在校園附近到處探店踩點、跳街舞跟揪團唱歌。快來找我一起挖掘超好吃的手作甜點店與早午餐！',
    ratings: 4.8,
    helpCount: 29
  },
  {
    id: 'swipe-kev',
    name: '宸愷 Kev',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa',
    isMe: false,
    mbti: 'INTJ',
    interests: ['Coding', '音樂', '電競'],
    age: 22,
    bio: '電機大四，專注務實派。喜歡寫 code 分析算法結構、偶爾彈彈重低音吉他、逛逛科技新創展。期望能在社群裡找到能深聊，或是一起在圖書館默默自習自律的前往目標的夥伴。',
    ratings: 5.0,
    helpCount: 88
  },
  {
    id: 'swipe-sunny',
    name: '子晴 Sunny',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAclEWSdO2r5QrNV4rszqGQCCRGhre6vodCEQxRPomJUH3bDRYSb3dLUscLtnLFkERWtZIPz1WRqG8VniTOYA6pORKKau7alpGU4VacWEt1Z35_1fYqpMIU6ORgqEMNoVoC0SfHISLGFP7sOkKjF3vHKJqNOwv4zvTTBpQNCOvyEWxllcLGo-mWeXhAMUpqR2yCsAXMjuvftX4hJpKlwgbWMCZ_IU9IncEkEMkU4UU8w1OJZX3oPWJIf3PDHmfflEA-WtOXH6o_qyCt',
    isMe: false,
    mbti: 'ENFP',
    interests: ['攝影', '旅遊', '美食'],
    age: 21,
    bio: 'Hey! 我是子晴，中文大三！熱愛拿著骨董底片相機去捕捉校園各個角落的自然光線。很愛去宜蘭或台南小旅行、看現代藝文展！希望能找到可以帶相機隨意在街頭漫步的文青朋友～',
    ratings: 4.9,
    helpCount: 42
  }
];

// Default threads
export const INITIAL_THREADS: ChatThread[] = [
  {
    id: 'thread-brunch',
    title: '週末早午餐約會 (Group)',
    type: 'group',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqlxfkaVWOL3JU1-BpjiFrCVo0DfMi_bggU4G85_qvO_iaXUjjY094s8DD639m1m9_MRVfhmCV3bB3Eml9G_X7KDQsE7_dpQ-cf5ZTAOTkxf5fYKigbX00SC1WCvyPqsyMaz-_-cltooEYkQtRTkUpdosi6Jn8y0_pUSrym2g4GOk8HVeIcTod-rzHkEsFk_6dglGmb4ZHJUVDLxq-FST2jKaNL9nnOsu3mEOtslP3d7J882-k-6NtVn7iAI7Q6RcTW1eN9ecR_r0J',
    statusLabel: '3 位成員',
    categoryTag: '美食',
    lastMessageContent: '林小華：這家的班尼迪克蛋很有名！',
    lastMessageTime: '10:15',
    unreadCount: 3
  },
  {
    id: 'thread-badminton',
    title: '羽球團 (Group)',
    type: 'group',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVO8q3a6GZDyiDFkY0IV93WGgabPx7jFnwuy131QDhcwGQNfc9pajRgTby7jEEbw8TiVjeFht3ckzgOJLKNqba3aG8w-2hOmcAtQnFfD2alDGRdpeZrwcBXE2ci1QszI-8hw6agFcKldGNKP2VK4kNw_eXGNdKC_ZNrPz5OOAIpU78lHLlOUjLJkUu0XivIhkHYl-wZV4zNFFR7j3Z6u5ixJc8UHa9AJERJBQ0T3adDy92R4ULOxRZHBF3Zc-vMoUgOszoKnGQgstS',
    statusLabel: '6 位成員',
    categoryTag: '運動',
    lastMessageContent: '陳大文：週六下午兩點在舊體？',
    lastMessageTime: '09:30',
    unreadCount: 0
  },
  {
    id: 'thread-coolguy',
    title: 'CoolGuy',
    type: 'personal',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBav6p8BHFMfUs9lBDDZjf6pQov4xm6UiBuMNArHBGttHEmrmf3Z7Xu4ICx4qp-R1TCwAZAm0x6VgxViS8EXF7nYcv6LPu5Ipl2hTg3Jb8sU0nifVl4F8SwB-j58-ku-BVc7qqfYgSL_0hn184wAAOIi4rpocdww6H39R0mO_UnkWvq4DOYsTUxMAMpmlHlfThy5YTY5kX-8UGBkLH2lZwBVFrSVi0j8_ynlYnVuNgdza-EdOF1hcIXBkALGsGh69-Z4ltefz2UbakM',
    statusLabel: 'Active 2m ago',
    categoryTag: '單車夜騎',
    lastMessageContent: 'CoolGuy：嗨！我們今晚在老地方集合！',
    lastMessageTime: '12:34',
    unreadCount: 1
  },
  {
    id: 'thread-college_girl',
    title: '學霸小學妹',
    type: 'personal',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgVuO3yNbuIVAs4LbkJl-tTHzddmuI4_ZDruK3R48kUpwWsFFYnByBpqc-5DLekp7FrYNCRTHno-uXT2PSZhsf5ppqB3Z-WJE8Mrnzx9kNM1n14RGMoaFGxZHjXFEzu7XkV1hldzSOj8zwWyV6P8MbGMInyCcGmVL-zIo9E9pESyjaQAQhwTijLfH9domUgP_wXzJ4gJo1JIlOdmV-MnqyPBgx7YKHrqxuFSkQDAeG-tJ8n0S7ZJgQ9kjGtQSyj-ol-_Z2-lV0YTNV',
    statusLabel: 'Active 1d ago',
    categoryTag: '求筆記',
    lastMessageContent: '學霸小學妹：真的太謝謝你了！微積分救星！',
    lastMessageTime: '昨天',
    unreadCount: 0
  },
  {
    id: 'thread-xiaoming',
    title: '小明',
    type: 'personal',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBstVlYH-yfllltP3jd38DxlJpiZL8HFDVj1w-5NKIZXX0X-fcAyMasrYzUtCO04Vz0Su_Ym0GYQo_7B8f6hEyngUV_qHOFi-8XRbL6gFK63CPzKhRRS3xbkyG5-Hdki_zNoQj89RlfX0usVnPrEFFyh20xi3zJrl8mOPTyvwHZjH7FE-KR-DB8Vphk0Gwpp_RfNNEpUpb3-teMKxrQmyJSpx7Wpb82MiMwqaoiKdpLGw4Z-DD-3l79f0VRwUbcec32NvpxOPEICAy_',
    statusLabel: 'Active 2d ago',
    categoryTag: '火鍋吃到飽',
    lastMessageContent: '小明：那算我一個喔，哈哈。',
    lastMessageTime: '星期二',
    unreadCount: 0
  },
  {
    id: 'thread-emma',
    title: 'Emma',
    type: 'personal',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq5z0f6653k4UQiBPIVl-cQrQ4GFMwVuqlkZ03CBm04adQ0rrOKQqt2Nh-M-7-MNjifRWzMWP9DyHU80UBMrMtW4vpf0KlTue1tOclHa7doYFaIQxg5RNV5qjOiWMBbHDk96ip_Tp6zotbrp97vzISGEGURYqesBOG_ShG0k12VsQjuKS-QjdbV_f1-nY8KTMux8_NGY3c1t6PlfqmEcwHB94QbqFlQ7kvsHXhpauFKbLpRocVSO-A18kLVVpWnN2-6XQXm8hQdNFn',
    statusLabel: 'Active 3d ago',
    categoryTag: '徵活動攝影',
    lastMessageContent: 'Emma：請問器材需要自己帶嗎？',
    lastMessageTime: '3天前',
    unreadCount: 0
  }
];

// Message histories by ThreadId
export const INITIAL_MESSAGES: Record<string, ChatMessage[]> = {
  'thread-coolguy': [
    {
      id: 'm-1',
      threadId: 'thread-coolguy',
      senderName: 'CoolGuy',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBav6p8BHFMfUs9lBDDZjf6pQov4xm6UiBuMNArHBGttHEmrmf3Z7Xu4ICx4qp-R1TCwAZAm0x6VgxViS8EXF7nYcv6LPu5Ipl2hTg3Jb8sU0nifVl4F8SwB-j58-ku-BVc7qqfYgSL_0hn184wAAOIi4rpocdww6H39R0mO_UnkWvq4DOYsTUxMAMpmlHlfThy5YTY5kX-8UGBkLH2lZwBVFrSVi0j8_ynlYnVuNgdza-EdOF1hcIXBkALGsGh69-Z4ltefz2UbakM',
      senderIsMe: false,
      content: '嘿 Peter！看到你也想去河濱騎車。那我們下午三點在公館水源地出口集合好嗎？',
      timestampLabel: '14:35',
      type: 'text'
    },
    {
      id: 'm-2',
      threadId: 'thread-coolguy',
      senderName: 'PeterLin',
      senderAvatar: CURRENT_USER_MOCK.avatar,
      senderIsMe: true,
      content: '好喔！沒問題！我會騎那台藍色的公路車，待會見！',
      timestampLabel: '14:38',
      type: 'text'
    }
  ],
  'thread-brunch': [
    {
      id: 'mb-1',
      threadId: 'thread-brunch',
      senderName: '林小華',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAclEWSdO2r5QrNV4rszqGQCCRGhre6vodCEQxRPomJUH3bDRYSb3dLUscLtnLFkERWtZIPz1WRqG8VniTOYA6pORKKau7alpGU4VacWEt1Z35_1fYqpMIU6ORgqEMNoVoC0SfHISLGFP7sOkKjF3vHKJqNOwv4zvTTBpQNCOvyEWxllcLGo-mWeXhAMUpqR2yCsAXMjuvftX4hJpKlwgbWMCZ_IU9IncEkEMkU4UU8w1OJZX3oPWJIf3PDHmfflEA-WtOXH6o_qyCt',
      senderIsMe: false,
      content: '這家的班尼迪克蛋很有名！',
      timestampLabel: '10:15',
      type: 'text'
    },
    {
      id: 'mb-2',
      threadId: 'thread-brunch',
      senderName: '陳大文',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa',
      senderIsMe: false,
      content: '好期待喔，我已經訂好位了。',
      timestampLabel: '10:17',
      type: 'text'
    },
    {
      id: 'mb-3',
      threadId: 'thread-brunch',
      senderName: 'Emma',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoqc7mQzo11PJjCzd5ZYGzKkSxjlP6HzhjUAYJMsljwJaxS5-mgWSsKU4mWQgls_6vY-V0HykKU_sr2RcT7rQ--I0fmThVujoPQrHa6WQMvkjz9ZAGg-7vjPlk4Pxcqjh2K4ZTMBUSODakk3DDWvBnEHkFa50_LE0kBr1gv4Y4LA0ivA4Xk3X5qKfYalrIY-wiA6W_sg30Jva1JbEXOR6YEiEg5gKJkJ5dpvom9dLKs7q2BjQxuwEAYUBoj4C6gC8LRxJahI1AJmiJ3',
      senderIsMe: false,
      content: '我也超想吃這家的！大家記得準時到喔。',
      timestampLabel: '10:20',
      type: 'text'
    },
    {
      id: 'mb-4',
      threadId: 'thread-brunch',
      senderName: 'PeterLin',
      senderAvatar: CURRENT_USER_MOCK.avatar,
      senderIsMe: true,
      content: '沒問題，我會提早 5 分鐘到的！👌',
      timestampLabel: '10:22',
      type: 'text'
    }
  ],
  'thread-badminton': [
    {
      id: 'mbi-1',
      threadId: 'thread-badminton',
      senderName: '陳大文',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa',
      senderIsMe: false,
      content: '嗨！看到你有興趣參與我們的單車夜騎活動，我們今晚在老地方集合！', // Wait this is cycling message in the badminton group mock? Ah let's make it matches badminton group chat:
      timestampLabel: '12:30',
      type: 'text'
    },
    {
      id: 'mbi-2',
      threadId: 'thread-badminton',
      senderName: 'PeterLin',
      senderAvatar: CURRENT_USER_MOCK.avatar,
      senderIsMe: true,
      content: '好喔！沒問題！那大約幾點呢？',
      timestampLabel: '12:32',
      type: 'text'
    },
    {
      id: 'mbi-3',
      threadId: 'thread-badminton',
      senderName: '陳大文',
      senderAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSLPM9bzfmQRsRt5UpJ5Pd3R4F6ZyCr3KqrED1UhscNhE1_a7LqHYVx6KS7-RL5RivlmTVJuX7TZoxkHxVmKNmSRyDXVOuOX-RTircGRmZWaJHPOO9M8oPtSqLM5Ted3UMZAfTXLQDBVz-WlHwlWZoL9n3cviDeDs-U7Jw--8Zsx-9egRjN9nSDni4J9D5NsG6vue0ZGx52Eput4UeolGdkerQ81OSfGV14su8mnIs1DN6pm7GrwS1rtdFT6FIPVCoERpyciImBoAa',
      senderIsMe: false,
      content: '預計晚上 8 點在校門口集合，要記得帶大燈喔！',
      timestampLabel: '12:33',
      type: 'text'
    },
    {
      id: 'mbi-4',
      threadId: 'thread-badminton',
      senderName: 'PeterLin',
      senderAvatar: CURRENT_USER_MOCK.avatar,
      senderIsMe: true,
      content: '👍',
      timestampLabel: '12:34',
      type: 'sticker',
      stickerIcon: 'thumb_up'
    }
  ]
};
