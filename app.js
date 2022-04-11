const Application = PIXI.Application;

const app = new Application({
  transparent: false,
  antialias: true
});


app.renderer.backgroundColor = 0x233395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

// ------------------------------------- animating sprites!
const loader = PIXI.Loader.shared;

loader
  .add('tileset', './assets/img/drags.json')
  .load(setup);

function setup(loader, resources) {
  const textures = [];

  for(let i = 1; i < 13; i++) {
    const texture = PIXI.Texture.from(`drag${i}.png`);
    textures.push(texture);
  }

  const drag = new PIXI.AnimatedSprite(textures);
  drag.position.set(400, 300);
  drag.scale.set(2, 2);
  app.stage.addChild(drag);
  drag.play();
  drag.animationSpeed = 0.1;

  // const blurFilter = new PIXI.filters.BlurFilter(15);
  // drag.filters = [blurFilter];
  // blurFilter.blur = 2;

  addMovements(drag, 20);
}



// ------------------------------------- animating background / infinite bg!

const cloudsTexture = PIXI.Texture.from('./assets/img/clouds.png');
const cloudsSprite = new PIXI.TilingSprite(
  cloudsTexture,
  app.screen.width,
  app.screen.height
);

cloudsSprite.tileScale.set(0.5, 0.5);

app.ticker.add(function() {
  cloudsSprite.tilePosition.x++;
});

app.stage.addChild(cloudsSprite);

const sound = new Howl({
  src: ['./assets/sound/pelimusaa.wav']
});

// sound.play();

function addMovements(sprite, velocity = 10) {
  document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowRight') {
      sprite.x += velocity;
    }
  
    if(e.key === 'ArrowLeft') {
      sprite.x -= velocity;
    }
  
    if(e.key === 'ArrowUp') {
      sprite.y -= velocity;
    }
  
    if(e.key === 'ArrowDown') {
      sprite.y += velocity;
    }
  });
}