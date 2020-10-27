<template>
  <div id="cesiumContainer">
  </div>
</template>

<script>

import {Viewer} from 'cesium'; 
import "cesium/Build/Cesium/Widgets/widgets.css";

export default {
   name: 'cesiumContainer',
   mounted(){
  	 var viewer = new Viewer('cesiumContainer');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
