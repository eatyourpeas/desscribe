<script>
  import { ref } from "vue";

  export default {
    setup(){

      const items = ref([
        { id: 0, title: "aura", category: "review", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 5, title: "acalculia", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 6, title: "aphasia", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 7, title: "attention impairment", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 8, title: "deja vu/jamais vu", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 9, title: "dissociation", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 10, title: "dysphasia", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 11, title: "hallucinations", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 12, title: "illusions", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 13, title: "memory impairment", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 14, title: "neglect", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 15, title: "forced thinking", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 16, title: "responsiveness impairment", category: "cognitive", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 17, title: "agitation", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 18, title: "anger", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 19, title: "anxiety", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 20, title: "crying (dacrystic)", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 21, title: "fear", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 22, title: "laughing (gelastic)", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 23, title: "paranoia", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 24, title: "pleasure", category: "emotional or affective", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 25, title: "asystole", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 26, title: "bradycardia", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 27, title: "erection", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 28, title: "flushing", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 29, title: "gastrointestinal", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 30, title: "hyper/hypoventilation", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 31, title: "nausea/vomiting", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 32, title: "pallor", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 33, title: "palpitations", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 34, title: "piloerection", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 35, title: "respiratory changes", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 36, title: "tachycardia", category: "autonomic", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 37, title: "aggression", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 38, title: "eye-blinking", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 39, title: "head-nodding", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 40, title: "manual", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 41, title: "oro-facial", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 42, title: "pedaling", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 43, title: "pelvic thrusting", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 44, title: "perseveration", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 45, title: "running (cursive)", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 46, title: "sexual", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 47, title: "undressing", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 48, title: "vocalisation/speech", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 49, title: "walking", category: "automatisms", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 50, title: "dysarthria", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 51, title: "dystonic", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 52, title: "fencer's posture", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 53, title: "incoordination", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 54, title: "jacksonian", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 55, title: "paralysis", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 56, title: "paresis", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 57, title: "versive", category: "motor", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 58, title: "auditory", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 59, title: "gustatory", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 60, title: "hot-cold sensations", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 61, title: "olfactory", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 62, title: "somatosensory", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 63, title: "vestibular", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 64, title: "visual", category: "sensory", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 65, title: "left", category: "laterality", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 66, title: "right", category: "laterality", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
        { id: 67, title: "bilateral", category: "laterality", list: 4, color: '#' + Math.floor(Math.random()*16777215).toString(16) },
      ]);

      const getList = (list) => {
        return items.value.filter((item) => item.list == list);
      };
      
      const getListByCategory = (category) => {
        return items.value.filter((item) => item.category == category);
      };
      
      const getListByCategoryAndList = (category, list) => {
        return items.value.filter((item) => (item.category == category) && (item.list == list));
      };

      const startDrag = (event, item) => {
        console.log(item);
        event.dataTransfer.dropEffect="move";
        event.dataTransfer.effectAllowed="move";
        event.dataTransfer.setData("itemID", item.id);
        event.dataTransfer.setDragImage(null, 0, 0);
      }

      const onDrop = (event, list) => {
        const itemID = event.dataTransfer.getData('itemID');
        const item = items.value.find((item)=> item.id == itemID);
        item.list = list;
      }

      return {
        getList,
        getListByCategory,
        getListByCategoryAndList,
        startDrag,
        onDrop
      }

    }
  }


</script>

<template>
  <div class="grid-container">
    <div class="column-1">
      <div class="container" @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent>
        <label>Semiology</label>
        <div class="dropzone">
          <div v-for="item in getList(0)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
            {{item.title}}
          </div>
        </div>
      </div>
    </div>
    <div class="column-2">
      <div class="white-container" @drop="onDrop($event, 4)" @dragenter.prevent @dragover.prevent>
        <div class="zone">
          <label>Cognitive</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('cognitive', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span>
          </div>
          <label>Emotional or Affective</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('emotional or affective', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span>
          </div>
        </div>
        <div class="zone">
          <label>Autonomic</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('autonomic', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span>
          </div>
          <label>Automatisms</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('automatisms', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span>
          </div>
        </div>
        <div class="zone">
          <label>Motor</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('motor', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span>
          </div>
          <label>Sensory</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('sensory', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span>
          </div>
        </div>
        <div class="zone">
          <label>Laterality</label>
          <div class="dropzone" >
            <span v-for="item in getListByCategoryAndList('laterality', 4)" :key="item.id" class="drag-el" draggable="true" @dragstart="startDrag($event, item)" v-bind:style="{ 'background-color': item.color }">
              {{item.title}}
            </span> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  background-color: grey;
  font-weight: normal;
  color: #2c3e50;
}

.container {
  border-radius: 12.5px;
  min-width: 400px;
  width: 50%;
  margin: 5px auto;
  background-color: #ADEFD1FF;
  padding: 10px;
  min-height: 100px; 
}

.container > label {
  color: #00203FFF;
}

.white-container {
  min-width: 50%;
  margin: 25px auto;
  background-color: transparent;
  padding: 10px;
  min-height: 100px;
}

.dropzone {
  display: flex;
  flex-wrap: wrap;
}

.drag-el {
  color: white;
  font-size: small;
  padding: 10px;
  border-radius: 250px;
  width: fit-content;
  margin: 5px;
  -webkit-background-clip: padding-box; 
  -moz-background-clip:    padding; 
  background-clip:         padding-box;
}

.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  background-color: #00203FFF;
  padding: 10px;
}



.column-1 {
  flex: 50%;
}
.column-2 {
  flex: 50%;
}

label {
  color: #ADEFD1FF;
}


</style>
