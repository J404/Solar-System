Vue.component('cb-data', {
  props: ['celestialbody', 'num'],
  data: function() {
    return {
      width: mapWidth,
      height: mapHeight,
      x: this.celestialbody.pos.x,
      y: this.celestialbody.pos.y,
      mass: this.celestialbody.mass,
      size: this.celestialbody.size,
      xVel: this.celestialbody.vel.x,
      yVel: this.celestialbody.vel.y,
      color: this.celestialbody.color,
      stationary: this.celestialbody.stationary,
    }
  },
  methods: {
    newData: function() {
      // alert('new data detected!');
    }
  },
  template: `
  <div class="planet-control">
    <h3>Planet {{ num }}</h3>
    <div>
      <span>X Position:</span>
      <input type="range" :min="0" :max="width"
      v-model="x"
      @change="newData()">
      <span>{{x}}</span>
    </div>
    <div>
      <span>Y Position:</span>
      <input type="range" :min="0" :max="height"
      v-model="y"
      @change="newData()">
      <span>{{y}}</span>
    </div>
    <div>
      <span>X Velocity:</span>
      <input type="range" :min="0" :max="100"
      v-model="xVel"
      @change="newData()">
      <span>{{xVel}}</span>
    </div>
    <div>
      <span>Y Velocity:</span>
      <input type="range" :min="0" :max="100"
      v-model="yVel"
      @change="newData()">
      <span>{{yVel}}</span>
    </div>
    <div>
      <span>Mass:</span>
      <input type="range" 
      :min="Math.pow(10, 14)" :max="Math.pow(10, 28)"
      v-model="mass"
      @change="newData()">
      <span>{{mass}}</span>
    </div>
    <div>
      <span>Size:</span>
      <input type="range" :min="0" :max="30"
      v-model="size"
      @change="newData()">
      <span>{{size}}</span>
    </div>
    <div>
      <span>Color:</span>
      <input type="color"      
      v-model="color"
      @change="newData()">
      <span>{{color}}</span>
    </div>
  </div>
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    celestialBodies: celestialBodies,
  },
});
