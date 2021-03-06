export const addEmp = (obj) => ({
  type: 'ADD',
  counter: obj.gender == 'Male' ? 'ADD_MALE' : 'ADD_FEMALE',
  id: obj.id,
  firstname: obj.firstname,
  midname: obj.midname,
  surname: obj.surname,
  gender: obj.gender,
  birth: obj.birth,
});

export const editEmp = (obj) => ({
  type: 'EDIT',
  id: obj.id,
  firstname: obj.firstname,
  midname: obj.midname,
  surname: obj.surname,
  gender: obj.gender,
  birth: obj.birth,
});

export const getEmp = (obj) => ({
  type: 'GET',
  id: obj.id,
  firstname: obj.firstname,
  midname: obj.midname,
  surname: obj.surname,
  gender: obj.gender,
  birth: obj.birth
})

export const deleteEmp = (obj) => ({
  type: 'DELETE',
  counter: obj.gender == 'Male' ? 'DELETE_MALE' : 'DELETE_FEMALE',
  id: obj.id
})

export const addTodo = (obj) => ({
  type: 'APPEND',
  id: obj.id,
  text: obj.text
});