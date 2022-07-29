let data = [
  {
    id: 1,
    name: "Augusto Luengo",
    email: "augusto.luengo@ifpr.edu.br",
    password: "cai@1234",
    createdAt: Date.now()
  },
  {
    id: 2,
    name: "Luciano Weslen",
    email: "fulano1@cai.com",
    password: "cai@1234",
    createdAt: Date.now()
  }
]

module.exports = {
  getById(id){
    return data.filter(user => user.id === id)[0]
  },
  getByEmail(email){
    return data.filter(user => user.email === email)[0]
  },
  getAll(){
    return data
  },
  create(user){
    const lastUser = data[data.length - 1]
    user.id = lastUser.id + 1
    user.createdAt = Date.now()
    data.push(user)
  }
}