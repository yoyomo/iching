export const NUMBER_OF_LINES = 6;
export const NUMBER_OF_COINS = 3;

export const trigrams = [
  { element: 'Heaven'  , kanjiElement: '天', name: "CH'IEN", kanjiName: '乾', translation: 'Creative'     , symbol: [1,1,1], glyph: '☰' }
, { element: 'Thunder' , kanjiElement: '雷', name: "CHÊN"  , kanjiName: '震', translation: 'Arousing'     , symbol: [0,0,1], glyph: '☳' }
, { element: 'Water'   , kanjiElement: '水', name: "K'AN"  , kanjiName: '坎', translation: 'Abysmal'      , symbol: [0,1,0], glyph: '☵' }
, { element: 'Mountain', kanjiElement: '山', name: "KÊN"   , kanjiName: '艮', translation: 'Keeping Still', symbol: [1,0,0], glyph: '☶' }
, { element: 'Earth'   , kanjiElement: '地', name: "K'UN"  , kanjiName: '坤', translation: 'Receptive'    , symbol: [0,0,0], glyph: '☷' }
, { element: 'Wind'    , kanjiElement: '風', name: "SUN"   , kanjiName: '巽', translation: 'Gentle'       , symbol: [1,1,0], glyph: '☴' }
, { element: 'Fire'    , kanjiElement: '火', name: "LI"    , kanjiName: '離', translation: 'Clinging'     , symbol: [1,0,1], glyph: '☲' }
, { element: 'Lake'    , kanjiElement: '澤', name: "TUI"   , kanjiName: '兌', translation: 'Joyous'       , symbol: [0,1,1], glyph: '☱' }
];

export const hexagramLookUp = [
  [  1 , 34 ,  5 , 26 , 11 ,  9 , 14 , 43 ]
, [ 25 , 51 ,  3 , 27 , 24 , 42 , 21 , 17 ]
, [  6 , 40 , 29 ,  4 ,  7 , 59 , 64 , 47 ]
, [ 33 , 62 , 39 , 52 , 15 , 53 , 56 , 31 ]
, [ 12 , 16 ,  8 , 23 ,  2 , 20 , 35 , 45 ]
, [ 44 , 32 , 48 , 18 , 46 , 57 , 50 , 28 ]
, [ 13 , 55 , 63 , 22 , 36 , 37 , 30 , 49 ]
, [ 10 , 54 , 60 , 41 , 19 , 61 , 38 , 58 ]
]

