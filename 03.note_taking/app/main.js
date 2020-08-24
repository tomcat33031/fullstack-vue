const EventBus = new Vue();

const inputComponent = {
  template: `<input v-bind:placeholder="placeholder" v-model="input" v-on:keyup.enter="monitorEnterKey" class="input is-small" type="text" />`,
  props: ["placeholder"],
  data() {
    return {
      input: "",
    };
  },
  methods: {
    monitorEnterKey() {
      // this.$emit("add-note", {
      //   note: this.input,
      //   timestamps: new Date().toLocaleDateString(),
      // });
      EventBus.$emit("add-note", {
        note: this.input,
        timestamps: new Date().toLocaleString(),
      });
      this.input = "";
    },
  },
};

const noteCountComponent = {
  template: `<div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>`,
  data() {
    return {
      noteCount: 0,
    };
  },
  created() {
    EventBus.$on("add-note", (event) => this.noteCount++);
  },
};

new Vue({
  el: "#app",
  components: {
    "input-component": inputComponent,
    "note-count-component": noteCountComponent,
  },
  data: {
    notes: [],
    timestamps: [],
    placeholder: "Enter a note",
  },
  methods: {
    addNote(event) {
      console.log(event);
      this.notes.push(event.note);
      this.timestamps.push(event.timestamps);
    },
  },
  created() {
    EventBus.$on("add-note", (event) => this.addNote(event));
  },
});
