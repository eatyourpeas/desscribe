<template>
  <div class="ui padded container">
    <div class="ui padded grid" id="container">
        <div class="row">
          <div class="ui green message">
            <div class="header">
              <h1>
                Epilepsy12 Apps Home
              </h1>
              <p>
                These apps are all thought-experiments to act as proof of concept to implement the paediatric DESSCRIBE model which is widely taught across the UK to classify children's epilepsy and communicate semiology to clinicians in a meaningful way.
                There are 2 apps:
              </p>
              <li>
                <router-link to="/draganddrop"><a class="item">Drag and Drop - Users drag and drop key words to create a narrative of each seizure.</a></router-link>
              </li>
              <li>
              <router-link to="/autocomplete"><a class="item">Autocomplete - Users type a narrative of the episode. Keyword are automatically collected and highlighted.</a></router-link>
              </li>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>
<style scoped>
#container {
  background-color: white;
  min-height: 100vh;
}
</style>