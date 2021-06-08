Vue.component('cb-data', {
  props: ['celestialbody', 'num'],
  data: function() {
    return {
      width: mapWidth,
      x: this.celestialbody.pos.x,
    }
  },
  methods: {
    newData: function() {
      // alert('new data detected!');
    }
  },
  template: `
  <div>
    <h3>Planet {{ num }}</h3>
    <div>
      <span>X Position:</span>
      <input type="range" :min="0" :max="width"
      v-model="x"
      @change="newData()">
      <span>{{x}}</span>
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