export const hexagrams = [
  {kanji: "乾"  , chineseName: "qián", name: "Force", glyph: "䷀"}
, {kanji: "坤"  , chineseName: "kūn", name: "Field", glyph: "䷁"}
, {kanji: "屯"  , chineseName: "zhūn", name: "Sprouting", glyph: "䷂"}
, {kanji: "蒙"  , chineseName: "méng", name: "Enveloping", glyph: "䷃"}
, {kanji: "需"  , chineseName: "xū", name: "Attending", glyph: "䷄"}
, {kanji: "訟"  , chineseName: "sòng", name: "Arguing", glyph: "䷅"}
, {kanji: "師"  , chineseName: "shī", name: "Leading", glyph: "䷆"}
, {kanji: "比"  , chineseName: "bǐ", name: "Grouping", glyph: "䷇"}
, {kanji: "小畜", chineseName: "xiǎo chù", name: "Small Accumulating", glyph: "䷈"}
, {kanji: "履"  , chineseName: "lǚ", name: "Treading", glyph: "䷉"}
, {kanji: "泰"  , chineseName: "tài", name: "Pervading", glyph: "䷊"}
, {kanji: "否"  , chineseName: "pǐ", name: "Obstruction", glyph: "䷋"}
, {kanji: "同人", chineseName: "tóng rén", name: "Concording People", glyph: "䷌"}
, {kanji: "大有", chineseName: "dà yǒu", name: "Great Possessing", glyph: "䷍"}
, {kanji: "謙"  , chineseName: "qiān", name: "Humbling", glyph: "䷎"}
, {kanji: "豫"  , chineseName: "yù", name: "Providing-For", glyph: "䷏"}
, {kanji: "隨"  , chineseName: "suí", name: "Following", glyph: "䷐"}
, {kanji: "蠱"  , chineseName: "gǔ", name: "Correcting", glyph: "䷑"}
, {kanji: "臨"  , chineseName: "lín", name: "Nearing", glyph: "䷒"}
, {kanji: "觀"  , chineseName: "guān", name: "Viewing", glyph: "䷓"}
, {kanji: "噬嗑", chineseName: "shì kè", name: "Gnawing Bite", glyph: "䷔"}
, {kanji: "賁"  , chineseName: "bì", name: "Adorning", glyph: "䷕"}
, {kanji: "剝"  , chineseName: "bō", name: "Stripping", glyph: "䷖"}
, {kanji: "復"  , chineseName: "fù", name: "Returning", glyph: "䷗"}
, {kanji: "無妄", chineseName: "wú wàng", name: "Without Embroiling", glyph: "䷘"}
, {kanji: "大畜", chineseName: "dà chù", name: "Great Accumulating", glyph: "䷙"}
, {kanji: "頤"  , chineseName: "yí", name: "Swallowing", glyph: "䷚"}
, {kanji: "大過", chineseName: "dà guò", name: "Great Exceeding", glyph: "䷛"}
, {kanji: "坎"  , chineseName: "kǎn", name: "Gorge", glyph: "䷜"}
, {kanji: "離"  , chineseName: "lí", name: "Radiance", glyph: "䷝"}
, {kanji: "咸"  , chineseName: "xián", name: "Conjoining", glyph: "䷞"}
, {kanji: "恆"  , chineseName: "héng", name: "Persevering", glyph: "䷟"}
, {kanji: "遯"  , chineseName: "dùn", name: "Retiring", glyph: "䷠"}
, {kanji: "大壯", chineseName: "dà zhuàng", name: "Great Invigorating", glyph: "䷡"}
, {kanji: "晉"  , chineseName: "jìn", name: "Prospering", glyph: "䷢"}
, {kanji: "明夷", chineseName: "míng yí", name: "Darkening of the Light", glyph: "䷣"}
, {kanji: "家人", chineseName: "jiā rén", name: "Dwelling People", glyph: "䷤"}
, {kanji: "睽"  , chineseName: "kuí", name: "Polarising", glyph: "䷥"}
, {kanji: "蹇"  , chineseName: "jiǎn", name: "Limping", glyph: "䷦"}
, {kanji: "解"  , chineseName: "xiè", name: "Taking-Apart", glyph: "䷧"}
, {kanji: "損"  , chineseName: "sǔn", name: "Diminishing", glyph: "䷨"}
, {kanji: "益"  , chineseName: "yì", name: "Augmenting", glyph: "䷩"}
, {kanji: "夬"  , chineseName: "guài", name: "Displacement", glyph: "䷪"}
, {kanji: "姤"  , chineseName: "gòu", name: "Coupling", glyph: "䷫"}
, {kanji: "萃"  , chineseName: "cuì", name: "Clustering", glyph: "䷬"}
, {kanji: "升"  , chineseName: "shēng", name: "Ascending", glyph: "䷭"}
, {kanji: "困"  , chineseName: "kùn", name: "Confining", glyph: "䷮"}
, {kanji: "井"  , chineseName: "jǐng", name: "Welling", glyph: "䷯"}
, {kanji: "革"  , chineseName: "gé", name: "Skinning", glyph: "䷰"}
, {kanji: "鼎"  , chineseName: "dǐng", name: "Holding", glyph: "䷱"}
, {kanji: "震"  , chineseName: "zhèn", name: "Shake", glyph: "䷲"}
, {kanji: "艮"  , chineseName: "gèn", name: "Bound", glyph: "䷳"}
, {kanji: "漸"  , chineseName: "jiàn", name: "Infiltrating", glyph: "䷴"}
, {kanji: "歸妹", chineseName: "guī mèi", name: "Converting the Maiden", glyph: "䷵"}
, {kanji: "豐"  , chineseName: "fēng", name: "Abounding", glyph: "䷶"}
, {kanji: "旅"  , chineseName: "lǚ", name: "Sojourning", glyph: "䷷"}
, {kanji: "巽"  , chineseName: "xùn", name: "Ground", glyph: "䷸"}
, {kanji: "兌"  , chineseName: "duì", name: "Open", glyph: "䷹"}
, {kanji: "渙"  , chineseName: "huàn", name: "Dispersing", glyph: "䷺"}
, {kanji: "節"  , chineseName: "jié", name: "Articulating", glyph: "䷻"}
, {kanji: "中孚", chineseName: "zhōng fú", name: "Center Returning", glyph: "䷼"}
, {kanji: "小過", chineseName: "xiǎo guò", name: "Small Exceeding", glyph: "䷽"}
, {kanji: "既濟", chineseName: "jì jì", name: "Already Fording", glyph: "䷾"}
, {kanji: "未濟", chineseName: "wèi jì", name: "Not Yet Fording", glyph: "䷿"}
]

export const model =
{
  coins: new Array(NUMBER_OF_LINES).fill(new Array(NUMBER_OF_COINS).fill(0))
, lines: new Array(NUMBER_OF_LINES).fill(0)
//, lines: [6,9,6,9,6,9]
, currentSelection: {
    r: NUMBER_OF_LINES - 1
  , c: 0
  }
};
