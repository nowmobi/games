/* *******************************************
// ===========================================
//         Get Those Sheeps!
// ===========================================
// Copyright 2012, Otsuki Ryuji, Thongrop Rodsavas
//
// VERSION HISTORY
//    V. 1.01   2012/09/01
//      - Fix scaling tween error on iOS5 Mobile Safari
//
//    V. 1.00   2012/08/23
//      - First complete
//
// ABOUT THIS PROJECT
//   Project Owner: Thongrop Rodsavas
//   Email: guts@coffeedoggames.com
//   Web Site: http://www.coffeedoggames.com
//
// *******************************************
*/
GAME_UID	= "cfd004"
VERSION		= 1.01;
enchant();

var SG_Game_Started = false;
var SG_Game_Mode = 1;

function setLoadingScene()
{
    var loadingScene = new Scene();
    var bg = new Sprite(128, 128);
    bg.image = enchant.Game.instance.assets['game-loader.png'];
    loadingScene.addChild(bg);
    enchant.Game.instance.loadingScene = loadingScene;
    enchant.Game.instance.start();    
}

var game = null;

function startSheeps(){
	var imgPath = "res/" + SG.lang + "/"; 
	orientChange();
	
	window.addEventListener('resize', orientChange, false);
	window.addEventListener('orientationchange', orientChange, false);
	
	SG_Hooks.setOrientationHandler(orientChange);
	SG_Hooks.setResizeHandler(orientChange);
	
	game = new Game(320, 480);
	game.SCREEN_X = 320;
	game.SCREEN_Y = 480;
	game.fps = 15;
	game.BLOCK_SIZE_X = 50;
	game.BLOCK_SIZE_Y = 50;
	if(localStorage[GAME_UID + "hardModeHighScore"] == null) localStorage[GAME_UID + "hardModeHighScore"] = 99.99;
	if(localStorage[GAME_UID + "normalModeHighScore"] == null) localStorage[GAME_UID + "normalModeHighScore"] = 66.66;
	if(localStorage[GAME_UID + "easyModeHighScore"] == null) localStorage[GAME_UID + "easyModeHighScore"] = 33.33;
	game.preload(imgPath + "numberSheet.png");
	game.preload(imgPath + "GUI_BG.png");
	game.preload(imgPath + "GUI_HighScore.png");
	game.preload(imgPath + "GUI_Button_Mode.png");
	game.preload(imgPath + "GUI_CountDown.png");
	game.preload(imgPath + "GUI_Button_Restart.png");
	game.preload(imgPath + "GUI_Button_Result.png");
	game.preload(imgPath + "GUI_Button_Back_MainMenu.png");
	game.preload(imgPath + "GUI_Main_Menu_Logo.png");
	game.preload(imgPath + "Shephard.png");

	window.scrollTo(0,0);

	isMobilePhone = DetectTierIphone();
    if( isMobilePhone )
    {
        resizeGame();
		orientChange();
    }

    game.load('game-loader.png', setLoadingScene);
	game.onload= function(){		
		var loadingScene = new Scene();
        var bg = new Sprite(128,128);
        bg.image = this.assets['game-loader.png'];
        loadingScene.addChild(bg); 
        game.pushScene(loadingScene);
        setTimeout(function(){
            var game = enchant.Game.instance;
            game.replaceScene(game.createTitleScene());
			orientChange();
        }, 1000);
	};

	game.createTitleScene = function()
	{
		var scene = new Scene();
		scene.addEventListener('touchstart', function(argument) {
            // body...
            window.scrollTo(0, 0);
        });
		scene.bg = new Sprite(game.SCREEN_X, game.SCREEN_Y);
		scene.bg.image = enchant.Game.instance.assets[imgPath + "GUI_BG.png"];
		scene.addChild(scene.bg);

		// Create HARD MODE, NORMAL MODE, EASY MODE buttons
		scene.startButton = new Sprite(114, 32);
		scene.hardModeButton = new Sprite(114, 32);
		scene.normalModeButton = new Sprite(114, 32);
		scene.easyModeButton = new Sprite(114, 32);
		scene.startButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Mode.png"];
		scene.hardModeButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Mode.png"];
		scene.normalModeButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Mode.png"];
		scene.easyModeButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Mode.png"];
		scene.startButton.frame = 0;
		scene.hardModeButton.frame = 1;
		scene.normalModeButton.frame = 2;
		scene.easyModeButton.frame = 3;
		scene.startButton.x = 102;
		scene.startButton.y = 210;
		scene.hardModeButton.x = 102;
		scene.hardModeButton.y = 213;
		scene.normalModeButton.x = 102;
		scene.normalModeButton.y = 257;
		scene.easyModeButton.x = 102;
		scene.easyModeButton.y = 301;
		scene.startButton.addEventListener("touchstart", function(){
			TweenLite.to(this, 0.5, {scaleX: 0, scaleY: 0, ease:Power3.easeOut});
			scene.removeChild(scene.highScoreTitle);
			scene.removeChild(scene.highScoreModeTitle);
			scene.removeChild(scene.highScoreModeLabel);
			scene.removeChild(scene.shephardsWordLable);
			scene.removeChild(scene.shephardsWordLable2);
			TweenLite.from(scene.hardModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 0.5});
			TweenLite.from(scene.normalModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 0.6});
			TweenLite.from(scene.easyModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 0.7});
			scene.addChild(scene.hardModeButton);
			scene.addChild(scene.normalModeButton);
			scene.addChild(scene.easyModeButton);
		});
		scene.hardModeButton.addEventListener("touchstart", function(){
			TweenLite.to(scene.hardModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 0.5});
			TweenLite.to(scene.normalModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.easyModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.titleLogo, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.shepard, 1.5, {x: 400, ease: Power2.easeOut, delay: 0.2});
			setTimeout(function(){
                            	if (!SG_Game_Started) { SG_Hooks.start(); SG_Game_Started=true; }
                                SG_Game_Mode = 3;                            
				game.replaceScene(game.createGameScene("hardMode"));
			}, 1000);
		});
		scene.normalModeButton.addEventListener("touchstart", function(){
			TweenLite.to(scene.hardModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.normalModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 0.5});
			TweenLite.to(scene.easyModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.titleLogo, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.shepard, 1.5, {x: 400, ease: Power2.easeOut, delay: 0.2});
			setTimeout(function(){
                            	if (!SG_Game_Started) { SG_Hooks.start(); SG_Game_Started=true; }
                                SG_Game_Mode = 2;
				game.replaceScene(game.createGameScene("normalMode"));
			}, 1000);
		});
		scene.easyModeButton.addEventListener("touchstart", function(){
			TweenLite.to(scene.hardModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.normalModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.easyModeButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 0.5});
			TweenLite.to(scene.titleLogo, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
			TweenLite.to(scene.shepard, 1.5, {x: 400, ease: Power2.easeOut, delay: 0.2});
			setTimeout(function(){
                            	if (!SG_Game_Started) { SG_Hooks.start(); SG_Game_Started=true; }
                                SG_Game_Mode = 1;
				game.replaceScene(game.createGameScene("easyMode"));
			}, 1000);
		});
		scene.addChild(scene.startButton);

		// Create Title-logo
		scene.titleLogo = new Sprite(266, 113);
		scene.titleLogo.image = enchant.Game.instance.assets[imgPath + "GUI_Main_Menu_Logo.png"]
		scene.titleLogo.x = 27;
		scene.titleLogo.y = 72;
		TweenLite.from(scene.titleLogo, 1.5, {scaleX: 0.3, scaleY: 0, ease: Bounce.easeOut, delay: 0.2});
		scene.addChild(scene.titleLogo);

		// Create Shephard
		scene.shepard = new AnimatedSprite(68, 50);
		scene.shepard.image = enchant.Game.instance.assets[imgPath + "Shephard.png"]
		scene.shepard.x = 250;
		scene.shepard.y = 377;
		scene.shepard.addAnimData('normal',[0,1],4, true);
		scene.shepard.addAnimData('bark',[2,3],4, true);
		scene.shepard.playAnim('normal');
		scene.addChild(scene.shepard);

		// Create Shephard's word label
		scene.shephardsWordLable = new Label(textdata[0]);
		scene.shephardsWordLable.font = "10px 'Fredoka One'";
		scene.shephardsWordLable.color = "white";
		scene.shephardsWordLable.x = 200;
		scene.shephardsWordLable.y = 395;
		setTimeout(function(){			
			scene.addChild(scene.shephardsWordLable);
		}, 1600);

		// Create Shephard's word2 label
		scene.shephardsWordLable2 = new Label(textdata[0]);
		scene.shephardsWordLable2.font = "10px 'Fredoka One'";
		scene.shephardsWordLable2.color = "white";
		scene.shephardsWordLable2.x = 205;
		scene.shephardsWordLable2.y = 408;
		setTimeout(function(){			
			scene.addChild(scene.shephardsWordLable2);
		}, 2000);

		// Create Highscore-title label
		scene.highScoreTitle = new Label(textdata[1]);
		scene.highScoreTitle.font = "20px 'Fredoka One'";
		scene.highScoreTitle.color = "#7b442f";
		scene.highScoreTitle.x = 103;
		scene.highScoreTitle.y = 260;
		scene.addChild(scene.highScoreTitle);

		// Create Highscore-mode-title label
		scene.highScoreModeTitle = new Label(textdata[2]);
		scene.highScoreModeTitle.font = "16px 'Fredoka One'";
		scene.highScoreModeTitle.color = "#7b442f";
		scene.highScoreModeTitle.x = 48;
		scene.highScoreModeTitle.y = 290;
		scene.addChild(scene.highScoreModeTitle);

		// Create Highscore-mode label
		scene.highScoreModeLabel = new Label(localStorage[GAME_UID + "hardModeHighScore"] + " sec<br />" + 
											 localStorage[GAME_UID + "normalModeHighScore"] + " sec<br />" + 
											 localStorage[GAME_UID + "easyModeHighScore"] + " sec" );
		scene.highScoreModeLabel.color = "#7b442f";
		scene.highScoreModeLabel.font = "16px 'Fredoka One'";
		scene.highScoreModeLabel.textAlign = "right";
		scene.highScoreModeLabel.x = 0;
		scene.highScoreModeLabel.y = 290;
		scene.highScoreModeLabel.width = 270;
		scene.addChild(scene.highScoreModeLabel);

		return scene;
	}

	game.createGameScene = function(mode)
	{		
		var scene = new Scene();

		scene.addEventListener('touchstart', function(argument) {
            // body...
            window.scrollTo(0, 0);
        });
		
		// scene.mode is "hardMode" or "normalMode" or "easyMode"
		scene.mode = mode;

		// Create background image
		scene.bg = new Sprite(game.SCREEN_X, game.SCREEN_Y);
		scene.bg.image = enchant.Game.instance.assets[imgPath + "GUI_BG.png"];
		scene.addChild(scene.bg);

		// The number of block and the position of block are different by mode
		scene.blockSquare = { "hardMode": 6, "normalMode": 5, "easyMode": 4};
		scene.blockSpace = {"hardMode": 0, "normalMode": 12, "easyMode": 32};
		scene.goal = {"hardMode": 36, "normalMode": 25, "easyMode": 16};
		scene.blockArray = new Array(scene.goal[scene.mode]-1);

		// Create restart button
		scene.restartButton = new Sprite(78, 32);
		scene.restartButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Restart.png"];
		scene.restartButton.x = 16;
		scene.restartButton.y = 4;
		scene.restartButton.addEventListener("touchstart", function(){
			game.replaceScene(game.createGameScene(scene.mode));
		});
		TweenLite.from(scene.restartButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
		scene.addChild(scene.restartButton);

		// Create main-menu button
		scene.mainMenuButton = new Sprite(88, 32);
		scene.mainMenuButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Back_MainMenu.png"];
		scene.mainMenuButton.x = 220;
		scene.mainMenuButton.y = 4;
		scene.mainMenuButton.addEventListener("touchstart", function(){
			game.replaceScene(game.createTitleScene());
		});
		TweenLite.from(scene.mainMenuButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut});
		scene.addChild(scene.mainMenuButton);

		// Create target label
		scene.targetLabel = new Label();
		scene.targetNum = 1;
		scene.targetLabel.text = "Next: "+scene.targetNum;
		scene.targetLabel.color = "white";
		scene.targetLabel.font = "18px monospace";
		scene.targetLabel.x = 10;
		scene.targetLabel.y = 390;

		// Create time label
		scene.timeLabel = new Label();
		scene.timeLabel.color = "white";
		scene.timeLabel.font = "18px monospace";
		scene.timeLabel.textAlign = "right";
		scene.timeLabel.x = 4;
		scene.timeLabel.y = 390;

		// Create countdown image
		scene.countDown = new Sprite(32, 57);
		scene.countDown.image = enchant.Game.instance.assets[imgPath + "GUI_CountDown.png"];
		scene.countDown.frame = 3;
		scene.countDown.x = game.SCREEN_X / 2 - 32 / 2;
		scene.countDown.y = game.SCREEN_Y / 2 - 57;
		scene.countDownCount = 0;
		scene.addChild(scene.countDown);

		// Start count down before playing the game
		scene.countDown.addEventListener("enterframe", function(){
			if(scene.countDownCount == 5) {
				TweenLite.from(this, 0.5, {scaleX:0.5, scaleY:0.5, ease:Elastic.easeOut});
				this.frame = 2;
			}
			if(scene.countDownCount == 20) {
				TweenLite.from(this, 0.5, {scaleX:0.5, scaleY:0.5, ease:Elastic.easeOut});
				this.frame = 1;
			}
			if(scene.countDownCount == 35) {
				TweenLite.from(this, 0.5, {scaleX:0.5, scaleY:0.5, ease:Elastic.easeOut});
				this.frame = 0;
			}
			if(scene.countDownCount == 50) {
				this.clearEventListener("enterframe");
				scene.removeChild(this);

				// Start playing the game
				scene.startGame();
			}
			scene.countDownCount++;
		});

		scene.startGame = function()
		{
			// Measure time
			var startTime = new Date();
			scene.timeLabel.addEventListener("enterframe", function(){
				var currentTime = new Date();
				var currentTimeString = new String((Math.floor(currentTime / 10)) - (Math.floor(startTime / 10)));
				scene.time = currentTimeString.slice(0, currentTimeString.length-2) + "." + currentTimeString.slice(-2);
				this.text = scene.time + " sec";
			});

			// Create blocks
			for (var i = 0; i < scene.blockSquare[scene.mode]; i++) {
				for (var j = 0; j < scene.blockSquare[scene.mode]; j++) {
					var block = scene.createBlock(i * scene.blockSquare[scene.mode] + j + 1);
					scene.blockArray[i * scene.blockSquare[scene.mode] + j] = block;
				}
			}

			// Rearrange blocks
			scene.blockArray.shuffle();
			for (var i = 0; i < scene.blockSquare[scene.mode]; i++) {
				for (var j = 0; j < scene.blockSquare[scene.mode]; j++) {
					var target = scene.blockArray[i * scene.blockSquare[scene.mode] + j];
					target.x = ((game.BLOCK_SIZE_X + scene.blockSpace[scene.mode]) * j) + 10;
					target.y = ((game.BLOCK_SIZE_Y + scene.blockSpace[scene.mode]) * i) + 60;					
					var randomX = -game.SCREEN_X / 4 + (Math.random() * game.SCREEN_X / 2) ;
					var randomY = -game.SCREEN_Y / 4 + (Math.random() * game.SCREEN_Y / 2) ;
				/*
					target.childNodes[0].scale(0.5, 0.5);
					target.childNodes[0]
						.tl
						.scaleTo(1, 5, enchant.Easing.ELASTIC_EASEOUT)
						.and()
						.moveTo(randomX, randomY, 5, enchant.Easing.ELASTIC_EASEOUT);
				*/
					TweenLite.from(target.childNodes[0], 1.5, {x:randomX, y:randomY, ease:Elastic.easeOut});
				//	TweenLite.from(target.childNodes[0], 1.5, {x:randomX, y:randomY, ease:Elastic.easeOut});
				//	TweenLite.from(target.childNodes[0], 1, { y:randomY, ease:Power3.easeOut});
					TweenLite.from(target.childNodes[1], 1.5, {x:randomX, y:randomY, ease:Elastic.easeOut});
				//	TweenLite.from(target.childNodes[1], 1, { y:randomY, ease:Power3.easeOut});
					scene.addChild(target);
				}
			}

			// Show label, button
			scene.addChild(scene.targetLabel);
			scene.addChild(scene.timeLabel);
		}

		scene.createBlock = function(number)
		{
			var newBlockBg = new Sprite(game.BLOCK_SIZE_X, game.BLOCK_SIZE_Y);
			var newBlockLabel = new Label(number);
			var newBlock = new Group();
			newBlockLabel.x = 5;
			newBlockLabel.y = 2;
			newBlockLabel.font = "20px 'Fredoka One'";
			newBlockLabel.textAlign = "center";
			newBlockLabel.width = 40;
			newBlockBg.frame = Math.floor(Math.random() * 20) * 2;
			if(newBlockBg.frame < 20) {
				newBlockLabel.color = "#3f6dc8";
			} else {
				newBlockLabel.color = "#6F9DF8";
			}
			newBlockBg.count = 0;
			newBlock.addChild(newBlockBg);
			newBlock.addChild(newBlockLabel);

			newBlockBg.addEventListener("enterframe", function(){
				this.count++;
				if(this.count == 20){
					this.frame = this.frame + 1;
				}
				if(this.count >= 40){
					this.frame = this.frame - 1;
					this.count = 0;
				}
			})

			// Do whatever you want with a block here
			newBlock.number = number;
			newBlockBg.image = enchant.Game.instance.assets[imgPath + "numberSheet.png"];
			var scene = this;
			newBlock.addEventListener("touchstart", function(){
				if(this.number == scene.targetNum) {
					this.touchEnabled = false;
					this.childNodes[0].touchEnabled = false;
					this.childNodes[1].touchEnabled = false;
					TweenLite.to(this.childNodes[0], 1, {x:this.x * -1, ease:Power1.easeInOut});
					TweenLite.to(this.childNodes[0], 1, { y:-50, ease:Power3.easeOut, onComplete:scene.removeThis, onCompleteParams:[this]});
					TweenLite.to(this.childNodes[1], 1, {x:this.x * -1, ease:Power1.easeInOut});
					TweenLite.to(this.childNodes[1], 1, { y:-50, ease:Power3.easeOut});
					scene.targetNum++;
					if(scene.targetNum > scene.goal[scene.mode]) {
						scene.timeLabel.clearEventListener("enterframe");
						setTimeout(function(){
							game.replaceScene(game.createResultScene(scene.time, scene.mode));
						},1000);
					} else {
						scene.targetLabel.text = "Next: " + scene.targetNum;	
					}}
			});
			// return the block
			return newBlock;
		}

		scene.removeThis = function(target){
			target.scene.removeChild(target);
		}

		return scene;
	}
	
	game.createResultScene = function(currentScore, mode)
	{
                // SG_Hooks.gameOver(1, currentScore);
                SG_Hooks.gameOver( SG_Game_Mode, 1);
		var scene = new Scene();
		scene.addEventListener('touchstart', function(argument) {
            // body...
            window.scrollTo(0, 0);
        });
		
		// Create background image
		scene.bg = new Sprite(game.SCREEN_X, game.SCREEN_Y);
		scene.bg.image = enchant.Game.instance.assets[imgPath + "GUI_BG.png"];
		scene.addChild(scene.bg);

		// Create Current-score-title label
		scene.currentScoreTitleLabel = new Label(textdata[10]);
		scene.currentScoreTitleLabel.font = "26px 'Fredoka One'";
		scene.currentScoreTitleLabel.color = "#7b442f";
		scene.currentScoreTitleLabel.x = 60;
		scene.currentScoreTitleLabel.y = 70;
		setTimeout(function(){
			scene.addChild(scene.currentScoreTitleLabel);
		}, 800)

		// Create Current-score label
		scene.currentScoreLabel = new Label(currentScore + " sec");
		scene.currentScoreLabel.font = "26px 'Fredoka One'";
		scene.currentScoreLabel.color = "#7b442f";
		scene.currentScoreLabel.textAlign = "right";
		scene.currentScoreLabel.width = 150;
		scene.currentScoreLabel.x = 100;
		scene.currentScoreLabel.y = 100;
		setTimeout(function(){
			scene.addChild(scene.currentScoreLabel);
		}, 800)

		// Create High-score-title label
		scene.highScoreTitleLabel = new Label(textdata[3]);
		scene.highScoreTitleLabel.font = "26px 'Fredoka One'";
		scene.highScoreTitleLabel.color = "#7b442f";
		scene.highScoreTitleLabel.x = 60;
		scene.highScoreTitleLabel.y = 160;
		setTimeout(function(){
			scene.addChild(scene.highScoreTitleLabel);
		}, 1200)

		// Create High-score-title label
		scene.highScoreLabel = new Label(localStorage[GAME_UID + mode + "HighScore"] + " sec");
		scene.highScoreLabel.font = "26px 'Fredoka One'";
		scene.highScoreLabel.color = "#7b442f";
		scene.highScoreLabel.textAlign = "right";
		scene.highScoreLabel.width = 150;
		scene.highScoreLabel.x = 100;
		scene.highScoreLabel.y = 190;
		setTimeout(function(){
			scene.addChild(scene.highScoreLabel);
		}, 1200)

		// Create restart button
		scene.restartButton = new Sprite(116, 34);
		scene.restartButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Result.png"];
		scene.restartButton.frame = 0;
		scene.restartButton.x = 102;
		scene.restartButton.y = 250;
		scene.restartButton.addEventListener("touchstart", function(){
			game.replaceScene(game.createGameScene(mode));
		});
		TweenLite.from(scene.restartButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 1.6});
		scene.addChild(scene.restartButton);

		// Create main-menu button
		scene.mainMenuButton = new Sprite(116, 34);
		scene.mainMenuButton.image = enchant.Game.instance.assets[imgPath + "GUI_Button_Result.png"];
		scene.mainMenuButton.frame = 1;
		scene.mainMenuButton.x = 102;
		scene.mainMenuButton.y = 304;
		scene.mainMenuButton.addEventListener("touchstart", function(){
			game.replaceScene(game.createTitleScene());
		});
		TweenLite.from(scene.mainMenuButton, 0.5, {scaleX: 0, scaleY: 0, ease: Power3.easeOut, delay: 2});
		scene.addChild(scene.mainMenuButton);

		// Create Shephard
		scene.shepard = new AnimatedSprite(68, 50);
		scene.shepard.image = enchant.Game.instance.assets[imgPath + "Shephard.png"]
		scene.shepard.x = 250;
		scene.shepard.y = 377;
		scene.shepard.addAnimData('normal',[0,1],4, true);
		scene.shepard.addAnimData('bark',[2,3],4, true);
		scene.shepard.playAnim('normal');
		TweenLite.from(scene.shepard, 1.5, {x: 400, ease: Power2.easeIn, delay: 1.5});
		scene.addChild(scene.shepard);

		// Create Shephard's word label
		scene.shephardsWordLable = new Label(textdata[4]);
		scene.shephardsWordLable.font = "10px 'Fredoka One'";
		scene.shephardsWordLable.color = "white";
		scene.shephardsWordLable.x = 200;
		scene.shephardsWordLable.y = 395;
		setTimeout(function(){			
			scene.addChild(scene.shephardsWordLable);
		}, 3000);

		// Create Shephard's word2 label
		scene.shephardsWordLable2 = new Label(textdata[5]);
		scene.shephardsWordLable2.font = "10px 'Fredoka One'";
		scene.shephardsWordLable2.color = "white";
		scene.shephardsWordLable2.x = 205;
		scene.shephardsWordLable2.y = 408;
		setTimeout(function(){			
			scene.addChild(scene.shephardsWordLable2);
		}, 3600);

		// Check the current score is a new record or not
		if(Math.min(localStorage[GAME_UID + mode + "HighScore"], currentScore) == currentScore) {
			scene.currentScoreTitleLabel.text = textdata[6];
			scene.currentScoreTitleLabel.color = "#EB402F";
			scene.currentScoreLabel.color = "#EB402F";
			scene.highScoreTitleLabel.text = textdata[7];
			localStorage[GAME_UID + mode + "HighScore"] = currentScore;
			scene.shephardsWordLable.text = textdata[8];
			scene.shephardsWordLable2.text = "&nbsp;&nbsp;"+textdata[9];
			scene.shepard.playAnim('bark');
		}

		return scene;
	}
}

