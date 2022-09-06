const hiragana = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'

const kanjiN5 = '日一国人年大十二本中長出三時行見月分後前生五間上東四今金九入学高円子外八六下来気小七山話女北午百書先名川千水半男西電校語土木聞食車何南万毎白天母火右読友左休父雨'

const kanjiN4 = '会同事自社発者地業方新場員立開手力問代明動京目通言理体田主題意不作用度強公持野以思家世多正安院心界教文元重近考画海売知道集別物使品計死特私始朝運終台広住無真有口少町料工建空急止送切転研足究楽起着店病質待試族銀早映親験英医仕去味写字答夜音注帰古歌買悪図週室歩風紙黒花春赤青館屋色走秋夏習駅洋旅服夕借曜飲肉貸堂鳥飯勉冬昼茶弟牛魚兄犬妹姉漢'

const five = [
	['上げる'			,'あげる'			,'to raise; to elevate'],
	['雨'			,'あめ'			,'rain'],
	['上'			,'うえ'			,'above, up'],
	['後'			,'あと'			,'behind; after;'],
	['父'			,'ちち'			,'father'],
	['小さい'			,'ちいさい'		,'small; little; tiny'],
	['大学'			,'だいがく'		,'university; college'],
	['出す'			,'だす'			,'to take out; to get out'],
	['出かける'		,'でかける'		,'to leave; to depart'],
	['電気'			,'でんき'			,'electricity'],
	['電車'			,'でんしゃ'		,'train; electric train'],
	['電話'			,'でんわ'			,'phone call'],
	['出る'			,'でる'			,'to leave; to exit'],
	['二人'			,'ふたり'			,'two people; pair; couple'],
	['二つ'			,'ふたつ'			,'two; 2'],
	['二日'			,'ふつか'			,'the second day of the month / 2 days'],
	['外国'			,'がいこく'		,'foreign country'],
	['外国人'		,'がいこくじん'		,'foreigner'],
	['学校'			,'がっこう'		,'school'],
	['学生'			,'がくせい'		,'student'],
	['五'			,'ご'			,'five; 5'],
	['午前'			,'ごぜん'			,'morning; a.m.'],
	['八'			,'はち'			,'eight; 8'],
	['母'			,'はは'			,'mother'],
	['入る'			,'はいる'			,'to enter; to go into'],
	['半'			,'はん'			,'half; semi-; half-past'],
	['花'			,'はな'			,'flower'],
	['話'			,'はなし'			,'talk; speech; chat; conversation'],
	['話す'			,'はなす'			,'to speak; to talk; to converse'],
	['半分'			,'はんぶん'		,'half'],
	['二十日'		,'はつか'			,'twentieth day of the month / 20 days'],
	['左'			,'ひだり'			,'left; left hand side'],
	['東'			,'ひがし'			,'east'],
	['人'			,'ひと'			,'person; human'],
	['一人'			,'ひとり'			,'one person; alone; single'],
	['一つ'			,'ひとつ'			,'one thing; only'],
	['本'			,'ほん'			,'book; volume; script'],
	['百'			,'ひゃく'			,'hundred; 100'],
	['一'			,'いち'			,'one; best; first'],
	['一日'			,'いちにち'		,'one day; all day'],
	['行く'			,'いく'			,'to go; to move'],
	['今'			,'いま'			,'now; the present time; soon'],
	['入れる'			,'いれる'			,'to put in; to insert'],
	['五日'			,'いつか'			,'the fifth day of the month / 5 days'],
	['五つ'			,'いつつ'			,'five; 5'],
	['十'			,'じゅう'			,'ten; 10'],
	['書く'			,'かく'			,'to write; to draw'],
	['買う'			,'かう'			,'to buy; to purchase'],
	['川'			,'かわ'			,'river; stream'],
	['木'			,'き'			,'tree; wood'],
	['聞く'			,'きく'			,'to hear; to listen; to ask'],
	['北'			,'きた'			,'north'],
	['九日'			,'ここのか'		,'ninth day of the month / 9 days'],
	['九つ'			,'ここのつ'		,'nine; 9'],
	['今月'			,'こんげつ'		,'this month'],
	['今年'			,'ことし'			,'this year'],
	['下さい'			,'ください'		,'please'],
	['国'			,'くに'			,'country'],
	['来る'			,'くる'			,'to come'],
	['車'			,'くるま'			,'car; automobile; vehicle'],
	['今日'			,'きょう'			,'today; this day'],
	['九'			,'きゅう'			,'nine; 9'],
	['前'			,'まえ'			,'previous; before; in front; ago'],
	['毎日'			,'まいにち'		,'every day'],
	['毎年'			,'まいとし'		,'every year; yearly; annually'],
	['毎月'			,'まいつき'		,'every month; monthly'],
	['万'			,'まん'			,'ten thousand; 10,000'],
	['右'			,'みぎ'			,'right; right hand side'],
	['三日'			,'みっか'			,'the third day of the month / 3 days'],
	['南'			,'みなみ'			,'south'],
	['見る'			,'みる'			,'to see; to look; to watch'],
	['見せる'			,'みせる'			,'to show; to display'],
	['三つ'			,'みっつ'			,'three; 3'],
	['水'			,'みず'			,'water; fluid; liquid'],
	['六日'			,'むいか'			,'sixth day of the month / 6 days'],
	['六つ'			,'むっつ'			,'six; 6'],
	['長い'			,'ながい'			,'long'],
	['中'			,'なか'			,'inside; in; center'],
	['名前'			,'なまえ'			,'name'],
	['七つ'			,'ななつ'			,'seven; 7'],
	['何'			,'なに'			,'what'],
	['七日'			,'なのか'			,'seventh day of the month / 7 days'],
	['二'			,'に'			,'two; 2'],
	['西'			,'にし'			,'west'],
	['お母さん'		,'おかあさん'		,'mother'],
	['お金'			,'おかね'			,'money'],
	['女'			,'おんな'			,'woman; female'],
	['女の子'		,'おんなのこ'		,'girl'],
	['大きい'			,'おおきい'		,'big; large; great'],
	['大きな'			,'おおきな'		,'big; large; great'],
	['男'			,'おとこ'			,'man; male'],
	['男の子'		,'おとこのこ'		,'boy'],
	['大人'			,'おとな'			,'adult'],
	['お父さん'		,'おとうさん'		,'father'],
	['来月'			,'らいげつ'		,'next month'],
	['来年'			,'らいねん'		,'next year'],
	['六'			,'ろく'			,'six; 6'],
	['先'			,'さき'			,'previous; first; earlier'],
	['三'			,'さん'			,'three; 3'],
	['千'			,'せん'			,'thousand; 1,000'],
	['先月'			,'せんげつ'		,'last month'],
	['先生'			,'せんせい'		,'teacher; instructor; master'],
	['四'			,'し'			,'four; 4'],
	['七'			,'しち'			,'seven; 7'],
	['白'			,'しろ'			,'white'],
	['下'			,'した'			,'below; down; under; bottom'],
	['外'			,'そと'			,'outside'],
	['食べる'			,'たべる'			,'to eat'],
	['高い'			,'たかい'			,'high; tall; expensive'],
	['天気'			,'てんき'			,'weather'],
	['時'			,'とき'			,'time'],
	['時々'			,'ときどき'		,'sometimes'],
	['十日'			,'とおか'			,'tenth day of the month / 10 days'],
	['年'			,'とし'			,'year; age'],
	['上'			,'うえ'			,'above; up; top'],
	['生まれる'		,'うまれる'		,'to be born'],
	['後ろ'			,'うしろ'			,'back; behind'],
	['分かる'			,'わかる'			,'to understand'],
	['山'			,'やま'			,'mountain'],
	['休み'			,'やすみ'			,'rest; vacation; holiday'],
	['休む'			,'やすむ'			,'to rest'],
	['八つ'			,'やっつ'			,'eight: 8'],
	['四日'			,'よっか'			,'fourth day of the month / 4 days'],
	['読む'			,'よむ'			,'to read'],
	['四つ'			,'よっつ'			,'four; 4'],
	['八日'			,'ようか'			,'eighth day of the month / 8 days'],
]

