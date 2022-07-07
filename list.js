const hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'

const five = [
	['上げる', 'あげる', 'to raise; to elevate'],
	['雨', 'あめ', 'rain'],
	['上', 'うえ', 'above, up'],
	['後', 'あと', 'behind; after;'],
	['父', 'ちち', 'father'],
	['小さい', 'ちいさい', 'small; little; tiny'],
	['大学', 'だいがく', 'university; college'],
	['出す', 'だす', 'to take out; to get out'],
	['出かける', 'でかける', 'to leave; to depart'],
	['電気', 'でんき', 'electricity'],
	['電車', 'でんしゃ', 'train; electric train'],
	['電話', 'でんわ', 'phone call'],
	['出る', 'でる', 'to leave; to exit'],
	['二人', 'ふたり', 'two people; pair; couple'],
	['二つ', 'ふたつ', 'two; 2'],
	['二日', 'ふつか', 'the second day of the month / 2 days'],
	['外国', 'がいこく', 'foreign country'],
	['外国人', 'がいこくじん', 'foreigner'],
	['学校', 'がっこう', 'school'],
	['学生', 'がくせい', 'student'],
	['五', 'ご', 'five; 5'],
	['午前', 'ごぜん', 'morning; a.m.'],
	['八', 'はち', 'eight; 8'],
	['母', 'はは', 'mother'],
	['入る', 'はいる', 'to enter; to go into'],
	['半', 'はん', 'half; semi-; half-past'],
	['花', 'はな', 'flower'],
	['話', 'はなし', 'talk; speech; chat; conversation'],
	['話す', 'はなす', 'to speak; to talk; to converse'],
	['半分', 'はんぶん', 'half'],
	['二十日', 'はつか', 'twentieth day of the month / 20 days'],
	['左', 'ひだり', '	left; left hand side'],
	['東', 'ひがし', 'east'],
	['人', 'ひと', 'person; human'],
	['一人', 'ひとり', 'one person; alone; single'],
	['一つ', 'ひとつ', 'one thing; only'],
	['本', 'ほん', 'book; volume; script'],
	['百', 'ひゃく', 'hundred; 100'],
	['一', 'いち', 'one; best; first'],
	['一日', 'いちにち', 'one day; all day'],
	['行く', 'いく', 'to go; to move'],
	['今', 'いま', 'now; the present time; soon'],
	['入れる', 'いれる', 'to put in; to insert'],
	['五日', 'いつか', 'the fifth day of the month / 5 days'],
	['五つ', 'いつつ', 'five; 5'],
	['十', 'じゅう', 'ten; 10'],
	['書く', 'かく', 'to write; to draw'],
	['買う', 'かう', 'to buy; to purchase'],
	['川', 'かわ', 'river; stream'],
	['木', 'き', 'tree; wood'],
	['聞く', 'きく', 'to hear; to listen; to ask'],
	['北', 'きた', 'north'],
	['九日', 'ここのか', 'ninth day of the month / 9 days'],
	['九つ', 'ここのつ', 'nine; 9'],
	['今月', 'こんげつ', 'this month'],
	['今年', 'ことし', 'this year'],
	['下さい', 'ください', 'please'],
	['国', 'くに', 'country'],
	['来る', 'くる', 'to come'],
	['車', 'くるま', 'car; automobile; vehicle'],
	['今日', 'きょう', 'today; this day'],
	['九', 'きゅう', 'nine; 9'],
	['前', 'まえ', 'previous; before; in front; ago'],
	['毎日', 'まいにち', 'every day'],
	['毎年', 'まいとし', 'every year; yearly; annually'],
	['毎月', 'まいつき', 'every month; monthly'],
	['万', 'まん', 'ten thousand; 10,000'],
	['右', 'みぎ', 'right; right hand side'],
	['三日', 'みっか', 'the third day of the month / 3 days'],
	['南', 'みなみ', 'south'],
	['見る', 'みる', 'to see; to look; to watch'],
	['見せる', 'みせる', 'to show; to display'],
	['三つ', 'みっつ', 'three; 3'],
	['水', 'みず', 'water; fluid; liquid'],
	['六日', 'むいか', 'sixth day of the month / 6 days'],
	['六つ', 'むっつ', 'six; 6'],
	['長い', 'ながい', 'long'],
	['中', 'なか', 'inside; in; center'],
	['名前', 'なまえ', 'name'],
	['七つ', 'ななつ', 'seven; 7'],
	['何', 'なに', 'what'],
	['七日', 'なのか', 'seventh day of the month / 7 days'],
	['二', 'に', 'two; 2'],
	['西', 'にし', 'west'],
	['お母さん', 'おかあさん', 'mother'],
	['お金', 'おかね', 'money'],
	['女', 'おんな', 'woman; female'],
	['女の子', 'おんなのこ', 'girl'],
	['大きい', 'おおきい', 'big; large; great'],
	['大きな', 'おおきな', 'big; large; great'],
	['男', 'おとこ', 'man; male'],
	['男の子', 'おとこのこ', 'boy'],
	['大人', 'おとな', 'adult'],
	['お父さん', 'おとうさん', 'father'],
	['来月', 'らいげつ', 'next month'],
	['来年', 'らいねん', 'next year'],
	['六', 'ろく', 'six; 6'],
	['先', 'さき', 'previous; first; earlier'],
	['三', 'さん', 'three; 3'],
	['千', 'せん', 'thousand; 1,000'],
	['先月', 'せんげつ', 'last month'],
	['先生', 'せんせい', 'teacher; instructor; master'],
	['四', 'し', 'four; 4'],
	['七', 'しち', 'seven; 7'],
	['白', 'しろ', 'white'],
	['下', 'した', 'below; down; under; bottom'],
	['外', 'そと', 'outside'],
	['食べる', 'たべる', 'to eat'],
	['高い', 'たかい', 'high; tall; expensive'],
	['天気', 'てんき', 'weather'],
	['時', 'とき', 'time'],
	['時々', 'ときどき', 'sometimes'],
	['十日', 'とおか', 'tenth day of the month / 10 days'],
	['年', 'とし', 'year; age'],
	['上', 'うえ', 'above; up; top'],
	['生まれる', 'うまれる', 'to be born'],
	['後ろ', 'うしろ', 'back; behind'],
	['分かる', 'わかる', 'to understand'],
	['山', 'やま', 'mountain'],
	['休み', 'やすみ', 'rest; vacation; holiday'],
	['休む', 'やすむ', 'to rest'],
	['八つ', 'やっつ', 'eight: 8'],
	['四日', 'よっか', 'fourth day of the month / 4 days'],
	['読む', 'よむ', 'to read'],
	['四つ', 'よっつ', 'four; 4'],
	['八日', 'ようか', 'eighth day of the month / 8 days'],
]

const four = [
	['下手', 'へた', 'unskillful; poor; awkward'],
	['上手', 'じょうず', 'skillful; skilled; good (at)'],
	['手', 'て', 'hand; arm'],
	['立つ', 'たつ', 'to stand; to stand up'],
	['手紙', 'てがみ', 'letter'],
	['夜', 'よる', 'evening; night'],
	['', '', ''],
	['', '', ''],
	['', '', ''],
	['', '', ''],
	['', '', ''],
	['', '', ''],
]
