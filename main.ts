namespace SpriteKind {
    export const Clam = SpriteKind.create()
    export const CommonFish = SpriteKind.create()
    export const Crab = SpriteKind.create()
    export const Clownfish = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Crab, function (sprite, location) {
    if (crab.isHittingTile(CollisionDirection.Bottom)) {
        falling = 0
        crab.setVelocity(-30, 0)
        animation.runImageAnimation(
        crab,
        [img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c455b4b5554c45b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ..................cc....
            ..............cccc63c...
            .............c633336c...
            .........cc.c6cc33333c..
            ........b55c6c55c33333c.
            ........ff5c6c5ff33333c.
            ........ff5c6c5ff6333cc.
            ........b553c355c6666cc.
            .........b55355c333333c.
            .........c5555bcc33333c.
            .........c4554b55c333c..
            ........c5b44bb5ccbbb...
            ........c44b5554c4445b..
            ........c54c555c444c5c..
            ........c5c5555c444ccc..
            .........ccccccc........
            `,img`
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c663336c..
            .............c66333333c.
            .........bccc66cc333333c
            .........b55c6c55c33333c
            .........ff5c6c5ff6333cc
            .........ff5ccc5ff6666cc
            ..........b55355c333333c
            ..........c55554ccc3333c
            ..........c45544b55c33c.
            ..........c5b44bb5cbbc..
            ..........cc54c555cc5c..
            ............cc5555cccc..
            .............cccccc.....
            `,img`
            ........................
            ..................cc....
            ..............cccc63c...
            .............c663336c...
            ............c66333333c..
            ........bccc66cc333333c.
            ........b55c6c55c33333c.
            ........ff5c6c5ff6333cc.
            ........ff5ccc5ff6666cc.
            .........b55355ccc3333c.
            .........c55555b55c333c.
            ........c445544bb5c33c..
            ........c55b444b555bc...
            ........c555444c555cb...
            .........cccc4c5555cc...
            ...........cccccccccc...
            `,img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55554cc33333c
            ........c554554c55c333c.
            ........b54b444c555bcc..
            ........c455b44c555cbb..
            ........c555c4c5555cc5b.
            ........c5555c4cccccc5c.
            .........cccccc.....ccc.
            `],
        150,
        true
        )
    }
    if (crab.isHittingTile(CollisionDirection.Left) && falling == 0) {
        crabDirection = 1
        animation.runImageAnimation(
        crab,
        [img`
            ...cc...................
            ..c36cccc...............
            ..c633336c..............
            .c33333cc6c.cc..........
            c33333c55c6c55b.........
            c33333ff5c6c5ff.........
            cc3336ff5c6c5ff.........
            cc6666c553c355b.........
            c333333c55355b..........
            c3333ccb55555cc.........
            .c33c55b4555455c........
            ..bbc5bb4444b45b........
            .b54c4555b4b554c........
            .c5c4c555c4c555c........
            .c5c4c5555c5555c........
            .ccc..ccccccccc.........
            `,img`
            ....c...................
            ...c6cccc...............
            ..c333336c..............
            ..c6333cc6c.cc..........
            .c3333c55c6c55b.........
            c33333ff5c6c5ff.........
            c33336ff5c6c5ff.........
            cc3366c553c355b.........
            cc66333c55355b..........
            c33333ccb5555c..........
            c3333c55b4554c..........
            .c33bcc5bb44b5c.........
            ..bb44c4555b44c.........
            .b54444c555c45c.........
            .c5c444c5555c5c.........
            .ccc...ccccccc..........
            `,img`
            ........................
            ...cc...................
            ..c36cccc...............
            ..c633366c..............
            .c33333366c.............
            c333333cc66cccb.........
            c33333c55c6c55b.........
            cc3336ff5c6c5ff.........
            cc6666ff5ccc5ff.........
            c333333c55355b..........
            c3333ccc45555c..........
            .c33c55b44554c..........
            ..cbbc5bb44b5c..........
            ..c5cc555c45cc..........
            ..cccc5555cc............
            .....cccccc.............
            `,img`
            ........................
            ...cc...................
            ..c36cccc...............
            ..c633366c..............
            .c33333366c.............
            c333333cc66cccb.........
            c33333c55c6c55b.........
            cc3336ff5c6c5ff.........
            cc6666ff5ccc5ff.........
            c3333ccc55355b..........
            c333c55b55555c..........
            .c33c5bb445544c.........
            ..cb555b444b55c.........
            ..bc555c444555c.........
            ..cc5555c4cccc..........
            ..cccccccccc............
            `,img`
            ...cc...................
            ..c36cccc...............
            ..c633336c..............
            .c33333cc6..cc..........
            c33333c55ccc55b.........
            c33333ff5c6c5ff.........
            cc3336ff5c6c5ff.........
            cc6666c5536355b.........
            c333333c55c55b..........
            c33333cc45355cc.........
            .c333c55c455455c........
            ..ccb555c454b45b........
            ..bbc555c44b554c........
            .b5cc5555c4c555c........
            .c5cccccc445555c........
            .ccc.....cccccc.........
            `],
        150,
        true
        )
    }
    if (crab.isHittingTile(CollisionDirection.Right) && falling == 0) {
        crabDirection = -1
        animation.runImageAnimation(
        crab,
        [img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c455b4b5554c45b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ..................cc....
            ..............cccc63c...
            .............c633336c...
            .........cc.c6cc33333c..
            ........b55c6c55c33333c.
            ........ff5c6c5ff33333c.
            ........ff5c6c5ff6333cc.
            ........b553c355c6666cc.
            .........b55355c333333c.
            .........c5555bcc33333c.
            .........c4554b55c333c..
            ........c5b44bb5ccbbb...
            ........c44b5554c4445b..
            ........c54c555c444c5c..
            ........c5c5555c444ccc..
            .........ccccccc........
            `,img`
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c663336c..
            .............c66333333c.
            .........bccc66cc333333c
            .........b55c6c55c33333c
            .........ff5c6c5ff6333cc
            .........ff5ccc5ff6666cc
            ..........b55355c333333c
            ..........c55554ccc3333c
            ..........c45544b55c33c.
            ..........c5b44bb5cbbc..
            ..........cc54c555cc5c..
            ............cc5555cccc..
            .............cccccc.....
            `,img`
            ........................
            ..................cc....
            ..............cccc63c...
            .............c663336c...
            ............c66333333c..
            ........bccc66cc333333c.
            ........b55c6c55c33333c.
            ........ff5c6c5ff6333cc.
            ........ff5ccc5ff6666cc.
            .........b55355ccc3333c.
            .........c55555b55c333c.
            ........c445544bb5c33c..
            ........c55b444b555bc...
            ........c555444c555cb...
            .........cccc4c5555cc...
            ...........cccccccccc...
            `,img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55554cc33333c
            ........c554554c55c333c.
            ........b54b444c555bcc..
            ........c455b44c555cbb..
            ........c555c4c5555cc5b.
            ........c5555c4cccccc5c.
            .........cccccc.....ccc.
            `],
        150,
        true
        )
    }
    crab.setFlag(SpriteFlag.BounceOnWall, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Crab, function (sprite, otherSprite) {
    timer.throttle("Crab Attack", 500, function () {
        animation.stopAnimation(animation.AnimationTypes.All, crab)
        if (falling == 0) {
            crab.setVelocity(0, 0)
            if (crabDirection == -1) {
                animation.runImageAnimation(
                crab,
                [img`
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    ..........cc.c6cc33333c.
                    .........b55c6c55c33333c
                    .........ff5c6c5ff33333c
                    .........ff5c6c5ff6333cc
                    .........b553c355c6666cc
                    ..........b55355c333333c
                    .........cc55555bcc3333c
                    ........c5545554b55c33c.
                    ........b54b4444bb5cbb..
                    ........c455b4b5554c45b.
                    ........c555c4c555c4c5c.
                    ........c5555c5555c4c5c.
                    .........ccccccccc..ccc.
                    `,img`
                    ........................
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    .............c66333333c.
                    ..........bccc66cc33333c
                    ..........b55c6c55c3333c
                    ..........ff5c6c5ff333cc
                    ..........ff5ccc5ff666cc
                    ...........b55355c33333c
                    ..........cc55555bcc333c
                    .........c5cccccccc5c3c.
                    .........c5555c55555cb..
                    .........c555c4c5554c5b.
                    .........c455c4c555c45c.
                    ..........ccc444ccccccc.
                    `,img`
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    ............ccccccc333c.
                    ...........c555c555c333c
                    ..........c555c4c555c33c
                    ..........c555c4c555c33c
                    ..........cc55ccc555c3cc
                    .........c55c5c55c55c6cc
                    .........ff5ccc5ffc4c33c
                    .........ff5ccc5ffc5c33c
                    .........c553c355c45ccc.
                    ..........c55555c44c45c.
                    ..........cc55554cccc5c.
                    ...........cc5554cccc5c.
                    ............cccccc..ccc.
                    `,img`
                    ....................cc..
                    ............cccccccc63c.
                    ...........c555c555c36cc
                    ..........c555c4c555c33c
                    ..........c555c4c555c33c
                    ..........c555c4c555c33c
                    ..........cc55ccc555c3cc
                    .........ff5ccc5ff55c6cc
                    .........ff5ccc5ffc4c33c
                    .........c55ccc55cc5c33c
                    .........c55ccc55cc5c33c
                    .........c553c355c45ccc.
                    ..........c55555c44c45c.
                    ..........cc55554cccc5c.
                    ...........cc5554cccc5c.
                    ............cccccc..ccc.
                    `,img`
                    ........................
                    ........................
                    ........................
                    ...................cc...
                    ...............cccc63c..
                    .............cc633336cc.
                    ............c6666333333c
                    ............c6666633333c
                    .........cc.cccc666333cc
                    ........c55ccc55c66666cc
                    ........ff5ccc5ff663333c
                    ........ff5ccc5ff633333c
                    ....bbbbbbbb5555c333333c
                    ...c55c555554ccccc3c45c.
                    ..c55c55555545554cccc5c.
                    ..ccccccccccccccccc.ccc.
                    `,img`
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    .............c66333333c.
                    ............c6666333333c
                    .........bccc66cc633333c
                    .........b55c6c55c6333cc
                    .........ff5c6c5ff6666cc
                    .........ff53cc5ff33333c
                    ..........b553555c33333c
                    ..........c45554c33333c.
                    .......bbbbbb44bccccbb..
                    ......c5b555bbc55ccc45b.
                    ......c5c5555455ccccc5c.
                    .....c5c5555545cc...c5c.
                    .....ccccccccccc....ccc.
                    `,img`
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    ..........cc.c6cc33333c.
                    .........b55c6c55c33333c
                    .........ff5c6c5ff33333c
                    .........ff5c6c5ff6333cc
                    .........b553c355c6666cc
                    ..........b55355c333333c
                    .........cc55555bcc3333c
                    ........c5545554b55c33c.
                    ........b54b4444bb5cbb..
                    ........c455b4b5554c45b.
                    ........c555c4c555c4c5c.
                    ........c5555c5555c4c5c.
                    .........ccccccccc..ccc.
                    `],
                100,
                false
                )
            } else {
                animation.runImageAnimation(
                crab,
                [img`
                    ........................
                    ...cc...................
                    ..c36cccc...............
                    ..c633336c..............
                    .c33333366c.............
                    c33333cc66cccb..........
                    c3333c55c6c55b..........
                    cc333ff5c6c5ff..........
                    cc666ff5ccc5ff..........
                    c33333c55355b...........
                    c333ccb55555cc..........
                    .c3c5cccccccc5c.........
                    ..bc55555c5555c.........
                    .b5c4555c4c555c.........
                    .c54c555c4c554c.........
                    .ccccccc444ccc..........
                    `,img`
                    ...cc...................
                    ..c36cccc...............
                    ..c633336c..............
                    .c333ccccccc............
                    c333c555c555c...........
                    c33c555c4c555c..........
                    c33c555c4c555c..........
                    cc3c555ccc55cc..........
                    cc6c55c55c5c55c.........
                    c33c4cff5ccc5ff.........
                    c33c5cff5ccc5ff.........
                    .ccc54c553c355c.........
                    .c54c44c55555c..........
                    .c5cccc45555cc..........
                    .c5cccc4555cc...........
                    .ccc..cccccc............
                    `,img`
                    ..cc....................
                    .c36cccccccc............
                    cc63c555c555c...........
                    c33c555c4c555c..........
                    c33c555c4c555c..........
                    c33c555c4c555c..........
                    cc3c555ccc55cc..........
                    cc6c55ff5ccc5ff.........
                    c33c4cff5ccc5ff.........
                    c33c5cc55ccc55c.........
                    c33c5cc55ccc55c.........
                    .ccc54c553c355c.........
                    .c54c44c55555c..........
                    .c5cccc45555cc..........
                    .c5cccc4555cc...........
                    .ccc..cccccc............
                    `,img`
                    ........................
                    ........................
                    ........................
                    ...cc...................
                    ..c36cccc...............
                    .cc633336cc.............
                    c3333336666c............
                    c3333366666c............
                    cc333666cccc.cc.........
                    cc66666c55ccc55c........
                    c333366ff5ccc5ff........
                    c333336ff5ccc5ff........
                    c333333c5555bbbbbbbb....
                    .c54c3ccccc455555c55c...
                    .c5cccc45554555555c55c..
                    .ccc.ccccccccccccccccc..
                    `,img`
                    ...cc...................
                    ..c36cccc...............
                    ..c633336c..............
                    .c33333366c.............
                    c3333336666c............
                    c333336cc66cccb.........
                    cc3336c55c6c55b.........
                    cc6666ff5c6c5ff.........
                    c33333ff5cc35ff.........
                    c33333c555355b..........
                    .c33333c45554c..........
                    ..bbccccb44bbbbbb.......
                    .b54ccc55cbb555b5c......
                    .c5ccccc5545555c5c......
                    .c5c...cc5455555c5c.....
                    .ccc....ccccccccccc.....
                    `,img`
                    ....c...................
                    ..cc6cccc...............
                    ..c333336c..............
                    .c36333cc6c.cc..........
                    c33333c55c6c55b.........
                    c33333ff5c6c5ff.........
                    cc3336ff5c6c5ff.........
                    cc6366c553c355b.........
                    c336333c55355b..........
                    c3333ccb55555cc.........
                    .c33c55b4555455.........
                    ..b3c5bb4444b45c........
                    .b5bc4555b4b554b........
                    .c544c555c4c555c........
                    .c5c4c5555c5555c........
                    .ccc..cccccccccc........
                    `],
                100,
                false
                )
            }
            pause(400)
        } else {
            animation.runImageAnimation(
            crab,
            [img`
                ....................cc..
                ............cccccccc63c.
                ...........c555c555c36cc
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........cc55ccc555c3cc
                .........ff5ccc5ff55c6cc
                .........ff5ccc5ffc4c33c
                .........c55ccc55cc5c33c
                .........c55ccc55cc5c33c
                .........c553c355c45ccc.
                ..........c55555c44c45c.
                ..........cc55554cccc5c.
                ...........cc5554cccc5c.
                ............cccccc..ccc.
                `,img`
                ........................
                ........................
                ........................
                .................cc.....
                .............cccc63c....
                ...........cc633336cc...
                ..........c6666333333c..
                ..........c6666633333c..
                .......cc.cccc666333cc..
                ......c55ccc55c66666cc..
                ......ff5ccc5ff663333c..
                ......ff5ccc5ff633333c..
                ..bbbbbbbb5555c333333c..
                .c55c555554ccccc3c45c...
                c55c55555545554cccc5c...
                ccccccccccccccccc.ccc...
                `,img`
                ...................cc...
                ...............cccc63c..
                ..............c633336c..
                .............c66333333c.
                ............c6666333333c
                .........bccc66cc633333c
                .........b55c6c55c6333cc
                .........ff5c6c5ff6666cc
                .........ff53cc5ff33333c
                ..........b553555c33333c
                ..........c45554c33333c.
                .......bbbbbb44bccccbb..
                ......c5b555bbc55ccc45b.
                ......c5c5555455ccccc5c.
                .....c5c5555545cc...c5c.
                .....ccccccccccc....ccc.
                `,img`
                ........................
                ...................cc...
                ...............cccc63c..
                ..............c633336c..
                .............c66333333c.
                ..........bccc66cc33333c
                ..........b55c6c55c3333c
                ..........ff5c6c5ff333cc
                ..........ff5ccc5ff666cc
                ...........b55355c33333c
                ..........cc55555bcc333c
                .........c5cccccccc5c3c.
                .........c5555c55555cb..
                .........c555c4c5554c5b.
                .........c455c4c555c45c.
                ..........ccc444ccccccc.
                `],
            100,
            false
            )
            pause(100)
        }
        if (mySprite.overlapsWith(crab)) {
            music.powerDown.play()
            mySprite.say("-50pts", 750)
            info.changeScoreBy(-50)
        }
        pause(300)
        if (falling == 1) {
            animation.runImageAnimation(
            crab,
            [img`
                ...................cc...
                ...............cccc63c..
                ..............c633336c..
                ............ccccccc333c.
                ...........c555c555c333c
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........cc55ccc555c3cc
                .........c55c5c55c55c6cc
                .........ff5ccc5ffc4c33c
                .........ff5ccc5ffc5c33c
                .........c553c355c45ccc.
                ..........c55555c44c45c.
                ..........cc55554cccc5c.
                ...........cc5554cccc5c.
                ............cccccc..ccc.
                `,img`
                ....................cc..
                ............cccccccc63c.
                ...........c555c555c36cc
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........cc55ccc555c3cc
                .........ff5ccc5ff55c6cc
                .........ff5ccc5ffc4c33c
                .........c55ccc55cc5c33c
                .........c55ccc55cc5c33c
                .........c553c355c45ccc.
                ..........c55555c44c45c.
                ..........cc55554cccc5c.
                ...........cc5554cccc5c.
                ............cccccc..ccc.
                `],
            500,
            true
            )
        } else {
            if (crabDirection == -1) {
                crab.setVelocity(-30, 0)
                animation.runImageAnimation(
                crab,
                [img`
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    ..........cc.c6cc33333c.
                    .........b55c6c55c33333c
                    .........ff5c6c5ff33333c
                    .........ff5c6c5ff6333cc
                    .........b553c355c6666cc
                    ..........b55355c333333c
                    .........cc55555bcc3333c
                    ........c5545554b55c33c.
                    ........b54b4444bb5cbb..
                    ........c455b4b5554c45b.
                    ........c555c4c555c4c5c.
                    ........c5555c5555c4c5c.
                    .........ccccccccc..ccc.
                    `,img`
                    ..................cc....
                    ..............cccc63c...
                    .............c633336c...
                    .........cc.c6cc33333c..
                    ........b55c6c55c33333c.
                    ........ff5c6c5ff33333c.
                    ........ff5c6c5ff6333cc.
                    ........b553c355c6666cc.
                    .........b55355c333333c.
                    .........c5555bcc33333c.
                    .........c4554b55c333c..
                    ........c5b44bb5ccbbb...
                    ........c44b5554c4445b..
                    ........c54c555c444c5c..
                    ........c5c5555c444ccc..
                    .........ccccccc........
                    `,img`
                    ........................
                    ...................cc...
                    ...............cccc63c..
                    ..............c663336c..
                    .............c66333333c.
                    .........bccc66cc333333c
                    .........b55c6c55c33333c
                    .........ff5c6c5ff6333cc
                    .........ff5ccc5ff6666cc
                    ..........b55355c333333c
                    ..........c55554ccc3333c
                    ..........c45544b55c33c.
                    ..........c5b44bb5cbbc..
                    ..........cc54c555cc5c..
                    ............cc5555cccc..
                    .............cccccc.....
                    `,img`
                    ........................
                    ..................cc....
                    ..............cccc63c...
                    .............c663336c...
                    ............c66333333c..
                    ........bccc66cc333333c.
                    ........b55c6c55c33333c.
                    ........ff5c6c5ff6333cc.
                    ........ff5ccc5ff6666cc.
                    .........b55355ccc3333c.
                    .........c55555b55c333c.
                    ........c445544bb5c33c..
                    ........c55b444b555bc...
                    ........c555444c555cb...
                    .........cccc4c5555cc...
                    ...........cccccccccc...
                    `,img`
                    ...................cc...
                    ...............cccc63c..
                    ..............c633336c..
                    ..........cc.c6cc33333c.
                    .........b55c6c55c33333c
                    .........ff5c6c5ff33333c
                    .........ff5c6c5ff6333cc
                    .........b553c355c6666cc
                    ..........b55355c333333c
                    .........cc55554cc33333c
                    ........c554554c55c333c.
                    ........b54b444c555bcc..
                    ........c455b44c555cbb..
                    ........c555c4c5555cc5b.
                    ........c5555c4cccccc5c.
                    .........cccccc.....ccc.
                    `],
                150,
                true
                )
            } else {
                crab.setVelocity(30, 0)
                animation.runImageAnimation(
                crab,
                [img`
                    ...cc...................
                    ..c36cccc...............
                    ..c633336c..............
                    .c33333cc6c.cc..........
                    c33333c55c6c55b.........
                    c33333ff5c6c5ff.........
                    cc3336ff5c6c5ff.........
                    cc6666c553c355b.........
                    c333333c55355b..........
                    c3333ccb55555cc.........
                    .c33c55b4555455c........
                    ..bbc5bb4444b45b........
                    .b54c4555b4b554c........
                    .c5c4c555c4c555c........
                    .c5c4c5555c5555c........
                    .ccc..ccccccccc.........
                    `,img`
                    ....c...................
                    ...c6cccc...............
                    ..c333336c..............
                    ..c6333cc6c.cc..........
                    .c3333c55c6c55b.........
                    c33333ff5c6c5ff.........
                    c33336ff5c6c5ff.........
                    cc3366c553c355b.........
                    cc66333c55355b..........
                    c33333ccb5555c..........
                    c3333c55b4554c..........
                    .c33bcc5bb44b5c.........
                    ..bb44c4555b44c.........
                    .b54444c555c45c.........
                    .c5c444c5555c5c.........
                    .ccc...ccccccc..........
                    `,img`
                    ........................
                    ...cc...................
                    ..c36cccc...............
                    ..c633366c..............
                    .c33333366c.............
                    c333333cc66cccb.........
                    c33333c55c6c55b.........
                    cc3336ff5c6c5ff.........
                    cc6666ff5ccc5ff.........
                    c333333c55355b..........
                    c3333ccc45555c..........
                    .c33c55b44554c..........
                    ..cbbc5bb44b5c..........
                    ..c5cc555c45cc..........
                    ..cccc5555cc............
                    .....cccccc.............
                    `,img`
                    ........................
                    ...cc...................
                    ..c36cccc...............
                    ..c633366c..............
                    .c33333366c.............
                    c333333cc66cccb.........
                    c33333c55c6c55b.........
                    cc3336ff5c6c5ff.........
                    cc6666ff5ccc5ff.........
                    c3333ccc55355b..........
                    c333c55b55555c..........
                    .c33c5bb445544c.........
                    ..cb555b444b55c.........
                    ..bc555c444555c.........
                    ..cc5555c4cccc..........
                    ..cccccccccc............
                    `,img`
                    ...cc...................
                    ..c36cccc...............
                    ..c633336c..............
                    .c33333cc6..cc..........
                    c33333c55ccc55b.........
                    c33333ff5c6c5ff.........
                    cc3336ff5c6c5ff.........
                    cc6666c5536355b.........
                    c333333c55c55b..........
                    c33333cc45355cc.........
                    .c333c55c455455c........
                    ..ccb555c454b45b........
                    ..bbc555c44b554c........
                    .b5cc5555c4c555c........
                    .c5cccccc445555c........
                    .ccc.....cccccc.........
                    `],
                150,
                true
                )
            }
        }
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("Bite", 100, function () {
        bite = 1
        if (direction == -1) {
            animation.runImageAnimation(
            mySprite,
            [img`
                .................ccfff..............
                ................cddbbf..............
                ...............cddbbf...............
                .........ffffffccbbcf...............
                ......fffbbbbbbbbcccff..............
                .....fbbbbbbbbbbbbbbbcfff......ccccc
                .....bcbbbbbffbcbcbbbbcccff...cdbbbc
                .....bbb1111ffbbcbcbbbcccccffcddbbc.
                .....fb11111111bcbcbbbcccccccbdbbf..
                ......fccc33c11bbbbbbcccccccccbbcf..
                .......fc131cc11bbbbccccccccffbccf..
                ........f33c1111bbbcccccbdbc..fbbcf.
                .........ff1111cbbbfdddddcc....fbbf.
                ...........ccc1fbdbbfddcc.......fbbf
                ..............ccfbdbbfc..........fff
                .................fffff..............
                `,img`
                ..................ccfff.............
                .................cddbbf.............
                ........fffffffffddbbf..............
                .......fbbbbbbbbbfcbcf..............
                .......fbbc111bffbbccffff...........
                .......fb111111ffbbbbbcccff....ccccc
                ........f1cc3311bbcbcbbccccf..cdbbbc
                ........fcc131c1bbbcbcbcccccfcddbbc.
                .........f111111bbbcbcbccccccbdbbf..
                .........f1111111bbbbbccccccccbbcf..
                ..........f111111bbbbcccccccffbccf..
                ...........c1111cbbbcccccbdbc.fbbcf.
                ............cc11cbbbfddddddc...fbbf.
                ..............cffbdbbfdddcc.....fbbf
                .................fbdbbfcc........fff
                ..................fffff.............
                `,img`
                ....................ccfff...........
                ..........fffffffffcbbbbf...........
                .........fbbbbbbbbbfffbf............
                .........fbb111bffbbbbff............
                .........fb11111ffbbbbbcff..........
                .........f1cccc11bbcbcbcccf.........
                ..........fc1c1c1bbbcbcbcccf...ccccc
                ............c3331bbbcbcbccccfccddbbc
                ...........c333c1bbbbbbbcccccbddbcc.
                ...........c331c11bbbbbcccccccbbcc..
                ..........cc13c111bbbbccccccffbccf..
                ..........c111111cbbbcccccbbc.fccf..
                ...........cc1111cbbbfdddddc..fbbcf.
                .............cccffbdbbfdddc....fbbf.
                ..................fbdbbfcc......fbbf
                ...................fffff.........fff
                `,img`
                ...........fffffff...ccfff..........
                ..........fbbbbbbbffcbbbbf..........
                ..........fbb111bbbbbffbf...........
                ..........fb11111ffbbbbff...........
                ..........f1cccc1ffbbbbbcff.........
                ..........ffc1c1c1bbcbcbcccf........
                ...........fcc3331bbbcbcbcccf..ccccc
                ............c333c1bbbcbcbccccfcddbbc
                ............c333c1bbbbbbbcccccddbcc.
                ............c333c11bbbbbccccccbbcc..
                ...........cc331c11bbbbccccccfbccf..
                ...........cc13c11cbbbcccccbbcfccf..
                ...........c111111cbbbfdddddc.fbbcf.
                ............cc1111fbdbbfdddc...fbbf.
                ..............cccfffbdbbfcc.....fbbf
                ....................fffff........fff
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ccffff...............
                ..............cddbbbf...............
                .......ffffffcddbbbf................
                .....ffbbbbbbbbbbbbbcfff.......ccccc
                ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
                ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
                .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
                .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
                .ffbb1111fffbbcbbbbcccccccbcffbccf..
                ..ff111111111bbbbccccccbbbcc..fbbcf.
                ....ccccccc111bdbbbfddbccc.....ffbbf
                ........ccccccfbdbbbfcc..........fff
                ...............ffffff...............
                `],
            100,
            false
            )
            pause(500)
            animation.runImageAnimation(
            mySprite,
            [img`
                ..............cfff..............
                ............ccddbf..............
                ...........cbddbff.........ccc..
                ..........fccbbcf.........cbbc..
                ...fffffffccccccff.......cdbc...
                .ffcbbbbbbbbbbbbbcfff....cdbf...
                fcbbbbbbbbbcbbbbbbcccff.cdbf....
                fbcbbbbffbbbcbcbbbcccccffdcf....
                fbb1111ffbbbcbcbbbccccccbbcf....
                .fb11111111bbcbbbccccccccbbcf...
                ..fccc33cb11bbbbcccccccfffbbf...
                ...fc131c111bbbcccccbdbc..fbbf..
                ....f33c111cbbccdddddbc....fff..
                .....ff1111fdbbccddbcc..........
                .......cccccfdbbbfcc............
                .............fffff..............
                `,img`
                .............ccfff..............
                ............cddbbf..............
                ...........cddbbf...............
                ..........fccbbcf............ccc
                ....ffffffccccccff.........ccbbc
                ..ffbbbbbbbbbbbbbcfff.....cdbbc.
                ffbbbbbbbbbcbcbbbbcccff..cddbbf.
                fbcbbbbbffbbcbcbbbcccccfffdbbf..
                fbbb1111ff1bcbcbbbcccccccbbbcf..
                .fb11111111bbbbbbcccccccccbccf..
                ..fccc33cc11bbbbccccccccfffbbcf.
                ...fc131c111bbbcccccbdbc...fbbf.
                ....f33c111cbbbfdddddcc.....fbbf
                .....ff1111fbdbbfddcc........fff
                .......cccccfbdbbfc.............
                .............fffff..............
                `],
            500,
            true
            )
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                ..............fffcc.................
                ..............fbbddc................
                ...............fbbddc...............
                ccc............fcbbccffffff.........
                cbbcc.........ffcccbbbbbbbbfff......
                .cbbdc.....fffcbbbbbbbbbbbbbbbf.....
                .fbbddc..ffcccbbbbcbcbffbbbbbcb.....
                ..fbbdfffcccccbbbcbcbbff1111bbb.....
                ..fcbbbcccccccbbbcbcb11111111bf.....
                ..fccbcccccccccbbbbbb11c33cccf......
                .fcbbfffccccccccbbbb11cc131cf.......
                .fbbf...cbdbcccccbbb1111c33f........
                fbbf.....ccdddddfbbbc1111ff.........
                fff........ccddfbbdbf1ccc...........
                .............cfbbdbfcc..............
                ..............fffff.................
                `,img`
                .............fffcc..................
                .............fbbddc.................
                ..............fbbddfffffffff........
                ..............fcbcfbbbbbbbbbf.......
                ...........ffffccbbffb111cbbf.......
                ccccc....ffcccbbbbbff111111bf.......
                cbbbdc..fccccbbcbcbb1133cc1f........
                .cbbddcfcccccbcbcbbb1c131ccf........
                ..fbbdbccccccbcbcbbb111111f.........
                ..fcbbccccccccbbbbb1111111f.........
                ..fccbffcccccccbbbb111111f..........
                .fcbbf.cbdbcccccbbbc1111c...........
                .fbbf...cddddddfbbbc11cc............
                fbbf.....ccdddfbbdbffc..............
                fff........ccfbbdbf.................
                .............fffff..................
                `,img`
                ...........fffcc....................
                ...........fbbbbcfffffffff..........
                ............fbfffbbbbbbbbbf.........
                ............ffbbbbffb111bbf.........
                ..........ffcbbbbbff11111bf.........
                .........fcccbcbcbb11cccc1f.........
                ccccc...fcccbcbcbbb1c1c1cf..........
                cbbddccfccccbcbcbbb1333c............
                .ccbddbcccccbbbbbbb1c333c...........
                ..ccbbcccccccbbbbb11c133c...........
                ..fccbffccccccbbbb111c31cc..........
                ..fccf.cbbcccccbbbc111111c..........
                .fcbbf..cdddddfbbbc1111cc...........
                .fbbf....cdddfbbdbffccc.............
                fbbf......ccfbbdbf..................
                fff.........fffff...................
                `,img`
                ..........fffcc...fffffff...........
                ..........fbbbbcffbbbbbbbf..........
                ...........fbffbbbbb111bbf..........
                ...........ffbbbbff11111bf..........
                .........ffcbbbbbff1cccc1f..........
                ........fcccbcbcbb1c1c1cff..........
                ccccc..fcccbcbcbbb1c33ccf...........
                cbbddcfccccbcbcbbb1c333c............
                .ccbddcccccbbbbbbb1c333c............
                ..ccbbccccccbbbbb11c333c............
                ..fccbfccccccbbbb11c133cc...........
                ..fccfcbbcccccbbbc11c31cc...........
                .fcbbf.cdddddfbbbc111111c...........
                .fbbf...cdddfbbdbf1111cc............
                fbbf.....ccfbbdbfffccc..............
                fff........fffff....................
                `,img`
                ....................................
                ....................................
                ....................................
                ...............ffffcc...............
                ...............fbbbddc..............
                ................fbbbddcffffff.......
                ccccc.......fffcbbbbbbbbbbbbbff.....
                cbbbdc....ffcccbbbbbcbcbbbbbbbbff...
                .cbbddcfffcccccbbbbcbbcbbbbbbbbbbf..
                ..fbbdbccccccccbbbbcbcbbbbbbbbbbcbf.
                ..fcbbccccccccccbbbbbcbbfffbbbbbbbf.
                ..fccbffcbcccccccbbbbcbbfff1111bbff.
                .fcbbf..ccbbbccccccbbbb111111111ff..
                fbbff.....cccbddfbdbbb111ccccccc....
                fff..........ccfbdbbbfcccccc........
                ...............ffffff...............
                `],
            100,
            false
            )
            pause(500)
            animation.runImageAnimation(
            mySprite,
            [img`
                ..............fffcc.............
                ..............fbbddc............
                ...............fbbddc...........
                ccc............fcbbccf..........
                cbbcc.........ffccccccffffff....
                .cbbdc.....fffcbbbbbbbbbbbbbff..
                .fbbddc..ffcccbbbbcbcbbbbbbbbbff
                ..fbbdfffcccccbbbcbcbbffbbbbbcbf
                ..fcbbbcccccccbbbcbcb1ff1111bbbf
                ..fccbcccccccccbbbbbb11111111bf.
                .fcbbfffccccccccbbbb11cc33cccf..
                .fbbf...cbdbcccccbbb111c131cf...
                fbbf.....ccdddddfbbbc111c33f....
                fff........ccddfbbdbf1111ff.....
                .............cfbbdbfccccc.......
                ..............fffff.............
                `,img`
                ..............fffc..............
                ..............fbddcc............
                ..............ffbddbc...........
                ..ccc..........fcbbccf..........
                ..cbbc........ffccccccfffffff...
                ...cbdc....fffcbbbbbbbbbbbbbcff.
                ...fbdc..ffcccbbbbbbcbbbbbbbbbcf
                ....fbdcfcccccbbbcbcbbbffbbbbcbf
                ....fcdfccccccbbbcbcbbbff1111bbf
                ....fcbbcccccccbbbcbb11111111bf.
                ...fcbbcfcccccccbbbb11bc33cccf..
                ...fbbffcbdbcccccbbb111c131cf...
                ..fbbf...cbdddddccbbc111c33f....
                ..fff.....ccbddccbbdf1111ff.....
                ............ccfbbbdfccccc.......
                ..............fffff.............
                `],
            500,
            true
            )
        }
        if (mySprite.overlapsWith(commonFish1)) {
            commonFish1.destroy(effects.bubbles, 100)
            music.baDing.play()
            mySprite.say("+100pts", 750)
            info.changeScoreBy(100)
        }
        if (mySprite.overlapsWith(commonFish2)) {
            commonFish2.destroy(effects.bubbles, 100)
            mySprite.say("+100pts", 750)
            music.baDing.play()
            info.changeScoreBy(100)
        }
        if (clownfish && mySprite.overlapsWith(clownfish)) {
            t += 3
            info.startCountdown(t)
            clownfish.destroy(effects.bubbles, 100)
            music.powerUp.play()
            mySprite.say("+500pts", 750)
            pause(750)
            mySprite.say("+3sec", 750)
            info.changeScoreBy(500)
        }
        bite = 0
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = -1
    if (bite == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............cfff..............
            ............ccddbf..............
            ...........cbddbff.........ccc..
            ..........fccbbcf.........cbbc..
            ...fffffffccccccff.......cdbc...
            .ffcbbbbbbbbbbbbbcfff....cdbf...
            fcbbbbbbbbbcbbbbbbcccff.cdbf....
            fbcbbbbffbbbcbcbbbcccccffdcf....
            fbb1111ffbbbcbcbbbccccccbbcf....
            .fb11111111bbcbbbccccccccbbcf...
            ..fccc33cb11bbbbcccccccfffbbf...
            ...fc131c111bbbcccccbdbc..fbbf..
            ....f33c111cbbccdddddbc....fff..
            .....ff1111fdbbccddbcc..........
            .......cccccfdbbbfcc............
            .............fffff..............
            `,img`
            .............ccfff..............
            ............cddbbf..............
            ...........cddbbf...............
            ..........fccbbcf............ccc
            ....ffffffccccccff.........ccbbc
            ..ffbbbbbbbbbbbbbcfff.....cdbbc.
            ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            fbcbbbbbffbbcbcbbbcccccfffdbbf..
            fbbb1111ff1bcbcbbbcccccccbbbcf..
            .fb11111111bbbbbbcccccccccbccf..
            ..fccc33cc11bbbbccccccccfffbbcf.
            ...fc131c111bbbcccccbdbc...fbbf.
            ....f33c111cbbbfdddddcc.....fbbf
            .....ff1111fbdbbfddcc........fff
            .......cccccfbdbbfc.............
            .............fffff..............
            `],
        500,
        true
        )
    }
})
info.onCountdownEnd(function () {
    info.saveHighScore()
if (info.score() == info.highScore()) {
        game.splash("New High Score!", convertToText(info.score()))
    } else {
        game.splash("Score: ", convertToText(info.score()))
        game.splash("High Score: ", convertToText(info.highScore()))
    }
    game.reset()
})
scene.onHitWall(SpriteKind.CommonFish, function (sprite, location) {
    if (commonFish1.isHittingTile(CollisionDirection.Left)) {
        animation.runImageAnimation(
        commonFish1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b b b c . . . . 
            . . . c 1 1 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b 1 1 1 1 c . . . 
            c c b b 1 1 1 b 1 1 1 1 c . . . 
            c 5 5 5 1 b 1 b 1 1 1 d c c . . 
            c 5 b b 1 b 1 1 1 c 1 d c c . . 
            c 5 b f 1 b 1 1 1 1 1 d d c c . 
            c c . f b b b 1 1 1 1 1 d d d f 
            . . f 5 5 5 b b 1 1 1 f f f f f 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c c . . . . . . . . 
            . . c 5 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b b 1 1 1 b 1 1 1 d c . . . 
            c 5 5 5 1 b 1 b 1 c 1 d c c . . 
            c 5 b b 1 b 1 1 1 1 1 d d c c . 
            c c . f 1 b b 1 1 1 1 1 d d d f 
            . . . f b b b 1 1 1 1 1 1 f f f 
            . . f 5 5 b b b 1 1 1 f f . . . 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            `,img`
            . . c c c c c . . . . . . . . . 
            . c c 5 5 5 5 c c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c c . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b c 1 1 1 b 1 1 1 d c . . . 
            c 5 b b 1 1 1 b 1 c 1 d c c . . 
            c 5 5 5 1 b 1 b 1 1 1 d d c c c 
            c c b b 1 b 1 1 1 1 1 1 d d d f 
            . . . f 1 b b 1 1 1 1 1 1 f f . 
            . . . f b b b 1 1 1 1 1 f . . . 
            . . . f 5 5 b b 1 1 f f . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . c c c c c . . . . . . . . 
            . . c 5 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b b 1 1 1 b 1 1 1 d c . . . 
            c 5 5 5 1 b 1 b 1 c 1 d c c . . 
            c 5 b b 1 b 1 1 1 1 1 d d c c . 
            c c . f 1 b b 1 1 1 1 1 d d d f 
            . . . f b b b 1 1 1 1 1 1 f f f 
            . . f 5 5 b b b 1 1 1 f f . . . 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    if (commonFish2.isHittingTile(CollisionDirection.Left)) {
        animation.runImageAnimation(
        commonFish2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b b b c . . . . 
            . . . c 1 1 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b 1 1 1 1 c . . . 
            c c b b 1 1 1 b 1 1 1 1 c . . . 
            c 5 5 5 1 b 1 b 1 1 1 d c c . . 
            c 5 b b 1 b 1 1 1 c 1 d c c . . 
            c 5 b f 1 b 1 1 1 1 1 d d c c . 
            c c . f b b b 1 1 1 1 1 d d d f 
            . . f 5 5 5 b b 1 1 1 f f f f f 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c c . . . . . . . . 
            . . c 5 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b b 1 1 1 b 1 1 1 d c . . . 
            c 5 5 5 1 b 1 b 1 c 1 d c c . . 
            c 5 b b 1 b 1 1 1 1 1 d d c c . 
            c c . f 1 b b 1 1 1 1 1 d d d f 
            . . . f b b b 1 1 1 1 1 1 f f f 
            . . f 5 5 b b b 1 1 1 f f . . . 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            `,img`
            . . c c c c c . . . . . . . . . 
            . c c 5 5 5 5 c c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c c . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b c 1 1 1 b 1 1 1 d c . . . 
            c 5 b b 1 1 1 b 1 c 1 d c c . . 
            c 5 5 5 1 b 1 b 1 1 1 d d c c c 
            c c b b 1 b 1 1 1 1 1 1 d d d f 
            . . . f 1 b b 1 1 1 1 1 1 f f . 
            . . . f b b b 1 1 1 1 1 f . . . 
            . . . f 5 5 b b 1 1 f f . . . . 
            . . . f 5 5 5 5 5 f . . . . . . 
            . . . f f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . c c c c c . . . . . . . . 
            . . c 5 5 5 5 5 c c . . . . . . 
            . c 5 5 5 5 5 5 5 5 c . . . . . 
            . c 5 5 5 b b b b b b c . . . . 
            . . c c b b 1 b b 1 1 c . . . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            c c . c 1 1 1 b 1 1 1 1 c . . . 
            c 5 b b 1 1 1 b 1 1 1 d c . . . 
            c 5 5 5 1 b 1 b 1 c 1 d c c . . 
            c 5 b b 1 b 1 1 1 1 1 d d c c . 
            c c . f 1 b b 1 1 1 1 1 d d d f 
            . . . f b b b 1 1 1 1 1 1 f f f 
            . . f 5 5 b b b 1 1 1 f f . . . 
            . . f 5 5 5 5 5 f f f . . . . . 
            . . f f f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    if (commonFish1.isHittingTile(CollisionDirection.Right)) {
        animation.runImageAnimation(
        commonFish1,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c c . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c b b b b 1 b b c c . . 
            . . . . c 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 b b c c 
            . . c c d 1 1 1 b 1 b 1 5 5 5 c 
            . . c c d 1 c 1 1 1 b 1 b b 5 c 
            . c c d d 1 1 1 1 1 b 1 f b 5 c 
            f d d d 1 1 1 1 1 b b b f . c c 
            f f f f f 1 1 1 b b 5 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . c c c c c . . 
            . . . . . . c c c 5 5 5 5 c c . 
            . . . . c c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . c 1 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 c b 5 c 
            . . c c d 1 c 1 b 1 1 1 b b 5 c 
            c c c d d 1 1 1 b 1 b 1 5 5 5 c 
            f d d d 1 1 1 1 1 1 b 1 b b c c 
            . f f 1 1 1 1 1 1 b b 1 f . . . 
            . . . f 1 1 1 1 1 b b b f . . . 
            . . . . f f 1 1 b b 5 5 f . . . 
            . . . . . . f 5 5 5 5 5 f . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    if (commonFish2.isHittingTile(CollisionDirection.Right)) {
        animation.runImageAnimation(
        commonFish2,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c c . . . 
            . . . . . . c 5 5 5 5 5 c c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c b b b b 1 b b c c . . 
            . . . . c 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 b b c c 
            . . c c d 1 1 1 b 1 b 1 5 5 5 c 
            . . c c d 1 c 1 1 1 b 1 b b 5 c 
            . c c d d 1 1 1 1 1 b 1 f b 5 c 
            f d d d 1 1 1 1 1 b b b f . c c 
            f f f f f 1 1 1 b b 5 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            `,img`
            . . . . . . . . . c c c c c . . 
            . . . . . . c c c 5 5 5 5 c c . 
            . . . . c c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . c 1 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 c b 5 c 
            . . c c d 1 c 1 b 1 1 1 b b 5 c 
            c c c d d 1 1 1 b 1 b 1 5 5 5 c 
            f d d d 1 1 1 1 1 1 b 1 b b c c 
            . f f 1 1 1 1 1 1 b b 1 f . . . 
            . . . f 1 1 1 1 1 b b b f . . . 
            . . . . f f 1 1 b b 5 5 f . . . 
            . . . . . . f 5 5 5 5 5 f . . . 
            . . . . . . . f f f f f f . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c c . . . 
            . . . . . . c c 5 5 5 5 5 c . . 
            . . . . . c 5 5 5 5 5 5 5 5 c . 
            . . . . c b b b b b b 5 5 5 c . 
            . . . . c 1 1 b b 1 b b c c . . 
            . . . c 1 1 1 b b 1 1 1 c . . . 
            . . . c 1 1 1 1 b 1 1 1 c . c c 
            . . . c d 1 1 1 b 1 1 1 b b 5 c 
            . . c c d 1 c 1 b 1 b 1 5 5 5 c 
            . c c d d 1 1 1 1 1 b 1 b b 5 c 
            f d d d 1 1 1 1 1 b b 1 f . c c 
            f f f 1 1 1 1 1 1 b b b f . . . 
            . . . f f 1 1 1 b b b 5 5 f . . 
            . . . . . f f f 5 5 5 5 5 f . . 
            . . . . . . . . f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    commonFish1.setFlag(SpriteFlag.BounceOnWall, true)
    commonFish2.setFlag(SpriteFlag.BounceOnWall, true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    if (bite == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..............fffcc.............
            ..............fbbddc............
            ...............fbbddc...........
            ccc............fcbbccf..........
            cbbcc.........ffccccccffffff....
            .cbbdc.....fffcbbbbbbbbbbbbbff..
            .fbbddc..ffcccbbbbcbcbbbbbbbbbff
            ..fbbdfffcccccbbbcbcbbffbbbbbcbf
            ..fcbbbcccccccbbbcbcb1ff1111bbbf
            ..fccbcccccccccbbbbbb11111111bf.
            .fcbbfffccccccccbbbb11cc33cccf..
            .fbbf...cbdbcccccbbb111c131cf...
            fbbf.....ccdddddfbbbc111c33f....
            fff........ccddfbbdbf1111ff.....
            .............cfbbdbfccccc.......
            ..............fffff.............
            `,img`
            ..............fffc..............
            ..............fbddcc............
            ..............ffbddbc...........
            ..ccc..........fcbbccf..........
            ..cbbc........ffccccccfffffff...
            ...cbdc....fffcbbbbbbbbbbbbbcff.
            ...fbdc..ffcccbbbbbbcbbbbbbbbbcf
            ....fbdcfcccccbbbcbcbbbffbbbbcbf
            ....fcdfccccccbbbcbcbbbff1111bbf
            ....fcbbcccccccbbbcbb11111111bf.
            ...fcbbcfcccccccbbbb11bc33cccf..
            ...fbbffcbdbcccccbbb111c131cf...
            ..fbbf...cbdddddccbbc111c33f....
            ..fff.....ccbddccbbdf1111ff.....
            ............ccfbbbdfccccc.......
            ..............fffff.............
            `],
        500,
        true
        )
    }
})
scene.onHitWall(SpriteKind.Clownfish, function (sprite, location) {
    if (clownfish.isHittingTile(CollisionDirection.Left)) {
        animation.runImageAnimation(
        clownfish,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            . . . c c d 4 4 4 4 c c . . . . 
            c c . c 1 4 4 4 4 4 d 4 c . . . 
            c 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            c 4 c 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 f 1 4 4 4 c c 1 4 f 4 4 4 f 
            f 4 f d 4 4 f 4 4 1 4 4 4 4 4 f 
            f f f f d 4 f 4 c 1 4 4 4 4 f . 
            . . c f c 4 f f 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . c c c c c . . . . . . . 
            . . . c d d d d d c . . . . . . 
            . . . c d c c c c c . . . . . . 
            . . . c c d 4 4 4 4 c . . . . . 
            . . . c 1 4 4 4 4 4 d c . . . . 
            . . c 1 4 4 4 4 4 1 4 4 c . . . 
            c c c 1 4 4 4 4 1 4 4 4 4 c . . 
            c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
            f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
            f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
            f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
            f f c b c 4 4 4 4 1 4 4 4 4 f . 
            . . c d d c 4 4 4 4 d f f f . . 
            . . . c c c f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . c c c c . . . . . . . . 
            . . . c d d d d c c . . . . . . 
            . . . c d c c c c c c . . . . . 
            c c . c c d 4 4 4 4 c c . . . . 
            c 4 c c 1 4 4 4 4 4 d 4 c . . . 
            f 4 c 1 d 4 4 4 4 1 4 4 4 c . . 
            f 4 4 1 4 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 f c 1 1 4 4 4 4 4 f 
            f 4 f 1 4 4 f 4 c 1 4 f 4 4 4 f 
            f f f d 4 4 f 4 4 1 4 4 4 4 4 f 
            . . f f d 4 4 c c 1 4 4 4 4 f . 
            . . . f c 4 4 4 4 4 d 4 f f . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . c c c c . . . . . . . . . 
            . . c d d d d c c . . . . . . . 
            . . c d d c c c c c c . . . . . 
            c c c c c d 4 4 4 4 c c c . . . 
            f 4 c c 1 4 4 4 4 4 1 4 4 c . . 
            f 4 f 1 d 4 4 4 4 1 4 4 4 4 c . 
            f 4 f 1 4 4 4 4 4 1 4 4 4 4 4 f 
            f 4 4 1 4 4 f c 4 1 4 4 f 4 4 f 
            f f f 1 4 4 f 4 c 1 4 4 4 4 4 f 
            . . f d 4 4 f 4 4 1 4 4 4 4 f . 
            . . . f d 4 4 c c 4 1 4 4 f . . 
            . . . f c 4 4 4 4 4 4 d f . . . 
            . . c b d c 4 4 4 4 f f . . . . 
            . . c d d d f f f f . . . . . . 
            . . . c c c . . . . . . . . . . 
            `],
        100,
        true
        )
    }
    if (clownfish.isHittingTile(CollisionDirection.Right)) {
        animation.runImageAnimation(
        clownfish,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        100,
        true
        )
    }
    clownfish.setFlag(SpriteFlag.BounceOnWall, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Clam, function (sprite, otherSprite) {
    if (pearlGet == 0 && pearl == 1) {
        pearlGet = 1
        t += 2
        info.startCountdown(t)
        music.powerUp.play()
        clam.destroy()
        clam = sprites.create(img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c c c c c c b b f . . 
            . . c c c f f f f f f c c c . . 
            . c 3 f f f f f f f f f f 3 c . 
            c 3 f f f f f f f f f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Clam)
        clam.setPosition(clamX, 220)
        clam.startEffect(effects.confetti, 1500)
        mySprite.say("+300pts", 750)
        pause(750)
        mySprite.say("+2sec", 750)
        info.changeScoreBy(300)
        pearl = 0
    }
})
let pearl = 0
let pearlGet = 0
let clownfish: Sprite = null
let commonFish2: Sprite = null
let commonFish1: Sprite = null
let direction = 0
let bite = 0
let crabDirection = 0
let falling = 0
let crab: Sprite = null
let clamX = 0
let clam: Sprite = null
let mySprite: Sprite = null
let t = 0
game.splash("Shark Adventure!", "Press 'A' to Eat Fish")
game.splash("Watch Out for Crabs!", "Try to Find the Pearl!")
tiles.setTilemap(tilemap`level`)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
info.startCountdown(60)
info.setScore(0)
t = 60
mySprite = sprites.create(img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
animation.runImageAnimation(
mySprite,
[img`
    ..............cfff..............
    ............ccddbf..............
    ...........cbddbff.........ccc..
    ..........fccbbcf.........cbbc..
    ...fffffffccccccff.......cdbc...
    .ffcbbbbbbbbbbbbbcfff....cdbf...
    fcbbbbbbbbbcbbbbbbcccff.cdbf....
    fbcbbbbffbbbcbcbbbcccccffdcf....
    fbb1111ffbbbcbcbbbccccccbbcf....
    .fb11111111bbcbbbccccccccbbcf...
    ..fccc33cb11bbbbcccccccfffbbf...
    ...fc131c111bbbcccccbdbc..fbbf..
    ....f33c111cbbccdddddbc....fff..
    .....ff1111fdbbccddbcc..........
    .......cccccfdbbbfcc............
    .............fffff..............
    `,img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `],
500,
true
)
clam = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . c c c c c c c c . . . . 
    . . c c b b 3 b 3 3 b b c c . . 
    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
    c d d b 3 3 b 3 3 b 3 3 b d d c 
    f c c c d d c d d c d d c c c f 
    f b 3 c c c b c c b c c c 3 b f 
    . c b b 3 3 b 3 3 b 3 3 b b c . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Clam)
clamX = randint(10, 250)
clam.setPosition(clamX, 220)
game.onUpdateInterval(5000, function () {
    if (commonFish1) {
        commonFish1.destroy(effects.bubbles, 100)
    }
    if (commonFish2) {
        commonFish2.destroy(effects.bubbles, 100)
    }
    commonFish1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `, SpriteKind.CommonFish)
    commonFish2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `, SpriteKind.CommonFish)
    commonFish1.setPosition(randint(10, 250), randint(10, 220))
    commonFish2.setPosition(randint(10, 250), randint(10, 220))
    commonFish1.setVelocity(-50, 0)
    commonFish2.setVelocity(50, 0)
    animation.runImageAnimation(
    commonFish1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c c . . . 
        . . . . . . c 5 5 5 5 5 c c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c b b b b 1 b b c c . . 
        . . . . c 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 b b c c 
        . . c c d 1 1 1 b 1 b 1 5 5 5 c 
        . . c c d 1 c 1 1 1 b 1 b b 5 c 
        . c c d d 1 1 1 1 1 b 1 f b 5 c 
        f d d d 1 1 1 1 1 b b b f . c c 
        f f f f f 1 1 1 b b 5 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,img`
        . . . . . . . . . c c c c c . . 
        . . . . . . c c c 5 5 5 5 c c . 
        . . . . c c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . c 1 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 c b 5 c 
        . . c c d 1 c 1 b 1 1 1 b b 5 c 
        c c c d d 1 1 1 b 1 b 1 5 5 5 c 
        f d d d 1 1 1 1 1 1 b 1 b b c c 
        . f f 1 1 1 1 1 1 b b 1 f . . . 
        . . . f 1 1 1 1 1 b b b f . . . 
        . . . . f f 1 1 b b 5 5 f . . . 
        . . . . . . f 5 5 5 5 5 f . . . 
        . . . . . . . f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    animation.runImageAnimation(
    commonFish2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b b b c . . . . 
        . . . c 1 1 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b 1 1 1 1 c . . . 
        c c b b 1 1 1 b 1 1 1 1 c . . . 
        c 5 5 5 1 b 1 b 1 1 1 d c c . . 
        c 5 b b 1 b 1 1 1 c 1 d c c . . 
        c 5 b f 1 b 1 1 1 1 1 d d c c . 
        c c . f b b b 1 1 1 1 1 d d d f 
        . . f 5 5 5 b b 1 1 1 f f f f f 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        `,img`
        . . c c c c c . . . . . . . . . 
        . c c 5 5 5 5 c c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c c . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b c 1 1 1 b 1 1 1 d c . . . 
        c 5 b b 1 1 1 b 1 c 1 d c c . . 
        c 5 5 5 1 b 1 b 1 1 1 d d c c c 
        c c b b 1 b 1 1 1 1 1 1 d d d f 
        . . . f 1 b b 1 1 1 1 1 1 f f . 
        . . . f b b b 1 1 1 1 1 f . . . 
        . . . f 5 5 b b 1 1 f f . . . . 
        . . . f 5 5 5 5 5 f . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . c c c c c . . . . . . . . 
        . . c 5 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        . c 5 5 5 b b b b b b c . . . . 
        . . c c b b 1 b b 1 1 c . . . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        c c . c 1 1 1 b 1 1 1 1 c . . . 
        c 5 b b 1 1 1 b 1 1 1 d c . . . 
        c 5 5 5 1 b 1 b 1 c 1 d c c . . 
        c 5 b b 1 b 1 1 1 1 1 d d c c . 
        c c . f 1 b b 1 1 1 1 1 d d d f 
        . . . f b b b 1 1 1 1 1 1 f f f 
        . . f 5 5 b b b 1 1 1 f f . . . 
        . . f 5 5 5 5 5 f f f . . . . . 
        . . f f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    if (Math.percentChance(25)) {
        if (clownfish) {
            clownfish.destroy(effects.bubbles, 100)
        }
        clownfish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.Clownfish)
        clownfish.setPosition(randint(10, 250), randint(10, 220))
        clownfish.setVelocity(75, 75)
        animation.runImageAnimation(
        clownfish,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . c c c c c . . . . 
            . . . . . . c d d d d d c . . . 
            . . . . . . c c c c c d c . . . 
            . . . . . c 4 4 4 4 d c c . . . 
            . . . . c d 4 4 4 4 4 1 c . . . 
            . . . c 4 4 1 4 4 4 4 4 1 c . . 
            . . c 4 4 4 4 1 4 4 4 4 1 c c c 
            . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
            . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
            f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
            f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
            . f 4 4 4 4 1 4 4 4 4 c b c f f 
            . . f f f d 4 4 4 4 c d d c . . 
            . . . . . f f f f f c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . c c 
            . . . c 4 d 4 4 4 4 4 1 c c 4 c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
            . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
            f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
            . f 4 4 4 4 1 c c 4 4 d f f . . 
            . . f f 4 d 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . c c d d d d c . . 
            . . . . . c c c c c c d d c . . 
            . . . c c c 4 4 4 4 d c c c c c 
            . . c 4 4 1 4 4 4 4 4 1 c c 4 f 
            . c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
            f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
            f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
            f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
            . f 4 4 4 4 1 4 4 f 4 4 d f . . 
            . . f 4 4 1 4 c c 4 4 d f . . . 
            . . . f d 4 4 4 4 4 4 c f . . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `],
        100,
        true
        )
    }
    if (Math.percentChance(30)) {
        if (crab) {
            crab.destroy(effects.bubbles, 100)
        }
        crabDirection = -1
        falling = 1
        crab = sprites.create(img`
            ........................
            ........................
            ........................
            ....................cc..
            ...............ccccc63c.
            ..............c6633366c.
            .............c666333333c
            ............c6666333333c
            ..........ccc6666633333c
            .........c333c666663333c
            ........c3ccc3c6666633cc
            ........c6cccc3c666666cc
            ........c6cccc66c663333c
            .........c6cccc6c633336c
            ..........c6ccccc63336c.
            ...........ccccccccccc..
            `, SpriteKind.Crab)
        crab.startEffect(effects.bubbles, 100)
        crab.setPosition(randint(10, 250), 10)
        crab.setVelocity(0, 50)
        animation.runImageAnimation(
        crab,
        [img`
            ........................
            ........................
            ........................
            ....................cc..
            ...............ccccc63c.
            ..............c6633366c.
            .............c666333333c
            ............c6666333333c
            ..........ccc6666633333c
            .........c333c666663333c
            ........c3ccc3c6666633cc
            ........c6cccc3c666666cc
            ........c6cccc66c663333c
            .........c6cccc6c633336c
            ..........c6ccccc63336c.
            ...........ccccccccccc..
            `,img`
            ........................
            ........................
            ........................
            ........................
            ...................cc...
            ..............ccccc63c..
            .............c6633336cc.
            ............c6666333336c
            ............c6666633333c
            ..........ccc6666663333c
            .........c333c66666666cc
            ........c6ccc3cc6663336c
            ........ccccccccc633333c
            ........c554cc554c66ccc.
            ........c455c555c666c...
            .........ccccccccccc....
            `,img`
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            .............c66333333c.
            ............c6666333333c
            .........ccccc66cc33333c
            ........b55c33cc55c333cc
            ........ff5ccc3c5ff666cc
            ........ff5ccccc5ff3333c
            .........b553c355c33333c
            .........c4455554cc333c.
            ........c4554444554cbb..
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ...................cc...
            ..........cc.cccc3c63c..
            .........ff5c6c5ff336c..
            .........ff5c6c5ff3333c.
            .........b555c555c33333c
            .........b555c555c63333c
            .........bb55355c36333cc
            .........bb55355c33366cc
            .........cc55555bcc3333c
            ........c5545554b55c333c
            ........b54b4444bb5c33c.
            ........c455b4b5554cbb..
            ........c555c4c555c445b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ........................
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........c55c6c55c33333c
            .........ff5c6c5ff6333cc
            .........ff53c35ff6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            ..........cc.c6cc33333c.
            .........b55c6c55c33333c
            .........ff5c6c5ff33333c
            .........ff5c6c5ff6333cc
            .........b553c355c6666cc
            ..........b55355c333333c
            .........cc55555bcc3333c
            ........c5545554b55c33c.
            ........b54b4444bb5cbb..
            ........c455b4b5554c45b.
            ........c555c4c555c4c5c.
            ........c5555c5555c4c5c.
            .........ccccccccc..ccc.
            `,img`
            ........................
            ...................cc...
            ...............cccc63c..
            ..............c633336c..
            .............c66333333c.
            ..........bccc66cc33333c
            ..........b55c6c55c3333c
            ..........ff5c6c5ff333cc
            ..........ff5ccc5ff666cc
            ...........b55355c33333c
            ..........cc55555bcc333c
            .........c5cccccccc5c3c.
            .........c5555c55555cb..
            .........c555c4c5554c5b.
            .........c455c4c555c45c.
            ..........ccc444ccccccc.
            `],
        200,
        false
        )
        timer.after(1400, function () {
            animation.runImageAnimation(
            crab,
            [img`
                ...................cc...
                ...............cccc63c..
                ..............c633336c..
                ............ccccccc333c.
                ...........c555c555c333c
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........cc55ccc555c3cc
                .........c55c5c55c55c6cc
                .........ff5ccc5ffc4c33c
                .........ff5ccc5ffc5c33c
                .........c553c355c45ccc.
                ..........c55555c44c45c.
                ..........cc55554cccc5c.
                ...........cc5554cccc5c.
                ............cccccc..ccc.
                `,img`
                ....................cc..
                ............cccccccc63c.
                ...........c555c555c36cc
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........c555c4c555c33c
                ..........cc55ccc555c3cc
                .........ff5ccc5ff55c6cc
                .........ff5ccc5ffc4c33c
                .........c55ccc55cc5c33c
                .........c55ccc55cc5c33c
                .........c553c355c45ccc.
                ..........c55555c44c45c.
                ..........cc55554cccc5c.
                ...........cc5554cccc5c.
                ............cccccc..ccc.
                `],
            500,
            true
            )
        })
    }
})
forever(function () {
    while (pearlGet == 0) {
        if (Math.percentChance(95)) {
            pause(5000)
            clam.destroy()
            clam = sprites.create(img`
                . . . . . f c c c c f . . . . . 
                . . c c f b b 3 3 b b f c c . . 
                . c b 3 3 b b c c b b 3 3 b c . 
                . f 3 c c c b c c b c c c 3 f . 
                f c b b c c b c c b c c b b c f 
                c 3 c c b c c c c c c b c c 3 c 
                c 3 c c c c c c c c c c c c 3 c 
                . f b b c c c c c c c c b b f . 
                . . f b b c c c c c c b b f . . 
                . . c c c f f f f f f c c c . . 
                . c 3 f f f f f f f f f f 3 c . 
                c 3 f f f f f f f f f f f f 3 c 
                f 3 c c f f f f f f f f c c 3 f 
                f b 3 c b b f b b f b b c 3 b f 
                . c b b 3 3 b 3 3 b 3 3 b b c . 
                . . f f f f f f f f f f f f . . 
                `, SpriteKind.Clam)
            pearl = 0
            clam.setPosition(clamX, 220)
            clam.startEffect(effects.bubbles, 500)
            pause(5000)
            clam.destroy()
            clam = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . c c c c c c c c . . . . 
                . . c c b b 3 b 3 3 b b c c . . 
                . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
                c d d b 3 3 b 3 3 b 3 3 b d d c 
                f c c c d d c d d c d d c c c f 
                f b 3 c c c b c c b c c c 3 b f 
                . c b b 3 3 b 3 3 b 3 3 b b c . 
                . . f f f f f f f f f f f f . . 
                `, SpriteKind.Clam)
            clam.setPosition(clamX, 220)
            clam.startEffect(effects.bubbles, 500)
        } else {
            pause(5000)
            clam.destroy()
            clam = sprites.create(img`
                . . . . . f c c c c f . . . . . 
                . . c c f b b 3 3 b b f c c . . 
                . c b 3 3 b b c c b b 3 3 b c . 
                . f 3 c c c b c c b c c c 3 f . 
                f c b b c c b c c b c c b b c f 
                c 3 c c b c c c c c c b c c 3 c 
                c 3 c c c c c c c c c c c c 3 c 
                . f b b c c c c c c c c b b f . 
                . . f b b c 8 9 9 8 c b b f . . 
                . . c c c f 9 3 1 9 f c c c . . 
                . c 3 f f f 9 3 3 9 f f f 3 c . 
                c 3 f f f f 8 9 9 8 f f f f 3 c 
                f 3 c c f f f f f f f f c c 3 f 
                f b 3 c b b f b b f b b c 3 b f 
                . c b b 3 3 b 3 3 b 3 3 b b c . 
                . . f f f f f f f f f f f f . . 
                `, SpriteKind.Clam)
            pearl = 1
            clam.setPosition(clamX, 220)
            clam.startEffect(effects.bubbles, 500)
            pause(5000)
            if (pearlGet == 0) {
                clam.destroy()
                clam = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c c c c c c . . . . 
                    . . c c b b 3 b 3 3 b b c c . . 
                    . c 3 3 b 3 3 b 3 3 3 b 3 3 c . 
                    c d d b 3 3 b 3 3 b 3 3 b d d c 
                    f c c c d d c d d c d d c c c f 
                    f b 3 c c c b c c b c c c 3 b f 
                    . c b b 3 3 b 3 3 b 3 3 b b c . 
                    . . f f f f f f f f f f f f . . 
                    `, SpriteKind.Clam)
                pearl = 0
                clam.setPosition(clamX, 220)
                clam.startEffect(effects.bubbles, 500)
            }
        }
    }
})
forever(function () {
    music.setVolume(10)
    for (let index = 0; index < 2; index++) {
        music.playMelody("G E A F G D C - ", 140)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("C E F A G D C - ", 140)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 A B E F G C - ", 140)
    }
    music.playMelody("G E A F G D C - ", 140)
    music.playMelody("C E F A G D C - ", 140)
})
forever(function () {
    if (crab) {
        if (crab.tileKindAt(TileDirection.Bottom, sprites.builtin.oceanSand5)) {
            pause(200)
            crabDirection = 1
            falling = 0
            crab.setVelocity(30, 0)
            animation.runImageAnimation(
            crab,
            [img`
                ...cc...................
                ..c36cccc...............
                ..c633336c..............
                .c33333cc6c.cc..........
                c33333c55c6c55b.........
                c33333ff5c6c5ff.........
                cc3336ff5c6c5ff.........
                cc6666c553c355b.........
                c333333c55355b..........
                c3333ccb55555cc.........
                .c33c55b4555455c........
                ..bbc5bb4444b45b........
                .b54c4555b4b554c........
                .c5c4c555c4c555c........
                .c5c4c5555c5555c........
                .ccc..ccccccccc.........
                `,img`
                ....c...................
                ...c6cccc...............
                ..c333336c..............
                ..c6333cc6c.cc..........
                .c3333c55c6c55b.........
                c33333ff5c6c5ff.........
                c33336ff5c6c5ff.........
                cc3366c553c355b.........
                cc66333c55355b..........
                c33333ccb5555c..........
                c3333c55b4554c..........
                .c33bcc5bb44b5c.........
                ..bb44c4555b44c.........
                .b54444c555c45c.........
                .c5c444c5555c5c.........
                .ccc...ccccccc..........
                `,img`
                ........................
                ...cc...................
                ..c36cccc...............
                ..c633366c..............
                .c33333366c.............
                c333333cc66cccb.........
                c33333c55c6c55b.........
                cc3336ff5c6c5ff.........
                cc6666ff5ccc5ff.........
                c333333c55355b..........
                c3333ccc45555c..........
                .c33c55b44554c..........
                ..cbbc5bb44b5c..........
                ..c5cc555c45cc..........
                ..cccc5555cc............
                .....cccccc.............
                `,img`
                ........................
                ...cc...................
                ..c36cccc...............
                ..c633366c..............
                .c33333366c.............
                c333333cc66cccb.........
                c33333c55c6c55b.........
                cc3336ff5c6c5ff.........
                cc6666ff5ccc5ff.........
                c3333ccc55355b..........
                c333c55b55555c..........
                .c33c5bb445544c.........
                ..cb555b444b55c.........
                ..bc555c444555c.........
                ..cc5555c4cccc..........
                ..cccccccccc............
                `,img`
                ...cc...................
                ..c36cccc...............
                ..c633336c..............
                .c33333cc6..cc..........
                c33333c55ccc55b.........
                c33333ff5c6c5ff.........
                cc3336ff5c6c5ff.........
                cc6666c5536355b.........
                c333333c55c55b..........
                c33333cc45355cc.........
                .c333c55c455455c........
                ..ccb555c454b45b........
                ..bbc555c44b554c........
                .b5cc5555c4c555c........
                .c5cccccc445555c........
                .ccc.....cccccc.........
                `],
            150,
            true
            )
        } else if (crab.tileKindAt(TileDirection.Bottom, sprites.builtin.oceanSand7)) {
            pause(200)
            crabDirection = -1
            falling = 0
            crab.setVelocity(-30, 0)
            animation.runImageAnimation(
            crab,
            [img`
                ...................cc...
                ...............cccc63c..
                ..............c633336c..
                ..........cc.c6cc33333c.
                .........b55c6c55c33333c
                .........ff5c6c5ff33333c
                .........ff5c6c5ff6333cc
                .........b553c355c6666cc
                ..........b55355c333333c
                .........cc55555bcc3333c
                ........c5545554b55c33c.
                ........b54b4444bb5cbb..
                ........c455b4b5554c45b.
                ........c555c4c555c4c5c.
                ........c5555c5555c4c5c.
                .........ccccccccc..ccc.
                `,img`
                ..................cc....
                ..............cccc63c...
                .............c633336c...
                .........cc.c6cc33333c..
                ........b55c6c55c33333c.
                ........ff5c6c5ff33333c.
                ........ff5c6c5ff6333cc.
                ........b553c355c6666cc.
                .........b55355c333333c.
                .........c5555bcc33333c.
                .........c4554b55c333c..
                ........c5b44bb5ccbbb...
                ........c44b5554c4445b..
                ........c54c555c444c5c..
                ........c5c5555c444ccc..
                .........ccccccc........
                `,img`
                ........................
                ...................cc...
                ...............cccc63c..
                ..............c663336c..
                .............c66333333c.
                .........bccc66cc333333c
                .........b55c6c55c33333c
                .........ff5c6c5ff6333cc
                .........ff5ccc5ff6666cc
                ..........b55355c333333c
                ..........c55554ccc3333c
                ..........c45544b55c33c.
                ..........c5b44bb5cbbc..
                ..........cc54c555cc5c..
                ............cc5555cccc..
                .............cccccc.....
                `,img`
                ........................
                ..................cc....
                ..............cccc63c...
                .............c663336c...
                ............c66333333c..
                ........bccc66cc333333c.
                ........b55c6c55c33333c.
                ........ff5c6c5ff6333cc.
                ........ff5ccc5ff6666cc.
                .........b55355ccc3333c.
                .........c55555b55c333c.
                ........c445544bb5c33c..
                ........c55b444b555bc...
                ........c555444c555cb...
                .........cccc4c5555cc...
                ...........cccccccccc...
                `,img`
                ...................cc...
                ...............cccc63c..
                ..............c633336c..
                ..........cc.c6cc33333c.
                .........b55c6c55c33333c
                .........ff5c6c5ff33333c
                .........ff5c6c5ff6333cc
                .........b553c355c6666cc
                ..........b55355c333333c
                .........cc55554cc33333c
                ........c554554c55c333c.
                ........b54b444c555bcc..
                ........c455b44c555cbb..
                ........c555c4c5555cc5b.
                ........c5555c4cccccc5c.
                .........cccccc.....ccc.
                `],
            150,
            true
            )
        }
    }
})
forever(function () {
    pause(100)
    t += -0.1
})
