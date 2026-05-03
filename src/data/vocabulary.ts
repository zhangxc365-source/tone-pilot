export interface Word {
  character: string;
  pinyin: string;
  pinyinPlain: string;
  tones: number[];
  translation: {
    en: string;
    mn: string;
  };
  level: number;
  lesson: number;
  audio?: string;
}

export const YCT_VOCAB: Word[] = [
  // ==========================================
  // YCT 1 (Followed user's provided list)
  // ==========================================

  // Lesson 1 (13 words)
  { character: "你好", pinyin: "nǐ hǎo", pinyinPlain: "ni hao", tones: [3, 3], translation: { en: "hello", mn: "сайн байна уу" }, level: 1, lesson: 1, audio: "/audio/YCT1/001_你好.wav" },
  { character: "老师", pinyin: "lǎo shī", pinyinPlain: "lao shi", tones: [3, 1], translation: { en: "teacher", mn: "багш" }, level: 1, lesson: 1, audio: "/audio/YCT1/002_老师.wav" },
  { character: "再见", pinyin: "zài jiàn", pinyinPlain: "zai jian", tones: [4, 4], translation: { en: "goodbye", mn: "баяртай" }, level: 1, lesson: 1, audio: "/audio/YCT1/003_再见.wav" },
  { character: "一", pinyin: "yī", pinyinPlain: "yi", tones: [1], translation: { en: "one", mn: "нэг" }, level: 1, lesson: 1, audio: "/audio/YCT1/004_一.wav" },
  { character: "二", pinyin: "èr", pinyinPlain: "er", tones: [4], translation: { en: "two", mn: "хоёр" }, level: 1, lesson: 1, audio: "/audio/YCT1/005_二.wav" },
  { character: "三", pinyin: "sān", pinyinPlain: "san", tones: [1], translation: { en: "three", mn: "гурав" }, level: 1, lesson: 1, audio: "/audio/YCT1/006_三.wav" },
  { character: "四", pinyin: "sì", pinyinPlain: "si", tones: [4], translation: { en: "four", mn: "дөрөв" }, level: 1, lesson: 1, audio: "/audio/YCT1/007_四.wav" },
  { character: "五", pinyin: "wǔ", pinyinPlain: "wu", tones: [3], translation: { en: "five", mn: "тав" }, level: 1, lesson: 1, audio: "/audio/YCT1/008_五.wav" },
  { character: "六", pinyin: "liù", pinyinPlain: "liu", tones: [4], translation: { en: "six", mn: "зургаа" }, level: 1, lesson: 1, audio: "/audio/YCT1/009_六.wav" },
  { character: "七", pinyin: "qī", pinyinPlain: "qi", tones: [1], translation: { en: "seven", mn: "долоо" }, level: 1, lesson: 1, audio: "/audio/YCT1/010_七.wav" },
  { character: "八", pinyin: "bā", pinyinPlain: "ba", tones: [1], translation: { en: "eight", mn: "найм" }, level: 1, lesson: 1, audio: "/audio/YCT1/011_八.wav" },
  { character: "九", pinyin: "jiǔ", pinyinPlain: "jiu", tones: [3], translation: { en: "nine", mn: "ес" }, level: 1, lesson: 1, audio: "/audio/YCT1/012_九.wav" },
  { character: "十", pinyin: "shí", pinyinPlain: "shi", tones: [2], translation: { en: "ten", mn: "арав" }, level: 1, lesson: 1, audio: "/audio/YCT1/013_十.wav" },

  // Lesson 2 (9 words)
  { character: "我", pinyin: "wǒ", pinyinPlain: "wo", tones: [3], translation: { en: "I", mn: "би" }, level: 1, lesson: 2, audio: "/audio/YCT1/014_我.wav" },
  { character: "叫", pinyin: "jiào", pinyinPlain: "jiao", tones: [4], translation: { en: "to be called", mn: "нэрлэх" }, level: 1, lesson: 2, audio: "/audio/YCT1/015_叫.wav" },
  { character: "什么", pinyin: "shén me", pinyinPlain: "shen me", tones: [2, 0], translation: { en: "what", mn: "юу" }, level: 1, lesson: 2, audio: "/audio/YCT1/016_什么.wav" },
  { character: "认识", pinyin: "rèn shi", pinyinPlain: "ren shi", tones: [4, 0], translation: { en: "to know", mn: "таних" }, level: 1, lesson: 2, audio: "/audio/YCT1/017_认识.wav" },
  { character: "很", pinyin: "hěn", pinyinPlain: "hen", tones: [3], translation: { en: "very", mn: "маш" }, level: 1, lesson: 2, audio: "/audio/YCT1/019_很.wav" },
  { character: "高兴", pinyin: "gāo xìng", pinyinPlain: "gao xing", tones: [1, 4], translation: { en: "glad", mn: "баяртай" }, level: 1, lesson: 2, audio: "/audio/YCT1/018_高兴.wav" },
  { character: "她", pinyin: "tā", pinyinPlain: "ta", tones: [1], translation: { en: "she", mn: "тэр (эм)" }, level: 1, lesson: 2, audio: "/audio/YCT1/022_她.wav" },
  {
    character: "吗",
    pinyin: "ma",
    pinyinPlain: "ma",
    tones: [0],
    translation: { en: "question particle", mn: "уу/үү" },
    level: 1,
    lesson: 2,
    audio: "/audio/YCT1/021_吗.wav"
  },
  {
    character: "不",
    pinyin: "bù",
    pinyinPlain: "bu",
    tones: [4],
    translation: { en: "no", mn: "биш/үгүй" },
    level: 1,
    lesson: 2,
    audio: "/audio/YCT1/020_不.wav"
  },

  // Lesson 3 (7 words)
  {
    character: "他",
    pinyin: "tā",
    pinyinPlain: "ta",
    tones: [1],
    translation: { en: "he", mn: "тэр (эр)" },
    level: 1,
    lesson: 3,
    audio: "/audio/YCT1/023_他.wav"
  },
  {
    character: "是",
    pinyin: "shì",
    pinyinPlain: "shi",
    tones: [4],
    translation: { en: "am/is/are", mn: "бол" },
    level: 1,
    lesson: 3,
    audio: "/audio/YCT1/024_是.wav"
  },
  {
    character: "哪",
    pinyin: "nǎ",
    pinyinPlain: "na",
    tones: [3],
    translation: { en: "which", mn: "аль" },
    level: 1,
    lesson: 3,
    audio: "/audio/YCT1/025_哪.wav"
  },
  {
    character: "国",
    pinyin: "guó",
    pinyinPlain: "guo",
    tones: [2],
    translation: { en: "country", mn: "улс" },
    level: 1,
    lesson: 3,
    audio: "/audio/YCT1/026_国.wav"
  },
  { character: "人", pinyin: "rén", pinyinPlain: "ren", tones: [2], translation: { en: "person", mn: "хүн" }, level: 1, lesson: 3, audio: "/audio/YCT1/027_人.wav" },
  { character: "谁", pinyin: "shuí", pinyinPlain: "shui", tones: [2], translation: { en: "who", mn: "хэн" }, level: 1, lesson: 3, audio: "/audio/YCT1/028_谁.wav" },
  { character: "中国人", pinyin: "zhōng guó rén", pinyinPlain: "zhong guo ren", tones: [1, 2, 2], translation: { en: "Chinese people", mn: "Хятад хүн" }, level: 1, lesson: 3, audio: "/audio/YCT1/029_中国人.wav" },

  // Lesson 4 (12 words)
  { character: "爸爸", pinyin: "bà ba", pinyinPlain: "ba ba", tones: [4, 0], translation: { en: "father", mn: "аав" }, level: 1, lesson: 4, audio: "/audio/YCT1/030_爸爸.wav" },
  { character: "妈妈", pinyin: "mā ma", pinyinPlain: "ma ma", tones: [1, 0], translation: { en: "mother", mn: "ээж" }, level: 1, lesson: 4, audio: "/audio/YCT1/031_妈妈.wav" },
  { character: "哥哥", pinyin: "gē ge", pinyinPlain: "ge ge", tones: [1, 0], translation: { en: "big brother", mn: "ах" }, level: 1, lesson: 4, audio: "/audio/YCT1/032_哥哥.wav" },
  { character: "姐姐", pinyin: "jiě jie", pinyinPlain: "jie jie", tones: [3, 0], translation: { en: "big sister", mn: "эгч" }, level: 1, lesson: 4, audio: "/audio/YCT1/033_姐姐.wav" },
  { character: "妹妹", pinyin: "mèi mei", pinyinPlain: "mei mei", tones: [4, 0], translation: { en: "little sister", mn: "охин дүү" }, level: 1, lesson: 4, audio: "/audio/YCT1/034_妹妹.wav" },
  { character: "家", pinyin: "jiā", pinyinPlain: "jia", tones: [1], translation: { en: "family", mn: "гэр" }, level: 1, lesson: 4, audio: "/audio/YCT1/035_家.wav" },
  { character: "没有", pinyin: "méi yǒu", pinyinPlain: "mei you", tones: [2, 3], translation: { en: "don’t have", mn: "байхгүй" }, level: 1, lesson: 4, audio: "/audio/YCT1/036_没有.wav" },
  { character: "有", pinyin: "yǒu", pinyinPlain: "you", tones: [3], translation: { en: "have", mn: "байгаа" }, level: 1, lesson: 4, audio: "/audio/YCT1/037_有.wav" },
  { character: "几", pinyin: "jǐ", pinyinPlain: "ji", tones: [3], translation: { en: "how many", mn: "хэд" }, level: 1, lesson: 4, audio: "/audio/YCT1/038_几.wav" },
  { character: "口", pinyin: "kǒu", pinyinPlain: "kou", tones: [3], translation: { en: "(measure word)", mn: "ам" }, level: 1, lesson: 4, audio: "/audio/YCT1/039_口.wav" },
  { character: "和", pinyin: "hé", pinyinPlain: "he", tones: [2], translation: { en: "and", mn: "болон/ба" }, level: 1, lesson: 4, audio: "/audio/YCT1/040_和.wav" },
  { character: "个", pinyin: "gè", pinyinPlain: "ge", tones: [4], translation: { en: "(measure word)", mn: "ширхэг" }, level: 1, lesson: 4, audio: "/audio/YCT1/041_个.wav" },

  // Lesson 5 (3 words)
  { character: "岁", pinyin: "suì", pinyinPlain: "sui", tones: [4], translation: { en: "years old", mn: "нас" }, level: 1, lesson: 5, audio: "/audio/YCT1/042_岁.wav" },
  { character: "多大", pinyin: "duō dà", pinyinPlain: "duo da", tones: [1, 4], translation: { en: "how old", mn: "хэдэн настай" }, level: 1, lesson: 5, audio: "/audio/YCT1/043_多大.wav" },
  { character: "也", pinyin: "yě", pinyinPlain: "ye", tones: [3], translation: { en: "also", mn: "бас" }, level: 1, lesson: 5, audio: "/audio/YCT2/也.wav" },

  // Lesson 6 (12 words)
  { character: "个子", pinyin: "gè zi", pinyinPlain: "ge zi", tones: [4, 0], translation: { en: "height", mn: "нуруу" }, level: 1, lesson: 6, audio: "/audio/YCT1/045_个子.wav" },
  { character: "小", pinyin: "xiǎo", pinyinPlain: "xiao", tones: [3], translation: { en: "small", mn: "жижиг" }, level: 1, lesson: 6, audio: "/audio/YCT1/046_小.wav" },
  { character: "大", pinyin: "dà", pinyinPlain: "da", tones: [4], translation: { en: "big", mn: "том" }, level: 1, lesson: 6, audio: "/audio/YCT1/047_大.wav" },
  { character: "长", pinyin: "cháng", pinyinPlain: "chang", tones: [2], translation: { en: "long", mn: "урт" }, level: 1, lesson: 6, audio: "/audio/YCT1/048_长.wav" },
  { character: "真", pinyin: "zhēn", pinyinPlain: "zhen", tones: [1], translation: { en: "really", mn: "үнэхээр" }, level: 1, lesson: 6, audio: "/audio/YCT1/049_真.wav" },
  { character: "高", pinyin: "gāo", pinyinPlain: "gao", tones: [1], translation: { en: "tall", mn: "өндөр" }, level: 1, lesson: 6, audio: "/audio/YCT1/050_高.wav" },
  { character: "鼻子", pinyin: "bí zi", pinyinPlain: "bi zi", tones: [2, 0], translation: { en: "nose", mn: "хамар" }, level: 1, lesson: 6, audio: "/audio/YCT1/051_鼻子.wav" },
  { character: "头发", pinyin: "tóu fa", pinyinPlain: "tou fa", tones: [2, 0], translation: { en: "hair", mn: "үс" }, level: 1, lesson: 6, audio: "/audio/YCT1/052_头发.wav" },
  { character: "眼睛", pinyin: "yǎn jing", pinyinPlain: "yan jing", tones: [3, 0], translation: { en: "eye", mn: "нүд" }, level: 1, lesson: 6, audio: "/audio/YCT1/053_眼睛.wav" },
  { character: "手", pinyin: "shǒu", pinyinPlain: "shou", tones: [3], translation: { en: "hand", mn: "гар" }, level: 1, lesson: 6, audio: "/audio/YCT1/054_手.wav" },
  { character: "耳朵", pinyin: "ěr duo", pinyinPlain: "er duo", tones: [3, 0], translation: { en: "ear", mn: "чих" }, level: 1, lesson: 6, audio: "/audio/YCT1/055_耳朵.wav" },
  { character: "的", pinyin: "de", pinyinPlain: "de", tones: [0], translation: { en: "particle", mn: "-ын/-ийн" }, level: 1, lesson: 6, audio: "/audio/YCT1/056_的.wav" },

  // Lesson 7 (10 words)
  { character: "猫", pinyin: "māo", pinyinPlain: "mao", tones: [1], translation: { en: "cat", mn: "муур" }, level: 1, lesson: 7, audio: "/audio/YCT1/057_猫.wav" },
  { character: "狗", pinyin: "gǒu", pinyinPlain: "gou", tones: [3], translation: { en: "dog", mn: "нохой" }, level: 1, lesson: 7, audio: "/audio/YCT1/058_狗.wav" },
  { character: "鱼", pinyin: "yú", pinyinPlain: "yu", tones: [2], translation: { en: "fish", mn: "загас" }, level: 1, lesson: 7, audio: "/audio/YCT1/059_鱼.wav" },
  { character: "鸟", pinyin: "niǎo", pinyinPlain: "niao", tones: [3], translation: { en: "bird", mn: "шувуу" }, level: 1, lesson: 7, audio: "/audio/YCT1/060_鸟.wav" },
  { character: "这", pinyin: "zhè", pinyinPlain: "zhe", tones: [4], translation: { en: "this", mn: "энэ" }, level: 1, lesson: 7, audio: "/audio/YCT1/061_这.wav" },
  { character: "那", pinyin: "nà", pinyinPlain: "na", tones: [4], translation: { en: "that", mn: "тэр" }, level: 1, lesson: 7, audio: "/audio/YCT1/062_那.wav" },
  { character: "看", pinyin: "kàn", pinyinPlain: "kan", tones: [4], translation: { en: "look", mn: "харах" }, level: 1, lesson: 7, audio: "/audio/YCT1/063_看.wav" },
  { character: "这儿", pinyin: "zhèr", pinyinPlain: "zher", tones: [4], translation: { en: "here", mn: "энд" }, level: 1, lesson: 7, audio: "/audio/YCT1/064_这儿.wav" },
  { character: "那儿", pinyin: "nǎr", pinyinPlain: "nar", tones: [3], translation: { en: "there", mn: "тэнд" }, level: 1, lesson: 7, audio: "/audio/YCT1/065_那儿.wav" },
  { character: "多", pinyin: "duō", pinyinPlain: "duo", tones: [1], translation: { en: "many", mn: "их" }, level: 1, lesson: 7, audio: "/audio/YCT1/066_多.wav" },

  // Lesson 8 (8 words)
  { character: "学校", pinyin: "xué xiào", pinyinPlain: "xue xiao", tones: [2, 4], translation: { en: "school", mn: "сургууль" }, level: 1, lesson: 8, audio: "/audio/YCT1/067_学校.wav" },
  { character: "商店", pinyin: "shāng diàn", pinyinPlain: "shang dian", tones: [1, 4], translation: { en: "store", mn: "дэлгүүр" }, level: 1, lesson: 8, audio: "/audio/YCT1/068_商店.wav" },
  { character: "在", pinyin: "zài", pinyinPlain: "zai", tones: [4], translation: { en: "at", mn: "байгаа/ ...-д" }, level: 1, lesson: 8, audio: "/audio/YCT1/069_在.wav" },
  { character: "谢谢", pinyin: "xiè xie", pinyinPlain: "xie xie", tones: [4, 0], translation: { en: "thank you", mn: "баярлалаа" }, level: 1, lesson: 8, audio: "/audio/YCT1/070_谢谢.wav" },
  { character: "去", pinyin: "qù", pinyinPlain: "qu", tones: [4], translation: { en: "go", mn: "явах" }, level: 1, lesson: 8, audio: "/audio/YCT1/071_去.wav" },
  { character: "你们", pinyin: "nǐ men", pinyinPlain: "ni men", tones: [3, 0], translation: { en: "you", mn: "та нар" }, level: 1, lesson: 8, audio: "/audio/YCT1/072_你们.wav" },
  { character: "我们", pinyin: "wǒ men", pinyinPlain: "wo men", tones: [3, 0], translation: { en: "we", mn: "бид" }, level: 1, lesson: 8, audio: "/audio/YCT1/073_我们.wav" },
  { character: "哪儿", pinyin: "nǎr", pinyinPlain: "nar", tones: [3], translation: { en: "where", mn: "хаана" }, level: 1, lesson: 8, audio: "/audio/YCT1/074_哪儿.wav" },

  // Lesson 9 (14 words)
  { character: "生日", pinyin: "shēng rì", pinyinPlain: "sheng ri", tones: [1, 4], translation: { en: "birthday", mn: "төрсөн өдөр" }, level: 1, lesson: 9, audio: "/audio/YCT1/075_生日.wav" },
  { character: "星期一", pinyin: "xīng qī yī", pinyinPlain: "xing qi yi", tones: [1, 1, 1], translation: { en: "Monday", mn: "Даваа" }, level: 1, lesson: 9, audio: "/audio/YCT1/076_星期一.wav" },
  { character: "星期二", pinyin: "xīng qī èr", pinyinPlain: "xing qi er", tones: [1, 1, 4], translation: { en: "Tuesday", mn: "Мягмар" }, level: 1, lesson: 9, audio: "/audio/YCT1/077_星期二.wav" },
  { character: "星期三", pinyin: "xīng qī sān", pinyinPlain: "xing qi san", tones: [1, 1, 1], translation: { en: "Wednesday", mn: "Лхагва" }, level: 1, lesson: 9, audio: "/audio/YCT1/078_星期三.wav" },
  { character: "星期四", pinyin: "xīng qī sì", pinyinPlain: "xing qi si", tones: [1, 1, 4], translation: { en: "Thursday", mn: "Пүрэв" }, level: 1, lesson: 9, audio: "/audio/YCT1/079_星期四.wav" },
  { character: "星期五", pinyin: "xīng qī wǔ", pinyinPlain: "xing qi wu", tones: [1, 1, 3], translation: { en: "Friday", mn: "Баасан" }, level: 1, lesson: 9, audio: "/audio/YCT1/080_星期五.wav" },
  { character: "星期六", pinyin: "xīng qī liù", pinyinPlain: "xing qi liu", tones: [1, 1, 4], translation: { en: "Saturday", mn: "Бямба" }, level: 1, lesson: 9, audio: "/audio/YCT1/081_星期六.wav" },
  { character: "星期天", pinyin: "xīng qī tiān", pinyinPlain: "xing qi tian", tones: [1, 1, 1], translation: { en: "Sunday", mn: "Ням" }, level: 1, lesson: 9, audio: "/audio/YCT1/082_星期天.wav" },
  { character: "月", pinyin: "yuè", pinyinPlain: "yue", tones: [4], translation: { en: "month", mn: "сар" }, level: 1, lesson: 9, audio: "/audio/YCT1/083_月.wav" },
  { character: "号", pinyin: "hào", pinyinPlain: "hao", tones: [4], translation: { en: "date", mn: "өдөр" }, level: 1, lesson: 9, audio: "/audio/YCT1/084_号.wav" },
  { character: "今天", pinyin: "jīn tiān", pinyinPlain: "jin tian", tones: [1, 1], translation: { en: "today", mn: "өнөөдөр" }, level: 1, lesson: 9, audio: "/audio/YCT1/085_今天.wav" },
  { character: "星期", pinyin: "xīng qī", pinyinPlain: "xing qi", tones: [1, 1], translation: { en: "week", mn: "долоо хоног" }, level: 1, lesson: 9, audio: "/audio/YCT1/086_星期.wav" },
  { character: "明天", pinyin: "míng tiān", pinyinPlain: "ming tian", tones: [2, 1], translation: { en: "tomorrow", mn: "маргааш" }, level: 1, lesson: 9, audio: "/audio/YCT1/087_明天.wav" },
  { character: "喜欢", pinyin: "xǐ huān", pinyinPlain: "xi huan", tones: [3, 1], translation: { en: "like", mn: "дуртай" }, level: 1, lesson: 9, audio: "/audio/YCT1/088_喜欢.wav" },

  // Lesson 10 (5 words)
  { character: "现在", pinyin: "xiàn zài", pinyinPlain: "xian zai", tones: [4, 4], translation: { en: "now", mn: "одоо" }, level: 1, lesson: 10, audio: "/audio/YCT1/089_现在.wav" },
  { character: "点", pinyin: "diǎn", pinyinPlain: "dian", tones: [3], translation: { en: "o’clock", mn: "цаг" }, level: 1, lesson: 10, audio: "/audio/YCT1/090_点.wav" },
  { character: "分", pinyin: "fēn", pinyinPlain: "fen", tones: [1], translation: { en: "minute", mn: "минут" }, level: 1, lesson: 10, audio: "/audio/YCT1/091_分.wav" },
  { character: "见", pinyin: "jiàn", pinyinPlain: "jian", tones: [4], translation: { en: "meet", mn: "уулзах" }, level: 1, lesson: 10, audio: "/audio/YCT1/092_见.wav" },
  { character: "早上", pinyin: "zǎo shang", pinyinPlain: "zao shang", tones: [3, 0], translation: { en: "morning", mn: "өглөө" }, level: 1, lesson: 10, audio: "/audio/YCT1/093_早上.wav" },

  // Lesson 11 (9 words)
  { character: "米饭", pinyin: "mǐ fàn", pinyinPlain: "mi fan", tones: [3, 4], translation: { en: "rice", mn: "агшаасан будаа" }, level: 1, lesson: 11, audio: "/audio/YCT1/094_米饭.wav" },
  { character: "面条", pinyin: "miàn tiáo", pinyinPlain: "mian tiao", tones: [4, 2], translation: { en: "noodles", mn: "гоймон" }, level: 1, lesson: 11, audio: "/audio/YCT1/095_面条.wav" },
  { character: "苹果", pinyin: "píng guǒ", pinyinPlain: "ping guo", tones: [2, 3], translation: { en: "apple", mn: "алим" }, level: 1, lesson: 11, audio: "/audio/YCT1/096_苹果.wav" },
  { character: "牛奶", pinyin: "niú nǎi", pinyinPlain: "niu nai", tones: [2, 3], translation: { en: "milk", mn: "сүү" }, level: 1, lesson: 11, audio: "/audio/YCT1/097_牛奶.wav" },
  { character: "水", pinyin: "shuǐ", pinyinPlain: "shui", tones: [3], translation: { en: "water", mn: "ус" }, level: 1, lesson: 11, audio: "/audio/YCT1/098_水.wav" },
  { character: "蛋糕", pinyin: "dàn gāo", pinyinPlain: "dan gao", tones: [4, 1], translation: { en: "cake", mn: "бялуу" }, level: 1, lesson: 11, audio: "/audio/YCT1/099_蛋糕.wav" },
  { character: "吃", pinyin: "chī", pinyinPlain: "chi", tones: [1], translation: { en: "eat", mn: "идэх" }, level: 1, lesson: 11, audio: "/audio/YCT1/100_吃.wav" },
  { character: "喝", pinyin: "hē", pinyinPlain: "he", tones: [1], translation: { en: "drink", mn: "уух" }, level: 1, lesson: 11, audio: "/audio/YCT1/101_喝.wav" },
  { character: "爱", pinyin: "ài", pinyinPlain: "ai", tones: [4], translation: { en: "love", mn: "хайртай" }, level: 1, lesson: 11, audio: "/audio/YCT1/102_爱.wav" },

  // ==========================================
  // YCT 2 (Followed user's provided list)
  // ==========================================

  // Lesson 1 (8 words)
  { character: "可以", pinyin: "kě yǐ", pinyinPlain: "ke yi", tones: [3, 3], translation: { en: "may", mn: "болох" }, level: 2, lesson: 1, audio: "/audio/YCT2/001_可以.wav" },
  { character: "坐", pinyin: "zuò", pinyinPlain: "zuo", tones: [4], translation: { en: "sit", mn: "суух" }, level: 2, lesson: 1, audio: "/audio/YCT2/002_坐.wav" },
  { character: "请", pinyin: "qǐng", pinyinPlain: "qing", tones: [3], translation: { en: "please", mn: "гуйя" }, level: 2, lesson: 1, audio: "/audio/YCT2/003_请.wav" },
  { character: "不客气", pinyin: "bú kè qi", pinyinPlain: "bu ke qi", tones: [2, 4, 0], translation: { en: "you’re welcome", mn: "зүгээр ээ" }, level: 2, lesson: 1, audio: "/audio/YCT2/004_不客气.wav" },
  { character: "说话", pinyin: "shuō huà", pinyinPlain: "shuo hua", tones: [1, 4], translation: { en: "talk", mn: "ярих" }, level: 2, lesson: 1, audio: "/audio/YCT2/005_说话.wav" },
  { character: "对不起", pinyin: "duì bu qǐ", pinyinPlain: "dui bu qi", tones: [4, 0, 3], translation: { en: "I’m sorry", mn: "уучлаарай" }, level: 2, lesson: 1, audio: "/audio/YCT2/006_对不起.wav" },
  { character: "没关系", pinyin: "méi guān xi", pinyinPlain: "mei guan xi", tones: [2, 1, 0], translation: { en: "never mind", mn: "зүгээр ээ" }, level: 2, lesson: 1, audio: "/audio/YCT2/007_没关系.wav" },
  { character: "不要", pinyin: "bú yào", pinyinPlain: "bu yao", tones: [2, 4], translation: { en: "don’t", mn: "битгий" }, level: 2, lesson: 1, audio: "/audio/YCT2/008_不要.wav" },

  // Lesson 2 (7 words)
  { character: "起床", pinyin: "qǐ chuáng", pinyinPlain: "qi chuang", tones: [3, 2], translation: { en: "get up", mn: "босох" }, level: 2, lesson: 2, audio: "/audio/YCT2/009_起床.wav" },
  { character: "睡觉", pinyin: "shuì jiào", pinyinPlain: "shui jiao", tones: [4, 4], translation: { en: "sleep", mn: "унтах" }, level: 2, lesson: 2, audio: "/audio/YCT2/010_睡觉.wav" },
  { character: "早上", pinyin: "zǎo shang", pinyinPlain: "zao shang", tones: [3, 0], translation: { en: "morning", mn: "өглөө" }, level: 2, lesson: 2, audio: "/audio/YCT2/011_早上.wav" },
  { character: "晚上", pinyin: "wǎn shang", pinyinPlain: "wan shang", tones: [3, 0], translation: { en: "evening", mn: "орой" }, level: 2, lesson: 2, audio: "/audio/YCT2/012_晚上.wav" },
  { character: "到", pinyin: "dào", pinyinPlain: "dao", tones: [4], translation: { en: "arrive", mn: "хүрэх" }, level: 2, lesson: 2, audio: "/audio/YCT2/013_到.wav" },
  { character: "呢", pinyin: "ne", pinyinPlain: "ne", tones: [0], translation: { en: "particle", mn: "харин" }, level: 2, lesson: 2, audio: "/audio/YCT2/014_呢.wav" },
  { character: "要", pinyin: "yào", pinyinPlain: "yao", tones: [4], translation: { en: "want", mn: "хүсэх" }, level: 2, lesson: 2, audio: "/audio/YCT2/015_要.wav" },

  // Lesson 3 (10 words)
  { character: "矮", pinyin: "ǎi", pinyinPlain: "ai", tones: [3], translation: { en: "short", mn: "намхан" }, level: 2, lesson: 3, audio: "/audio/YCT2/016_矮.wav" },
  { character: "床", pinyin: "chuáng", pinyinPlain: "chuang", tones: [2], translation: { en: "bed", mn: "ор" }, level: 2, lesson: 3, audio: "/audio/YCT2/017_床.wav" },
  { character: "房间", pinyin: "fáng jiān", pinyinPlain: "fang jian", tones: [2, 1], translation: { en: "room", mn: "өрөө" }, level: 2, lesson: 3, audio: "/audio/YCT2/018_房间.wav" },
  { character: "电视", pinyin: "diàn shì", pinyinPlain: "dian shi", tones: [4, 4], translation: { en: "TV", mn: "зурагт" }, level: 2, lesson: 3, audio: "/audio/YCT2/019_电视.wav" },
  { character: "桌子", pinyin: "zhuō zi", pinyinPlain: "zhuo zi", tones: [1, 0], translation: { en: "table", mn: "ширээ" }, level: 2, lesson: 3, audio: "/audio/YCT2/020_桌子.wav" },
  { character: "椅子", pinyin: "yǐ zi", pinyinPlain: "yi zi", tones: [3, 0], translation: { en: "chair", mn: "сандал" }, level: 2, lesson: 3, audio: "/audio/YCT2/021_椅子.wav" },
  { character: "铅笔", pinyin: "qiān bǐ", pinyinPlain: "qian bi", tones: [1, 3], translation: { en: "pencil", mn: "харандаа" }, level: 2, lesson: 3, audio: "/audio/YCT2/022_铅笔.wav" },
  { character: "书包", pinyin: "shū bāo", pinyinPlain: "shu bao", tones: [1, 1], translation: { en: "schoolbag", mn: "цүнх" }, level: 2, lesson: 3, audio: "/audio/YCT2/023_书包.wav" },
  { character: "里", pinyin: "lǐ", pinyinPlain: "li", tones: [3], translation: { en: "inside", mn: "дотор" }, level: 2, lesson: 3, audio: "/audio/YCT2/024_里.wav" },
  { character: "上", pinyin: "shàng", pinyinPlain: "shang", tones: [4], translation: { en: "on", mn: "дээр" }, level: 2, lesson: 3, audio: "/audio/YCT2/025_上.wav" },

  // Lesson 4 (9 words)
  { character: "红色", pinyin: "hóng sè", pinyinPlain: "hong se", tones: [2, 4], translation: { en: "red", mn: "улаан өнгө" }, level: 2, lesson: 4, audio: "/audio/YCT2/026_红色.wav" },
  { character: "黄色", pinyin: "huáng sè", pinyinPlain: "huang se", tones: [2, 4], translation: { en: "yellow", mn: "шар өнгө" }, level: 2, lesson: 4, audio: "/audio/YCT2/027_黄色.wav" },
  { character: "绿色", pinyin: "lǜ sè", pinyinPlain: "lü se", tones: [4, 4], translation: { en: "green", mn: "ногоон өнгө" }, level: 2, lesson: 4, audio: "/audio/YCT2/028_绿色.wav" },
  { character: "名字", pinyin: "míng zi", pinyinPlain: "ming zi", tones: [2, 0], translation: { en: "name", mn: "нэр" }, level: 2, lesson: 4, audio: "/audio/YCT2/029_名字.wav" },
  { character: "漂亮", pinyin: "piào liang", pinyinPlain: "piao liang", tones: [4, 0], translation: { en: "beautiful", mn: "хөөрхөн/сайхан" }, level: 2, lesson: 4, audio: "/audio/YCT2/030_漂亮.wav" },
  { character: "颜色", pinyin: "yán sè", pinyinPlain: "yan se", tones: [2, 4], translation: { en: "color", mn: "өнгө" }, level: 2, lesson: 4, audio: "/audio/YCT2/031_颜色.wav" },
  { character: "只", pinyin: "zhī", pinyinPlain: "zhi", tones: [1], translation: { en: "(measure word)", mn: "ширхэг" }, level: 2, lesson: 4, audio: "/audio/YCT2/032_只.wav" },
  { character: "两", pinyin: "liǎng", pinyinPlain: "liang", tones: [3], translation: { en: "two", mn: "хоёр" }, level: 2, lesson: 4, audio: "/audio/YCT2/033_两.wav" },
  { character: "本", pinyin: "běn", pinyinPlain: "ben", tones: [3], translation: { en: "(measure word)", mn: "дэвтэр/ном" }, level: 2, lesson: 4, audio: "/audio/YCT2/034_本.wav" },

  // Lesson 5 (7 words)
  { character: "包子", pinyin: "bāo zi", pinyinPlain: "bao zi", tones: [1, 0], translation: { en: "steamed bun", mn: "бууз" }, level: 2, lesson: 5, audio: "/audio/YCT2/035_包子.wav" },
  { character: "医生", pinyin: "yī shēng", pinyinPlain: "yi sheng", tones: [1, 1], translation: { en: "doctor", mn: "эмч" }, level: 2, lesson: 5, audio: "/audio/YCT2/036_医生.wav" },
  { character: "厨师", pinyin: "chú shī", pinyinPlain: "chu shi", tones: [2, 1], translation: { en: "chef", mn: "тогооч" }, level: 2, lesson: 5, audio: "/audio/YCT2/037_厨师.wav" },
  { character: "做饭", pinyin: "zuò fàn", pinyinPlain: "zuo fan", tones: [4, 4], translation: { en: "cook", mn: "хоол хийх" }, level: 2, lesson: 5, audio: "/audio/YCT2/038_做饭.wav" },
  { character: "好吃", pinyin: "hǎo chī", pinyinPlain: "hao chi", tones: [3, 1], translation: { en: "delicious", mn: "амттай" }, level: 2, lesson: 5, audio: "/audio/YCT2/039_好吃.wav" },
  { character: "会", pinyin: "huì", pinyinPlain: "hui", tones: [4], translation: { en: "can", mn: "чадах" }, level: 2, lesson: 5, audio: "/audio/YCT2/040_会.wav" },
  { character: "真", pinyin: "zhēn", pinyinPlain: "zhen", tones: [1], translation: { en: "really", mn: "үнэхээр" }, level: 2, lesson: 5, audio: "/audio/YCT2/041_真.wav" },

  // Lesson 6 (6 words)
  { character: "钱", pinyin: "qián", pinyinPlain: "qian", tones: [2], translation: { en: "money", mn: "мөнгө" }, level: 2, lesson: 6, audio: "/audio/YCT2/042_钱.wav" },
  { character: "茶", pinyin: "chá", pinyinPlain: "cha", tones: [2], translation: { en: "tea", mn: "цай" }, level: 2, lesson: 6, audio: "/audio/YCT2/043_茶.wav" },
  { character: "买", pinyin: "mǎi", pinyinPlain: "mai", tones: [3], translation: { en: "buy", mn: "худалдаж авах" }, level: 2, lesson: 6, audio: "/audio/YCT2/044_买.wav" },
  { character: "多少", pinyin: "duō shǎo", pinyinPlain: "duo shao", tones: [1, 3], translation: { en: "how much", mn: "хэд" }, level: 2, lesson: 6, audio: "/audio/YCT2/045_多少.wav" },
  { character: "块", pinyin: "kuài", pinyinPlain: "kuai", tones: [4], translation: { en: "(measure word)", mn: "юань/хувь" }, level: 2, lesson: 6, audio: "/audio/YCT2/046_块.wav" },
  { character: "杯", pinyin: "bēi", pinyinPlain: "bei", tones: [1], translation: { en: "(measure word)", mn: "аяга" }, level: 2, lesson: 6, audio: "/audio/YCT2/047_杯.wav" },

  // Lesson 7 (9 words)
  { character: "冷", pinyin: "lěng", pinyinPlain: "leng", tones: [3], translation: { en: "cold", mn: "хүйтэн" }, level: 2, lesson: 7, audio: "/audio/YCT2/048_冷.wav" },
  { character: "热", pinyin: "rè", pinyinPlain: "re", tones: [4], translation: { en: "hot", mn: "халуун" }, level: 2, lesson: 7, audio: "/audio/YCT2/049_热.wav" },
  { character: "天气", pinyin: "tiān qì", pinyinPlain: "tian qi", tones: [1, 4], translation: { en: "weather", mn: "цаг агаар" }, level: 2, lesson: 7, audio: "/audio/YCT2/050_天气.wav" },
  { character: "昨天", pinyin: "zuó tiān", pinyinPlain: "zuo tian", tones: [2, 1], translation: { en: "yesterday", mn: "өчигдөр" }, level: 2, lesson: 7, audio: "/audio/YCT2/051_昨天.wav" },
  { character: "好喝", pinyin: "hǎo hē", pinyinPlain: "hao he", tones: [3, 1], translation: { en: "good to drink", mn: "амттай" }, level: 2, lesson: 7, audio: "/audio/YCT2/052_好喝.wav" },
  { character: "怎么样", pinyin: "zěn me yàng", pinyinPlain: "zen me yang", tones: [3, 0, 4], translation: { en: "how", mn: "ямар" }, level: 2, lesson: 7, audio: "/audio/YCT2/053_怎么样.wav" },
  { character: "觉得", pinyin: "jué de", pinyinPlain: "jue de", tones: [2, 0], translation: { en: "feel", mn: "санагдах" }, level: 2, lesson: 7, audio: "/audio/YCT2/054_觉得.wav" },
  { character: "比", pinyin: "bǐ", pinyinPlain: "bi", tones: [3], translation: { en: "than", mn: "харьцуулах" }, level: 2, lesson: 7, audio: "/audio/YCT2/055_比.wav" },
  { character: "冰水", pinyin: "bīng shuǐ", pinyinPlain: "bing shui", tones: [1, 3], translation: { en: "ice water", mn: "мөстэй ус" }, level: 2, lesson: 7, audio: "/audio/YCT2/056_冰水.wav" },

  // Lesson 8 (6 words)
  { character: "弟弟", pinyin: "dì di", pinyinPlain: "di di", tones: [4, 0], translation: { en: "little brother", mn: "эрэгтэй дүү" }, level: 2, lesson: 8, audio: "/audio/YCT2/057_弟弟.wav" },
  { character: "妹妹", pinyin: "mèi mei", pinyinPlain: "mei mei", tones: [4, 0], translation: { en: "little sister", mn: "охин дүү" }, level: 2, lesson: 8, audio: "/audio/YCT2/058_妹妹.wav" },
  { character: "也", pinyin: "yě", pinyinPlain: "ye", tones: [3], translation: { en: "also", mn: "бас" }, level: 2, lesson: 8, audio: "/audio/YCT2/也.wav" },
  { character: "同学", pinyin: "tóng xué", pinyinPlain: "tong xue", tones: [2, 2], translation: { en: "classmate", mn: "ангийн анд" }, level: 2, lesson: 8, audio: "/audio/YCT2/059_同学.wav" },
  { character: "朋友", pinyin: "péng you", pinyinPlain: "peng you", tones: [2, 0], translation: { en: "friend", mn: "найз" }, level: 2, lesson: 8, audio: "/audio/YCT2/060_朋友.wav" },
  { character: "学生", pinyin: "xué shēng", pinyinPlain: "xue sheng", tones: [2, 1], translation: { en: "student", mn: "сурагч" }, level: 2, lesson: 8, audio: "/audio/YCT2/061_学生.wav" },
  { character: "也", pinyin: "yě", pinyinPlain: "ye", tones: [3], translation: { en: "also", mn: "бас/мөн" }, level: 2, lesson: 8, audio: "/audio/YCT2/也.wav" },

  // Lesson 9 (4 words)
  { character: "水果", pinyin: "shuǐ guǒ", pinyinPlain: "shui guo", tones: [3, 3], translation: { en: "fruit", mn: "жимс" }, level: 2, lesson: 9, audio: "/audio/YCT2/062_水果.wav" },
  { character: "香蕉", pinyin: "xiāng jiāo", pinyinPlain: "xiang jiao", tones: [1, 1], translation: { en: "banana", mn: "банан" }, level: 2, lesson: 9, audio: "/audio/YCT2/063_香蕉.wav" },
  { character: "熊猫", pinyin: "xióng māo", pinyinPlain: "xiong mao", tones: [2, 1], translation: { en: "panda", mn: "панда" }, level: 2, lesson: 9, audio: "/audio/YCT2/064_熊猫.wav" },
  { character: "画", pinyin: "huà", pinyinPlain: "hua", tones: [4], translation: { en: "draw", mn: "зурах" }, level: 2, lesson: 9, audio: "/audio/YCT2/065_画.wav" },
  { character: "了", pinyin: "le", pinyinPlain: "le", tones: [0], translation: { en: "particle", mn: "лаа/лээ" }, level: 2, lesson: 9, audio: "/audio/YCT2/了.wav" },

  // Lesson 10 (3 words)
  { character: "脚", pinyin: "jiǎo", pinyinPlain: "jiao", tones: [3], translation: { en: "foot", mn: "хөл" }, level: 2, lesson: 10, audio: "/audio/YCT2/066_脚.wav" },
  { character: "医院", pinyin: "yī yuàn", pinyinPlain: "yi yuan", tones: [1, 4], translation: { en: "hospital", mn: "эмнэлэг" }, level: 2, lesson: 10, audio: "/audio/YCT2/067_医院.wav" },
  { character: "疼", pinyin: "téng", pinyinPlain: "teng", tones: [2], translation: { en: "hurt", mn: "өвдөх" }, level: 2, lesson: 10, audio: "/audio/YCT2/068_疼.wav" },

  // Lesson 11 (10 words)
  { character: "零", pinyin: "líng", pinyinPlain: "ling", tones: [2], translation: { en: "zero", mn: "тэг" }, level: 2, lesson: 11, audio: "/audio/YCT2/069_零.wav" },
  { character: "学习", pinyin: "xué xí", pinyinPlain: "xue xí", tones: [2, 2], translation: { en: "study", mn: "суралцах" }, level: 2, lesson: 11, audio: "/audio/YCT2/070_学习.wav" },
  { character: "汉语", pinyin: "hàn yǔ", pinyinPlain: "han yu", tones: [4, 3], translation: { en: "Chinese", mn: "Хятад хэл" }, level: 2, lesson: 11, audio: "/audio/YCT2/071_汉语.wav" },
  { character: "玩", pinyin: "wán", pinyinPlain: "wan", tones: [2], translation: { en: "play", mn: "тоглох" }, level: 2, lesson: 11, audio: "/audio/YCT2/072_玩.wav" },
  { character: "分钟", pinyin: "fēn zhōng", pinyinPlain: "fen zhong", tones: [1, 1], translation: { en: "minute", mn: "минут" }, level: 2, lesson: 11, audio: "/audio/YCT2/073_分钟.wav" },
  { character: "来", pinyin: "lái", pinyinPlain: "lai", tones: [2], translation: { en: "come", mn: "ирэх" }, level: 2, lesson: 11, audio: "/audio/YCT2/074_来.wav" },
  { character: "年", pinyin: "nián", pinyinPlain: "nian", tones: [2], translation: { en: "year", mn: "жил" }, level: 2, lesson: 11, audio: "/audio/YCT2/075_年.wav" },
  { character: "用", pinyin: "yòng", pinyinPlain: "yong", tones: [4], translation: { en: "use", mn: "хэрэглэх" }, level: 2, lesson: 11, audio: "/audio/YCT2/076_用.wav" },
  { character: "打电话", pinyin: "dǎ diàn huà", pinyinPlain: "da dian hua", tones: [3, 4, 4], translation: { en: "make a call", mn: "утасдах" }, level: 2, lesson: 11, audio: "/audio/YCT2/077_打电话.wav" },
  { character: "以前", pinyin: "yǐ qián", pinyinPlain: "yi qian", tones: [3, 2], translation: { en: "before", mn: "өмнө" }, level: 2, lesson: 11, audio: "/audio/YCT2/078_以前.wav" },

  // ==========================================
  // YCT 3 (Followed user's provided list)
  // ==========================================

  // Lesson 1 (8 words)
  { character: "年级", pinyin: "nián jí", pinyinPlain: "nian ji", tones: [2, 2], translation: { en: "grade", mn: "анги" }, level: 3, lesson: 1, audio: "/audio/YCT3/001_年级.wav" },
  { character: "课", pinyin: "kè", pinyinPlain: "ke", tones: [4], translation: { en: "lesson", mn: "хичээл" }, level: 3, lesson: 1, audio: "/audio/YCT3/002_课.wav" },
  { character: "班", pinyin: "bān", pinyinPlain: "ban", tones: [1], translation: { en: "class", mn: "бүлэг" }, level: 3, lesson: 1, audio: "/audio/YCT3/003_班.wav" },
  { character: "新", pinyin: "xīn", pinyinPlain: "xin", tones: [1], translation: { en: "new", mn: "шинэ" }, level: 3, lesson: 1, audio: "/audio/YCT3/004_新.wav" },
  { character: "男", pinyin: "nán", pinyinPlain: "nan", tones: [2], translation: { en: "male", mn: "эрэгтэй" }, level: 3, lesson: 1, audio: "/audio/YCT3/005_男.wav" },
  { character: "女", pinyin: "nǚ", pinyinPlain: "nü", tones: [3], translation: { en: "female", mn: "эмэгтэй" }, level: 3, lesson: 1, audio: "/audio/YCT3/006_女.wav" },
  { character: "都", pinyin: "dōu", pinyinPlain: "dou", tones: [1], translation: { en: "all", mn: "бүгд" }, level: 3, lesson: 1, audio: "/audio/YCT3/007_都.wav" },
  { character: "还", pinyin: "hái", pinyinPlain: "hai", tones: [2], translation: { en: "also", mn: "бас/хэвээр" }, level: 3, lesson: 1, audio: "/audio/YCT3/008_还.wav" },

  // Lesson 2 (8 words)
  { character: "运动", pinyin: "yùn dòng", pinyinPlain: "yun dong", tones: [4, 4], translation: { en: "sport", mn: "спорт" }, level: 3, lesson: 2, audio: "/audio/YCT3/009_运动.wav" },
  { character: "游泳", pinyin: "yóu yǒng", pinyinPlain: "you yong", tones: [2, 3], translation: { en: "swim", mn: "сэлэх" }, level: 3, lesson: 2, audio: "/audio/YCT3/010_游泳.wav" },
  { character: "打篮球", pinyin: "dǎ lán qiú", pinyinPlain: "da lan qiu", tones: [3, 2, 2], translation: { en: "play basketball", mn: "сагс тоглох" }, level: 3, lesson: 2, audio: "/audio/YCT3/011_打篮球.wav" },
  { character: "踢足球", pinyin: "tī zú qiú", pinyinPlain: "ti zu qiu", tones: [1, 2, 2], translation: { en: "play football", mn: "хөл бөмбөг тоглох" }, level: 3, lesson: 2, audio: "/audio/YCT3/012_踢足球.wav" },
  { character: "一起", pinyin: "yì qǐ", pinyinPlain: "yi qi", tones: [4, 3], translation: { en: "together", mn: "хамт" }, level: 3, lesson: 2, audio: "/audio/YCT3/013_一起.wav" },
  { character: "欢迎", pinyin: "huān yíng", pinyinPlain: "huan ying", tones: [1, 2], translation: { en: "welcome", mn: "тавтай морил" }, level: 3, lesson: 2, audio: "/audio/YCT3/014_欢迎.wav" },
  { character: "太", pinyin: "tài", pinyinPlain: "tai", tones: [4], translation: { en: "too", mn: "хэтэрхий" }, level: 3, lesson: 2, audio: "/audio/YCT3/015_太.wav" },
  { character: "每", pinyin: "měi", pinyinPlain: "mei", tones: [3], translation: { en: "every", mn: "бүр" }, level: 3, lesson: 2, audio: "/audio/YCT3/016_每.wav" },

  // Lesson 3 (8 words)
  { character: "太阳", pinyin: "tài yáng", pinyinPlain: "tai yang", tones: [4, 2], translation: { en: "sun", mn: "наран" }, level: 3, lesson: 3, audio: "/audio/YCT3/017_太阳.wav" },
  { character: "月亮", pinyin: "yuè liang", pinyinPlain: "yue liang", tones: [4, 0], translation: { en: "moon", mn: "саран" }, level: 3, lesson: 3, audio: "/audio/YCT3/018_月亮.wav" },
  { character: "跑步", pinyin: "pǎo bù", pinyinPlain: "pao bu", tones: [3, 4], translation: { en: "run", mn: "гүйх" }, level: 3, lesson: 3, audio: "/audio/YCT3/019_跑步.wav" },
  { character: "爷爷", pinyin: "yé ye", pinyinPlain: "ye ye", tones: [2, 0], translation: { en: "grandfather", mn: "өвөө" }, level: 3, lesson: 3, audio: "/audio/YCT3/020_爷爷.wav" },
  { character: "奶奶", pinyin: "nǎi nai", pinyinPlain: "nai nai", tones: [3, 0], translation: { en: "grandmother", mn: "эмээ" }, level: 3, lesson: 3, audio: "/audio/YCT3/021_奶奶.wav" },
  { character: "唱歌", pinyin: "chàng gē", pinyinPlain: "chang ge", tones: [4, 1], translation: { en: "sing", mn: "дуулах" }, level: 3, lesson: 3, audio: "/audio/YCT3/022_唱歌.wav" },
  { character: "跳舞", pinyin: "tiào wǔ", pinyinPlain: "tiao wu", tones: [4, 3], translation: { en: "dance", mn: "бүжиглэх" }, level: 3, lesson: 3, audio: "/audio/YCT3/023_跳舞.wav" },
  { character: "让", pinyin: "ràng", pinyinPlain: "rang", tones: [4], translation: { en: "let", mn: "зөвшөөрөх" }, level: 3, lesson: 3, audio: "/audio/YCT3/024_让.wav" },

  // Lesson 4 (5 words)
  { character: "找", pinyin: "zhǎo", pinyinPlain: "zhao", tones: [3], translation: { en: "look for", mn: "хайх" }, level: 3, lesson: 4, audio: "/audio/YCT3/025_找.wav" },
  { character: "问题", pinyin: "wèn tí", pinyinPlain: "wen ti", tones: [4, 2], translation: { en: "question", mn: "асуулт" }, level: 3, lesson: 4, audio: "/audio/YCT3/026_问题.wav" },
  { character: "您", pinyin: "nín", pinyinPlain: "nin", tones: [2], translation: { en: "you (polite)", mn: "та" }, level: 3, lesson: 4, audio: "/audio/YCT3/您.wav" },
  { character: "问", pinyin: "wèn", pinyinPlain: "wen", tones: [4], translation: { en: "ask", mn: "асуух" }, level: 3, lesson: 4, audio: "/audio/YCT3/027_问.wav" },
  { character: "回", pinyin: "huí", pinyinPlain: "hui", tones: [2], translation: { en: "go back", mn: "буцах" }, level: 3, lesson: 4, audio: "/audio/YCT3/028_回.wav" },
  { character: "您", pinyin: "nín", pinyinPlain: "nin", tones: [2], translation: { en: "you (polite)", mn: "Та (хүндэтгэл)" }, level: 3, lesson: 4, audio: "/audio/YCT3/您.wav" },
  { character: "喂", pinyin: "wèi", pinyinPlain: "wei", tones: [4], translation: { en: "hello (phone)", mn: "байна уу" }, level: 3, lesson: 4, audio: "/audio/YCT3/喂.wav" },

  // Lesson 5 (8 words)
  { character: "面条儿", pinyin: "miàn tiáo er", pinyinPlain: "mian tiao er", tones: [4, 2, 0], translation: { en: "noodles", mn: "гоймон" }, level: 3, lesson: 5, audio: "/audio/YCT3/029_面条儿.wav" },
  { character: "饺子", pinyin: "jiǎo zi", pinyinPlain: "jiao zi", tones: [3, 0], translation: { en: "dumplings", mn: "банш" }, level: 3, lesson: 5, audio: "/audio/YCT3/030_饺子.wav" },
  { character: "饿", pinyin: "è", pinyinPlain: "e", tones: [4], translation: { en: "hungry", mn: "өлсөх" }, level: 3, lesson: 5, audio: "/audio/YCT3/031_饿.wav" },
  { character: "饱", pinyin: "bǎo", pinyinPlain: "bao", tones: [3], translation: { en: "full", mn: "цадах" }, level: 3, lesson: 5, audio: "/audio/YCT3/032_饱.wav" },
  { character: "想", pinyin: "xiǎng", pinyinPlain: "xiang", tones: [3], translation: { en: "think", mn: "бодох" }, level: 3, lesson: 5, audio: "/audio/YCT3/033_想.wav" },
  { character: "最", pinyin: "zuì", pinyinPlain: "zui", tones: [4], translation: { en: "most", mn: "хамгийн" }, level: 3, lesson: 5, audio: "/audio/YCT3/034_最.wav" },
  { character: "给", pinyin: "gěi", pinyinPlain: "gei", tones: [3], translation: { en: "give", mn: "өгөх" }, level: 3, lesson: 5, audio: "/audio/YCT3/给.wav" },
  { character: "再", pinyin: "zài", pinyinPlain: "zai", tones: [4], translation: { en: "again", mn: "дахин" }, level: 3, lesson: 5, audio: "/audio/YCT3/035_再.wav" },

  // Lesson 6 (6 words)
  { character: "衣服", pinyin: "yī fu", pinyinPlain: "yi fu", tones: [1, 0], translation: { en: "clothes", mn: "хувцас" }, level: 3, lesson: 6, audio: "/audio/YCT3/036_衣服.wav" },
  { character: "帮助", pinyin: "bāng zhù", pinyinPlain: "bang zhu", tones: [1, 4], translation: { en: "help", mn: "туслах" }, level: 3, lesson: 6, audio: "/audio/YCT3/037_帮助.wav" },
  { character: "穿", pinyin: "chuān", pinyinPlain: "chuan", tones: [1], translation: { en: "wear", mn: "өмсөх" }, level: 3, lesson: 6, audio: "/audio/YCT3/038_穿.wav" },
  { character: "鞋", pinyin: "xié", pinyinPlain: "xie", tones: [2], translation: { en: "shoes", mn: "гутлын" }, level: 3, lesson: 6, audio: "/audio/YCT3/039_鞋.wav" },
  { character: "自己", pinyin: "zì jǐ", pinyinPlain: "zi ji", tones: [4, 3], translation: { en: "oneself", mn: "өөрийгөө" }, level: 3, lesson: 6, audio: "/audio/YCT3/040_自己.wav" },
  { character: "能", pinyin: "néng", pinyinPlain: "neng", tones: [2], translation: { en: "can", mn: "боломжтой" }, level: 3, lesson: 6, audio: "/audio/YCT3/041_能.wav" },

  // Lesson 7 (7 words)
  { character: "生日", pinyin: "shēng rì", pinyinPlain: "sheng ri", tones: [1, 4], translation: { en: "birthday", mn: "төрсөн өдөр" }, level: 3, lesson: 7, audio: "/audio/YCT3/042_生日.wav" },
  { character: "礼物", pinyin: "lǐ wù", pinyinPlain: "li wu", tones: [3, 4], translation: { en: "gift", mn: "бэлэг" }, level: 3, lesson: 7, audio: "/audio/YCT3/043_礼物.wav" },
  { character: "花", pinyin: "huā", pinyinPlain: "hua", tones: [1], translation: { en: "flower", mn: "цэцэг" }, level: 3, lesson: 7, audio: "/audio/YCT3/044_花.wav" },
  { character: "蛋糕", pinyin: "dàn gāo", pinyinPlain: "dan gao", tones: [4, 1], translation: { en: "cake", mn: "бялуу" }, level: 3, lesson: 7, audio: "/audio/YCT3/045_蛋糕.wav" },
  { character: "快乐", pinyin: "kuài lè", pinyinPlain: "kuai le", tones: [4, 4], translation: { en: "happy", mn: "баяртай" }, level: 3, lesson: 7, audio: "/audio/YCT3/046_快乐.wav" },
  { character: "送", pinyin: "sòng", pinyinPlain: "song", tones: [4], translation: { en: "give", mn: "өгөх" }, level: 3, lesson: 7, audio: "/audio/YCT3/047_送.wav" },
  { character: "但是", pinyin: "dàn shì", pinyinPlain: "dan shi", tones: [4, 4], translation: { en: "but", mn: "гэхдээ" }, level: 3, lesson: 7, audio: "/audio/YCT3/048_但是.wav" },
  { character: "吧", pinyin: "ba", pinyinPlain: "ba", tones: [0], translation: { en: "particle", mn: "уу/юу/даа" }, level: 3, lesson: 7, audio: "/audio/YCT3/吧.wav" },
  { character: "给", pinyin: "gěi", pinyinPlain: "gei", tones: [3], translation: { en: "give", mn: "өгөх" }, level: 3, lesson: 7, audio: "/audio/YCT3/给.wav" },

  // Lesson 8 (7 words)
  { character: "下雪", pinyin: "xià xuě", pinyinPlain: "xia xue", tones: [4, 3], translation: { en: "snow", mn: "цас орох" }, level: 3, lesson: 8, audio: "/audio/YCT3/049_下雪.wav" },
  { character: "听", pinyin: "tīng", pinyinPlain: "ting", tones: [1], translation: { en: "listen", mn: "сонсох" }, level: 3, lesson: 8, audio: "/audio/YCT3/056_听.wav" },
  { character: "作业", pinyin: "zuò yè", pinyinPlain: "zuo ye", tones: [4, 4], translation: { en: "homework", mn: "даалгавар" }, level: 3, lesson: 8, audio: "/audio/YCT3/057_作业.wav" },
  { character: "外面", pinyin: "wài miàn", pinyinPlain: "wai mian", tones: [4, 4], translation: { en: "outside", mn: "гадаа" }, level: 3, lesson: 8, audio: "/audio/YCT3/058_外面.wav" },
  { character: "下雨", pinyin: "xià yǔ", pinyinPlain: "xia yu", tones: [4, 3], translation: { en: "rain", mn: "бороо орох" }, level: 3, lesson: 8, audio: "/audio/YCT3/059_下雨.wav" },
  { character: "出", pinyin: "chū", pinyinPlain: "chu", tones: [1], translation: { en: "go out", mn: "гарах" }, level: 3, lesson: 8, audio: "/audio/YCT3/060_出.wav" },
  { character: "别", pinyin: "bié", pinyinPlain: "bie", tones: [2], translation: { en: "don’t", mn: "битгий" }, level: 3, lesson: 8, audio: "/audio/YCT3/061_别.wav" },

  // Lesson 9 (4 words)
  { character: "哭", pinyin: "kū", pinyinPlain: "ku", tones: [1], translation: { en: "cry", mn: "уйлах" }, level: 3, lesson: 9, audio: "/audio/YCT3/062_哭.wav" },
  { character: "笑", pinyin: "xiào", pinyinPlain: "xiao", tones: [4], translation: { en: "smile", mn: "инээх" }, level: 3, lesson: 9, audio: "/audio/YCT3/063_笑.wav" },
  { character: "东西", pinyin: "dōng xi", pinyinPlain: "dong xi", tones: [1, 0], translation: { en: "thing", mn: "юм" }, level: 3, lesson: 9, audio: "/audio/YCT3/064_东西.wav" },
  { character: "丢", pinyin: "diū", pinyinPlain: "diu", tones: [1], translation: { en: "lose", mn: "гээх" }, level: 3, lesson: 9, audio: "/audio/YCT3/065_丢.wav" },
  { character: "到", pinyin: "dào", pinyinPlain: "dao", tones: [4], translation: { en: "arrive/to", mn: "хүрэх/дээр" }, level: 3, lesson: 9, audio: "/audio/YCT3/到.wav" },

  // Lesson 10 (7 words)
  { character: "老虎", pinyin: "lǎo hǔ", pinyinPlain: "lao hu", tones: [3, 3], translation: { en: "tiger", mn: "бар" }, level: 3, lesson: 10, audio: "/audio/YCT3/066_老虎.wav" },
  { character: "胖", pinyin: "pàng", pinyinPlain: "pang", tones: [4], translation: { en: "fat", mn: "тарган" }, level: 3, lesson: 10, audio: "/audio/YCT3/067_胖.wav" },
  { character: "瘦", pinyin: "shòu", pinyinPlain: "shou", tones: [4], translation: { en: "thin", mn: "туранхай" }, level: 3, lesson: 10, audio: "/audio/YCT3/068_瘦.wav" },
  { character: "些", pinyin: "xiē", pinyinPlain: "xie", tones: [1], translation: { en: "some", mn: "зарим" }, level: 3, lesson: 10, audio: "/audio/YCT3/些.wav" },
  { character: "第一", pinyin: "dì yī", pinyinPlain: "di yi", tones: [4, 1], translation: { en: "first", mn: "нэгдүгээр" }, level: 3, lesson: 10, audio: "/audio/YCT3/064_第一.wav" },
  { character: "快", pinyin: "kuài", pinyinPlain: "kuai", tones: [4], translation: { en: "fast", mn: "хурдан" }, level: 3, lesson: 10, audio: "/audio/YCT3/065_快.wav" },
  { character: "知道", pinyin: "zhī dào", pinyinPlain: "zhi dao", tones: [1, 4], translation: { en: "know", mn: "мэдэх" }, level: 3, lesson: 10, audio: "/audio/YCT3/070_知道.wav" },
  { character: "些", pinyin: "xiē", pinyinPlain: "xie", tones: [1], translation: { en: "some", mn: "зарим/хэдэн" }, level: 3, lesson: 10, audio: "/audio/YCT3/些.wav" },
  { character: "得", pinyin: "de", pinyinPlain: "de", tones: [0], translation: { en: "particle", mn: "төлөв байдлын нөхцөл" }, level: 3, lesson: 10, audio: "/audio/YCT3/得.wav" },

  // Lesson 11 (4 words)
  { character: "水果", pinyin: "shuǐ guǒ", pinyinPlain: "shui guo", tones: [3, 3], translation: { en: "fruit", mn: "жимс" }, level: 3, lesson: 11, audio: "/audio/YCT3/067_水果.wav" },
  { character: "糖", pinyin: "táng", pinyinPlain: "tang", tones: [2], translation: { en: "sugar", mn: "чихэр" }, level: 3, lesson: 11, audio: "/audio/YCT3/068_糖.wav" },
  { character: "西瓜", pinyin: "xī guā", pinyinPlain: "xi gua", tones: [1, 1], translation: { en: "watermelon", mn: "тарвас" }, level: 3, lesson: 11, audio: "/audio/YCT3/069_西瓜.wav" },
  { character: "鸡蛋", pinyin: "jī dàn", pinyinPlain: "ji dan", tones: [1, 4], translation: { en: "egg", mn: "өндөг" }, level: 3, lesson: 11, audio: "/audio/YCT3/extra_鸡蛋.wav" },
  { character: "把", pinyin: "bǎ", pinyinPlain: "ba", tones: [3], translation: { en: "particle", mn: "тусгагдахүүн заах нөхцөл" }, level: 3, lesson: 11, audio: "/audio/YCT3/把.wav" },

  // ==========================================
  // YCT 4 (Followed user's provided list)
  // ==========================================

  // Lesson 1 (7 words)
  { character: "手机", pinyin: "shǒu jī", pinyinPlain: "shou ji", tones: [3, 1], translation: { en: "mobile phone", mn: "гар утас" }, level: 4, lesson: 1, audio: "/audio/YCT4/001_手机.wav" },
  { character: "电脑", pinyin: "diàn nǎo", pinyinPlain: "dian nao", tones: [4, 3], translation: { en: "computer", mn: "компьютер" }, level: 4, lesson: 1, audio: "/audio/YCT4/002_电脑.wav" },
  { character: "零", pinyin: "líng", pinyinPlain: "ling", tones: [2], translation: { en: "zero", mn: "тэг" }, level: 4, lesson: 1, audio: "/audio/YCT4/003_零.wav" },
  { character: "上网", pinyin: "shàng wǎng", pinyinPlain: "shang wang", tones: [4, 3], translation: { en: "go online", mn: "интернэт орох" }, level: 4, lesson: 1, audio: "/audio/YCT4/004_上网.wav" },
  { character: "百", pinyin: "bǎi", pinyinPlain: "bai", tones: [3], translation: { en: "hundred", mn: "зуу" }, level: 4, lesson: 1, audio: "/audio/YCT4/005_百.wav" },
  { character: "千", pinyin: "qiān", pinyinPlain: "qian", tones: [1], translation: { en: "thousand", mn: "мянга" }, level: 4, lesson: 1, audio: "/audio/YCT4/006_千.wav" },
  { character: "少", pinyin: "shǎo", pinyinPlain: "shao", tones: [3], translation: { en: "less", mn: "бага" }, level: 4, lesson: 1, audio: "/audio/YCT4/007_少.wav" },

  // Lesson 2 (7 words)
  { character: "时间", pinyin: "shí jiān", pinyinPlain: "shi jian", tones: [2, 1], translation: { en: "time", mn: "цаг хугацаа" }, level: 4, lesson: 2, audio: "/audio/YCT4/008_时间.wav" },
  { character: "半", pinyin: "bàn", pinyinPlain: "ban", tones: [4], translation: { en: "half", mn: "хагас" }, level: 4, lesson: 2, audio: "/audio/YCT4/009_半.wav" },
  { character: "读", pinyin: "dú", pinyinPlain: "du", tones: [2], translation: { en: "read", mn: "унших" }, level: 4, lesson: 2, audio: "/audio/YCT4/010_读.wav" },
  { character: "难", pinyin: "nán", pinyinPlain: "nan", tones: [2], translation: { en: "difficult", mn: "хэцүү" }, level: 4, lesson: 2, audio: "/audio/YCT4/011_难.wav" },
  { character: "小时", pinyin: "xiǎo shí", pinyinPlain: "xiao shi", tones: [3, 2], translation: { en: "hour", mn: "цаг" }, level: 4, lesson: 2, audio: "/audio/YCT4/012_小时.wav" },
  { character: "题", pinyin: "tí", pinyinPlain: "ti", tones: [2], translation: { en: "question", mn: "даалгавар/асуулт" }, level: 4, lesson: 2, audio: "/audio/YCT4/013_题.wav" },
  { character: "懂", pinyin: "dǒng", pinyinPlain: "dong", tones: [3], translation: { en: "understand", mn: "ойлгох" }, level: 4, lesson: 2, audio: "/audio/YCT4/014_懂.wav" },

  // Lesson 3 (8 words)
  { character: "开", pinyin: "kāi", pinyinPlain: "kai", tones: [1], translation: { en: "open", mn: "нээх/онгойлгох" }, level: 4, lesson: 3, audio: "/audio/YCT4/015_开.wav" },
  { character: "关", pinyin: "guān", pinyinPlain: "guan", tones: [1], translation: { en: "close", mn: "хаах" }, level: 4, lesson: 3, audio: "/audio/YCT4/016_关.wav" },
  { character: "门", pinyin: "mén", pinyinPlain: "men", tones: [2], translation: { en: "door", mn: "хаалга" }, level: 4, lesson: 3, audio: "/audio/YCT4/017_门.wav" },
  { character: "杯子", pinyin: "bēi zi", pinyinPlain: "bei zi", tones: [1, 0], translation: { en: "cup", mn: "аяга" }, level: 4, lesson: 3, audio: "/audio/YCT4/018_杯子.wav" },
  { character: "中午", pinyin: "zhōng wǔ", pinyinPlain: "zhong wu", tones: [1, 3], translation: { en: "noon", mn: "үд дунд" }, level: 4, lesson: 3, audio: "/audio/YCT4/019_中午.wav" },
  { character: "卖", pinyin: "mài", pinyinPlain: "mai", tones: [4], translation: { en: "sell", mn: "худалдах" }, level: 4, lesson: 3, audio: "/audio/YCT4/020_卖.wav" },
  { character: "完", pinyin: "wán", pinyinPlain: "wan", tones: [2], translation: { en: "finish", mn: "дуусах" }, level: 4, lesson: 3, audio: "/audio/YCT4/021_完.wav" },
  { character: "就", pinyin: "jiù", pinyinPlain: "jiu", tones: [4], translation: { en: "then", mn: "дараа нь/тэгээд" }, level: 4, lesson: 3, audio: "/audio/YCT4/022_就.wav" },

  // Lesson 4 (8 words)
  { character: "身体", pinyin: "shēn tǐ", pinyinPlain: "shen ti", tones: [1, 3], translation: { en: "body", mn: "бие" }, level: 4, lesson: 4, audio: "/audio/YCT4/023_身体.wav" },
  { character: "舒服", pinyin: "shū fu", pinyinPlain: "shu fu", tones: [1, 0], translation: { en: "comfortable", mn: "ая тухтай" }, level: 4, lesson: 4, audio: "/audio/YCT4/024_舒服.wav" },
  { character: "生病", pinyin: "shēng bìng", pinyinPlain: "sheng bing", tones: [1, 4], translation: { en: "be sick", mn: "өвдөх" }, level: 4, lesson: 4, audio: "/audio/YCT4/025_生病.wav" },
  { character: "感冒", pinyin: "gǎn mào", pinyinPlain: "gan mao", tones: [3, 4], translation: { en: "have a cold", mn: "ханиад хүрэх" }, level: 4, lesson: 4, audio: "/audio/YCT4/026_感冒.wav" },
  { character: "休息", pinyin: "xiū xi", pinyinPlain: "xiu xi", tones: [1, 0], translation: { en: "rest", mn: "амрах" }, level: 4, lesson: 4, audio: "/audio/YCT4/027_休息.wav" },
  { character: "疼", pinyin: "téng", pinyinPlain: "teng", tones: [2], translation: { en: "hurt", mn: "өвдөх" }, level: 4, lesson: 4, audio: "/audio/YCT4/028_疼.wav" },
  { character: "药", pinyin: "yào", pinyinPlain: "yao", tones: [4], translation: { en: "medicine", mn: "эм" }, level: 4, lesson: 4, audio: "/audio/YCT4/029_药.wav" },
  { character: "一点儿", pinyin: "yì diǎn er", pinyinPlain: "yi dian er", tones: [4, 3, 0], translation: { en: "a little", mn: "жаахан" }, level: 4, lesson: 4, audio: "/audio/YCT4/030_一点儿.wav" },

  // Lesson 5 (4 words)
  { character: "果汁", pinyin: "guǒ zhī", pinyinPlain: "guo zhi", tones: [3, 1], translation: { en: "juice", mn: "жимсний шүүс" }, level: 4, lesson: 5, audio: "/audio/YCT4/031_果汁.wav" },
  { character: "鱼", pinyin: "yú", pinyinPlain: "yu", tones: [2], translation: { en: "fish", mn: "загас" }, level: 4, lesson: 5, audio: "/audio/YCT4/032_鱼.wav" },
  { character: "菜", pinyin: "cài", pinyinPlain: "cai", tones: [4], translation: { en: "dish", mn: "хоол/ногоо" }, level: 4, lesson: 5, audio: "/audio/YCT4/033_菜.wav" },
  { character: "洗澡", pinyin: "xǐ zǎo", pinyinPlain: "xi zao", tones: [3, 3], translation: { en: "take a shower", mn: "усанд орох" }, level: 4, lesson: 5, audio: "/audio/YCT4/034_洗澡.wav" },

  // Lesson 6 (8 words)
  { character: "进", pinyin: "jìn", pinyinPlain: "jin", tones: [4], translation: { en: "come in", mn: "орох" }, level: 4, lesson: 6, audio: "/audio/YCT4/035_进.wav" },
  { character: "它", pinyin: "tā", pinyinPlain: "ta", tones: [1], translation: { en: "it", mn: "тэр" }, level: 4, lesson: 6, audio: "/audio/YCT4/036_它.wav" },
  { character: "前", pinyin: "qián", pinyinPlain: "qian", tones: [2], translation: { en: "front", mn: "өмнө" }, level: 4, lesson: 6, audio: "/audio/YCT4/037_前.wav" },
  { character: "后", pinyin: "hòu", pinyinPlain: "hou", tones: [4], translation: { en: "behind", mn: "ард" }, level: 4, lesson: 6, audio: "/audio/YCT4/038_后.wav" },
  { character: "左", pinyin: "zuǒ", pinyinPlain: "zuo", tones: [3], translation: { en: "left", mn: "зүүн" }, level: 4, lesson: 6, audio: "/audio/YCT4/039_左.wav" },
  { character: "右", pinyin: "yòu", pinyinPlain: "you", tones: [4], translation: { en: "right", mn: "баруун" }, level: 4, lesson: 6, audio: "/audio/YCT4/040_右.wav" },
  { character: "教室", pinyin: "jiào shì", pinyinPlain: "jiao shi", tones: [4, 4], translation: { en: "classroom", mn: "анги" }, level: 4, lesson: 6, audio: "/audio/YCT4/041_教室.wav" },
  { character: "走", pinyin: "zǒu", pinyinPlain: "zou", tones: [3], translation: { en: "walk", mn: "явах/алхах" }, level: 4, lesson: 6, audio: "/audio/YCT4/042_走.wav" },
  { character: "过", pinyin: "guò", pinyinPlain: "guo", tones: [0], translation: { en: "ever/past", mn: "өнгөрөх/үзсэн (туршлага)" }, level: 4, lesson: 6, audio: "/audio/YCT4/过.wav" },

  // Lesson 7 (10 words)
  { character: "公共汽车", pinyin: "gōng gòng qì chē", pinyinPlain: "gong gong qi che", tones: [1, 4, 4, 1], translation: { en: "bus", mn: "автобус" }, level: 4, lesson: 7, audio: "/audio/YCT4/043_公共汽车.wav" },
  { character: "动物园", pinyin: "dòng wù yuán", pinyinPlain: "dong wu yuan", tones: [4, 4, 2], translation: { en: "zoo", mn: "амьтны хүрээлэн" }, level: 4, lesson: 7, audio: "/audio/YCT4/044_动物园.wav" },
  { character: "车站", pinyin: "chē zhàn", pinyinPlain: "che zhan", tones: [1, 4], translation: { en: "station", mn: "буудал" }, level: 4, lesson: 7, audio: "/audio/YCT4/045_车站.wav" },
  { character: "开", pinyin: "kāi", pinyinPlain: "kai", tones: [1], translation: { en: "drive", mn: "машин барих" }, level: 4, lesson: 7, audio: "/audio/YCT4/046_开.wav" },
  { character: "对", pinyin: "duì", pinyinPlain: "dui", tones: [4], translation: { en: "right", mn: "зөв" }, level: 4, lesson: 7, audio: "/audio/YCT4/047_对.wav" },
  { character: "路", pinyin: "lù", pinyinPlain: "lu", tones: [4], translation: { en: "road", mn: "зам" }, level: 4, lesson: 7, audio: "/audio/YCT4/048_路.wav" },
  { character: "远", pinyin: "yuǎn", pinyinPlain: "yuan", tones: [3], translation: { en: "far", mn: "хол" }, level: 4, lesson: 7, audio: "/audio/YCT4/049_远.wav" },
  { character: "近", pinyin: "jìn", pinyinPlain: "jin", tones: [4], translation: { en: "near", mn: "ойрхон" }, level: 4, lesson: 7, audio: "/audio/YCT4/050_近.wav" },
  { character: "旁边", pinyin: "páng biān", pinyinPlain: "pang bian", tones: [2, 1], translation: { en: "beside", mn: "хажууд" }, level: 4, lesson: 7, audio: "/audio/YCT4/051_旁边.wav" },
  { character: "条", pinyin: "tiáo", pinyinPlain: "tiao", tones: [2], translation: { en: "measure word", mn: "ширхэг" }, level: 4, lesson: 7, audio: "/audio/YCT4/052_条.wav" },

  // Lesson 8 (6 words)
  { character: "雨伞", pinyin: "yǔ sǎn", pinyinPlain: "yu san", tones: [3, 3], translation: { en: "umbrella", mn: "шүхэр" }, level: 4, lesson: 8, audio: "/audio/YCT4/053_雨伞.wav" },
  { character: "蓝", pinyin: "lán", pinyinPlain: "lan", tones: [2], translation: { en: "blue", mn: "цэнхэр" }, level: 4, lesson: 8, audio: "/audio/YCT4/054_蓝.wav" },
  { character: "拿", pinyin: "ná", pinyinPlain: "na", tones: [2], translation: { en: "take", mn: "авах" }, level: 4, lesson: 8, audio: "/audio/YCT4/拿.wav" },
  { character: "坏", pinyin: "huài", pinyinPlain: "huai", tones: [4], translation: { en: "bad", mn: "муу/эвдэрсэн" }, level: 4, lesson: 8, audio: "/audio/YCT4/055_坏.wav" },
  { character: "慢", pinyin: "màn", pinyinPlain: "man", tones: [4], translation: { en: "slow", mn: "удаан" }, level: 4, lesson: 8, audio: "/audio/YCT4/056_慢.wav" },
  { character: "迟到", pinyin: "chí dào", pinyinPlain: "chi dao", tones: [2, 4], translation: { en: "be late", mn: "хоцрох" }, level: 4, lesson: 8, audio: "/audio/YCT4/057_迟到.wav" },
  { character: "拿", pinyin: "ná", pinyinPlain: "na", tones: [2], translation: { en: "take/hold", mn: "авах/барих" }, level: 4, lesson: 8, audio: "/audio/YCT4/拿.wav" },

  // Lesson 9 (5 words)
  { character: "飞机", pinyin: "fēi jī", pinyinPlain: "fei ji", tones: [1, 1], translation: { en: "plane", mn: "онгоц" }, level: 4, lesson: 9, audio: "/audio/YCT4/058_飞机.wav" },
  { character: "累", pinyin: "lèi", pinyinPlain: "lei", tones: [4], translation: { en: "tired", mn: "ядрах" }, level: 4, lesson: 9, audio: "/audio/YCT4/059_累.wav" },
  { character: "去年", pinyin: "qù nián", pinyinPlain: "qu nian", tones: [4, 2], translation: { en: "last year", mn: "өнгөрсөн жил" }, level: 4, lesson: 9, audio: "/audio/YCT4/060_去年.wav" },
  { character: "时候", pinyin: "shí hou", pinyinPlain: "shi hou", tones: [2, 0], translation: { en: "time", mn: "цаг хугацаа" }, level: 4, lesson: 9, audio: "/audio/YCT4/061_时候.wav" },
  { character: "次", pinyin: "cì", pinyinPlain: "ci", tones: [4], translation: { en: "time", mn: "удаа" }, level: 4, lesson: 9, audio: "/audio/YCT4/062_次.wav" },

  // Lesson 10 (7 words)
  { character: "电影", pinyin: "diàn yǐng", pinyinPlain: "dian ying", tones: [4, 3], translation: { en: "movie", mn: "кино" }, level: 4, lesson: 10, audio: "/audio/YCT4/063_电影.wav" },
  { character: "为什么", pinyin: "wèi shén me", pinyinPlain: "wei shen me", tones: [4, 2, 0], translation: { en: "why", mn: "яагаад" }, level: 4, lesson: 10, audio: "/audio/YCT4/064_为什么.wav" },
  { character: "因为", pinyin: "yīn wèi", pinyinPlain: "yin wei", tones: [1, 4], translation: { en: "because", mn: "яагаад гэвэл" }, level: 4, lesson: 10, audio: "/audio/YCT4/因为.wav" },
  { character: "所以", pinyin: "suǒ yǐ", pinyinPlain: "suo yi", tones: [3, 3], translation: { en: "so", mn: "тэгээд" }, level: 4, lesson: 10, audio: "/audio/YCT4/所以.wav" },
  { character: "忙", pinyin: "máng", pinyinPlain: "mang", tones: [2], translation: { en: "busy", mn: "завгүй" }, level: 4, lesson: 10, audio: "/audio/YCT4/065_忙.wav" },
  { character: "事情", pinyin: "shì qing", pinyinPlain: "shi qing", tones: [4, 0], translation: { en: "thing", mn: "асуудал/хэрэг" }, level: 4, lesson: 10, audio: "/audio/YCT4/066_事情.wav" },
  { character: "意思", pinyin: "yì si", pinyinPlain: "yi si", tones: [4, 0], translation: { en: "meaning", mn: "утга" }, level: 4, lesson: 10, audio: "/audio/YCT4/067_意思.wav" },
  { character: "因为", pinyin: "yīn wèi", pinyinPlain: "yin wei", tones: [1, 4], translation: { en: "because", mn: "учир нь" }, level: 4, lesson: 10, audio: "/audio/YCT4/因为.wav" },
  { character: "所以", pinyin: "suǒ yǐ", pinyinPlain: "suo yi", tones: [3, 3], translation: { en: "so", mn: "тийм учраас" }, level: 4, lesson: 10, audio: "/audio/YCT4/所以.wav" },

  // Lesson 11 (8 words)
  { character: "裙子", pinyin: "qún zi", pinyinPlain: "qun zi", tones: [2, 0], translation: { en: "dress", mn: "юбка" }, level: 4, lesson: 11, audio: "/audio/YCT4/068_裙子.wav" },
  { character: "裤子", pinyin: "kù zi", pinyinPlain: "ku zi", tones: [4, 0], translation: { en: "trousers", mn: "өмд" }, level: 4, lesson: 11, audio: "/audio/YCT4/069_裤子.wav" },
  { character: "可爱", pinyin: "kě ài", pinyinPlain: "ke ai", tones: [3, 4], translation: { en: "cute", mn: "хөөрхөн" }, level: 4, lesson: 11, audio: "/audio/YCT4/070_可爱.wav" },
  { character: "白色", pinyin: "bái sè", pinyinPlain: "bai se", tones: [2, 4], translation: { en: "white", mn: "цагаан" }, level: 4, lesson: 11, audio: "/audio/YCT4/071_白色.wav" },
  { character: "黑色", pinyin: "hēi sè", pinyinPlain: "hei se", tones: [1, 4], translation: { en: "black", mn: "хар" }, level: 4, lesson: 11, audio: "/audio/YCT4/072_黑色.wav" },
  { character: "长", pinyin: "zhǎng", pinyinPlain: "zhang", tones: [3], translation: { en: "grow", mn: "өсөх/ургах" }, level: 4, lesson: 11, audio: "/audio/YCT4/073_长.wav" },
  { character: "出生", pinyin: "chū shēng", pinyinPlain: "chu sheng", tones: [1, 1], translation: { en: "be born", mn: "төрөх" }, level: 4, lesson: 11, audio: "/audio/YCT4/074_出生.wav" },
  { character: "件", pinyin: "jiàn", pinyinPlain: "jian", tones: [4], translation: { en: "measure word", mn: "ширхэг" }, level: 4, lesson: 11, audio: "/audio/YCT4/075_件.wav" },

  // ==========================================
  // YCT 5 (Followed user's provided list)
  // ==========================================

  // Lesson 1 (10 words)
  { character: "功夫", pinyin: "gōng fu", pinyinPlain: "gong fu", tones: [1, 0], translation: { en: "kung fu", mn: "күнфү" }, level: 5, lesson: 1, audio: "/audio/YCT5/001_功夫.wav" },
  { character: "非常", pinyin: "fēi cháng", pinyinPlain: "fei chang", tones: [1, 2], translation: { en: "very much", mn: "маш их" }, level: 5, lesson: 1, audio: "/audio/YCT5/002_非常.wav" },
  { character: "感兴趣", pinyin: "gǎn xìng qù", pinyinPlain: "gan xing qu", tones: [3, 4, 4], translation: { en: "be interested in", mn: "сонирхох" }, level: 5, lesson: 1, audio: "/audio/YCT5/003_感兴趣.wav" },
  { character: "飞", pinyin: "fēi", pinyinPlain: "fei", tones: [1], translation: { en: "fly", mn: "нисэх" }, level: 5, lesson: 1, audio: "/audio/YCT5/004_飞.wav" },
  { character: "当然", pinyin: "dāng rán", pinyinPlain: "dang ran", tones: [1, 2], translation: { en: "of course", mn: "мэдээж" }, level: 5, lesson: 1, audio: "/audio/YCT5/005_当然.wav" },
  { character: "特别", pinyin: "tè bié", pinyinPlain: "te bie", tones: [4, 2], translation: { en: "especially", mn: "онцгой" }, level: 4, lesson: 1, audio: "/audio/YCT5/006_特别.wav" },
  { character: "厉害", pinyin: "lì hai", pinyinPlain: "li hai", tones: [4, 0], translation: { en: "awesome", mn: "мундаг" }, level: 5, lesson: 1, audio: "/audio/YCT5/007_厉害.wav" },
  { character: "一样", pinyin: "yí yàng", pinyinPlain: "yi yang", tones: [2, 4], translation: { en: "the same", mn: "адилхан" }, level: 5, lesson: 1, audio: "/audio/YCT5/008_一样.wav" },
  { character: "帮助", pinyin: "bāng zhù", pinyinPlain: "bang zhu", tones: [1, 4], translation: { en: "help", mn: "туслах" }, level: 5, lesson: 1, audio: "/audio/YCT5/009_帮助.wav" },
  { character: "别人", pinyin: "bié rén", pinyinPlain: "bie ren", tones: [2, 2], translation: { en: "other people", mn: "бусад хүн" }, level: 5, lesson: 1, audio: "/audio/YCT5/010_别人.wav" },

  // Lesson 2 (12 words)
  { character: "兔子", pinyin: "tù zi", pinyinPlain: "tu zi", tones: [4, 0], translation: { en: "rabbit", mn: "туулай" }, level: 5, lesson: 2, audio: "/audio/YCT5/011_兔子.wav" },
  { character: "大象", pinyin: "dà xiàng", pinyinPlain: "da xiang", tones: [4, 4], translation: { en: "elephant", mn: "заан" }, level: 5, lesson: 2, audio: "/audio/YCT5/012_大象.wav" },
  { character: "蝴蝶", pinyin: "hú dié", pinyinPlain: "hu die", tones: [2, 2], translation: { en: "butterfly", mn: "эрвээхэй" }, level: 5, lesson: 2, audio: "/audio/YCT5/013_蝴蝶.wav" },
  { character: "虫子", pinyin: "chóng zi", pinyinPlain: "chong zi", tones: [2, 0], translation: { en: "insect", mn: "хорхой" }, level: 5, lesson: 2, audio: "/audio/YCT5/014_虫子.wav" },
  { character: "尾巴", pinyin: "wěi ba", pinyinPlain: "wei ba", tones: [3, 0], translation: { en: "tail", mn: "сүүл" }, level: 5, lesson: 2, audio: "/audio/YCT5/015_尾巴.wav" },
  { character: "矮", pinyin: "ǎi", pinyinPlain: "ai", tones: [3], translation: { en: "short", mn: "намхан" }, level: 5, lesson: 2, audio: "/audio/YCT5/016_矮.wav" },
  { character: "短", pinyin: "duǎn", pinyinPlain: "duan", tones: [3], translation: { en: "short", mn: "богино" }, level: 5, lesson: 2, audio: "/audio/YCT5/017_短.wav" },
  { character: "胖", pinyin: "pàng", pinyinPlain: "pang", tones: [4], translation: { en: "fat", mn: "тарган" }, level: 5, lesson: 2, audio: "/audio/YCT5/018_胖.wav" },
  { character: "更", pinyin: "gèng", pinyinPlain: "geng", tones: [4], translation: { en: "more", mn: "бүр" }, level: 5, lesson: 2, audio: "/audio/YCT5/019_更.wav" },
  { character: "讨厌", pinyin: "tǎo yàn", pinyinPlain: "tao yan", tones: [3, 4], translation: { en: "hate", mn: "дургүйцэх" }, level: 5, lesson: 2, audio: "/audio/YCT5/020_讨厌.wav" },
  { character: "告诉", pinyin: "gào su", pinyinPlain: "gao su", tones: [4, 0], translation: { en: "tell", mn: "хэлэх" }, level: 5, lesson: 2, audio: "/audio/YCT5/021_告诉.wav" },
  { character: "将来", pinyin: "jiāng lái", pinyinPlain: "jiang lai", tones: [1, 2], translation: { en: "future", mn: "ирээдүй" }, level: 5, lesson: 2, audio: "/audio/YCT5/022_将来.wav" },

  // Lesson 3 (11 words)
  { character: "楼", pinyin: "lóu", pinyinPlain: "lou", tones: [2], translation: { en: "building", mn: "байшин/давхар" }, level: 5, lesson: 3, audio: "/audio/YCT5/023_楼.wav" },
  { character: "电梯", pinyin: "diàn tī", pinyinPlain: "dian ti", tones: [4, 1], translation: { en: "elevator", mn: "цахилгаан шат" }, level: 5, lesson: 3, audio: "/audio/YCT5/024_电梯.wav" },
  { character: "空调", pinyin: "kōng tiáo", pinyinPlain: "kong tiao", tones: [1, 2], translation: { en: "air conditioner", mn: "агааржуулагч" }, level: 5, lesson: 3, audio: "/audio/YCT5/025_空调.wav" },
  { character: "窗户", pinyin: "chuāng hu", pinyinPlain: "chuang hu", tones: [1, 0], translation: { en: "window", mn: "цонх" }, level: 5, lesson: 3, audio: "/audio/YCT5/026_窗户.wav" },
  { character: "沙发", pinyin: "shā fā", pinyinPlain: "sha fa", tones: [1, 1], translation: { en: "sofa", mn: "буйдан" }, level: 5, lesson: 3, audio: "/audio/YCT5/027_沙发.wav" },
  { character: "洗手间", pinyin: "xǐ shǒu jiān", pinyinPlain: "xi shou jian", tones: [3, 3, 1], translation: { en: "bathroom", mn: "ариун цэврийн өрөө" }, level: 5, lesson: 3, audio: "/audio/YCT5/028_洗手间.wav" },
  { character: "等", pinyin: "děng", pinyinPlain: "deng", tones: [3], translation: { en: "wait", mn: "хүлээх" }, level: 5, lesson: 3, audio: "/audio/YCT5/029_等.wav" },
  { character: "住", pinyin: "zhù", pinyinPlain: "zhu", tones: [4], translation: { en: "live", mn: "амьдрах/суух" }, level: 5, lesson: 3, audio: "/audio/YCT5/030_住.wav" },
  { character: "层", pinyin: "céng", pinyinPlain: "ceng", tones: [2], translation: { en: "floor", mn: "давхар" }, level: 5, lesson: 3, audio: "/audio/YCT5/031_层.wav" },
  { character: "还是", pinyin: "hái shì", pinyinPlain: "hai shi", tones: [2, 4], translation: { en: "or", mn: "эсвэл" }, level: 5, lesson: 3, audio: "/audio/YCT5/032_还是.wav" },
  { character: "放", pinyin: "fàng", pinyinPlain: "fang", tones: [4], translation: { en: "put", mn: "тавих" }, level: 5, lesson: 3, audio: "/audio/YCT5/033_放.wav" },

  // Lesson 4 (12 words)
  { character: "邻居", pinyin: "lín jū", pinyinPlain: "lin ju", tones: [2, 1], translation: { en: "neighbor", mn: "хөрш" }, level: 5, lesson: 4, audio: "/audio/YCT5/034_邻居.wav" },
  { character: "习惯", pinyin: "xí guàn", pinyinPlain: "xi guan", tones: [2, 4], translation: { en: "habit", mn: "дадал зуршил" }, level: 5, lesson: 4, audio: "/audio/YCT5/035_习惯.wav" },
  { character: "一会儿", pinyin: "yí huì er", pinyinPlain: "yi hui er", tones: [2, 4, 0], translation: { en: "a little while", mn: "хэсэг зуур" }, level: 5, lesson: 4, audio: "/audio/YCT5/036_一会儿.wav" },
  { character: "以前", pinyin: "yǐ qián", pinyinPlain: "yi qian", tones: [3, 2], translation: { en: "before", mn: "өмнө" }, level: 5, lesson: 4, audio: "/audio/YCT5/037_以前.wav" },
  { character: "周末", pinyin: "zhōu mò", pinyinPlain: "zhou mo", tones: [1, 4], translation: { en: "weekend", mn: "амралтын өдөр" }, level: 5, lesson: 4, audio: "/audio/YCT5/038_周末.wav" },
  { character: "带", pinyin: "dài", pinyinPlain: "dai", tones: [4], translation: { en: "take", mn: "авч явах" }, level: 5, lesson: 4, audio: "/audio/YCT5/039_带.wav" },
  { character: "奇怪", pinyin: "qí guài", pinyinPlain: "qi guai", tones: [2, 4], translation: { en: "strange", mn: "хачин" }, level: 5, lesson: 4, audio: "/audio/YCT5/040_奇怪.wav" },
  { character: "咖啡", pinyin: "kā fēi", pinyinPlain: "ka fe", tones: [1, 1], translation: { en: "coffee", mn: "кофе" }, level: 5, lesson: 4, audio: "/audio/YCT5/041_咖啡.wav" },
  { character: "弹钢琴", pinyin: "tán gāng qín", pinyinPlain: "tan gang qin", tones: [2, 1, 2], translation: { en: "play the piano", mn: "төгөлдөр хуур тоглох" }, level: 5, lesson: 4, audio: "/audio/YCT5/042_弹钢琴.wav" },
  { character: "公园", pinyin: "gōng yuán", pinyinPlain: "gong yuan", tones: [1, 2], translation: { en: "park", mn: "парк" }, level: 5, lesson: 4, audio: "/audio/YCT5/043_公园.wav" },
  { character: "散步", pinyin: "sàn bù", pinyinPlain: "san bu", tones: [4, 4], translation: { en: "take a walk", mn: "салхинд гарах/алхах" }, level: 5, lesson: 4, audio: "/audio/YCT5/044_散步.wav" },
  { character: "爬山", pinyin: "pá shān", pinyinPlain: "pa shan", tones: [2, 1], translation: { en: "climb mountain", mn: "ууланд авирах" }, level: 5, lesson: 4, audio: "/audio/YCT5/045_爬山.wav" },

  // Lesson 5 (12 words)
  { character: "儿子", pinyin: "ér zi", pinyinPlain: "er zi", tones: [2, 0], translation: { en: "son", mn: "хүү" }, level: 5, lesson: 5, audio: "/audio/YCT5/046_儿子.wav" },
  { character: "阿姨", pinyin: "ā yí", pinyinPlain: "a yi", tones: [1, 2], translation: { en: "aunt", mn: "эгч" }, level: 5, lesson: 5, audio: "/audio/YCT5/047_阿姨.wav" },
  { character: "帅", pinyin: "shuài", pinyinPlain: "shuai", tones: [4], translation: { en: "handsome", mn: "царайлаг" }, level: 5, lesson: 5, audio: "/audio/YCT5/048_帅.wav" },
  { character: "女儿", pinyin: "nǚ ér", pinyinPlain: "nü er", tones: [3, 2], translation: { en: "daughter", mn: "охин" }, level: 5, lesson: 5, audio: "/audio/YCT5/049_女儿.wav" },
  { character: "年轻", pinyin: "nián qīng", pinyinPlain: "nian qing", tones: [2, 1], translation: { en: "young", mn: "залуу" }, level: 5, lesson: 5, audio: "/audio/YCT5/050_年轻.wav" },
  { character: "照相", pinyin: "zhào xiàng", pinyinPlain: "zhao xiang", tones: [4, 4], translation: { en: "take a photo", mn: "зураг авах" }, level: 5, lesson: 5, audio: "/audio/YCT5/051_照相.wav" },
  { character: "张", pinyin: "zhāng", pinyinPlain: "zhang", tones: [1], translation: { en: "measure word", mn: "ширхэг (хавтгай зүйл)" }, level: 5, lesson: 5, audio: "/audio/YCT5/052_张.wav" },
  { character: "照片", pinyin: "zhào piàn", pinyinPlain: "zhao pian", tones: [4, 4], translation: { en: "photo", mn: "зураг" }, level: 5, lesson: 5, audio: "/audio/YCT5/053_照片.wav" },
  { character: "多么", pinyin: "duō me", pinyinPlain: "duo me", tones: [1, 0], translation: { en: "so", mn: "ямар их" }, level: 5, lesson: 5, audio: "/audio/YCT5/054_多么.wav" },
  { character: "孩子", pinyin: "hái zi", pinyinPlain: "hai zi", tones: [2, 0], translation: { en: "child", mn: "хүүхэд" }, level: 5, lesson: 5, audio: "/audio/YCT5/055_孩子.wav" },
  { character: "叔叔", pinyin: "shū shu", pinyinPlain: "shu shu", tones: [1, 0], translation: { en: "uncle", mn: "ах/авга ах" }, level: 5, lesson: 5, audio: "/audio/YCT5/056_叔叔.wav" },
  { character: "孙子", pinyin: "sūn zi", pinyinPlain: "sun zi", tones: [1, 0], translation: { en: "grandson", mn: "ач хүү" }, level: 5, lesson: 5, audio: "/audio/YCT5/057_孙子.wav" },

  // Lesson 6 (10 words)
  { character: "站", pinyin: "zhàn", pinyinPlain: "zhan", tones: [4], translation: { en: "stand", mn: "зогсох" }, level: 5, lesson: 6, audio: "/audio/YCT5/058_站.wav" },
  { character: "着", pinyin: "zhe", pinyinPlain: "zhe", tones: [0], translation: { en: "particle", mn: "байгаа (байдал)" }, level: 5, lesson: 6, audio: "/audio/YCT5/059_着.wav" },
  { character: "戴", pinyin: "dài", pinyinPlain: "dai", tones: [4], translation: { en: "wear", mn: "өмсөх (аксессуар)" }, level: 5, lesson: 6, audio: "/audio/YCT5/060_戴.wav" },
  { character: "眼镜", pinyin: "yǎn jìng", pinyinPlain: "yan jing", tones: [3, 4], translation: { en: "glasses", mn: "нүдний шил" }, level: 5, lesson: 6, audio: "/audio/YCT5/061_眼镜.wav" },
  { character: "错", pinyin: "cuò", pinyinPlain: "cuo", tones: [4], translation: { en: "wrong", mn: "буруу" }, level: 5, lesson: 6, audio: "/audio/YCT5/062_错.wav" },
  { character: "大家", pinyin: "dà jiā", pinyinPlain: "da jia", tones: [4, 1], translation: { en: "everyone", mn: "бүгдээрээ" }, level: 5, lesson: 6, audio: "/audio/YCT5/063_大家.wav" },
  { character: "看见", pinyin: "kàn jiàn", pinyinPlain: "kan jian", tones: [4, 4], translation: { en: "see", mn: "харах/үзэх" }, level: 5, lesson: 6, audio: "/audio/YCT5/064_看见.wav" },
  { character: "项圈", pinyin: "xiàng quān", pinyinPlain: "xiang quan", tones: [4, 1], translation: { en: "collar", mn: "хүзүүвч" }, level: 5, lesson: 6, audio: "/audio/YCT5/065_项圈.wav" },
  { character: "联系", pinyin: "lián xì", pinyinPlain: "lian xi", tones: [2, 4], translation: { en: "contact", mn: "холбоо барих" }, level: 5, lesson: 6, audio: "/audio/YCT5/066_联系.wav" },
  { character: "号码", pinyin: "hào mǎ", pinyinPlain: "hao ma", tones: [4, 3], translation: { en: "number", mn: "дугаар" }, level: 5, lesson: 6, audio: "/audio/YCT5/067_号码.wav" },

  // Lesson 7 (10 words)
  { character: "选择", pinyin: "xuǎn zé", pinyinPlain: "xuan ze", tones: [3, 2], translation: { en: "choose", mn: "сонгох" }, level: 5, lesson: 7, audio: "/audio/YCT5/068_选择.wav" },
  { character: "经常", pinyin: "jīng cháng", pinyinPlain: "jing chang", tones: [1, 2], translation: { en: "often", mn: "байнга" }, level: 5, lesson: 7, audio: "/audio/YCT5/069_经常.wav" },
  { character: "锻炼", pinyin: "duàn liàn", pinyinPlain: "duan lian", tones: [4, 4], translation: { en: "exercise", mn: "дасгал хийх" }, level: 5, lesson: 7, audio: "/audio/YCT5/070_锻炼.wav" },
  { character: "健康", pinyin: "jiàn kāng", pinyinPlain: "jian kang", tones: [4, 1], translation: { en: "healthy", mn: "эрүүл" }, level: 5, lesson: 7, audio: "/audio/YCT5/071_健康.wav" },
  { character: "心情", pinyin: "xīn qíng", pinyinPlain: "xin qing", tones: [1, 2], translation: { en: "mood", mn: "сэтгэл санаа" }, level: 5, lesson: 7, audio: "/audio/YCT5/072_心情.wav" },
  { character: "流汗", pinyin: "liú hàn", pinyinPlain: "liu han", tones: [2, 4], translation: { en: "sweat", mn: "хөлс гарах" }, level: 5, lesson: 7, audio: "/audio/YCT5/073_流汗.wav" },
  { character: "网球", pinyin: "wǎng qiú", pinyinPlain: "wang qiu", tones: [3, 2], translation: { en: "tennis", mn: "теннис" }, level: 5, lesson: 7, audio: "/audio/YCT5/074_网球.wav" },
  { character: "排球", pinyin: "pái qiú", pinyinPlain: "pai qiu", tones: [2, 2], translation: { en: "volleyball", mn: "волейбол" }, level: 5, lesson: 7, audio: "/audio/YCT5/075_排球.wav" },
  { character: "乒乓球", pinyin: "pīng pāng qiú", pinyinPlain: "ping pang qiu", tones: [1, 1, 2], translation: { en: "table tennis", mn: "ширээний теннис" }, level: 5, lesson: 7, audio: "/audio/YCT5/076_乒乓球.wav" },
  { character: "体育馆", pinyin: "tǐ yù guǎn", pinyinPlain: "ti yu guan", tones: [3, 4, 3], translation: { en: "gym", mn: "спортын ордон/заал" }, level: 5, lesson: 7, audio: "/audio/YCT5/077_体育馆.wav" },
  { character: "不但", pinyin: "bù dàn", pinyinPlain: "bu dan", tones: [4, 4], translation: { en: "not only", mn: "зөвхөн ... зогсохгүй" }, level: 5, lesson: 7, audio: "/audio/YCT5/不但.wav" },
  { character: "而且", pinyin: "ér qiě", pinyinPlain: "er qie", tones: [2, 3], translation: { en: "but also", mn: "бас / мөн" }, level: 5, lesson: 7, audio: "/audio/YCT5/而且.wav" },

  // Lesson 8 (14 words)
  { character: "晴", pinyin: "qíng", pinyinPlain: "qing", tones: [2], translation: { en: "sunny", mn: "цэлмэг" }, level: 5, lesson: 8, audio: "/audio/YCT5/078_晴.wav" },
  { character: "阴", pinyin: "yīn", pinyinPlain: "yin", tones: [1], translation: { en: "cloudy", mn: "үүлтэй" }, level: 5, lesson: 8, audio: "/audio/YCT5/079_阴.wav" },
  { character: "刮风", pinyin: "guā fēng", pinyinPlain: "gua feng", tones: [1, 1], translation: { en: "windy", mn: "салхитай" }, level: 5, lesson: 8, audio: "/audio/YCT5/080_刮风.wav" },
  { character: "春", pinyin: "chūn", pinyinPlain: "chun", tones: [1], translation: { en: "spring", mn: "хавар" }, level: 5, lesson: 8, audio: "/audio/YCT5/081_春.wav" },
  { character: "夏", pinyin: "xià", pinyinPlain: "xia", tones: [4], translation: { en: "summer", mn: "зун" }, level: 5, lesson: 8, audio: "/audio/YCT5/082_夏.wav" },
  { character: "秋", pinyin: "qiū", pinyinPlain: "qiu", tones: [1], translation: { en: "autumn", mn: "намар" }, level: 5, lesson: 8, audio: "/audio/YCT5/083_秋.wav" },
  { character: "冬", pinyin: "dōng", pinyinPlain: "dong", tones: [1], translation: { en: "winter", mn: "өвөл" }, level: 5, lesson: 8, audio: "/audio/YCT5/084_冬.wav" },
  { character: "变化", pinyin: "biàn huà", pinyinPlain: "bian hua", tones: [4, 4], translation: { en: "change", mn: "өөрчлөлт/хувиралт" }, level: 5, lesson: 8, audio: "/audio/YCT5/085_变化.wav" },
  { character: "一共", pinyin: "yí gòng", pinyinPlain: "yi gong", tones: [2, 4], translation: { en: "altogether", mn: "нийтдээ" }, level: 5, lesson: 8, audio: "/audio/YCT5/086_一共.wav" },
  { character: "季节", pinyin: "jì jié", pinyinPlain: "ji jie", tones: [4, 2], translation: { en: "season", mn: "улирал" }, level: 5, lesson: 8, audio: "/audio/YCT5/087_季节.wav" },
  { character: "暖和", pinyin: "nuǎn huo", pinyinPlain: "nuan huo", tones: [3, 0], translation: { en: "warm", mn: "дулаахан" }, level: 5, lesson: 8, audio: "/audio/YCT5/088_暖和.wav" },
  { character: "到处", pinyin: "dào chù", pinyinPlain: "dao chu", tones: [4, 4], translation: { en: "everywhere", mn: "хаа сайгүй" }, level: 5, lesson: 8, audio: "/audio/YCT5/089_到处.wav" },
  { character: "凉快", pinyin: "liáng kuai", pinyinPlain: "liang kuai", tones: [2, 0], translation: { en: "cool", mn: "сэрүүн" }, level: 5, lesson: 8, audio: "/audio/YCT5/090_凉快.wav" },
  { character: "堆雪人", pinyin: "duī xuě rén", pinyinPlain: "dui xue ren", tones: [1, 3, 2], translation: { en: "make a snowman", mn: "цасан хүн хийх" }, level: 5, lesson: 8, audio: "/audio/YCT5/091_堆雪人.wav" },

  // Lesson 9 (12 words)
  { character: "饮料", pinyin: "yǐn liào", pinyinPlain: "yi nliao", tones: [3, 4], translation: { en: "drink", mn: "ундаа" }, level: 5, lesson: 9, audio: "/audio/YCT5/092_饮料.wav" },
  { character: "巧克力", pinyin: "qiǎo kè lì", pinyinPlain: "qiao ke li", tones: [3, 4, 4], translation: { en: "chocolate", mn: "шоколад" }, level: 5, lesson: 9, audio: "/audio/YCT5/093_巧克力.wav" },
  { character: "饼干", pinyin: "bǐng gān", pinyinPlain: "bing gan", tones: [3, 1], translation: { en: "cookie", mn: "жигнэмэг" }, level: 5, lesson: 9, audio: "/audio/YCT5/094_饼干.wav" },
  { character: "冰淇淋", pinyin: "bīng qí lín", pinyinPlain: "bing qi lin", tones: [1, 2, 2], translation: { en: "ice cream", mn: "зайрмаг" }, level: 5, lesson: 9, audio: "/audio/YCT5/095_冰淇淋.wav" },
  { character: "玩具", pinyin: "wán jù", pinyinPlain: "wan ju", tones: [2, 4], translation: { en: "toy", mn: "тоглоом" }, level: 5, lesson: 9, audio: "/audio/YCT5/096_玩具.wav" },
  { character: "超市", pinyin: "chāo shì", pinyinPlain: "chao shi", tones: [1, 4], translation: { en: "supermarket", mn: "супермаркет" }, level: 5, lesson: 9, audio: "/audio/YCT5/097_超市.wav" },
  { character: "手表", pinyin: "shǒu biǎo", pinyinPlain: "shou biao", tones: [3, 3], translation: { en: "watch", mn: "бугуйн цаг" }, level: 5, lesson: 9, audio: "/audio/YCT5/098_手表.wav" },
  { character: "记得", pinyin: "jì de", pinyinPlain: "ji de", tones: [4, 0], translation: { en: "remember", mn: "санах" }, level: 5, lesson: 9, audio: "/audio/YCT5/099_记得.wav" },
  { character: "已经", pinyin: "yǐ jīng", pinyinPlain: "yi jing", tones: [3, 1], translation: { en: "already", mn: "хэдийнээ" }, level: 5, lesson: 9, audio: "/audio/YCT5/100_已经.wav" },
  { character: "办法", pinyin: "bàn fǎ", pinyinPlain: "ban fa", tones: [4, 3], translation: { en: "way", mn: "арга зам/арга" }, level: 5, lesson: 9, audio: "/audio/YCT5/101_办法.wav" },
  { character: "尝", pinyin: "cháng", pinyinPlain: "chang", tones: [2], translation: { en: "taste", mn: "амсах" }, level: 5, lesson: 9, audio: "/audio/YCT5/102_尝.wav" },
  { character: "便宜", pinyin: "pián yi", pinyinPlain: "pian yi", tones: [2, 0], translation: { en: "cheap", mn: "хямдхан" }, level: 5, lesson: 9, audio: "/audio/YCT5/103_便宜.wav" },
  { character: "既", pinyin: "jì", pinyinPlain: "ji", tones: [4], translation: { en: "both", mn: "бөгөөд" }, level: 5, lesson: 9, audio: "/audio/YCT5/既.wav" },
  { character: "又", pinyin: "yòu", pinyinPlain: "you", tones: [4], translation: { en: "and", mn: "бас" }, level: 5, lesson: 9, audio: "/audio/YCT5/又.wav" },

  // Lesson 10 (10 words)
  {
    character: "考试",
    pinyin: "kǎo shì",
    pinyinPlain: "kao shi",
    tones: [3, 4],
    translation: { en: "test", mn: "шалгалт" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/104_考试.wav"
  },
  {
    character: "成绩",
    pinyin: "chéng jì",
    pinyinPlain: "cheng ji",
    tones: [2, 4],
    translation: { en: "score", mn: "дүн/амжилт" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/105_成绩.wav"
  },
  {
    character: "聊天儿",
    pinyin: "liáo tiān er",
    pinyinPlain: "liao tian er",
    tones: [2, 1, 0],
    translation: { en: "chat", mn: "хуучлах" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/106_聊天儿.wav"
  },
  {
    character: "复习",
    pinyin: "fù xí",
    pinyinPlain: "fu xi",
    tones: [4, 2],
    translation: { en: "review", mn: "давтах" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/107_复习.wav"
  },
  {
    character: "准备",
    pinyin: "zhǔ n bèi",
    pinyinPlain: "zhu n bei",
    tones: [3, 4],
    translation: { en: "prepare", mn: "бэлтгэх" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/108_准备.wav"
  },
  {
    character: "努力",
    pinyin: "nǔ lì",
    pinyinPlain: "nu li",
    tones: [3, 4],
    translation: { en: "hard", mn: "хичээнгүй" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/109_努力.wav"
  },
  {
    character: "一定",
    pinyin: "yí dìng",
    pinyinPlain: "yi ding",
    tones: [2, 4],
    translation: { en: "definitely", mn: "заавал" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/110_一定.wav"
  },
  {
    character: "认真",
    pinyin: "rèn zhēn",
    pinyinPlain: "ren zhen",
    tones: [4, 1],
    translation: { en: "seriously", mn: "нухацтай" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/111_认真.wav"
  },
  {
    character: "练习",
    pinyin: "liàn xí",
    pinyinPlain: "lian xi",
    tones: [4, 2],
    translation: { en: "practice", mn: "дасгал хийх/дадлага" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/112_练习.wav"
  },
  {
    character: "相信",
    pinyin: "xiāng xìn",
    pinyinPlain: "xiang xin",
    tones: [1, 4],
    translation: { en: "believe", mn: "итгэх" },
    level: 5,
    lesson: 10,
    audio: "/audio/YCT5/113_相信.wav"
  },
  { character: "只要", pinyin: "zhǐ yào", pinyinPlain: "zhi yao", tones: [3, 4], translation: { en: "as long as", mn: "л бол" }, level: 5, lesson: 10, audio: "/audio/YCT5/只要.wav" },
  { character: "就", pinyin: "jiù", pinyinPlain: "jiu", tones: [4], translation: { en: "then", mn: "тэгвэл" }, level: 5, lesson: 10, audio: "/audio/YCT5/就_2.wav" },

  // Lesson 11 (14 words)
  {
    character: "烤鸭",
    pinyin: "kǎo yā",
    pinyinPlain: "kao ya",
    tones: [3, 1],
    translation: { en: "roast duck", mn: "шарсан нугас" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/114_烤鸭.wav"
  },
  {
    character: "服务员",
    pinyin: "fú wù yuán",
    pinyinPlain: "fu wu yuan",
    tones: [2, 4, 2],
    translation: { en: "waiter", mn: "үйлчлэгч" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/115_服务员.wav"
  },
  {
    character: "盘子",
    pinyin: "pán zi",
    pinyinPlain: "pan zi",
    tones: [2, 0],
    translation: { en: "plate", mn: "таваг" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/116_盘子.wav"
  },
  {
    character: "碗",
    pinyin: "wǎn",
    pinyinPlain: "wan",
    tones: [3],
    translation: { en: "bowl", mn: "аяга/шаазан" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/117_碗.wav"
  },
  {
    character: "筷子",
    pinyin: "kuài zi",
    pinyinPlain: "kuai zi",
    tones: [4, 0],
    translation: { en: "chopsticks", mn: "савх" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/118_筷子.wav"
  },
  {
    character: "盘",
    pinyin: "pán",
    pinyinPlain: "pan",
    tones: [2],
    translation: { en: "measure word", mn: "таваг" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/119_盘.wav"
  },
  {
    character: "碗",
    pinyin: "wǎn",
    pinyinPlain: "wan",
    tones: [3],
    translation: { en: "measure word", mn: "аяга" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/120_碗.wav"
  },
  {
    character: "叉子",
    pinyin: "chā zi",
    pinyinPlain: "cha zi",
    tones: [1, 0],
    translation: { en: "fork", mn: "сэрээ" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/121_叉子.wav"
  },
  {
    character: "羊肉",
    pinyin: "yáng ròu",
    pinyinPlain: "yang rou",
    tones: [2, 4],
    translation: { en: "lamb", mn: "хонины мах" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/122_羊肉.wav"
  },
  {
    character: "汤",
    pinyin: "tāng",
    pinyinPlain: "tang",
    tones: [1],
    translation: { en: "soup", mn: "шөл" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/123_汤.wav"
  },
  {
    character: "其他",
    pinyin: "qí tā",
    pinyinPlain: "qi ta",
    tones: [2, 1],
    translation: { en: "other", mn: "бусад" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/124_其他.wav"
  },
  {
    character: "用",
    pinyin: "yòng",
    pinyinPlain: "yong",
    tones: [4],
    translation: { en: "use", mn: "хэрэглэх" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/125_用.wav"
  },
  {
    character: "离开",
    pinyin: "lí kāi",
    pinyinPlain: "li kai",
    tones: [2, 1],
    translation: { en: "leave", mn: "явах/орхин явах" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/126_离开.wav"
  },
  {
    character: "双",
    pinyin: "shuāng",
    pinyinPlain: "shuang",
    tones: [1],
    translation: { en: "measure word", mn: "хос" },
    level: 5,
    lesson: 11,
    audio: "/audio/YCT5/127_双.wav"
  },

  // Lesson 12 (10 words)
  {
    character: "地铁",
    pinyin: "dì tiě",
    pinyinPlain: "di tie",
    tones: [4, 3],
    translation: { en: "subway", mn: "метро" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/128_地铁.wav"
  },
  {
    character: "火车",
    pinyin: "huǒ chē",
    pinyinPlain: "huo che",
    tones: [3, 1],
    translation: { en: "train", mn: "галт тэрэг" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/129_火车.wav"
  },
  {
    character: "可能",
    pinyin: "kě néng",
    pinyinPlain: "ke neng",
    tones: [3, 2],
    translation: { en: "maybe", mn: "магадгүй" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/130_可能.wav"
  },
  {
    character: "担心",
    pinyin: "dān xīn",
    pinyinPlain: "dan xin",
    tones: [1, 1],
    translation: { en: "worry", mn: "санаа зовох" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/131_担心.wav"
  },
  {
    character: "工作",
    pinyin: "gōng zuò",
    pinyinPlain: "gong zuo",
    tones: [1, 4],
    translation: { en: "work", mn: "ажил/ажиллах" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/132_工作.wav"
  },
  {
    character: "出差",
    pinyin: "chū chāi",
    pinyinPlain: "chu chai",
    tones: [1, 1],
    translation: { en: "go on business", mn: "томилолтоор явах" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/133_出差.wav"
  },
  {
    character: "安全",
    pinyin: "ān quán",
    pinyinPlain: "an quan",
    tones: [1, 2],
    translation: { en: "safe", mn: "аюулгүй" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/134_安全.wav"
  },
  {
    character: "准时",
    pinyin: "zhǔ n shí",
    pinyinPlain: "zhu n shi",
    tones: [3, 2],
    translation: { en: "on time", mn: "цагтаа" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/135_准时.wav"
  },
  {
    character: "或者",
    pinyin: "huò zhě",
    pinyinPlain: "huo zhe",
    tones: [4, 3],
    translation: { en: "or", mn: "эсвэл" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/136_或者.wav"
  },
  {
    character: "方便",
    pinyin: "fāng biàn",
    pinyinPlain: "fang bian",
    tones: [1, 4],
    translation: { en: "convenient", mn: "тохиромжтой/тухтай" },
    level: 5,
    lesson: 12,
    audio: "/audio/YCT5/137_方便.wav"
  },
  { character: "如果", pinyin: "rú guǒ", pinyinPlain: "ru guo", tones: [2, 3], translation: { en: "if", mn: "хэрэв" }, level: 5, lesson: 12, audio: "/audio/YCT5/如果.wav" },
  { character: "那么", pinyin: "nà me", pinyinPlain: "na me", tones: [4, 0], translation: { en: "then", mn: "тэгвэл" }, level: 5, lesson: 12, audio: "/audio/YCT5/那么.wav" },

  // Lesson 13 (13 words)
  {
    character: "刷牙",
    pinyin: "shuā yá",
    pinyinPlain: "shua ya",
    tones: [1, 2],
    translation: { en: "brush teeth", mn: "шүд угаах" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/138_刷牙.wav"
  },
  {
    character: "护士",
    pinyin: "hù shi",
    pinyinPlain: "hu shi",
    tones: [4, 0],
    translation: { en: "nurse", mn: "сувилагч" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/139_护士.wav"
  },
  {
    character: "肚子",
    pinyin: "dù zi",
    pinyinPlain: "du zi",
    tones: [4, 0],
    translation: { en: "stomach", mn: "гэдэс" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/140_肚子.wav"
  },
  {
    character: "发烧",
    pinyin: "fā shāo",
    pinyinPlain: "fa shao",
    tones: [1, 1],
    translation: { en: "have a fever", mn: "халуурах" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/141_发烧.wav"
  },
  {
    character: "打针",
    pinyin: "dǎ zhēn",
    pinyinPlain: "da zhen",
    tones: [3, 1],
    translation: { en: "get an injection", mn: "тариулах" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/142_打针.wav"
  },
  {
    character: "补牙",
    pinyin: "bǔ yá",
    pinyinPlain: "bu ya",
    tones: [3, 2],
    translation: { en: "fix a tooth", mn: "шүд ломбодуулах" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/143_补牙.wav"
  },
  {
    character: "先",
    pinyin: "xiān",
    pinyinPlain: "xian",
    tones: [1],
    translation: { en: "first", mn: "эхлээд" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/144_先.wav"
  },
  {
    character: "教",
    pinyin: "jiāo",
    pinyinPlain: "jiao",
    tones: [1],
    translation: { en: "teach", mn: "заах" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/145_教.wav"
  },
  {
    character: "突然",
    pinyin: "tū rán",
    pinyinPlain: "tu ran",
    tones: [1, 2],
    translation: { en: "suddenly", mn: "гэнэт" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/146_突然.wav"
  },
  {
    character: "马上",
    pinyin: "mǎ shàng",
    pinyinPlain: "ma shang",
    tones: [3, 4],
    translation: { en: "immediately", mn: "удахгүй/шууд" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/147_马上.wav"
  },
  {
    character: "开药",
    pinyin: "kāi yào",
    pinyinPlain: "kai yao",
    tones: [1, 4],
    translation: { en: "prescribe medicine", mn: "эм бичиж өгөх" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/148_开药.wav"
  },
  {
    character: "一直",
    pinyin: "yì zhí",
    pinyinPlain: "yi zhi",
    tones: [4, 2],
    translation: { en: "always", mn: "үргэлж" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/149_一直.wav"
  },
  {
    character: "躺",
    pinyin: "tǎng",
    pinyinPlain: "tang",
    tones: [3],
    translation: { en: "lie", mn: "хэвтэх" },
    level: 5,
    lesson: 13,
    audio: "/audio/YCT5/150_躺.wav"
  },

  // Lesson 14 (13 words)
  {
    character: "地图",
    pinyin: "dì tú",
    pinyinPlain: "di tu",
    tones: [4, 2],
    translation: { en: "map", mn: "газрын зураг" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/151_地图.wav"
  },
  {
    character: "小笼包",
    pinyin: "xiǎo lóng bāo",
    pinyinPlain: "xiao long bao",
    tones: [3, 2, 1],
    translation: { en: "soup dumplings", mn: "жигнэсэн банш" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/152_小笼包.wav"
  },
  {
    character: "长城",
    pinyin: "cháng chéng",
    pinyinPlain: "chang cheng",
    tones: [2, 2],
    translation: { en: "Great Wall", mn: "Цагаан хэрэм" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/153_长城.wav"
  },
  {
    character: "寒假",
    pinyin: "hán jià",
    pinyinPlain: "han jia",
    tones: [2, 4],
    translation: { en: "winter holiday", mn: "өвлийн амралт" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/154_寒假.wav"
  },
  {
    character: "旅游",
    pinyin: "lǚ yóu",
    pinyinPlain: "lü you",
    tones: [3, 2],
    translation: { en: "travel", mn: "аялах" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/155_旅游.wav"
  },
  {
    character: "打算",
    pinyin: "dǎ suan",
    pinyinPlain: "da suan",
    tones: [3, 4],
    translation: { en: "plan", mn: "төлөвлөх" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/156_打算.wav"
  },
  {
    character: "南方",
    pinyin: "nán fāng",
    pinyinPlain: "nan fang",
    tones: [2, 1],
    translation: { en: "south", mn: "өмнөд зүг" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/157_南方.wav"
  },
  {
    character: "北方",
    pinyin: "běi fāng",
    pinyinPlain: "bei fang",
    tones: [3, 1],
    translation: { en: "north", mn: "хойд зүг" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/158_北方.wav"
  },
  {
    character: "除了",
    pinyin: "chú le",
    pinyinPlain: "chu le",
    tones: [2, 0],
    translation: { en: "except", mn: "гадна" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/159_除了.wav"
  },
  {
    character: "有名",
    pinyin: "yǒu míng",
    pinyinPlain: "you ming",
    tones: [3, 2],
    translation: { en: "famous", mn: "алдартай" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/160_有名.wav"
  },
  {
    character: "介绍",
    pinyin: "jiè shào",
    pinyinPlain: "jie shao",
    tones: [4, 4],
    translation: { en: "introduce", mn: "танилцуулах" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/161_介绍.wav"
  },
  {
    character: "暑假",
    pinyin: "shǔ jià",
    pinyinPlain: "shu jia",
    tones: [3, 4],
    translation: { en: "summer holiday", mn: "зуны амралт" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/162_暑假.wav"
  },
  {
    character: "然后",
    pinyin: "rán hòu",
    pinyinPlain: "ran hou",
    tones: [2, 4],
    translation: { en: "then", mn: "дараа нь/тэгээд" },
    level: 5,
    lesson: 14,
    audio: "/audio/YCT5/163_然后.wav"
  },

  // ==========================================
  // YCT 6 (Followed user's provided list)
  // ==========================================

  // Lesson 1 (14 words)
  { character: "勇敢", pinyin: "yǒng gǎn", pinyinPlain: "yong gan", tones: [3, 3], translation: { en: "brave", mn: "зоригтой" }, level: 6, lesson: 1, audio: "/audio/YCT6/001_勇敢.wav" },
  { character: "聪明", pinyin: "cōng ming", pinyinPlain: "cong ming", tones: [1, 0], translation: { en: "clever", mn: "ухаантай" }, level: 6, lesson: 1, audio: "/audio/YCT6/002_聪明.wav" },
  { character: "另外", pinyin: "lìng wài", pinyinPlain: "ling wai", tones: [4, 4], translation: { en: "besides", mn: "үүнээс гадна" }, level: 6, lesson: 1, audio: "/audio/YCT6/003_另外.wav" },
  { character: "属", pinyin: "shǔ", pinyinPlain: "shu", tones: [3], translation: { en: "be born in the year of", mn: "жилтэй" }, level: 6, lesson: 1, audio: "/audio/YCT6/004_属.wav" },
  { character: "收到", pinyin: "shōu dào", pinyinPlain: "shou dao", tones: [1, 4], translation: { en: "receive", mn: "хүлээн авах" }, level: 6, lesson: 1, audio: "/audio/YCT6/005_收到.wav" },
  { character: "祝贺", pinyin: "zhù hè", pinyinPlain: "zhu he", tones: [4, 4], translation: { en: "congratulate", mn: "баяр хүргэх" }, level: 6, lesson: 1, audio: "/audio/YCT6/006_祝贺.wav" },
  { character: "初中", pinyin: "chū zhōng", pinyinPlain: "chu zhong", tones: [1, 1], translation: { en: "junior high school", mn: "дунд сургууль" }, level: 6, lesson: 1, audio: "/audio/YCT6/007_初中.wav" },
  { character: "挂", pinyin: "guà", pinyinPlain: "gua", tones: [4], translation: { en: "hang", mn: "өлгөх" }, level: 6, lesson: 1, audio: "/audio/YCT6/008_挂.wav" },
  { character: "节日", pinyin: "jié rì", pinyinPlain: "jie ri", tones: [2, 4], translation: { en: "festival", mn: "баяр наадам" }, level: 6, lesson: 1, audio: "/audio/YCT6/009_节日.wav" },
  { character: "猴子", pinyin: "hóu zi", pinyinPlain: "hou zi", tones: [2, 0], translation: { en: "monkey", mn: "бич" }, level: 6, lesson: 1, audio: "/audio/YCT6/010_猴子.wav" },
  { character: "毕业", pinyin: "bì yè", pinyinPlain: "bi ye", tones: [4, 4], translation: { en: "graduate", mn: "төгсөх" }, level: 6, lesson: 1, audio: "/audio/YCT6/011_毕业.wav" },
  { character: "信封", pinyin: "xìn fēng", pinyinPlain: "xin feng", tones: [4, 1], translation: { en: "envelope", mn: "дугтуй" }, level: 6, lesson: 1, audio: "/audio/YCT6/012_信封.wav" },
  { character: "春节", pinyin: "chūn jié", pinyinPlain: "chun jie", tones: [1, 2], translation: { en: "Spring Festival", mn: "Цагаан сар" }, level: 6, lesson: 1, audio: "/audio/YCT6/013_春节.wav" },
  { character: "灯笼", pinyin: "dēng long", pinyinPlain: "deng long", tones: [1, 0], translation: { en: "lantern", mn: "дэнлүү" }, level: 6, lesson: 1, audio: "/audio/YCT6/014_灯笼.wav" },

  // Lesson 2 (13 words)
  { character: "容易", pinyin: "róng yì", pinyinPlain: "rong yi", tones: [2, 4], translation: { en: "easy", mn: "амархан" }, level: 6, lesson: 2, audio: "/audio/YCT6/015_容易.wav" },
  { character: "刚才", pinyin: "gāng cái", pinyinPlain: "gang cai", tones: [1, 2], translation: { en: "just now", mn: "сая" }, level: 6, lesson: 2, audio: "/audio/YCT6/016_刚才.wav" },
  { character: "讲", pinyin: "jiǎng", pinyinPlain: "jiang", tones: [3], translation: { en: "explain", mn: "ярих/тайлбарлах" }, level: 6, lesson: 2, audio: "/audio/YCT6/017_讲.wav" },
  { character: "明白", pinyin: "míng bai", pinyinPlain: "ming bai", tones: [2, 0], translation: { en: "understand", mn: "ойлгомжтой" }, level: 6, lesson: 2, audio: "/audio/YCT6/018_明白.wav" },
  { character: "骑", pinyin: "qí", pinyinPlain: "qi", tones: [2], translation: { en: "ride", mn: "унах (унаа)" }, level: 6, lesson: 2, audio: "/audio/YCT6/019_骑.wav" },
  { character: "希望", pinyin: "xi wàng", pinyinPlain: "xi wang", tones: [1, 4], translation: { en: "hope", mn: "найдах" }, level: 6, lesson: 2, audio: "/audio/YCT6/020_希望.wav" },
  { character: "参加", pinyin: "cān jiā", pinyinPlain: "can jia", tones: [1, 1], translation: { en: "take part in", mn: "оролцох" }, level: 6, lesson: 2, audio: "/audio/YCT6/021_参加.wav" },
  { character: "万", pinyin: "wàn", pinyinPlain: "wan", tones: [4], translation: { en: "ten thousand", mn: "түм" }, level: 6, lesson: 2, audio: "/audio/YCT6/022_万.wav" },
  { character: "加", pinyin: "jiā", pinyinPlain: "jia", tones: [1], translation: { en: "add", mn: "нэмэх" }, level: 6, lesson: 2, audio: "/audio/YCT6/023_加.wav" },
  { character: "减", pinyin: "jiǎn", pinyinPlain: "jian", tones: [3], translation: { en: "minus", mn: "хасах" }, level: 6, lesson: 2, audio: "/audio/YCT6/024_减.wav" },
  { character: "数学", pinyin: "shù xué", pinyinPlain: "shu xue", tones: [4, 2], translation: { en: "math", mn: "математик" }, level: 6, lesson: 2, audio: "/audio/YCT6/025_数学.wav" },
  { character: "自行车", pinyin: "zì xíng chē", pinyinPlain: "zi xing che", tones: [4, 2, 1], translation: { en: "bike", mn: "унадаг дугуй" }, level: 6, lesson: 2, audio: "/audio/YCT6/026_自行车.wav" },
  { character: "比赛", pinyin: "bǐ sài", pinyinPlain: "bi sai", tones: [3, 4], translation: { en: "competition", mn: "тэмцээн" }, level: 6, lesson: 2, audio: "/audio/YCT6/027_比赛.wav" },

  // Lesson 3 (13 words)
  { character: "醒", pinyin: "xǐng", pinyinPlain: "xing", tones: [3], translation: { en: "wake up", mn: "сэрэх" }, level: 6, lesson: 3, audio: "/audio/YCT6/028_醒.wav" },
  { character: "刻", pinyin: "kè", pinyinPlain: "ke", tones: [4], translation: { en: "quarter", mn: "15 минут" }, level: 6, lesson: 3, audio: "/audio/YCT6/029_刻.wav" },
  { character: "响", pinyin: "xiǎng", pinyinPlain: "xiang", tones: [3], translation: { en: "ring", mn: "дуугарах" }, level: 6, lesson: 3, audio: "/audio/YCT6/030_响.wav" },
  { character: "开会", pinyin: "kāi huì", pinyinPlain: "kai hui", tones: [1, 4], translation: { en: "have a meeting", mn: "хуралдах" }, level: 6, lesson: 3, audio: "/audio/YCT6/031_开会.wav" },
  { character: "着急", pinyin: "zháo jí", pinyinPlain: "zhao ji", tones: [2, 2], translation: { en: "worried", mn: "сандрах/яарах" }, level: 6, lesson: 3, audio: "/audio/YCT6/032_着急.wav" },
  { character: "上班", pinyin: "shàng bān", pinyinPlain: "shang ban", tones: [4, 1], translation: { en: "go to work", mn: "ажилдаа явах" }, level: 6, lesson: 3, audio: "/audio/YCT6/033_上班.wav" },
  { character: "以为", pinyin: "yǐ wéi", pinyinPlain: "yi wei", tones: [3, 2], translation: { en: "think", mn: "гэж бодох (андуурах)" }, level: 6, lesson: 3, audio: "/audio/YCT6/034_以为.wav" },
  { character: "闹钟", pinyin: "nào zhōng", pinyinPlain: "nao zhong", tones: [4, 1], translation: { en: "alarm clock", mn: "сэрүүлэг" }, level: 6, lesson: 3, audio: "/audio/YCT6/035_闹钟.wav" },
  { character: "安静", pinyin: "ān jìng", pinyinPlain: "an jing", tones: [1, 4], translation: { en: "quiet", mn: "чимээгүй" }, level: 6, lesson: 3, audio: "/audio/YCT6/036_安静.wav" },
  { character: "起来", pinyin: "qǐ lai", pinyinPlain: "qi lai", tones: [3, 0], translation: { en: "get up", mn: "босох" }, level: 6, lesson: 3, audio: "/audio/YCT6/037_起来.wav" },
  { character: "校园", pinyin: "xiào yuán", pinyinPlain: "xiao yuan", tones: [4, 2], translation: { en: "campus", mn: "кампус/сургуулийн талбай" }, level: 6, lesson: 3, audio: "/audio/YCT6/038_校园.wav" },
  { character: "树", pinyin: "shù", pinyinPlain: "shu", tones: [4], translation: { en: "tree", mn: "мод" }, level: 6, lesson: 3, audio: "/audio/YCT6/039_树.wav" },
  { character: "声音", pinyin: "shēng yīn", pinyinPlain: "sheng yin", tones: [1, 1], translation: { en: "sound", mn: "дуу чимээ" }, level: 6, lesson: 3, audio: "/audio/YCT6/040_声音.wav" },
  { character: "来得及", pinyin: "lái de jí", pinyinPlain: "lai de ji", tones: [2, 0, 2], translation: { en: "have enough time", mn: "амжих" }, level: 6, lesson: 3, audio: "/audio/YCT6/来得及.wav" },
  { character: "正在", pinyin: "zhèng zài", pinyinPlain: "zheng zai", tones: [4, 4], translation: { en: "in progress", mn: "одоо ...-ж байна" }, level: 6, lesson: 3, audio: "/audio/YCT6/正在.wav" },
  { character: "一边", pinyin: "yì biān", pinyinPlain: "yi bian", tones: [4, 1], translation: { en: "at the same time", mn: "далимд нь/зэрэг" }, level: 6, lesson: 3, audio: "/audio/YCT6/一边.wav" },

  // Lesson 4 (16 words)
  { character: "面粉", pinyin: "miàn fěn", pinyinPlain: "mian fen", tones: [4, 3], translation: { en: "flour", mn: "гурил" }, level: 6, lesson: 4, audio: "/audio/YCT6/041_面粉.wav" },
  { character: "接", pinyin: "jiē", pinyinPlain: "jie", tones: [1], translation: { en: "pick up", mn: "авах/тосох" }, level: 6, lesson: 4, audio: "/audio/YCT6/042_接.wav" },
  { character: "够", pinyin: "gòu", pinyinPlain: "gou", tones: [4], translation: { en: "enough", mn: "хүрэлцээтэй" }, level: 6, lesson: 4, audio: "/audio/YCT6/043_够.wav" },
  { character: "打扫", pinyin: "dǎ sǎo", pinyinPlain: "da sao", tones: [3, 3], translation: { en: "clean", mn: "цэвэрлэх" }, level: 6, lesson: 4, audio: "/audio/YCT6/044_打扫.wav" },
  { character: "干净", pinyin: "gān jìng", pinyinPlain: "gan jing", tones: [1, 4], translation: { en: "clean", mn: "цэвэрхэн" }, level: 6, lesson: 4, audio: "/audio/YCT6/045_干净.wav" },
  { character: "修剪", pinyin: "xiū jiǎn", pinyinPlain: "xiu jian", tones: [1, 3], translation: { en: "trim", mn: "засах/тайрах" }, level: 6, lesson: 4, audio: "/audio/YCT6/046_修剪.wav" },
  { character: "照顾", pinyin: "zhào gù", pinyinPlain: "zhao gu", tones: [4, 0], translation: { en: "take care of", mn: "асрах" }, level: 6, lesson: 4, audio: "/audio/YCT6/047_照顾.wav" },
  { character: "睡着", pinyin: "shuì zháo", pinyinPlain: "shui zhao", tones: [4, 2], translation: { en: "fall asleep", mn: "унтах" }, level: 6, lesson: 4, audio: "/audio/YCT6/048_睡着.wav" },
  { character: "互相", pinyin: "hù xiāng", pinyinPlain: "hu xiang", tones: [4, 1], translation: { en: "each other", mn: "бие биеэ" }, level: 6, lesson: 4, audio: "/audio/YCT6/049_互相.wav" },
  { character: "生活", pinyin: "shēng huó", pinyinPlain: "sheng huo", tones: [1, 2], translation: { en: "life", mn: "амьдрал" }, level: 6, lesson: 4, audio: "/audio/YCT6/050_生活.wav" },
  { character: "斤", pinyin: "jīn", pinyinPlain: "jin", tones: [1], translation: { en: "jin", mn: "жин (500г)" }, level: 6, lesson: 4, audio: "/audio/YCT6/051_斤.wav" },
  { character: "葡萄", pinyin: "pú tao", pinyinPlain: "pu tao", tones: [2, 0], translation: { en: "grape", mn: "усан үзэм" }, level: 6, lesson: 4, audio: "/audio/YCT6/052_葡萄.wav" },
  { character: "草地", pinyin: "cǎo dì", pinyinPlain: "cao di", tones: [3, 4], translation: { en: "lawn", mn: "зүлэг" }, level: 6, lesson: 4, audio: "/audio/YCT6/053_草地.wav" },
  { character: "表演", pinyin: "biǎo yǎn", pinyinPlain: "biao yan", tones: [3, 3], translation: { en: "perform", mn: "тоглох" }, level: 6, lesson: 4, audio: "/audio/YCT6/070_表演.wav" },
  { character: "以前", pinyin: "yǐ qián", pinyinPlain: "yi qian", tones: [3, 2], translation: { en: "before", mn: "өмнө" }, level: 6, lesson: 4, audio: "/audio/YCT4/012_以前.wav" }, // Correct level
  { character: "已经", pinyin: "yǐ jīng", pinyinPlain: "yi jing", tones: [3, 1], translation: { en: "already", mn: "хэдийнээ" }, level: 6, lesson: 4, audio: "/audio/YCT4/017_已经.wav" }, // Correct level
  { character: "一下", pinyin: "yí xià", pinyinPlain: "yi xia", tones: [2, 4], translation: { en: "once/a bit", mn: "нэг удаа/жаахан" }, level: 6, lesson: 4, audio: "/audio/YCT6/一下.wav" },
 
  // Lesson 5 (12 words)
  { character: "表扬", pinyin: "biǎo yáng", pinyinPlain: "biao yang", tones: [3, 2], translation: { en: "praise", mn: "сайшаах" }, level: 6, lesson: 5, audio: "/audio/YCT6/054_表扬.wav" },
  { character: "句子", pinyin: "jù zi", pinyinPlain: "ju zi", tones: [4, 0], translation: { en: "sentence", mn: "өгүүлбэр" }, level: 6, lesson: 5, audio: "/audio/YCT6/055_句子.wav" },
  { character: "有意思", pinyin: "yǒu yì si", pinyinPlain: "you yi si", tones: [3, 4, 0], translation: { en: "interesting", mn: "сонирхолтой" }, level: 6, lesson: 5, audio: "/audio/YCT6/056_有意思.wav" },
  { character: "从", pinyin: "cóng", pinyinPlain: "cong", tones: [2], translation: { en: "from", mn: "...-аас" }, level: 6, lesson: 5, audio: "/audio/YCT6/057_从.wav" },
  { character: "马虎", pinyin: "mǎ hu", pinyinPlain: "ma hu", tones: [3, 0], translation: { en: "careless", mn: "хайхрамжгүй" }, level: 6, lesson: 5, audio: "/audio/YCT6/058_马虎.wav" },
  { character: "才", pinyin: "cái", pinyinPlain: "cai", tones: [2], translation: { en: "just", mn: "дөнгөж/сая" }, level: 6, lesson: 5, audio: "/audio/YCT6/059_才.wav" },
  { character: "忘记", pinyin: "wàng jì", pinyinPlain: "wang ji", tones: [4, 4], translation: { en: "forget", mn: "мартах" }, level: 6, lesson: 5, audio: "/audio/YCT6/060_忘记.wav" },
  { character: "错", pinyin: "cuò", pinyinPlain: "cuo", tones: [4], translation: { en: "wrong", mn: "буруу" }, level: 6, lesson: 5, audio: "/audio/YCT6/061_错.wav" },
  { character: "渴", pinyin: "kě", pinyinPlain: "ke", tones: [3], translation: { en: "thirsty", mn: "ам цангах" }, level: 6, lesson: 5, audio: "/audio/YCT6/062_渴.wav" },
  { character: "停", pinyin: "tíng", pinyinPlain: "ting", tones: [2], translation: { en: "stop", mn: "зогсох" }, level: 6, lesson: 5, audio: "/audio/YCT6/063_停.wav" },
  { character: "钥匙", pinyin: "yào shi", pinyinPlain: "yao shi", tones: [4, 0], translation: { en: "key", mn: "түлхүүр" }, level: 6, lesson: 5, audio: "/audio/YCT6/064_钥匙.wav" },
  { character: "生气", pinyin: "shēng qì", pinyinPlain: "sheng qi", tones: [1, 4], translation: { en: "angry", mn: "уурлах" }, level: 6, lesson: 5, audio: "/audio/YCT6/065_生气.wav" },
  { character: "想起来", pinyin: "xiǎng qǐ lái", pinyinPlain: "xiang qi lai", tones: [3, 3, 2], translation: { en: "remember", mn: "санах" }, level: 6, lesson: 5, audio: "/audio/YCT6/想起来.wav" },
  { character: "地", pinyin: "de", pinyinPlain: "de", tones: [0], translation: { en: "particle", mn: "нөхцөл (тэмдэг нэрээс үйлийн нэр бүтээх)" }, level: 6, lesson: 5, audio: "/audio/YCT6/地.wav" },
 
  // Lesson 6 (13 words)
  { character: "警察", pinyin: "jǐng chá", pinyinPlain: "jing cha", tones: [3, 2], translation: { en: "police", mn: "цагдаа" }, level: 6, lesson: 6, audio: "/audio/YCT6/066_警察.wav" },
  { character: "售票员", pinyin: "shòu piào yuán", pinyinPlain: "shou piao yuan", tones: [4, 4, 2], translation: { en: "ticket seller", mn: "тасалбар түгээгч" }, level: 6, lesson: 6, audio: "/audio/YCT6/067_售票员.wav" },
  { character: "记者", pinyin: "jì zhě", pinyinPlain: "ji zhe", tones: [4, 3], translation: { en: "reporter", mn: "сурвалжлагч" }, level: 6, lesson: 6, audio: "/audio/YCT6/068_记者.wav" },
  { character: "演员", pinyin: "yǎn yuán", pinyinPlain: "yan yuan", tones: [3, 2], translation: { en: "actor", mn: "жүжигчин" }, level: 6, lesson: 6, audio: "/audio/YCT6/069_演员.wav" },
  { character: "表演", pinyin: "biǎo yǎn", pinyinPlain: "biao yan", tones: [3, 3], translation: { en: "perform", mn: "үзүүлбэр/тоглох" }, level: 6, lesson: 6, audio: "/audio/YCT6/070_表演.wav" },
  { character: "节目", pinyin: "jié mù", pinyinPlain: "jie mu", tones: [2, 4], translation: { en: "program", mn: "нэвтрүүлэг" }, level: 6, lesson: 6, audio: "/audio/YCT6/071_节目.wav" },
  { character: "猜", pinyin: "cāi", pinyinPlain: "cai", tones: [1], translation: { en: "guess", mn: "таах" }, level: 6, lesson: 6, audio: "/audio/YCT6/072_猜.wav" },
  { character: "电灯", pinyin: "diàn dēng", pinyinPlain: "dian deng", tones: [4, 1], translation: { en: "electric light", mn: "гэрэл" }, level: 6, lesson: 6, audio: "/audio/YCT6/073_电灯.wav" },
  { character: "当", pinyin: "dāng", pinyinPlain: "dang", tones: [1], translation: { en: "be", mn: "болох (мэргэжил)" }, level: 6, lesson: 6, audio: "/audio/YCT6/074_当.wav" },
  { character: "重要", pinyin: "zhòng yào", pinyinPlain: "zhong yao", tones: [4, 4], translation: { en: "important", mn: "чухал" }, level: 6, lesson: 6, audio: "/audio/YCT6/075_重要.wav" },
  { character: "新闻", pinyin: "xīn wén", pinyinPlain: "xin wen", tones: [1, 2], translation: { en: "news", mn: "мэдээ" }, level: 6, lesson: 6, audio: "/audio/YCT6/076_新闻.wav" },
  { character: "应该", pinyin: "yīng gāi", pinyinPlain: "ying gai", tones: [1, 1], translation: { en: "should", mn: "ёстой" }, level: 6, lesson: 6, audio: "/audio/YCT6/077_应该.wav" },
  { character: "看见", pinyin: "kàn jiàn", pinyinPlain: "kan jian", tones: [4, 4], translation: { en: "see", mn: "харах" }, level: 6, lesson: 6, audio: "/audio/YCT6/078_看见.wav" },
  // Lesson 7 (13 words)
  { character: "词典", pinyin: "cí diǎn", pinyinPlain: "ci dian", tones: [2, 3], translation: { en: "dictionary", mn: "толь бичиг" }, level: 6, lesson: 7, audio: "/audio/YCT6/079_词典.wav" },
  { character: "脸", pinyin: "liǎn", pinyinPlain: "lian", tones: [3], translation: { en: "face", mn: "нүүр" }, level: 6, lesson: 7, audio: "/audio/YCT6/080_脸.wav" },
  { character: "圆", pinyin: "yuán", pinyinPlain: "yuan", tones: [2], translation: { en: "round", mn: "бөөрөнхий" }, level: 6, lesson: 7, audio: "/audio/YCT6/081_圆.wav" },
  { character: "先生", pinyin: "xiān sheng", pinyinPlain: "xian sheng", tones: [1, 0], translation: { en: "sir", mn: "ноён" }, level: 6, lesson: 7, audio: "/audio/YCT6/082_先生.wav" },
  { character: "双胞胎", pinyin: "shuāng bāo tāi", pinyinPlain: "shuang bao tai", tones: [1, 1, 1], translation: { en: "twins", mn: "ихэр" }, level: 6, lesson: 7, audio: "/audio/YCT6/083_双胞胎.wav" },
  { character: "儿童车", pinyin: "ér tóng chē", pinyinPlain: "er tong che", tones: [2, 2, 1], translation: { en: "baby stroller", mn: "хүүхдийн тэрэг" }, level: 6, lesson: 7, audio: "/audio/YCT6/084_儿童车.wav" },
  { character: "还", pinyin: "huán", pinyinPlain: "huan", tones: [2], translation: { en: "return", mn: "буцааж өгөх" }, level: 6, lesson: 7, audio: "/audio/YCT6/085_还.wav" },
  { character: "借", pinyin: "jiè", pinyinPlain: "jie", tones: [4], translation: { en: "borrow", mn: "зээлэх" }, level: 6, lesson: 7, audio: "/audio/YCT6/086_借.wav" },
  { character: "页", pinyin: "yè", pinyinPlain: "ye", tones: [4], translation: { en: "page", mn: "хуудас" }, level: 6, lesson: 7, audio: "/audio/YCT6/087_页.wav" },
  { character: "俩", pinyin: "liǎ", pinyinPlain: "lia", tones: [3], translation: { en: "two", mn: "хоёул" }, level: 6, lesson: 7, audio: "/audio/YCT6/088_俩.wav" },
  { character: "像", pinyin: "xiàng", pinyinPlain: "xiang", tones: [4], translation: { en: "like", mn: "адилхан байх" }, level: 6, lesson: 7, audio: "/audio/YCT6/089_像.wav" },
  { character: "牌子", pinyin: "pái zi", pinyinPlain: "pai zi", tones: [2, 0], translation: { en: "sign", mn: "хаяг/самбар" }, level: 6, lesson: 7, audio: "/audio/YCT6/090_牌子.wav" },
  { character: "为了", pinyin: "wèi le", pinyinPlain: "wei le", tones: [4, 0], translation: { en: "for", mn: "...-ын төлөө" }, level: 6, lesson: 7, audio: "/audio/YCT6/091_为了.wav" },
  { character: "虽然", pinyin: "suī rán", pinyinPlain: "sui ran", tones: [1, 2], translation: { en: "although", mn: "гэсэн хэдий ч" }, level: 6, lesson: 7, audio: "/audio/YCT6/虽然.wav" },
  { character: "但是", pinyin: "dàn shì", pinyinPlain: "dan shi", tones: [4, 4], translation: { en: "but", mn: "гэхдээ" }, level: 6, lesson: 7, audio: "/audio/YCT6/但是.wav" },

  // Lesson 8 (11 words)
  { character: "被", pinyin: "bèi", pinyinPlain: "bei", tones: [4], translation: { en: "by", mn: "...-д" }, level: 6, lesson: 8, audio: "/audio/YCT6/092_被.wav" },
  { character: "又", pinyin: "yòu", pinyinPlain: "you", tones: [4], translation: { en: "again", mn: "дахин" }, level: 6, lesson: 8, audio: "/audio/YCT6/093_又.wav" },
  { character: "鱼缸", pinyin: "yú gāng", pinyinPlain: "yu gang", tones: [2, 1], translation: { en: "fish tank", mn: "загасны сав" }, level: 6, lesson: 8, audio: "/audio/YCT6/094_鱼缸.wav" },
  { character: "种", pinyin: "zhǒng", pinyinPlain: "zhong", tones: [3], translation: { en: "kind", mn: "төрөл" }, level: 6, lesson: 8, audio: "/audio/YCT6/095_种.wav" },
  { character: "最近", pinyin: "zuì jìn", pinyinPlain: "zui jin", tones: [4, 4], translation: { en: "recently", mn: "сүүлийн үед" }, level: 6, lesson: 8, audio: "/audio/YCT6/096_最近.wav" },
  { character: "游戏", pinyin: "yóu xì", pinyinPlain: "you xi", tones: [2, 4], translation: { en: "game", mn: "тоглоом" }, level: 6, lesson: 8, audio: "/audio/YCT6/097_游戏.wav" },
  { character: "批评", pinyin: "pī píng", pinyinPlain: "pi ping", tones: [1, 2], translation: { en: "criticize", mn: "шүүмжлэх" }, level: 6, lesson: 8, audio: "/audio/YCT6/098_批评.wav" },
  { character: "决定", pinyin: "jué dìng", pinyinPlain: "jue ding", tones: [2, 4], translation: { en: "decide", mn: "шийдэх" }, level: 6, lesson: 8, audio: "/audio/YCT6/099_决定.wav" },
  { character: "开始", pinyin: "kāi shǐ", pinyinPlain: "kai shi", tones: [1, 3], translation: { en: "start", mn: "эхлэх" }, level: 6, lesson: 8, audio: "/audio/YCT6/100_开始.wav" },
  { character: "破", pinyin: "pò", pinyinPlain: "po", tones: [4], translation: { en: "broken", mn: "эвдэрсэн" }, level: 6, lesson: 8, audio: "/audio/YCT6/101_破.wav" },
  { character: "难过", pinyin: "nán guò", pinyinPlain: "nan guo", tones: [2, 4], translation: { en: "sad", mn: "гунигтай" }, level: 6, lesson: 8, audio: "/audio/YCT6/102_难过.wav" },

  // Lesson 9 (15 words)
  { character: "图书馆", pinyin: "tú shū guǎn", pinyinPlain: "tu shu guan", tones: [2, 1, 3], translation: { en: "library", mn: "номын сан" }, level: 6, lesson: 9, audio: "/audio/YCT6/103_图书馆.wav" },
  { character: "报纸", pinyin: "bào zhǐ", pinyinPlain: "bao zhi", tones: [4, 3], translation: { en: "newspaper", mn: "сонин" }, level: 6, lesson: 9, audio: "/audio/YCT6/104_报纸.wav" },
  { character: "杂志", pinyin: "zá zhì", pinyinPlain: "za zhi", tones: [2, 4], translation: { en: "magazine", mn: "сэтгүүл" }, level: 6, lesson: 9, audio: "/audio/YCT6/105_杂志.wav" },
  { character: "超人", pinyin: "chāo rén", pinyinPlain: "chao ren", tones: [1, 2], translation: { en: "superman", mn: "супермэн" }, level: 6, lesson: 9, audio: "/audio/YCT6/106_超人.wav" },
  { character: "搬家", pinyin: "bān jiā", pinyinPlain: "ban jia", tones: [1, 1], translation: { en: "move house", mn: "нүүх" }, level: 6, lesson: 9, audio: "/audio/YCT6/107_搬家.wav" },
  { character: "附近", pinyin: "fù jìn", pinyinPlain: "fu jin", tones: [4, 4], translation: { en: "nearby", mn: "ойр хавь" }, level: 6, lesson: 9, audio: "/audio/YCT6/108_附近.wav" },
  { character: "地址", pinyin: "dì zhǐ", pinyinPlain: "di zhi", tones: [4, 3], translation: { en: "address", mn: "хаяг" }, level: 6, lesson: 9, audio: "/audio/YCT6/109_地址.wav" },
  { character: "电子邮件", pinyin: "diàn zǐ yóu jiàn", pinyinPlain: "dian zi you jian", tones: [4, 3, 2, 4], translation: { en: "email", mn: "и-мэйл" }, level: 6, lesson: 9, audio: "/audio/YCT6/110_电子邮件.wav" },
  { character: "迷路", pinyin: "mí lù", pinyinPlain: "mi lu", tones: [2, 4], translation: { en: "get lost", mn: "төөрөх" }, level: 6, lesson: 9, audio: "/audio/YCT6/111_迷路.wav" },
  { character: "出发", pinyin: "chū fā", pinyinPlain: "chu fa", tones: [1, 1], translation: { en: "set off", mn: "замд гарах" }, level: 6, lesson: 9, audio: "/audio/YCT6/112_出发.wav" },
  { character: "见面", pinyin: "jiàn miàn", pinyinPlain: "jian mian", tones: [4, 4], translation: { en: "meet", mn: "уулзах" }, level: 6, lesson: 9, audio: "/audio/YCT6/113_见面.wav" },
  { character: "行", pinyin: "xíng", pinyinPlain: "xing", tones: [2], translation: { en: "OK", mn: "болно" }, level: 6, lesson: 9, audio: "/audio/YCT6/114_行.wav" },
  { character: "故事", pinyin: "gù shi", pinyinPlain: "gu shi", tones: [4, 0], translation: { en: "story", mn: "түүх" }, level: 6, lesson: 9, audio: "/audio/YCT6/115_故事.wav" },
  { character: "力气", pinyin: "lì qi", pinyinPlain: "li qi", tones: [4, 0], translation: { en: "strength", mn: "хүч чадал" }, level: 6, lesson: 9, audio: "/audio/YCT6/116_力气.wav" },
  { character: "老", pinyin: "lǎo", pinyinPlain: "lao", tones: [3], translation: { en: "old", mn: "хөгшин" }, level: 6, lesson: 9, audio: "/audio/YCT6/117_老.wav" },

  // Lesson 10 (10 words)
  { character: "月饼", pinyin: "yuè bǐng", pinyinPlain: "yue bing", tones: [4, 3], translation: { en: "mooncake", mn: "сарны боов" }, level: 6, lesson: 10, audio: "/audio/YCT6/118_月饼.wav" },
  { character: "大海", pinyin: "dà hǎi", pinyinPlain: "da hai", tones: [4, 3], translation: { en: "sea", mn: "далай" }, level: 6, lesson: 10, audio: "/audio/YCT6/119_大海.wav" },
  { character: "草原", pinyin: "cǎo yuán", pinyinPlain: "cao yuan", tones: [3, 2], translation: { en: "grassland", mn: "хээр тал" }, level: 6, lesson: 10, audio: "/audio/YCT6/120_草原.wav" },
  { character: "云", pinyin: "yún", pinyinPlain: "yun", tones: [2], translation: { en: "cloud", mn: "үүл" }, level: 6, lesson: 10, audio: "/audio/YCT6/121_云.wav" },
  { character: "骑马", pinyin: "qí mǎ", pinyinPlain: "qi ma", tones: [2, 3], translation: { en: "ride a horse", mn: "морь унах" }, level: 6, lesson: 10, audio: "/audio/YCT6/122_骑马.wav" },
  { character: "星星", pinyin: "xīng xing", pinyinPlain: "xing xing", tones: [1, 0], translation: { en: "star", mn: "одон" }, level: 6, lesson: 10, audio: "/audio/YCT6/123_星星.wav" },
  { character: "离", pinyin: "lí", pinyinPlain: "li", tones: [2], translation: { en: "away from", mn: "...-аас зайтай" }, level: 6, lesson: 10, audio: "/audio/YCT6/124_离.wav" },
  { character: "大概", pinyin: "dà gài", pinyinPlain: "da gai", tones: [4, 4], translation: { en: "about", mn: "багцаагаар" }, level: 6, lesson: 10, audio: "/audio/YCT6/125_大概.wav" },
  { character: "公里", pinyin: "gōng lǐ", pinyinPlain: "gong li", tones: [1, 3], translation: { en: "kilometer", mn: "километр" }, level: 6, lesson: 10, audio: "/audio/YCT6/126_公里.wav" },
  { character: "国家", pinyin: "guó jiā", pinyinPlain: "guo jia", tones: [2, 1], translation: { en: "country", mn: "улс орон" }, level: 6, lesson: 10, audio: "/audio/YCT6/127_国家.wav" },

  // Lesson 11 (13 words)
  { character: "元", pinyin: "yuán", pinyinPlain: "yuan", tones: [2], translation: { en: "yuan", mn: "юань" }, level: 6, lesson: 11, audio: "/audio/YCT6/128_元.wav" },
  { character: "贵", pinyin: "guì", pinyinPlain: "gui", tones: [4], translation: { en: "expensive", mn: "үнэтэй" }, level: 6, lesson: 11, audio: "/audio/YCT6/129_贵.wav" },
  { character: "花", pinyin: "huā", pinyinPlain: "hua", tones: [1], translation: { en: "spend", mn: "зарцуулах" }, level: 6, lesson: 11, audio: "/audio/YCT6/130_花.wav" },
  { character: "帽子", pinyin: "mào zi", pinyinPlain: "mao zi", tones: [4, 0], translation: { en: "hat", mn: "малгай" }, level: 6, lesson: 11, audio: "/audio/YCT6/131_帽子.wav" },
  { character: "换", pinyin: "huàn", pinyinPlain: "huan", tones: [4], translation: { en: "change", mn: "солих" }, level: 6, lesson: 11, audio: "/audio/YCT6/132_换.wav" },
  { character: "旧", pinyin: "jiù", pinyinPlain: "jiu", tones: [4], translation: { en: "old", mn: "хуучин" }, level: 6, lesson: 11, audio: "/audio/YCT6/133_旧.wav" },
  { character: "试", pinyin: "shì", pinyinPlain: "shi", tones: [4], translation: { en: "try", mn: "туршиж үзэх" }, level: 6, lesson: 11, audio: "/audio/YCT6/134_试.wav" },
  { character: "合适", pinyin: "hé shì", pinyinPlain: "he shi", tones: [2, 4], translation: { en: "suitable", mn: "тохиромжтой" }, level: 6, lesson: 11, audio: "/audio/YCT6/135_合适.wav" },
  { character: "辆", pinyin: "liàng", pinyinPlain: "liang", tones: [4], translation: { en: "measure word (vehicles)", mn: "ширхэг (тээврийн хэрэгсэл)" }, level: 6, lesson: 11, audio: "/audio/YCT6/136_辆.wav" },
  { character: "为", pinyin: "wèi", pinyinPlain: "wei", tones: [4], translation: { en: "for", mn: "төлөө" }, level: 6, lesson: 11, audio: "/audio/YCT6/137_为.wav" },
  { character: "紧张", pinyin: "jǐn zhāng", pinyinPlain: "jin zhang", tones: [3, 1], translation: { en: "nervous", mn: "сандарсан" }, level: 6, lesson: 11, audio: "/audio/YCT6/138_紧张.wav" },
  { character: "敢", pinyin: "gǎn", pinyinPlain: "gan", tones: [3], translation: { en: "dare", mn: "зүрхлэх" }, level: 6, lesson: 11, audio: "/audio/YCT6/139_敢.wav" },
  { character: "害怕", pinyin: "hài pà", pinyinPlain: "hai pa", tones: [4, 4], translation: { en: "afraid", mn: "айх" }, level: 6, lesson: 11, audio: "/audio/YCT6/140_害怕.wav" },

  // Lesson 12 (12 words)
  { character: "注意", pinyin: "zhù yì", pinyinPlain: "zhu yi", tones: [4, 4], translation: { en: "pay attention", mn: "анхаарах" }, level: 6, lesson: 12, audio: "/audio/YCT6/141_注意.wav" },
  { character: "记住", pinyin: "jì zhù", pinyinPlain: "ji zhu", tones: [4, 4], translation: { en: "remember", mn: "тогтоох" }, level: 6, lesson: 12, audio: "/audio/YCT6/142_记住.wav" },
  { character: "身", pinyin: "shēn", pinyinPlain: "shen", tones: [1], translation: { en: "measure word (suits)", mn: "иж бүрдэл" }, level: 6, lesson: 12, audio: "/audio/YCT6/143_身.wav" },
  { character: "比如", pinyin: "bǐ rú", pinyinPlain: "bi ru", tones: [3, 2], translation: { en: "for example", mn: "жишээвэл" }, level: 6, lesson: 12, audio: "/audio/YCT6/144_比如.wav" },
  { character: "礼貌", pinyin: "lǐ mào", pinyinPlain: "li mao", tones: [3, 4], translation: { en: "polite", mn: "ёс журамтай" }, level: 6, lesson: 12, audio: "/audio/YCT6/145_礼貌.wav" },
  { character: "必须", pinyin: "bì xū", pinyinPlain: "bi xu", tones: [4, 1], translation: { en: "must", mn: "заавал" }, level: 6, lesson: 12, audio: "/audio/YCT6/146_必须.wav" },
  { character: "小心", pinyin: "xiǎo xīn", pinyinPlain: "xiao xin", tones: [3, 1], translation: { en: "careful", mn: "болгоомжтой" }, level: 6, lesson: 12, audio: "/audio/YCT6/147_小心.wav" },
  { character: "地方", pinyin: "dì fang", pinyinPlain: "di fang", tones: [4, 0], translation: { en: "place", mn: "газар" }, level: 6, lesson: 12, audio: "/audio/YCT6/148_地方.wav" },
  { character: "危险", pinyin: "wēi xiǎn", pinyinPlain: "wei xian", tones: [1, 3], translation: { en: "dangerous", mn: "аюултай" }, level: 6, lesson: 12, audio: "/audio/YCT6/149_危险.wav" },
  { character: "脱", pinyin: "tuō", pinyinPlain: "tuo", tones: [1], translation: { en: "take off", mn: "тайлах" }, level: 6, lesson: 12, audio: "/audio/YCT6/150_脱.wav" },
  { character: "排队", pinyin: "pái duì", pinyinPlain: "pai dui", tones: [2, 4], translation: { en: "line up", mn: "дараалалд зогсох" }, level: 6, lesson: 12, audio: "/audio/YCT6/151_排队.wav" },
  { character: "中间", pinyin: "zhōng jiān", pinyinPlain: "zhong jian", tones: [1, 1], translation: { en: "middle", mn: "дунд" }, level: 6, lesson: 12, audio: "/audio/YCT6/152_中间.wav" },

  // Lesson 13 (10 words)
  { character: "辣", pinyin: "là", pinyinPlain: "la", tones: [4], translation: { en: "spicy", mn: "халуун" }, level: 6, lesson: 13, audio: "/audio/YCT6/153_辣.wav" },
  { character: "甜", pinyin: "tián", pinyinPlain: "tian", tones: [2], translation: { en: "sweet", mn: "чихэрлэг" }, level: 6, lesson: 13, audio: "/audio/YCT6/154_甜.wav" },
  { character: "坚持", pinyin: "jiān chí", pinyinPlain: "jian chi", tones: [1, 2], translation: { en: "persist", mn: "тууштай байх" }, level: 6, lesson: 13, audio: "/audio/YCT6/155_坚持.wav" },
  { character: "盒", pinyin: "hé", pinyinPlain: "he", tones: [2], translation: { en: "measure word (box)", mn: "хайрцаг" }, level: 6, lesson: 13, audio: "/audio/YCT6/156_盒.wav" },
  { character: "同意", pinyin: "tóng yì", pinyinPlain: "tong yi", tones: [2, 4], translation: { en: "agree", mn: "зөвшөөрөх" }, level: 6, lesson: 13, audio: "/audio/YCT6/157_同意.wav" },
  { character: "讨论", pinyin: "tǎo lùn", pinyinPlain: "tao lun", tones: [3, 4], translation: { en: "discuss", mn: "хэлэлцэх" }, level: 6, lesson: 13, audio: "/audio/YCT6/158_讨论.wav" },
  { character: "冰箱", pinyin: "bīng xiāng", pinyinPlain: "bing xiang", tones: [1, 1], translation: { en: "refrigerator", mn: "хөргөгч" }, level: 6, lesson: 13, audio: "/audio/YCT6/159_冰箱.wav" },
  { character: "西红柿", pinyin: "xi hóng shì", pinyinPlain: "xi hong shi", tones: [1, 2, 4], translation: { en: "tomato", mn: "улаан лооль" }, level: 6, lesson: 13, audio: "/audio/YCT6/160_西红柿.wav" },
  { character: "瘦", pinyin: "shòu", pinyinPlain: "shou", tones: [4], translation: { en: "thin", mn: "туранхай" }, level: 6, lesson: 13, audio: "/audio/YCT6/161_瘦.wav" },
  { character: "糖", pinyin: "táng", pinyinPlain: "tang", tones: [2], translation: { en: "sugar", mn: "сахар/чихэр" }, level: 6, lesson: 13, audio: "/audio/YCT6/162_糖.wav" },

  // Lesson 14 (12 words)
  { character: "打扰", pinyin: "dǎ rǎo", pinyinPlain: "da rao", tones: [3, 3], translation: { en: "disturb", mn: "саад болох" }, level: 6, lesson: 14, audio: "/audio/YCT6/163_打扰.wav" },
  { character: "参观", pinyin: "cān guān", pinyinPlain: "can guan", tones: [1, 1], translation: { en: "visit", mn: "танилцах" }, level: 6, lesson: 14, audio: "/audio/YCT6/164_参观.wav" },
  { character: "熟悉", pinyin: "shú xi", pinyinPlain: "shu xi", tones: [2, 1], translation: { en: "familiar", mn: "танил" }, level: 6, lesson: 14, audio: "/audio/YCT6/165_熟悉.wav" },
  { character: "往", pinyin: "wǎng", pinyinPlain: "wang", tones: [3], translation: { en: "towards", mn: "чиглэлд" }, level: 6, lesson: 14, audio: "/audio/YCT6/166_往.wav" },
  { character: "转", pinyin: "zhuǎn", pinyinPlain: "zhuan", tones: [3], translation: { en: "turn", mn: "эргэх" }, level: 6, lesson: 14, audio: "/audio/YCT6/167_转.wav" },
  { character: "关于", pinyin: "guān yú", pinyinPlain: "guan yu", tones: [1, 2], translation: { en: "about", mn: "...-н тухай" }, level: 6, lesson: 14, audio: "/audio/YCT6/168_关于.wav" },
  { character: "知识", pinyin: "zhī shi", pinyinPlain: "zhi shi", tones: [1, 0], translation: { en: "knowledge", mn: "мэдлэг" }, level: 6, lesson: 14, audio: "/audio/YCT6/169_知识.wav" },
  { character: "清楚", pinyin: "qīng chu", pinyinPlain: "qing chu", tones: [1, 0], translation: { en: "clear", mn: "тодорхой" }, level: 6, lesson: 14, audio: "/audio/YCT6/170_清楚.wav" },
  { character: "小姐", pinyin: "xiǎo jie", pinyinPlain: "xiao jie", tones: [3, 0], translation: { en: "miss", mn: "бүсгүй" }, level: 6, lesson: 14, audio: "/audio/YCT6/171_小姐.wav" },
  { character: "东", pinyin: "dōng", pinyinPlain: "dong", tones: [1], translation: { en: "east", mn: "зүүн" }, level: 6, lesson: 14, audio: "/audio/YCT6/172_东.wav" },
  { character: "西", pinyin: "xī", pinyinPlain: "xi", tones: [1], translation: { en: "west", mn: "баруун" }, level: 6, lesson: 14, audio: "/audio/YCT6/173_西.wav" },
  { character: "竹子", pinyin: "zhú zi", pinyinPlain: "zhu zi", tones: [2, 0], translation: { en: "bamboo", mn: "хулс" }, level: 6, lesson: 14, audio: "/audio/YCT6/174_竹子.wav" },
  { character: "有的", pinyin: "yǒu de", pinyinPlain: "you de", tones: [3, 0], translation: { en: "some", mn: "зарим нэг" }, level: 6, lesson: 14, audio: "/audio/YCT6/有的.wav" },
];

export const getLessonWords = (level: number, lesson: number) => {
  const isReview = level === 5 || level === 6 ? lesson === 15 : lesson === 12;
  if (isReview) {
    return YCT_VOCAB.filter((w) => w.level === level);
  }
  return YCT_VOCAB.filter((w) => w.level === level && w.lesson === lesson);
};
