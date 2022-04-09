<script>
  import { ref } from "vue";

  const colours = [
        "red",
        "orange",
        "yellow",
        "olive",
        "green",
        "teal",
        "blue",
        "violet",
        "purple",
        "pink",
        "brown",
        "grey",
        "black",
      ];

  const randomColour = () => {
        const randomInt = Math.floor(Math.random() * 13);
        return colours[randomInt];
      }

  const items = ref([
        { id: 0, title: "acalculia", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 1, title: "aphasia", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 2, title: "attention impairment", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 3, title: "deja vu/jamais vu", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 4, title: "dissociation", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 5, title: "dysphasia", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 6, title: "hallucinations", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 7, title: "illusions", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 8, title: "memory impairment", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 9, title: "neglect", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 10, title: "forced thinking", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 11, title: "responsiveness impairment", category: "cognitive", narrative: 0, color: randomColour()},
        { id: 12, title: "agitation", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 13, title: "anger", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 14, title: "anxiety", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 15, title: "crying (dacrystic)", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 16, title: "fear", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 17, title: "laughing (gelastic)", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 18, title: "paranoia", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 19, title: "pleasure", category: "emotional or affective", narrative: 0, color: randomColour()},
        { id: 20, title: "asystole", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 21, title: "bradycardia", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 22, title: "erection", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 23, title: "flushing", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 24, title: "gastrointestinal", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 25, title: "hyper/hypoventilation", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 26, title: "nausea/vomiting", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 27, title: "pallor", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 28, title: "palpitations", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 29, title: "piloerection", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 30, title: "respiratory changes", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 31, title: "tachycardia", category: "autonomic", narrative: 0, color: randomColour()},
        { id: 32, title: "aggression", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 33, title: "eye-blinking", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 34, title: "head nodding", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 35, title: "manual", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 36, title: "orofacial", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 37, title: "pedaling", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 38, title: "pelvic thrusting", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 39, title: "perseveration", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 40, title: "running (cursive)", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 41, title: "sexual", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 42, title: "undressing", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 43, title: "vocalisation/speech", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 44, title: "walking", category: "automatisms", narrative: 0, color: randomColour()},
        { id: 45, title: "dysarthria", category: "motor", narrative: 0, color: randomColour()},
        { id: 46, title: "dystonic", category: "motor", narrative: 0, color: randomColour()},
        { id: 47, title: "fencer's posture", category: "motor", narrative: 0, color: randomColour()},
        { id: 48, title: "incoordination", category: "motor", narrative: 0, color: randomColour()},
        { id: 49, title: "jacksonian", category: "motor", narrative: 0, color: randomColour()},
        { id: 50, title: "paralysis", category: "motor", narrative: 0, color: randomColour()},
        { id: 51, title: "paresis", category: "motor", narrative: 0, color: randomColour()},
        { id: 52, title: "versive", category: "motor", narrative: 0, color: randomColour()},
        { id: 53, title: "auditory", category: "sensory", narrative: 0, color: randomColour()},
        { id: 54, title: "gustatory", category: "sensory", narrative: 0, color: randomColour()},
        { id: 55, title: "hot/cold sensations", category: "sensory", narrative: 0, color: randomColour()},
        { id: 56, title: "olfactory", category: "sensory", narrative: 0, color: randomColour()},
        { id: 57, title: "somatosensory", category: "sensory", narrative: 0, color: randomColour()},
        { id: 58, title: "vestibular", category: "sensory", narrative: 0, color: randomColour()},
        { id: 59, title: "visual", category: "sensory", narrative: 0, color: randomColour()},
        { id: 60, title: "left", category: "laterality", narrative: 0, color: randomColour()},
        { id: 61, title: "right", category: "laterality", narrative: 0, color: randomColour()},
        { id: 62, title: "bilateral", category: "laterality", narrative: 0, color: randomColour()},
        { id: 63, title: "aura", category: "custom", narrative: 0, color: randomColour()},
      ]);

  export default {
    setup(){
      
      let narrativesNumber = 0;

      const getAllItems = () => {
        return items.value;
      }

      const getItemByNarrative = (narrative) => {
        return items.value.filter((item) => item.narrative == narrative);
      };

      const getCountOfNarratives = () => {
        return items.value.filter((item)=> item.narrative > 0).length;
      }

      const getCountByNarrative = (narrative) => {
        return items.value.filter((item)=> item.narrative == narrative).length;
      }
      
      const getListByCategory = (category) => {
        return items.value.filter((item) => item.category == category);
      };
      
      const getListByNarrative = (narrative) => {
        return items.value.filter((item) => item.narrative == narrative);
      };
      
      const getListByCategoryAndNarrative = (category, narrative) => {
        return items.value.filter((item) => (item.category == category) && (item.narrative == narrative));
      };

      const saveItemToItems = (item_value) => {
        const itemsLength = items.value.length;
        const newItem = { id: itemsLength+1, title: item_value, category: "custom", narrative: 0, color: randomColour() }
        items.value.push(newItem)
      }

      const startDrag = (event, item) => {
        event.dataTransfer.dropEffect="move";
        event.dataTransfer.effectAllowed="move";
        event.dataTransfer.setData("itemID", item.id);
      }

      const onDrop = (event, narrative) => {
        const itemID = event.dataTransfer.getData('itemID');
        const item = items.value.find((item)=> item.id == itemID);
        item.narrative = narrative;
      }

      return {
        getAllItems,
        getAllItems,
        getListByCategory,
        getListByNarrative,
        getListByCategoryAndNarrative,
        getItemByNarrative,
        getCountByNarrative,
        getCountOfNarratives,
        saveItemToItems,
        startDrag,
        onDrop
      }

    },
    name: 'custom',
    data(){
      return {
        custom: '',
        steps: 1
      }
    }
  }


