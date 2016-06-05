//= require TweenMax
//= require easing/EasePack
//= require plugins/pace

class PolygonAnimation {
  constructor() {
    this.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.element = document.getElementById('animation-stage');

    this.canStop = false;
    this.willStop = false;

    this.element.width = this.width;
    this.element.height = this.height;

    let hCenter = this.width / 2;
    let vCenter = this.height / 2;

    this.struct = {
      topLeft: { x: hCenter, y: vCenter },
      bottomLeft: { x: 0, y: this.height },
      bottomRight:{ x: hCenter, y: vCenter },
      topRight:{ x: this.width, y: 0 }
    };

    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    this.draw();

    // Set the default timeout before it can close
    setTimeout(() => { this.canStop = true; }, 2000);

    // Let pace tell us when the page is fully loaded
    Pace.once('done', this.stopAndClose.bind(this));
  }

  start() {
    this.tl = new TimelineMax();
    let el = document.getElementById('loading');

    this.tl.to(this.struct.topLeft, 1, { x: 0, y: 0, ease: Expo.easeOut, delay: 0.5 })
      .to(this.struct.bottomRight, 1, { x: this.width, y: this.height, ease: Expo.easeOut }, "-=1")
      .to(el, 0.5, { opacity: 1 });

    this.tl.eventCallback('onComplete', this.stop.bind(this));

    this.tl.play();
    this.canStopAt = (new Date()).getTime() + 2000;
  }


  draw() {
    if (this.willStop) {
      return;
    }

    let ctx = this.element.getContext('2d');
    ctx.fillStyle = '#fff';

    ctx.beginPath();
    ctx.moveTo(this.struct.topLeft.x, this.struct.topLeft.y);
    ctx.lineTo(this.struct.bottomLeft.x, this.struct.bottomLeft.y);
    ctx.lineTo(this.struct.bottomRight.x, this.struct.bottomRight.y);
    ctx.lineTo(this.struct.topRight.x, this.struct.topRight.y);
    ctx.closePath();
    ctx.fill();

    requestAnimationFrame(this.draw.bind(this));
  }

  stopAndClose() {
    if (this.canStop) {
      this.stop();

      let el = document.getElementById('preloader');
      let el2 = document.getElementById('loading');

      let tl = new TimelineMax();
      tl.to(el2, 0.5, { opacity: 0 })
        .to(el, 0.5, { opacity: 0 });

      tl.eventCallback('onComplete', () => {
        // Remove el from dom
        el.parentNode.removeChild(el);
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
      });

    } else {
      // Reschedule for when it can stop
      let diff = this.canStopAt - (new Date()).getTime();
      setTimeout(this.stopAndClose.bind(this), diff);
    }
  }

  stop() {
    this.tl.kill();
    this.willStop = true;
    cancelAnimationFrame(this.animRequest);
    // Finally just remove the canvas element
    // this.element.parentNode.removeChild(this.element);
  }
}



// class PolygonAnimation {
//   constructor() {
//     this.element = $('svg polygon.loading-box');
//
//     // Element needs to be in page for this to work
//     if (this.element.length < 1) {
//       return;
//     }
//
//     let points = this.pointsFromString(this.element.attr('points'));
//
//     // Need to have all segments of the polygon
//     if (points.length < 4) {
//       return;
//     }
//
//     this.struct = {
//       topLeft: points[0],
//       bottomLeft: points[1],
//       bottomRight: points[2],
//       topRight: points[3]
//     };
//   }
//
//   pointsFromString(points) {
//     let pairs = [];
//     points.split(',').forEach(pair => {
//       let coords = pair.trim().split(' ');
//       console.log('Parsing pair: %O', coords);
//       // Need to have 2 values in the array at least
//       if (coords.length < 2) {
//         return;
//       }
//       // Parse out x,y coordinates
//       let x = parseFloat(coords[0]);
//       let y = parseFloat(coords[1]);
//
//       // Push to coordinate system
//       pairs.push({ x: x, y: y });
//     });
//     return pairs;
//   }
//
//   structToString() {
//     let pieces = [];
//     for(var k in this.struct) {
//       pieces.push(`${this.struct[k].x} ${this.struct[k].y}`);
//     }
//     return pieces.join(', ');
//   }
//
//
//   start() {
//     let tl = new TimelineMax();
//
//     tl.to(this.struct.bottomLeft, 1, { x: 0, y: 100 })
//       .to(this.struct.topRight, 1, { x: 100, y: 0 }, "-=1");
//
//     tl.eventCallback('onUpdate', this.update.bind(this));
//
//     tl.start();
//   }
//
//
//   update() {
//     // Apply the latest tweened values to element points
//     this.element.attr('points', this.structToString());
//   }
// }
