import Phaser from 'phaser';

export class HomeScene extends Phaser.Scene {
  private bgSprite!: Phaser.GameObjects.Sprite;
  private zoeSprite!: Phaser.GameObjects.Sprite;
  private bubbleSprite!: Phaser.GameObjects.Sprite;

  private robotSprite!: Phaser.GameObjects.Sprite;

  private workPopupContainer!: Phaser.GameObjects.Container;
  private workPopup!: Phaser.GameObjects.Sprite;

  private coffeePopupContainer!: Phaser.GameObjects.Container;
  private coffeePopup!: Phaser.GameObjects.Sprite;

  private dogPopupContainer!: Phaser.GameObjects.Container;
  private dogPopup!: Phaser.GameObjects.Sprite;

  private officePosters!: Phaser.GameObjects.Sprite;

  private shelfSprite!: Phaser.GameObjects.Sprite;

  constructor() {
    super('HomeScene');
  }

  preload() {
    // bg
    this.load.spritesheet('background-anim', '/assets/office-bg.png', {
      frameWidth: 1536,
      frameHeight: 864,
    });

    this.load.spritesheet('shelf', '/assets/shelf.png', {
      frameWidth: 256,
      frameHeight: 256,
    });

    // zoe
    this.load.image('zoe', '/assets/zoe-character.png');
    this.load.image('bubble', '/assets/speech_bubble.png');

    // desk
    this.load.spritesheet('robot', '/assets/robot_toy-sheet.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.image('work-popup', '/assets/WorkPopup.png');
    this.load.image('coffee-popup', '/assets/CoffeePopup.png');

    // posters
    this.load.image('office-posters', '/assets/office-posters.png');
    this.load.image('dog-popup', '/assets/DogPopup.png');
  }

  create() {
    // bg
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('background-anim', { start: 0, end: 6 }),
      frameRate: 8,
      repeat: -1,
    });
    this.bgSprite = this.add.sprite(0, 0, 'background-anim');
    this.bgSprite.play('idle');
    this.bgSprite.setOrigin(0.5, 1);

    // shelf
    this.anims.create({
      key: 'shelf-idle',
      frames: this.anims.generateFrameNumbers('shelf', { start: 0, end: 24 }),
      frameRate: 16,
      repeat: 0,
    });

