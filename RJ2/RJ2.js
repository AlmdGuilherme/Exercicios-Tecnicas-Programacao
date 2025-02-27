class Telefone {
    constructor(ddd, numero){
      this.ddd = ddd;
      this.numero = numero;
    }
  }
  
  class Endreco {
    constructor(estado, cidade, rua, numero){
      this.estado = estado;
      this.cidade = cidade;
      this.rua = rua;
      this.numero = numero;
    }
  }
  
  class Cliente {
    constructor(nome, telefoneCelular, email, endereco){
      this.nome = nome;
      this.telefoneCelular = telefoneCelular;
      this.email = email;
      this.endereco = endereco
    }
  
    get clienteInfo(){
      return `Informações do Cliente: \n` +
      `${this.nome} \n` +
      `----------------------------------------------------- \n`+
      `----------------------------------------------------- \n`+
      `Telefone: \n`+
      `DDD: ${this.telefoneCelular.ddd} \n`+
      `Número: ${this.telefoneCelular.numero} \n`+
      `Email: \n` +
      `${this.email} \n`+
      `----------------------------------------------------- \n`+
      `----------------------------------------------------- \n`+
      `Endereço: \n` +
      `Rua: ${this.endereco.rua} \n` +
      `Número: ${this.endereco.numero} \n` +
      `Cidade: ${this.endereco.cidade} \n` +
      `Estado: ${this.endereco.estado} \n` 
    }
  
    set newClienteInfos(newInfos){
      const {nome, telefoneCelular, email, endereco} = newInfos;
      this.nome = nome;
      this.telefoneCelular = telefoneCelular;
      this.email = email;
      this.endereco = endereco;
    }
    
  
  }
  
  const telefone = new Telefone('12', '90902919090')
  const endereco = new Endreco('SP', 'São Paulo', 'Av. Paulista', '987')
  const cliente = new Cliente('José', telefone, 'jose@email.com', endereco)
  
  
  const telefone2 = new Telefone('11', '99999999999')
  const endereco2 = new Endreco('SP', 'Sorocaba', 'Rua Qualquer', '111')
  const cliente2 = new Cliente('Luís', telefone, 'luis@email.com', endereco)
  
  const telefone3 = new Telefone('19', '99999999999')
  const endereco3 = new Endreco('SP', 'Campinas', 'Rua de Campinas', '521')
  const cliente3 = new Cliente('Angelo', telefone, 'angelo@email.com', endereco)
  
  console.log(cliente.clienteInfo)
  console.log(cliente2.clienteInfo)
  console.log(cliente3.clienteInfo)
  
  
  cliente3.newClienteInfos = {
    nome: 'Angelo',
    telefoneCelular: telefone3,
    email: 'dev_angelo@email.com',
    endereco: endereco3
  }
  
  console.log(cliente3.clienteInfo)
  
  const clientes = [cliente, cliente2, cliente3]
  
  function ordenaClinete(listaClientes){
    listaClientes.sort(function(a, b){
      if (a.nome > b.nome){
        return 1;
      } else if (a.nome < b.nome){
        return -1;
      }
      return 0;
    })
  
    return listaClientes
  }
  
  
  console.log(ordenaClinete(clientes))