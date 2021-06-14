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
      const data = {
        x: this.x, 
        y: this.y,
        mass: this.mass,
        size: this.size,
        xVel: this.xVel,
        yVel: this.yVel,
        color: this.color,
        stationary: this.stationary,
      };

      updateBody(data, this.num);
    },
    deleteBody: function() {
      deleteBody(this.num);
    }
  },
  template: `
  <div class="planet-control">
    <h3>Body {{ num + 1}}</h3>
    <button
    @click="deleteBody()">- Delete</button>
    <div>
      <span>X Position:</span>
      <input type="range" :min="0" :max="width"
      v-model.number="x"
      @change="newData()">
      <input type="number" v-model.number="x" @change="newData()">
    </div>
    <div>
      <span>Y Position:</span>
      <input type="range" :min="0" :max="height"
      v-model.number="y"
      @change="newData()">
      <input type="number" v-model.number="y" @change="newData()">
    </div>
    <div>
      <span>X Velocity:</span>
      <input type="range" :min="0" :max="100"
      v-model.number="xVel"
      @change="newData()">
      <input type="number" v-model.number="xVel" @change="newData()">
    </div>
    <div>
      <span>Y Velocity:</span>
      <input type="range" :min="0" :max="100"
      v-model.number="yVel"
      @change="newData()">
      <input type="number" v-model.number="yVel" @change="newData()">
    </div>
    <div>
      <span>Mass:</span>
      <input type="range" 
      :min="Math.pow(10, 14)" :max="Math.pow(10, 28)"
      v-model.number="mass"
      @change="newData()">
      <input type="number" v-model.number="mass" @change="newData()">
    </div>
    <div>
      <span>Size:</span>
      <input type="range" :min="0" :max="30"
      v-model.number="size"
      @change="newData()">
      <input type="number" v-model.number="size" @change="newData()">
    </div>
    <div>
      <span>Color:</span>
      <input type="color"      
      class="col-input"
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
    showPopup: true,
  },
  methods: {
    setSim: function(status) {
      setSim(status);
    },
    reset: function() {
      this.setSim(false);
      const controls = this.$refs.controls;

      for (let control of controls) {
        control.newData();
      }
    },
    newCelestialBody: function() {
      this.celestialBodies.push(
        new CelestialBody(500, 400, 3 * Math.pow(10, 22), 10, 0, 5, '#00FF00', false)
      );

      celestialBodies = this.celestialBodies;
    }
  },
});
