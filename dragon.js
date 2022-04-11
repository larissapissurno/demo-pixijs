class Dragon {
  #loader = PIXI.Loader.shared;
  #xAxis = 0;
  #yAxis = 0;

  constructor(x, y) {
    this.#xAxis = x;
    this.#yAxis = y;

    this.#loader
      .add('tileset', './assets/img/drags.json')
      .load(this.#setup.bind(this));
  }

  #setup() {
    const textures = [];

    for(let i = 1; i < 13; i++) {
      const texture = PIXI.Texture.from(`drag${i}.png`);
      textures.push(texture);
    }

    const drag = new PIXI.AnimatedSprite(textures);
    drag.position.set(this.#xAxis, this.#yAxis);
    drag.scale.set(2, 2);
    // app.stage.addChild(drag);
    // drag.play();
    // drag.animationSpeed = 0.1;

    // const blurFilter = new PIXI.filters.BlurFilter(15);
    // drag.filters = [blurFilter];
    // blurFilter.blur = 2;
  }
}

export { Dragon };