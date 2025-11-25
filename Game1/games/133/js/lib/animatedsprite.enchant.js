/**
 * Animated Sprite
 */
enchant.AnimatedSprite = enchant.Class.create(enchant.Sprite, {
    initialize: function(width, height) {
        // Call super's constructor
        enchant.Sprite.apply(this, [width, height]);
        this.addEventListener("enterframe", this.onAnimationRun);
        this._animCounter = 0;
        this._animFrameIndex = 0;
        this._isLoop = true;
        this._animData = {};
        this._currentAnimData = null;
    },
    
    addAnimData: function( name, frames, frameDelay, isLoop ){
        var data = { 
            frames: frames,
            frameDelay: frameDelay,
            isLoop: isLoop
        };
        this._animData[name] = data;                
    },
    
    playAnim: function(name, forceRestart)
    {
        if(this._animData[name] !== undefined)
        {
            this._currentAnimData = this._animData[name];
            if(forceRestart)
            {
                this._animCounter = 0;
                this._animFrameIndex = 0;                
            }
            this._animFrameIndex--;
            if(this._animFrameIndex < 0 )
                this._animFrameIndex = 0;
            this.advanceFrame();
        }
    },
    
    onAnimationRun: function(){
        if( this._currentAnimData !== null )
        {
            this._animCounter++;
            if( this._animCounter >= this._currentAnimData['frameDelay'] )
            {
                if(this._animFrameIndex < this._currentAnimData['frames'].length - 1)
                {
                    this.advanceFrame();
                }else if(this._isLoop)
                {
                    this.advanceFrame();
                }
            }
        }
    },
    
    advanceFrame: function(){
        this._animFrameIndex++;
        this._animFrameIndex = 
        this._animFrameIndex % this._currentAnimData['frames'].length;
        this._animCounter = 0;
        this.frame = this._currentAnimData['frames'][this._animFrameIndex];
    }
});

/**
 * Sprite Button
 */
enchant.SpriteButton = enchant.Class.create(enchant.Sprite, {
    initialize: function(width, height, surface, normal, pressed){
        // Call super's constructor
        enchant.Sprite.apply(this, [width, height]);

        this._normalFrame = normal;
        this._pressedFrame = pressed;
        this.image = surface;
        this.frame = this._normalFrame;
        this.isPressed = false;

         // タッチしたときの挙動
        this.addEventListener("touchstart", function(){
            this.isPressed = true;
            this.frame = this._pressedFrame;
        });

        // タッチが離されたときの挙動
        this.addEventListener("touchend", function(){
            this.isPressed = false;
            this.frame = this._normalFrame;
        });
    }
});