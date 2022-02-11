const data = require('../data/zoo_data');

function zooInfo() {
  const agenda = {};
  const zooHours = data.hours;
  const days = Object.keys(zooHours);
  for (let day in days) {
    agenda = {
      [day]: { 
      'officeHour': `Open from ${zooHours.open} until ${zooHours.close}`,
      'Exhibition': obj.name,  
      }
    }
  }
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    const animalsSchedule = data.species.map((obj) => {
      const daysAvailable = days.filter((day) => obj.availability.includes(day) ? obj : null);
    });
    return animalsSchedule;
  }
}
console.log(getSchedule());
module.exports = getSchedule;
