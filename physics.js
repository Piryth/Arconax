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
            texture: "img/coruscant_ep.jpg",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover2 = Bodies.rectangle(window.innerWidth/2+40, -200, 71, 71, {
    render: {
        sprite: {
            texture: "img/N7.jpg",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

var cover3 = Bodies.rectangle(window.innerWidth/4, -500, 71, 71, {
    render: {
        sprite: {
            texture: "img/great_hunt_ep.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});


var cover4 = Bodies.rectangle(window.innerWidth/4-window.innerWidth/8, -100, 71, 71, {
    render: {
        sprite: {
            texture: "img/indomitable.png",
            xScale: 1/7,
            yScale: 1/7
        }
    }
});

Body.rotate(cover3, 1);
Body.rotate(cover4, Math.PI/6);


Composite.add(engine.world, [ground,cover,cover2,cover3,cover4,circle]);

Render.run(render);

var runner = Runner.create();

Runner.run(runner, engine);

