/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('gbridge', 'assets/level/background-1/bg-wooden-bridge.png');




        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('g-grass-1', 'assets/level/ground/g-grass-1.png');
        this.load.image('g-grass-2', 'assets/level/ground/g-grass-2.png');
        this.load.image('g-grass-3', 'assets/level/ground/g-grass-3.png');
        this.load.image('g-grass-4', 'assets/level/ground/g-grass-4.png');
        this.load.image('g-grass-5', 'assets/level/ground/g-grass-5.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image( 'gStone3', 'assets/level/ground/g-stone-3.png');
        this.load.image( 'gStone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gMush1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gBridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gWater',  'assets/level/ground/g-water.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-1.png');
        this.load.image('gSpike2', 'assets/level/ground/g-spike-2.png');
        this.load.image('gbox2',   'assets/level/ground/g-box-2.png');
        this.load.image('gLiane1', 'assets/level/ground/g-vine-a.png');
        this.load.image('gLiane2', 'assets/level/ground/g-vine-b.png');
        this.load.image('gLiane3', 'assets/level/ground/g-vine-c.png');
        this.load.image('g-fellen-tree-1','assets/level/ground/g-fellen-tree-1.png');
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('z1', 'assets/zombie/z1.png');
        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++) {
            this.load.image('filterBloody' + i, 'assets/level/filters/bloody/frame' + i + '.png');

        }
        for(let i=1;i<=3;i++) {
            this.load.image('filterRain' + i, 'assets/level/weather/rain/frame' + i + '.png');

        }

        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let i=1;i<=3;i++) {
            this.load.image('bg-animation-' + i, 'assets/level/background-2/bg-animation/bg-animation-' + i + '.png');
        }
    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         *
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-150,150, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         *
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain4=this.add.image(650,100, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        /**
         *
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(420,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=0; //pencher l'arbre de -5 degrès
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree3=this.add.image(700,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-9; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree3=this.add.image(150,-100, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.scale = 0.7
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(-10,0, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.scale = 0.5
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain3=this.add.image(-450,195, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1terrain3);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1terrain1=this.add.image(650,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1terrain1);
        bg1terrain1.scale = 0.5
        /**
         * Terrain
         *
         */
        let bg1terrain4=this.add.image(650,300, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1terrain4);
        bg1terrain4.scale = 0.5
        let bg1terrain=this.add.image(1100,210, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1terrain);
        bg1terrain4.scale = 0.5
        /**
         *
         */
        let bg1Tree2=this.add.image(850,-100, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);
        /**
         *
         */
        let bridge1=this.add.image(990,360,'gbridge').setOrigin(0,1);
        this.bg1Container.add(bridge1);
        bridge1.angle=-5







        /**
         *
         */
        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        let mush1=this.add.image(150,360, 'gMush1').setOrigin(0,1);
        this.groundContainer.add(mush1);
        mush1.flipX = true
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1=this.add.image(265,410, 'gTree1').setOrigin(0,1);
        // tree1.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree1);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree1c=this.add.image(755,-75, 'gTree1').setOrigin(0,0);
        this.groundContainer.add(tree1c);
        tree1c.scale = 0.9
        tree1c.flipX = true
        tree1c.angle=-8 ;
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(0,450, 'gTree2').setOrigin(0,1);
        // tree2.setTintFill(0xFF0000); // pratique pour dbugger
        this.groundContainer.add(tree2);
        tree2.flipX = true
        /**
         * Pierre
         * @type {Phaser.GameObjects.Image}
         */
        let stone4=this.add.image(770,380,'gStone4').setOrigin(0,1);
        this.groundContainer.add(stone4)
        stone4.scale=0.8
        stone4.flipX=true
        let stone3=this.add.image(300,360,'gStone3').setOrigin(0,1);
        this.groundContainer.add(stone3)
        stone3.scale=1
        /**
         *
         * @type {Phaser.GameObjects.Image}
         */
        // lianne 1
        let vine101=this.add.image(500,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine101);
        vine101.scale=0.7

        let vine102=this.add.image(500,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine102);
        vine102.scale=0.7

        let vine103=this.add.image(505,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine103);
        vine103.scale=0.7

        let vine104=this.add.image(505,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine104);
        vine104.scale=0.7

        let vine105=this.add.image(500,110, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine105);
        vine105.scale=0.7

        let vine106=this.add.image(500,140, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine106);
        vine106.scale=0.7

        let vine107=this.add.image(505,170, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine107);
        vine107.scale=0.7

        // lianne 2
        let vine201=this.add.image(550,-10, 'gLiane3').setOrigin(0,0);
        this.groundContainer.add(vine201);
        vine201.scale=0.7

        let vine202=this.add.image(550,20, 'gLiane1').setOrigin(0,0);
        this.groundContainer.add(vine202);
        vine202.scale=0.7

        let vine203=this.add.image(555,50, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine203);
        vine203.scale=0.7

        let vine204=this.add.image(555,80, 'gLiane2').setOrigin(0,0);
        this.groundContainer.add(vine204);
        vine204.scale=0.7
        /**
         * Lac
         * @type {Phaser.GameObjects.Image}
         */
        let water=this.add.image(590,550,'gWater')
        this.groundContainer.add(water)
        water.scale=1.5
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1=this.add.image(-170,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Pique au fond du lac
         * @type {Phaser.GameObjects.Image}
         */
        let spike=this.add.image(545,500,'gSpike')
        this.groundContainer.add(spike)
        spike.scale=1
        let spike2=this.add.image(725,500,'gSpike')
        this.groundContainer.add(spike2)
        spike2.scale=1
        /**
         *
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let bridge=this.add.image(380,380,'gBridge').setOrigin(0,1);
        this.groundContainer.add(bridge)
        bridge.scale=0.8
        /**
         *  @type {Phaser.GameObjects.Image}
         */
        let gMid=this.add.image(980,550, 'gMid')
        this.groundContainer.add(gMid);
        /**
         *  @type {Phaser.GameObjects.Image}
         */
        let gRight=this.add.image(1150,550, 'gRight')
        this.groundContainer.add(gMid);
        /**
         *
         */
        let gMid5=this.add.image(1200,550, 'gMid')
        this.groundContainer.add(gMid);
        /**
         *
         */
        let gRight5=this.add.image(1250,550, 'gRight')
        this.groundContainer.add(gMid);
        /**
         *
         */
        let gLeft1=this.add.image(1800,600, 'gLeft')
        this.groundContainer.add(gMid);
        /**
         *
         */
        let gRight6=this.add.image(1905,600, 'gRight')
        this.groundContainer.add(gMid);
        /**
         *
         */
        let gfellentree=this.add.image(1540,350, 'g-fellen-tree-1')
        this.groundContainer.add(gfellentree);
        gfellentree.angle=9
        /**
         *
         */
        let gsto=this.add.image (940,370,'gStone1').setOrigin(0,1);
        this.groundContainer.add(gsto);
        gsto.setScale(1.9 , 2)
        /**
         *Herbe
         */
        let gGrass=this.add.image(940,340, 'g-grass-1')
        this.groundContainer.add(gGrass);
        let gGrass2=this.add.image(920,340, 'g-grass-1')
        this.groundContainer.add(gGrass2);
        let gGrass3=this.add.image(960,360, 'g-grass-1')
        this.groundContainer.add(gGrass3);
        let gGrass4=this.add.image(1285,330, 'g-grass-2')
        this.groundContainer.add(gGrass4);
        let gGrass5=this.add.image(1280,345, 'g-grass-3')
        this.groundContainer.add(gGrass5);
        let gGrass6=this.add.image(2000,390, 'g-grass-3')
        this.groundContainer.add(gGrass6);
        gGrass6.setScale(1.9 , 2)
        /**
         *
         */
        let mush2=this.add.image(1100,380, 'gMush1').setOrigin(0,1);
        this.groundContainer.add(mush2);
        mush2.setScale(0.9 ,  0.8)
        /**
         *
         */
        let spike3=this.add.image(1450,500,'gSpike')
        this.groundContainer.add(spike3)
        spike.scale=1
        let spike4=this.add.image(1610,500,'gSpike')
        this.groundContainer.add(spike4)
        spike2.scale=1
        /**
         *
         */
        let zombie=this.add.image(1200,300,'z1')
        this.groundContainer.add(zombie)




        /**
         * @type {Phaser.GameObjects.Image}
         */
        let gbox2=this.add.image(500,350, 'gbox2').setOrigin(0,1);
        this.groundContainer.add(gbox2);
        gbox2.scale = 0.6
        gbox2.angle = 5
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gleft=this.add.image(760,360, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gleft);
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBloody = this.add.sprite(0, 0, 'filterBloody1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'bloody',
            frames: [
                {key:'filterBloody1'},
                {key:'filterBloody2'},
                {key:'filterBloody3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBloody.play('bloody');
        /**
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterRain = this.add.sprite(0, 0, 'filterRain').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterRain1'},
                {key:'filterRain2'},
                {key:'filterRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');













        /**

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterBloody.scrollFactorX=0;
        this.filterRain.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=2;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-2;
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterBloody.setAlpha(Phaser.Math.Between(95,100)/100)
        this.filterRain.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}

