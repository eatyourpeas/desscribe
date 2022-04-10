<script>
import { ref } from 'vue';
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
        { id: 64, title: "unresponsive", category: "custom", narrative: 0, color: randomColour()},
      ]);
  
  const wordMatch = (word) => {
    const matchedItem = items.value.filter((item)=>
      item.title == word
    );
    if (matchedItem.length > 0){
      return {
        match: true,
        value: word,
        item: matchedItem[0]
      }
    } else {
      return {
        match: false,
        value: word,
        item: undefined
      }
    }
  }

  export default {
    setup() {
      const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase()+word.slice(1);
      }
      const returnAllSelectedKeywords = (words) => {
        return words.filter((word)=>word.match === true);
      }
      const returnAllKeywordsByCategory=(category) => {
        return items.value.filter((word)=> word.category === category);
      }
      return {
        capitalizeFirstLetter,
        returnAllSelectedKeywords,
        returnAllKeywordsByCategory
      }
    },
    name: 'semiologyInput',
    data(){
      return {
        inputValue: '',
        allWords: []
      }
    },
    watch:{
      inputValue: function(newVal){
        if([" ", ".", ",", ":", ";"].includes(newVal.slice(-1))){
          // last letter typed is a space: this is a word - remove the final space and convert to lower case.
          const trimmedLowerCaseWord = newVal.slice(0, -1).toLowerCase().trim();
          //  test if first letter is capitalised
          const firstLetter = newVal.charAt(0);
          const result = wordMatch(trimmedLowerCaseWord);

          if (result.match){
            // matches a keyword
            this.allWords.push({
                word: trimmedLowerCaseWord,
                match: result.match,
                isFinal: newVal.slice(-1)==="." ? true : false,
                isCapitalised: firstLetter === firstLetter.toUpperCase(),
                colour: result.match ? result.item.color : undefined,
              });
          } else {
            // no keyword match
            if (this.allWords.length > 0){
              // there are previous words in the array - check the last for a match also
              const lastWord = this.allWords[this.allWords.length-1];
              const twoWordResult = wordMatch(lastWord.word + " " + trimmedLowerCaseWord);
              if (twoWordResult.match){
                // match with last 2 words - replace the last word in the array with this 2 word match
                this.allWords.pop();
                this.allWords.push(
                  {
                    word: lastWord.word + " " + trimmedLowerCaseWord,
                    match: twoWordResult.match,
                    isFinal: newVal.slice(-1)==="." ? true : false,
                    isCapitalised: firstLetter === firstLetter.toUpperCase(),
                    colour: twoWordResult.match ? twoWordResult.item.color : undefined,
                  }
                );
              } else {
                // no two word matches - add this word to the array
                this.allWords.push({
                  word: trimmedLowerCaseWord,
                  match: result.match,
                  isFinal: newVal.slice(-1)==="." ? true : false,
                  isCapitalised: firstLetter === firstLetter.toUpperCase(),
                  colour: result.match ? result.item.color : undefined,
                });
              }
            } else {
              // no matches - add word to array
              this.allWords.push({
                word: trimmedLowerCaseWord,
                match: result.match,
                isFinal: newVal.slice(-1)==="." ? true : false,
                isCapitalised: firstLetter === firstLetter.toUpperCase(),
                colour: result.match ? result.item.color : undefined,
              });
            }
          }
          this.inputValue = ""; // reset input to empty
        }
      }
    }
  }
</script>

<template>
  <div class="autocomplete">
    <div class="ui padded container">
      <div class="ui padded grid">
          <div class="sixteen wide column">
            <div class="ui green message">
              <div class="header">
                <h1>
                  Autocomplete
                </h1>
                <p>
                  Describe the events of the seizure as a narrative in the box below.
                </p>
              </div>
            </div>
          </div>

        <div class="row">
          <div class="ui container">
            <div class="ui icon fluid input">
              <input type="text" name='semiologyInput' placeholder="Begin typing semiology..." v-model="inputValue" v-on:keyup='inputChangeHandler'/>
              <i class="search icon"></i>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="ui segment">
            <h5 class="header">
              Semiology Text
            </h5>
            <div v-if="allWords.length > 0">
              <span v-for="word, index in allWords" :key="index" >
                <div class="ui label semiologyPhrases" v-if="word.match" :class="word.colour">
                  {{word.isCapitalised ? capitalizeFirstLetter(word.word) : word.word}}
                </div>
                <span v-else>
                    {{word.isCapitalised ? capitalizeFirstLetter(word.word) : word.word}}{{word.isFinal ? ". " : " "}}
                </span>
              </span>
            </div>
            <div v-else>
              <p>
                Awaiting semiology...
              </p>
            </div>
          </div>
        </div>

        <div class="row" v-if="allWords.length > 0">
          <div class="red ui icon button" v-on:click="()=>allWords.splice(-1)"><i class="icon trash"></i>Remove last word</div>
        </div>

        <div class="row">
          <div class="ui segment">
            <h5 class="header">
              Selected key words
            </h5>
            <div v-for="word, index in returnAllSelectedKeywords(allWords)" class="ui horizontal label" :class="word.colour" :key="index">
              {{word.word}}
            </div>
          </div>
        </div>

        
        <div class="ui divider"></div>
        

        <div class="row">
          <div class="ui padded container">
            <div class="ui centered red message">
              <p>
                These are all suggestions of key words to use in describing events.
              </p>
            </div>
          </div>
        </div>
        <div class="ui segment">
          <!-- <div class="ui red message"> -->
            <h5 class="header">
              Cognitive
            </h5>
            <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('cognitive')" :key="word.id" :class="word.color">
              {{word.title}}
            </div>
          <!-- </div> -->
        </div>
        <div class="ui segment">
          <!-- <div class="ui orange message"> -->
            <h5 class="header">
              Emotional or Affective
            </h5>
            <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('emotional or affective')" :key="word.id" :class="word.color">
              {{word.title}}
            </div>
          <!-- </div> -->
        </div>
        <div class="ui segment">
          <!-- <div class="ui yellow message"> -->
            <h5 class="header">
              Autonomic
            </h5>
            <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('autonomic')" :key="word.id" :class="word.color">
              {{word.title}}
            </div>
          <!-- </div> -->
        </div>
        <div class="ui segment">
          <!-- <div class="ui olive message"> -->
            <h5 class="header">
              Motor
            </h5>
            <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('motor')" :key="word.id" :class="word.color">
              {{word.title}}
            </div>
          <!-- </div> -->
        </div>
        <div class="ui segment">
          <!-- <div class="ui green message"> -->
            <h5 class="header">
              Sensory
            </h5>
            <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('sensory')" :key="word.id" :class="word.color">
              {{word.title}}
            </div>
          <!-- </div> -->
        </div>
        <div class="ui segment">
          <!-- <div class="ui teal message"> -->
            <h5 class="header">
              Laterality
            </h5>
            <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('laterality')" :key="word.id" :class="word.color">
              {{word.title}}
            </div>
          <!-- </div> -->
        </div>
        <div class="ui segment">
          <!-- <div class="ui blue message"> -->
            <h5>
              Custom
            </h5>
            <div class="row">
              <div class="ui horizontal label" v-for="word in returnAllKeywordsByCategory('custom')" :key="word.id" :class="word.color">
                {{word.title}}
              </div>
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.semiologyPhrases{
  margin: 0px 5px 5px 5px;
}
</style>