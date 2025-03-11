import { Endereco, Telefone, Cliente, Empresa } from "rj4modules";
// Link do repositório importado:  https://github.com/AlmdGuilherme/Rj4Modules

const Pedro = new Cliente('Pedro', '44455566611',
  new Endereco('SP', 'Sorocaba', 'Av. Soro', '111'))
Pedro.adicionarTelefone(new Telefone('15', '999999999'))
Pedro.adicionarTelefone(new Telefone('15', '888888888'))
console.log(Pedro.clientePrivateInfo)
Pedro.removerTelefone(new Telefone('15', '999999999'))

const Ana = new Cliente('Ana', '55566677722',
  new Endereco('BA', 'Salvador', 'Rua Baiana', '222'))
Ana.adicionarTelefone(new Telefone('71', '777777777'))
Ana.adicionarTelefone(new Telefone('71', '000000000'))

console.log(Pedro.clienteDetails())


const Jose = new Cliente('José', '66677788833',
  new Endereco('RJ', 'Rio de Janeiro', 'Av. Carioca', '333'))
Jose.adicionarTelefone(new Telefone('21', '666666666'))
Jose.adicionarTelefone(new Telefone('21', '555555555'))

const Nicolas = new Cliente('Nicolas', '77788899944',
  new Endereco('RS', 'Porto Alegre', 'Rua Baah', '444'))
Nicolas.adicionarTelefone(new Telefone('51', '444444444'))
Nicolas.adicionarTelefone(new Telefone('51', '333333333'))

const Kazuma = new Cliente('Kazuma', '88899900055',
  new Endereco('AM', 'Manaus', 'Av. das Onças', '555'))
Kazuma.adicionarTelefone(new Telefone('92', '222222222'))
Kazuma.adicionarTelefone(new Telefone('92', '111111111'))

const empresa1 = new Empresa('Tech Company', 'Tech Company LTDA',
  '11223344556677', new Endereco('SP', 'São Paulo', 'Av. Paulista', '99'))

empresa1.adicionarClientes(Pedro)
empresa1.adicionarClientes(Ana)
empresa1.adicionarClientes(Jose)
empresa1.adicionarClientes(Nicolas)
empresa1.adicionarClientes(Kazuma)


// console.log(empresa1.infosCase())
// console.log(empresa1.empresaPrivateInfo)
console.log(empresa1.companyDetails())

