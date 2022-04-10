# DESSCRIBE

These are 2 javascript apps written in Vue 3 as thought experiments for the [RCPCH Epilepsy12 project](https://github.com/rcpch/rcpch-audit-engine).

## Background

Seizures are typically described using the DESSCRIBE approach, which is taught in UK Paediatric Epilepsy courses such at [PET](https://courses.bpna.org.uk/index.php?page=paediatric-epilepsy-training).

In DESSCRIBE, there are 6 steps:

* D - Description of the episode: this is the focus of these two apps
* E - Epileptic: Is the event epileptic or not?
* S - Seizure type: if it is epileptic, what type is it? If it is nonepileptic, what type is it?
* S - Syndrome: does the seizure have features that fulfill a known syndrome?
* C - Cause: is there a known genetic or other cause?
* RIBE - Relevant Impairment, Behavioural or Educational problem: are any of these present?

## Description

Clinicians currently describe seizures as a narrative, reporting what they see as a series of steps. Many of the descriptive words used are standardised. The International League Against Epilepsy has produce a [list](https://www.ilae.org/guidelines/definition-and-classification/ilae-classification-of-the-epilepsies-2017), last updated in 2017, which is not exhaustive. Most seizures in theory have three steps: a preictal, an ictal and a postictal step. In practice, the deliniation between these is often unclear, and current practice has moved away from this idea, instead preferring an individualised set of steps.

### Concept

Rather than using free text to capture a given episode, instead we can collect key descriptive words for each step of a seizure episode.

#### Drag and Drop

Words to descrive a seizure are dropped on to a semiology zone to build a description of an epileptic event. The event itself is divided up into steps which the user defines, adding new steps onto which new key words are dropped. A menu of key words is provided from which users can select, or if there is not an appropriate word, new ones can be added.

#### Autocomplete

Drag and drop relies on using a mouse in a browser, and not all have access to this, and not all find this way of entering information easy. Instead, a free-flowing narrative is typed into an input box which preserves the text, but highlights the key words and stores them separately. There are no steps in this approach, but steps could be introduced if that were important to the narrative.

## Getting started

This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

###¢ Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Compile and Minify for Production

```sh
npm run build
```

#### Demo site

A demo can be found [here](https://jolly-cajeta-336cce.netlify.app/)