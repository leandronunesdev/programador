function programador(dev: Dev, produtos: string[]) {
	// não precisa desenvolver nada aqui
}

interface Dev {
    nome: string,
    idade: number,
    empresa: string,
    famoso: boolean
}

const dev = {
  nome: 'Bill Gates',
  idade: 60,
  empresa: 'Microsoft',
  famoso: true
}

const produtos = ["Azure", "VS Code", "Office"]
programador(dev, produtos)