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
  {}
, {}
]

export const model =
{
  coins: new Array(NUMBER_OF_LINES).fill(new Array(NUMBER_OF_COINS).fill(0))
, lines: new Array(NUMBER_OF_LINES).fill(0)
, currentSelection: {
    r: NUMBER_OF_LINES - 1
  , c: 0
  }
, hexagramLookUp
, trigrams
};
