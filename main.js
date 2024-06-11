const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".profile")[0].classList.add("profile_fade_in");
            const e = e=>new Promise((t=>setTimeout(t, e)));
            e(500).then((()=>{
                document.querySelector(".cplusplus").classList.add("skill_item_fade_in")
            }
            )),
            e(600).then((()=>{
                document.querySelector(".bash").classList.add("skill_item_fade_in")
            }
            )),
            e(700).then((()=>{
                document.querySelector(".sql").classList.add("skill_item_fade_in")
            }
            )),
            e(800).then((()=>{
                document.querySelector(".java").classList.add("skill_item_fade_in")
            }
            )),
            e(900).then((()=>{
                document.querySelector(".javascript").classList.add("skill_item_fade_in")
            }
            )),
            e(1000).then((()=>{
                document.querySelector(".linux").classList.add("skill_item_fade_in")
            }
            )),
            e(1100).then((()=>{
                document.querySelector(".php").classList.add("skill_item_fade_in")
            }
            )),
            e(1200).then((()=>{
                document.querySelector(".docker").classList.add("skill_item_fade_in")
            }
            )),
            e(1300).then((()=>{
                document.querySelector(".c").classList.add("skill_item_fade_in")
            }
            )),
            e(1400).then((()=>{
                document.querySelector(".python").classList.add("skill_item_fade_in")
            }
            )),
            e(1500).then((()=>{
                document.querySelector(".csharp").classList.add("skill_item_fade_in")
            }
            )),
            e(1600).then((()=>{
                document.querySelector(".html").classList.add("skill_item_fade_in")
            }
            )),
            e(1700).then((()=>{
                document.querySelector(".matlab").classList.add("skill_item_fade_in")
            }
            )),
            e(1800).then((()=>{
                document.querySelector(".css").classList.add("skill_item_fade_in")
            }
            ))
        }
    })
})

observer.observe(document.querySelector(".profile"));

  
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 2
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//https://codepen.io/pavi2410/pen/oNjGVgM
const state = {
    fps: 24,
    color: "#3f3f3f",
    charset: "01",
    size: 25
  };
  
  
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  
  let w, h, p;
  const resize = () => {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;

    p = Array(Math.ceil(w / state.size)).fill(0);
  };
  window.addEventListener("resize", resize);
  resize();
  
  const random = (items) => items[Math.floor(Math.random() * items.length)];
  
  const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = state.color;
  
    ctx.font = state.size + "px 'Press Start 2P'"
    for (let i = 0; i < p.length; i++) {
      let v = p[i];
      ctx.fillText(random(state.charset), i * state.size, v);
      p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
    }
  };
  
  let interval = setInterval(draw, 1000 / state.fps);
  setTimeout(() => canvas.style.opacity = "0", 1000);
  setTimeout(() => {clearInterval(interval); canvas.style.display = "none";},2000);
  
