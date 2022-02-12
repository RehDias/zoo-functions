const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const zooInfo = Object.entries(hours).map(([day, hour]) => {
  let days = {
    [day]: {
      officeHour: `Open from ${hour.open}am until ${hour.close}pm`,
      exhibition: species.filter((obj) => obj.availability.includes(day))
        .map((animal) => animal.name),
    },
  };
  if (day === 'Monday') {
    days = {
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return days;
});

function getSchedule(scheduleTarget) {
  const objZooInfo = zooInfo.reduce((a, b) => Object.assign(a, b), {});// Referência: https://stackoverflow.com/questions/4215737/convert-array-to-object;
  const agenda = Object.keys(hours);
  const animalsName = species.map((animal) => animal.name);
  if (scheduleTarget === undefined) {
    return objZooInfo;
  } if (agenda.includes(scheduleTarget)) {
    return zooInfo.find((day) => Object.keys(day).includes(scheduleTarget));
  } if (animalsName.includes(scheduleTarget)) {
    const animals = species.filter((element) => element.name === scheduleTarget)
      .map((days) => days.availability);
    return Object.assign(...animals);
  } return objZooInfo;
}

module.exports = getSchedule;
