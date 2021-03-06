//PokerPlayback
var PokerPlayback = function (io) {
    var playerPositions = [
        {},
        {name : {x : 320, y : 800}, icon : {x : 320, y : 870}, chips : {x : 320, y : 940}, dealer : {x : 380, y : 840}, blind : {x : 340, y : 680}, bet : {x : 320, y : 760}, holecard : [{x : 295, y : 870}, {x : 336, y : 870}], bubble : {x : 320, y : 800},win : {x : 320, y : 800}},
        {name : {x : 60, y : 620}, icon : {x : 60, y : 690}, chips : {x : 60, y : 760}, dealer : {x : 120, y : 660}, blind : {x : 130, y : 630}, bet : {x : 140, y : 720}, holecard : [{x : 38, y : 700}, {x : 80, y : 700}], bubble : {x : 60, y : 620},win : {x : 60, y : 620}},
        {name : {x : 60, y : 410}, icon : {x : 60, y : 480}, chips : {x : 60, y : 550}, dealer : {x : 120, y : 450}, blind : {x : 130, y : 430}, bet : {x : 140, y : 510}, holecard : [{x : 38, y : 480}, {x : 80, y : 480}], bubble : {x : 60, y : 410},win : {x : 60, y : 410}},
        {name : {x : 60, y : 200}, icon : {x : 60, y : 270}, chips : {x : 60, y : 340}, dealer : {x : 120, y : 240}, blind : {x : 130, y : 230}, bet : {x : 140, y : 300}, holecard : [{x : 38, y : 270}, {x : 80, y : 270}], bubble : {x : 60, y : 200},win : {x : 60, y : 200}},
        {name : {x : 220, y : 20}, icon : {x : 220, y : 90}, chips : {x : 220, y : 160}, dealer : {x : 280, y : 55}, blind : {x : 240, y : 150}, bet : {x : 220, y : 220}, holecard : [{x : 193, y : 90}, {x : 236, y : 90}], bubble : {x : 220, y : 20},win : {x : 220, y : 20}},
        {name : {x : 420, y : 20}, icon : {x : 420, y : 90}, chips : {x : 420, y : 160}, dealer : {x : 480, y : 55}, blind : {x : 400, y : 150}, bet : {x : 420, y : 220}, holecard : [{x : 394, y : 90}, {x : 436, y : 90}], bubble : {x : 420, y : 20},win : {x : 420, y : 20}},
        {name : {x : 580, y : 200}, icon : {x : 580, y : 270}, chips : {x : 580, y : 340}, dealer : {x : 520, y : 240}, blind : {x : 510, y : 230}, bet : {x : 500, y : 300}, holecard : [{x : 560, y : 270}, {x : 605, y : 270}], bubble : {x : 580, y : 200},win : {x : 580, y : 200}},
        {name : {x : 580, y : 410}, icon : {x : 580, y : 480}, chips : {x : 580, y : 550}, dealer : {x : 520, y : 450}, blind : {x : 510, y : 430}, bet : {x : 500, y : 510}, holecard : [{x : 560, y : 480}, {x : 605, y : 480}], bubble : {x : 580, y : 410},win : {x : 580, y : 410}},
        {name : {x : 580, y : 620}, icon : {x : 580, y : 690}, chips : {x : 580, y : 760}, dealer : {x : 520, y : 660}, blind : {x : 510, y : 630}, bet : {x : 500, y : 720}, holecard : [{x : 560, y : 700}, {x : 605, y : 700}], bubble : {x : 580, y : 620},win : {x : 580, y : 620}}
      ],
      playerPositions5 = [
        {},
        {name : {x : 320, y : 800}, icon : {x : 320, y : 870}, chips : {x : 320, y : 940}, dealer : {x : 380, y : 840}, blind : {x : 340, y : 680}, bet : {x : 320, y : 760}, holecard : [{x : 295, y : 870}, {x : 336, y : 870}], bubble : {x : 320, y : 800}, win : {x : 320, y : 800}},
        {name : {x : 60, y : 620}, icon : {x : 60, y : 690}, chips : {x : 60, y : 760}, dealer : {x : 120, y : 660}, blind : {x : 130, y : 630}, bet : {x : 140, y : 720}, holecard : [{x : 38, y : 700}, {x : 80, y : 700}], bubble : {x : 60, y : 620}, win : {x : 60, y : 620}},
        {name : {x : 60, y : 200}, icon : {x : 60, y : 270}, chips : {x : 60, y : 340}, dealer : {x : 120, y : 240}, blind : {x : 130, y : 230}, bet : {x : 140, y : 300}, holecard : [{x : 38, y : 270}, {x : 80, y : 270}], bubble : {x : 60, y : 200}, win : {x : 60, y : 200}},
        {name : {x : 580, y : 200}, icon : {x : 580, y : 270}, chips : {x : 580, y : 340}, dealer : {x : 520, y : 240}, blind : {x : 510, y : 230}, bet : {x : 500, y : 300}, holecard : [{x : 560, y : 270}, {x : 605, y : 270}], bubble : {x : 580, y : 200}, win : {x : 580, y : 200}},
        {name : {x : 580, y : 620}, icon : {x : 580, y : 690}, chips : {x : 580, y : 760}, dealer : {x : 520, y : 660}, blind : {x : 510, y : 630}, bet : {x : 500, y : 720}, holecard : [{x : 560, y : 700}, {x : 605, y : 700}], bubble : {x : 580, y : 620}, win : {x : 580, y : 620}},
      ],
      potPosition = {x : 325, y : 350},
      boardPositions = [
            {x : 190, y : 580},
            {x : 256, y : 580},
            {x : 322, y : 580},
            {x : 398, y : 580},
            {x : 465, y : 580}
        ];
    var  i, record = recordHelper.data, table = record.STAGE.TABLE, seats = table.SEAT, pokercard = record.STAGE.POKERCARD;
    if (table.SEATS == 5) {
        playerPositions = playerPositions5;
    }
    io.setBGImage('res/bg.jpg');
    io.addGroup('table'); //头像、名称、筹码组
    //io.addGroup('dinamic'); //可变物体
    /*for (i = 0; i < playerPositions.length; i++) { //占位背景
        io.addToGroup('table',
            new iio.SimpleRect(playerPositions[i].icon, 120, 150)
                    .setFillStyle('white')
                    .setAlpha(.1)
            );
    };*/
    function initTable() {
        recordHelper.echo(record.STAGE.TITLE + '-' + table.TITLE + ' ' + record.STAGE.TIME);
        recordHelper.echo('庄家座位号: #' + table.DEALER);
	    for (i = 0; i < seats.length; i++) {
            recordHelper.echo('座位#' + seats[i].NUMBER + ':' + seats[i].NAME + '(' + seats[i].CHIPS + ' 筹码)');
	        (function(pos){
	            playerPositions[seats[i].NUMBER].icon.obj = new iio.Circle(playerPositions[seats[i].NUMBER].icon, 40)
	                                        .setStrokeStyle('white',2)
	                                        .addImage(seats[i].ICON, function(){
	                                                                io.addToGroup('table',playerPositions[pos].icon.obj);
	                                                            }); // 头像
	        })(seats[i].NUMBER);

	        playerPositions[seats[i].NUMBER].name.obj = new iio.Text(seats[i].NAME, playerPositions[seats[i].NUMBER].name)
	                                    .setFont('16px Microsoft YaHei')
	                                    .setTextAlign('center')
	                                    .setFillStyle('white'); // 名称
	        io.addToGroup('table', playerPositions[seats[i].NUMBER].name.obj);
	        playerPositions[seats[i].NUMBER].chips.objBG = new iio.SimpleRect(playerPositions[seats[i].NUMBER].chips.x, playerPositions[seats[i].NUMBER].chips.y - 5, 80, 20)
	                                        .setFillStyle('black')
	                                        .setAlpha(.3); // 筹码背景
	        io.addToGroup('table', playerPositions[seats[i].NUMBER].chips.objBG);
	        playerPositions[seats[i].NUMBER].chips.obj = new iio.Text(recordHelper.chipsFormat(seats[i].CHIPS), playerPositions[seats[i].NUMBER].chips)
	                                    .setFont('16px Microsoft YaHei')
	                                    .setTextAlign('center')
	                                    .setFillStyle('white'); // 筹码
            playerPositions[seats[i].NUMBER].chips.obj.chips = seats[i].CHIPS;
	        io.addToGroup('table', playerPositions[seats[i].NUMBER].chips.obj);
	    };

	    for (i = 1; i < playerPositions.length; i++) {
	    	if (typeof playerPositions[i].icon.obj == 'undefined' ) {
	    		(function(pos){
	    			playerPositions[i].icon.obj = new iio.Circle(playerPositions[i].icon, 41)
	    			                                  .addImage('res/empty.png',function(){
	    			                                  	    io.addToGroup('table',playerPositions[pos].icon.obj);
	    			                                  }); //空闲头像
	    		})(i);
	    	}
	    };

	    playerPositions[table.DEALER].dealer.obj = new iio.SimpleRect(playerPositions[table.DEALER].dealer,20)
	                                            .addImage('res/dealer.png',function(){
	                                            	io.addToGroup('table',playerPositions[table.DEALER].dealer.obj);
	                                            }); // 庄家标识
	    
	    potPosition.objBG = new iio.SimpleRect(potPosition,127,44)
	                            .addImage('res/pot.png',function(){
	                            	io.addToGroup('table',potPosition.objBG);
	                            });
	    potPosition.obj = new iio.Text('0', potPosition.x + 20,potPosition.y + 7)
	                            .setFont('20px Microsoft YaHei')
	                            .setTextAlign('center')
	                            .setFillStyle('white'); // 奖池
        potPosition.obj.chips = 0;
	    io.addToGroup('table', potPosition.obj);
    }
    

    function blindShow(callback) { //盲注展示
        recordHelper.echo('<br/>');
        recordHelper.echo('#' + table.SBLIND.NUMBER + ' 小盲注 ' + table.SBLIND.CHIPS);
        recordHelper.echo('#' + table.BBLIND.NUMBER + ' 大盲注 ' + table.BBLIND.CHIPS);
        recordHelper.echo('<br/>');
    	playerPositions[table.SBLIND.NUMBER].bet.objBG = new iio.SimpleRect(playerPositions[table.SBLIND.NUMBER].bet.x,playerPositions[table.SBLIND.NUMBER].bet.y - 30,28)
    	                                                    .setAlpha(0)
    	                                                    .fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
                                                                recordHelper.soundPlay('chipThrow');
    	                                                    	io.addToGroup('table',playerPositions[table.SBLIND.NUMBER].bet.objBG);
    	                                                    });
        playerPositions[table.SBLIND.NUMBER].bet.obj = new iio.Text(recordHelper.chipsFormat(table.SBLIND.CHIPS), playerPositions[table.SBLIND.NUMBER].bet)
                                                .setFont('16px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.2); // 小盲注
        playerPositions[table.SBLIND.NUMBER].bet.obj.chips = table.SBLIND.CHIPS;
        io.addToGroup('table', playerPositions[table.SBLIND.NUMBER].bet.obj);
        // minus chips
        if (typeof playerPositions[table.SBLIND.NUMBER].chips.obj != 'undefined') {
            var sblind = parseFloat(playerPositions[table.SBLIND.NUMBER].chips.obj.chips) - parseFloat(table.SBLIND.CHIPS);
            playerPositions[table.SBLIND.NUMBER].chips.obj.chips = sblind;
            playerPositions[table.SBLIND.NUMBER].chips.obj.setText(recordHelper.chipsFormat(sblind));
        }

        playerPositions[table.BBLIND.NUMBER].bet.objBG = new iio.SimpleRect(playerPositions[table.BBLIND.NUMBER].bet.x,playerPositions[table.BBLIND.NUMBER].bet.y - 30,28)
    	                                                    .setAlpha(0)
    	                                                    .fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
                                                                recordHelper.soundPlay('chipThrow');
    	                                                    	io.addToGroup('table',playerPositions[table.BBLIND.NUMBER].bet.objBG);
    	                                                    });
        playerPositions[table.BBLIND.NUMBER].bet.obj = new iio.Text(recordHelper.chipsFormat(table.BBLIND.CHIPS), playerPositions[table.BBLIND.NUMBER].bet)
                                                .setFont('16px Microsoft YaHei')
                                                .setTextAlign('center')
                                                .setFillStyle('white')
                                                .setAlpha(0)
                                                .fadeIn(.2); // 大盲注
        playerPositions[table.BBLIND.NUMBER].bet.obj.chips = table.BBLIND.CHIPS;
        io.addToGroup('table', playerPositions[table.BBLIND.NUMBER].bet.obj);
        // minus chips
        if (typeof playerPositions[table.SBLIND.NUMBER].chips.obj != 'undefined') {
            var bblind = parseFloat(playerPositions[table.BBLIND.NUMBER].chips.obj.chips) - parseFloat(table.BBLIND.CHIPS);
            playerPositions[table.BBLIND.NUMBER].chips.obj.chips = bblind;
            playerPositions[table.BBLIND.NUMBER].chips.obj.setText(recordHelper.chipsFormat(bblind));
        }

        if(callback){callback();}
    }

    function holecardShow(callback) { //底牌展示
        var holecard = pokercard.HOLECARD;
        if (typeof holecard.length == 'undefined') {
            holecard = [holecard];
        }
        for (var i = 0; i < holecard.length; i++) {
            recordHelper.echo('<br/>');
            recordHelper.echoHolecard(holecard[i]);
            recordHelper.echo('<br/>');
            (function(pos){
                var cards = holecard[i].CARD.split(' ');
                playerPositions[holecard[i].NUMBER].holecard[0].obj = new iio.SimpleRect(playerPositions[holecard[i].NUMBER].holecard[0], 66, 95)
                                            .rotate(-Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/'+cards[0]+'.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                                }); // 底牌1
                playerPositions[holecard[i].NUMBER].holecard[1].obj = new iio.SimpleRect(playerPositions[holecard[i].NUMBER].holecard[1], 66, 95)
                                            .rotate(Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/'+cards[1]+'.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                                }); // 底牌2
            })(holecard[i].NUMBER);
        };
        for (var i = 1; i < playerPositions.length; i++) {
        	if (typeof playerPositions[i].holecard[1].obj == 'undefined' && typeof playerPositions[i].name.obj != 'undefined') {
        		(function(pos){
                     playerPositions[i].holecard[1].obj = new iio.SimpleRect(playerPositions[i].holecard[1].x, playerPositions[i].holecard[1].y + 20, 44, 41)
        		                                            .addImage('res/closecard.png',function(){
                                                                io.addToGroup('table',playerPositions[pos].holecard[1].obj);
        		                                            });
        		})(i);
        	}
        };

        if(callback){callback();}
    }

    function preFlopShow(callback) { //preflop阶段下注
        var players = pokercard.PREFLOP.PLAYER;
        bubbleClear();
        //bet(players);

        if(callback){callback();}
    }
    
    function flopShow(callback) { //flop阶段下注
        var players = pokercard.FLOP.PLAYER, cards = pokercard.FLOP.CARD.split(' '), pot = pokercard.FLOP.POT;
        bubbleClear();
        // 展示三张牌
        recordHelper.echo('--- 发翻牌 [' + recordHelper.card2str(cards[0]) + recordHelper.card2str(cards[1]) + recordHelper.card2str(cards[2]) + '] ---');
        for (var i = 0; i < cards.length; i++) {
        	(function(pos){
                boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 66, 95)
                                        .addImage('res/'+cards[i]+'.png', function(){
                                                    setTimeout(function(){
                                                        io.addToGroup('table',boardPositions[pos].obj);
                                                    },200*pos);
                                                });
            })(i);
        };
        // 下注
        bet2pot(pot);
        //bet(players);

        if(callback){callback();}
    }

    function turnShow(callback) {
        var players = pokercard.TURN.PLAYER, card = pokercard.TURN.CARD, pot = pokercard.TURN.POT;
        bubbleClear();
        // 展示第四张牌
        recordHelper.echo('--- 发转牌 [' + recordHelper.card2str(card) + '] ---');
        boardPositions[3].obj = new iio.SimpleRect(boardPositions[3], 66, 95)
                                        .addImage('res/'+card+'.png', function(){
                                                    io.addToGroup('table',boardPositions[3].obj);
                                                });
        // 下注
        bet2pot(pot);
        //bet(players);

        if(callback){callback();}
    }

    function riverShow(callback) {
    	var players = pokercard.RIVER.PLAYER, card = pokercard.RIVER.CARD, pot = pokercard.RIVER.POT;
    	bubbleClear();
    	// 展示第五张牌
        recordHelper.echo('--- 发河牌 [' + recordHelper.card2str(card) + '] ---');
    	boardPositions[4].obj = new iio.SimpleRect(boardPositions[4], 66, 95)
                                        .addImage('res/'+card+'.png', function(){
                                                    io.addToGroup('table',boardPositions[4].obj);
                                                });
    	// 下注
    	bet2pot(pot);
    	//bet(players);

        if(callback){callback();}
    }

    function showDown() {
    	bubbleClear();
        bet2pot();

    	var players = record.STAGE.SHOWDOWN.PLAYER;
        recordHelper.echo('--- 亮牌 ---');
        recordHelper.soundPlay('cardOpen');
    	for (var i = 0; i < players.length; i++) {
            recordHelper.echoHolecard(players[i]);
    		if (typeof playerPositions[players[i].NUMBER].holecard[0].obj == 'undefined') { // 亮底牌
    			var cards = players[i].CARD.split(' ');
    			(function(pos, cards){
	                playerPositions[pos].holecard[0].obj = new iio.SimpleRect(playerPositions[pos].holecard[0], 66, 95)
	                                            .rotate(-Math.PI/36)
	                                            .setAlpha(0)
	                                            .fadeIn(.02)
	                                            .addImage('res/'+cards[0]+'.png', function(){
	                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
	                                                                }); // 底牌1
	                playerPositions[pos].holecard[1].obj = new iio.SimpleRect(playerPositions[pos].holecard[1], 66, 95)
	                                            .rotate(Math.PI/36)
	                                            .setAlpha(0)
	                                            .fadeIn(.02)
	                                            .addImage('res/'+cards[1]+'.png', function(){
	                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
	                                                                }); // 底牌2
	            })(players[i].NUMBER,cards);
    		}
    		// 显示牌型
    		playerPositions[players[i].NUMBER].chips.objBG = new iio.SimpleRect(playerPositions[players[i].NUMBER].chips.x, playerPositions[players[i].NUMBER].chips.y - 5, 80, 20)
    		                                                     .setFillStyle('yellow');
	        io.addToGroup('table',playerPositions[players[i].NUMBER].chips.objBG);
	        playerPositions[players[i].NUMBER].chips.obj = new iio.Text(players[i].DESCRP, playerPositions[players[i].NUMBER].chips)
	                                                           .setFont('16px Microsoft YaHei')
	                                                           .setTextAlign('center')
	                                                           .setFillStyle('black');
	        io.addToGroup('table',playerPositions[players[i].NUMBER].chips.obj);
    		// 展示所赢筹码
            if (typeof players[i].ACTION != 'undefined') {
                (function(pos){
                    playerPositions[players[i].NUMBER].win.objBG = new iio.SimpleRect(playerPositions[players[i].NUMBER].win.x, playerPositions[players[i].NUMBER].win.y + 50, 108, 61)
                                                                     .enableKinematics()
                                                                     .setVel(0,-0.5)
                                                                     .setBound('top',playerPositions[players[i].NUMBER].win.y - 50,function(o){
                                                                        // playerPositions[pos].win.objBG.stopKinematics();
                                                                        // playerPositions[pos].win.obj.stopKinematics();
                                                                        // io.rmvObj(playerPositions[pos].win.objBG);
                                                                         io.rmvObj(playerPositions[pos].win.obj);
                                                                         playerPositions[pos].win.obj = undefined;
                                                                        // playerPositions[pos].win.objBG = undefined;

                                                                     })
                                                                     .addImage('res/win.png', function(){
                                                                        io.addToGroup('table',playerPositions[pos].win.objBG);
                                                                        io.addToGroup('table',playerPositions[pos].win.obj);
                                                                     });
                    playerPositions[players[i].NUMBER].win.obj = new iio.Text(players[i].ACTION, playerPositions[players[i].NUMBER].win.x, playerPositions[players[i].NUMBER].win.y + 65)
                                                                   .enableKinematics()
                                                                   .setVel(0,-0.5)
                                                                   .setFont('16px Microsoft YaHei')
                                                                   .setTextAlign('center')
                                                                   .setFillStyle('white');
                    //筹码位置加皇冠
                    playerPositions[players[i].NUMBER].bet.objBG =  new iio.SimpleRect(playerPositions[players[i].NUMBER].bet.x,playerPositions[players[i].NUMBER].bet.y - 30,50,40)
                                                                .setAlpha(0)
                                                                .fadeIn(.2)
                                                                .addImage('res/crown.png',function(){
                                                                    io.addToGroup('table',playerPositions[pos].bet.objBG);
                                                                });
                    //筹码位置显示赢取的筹码
                    playerPositions[players[i].NUMBER].bet.obj = new iio.Text(players[i].ACTION, playerPositions[players[i].NUMBER].bet)
                                                                   .setFont('16px Microsoft YaHei')
                                                                   .setTextAlign('center')
                                                                   .setFillStyle('white');
                    io.addToGroup('table',playerPositions[players[i].NUMBER].bet.obj);
                    })(players[i].NUMBER);
            }

            //清空奖池
            //io.rmvObj(potPosition.obj);
            potPosition.obj.text = 0;

    	};
        recordHelper.echo('--- 得分 ---');
        for (var i = 0; i < players.length; i++) {
            if (typeof players[i].ACTION != 'undefined') {
                recordHelper.echo(players[i].NAME + '【' + players[i].DESCRP + '】 赢得 ' + players[i].ACTION);
            }
        };
    }

    function actionStatus(action) { // call 2 to 4 raise 2 to 4 folds
    	var parseStr = action.toLowerCase().split(' '), ret = {};
        ret.status = parseStr[0];
        if (parseStr[1]) {
        	ret.money = parseStr[1];
        }
        //console.log(ret);
        return ret; //{status: 'raise',money:10}
    }

    function bet(players) { //玩家下注
        /*var pos = 0;

        function execute(player) {
            if (typeof player == 'undefined') {
                pos = 1;
                return;
            }
            recordHelper.echoBet(player);
            var playerPosition = playerPositions[player.NUMBER];
            pos++;
            var action = actionStatus(player.ACTION);
            switch(action.status) {
                case 'raise':
                case 'call':
                case 'allin':
                        if (typeof playerPosition.bubble.obj == 'undefined') {
                        	playerPosition.bubble.obj = new iio.SimpleRect(playerPosition.bubble, 82, 54)
                                                                .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                                                .addImage('res/'+action.status+'.png',function(){
                                                                	io.addToGroup('table',playerPosition.bubble.obj);
                                                                })
                                                                .enableUpdates(function(obj,dt,player){
                                                                      if(obj.pos.y < player[1]){
                                                                               obj.pos.y = player[1];
                                                                               //timeControl(function(){
                                                                                execute(player[0]);
                                                                               //},2000);
                                                                      }else if (obj.pos.y > player[1]){
                                                                            obj.pos.y -= .8;
                                                                      }
                                                                      return true;
                                                                },[players[pos],playerPosition.bubble.y]); // 气泡
                        } else{
                        	playerPosition.bubble.obj
                        	                .addImage('res/'+action.status+'.png')
                        		            .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                        		            .enableUpdates(function(obj,player){
                                                                  if(obj.pos.y < player[1]){
                                                                           obj.pos.y = player[1];
                                                                           //timeControl(function(){
                                                                                execute(player[0]);
                                                                              // },2000);
                                                                  }else if (obj.pos.y > player[1]){
                                                                        obj.pos.y -= .8;
                                                                  }
                                                                  return true;
                                                            },[players[pos],playerPosition.bubble.y]);
                        }
                        
                        // plus bet
                        if (typeof playerPosition.bet.obj == 'undefined') {
                        	playerPosition.bet.objBG = new iio.SimpleRect(playerPosition.bet.x,playerPosition.bet.y - 30,28)
    	                                                    //.setAlpha(0)
    	                                                    //.fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
    	                                                    	io.addToGroup('table',playerPosition.bet.objBG);
    	                                                    });
                            playerPosition.bet.obj = new iio.Text(action.money, playerPosition.bet)
                                                        .setFont('16px Microsoft YaHei')
		                                                .setTextAlign('center')
		                                                .setFillStyle('white');
                            io.addToGroup('table', playerPosition.bet.obj);
                        } else {
                            playerPosition.bet.obj.setText(parseFloat(playerPosition.bet.obj.text) + parseFloat(action.money));
                        }
                        // minus chips
                        if (typeof playerPosition.chips.obj != 'undefined') {
                            playerPosition.chips.obj.setText(parseFloat(playerPosition.chips.obj.text) - parseFloat(action.money));
                        }
                    break;
                case 'check':
                case 'folds':
                    if (typeof playerPosition.bubble.obj == 'undefined') {
                        	playerPosition.bubble.obj = new iio.SimpleRect(playerPosition.bubble, 82, 54)
                                                                .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                                                .addImage('res/'+action.status+'.png',function(){
                                                                	io.addToGroup('table',playerPosition.bubble.obj);
                                                                })
                                                                .enableUpdates(function(obj,dt,player){
                                                                      if(obj.pos.y < player[1]){
                                                                               obj.pos.y = player[1];
                                                                               //timeControl(function(){
                                                                                execute(player[0]);
                                                                               //},2000);
                                                                      }else if (obj.pos.y > player[1]){
                                                                            obj.pos.y -= .8;
                                                                      }
                                                                      return true;
                                                                },[players[pos],playerPosition.bubble.y]); // 气泡
                        } else{
                        	playerPosition.bubble.obj
                        	                .addImage('res/'+action.status+'.png')
                        		            .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                        		            .enableUpdates(function(obj,player){
                                                                  if(obj.pos.y < player[1]){
                                                                           obj.pos.y = player[1];
                                                                           //timeControl(function(){
                                                                                execute(player[0]);
                                                                               //},2000);
                                                                  }else if (obj.pos.y > player[1]){
                                                                        obj.pos.y -= .8;
                                                                  }
                                                                  return true;
                                                            },[players[pos],playerPosition.bubble.y]);
                        }
                    break;
            }
            
        }
        execute(players[0]);*/

        for (var i = 0; i < players.length; i++) {
            var player = players[i];//{NUMBER : players[i].NUMBER, NAME : players[i].NAME, ACTION : players[i].ACTION};
            timeControl.add({fn:execute,param:player,during : recordHelper.interval.bet});
        };
    }

    function execute(player) {
        recordHelper.echoBet(player);
        var playerPosition = playerPositions[player.NUMBER];
        var action = actionStatus(player.ACTION);
        switch(action.status) {
            case 'raise':
            case 'call':
            case 'allin':
                    recordHelper.soundPlay('chipThrow');
                    if (typeof playerPosition.bubble.obj == 'undefined') {
                        playerPosition.bubble.obj = new iio.SimpleRect(playerPosition.bubble, 82, 54)
                                                            .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                                            .addImage('res/'+action.status+'.png',function(){
                                                                io.addToGroup('table',playerPosition.bubble.obj);
                                                            })
                                                            .enableUpdates(function(obj,dt,player){
                                                                  if(obj.pos.y < player[1]){
                                                                           obj.pos.y = player[1];
                                                                  }else if (obj.pos.y > player[1]){
                                                                        obj.pos.y -= .8;
                                                                  }
                                                                  return true;
                                                            },[0,playerPosition.bubble.y]); // 气泡
                    } else{
                        playerPosition.bubble.obj
                                        .addImage('res/'+action.status+'.png')
                                        .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                        .enableUpdates(function(obj,player){
                                                              if(obj.pos.y < player[1]){
                                                                       obj.pos.y = player[1];
                                                              }else if (obj.pos.y > player[1]){
                                                                    obj.pos.y -= .8;
                                                              }
                                                              return true;
                                                        },[0,playerPosition.bubble.y]);
                    }
                    
                    // plus bet
                    if (typeof playerPosition.bet.obj == 'undefined') {
                        playerPosition.bet.objBG = new iio.SimpleRect(playerPosition.bet.x,playerPosition.bet.y - 30,28)
                                                        .addImage('res/chips.png',function(){
                                                            io.addToGroup('table',playerPosition.bet.objBG);
                                                        });
                        playerPosition.bet.obj = new iio.Text(recordHelper.chipsFormat(action.money), playerPosition.bet)
                                                    .setFont('16px Microsoft YaHei')
                                                    .setTextAlign('center')
                                                    .setFillStyle('white');
                        playerPosition.bet.obj.chips = action.money;
                        io.addToGroup('table', playerPosition.bet.obj);
                    } else {
                        var chips = parseFloat(playerPosition.bet.obj.chips) + parseFloat(action.money);
                        playerPosition.bet.obj.chips = chips;
                        playerPosition.bet.obj.setText(recordHelper.chipsFormat(chips));
                    }
                    // minus chips
                    if (typeof playerPosition.chips.obj != 'undefined') {
                        var mchips = parseFloat(playerPosition.chips.obj.chips) - parseFloat(action.money);
                        playerPosition.chips.obj.chips = mchips;
                        playerPosition.chips.obj.setText(recordHelper.chipsFormat(mchips));
                    }
                break;
            case 'check':
            case 'folds':
                if (typeof playerPosition.bubble.obj == 'undefined') {
                        playerPosition.bubble.obj = new iio.SimpleRect(playerPosition.bubble, 82, 54)
                                                            .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                                            .addImage('res/'+action.status+'.png',function(){
                                                                io.addToGroup('table',playerPosition.bubble.obj);
                                                            })
                                                            .enableUpdates(function(obj,dt,player){
                                                                  if(obj.pos.y < player[1]){
                                                                           obj.pos.y = player[1];
                                                                  }else if (obj.pos.y > player[1]){
                                                                        obj.pos.y -= .8;
                                                                  }
                                                                  return true;
                                                            },[0,playerPosition.bubble.y]); // 气泡
                    } else{
                        playerPosition.bubble.obj
                                        .addImage('res/'+action.status+'.png')
                                        .setPos(playerPosition.bubble.x,playerPosition.bubble.y + 20)
                                        .enableUpdates(function(obj,player){
                                                              if(obj.pos.y < player[1]){
                                                                       obj.pos.y = player[1];
                                                              }else if (obj.pos.y > player[1]){
                                                                    obj.pos.y -= .8;
                                                              }
                                                              return true;
                                                        },[0,playerPosition.bubble.y]);
                    }

                    if(action.status == 'folds') {
                        recordHelper.soundPlay('playerFold');
                        (function(pos){
                            playerPosition.icon.objBG = new iio.Circle(playerPosition.icon, 40)
                                            .setStrokeStyle('white',2)
                                            .addImage('res/fold.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].icon.objBG);
                                                                }); // 头像
                        })(player.NUMBER);
                    }else{
                        recordHelper.soundPlay('playerCheck');
                    }
                break;
        }
        
    }

    function bubbleClear() { //清空气泡
    	for (var i = 0; i < seats.length; i++) {
    		if (typeof playerPositions[seats[i].NUMBER].bubble.obj != 'undefined') {
    			io.rmvObj(playerPositions[seats[i].NUMBER].bubble.obj);
    			playerPositions[seats[i].NUMBER].bubble.obj = undefined;
    		}
    	};
    }

    function bet2pot(given) { //收集玩家下注到奖池
        var pot = parseFloat(potPosition.obj.chips);
        for (var i = 0; i < seats.length; i++) {
            if (typeof playerPositions[seats[i].NUMBER].bet.obj != 'undefined') { //注码
                pot += parseFloat(playerPositions[seats[i].NUMBER].bet.obj.chips);
                io.rmvObj(playerPositions[seats[i].NUMBER].bet.obj);
                playerPositions[seats[i].NUMBER].bet.obj = undefined;

                io.rmvObj(playerPositions[seats[i].NUMBER].bet.objBG);
                playerPositions[seats[i].NUMBER].bet.objBG = undefined;
            }
        }
        if(typeof given == 'undefined') {
            potPosition.obj.setText(recordHelper.chipsFormat(pot));
        }else{
            potPosition.obj.setText(recordHelper.chipsFormat(given));    
        }
    }
    
   	function start(){
		initTable();
        timeControl.add({fn:blindShow,during:recordHelper.interval.blindShow});
        timeControl.add({fn:holecardShow,during:recordHelper.interval.holecardShow});
        timeControl.add({fn:preFlopShow,during:recordHelper.interval.preFlopShow}, function(){
            bet(pokercard.PREFLOP.PLAYER);
        });
        timeControl.add({fn:flopShow,during:recordHelper.interval.flopShow}, function(){
            bet(pokercard.FLOP.PLAYER);
        });
        timeControl.add({fn:turnShow,during:recordHelper.interval.turnShow}, function(){
            bet(pokercard.TURN.PLAYER);
        });
        timeControl.add({fn:riverShow,during:recordHelper.interval.riverShow}, function(){
            bet(pokercard.RIVER.PLAYER);
        });
        timeControl.add({fn:showDown,during:recordHelper.interval.showDown});
        timeControl.next();
		/*setTimeout(blindShow,1000);
	    setTimeout(holecardShow,2000);
	    setTimeout(preFlopShow,4000);
	    setTimeout(flopShow,7000);
	    setTimeout(turnShow,10000);
	    setTimeout(riverShow,13000);
	    setTimeout(showDown,16000);*/
	}

	function stop(){
		io.rmvAll();
		function restorePositions(arr){
			// 遍历playerPositions 设置 .obj = undefined;
            if (Object.prototype.toString.call(arr) === '[object Array]') {
                for (var i = 0; i < arr.length; i++) {
                    console.log('array',arr[i]);
                    restorePositions(arr[i]);
                }    
            }
            if (Object.prototype.toString.call(arr) === '[object Object]') {
                console.log('object',arr);
                if (typeof arr.x != 'undefined' && typeof arr.obj != 'undefined') {
                    console.log('clear',arr);
                    arr.obj = undefined;
                    if(typeof arr.objBG != 'undefined') { 
                        arr.objBG = undefined;
                    }
                } else {
                    for(var prot in arr){
                        //if (Object.prototype.toString.call(arr[i][prot]) === '[object Array]') {
                            restorePositions(arr[prot]);
                        //}
                        //if (Object.prototype.toString.call(arr[i][prot]) === '[object Object]') {
                        //    ;   
                        //}
                    }
                }
            }
		}
        restorePositions(playerPositions);
        console.log(playerPositions);
		io.draw();
	}

    function replay() {
        if(timeControl._queue.length == 0) {
            stop();
            start();
        }
    }


    /*function testPosition() {
        for (var i = 1; i < playerPositions.length; i++) { // 位置测试
            (function(pos){
                playerPositions[i].icon.obj = new iio.Circle(playerPositions[i].icon, 40)
                                            .setStrokeStyle('white',2)
                                            .addImage('res/icon.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].icon.obj);
                                                                }); // 头像                     
                playerPositions[i].name.obj = new iio.Text('seats[i].NAME', playerPositions[i].name)
                                    .setFont('16px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 名称
		        io.addToGroup('table', playerPositions[i].name.obj);
		        playerPositions[i].chips.objBG = new iio.SimpleRect(playerPositions[i].chips.x, playerPositions[i].chips.y - 5, 80, 20)
		                                        .setFillStyle('black')
		                                        .setAlpha(.3); // 筹码背景
		        io.addToGroup('table', playerPositions[i].chips.objBG);
		        playerPositions[i].chips.obj = new iio.Text('99999', playerPositions[i].chips)
                                    .setFont('16px Microsoft YaHei')
                                    .setTextAlign('center')
                                    .setFillStyle('white'); // 筹码
        		io.addToGroup('table', playerPositions[i].chips.obj);
        		playerPositions[i].dealer.obj = new iio.SimpleRect(playerPositions[i].dealer,20)
                                            .addImage('res/dealer.png',function(){
                                            	io.addToGroup('table',playerPositions[pos].dealer.obj);
                                            }); // 庄家标识
                playerPositions[i].bet.objBG = new iio.SimpleRect(playerPositions[i].bet.x,playerPositions[i].bet.y - 30,28)
    	                                                    .setAlpha(0)
    	                                                    .fadeIn(.2)
    	                                                    .addImage('res/chips.png',function(){
    	                                                    	io.addToGroup('table',playerPositions[pos].bet.objBG);
    	                                                    });
		        playerPositions[i].bet.obj = new iio.Text(table.SBLIND.CHIPS, playerPositions[i].bet)
		                                                .setFont('16px Microsoft YaHei')
		                                                .setTextAlign('center')
		                                                .setFillStyle('white')
		                                                .setAlpha(0)
		                                                .fadeIn(.2); // 盲注
		        io.addToGroup('table', playerPositions[i].bet.obj);
				
                playerPositions[i].holecard[0].obj = new iio.SimpleRect(playerPositions[i].holecard[0], 66, 95)
                                            .rotate(-Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/2h.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[0].obj);
                                                                }); // 底牌1
                playerPositions[i].holecard[1].obj = new iio.SimpleRect(playerPositions[i].holecard[1], 66, 95)
                                            .rotate(Math.PI/36)
                                            .setAlpha(0)
                                            .fadeIn(.02)
                                            .addImage('res/3d.png', function(){
                                                                    io.addToGroup('table',playerPositions[pos].holecard[1].obj);
                                                                }); // 底牌2
                playerPositions[i].bubble.obj = new iio.SimpleRect(playerPositions[i].bubble, 82, 54)
                                                    .addImage('res/raise.png',function(){
                                                    	io.addToGroup('table', playerPositions[pos].bubble.obj);
                                                    }); // 气泡
            })(i);
        };
        for (i = 0; i < boardPositions.length; i++) { //牌面
			        (function(pos){
			            boardPositions[i].obj = new iio.SimpleRect(boardPositions[i], 66, 95)
			                                    .addImage('res/Ad.png', function(){
			                                                io.addToGroup('table',boardPositions[pos].obj);
			                                            });
			        })(i);
			    };
    }*/

    io.setFramerate(60);