</script>

<template>
  <div class="draganddrop">
    <div class="ui container">
      <div class="ui padded grid container">

        <div class="fourteen wide centered row">

          <div class="ui green message">
            <div class="header">
            Semiology
            </div>
            Seizures have a narrative. For each step in the narrative, drag and drop words which best describe that step. When there is a new step in the narrative, add a new one.
            <div class="content">
              <div class="ui button" v-on:click="steps++">add step...</div>
            </div>
            <div class="ui ordered steps">
              <div v-if="steps > 0">
                <div v-for="index in steps" :key="index" @drop="onDrop($event, index)" @dragenter.prevent @dragover.prevent>
                  <div class="step">
                    <div class="content">
                      <div class="dropzone">
                        <div v-for="item in getListByNarrative(index)" :key="item.id" class="ui item.color label" draggable="true" @dragstart="startDrag($event, item)">
                            <div v-if="item.title">
                              {{item.title}}
                            </div>
                            <div v-else>
                              Drag a description word into this narrative step
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="step">
                  <div class="content">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

          <!-- <div class="row"> -->

            <div class="eight wide column">
              <div class="ui orange message" @drop="onDrop($event, 0)" @dragenter.prevent @dragover.prevent>
                <label>Cognitive</label>
                <div class="dropzone" >
                  <span v-for="item in getListByCategoryAndNarrative('cognitive', 0)" :key="item.id" class="ui label" id="label" draggable="true" @dragstart="startDrag($event, item)" >
                    {{item.title}}
                  </span>
                </div>
              </div>
            </div>

            <div class="eight wide column">
              <div class="ui yellow message">
                <label>Emotional or Affective</label>
                <div class="dropzone" >
                  <span v-for="item in getListByCategoryAndNarrative('emotional or affective', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                    {{item.title}}
                  </span>
                </div>
              </div>
            </div>

        </div>

        <div class="row">

          <div class="eight wide column">
            <div class="ui olive message">
              <label>Autonomic</label>
              <div class="dropzone" >
                <span v-for="item in getListByCategoryAndNarrative('autonomic', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                  {{item.title}}
                </span>
              </div>
            </div>
          </div>

          <div class="eight wide column">
            <div class="ui teal message">
              <label>Automatisms</label>
              <div class="dropzone" >
                <span v-for="item in getListByCategoryAndNarrative('automatisms', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                  {{item.title}}
                </span>
              </div>
            </div>
          </div>

        </div>

        <div class="row">

            <div class="eight wide column">
              <div class="ui blue message">
                <label>Motor</label>
                <div class="dropzone" >
                  <span v-for="item in getListByCategoryAndNarrative('motor', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                    {{item.title}}
                  </span>
                </div>
              </div>
            </div>
            <div class="eight wide column">
              <div class="ui violet message">
                <label>Sensory</label>
                <div class="dropzone" >
                  <span v-for="item in getListByCategoryAndNarrative('sensory', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                    {{item.title}}
                  </span>
                </div>
              </div>
            </div>

        </div>

        <div class="row">

            <div class="eight wide column">
              <div class="ui purple message">
                <label>Laterality</label>
                <div class="dropzone" >
                  <span v-for="item in getListByCategoryAndNarrative('laterality', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                    {{item.title}}
                  </span> 
                </div>
              </div>
            </div>

            <div class="eight wide column">
              <div class="ui pink message">
                <label>Custom</label>
                <div class="dropzone" >
                  <span v-for="item in getListByCategoryAndNarrative('custom', 0)" :key="item.id" class="ui item.color label" id="label" draggable="true" @dragstart="startDrag($event, item)">
                    {{item.title}}
                  </span> 
                </div>
              </div>
            </div>

        </div>
      
        <div class="centered row">
          <div class="ui segment">
              <form 
                class="ui form"
                @submit.prevent="()=>{
                  saveItemToItems(this.custom);
                  this.custom='';
                }">
                <div class="inline field">
                  <label for='custom'>Enter New Custom Term:</label>
                  <input class="ui input" v-model="custom" name="custom" ref="custom"/>
                </div>
                <button type="submit" class="ui button">Add</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import '../assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  background-color: white;
  color: black;
}

#label {
  margin-bottom: 5px;
}

</style>