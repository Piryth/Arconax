
if(!window.matchMedia("only screen and (max-width: 768px) and (orientation: portrait)").matches) {
    physics();
}

function physics() {
    var Engine = Matter.Engine,
Runner = Matter.Runner,
Composite = Matter.Composite,
Render = Matter.Render,
Bodies = Matter.Bodies,
Body = Matter.Body;

var engine = Engine.create();

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "rgba(0,0,0,0)"
    }
});

var ground = Bodies.rectangle(0, window.innerHeight, screen.width*2, 16, {
    isStatic: true,
    render: {
        fillStyle: 'rgba(0,0,0,0)'
    }
});

var circle = Bodies.circle(window.innerWidth/2, window.innerHeight/2, window.innerWidth/10, {
    isStatic: true,
    render: {
        fillStyle: "rgba(0,0,0,0)"
    }
});

var cover = Bodies.rectangle(window.innerWidth/2-40, -300, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/coruscant_ep.jpg",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover2 = Bodies.rectangle(window.innerWidth/2+40, -200, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/N7.jpg",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover3 = Bodies.rectangle(window.innerWidth/4, -500, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/great_hunt_ep.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});


var cover4 = Bodies.rectangle(window.innerWidth/4-window.innerWidth/8, -100, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/indomitable.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover5 = Bodies.rectangle(window.innerWidth/4+window.innerWidth/6, -160, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/aric_jorgan.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover6 = Bodies.rectangle(window.innerWidth-156, 0, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/spacesalt.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover7 = Bodies.rectangle(window.innerWidth/2+78, -450, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/the_ultimate.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover8 = Bodies.rectangle(window.innerWidth/2-58, -490, 71, 71, {
    render: {
        sprite: {
            texture: "img/covers/khem_val.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

Body.rotate(cover3, 1);
Body.rotate(cover4, Math.PI/6);


Composite.add(engine.world, [ground,cover,cover2,cover3,cover4,cover5,cover6,cover7,cover8,circle]);

Render.run(render);

var runner = Runner.create();

Runner.run(runner, engine);


}

