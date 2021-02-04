'use strict';
{
   let t = 0;
  
    
  function draw() {
      const canvas = document.querySelector('canvas');
      if (typeof canvas.getContext === 'undefined') {
        return;
      }
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'pink';

      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, 300 / 600 * 2 * Math.PI);
      ctx.fill();


      ctx.fillStyle = 'skyblue';
      ctx.beginPath();
      ctx.arc(100, 100, 50, 0, 300 / 600 * 2 * Math.PI,true);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(60, 80, 8, 8, 0, 0, 2 * Math.PI);
      ctx.ellipse(140, 80, 8, 8, 0, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      
      ctx.beginPath();
      ctx.ellipse(58, 80, 3, 3, 0, 0, 2 * Math.PI);
      ctx.ellipse(142, 80, 3, 3, 0, 0, 2 * Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill();



      ctx.fillStyle = 'white';

      ctx.beginPath();
      ctx.ellipse(100, 100, 40, 12, 0, 0, 2 * Math.PI);
      ctx.fill();




      // ctx.scale(0.6, 0.6);
      // ctx.translate(412,410);
      ctx.fillStyle = 'pink';

      ctx.beginPath();
      ctx.ellipse(102, 100, 28, 8, 0, 0, 300 / 600 * 2 * Math.PI);
      ctx.fill();
      
      
      ctx.fillStyle = 'white';

      ctx.beginPath();
      ctx.ellipse(102, 96 + Math.sin(t / 30), 28, 8, 0, 0, 300 / 600 * 2 * Math.PI);
      ctx.fill();

      t++;
      setTimeout(draw,10);

      // ctx.beginPath();
      // ctx.ellipse(102, 100, 30, 180,360* 2 * Math.PI);
      // ctx.fill();

      
      

    }
    
    draw();
    
  }





      // ctx.arc(100, 100, 50, 0, 300 / 600 * 2 * Math.PI);
      // ctx.fill();

      // ctx.fillStyle = 'pink';
      



    // }
    
    // draw();
    
    
  
  
  
  // ctx.beginPath();
  // // ctx.ellipse(x, y, rx, ry, rotation, start, end);
  // ctx.ellipse(300, 120, 100, 90, 0, 0, 2 * Math.PI);
  // ctx.fillStyle = 'skyblue';







// {
//   function draw() {
//     const canvas = document.querySelector('canvas');
//     if (typeof canvas.getContext === 'undefined') {
//       return;
//     }
//     const ctx = canvas.getContext('2d');

//     // ctx.ellipse(x, y, rx, ry, rotation, start, end);
//     // ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);

//     ctx.beginPath();
//     ctx.ellipse(100, 100, 40, 34, 200, 0, 2 * Math.PI);
//     ctx.fillStyle = 'pink';
//     ctx.fill();
  
//     ctx.beginPath();
//     ctx.ellipse(300, 100, 40, 34, 200, 0, 2 * Math.PI);
//     ctx.fillStyle = 'skyblue';
//     ctx.fill();
//   }

//   draw();