function orientChange(){
	var rw = 320;
    var rh = 460;
	
	var wh = window.innerHeight;
	var ww = window.innerWidth;
	
	var rwh = rw/rh;
	var rhw = rh/rw;
	
	var ch = 0;
	var cw = 0;
	
	var s = 1;
		
	if (wh * rwh < ww) {
		s = wh / rh;
	} else {
		s = ww / rw;
	}
	
	//var s = window.innerHeight / 480;
	var scale = "scale(" + s + ")";// translate(" + ((window.innerWidth * 1/s - (320)) * 0.5) + "px" + ",0)";
	element = document.getElementById("enchant-stage");
	element.style['-moz-transform'] = scale;
	element.style['-webkit-transform'] = scale;
	element.style['-webkit-transform-origin'] = "50% 0%";
	element.style['-ms-transform'] = scale;
	element.style['-ms-transform-origin'] = "50% 0%";
	element.style['-o-transform'] = scale;
	element.style['transform'] = scale;
	element.style['transform-origin'] = "50% 0%";
	
	if( "orientation" in window && window.orientation != 0 ){
		document.getElementById('rotate').style.display='block';
		document.getElementById('enchant-stage').style.display='none';
	}
	else{
		document.getElementById('rotate').style.display='none';
		document.getElementById('enchant-stage').style.display='block';
	}
	window.scrollTo(0,1);
	resizeGame();
}

function resizeGame(){
	/*if( typeof game != "undefined" && game ){
		if( window.innerHeight > window.innerWidth ){
			game.scale = Math.min(window.innerHeight/game.height,window.innerWidth/game.width);
		}
		else{
			game.scale = Math.min(window.innerHeight/game.width,window.innerWidth/game.height);
		}
		      
	    var stage = document.getElementById('enchant-stage');
	    stage.style.position = 'absolute';
	    stage.style.width = Math.floor(320 * game.scale) + 'px';
	}*/
}

Array.prototype.shuffle = function() {
    var i = this.length;
    while(i){
        var j = Math.floor(Math.random()*i);
        var t = this[--i];
        this[i] = this[j];
        this[j] = t;
    }
    return this;
}