const four = [
	['上がる'			,'あがる'			,'to rise'],
	['味'			,'あじ'			,'flavor; taste'],
	['赤ちゃん'		,'あかちゃん'		,'baby; infant'],
	['安心'			,'あんしん'		,'peace of mind'],
	['集まる'			,'あつまる'		,'to gather; to collect'],
	['集める'			,'あつめる'		,'to gather; to collect'],
	['僕'			,'ぼく'			,'I'],
	['力'			,'ちから'			,'force; strength; power'],
	['地理'			,'ちり'			,'geography'],
	['中学校'		,'ちゅうがっこう'		,'junior high school; middle school'],
	['注意'			,'ちゅうい'		,'caution'],
	['大分'			,'だいぶ'			,'considerably; greatly; a lot'],
	['大学生'		,'だいがくせい'		,'university student; college student'],
	['大事'			,'だいじ'			,'important; serious; crucial'],
	['大体'			,'だいたい'		,'roughly'],  
	['ご主人'			,'ごしゅじん'		,'your husband; her husband'],
	['運ぶ'			,'はこぶ'			,'to carry'],
	['花見'			,'はなみ'			,'cherry blossom viewing; flower viewing'],
	['発音'			,'はつおん'		,'pronunciation'],
	['火'			,'ひ'			,'fire'],
	['開く'			,'ひらく'			,'to open; to undo; to unseal; to unpack'],
	['昼間'			,'ひるま'			,'daytime; during the day'],
	['昼休み'		,'ひるやすみ'		,'lunch break; noon rest period'],
	['一度'			,'いちど'			,'once; one time'],
	['以外'			,'いがい'			,'with the exception of; excepting'],
	['医学'			,'いがく'			,'medical science; medicine'],
	['以上'			,'いじょう'		,'...and more; ...and upwards'],
	['以下'			,'いか'			,'not exceeding'],
	['意見'			,'いけん'			,'opinion; view; comment'],
	['生き物'		,'いきもの'		,'living thing'],
	['生きる'			,'いきる'			,'to live'],
	['色んな'			,'いろんな'		,'various'],
	['急ぐ'			,'いそぐ'			,'to hurry; to rush; to hasten'],
	['字'			,'じ'			,'character'],
	['時代'			,'じだい'			,'period'],
	['人口'			,'じんこう'		,'population'],
	['人生'			,'じんせい'		,'human life'],
	['十分'			,'じゅうぶん'		,'enough; sufficient; plenty'],
	['帰り'			,'かえり'			,'return; coming back'],
	['会場'			,'かいじょう'		,'assembly hall; meeting place'],
	['会話'			,'かいわ'			,'conversation'],
	['火事'			,'かじ'			,'fire'],
	['考える'			,'かんがえる'		,'to think'], 
	['代わり'			,'かわり'			,'instead; in place'],
	['変わる'			,'かわる'			,'to change'],
	['通う'			,'かよう'			,'to commute'],
	['計画'			,'けいかく'		,'to plan'],
	['見物'			,'けんぶつ'		,'sightseeing; visit'],
	['研究'			,'けんきゅう'		,'research'],
	['研究室'		,'けんきゅうしつ'	,'laboratory'],
	['気'			,'き'			,'spirit'],
	['気分'			,'きぶん'			,'feeling; mood'],
	['聞こえる'		,'きこえる'		,'to be heard; to be said'],
	['気持ち'			,'きもち'			,'feeling'],
	['着物'			,'きもの'			,'kimono'],
	['子'			,'こ'			,'child'],
	['心'			,'こころ'			,'heart'],
	['今度'			,'こんど'			,'this time; next time'],
	['この間'			,'このあいだ'		,'the other day; recently'],
	['今夜'			,'こんや'			,'this evening; tonight'],
	['答え'			,'こたえ'			,'response'],
	['小鳥'			,'ことり'			,'small bird'],
	['校長'			,'こうちょう'		,'principal; headmaster'],
	['工業'			,'こうぎょう'		,'industry'],
	['工場'			,'こうじょう'		,'factory'],
	['高校'			,'こうこう'			,'senior high school; high school'],
	['高校生'		,'こうこうせい'		,'hight school student'],
	['下さる'			,'くださる'		,'(respectful) to give'],
	['空気'			,'くうき'			,'air'],
	['教会'			,'きょうかい'		,'church'],
	['急'			,'きゅう'			,'sudden; unexpected'],
	['急行'			,'きゅうこう'		,'hurrying; rushing'],
	['真ん中'		,'まんなか'		,'middle; centre; center'],
	['見える'			,'みえる'			,'to be seen; to be in sight'],
	['見つかる'		,'みつかる'		,'to discover; to find'],
	['生'			,'なま'			,'raw'],
	['入学'			,'にゅうがく'		,'enrollment'],
	['入院'			,'にゅういん'		,'hospitalization'],
	['お出でになる'	,'おいでになる'		,'(respectful) to be'],
	['行う'			,'おこなう'		,'to perform; to do; to carry out'],
	['起こす'			,'おこす'			,'to wake'],
	['屋上'			,'おくじょう'		,'rooftop'],
	['送る'			,'おくる'			,'to send'],
	['思い出す'		,'おもいだす'		,'to remember'],
	['下りる'			,'おりる'			,'to get off'],
	['音'			,'おと'			,'sound; note'],
	['終わり'			,'おわり'			,'the end'],
	['親'			,'おや'			,'parents'],
	['旅館'			,'りょかん'		,'traditional inn'],
	['下がる'			,'さがる'			,'to get down'],
	['下げる'			,'さげる'			,'to lower'],
	['生物'			,'せいぶつ'		,'living thing'],
	['西洋'			,'せいよう'		,'the west; Western countries'],
	['世界'			,'せかい'			,'the world'],
	['社長'			,'しゃちょう'		,'company president; director'],
	['社会'			,'しゃかい'		,'society; community'],
	['仕方'			,'しかた'			,'way; method'],
	['試験'			,'しけん'			,'examination'],
	['品物'			,'しなもの'		,'goods'],
	['新聞社'		,'しんぶんしゃ'		,'newspaper company'],
	['親切'			,'しんせつ'		,'kindness'],
	['知らせる'		,'しらせる'		,'to notify'],
	['下着'			,'したぎ'			,'underwear'],
	['食料品'		,'しょくりょうひん'	,'food; groceries'],
	['小学校'		,'しょうがっこう'		,'elementary school'],
	['生じる'			,'しょうじる'		,'to produce'],
	['水道'			,'すいどう'		,'water supply'],
	['空く'			,'すく'			,'to be hungry'],
	['正しい'			,'ただしい'		,'right; correct'],
	['台風'			,'たいふう'		,'typhoon'],
	['楽しみ'			,'たのしみ'		,'looking forward to; enjoyment'],
	['足りる'			,'たりる'			,'to be sufficient; to be enough'],
	['足す'			,'たす'			,'to add'],
	['建てる'			,'たてる'			,'to build'],
	['店員'			,'てんいん'		,'employee (of a store); clerk'],
	['特急'			,'とっきゅう'		,'limited express'],
	['特別'			,'とくべつ'		,'special; particular'],
	['特に'			,'とくに'			,'particularly; especially'],
	['止める'			,'とめる'			,'to stop something'],
	['月'			,'つき'			,'moon'],
	['動く'			,'うごく'			,'to move'],
	['生まれ'			,'うまれ'			,'birth'],
	['運転手'		,'うんてんしゅ'		,'driver'],
	['売り場'			,'うりば'			,'selling area'],
	['写す'			,'うつす'			,'to duplicate'],
	['別れる'			,'わかれる'		,'to separate'],
	['止む'			,'やむ'			,'to stop'],
	['用'			,'よう'			,'business; task; errand; use'],
	['用意'			,'ようい'			,'preparation; arrangements'],
	['用事'			,'ようじ'			,'tasks; errand'],

	['下手'			,'へた'			,'unskillful; poor; awkward'],
	['上手'			,'じょうず'		,'skillful; skilled; good (at)'],
	['手'			,'て'			,'hand; arm'],
	['立つ'			,'たつ'			,'to stand; to stand up'],
	['手紙'			,'てがみ'			,'letter'],
	['夜'			,'よる'			,'evening; night'],
]
