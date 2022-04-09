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
                <a href="/draganddrop">
                Drag and Drop - Users drag and drop key words to create a narrative of each seizure.
                </a>
                <p>
                </p>
              </li>
              <a href="/autocomplete"><li>
                Autocomplete - Users type a narrative of the episode. Keyword are automatically collected and highlighted.
              </li></a>
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