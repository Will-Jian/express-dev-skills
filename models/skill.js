const skills = [
    {id: 111111, skill: 'CSS', done: true},
    {id: 122222, skill: 'HTML', done: false},
    {id: 133333, skill: ' Node JS', done: false},
]


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  



  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill)
  }

  function getAll() {
    return skills;
  }

  function getOne(id){
   // URL params are strings - convert to a number
   id = parseInt(id);
   // The Array.prototype.find iterator method is
   // ideal for finding objects within an array
   return skills.find(skill => skill.id === id);
 }

 function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  

      
 