TweenMax.set('svg', {
  visibility: 'visible'
})

var sunflowerTL = new TimelineMax().timeScale(1.62);
sunflowerTL.from('.stalk', 2, {
 attr: {
  y2:596.67
 },
 ease: Power2.easeInOut
})
.from('.leafGroup1 .leafR', 2, {
 scale: 0,
 rotation: -34,
 transformOrigin: '0% 100%',
 ease: Elastic.easeOut.config(0.4, 0.5)
}, '-=1.5')
.from('.leafGroup1 .leafL', 2, {
 scale: 0,
 rotation: 34,
 transformOrigin: '100% 100%',
 ease: Elastic.easeOut.config(0.4, 0.5)
}, '-=1.6')

.from('.leafGroup2 .leafR', 2, {
 scale: 0,
 rotation: -34,
 transformOrigin: '0% 100%',
 ease: Elastic.easeOut.config(0.4, 0.5)
},'-=2')
.from('.leafGroup2 .leafL', 2, {
 scale: 0,
 rotation: 34,
 transformOrigin: '100% 100%',
 ease: Elastic.easeOut.config(0.4, 0.5)
},'-=1.8')
.from('.face', 2, {
 attr: {
  r: 0
 },
 ease: Elastic.easeOut.config(0.4, 0.75)
}, '-=1.42')
.staggerFrom('.petalGroup path', 2, {
 scale: 0,
 svgOrigin: '400 186',
 ease: Elastic.easeOut.config(0.4, 0.5)
}, 0.07, '-=1.4')
.staggerFrom('.petalGroupBack path', 2, {
 scale: 0,
 svgOrigin: '400 186',
 ease: Elastic.easeOut.config(0.4, 0.5)
}, 0.03, '-=3' )
.staggerFrom('.seedGroup circle', 1, {
 attr:{
  r: 0
 },
 ease: Elastic.easeOut.config(0.5, 0.5)
}, 0.0097, '-=3.64' )
.to('.wholeFlower', 8, {
 rotation: 2,
 transformOrigin: '50% 100%',
 ease: CustomWiggle.create('', {wiggles: 6, type: 'easeOut'})
}, 0)
.staggerTo('.leaf', 5, {
 cycle: {
  rotation: [-2, 3, 2, -3]
 },
 ease: CustomWiggle.create('', {wiggles: 8, type: 'easeInOut'})
}, 0.05, '-=4.8')
.to('.flowerHead', 7, {
 scaleX: 1.05,
 transformOrigin: '50% 50%',
 ease: CustomWiggle.create('', {wiggles: 3, type: 'easeInOut'})
}, '-=8')

.to('.flowerHead', 10, {
 rotation: 2,
 transformOrigin: '50% 50%',
 ease: CustomWiggle.create('', {wiggles: 16, type: 'easeInOut'})
}, '-=9')



//ScrubGSAPTimeline(sunflowerTL);