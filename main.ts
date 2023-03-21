scene.setBackgroundColor(1)
let My_school = sprites.create(assets.image`school`, scene.screenWidth())
controller.moveSprite(My_school)
My_school.setScale(6, ScaleAnchor.Middle)
My_school.setStayInScreen(true)
let mySprite = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f a a f b f e e f b f a a f . 
    . f a a e 1 f 4 4 f 1 e a a f . 
    f f a a f 4 4 4 4 4 4 f a a f f 
    f a a f f f e e e e f f f a a f 
    . f e e f a 1 1 1 1 a f e e f . 
    . . e 4 c 1 1 1 1 1 1 c 4 e . . 
    . . e f a 1 a 1 a 1 a a f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
effects.confetti.endScreenEffect()
