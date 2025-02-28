class Endereco {
  constructor(estado, cidade, rua, numero) {
    this.estado = estado,
    this.cidade = cidade,
    this.rua = rua
    this.numero = numero
  }
}

class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd,
      this.numero = numero
  }
}

class Cliente {
  #cpf
  constructor(nome, cpf, endereco) {
    this.nome = nome
    this.#cpf = cpf
    this.endereco = endereco
    this.telefone = new Set()
  }

  get clientePrivateInfo(){
    return `CPF: ${this.#cpf}`
  }

  upperInfos(){
    return (
      `Nome: ${this.nome.toUpperCase()} \n` +
      `Estado: ${this.endereco.estado.toUpperCase()} \n` +
      `Cidade: ${this.endereco.cidade.toUpperCase()} \n` +
      `Rua: ${this.endereco.rua.toUpperCase()} \n` 
    )
  }

  lowerInfos(){
    return(
      `Nome: ${this.nome.toLowerCase()} \n` +
      `Estado: ${this.endereco.estado.toLowerCase()} \n` +
      `Cidade: ${this.endereco.cidade.toLowerCase()} \n` +
      `Rua: ${this.endereco.rua.toLowerCase()} \n`
    )
  }

  adicionarTelefone(telInfos) {
    this.telefone.add(telInfos)
  }

  removerTelefone(telefoneRemove) {
    if (this.telefone.size === 0) {
      console.log('Ainda não há telefones na lista')
    } else {
      for (let telefoneLista of this.telefone) {
        if (telefoneLista.ddd === telefoneRemove.ddd && telefoneLista.numero === telefoneRemove.numero) {
          console.log(`(${telefoneRemove.ddd})-${telefoneRemove.numero} foi removido da lista!`);
          this.telefone.delete(telefoneLista)
          break
        } else {
          console.log(`Não há um telefone registrado com - DDD: ${telefoneRemove.ddd} e Número: ${telefoneRemove.numero}`);
          break
        }
      }
    }
  }

  clienteDetails() { 
    let mensagem = ''
    for (let numero of this.telefone){
      mensagem += `DDD: ${numero.ddd} Número: ${numero.numero} \n`
    }
    return `Nome: ${this.nome} \n` +
      `Estado: ${this.endereco.estado} Cidade: ${this.endereco.cidade} Rua: ${this.endereco.rua} Número: ${this.endereco.numero} \n` +
      `${mensagem}`
  }
}

class Empresa {
  #cnpj
  constructor(nome, razaoSocial, cnpj, endereco) {
    this.nome = nome
    this.razaoSocial = razaoSocial
    this.#cnpj = cnpj
    this.endereco = endereco
    this.cliente = new Set()
    this.telefone = new Set()
  }

  get empresaPrivateInfo(){
    return `CNPJ: ${this.#cnpj}`
  }

  upperInfos(){
    return (
      `Nome: ${this.nome.toUpperCase()} \n` +
      `Razão Social: ${this.razaoSocial.toUpperCase()} \n` +
      `Estado: ${this.endereco.estado.toUpperCase()} \n` +
      `Cidade: ${this.endereco.cidade.toUpperCase()} \n` +
      `Rua: ${this.endereco.rua.toUpperCase()} \n`
    )
  }

  lowerInfos(){
    return(
      `Nome: ${this.nome.toLowerCase()} \n` +
      `Razão Social: ${this.razaoSocial.toLowerCase()} \n` +
      `Estado: ${this.endereco.estado.toLowerCase()} \n` +
      `Cidade: ${this.endereco.cidade.toLowerCase()} \n` +
      `Rua: ${this.endereco.rua.toLowerCase()} \n`
    )
  }

  adicionarClientes(cliente){
    this.cliente.add(cliente)
  }

  removerTelefone(telefoneRemove) {
    if (this.telefone.size === 0) {
      console.log('Ainda não há telefones na lista')
    } else {
      for (let telefoneLista of this.telefone) {
        if (telefoneLista.ddd === telefoneRemove.ddd && telefoneLista.numero === telefoneRemove.numero) {
          console.log(`(${telefoneRemove.ddd})-${telefoneRemove.numero} foi removido da lista!`);
          this.telefone.delete(telefoneLista)
          // break
        } else {
          console.log(`Não há um telefone registrado com - DDD: ${telefoneRemove.ddd} e Número: ${telefoneRemove.numero}`);
          // break
        }
      }
    }
  }

  companyDetails(){
    let mensagem = ''
    for (let cliente of this.cliente){
      mensagem += cliente.clienteDetails() + '\n'
    }
    return `Razão Social: ${this.razaoSocial} \n` +
      `Nome: ${this.nome} \n` +
      '------------------------------------------ \n' +
      `${mensagem}`
    
  }
}

const cliente1 = new Cliente('Pedro', '44455566611',
  new Endereco('SP', 'Sorocaba', 'Av. Soro', '111'))

cliente1.adicionarTelefone(new Telefone('15', '999999999'))
cliente1.adicionarTelefone(new Telefone('15', '888888888'))

console.log(cliente1.clientePrivateInfo)
cliente1.removerTelefone(new Telefone('15', '999999999'))

const cliente2 = new Cliente('Ana', '55566677722',
  new Endereco('BA', 'Salvador', 'Rua Baiana', '222'))
cliente2.adicionarTelefone(new Telefone('71', '777777777'))
cliente2.adicionarTelefone(new Telefone('71', '000000000'))

console.log(cliente2.upperInfos())
console.log(cliente2.lowerInfos())


const cliente3 = new Cliente('José', '66677788833',
  new Endereco('RJ', 'Rio de Janeiro', 'Av. Carioca', '333'))
cliente3.adicionarTelefone(new Telefone('21', '666666666'))
cliente3.adicionarTelefone(new Telefone('21', '555555555'))

const cliente4 = new Cliente('Nicolas', '77788899944',
  new Endereco('RS', 'Porto Alegre', 'Rua Baah', '444'))
cliente4.adicionarTelefone(new Telefone('51', '444444444'))
cliente4.adicionarTelefone(new Telefone('51', '333333333'))

const cliente5 = new Cliente('Kazuma', '88899900055',
  new Endereco('AM', 'Manaus', 'Av. das Onças', '555'))
cliente5.adicionarTelefone(new Telefone('92', '222222222'))
cliente5.adicionarTelefone(new Telefone('92', '111111111'))

const empresa1 = new Empresa('Tech Company', 'Tech Company LTDA',
  '11223344556677', new Endereco('SP', 'São Paulo', 'Av. Paulista', '99'))

empresa1.adicionarClientes(cliente1)
empresa1.adicionarClientes(cliente2)
empresa1.adicionarClientes(cliente3)
empresa1.adicionarClientes(cliente4)
empresa1.adicionarClientes(cliente5)


console.log(empresa1.upperInfos())
console.log(empresa1.lowerInfos())
// console.log(empresa1)
console.log(empresa1.empresaPrivateInfo)
console.log(empresa1.companyDetails())
// console.log(cliente1.clienteDetails())