    // robot
    this.anims.create({
      key: 'robot-idle',
      frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 4 }),
      frameRate: 12,
      repeat: -1,
    });

    this.shelfSprite = this.add.sprite(0, 0, 'shelf');
    this.shelfSprite.setOrigin(0.5, 1);
    this.shelfSprite.setInteractive({ useHandCursor: true });

    this.shelfSprite.on('pointerover', () => {
      if (!this.shelfSprite.anims.isPlaying) {
        this.shelfSprite.play({ key: 'shelf-idle', startFrame: 0 });
      }
    });

    this.shelfSprite.on('pointerout', () => {
      this.shelfSprite.stop();
      this.shelfSprite.setFrame(0);
    });

    // robot
    this.robotSprite = this.add.sprite(0, 0, 'robot');
    this.robotSprite.setOrigin(0.5, 1);
    this.robotSprite.setInteractive({ useHandCursor: true });

    this.robotSprite.on('pointerover', () => {
      if (!this.robotSprite.anims.isPlaying) {
        this.robotSprite.play({ key: 'robot-idle', startFrame: 0 });
      }
    });

    this.robotSprite.on('pointerout', () => {
      this.robotSprite.stop();
      this.robotSprite.setFrame(0);
    });

    // computer
    this.workPopupContainer = this.add.container(0, 0);

    const workHitbox = this.add.zone(0, 0, 170, 150).setOrigin(0.5, 1);
    workHitbox.setInteractive({ useHandCursor: true });

    this.workPopup = this.add.sprite(0, -200, 'work-popup');
    this.workPopup.setVisible(false);
    this.workPopup.setScale(1.2);

    workHitbox.on('pointerover', () => this.workPopup.setVisible(true));
    workHitbox.on('pointerout', () => this.workPopup.setVisible(false));

    this.workPopupContainer.add([workHitbox, this.workPopup]);

    // coffee
    this.coffeePopupContainer = this.add.container(0, 0);

    const coffeeHitbox = this.add.zone(0, 0, 50, 90).setOrigin(0.5, 1);
    coffeeHitbox.setInteractive({ useHandCursor: true });

    this.coffeePopup = this.add.sprite(0, -120, 'coffee-popup');
    this.coffeePopup.setVisible(false);
    this.coffeePopup.setScale(1.2);

    coffeeHitbox.on('pointerover', () => this.coffeePopup.setVisible(true));
    coffeeHitbox.on('pointerout', () => this.coffeePopup.setVisible(false));

    this.coffeePopupContainer.add([coffeeHitbox, this.coffeePopup]);

    // posters
    this.officePosters = this.add.sprite(0, 0, 'office-posters').setOrigin(0.5, 1);

    // dog
    this.dogPopupContainer = this.add.container(0, 0);

    const dogHitbox = this.add.zone(0, 0, 150, 150).setOrigin(0.5, 1);

    dogHitbox.setInteractive({ useHandCursor: true });

    this.dogPopup = this.add.sprite(60, -250, 'dog-popup');
    this.dogPopup.setVisible(false);
    this.dogPopup.setScale(1.2);

    dogHitbox.on('pointerover', () => this.dogPopup.setVisible(true));
    dogHitbox.on('pointerout', () => this.dogPopup.setVisible(false));

    this.dogPopupContainer.add([dogHitbox, this.dogPopup]);

    // zoe
    this.zoeSprite = this.add.sprite(0, 0, 'zoe').setOrigin(0.5, 1);

    // speech bubble
    this.bubbleSprite = this.add.sprite(0, 0, 'bubble').setOrigin(0, 1);

    // ui reactive
    this.handleResize();
    this.scale.on('resize', this.handleResize, this);
  }

  handleResize() {
    const { width, height } = this.scale;
    const artWidth = 1536;
    const artHeight = 864;

    const scaleX = width / artWidth;
    const scaleY = height / artHeight;
    const scale = Math.max(scaleX, scaleY);

    const centerX = width / 2;
    const bottomY = height;

    this.bgSprite.setScale(scale);
    this.bgSprite.setPosition(centerX, bottomY);

    // shelf
    const shelfOffsetX = 450;
    const shelfOffsetY = -500;
    this.shelfSprite.setScale(scale);
    this.shelfSprite.setPosition(centerX + shelfOffsetX * scale, bottomY + shelfOffsetY * scale);

    // desk
    const robotOffsetX = 130;
    const robotOffsetY = -105;
    this.robotSprite.setScale(scale);
    this.robotSprite.setPosition(centerX + robotOffsetX * scale, bottomY + robotOffsetY * scale);

    const workOffsetX = 475;
    const workOffsetY = -140;
    this.workPopupContainer.setScale(scale);
    this.workPopupContainer.setPosition(
      centerX + workOffsetX * scale,
      bottomY + workOffsetY * scale,
    );

    const coffeeOffsetX = 360;
    const coffeeOffsetY = -105;
    this.coffeePopupContainer.setScale(scale);
    this.coffeePopupContainer.setPosition(
      centerX + coffeeOffsetX * scale,
      bottomY + coffeeOffsetY * scale,
    );

    // posters
    const postersOffsetX = -450;
    const postersOffsetY = -300;
    this.officePosters.setScale(scale);
    this.officePosters.setPosition(
      centerX + postersOffsetX * scale,
      bottomY + postersOffsetY * scale,
    );

    // dog
    const dogOffsetX = -460;
    const dogOffsetY = -360;
    this.dogPopupContainer.setScale(scale);
    this.dogPopupContainer.setPosition(centerX + dogOffsetX * scale, bottomY + dogOffsetY * scale);

    // zoe and bubble
    const zoeOffsetX = -400;
    const zoeOffsetY = 0;
    this.zoeSprite.setScale(scale);
    this.zoeSprite.setPosition(centerX + zoeOffsetX * scale, bottomY + zoeOffsetY * scale);

    const bubbleOffsetX = -350;
    const bubbleOffsetY = -220;
    this.bubbleSprite.setScale(scale * 0.75);
    this.bubbleSprite.setPosition(centerX + bubbleOffsetX * scale, bottomY + bubbleOffsetY * scale);
  }
}
