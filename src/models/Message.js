let data = [
  {
    id: 1,
    text: "Olá, Galera! Tudo bem?",
    userId: 1,
    createdAt: Date.now()
  },
  {
    id: 2,
    text: "Comprar refigerante para o jantar",
    userId: 1,
    createdAt: Date.now()
  },
  {
    id: 3,
    text: "Olá, turma! Tudo bem?",
    userId: 2
  },
  {
    id: 4,
    text: "Comprar refigerante para o almoço",
    userId: 2,
    createdAt: Date.now()
  },
  {
    id: 5,
    text: "Comprar pão para o café da manhã",
    userId: 3,
    createdAt: Date.now()
  }
]

module.exports = {
  getByUserId(userId){
    return data.filter(message => message.userId === userId)
  },
  getById(id){
    return data.filter(message => message.id === id)[0]
  },
  getAll(){
    return data
  },
  create(message){
    const lastMessage = data[data.length - 1]
    message.id = lastMessage.id + 1
    message.createdAt = Date.now()
    data.push(message)
  }
}