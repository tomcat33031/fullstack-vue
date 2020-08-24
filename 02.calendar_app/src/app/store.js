import { seedData } from "./seed.js";

export const store = {
  state: {
    seedData: seedData,
  },
  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObj(dayId, eventDetails);
    if (eventObj) {
      eventObj.edit = true;
    }
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    if (eventObj) {
      eventObj.details = newEventDetails;
      eventObj.edit = false;
    }
  },
  resetEditOfAllEvents() {
    this.state.seedData.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      });
    });
  },
  getEventObj(dayId, eventDetails) {
    // Find the day object
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    if (dayObj) {
      // Find the specific event
      return dayObj.events.find((event) => event.details === eventDetails);
    }
  },
  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    if (dayObj) {
      const eventIndexToRemove = dayObj.events.findIndex(
        (event) => event.details === eventDetails
      );
      dayObj.events.splice(eventIndexToRemove, 1);
    }
  },
};
