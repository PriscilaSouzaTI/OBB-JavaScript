class Pessoa {
  constructor(cpf, rg, nome, idade) {
    this.cpf = cpf;
    this.rg = rg;
    this.nome = nome;
    this.idade = idade;
  }

  exibirInformacoes() {
    return `Nome: ${this.nome}<br>
            CPF: ${this.cpf}<br>
            RG: ${this.rg}<br>
            Idade: ${this.idade}`;
  }
}

class Aluno extends Pessoa {
  constructor(cpf, rg, nome, idade, matricula) {
    super(cpf, rg, nome, idade);
    this.matricula = matricula;
  }

  exibirInformacoes() {
    return `${super.exibirInformacoes()}<br>
            Matrícula: ${this.matricula}`;
  }
}

class Professor extends Pessoa {
  constructor(cpf, rg, nome, idade, disciplina) {
    super(cpf, rg, nome, idade);
    this.disciplina = disciplina;
  }

  exibirInformacoes() {
    return `${super.exibirInformacoes()}<br>
            Disciplina: ${this.disciplina}`;
  }
}

class Diretor extends Pessoa {
  constructor(cpf, rg, nome, idade, setor) {
    super(cpf, rg, nome, idade);
    this.setor = setor;
  }

  exibirInformacoes() {
    return `${super.exibirInformacoes()}<br>
            Setor: ${this.setor}`;
  }
}

class Responsavel extends Pessoa {
  constructor(cpf, rg, nome, idade, parentesco) {
    super(cpf, rg, nome, idade);
    this.parentesco = parentesco;
  }

  exibirInformacoes() {
    return `${super.exibirInformacoes()}<br>
            Parentesco: ${this.parentesco}`;
  }
}

const aluno = new Aluno("123456789", "987654321", "Priscila", 18, "A123");
const professor = new Professor("987654321", "123456789", "Wagner", 35, "Matemática");
const diretor = new Diretor("456789123", "654321987", "Edney", 40, "Administração");
const responsavel = new Responsavel("789123456", "321987654", "Deus", 45, "Pai");

function exibirInformacoesAluno() {
  const informacoes = aluno.exibirInformacoes();
  exibirInformacoes(informacoes);
}

function exibirInformacoesProfessor() {
  const informacoes = professor.exibirInformacoes();
  exibirInformacoes(informacoes);
}

function exibirInformacoesDiretor() {
  const informacoes = diretor.exibirInformacoes();
  exibirInformacoes(informacoes);
}

function exibirInformacoesResponsavel() {
  const informacoes = responsavel.exibirInformacoes();
  exibirInformacoes(informacoes);
}

function exibirInformacoes(informacoes) {
  const infoElement = document.createElement("p");
  infoElement.innerHTML = informacoes;

  const conteudoDiv = document.getElementById("conteudo");
  conteudoDiv.appendChild(infoElement);
}