/*    recordHelper.io = io;
    recordHelper.testPosition = testPosition;
    recordHelper.blind = blindShow;
    recordHelper.holecard = holecardShow;
    recordHelper.pre = preFlopShow;
    recordHelper.act = actionStatus;
    recordHelper.flop = flopShow;
    recordHelper.turn = turnShow;
    recordHelper.river = riverShow;*/
    var timeControl = new Timer();
    recordHelper.start = start;
    recordHelper.stop = stop;
    recordHelper.replay = replay;
    recordHelper.pause = function(){
        timeControl.pause();   
    };
    //testPosition();
    start();
  };

var recordHelper = {
    data : {},
    interval : {
        blindShow : 5000,
        holecardShow : 5000,
        preFlopShow : 5000,
        flopShow : 5000,
        turnShow : 5000,
        riverShow : 5000,
        showDown : 5000,
        bet : 2000
    },
    infoPanl : {},
    chipsFormat : function (chips) {
        var chips = parseFloat(chips),ret = chips;
        if (10000 < chips && chips < 1000000 ) {
            chips = Math.round(chips / 1000);
            ret = chips + 'k';
        }
        if(chips > 1000000) {
            chips = Math.round(chips / 1000000);
            ret = chips + 'M';
        }
        return ret;
    },
    echo : function (msg) {
        this.infoPanl.append('<p>'+msg+'</p>')
    },
    card2str : function (card) {
        var e = card.split(''), type = '', num = '';
        switch(e[1]) {
            case 's':
                type = '黑桃';
                break;
            case 'h':
                type = '红桃';
                break;
            case 'd':
                type = '方片';
                break;
            case 'c':
                type = '梅花';
                break;
        }
        switch(e[0]) {
            case 'T':
                num = '10';
                break;
            default :
                num = e[0];
                break;
        }
        return type + num;
    },
    echoHolecard : function (holecard) {
        var msg = holecard. NAME, cards = holecard.CARD.split(' ');
        msg += ' 底牌: [' + this.card2str(cards[0]) + ' ' + this.card2str(cards[1]) + ']';
        this.echo(msg);
    },
    echoBet : function (player) {
        var msg = player.NAME, actions = player.ACTION.toLowerCase().split(' ');
        switch(actions[0]) {
            case 'call':
                msg += ' 跟注 ' + actions[1];
                break;
            case 'raise':
                msg += ' 加注 ' + actions[1];
                break;
            case 'allin':
                msg += ' 全下 ';
                break;
            case 'check':
                msg += ' 看牌 ';
                break;
            case 'folds':
                msg += ' 弃牌 ';
                break;
        }
        this.echo(msg);
    },
    sounds : {cardOpen:null,chipThrow:null,playerCheck:null,playerFold:null},
    soundLoad : function () {
        var that = this;
        function loadSound (o, u) {
            that.sounds[o] = new Audio();
            that.sounds[o].src = u;
            that.sounds[o].load();
            that.sounds[o].addEventListener("canplaythrough",
                function() { that.sounds[o].loaded = true; }, false);
        }
        loadSound('cardOpen','http://20140111.liuyiblog.sinaapp.com/sound/card_open.ogg');
        loadSound('chipThrow','http://20140111.liuyiblog.sinaapp.com/sound/chip_throw.ogg');
        loadSound('playerCheck','http://20140111.liuyiblog.sinaapp.com/sound/player_check.ogg');
        loadSound('playerFold','http://20140111.liuyiblog.sinaapp.com/sound/player_fold.ogg');
    },
    soundInstance : null,
    soundPlay : function (flag) {
        if(!this.soundInstance){
            this.soundInstance = new Audio();
        }
        this.soundInstance.src = this.sounds[flag].src;
        this.soundInstance.load();
        if(this.sounds[flag] && this.sounds[flag].loaded){
            this.soundInstance.play();
        }
    }
};

var Timer = function(){
    this._queue = [];
    this._pause = false;
}
Timer.prototype.pause = function(){
    if(this._pause){
        this._pause = false;
        this.next(0);
    }else{
        this._pause = true;
    }
}
Timer.prototype.add = function(action,callback){
    // TODO 验证action包含action.fn(Function)和action.during(ms Int)
    this._queue.push(action);
    if(callback){callback();}
}
Timer.prototype.next = function(dur){
    var act = this._queue.shift(), that = this;
    if(act && act.fn && act.during){
        setTimeout(function(){
            act.fn.call(null,act.param);
            if(!that._pause){
                that.next();
            }
        },isNaN(dur)?act.during:dur);
    }
}