# Blood Test Problem

## Descrição do Problema

Você precisa determinar todas as combinações possíveis de genes sanguíneos para dois pais, com base em seus fenótipos (tipos sanguíneos observáveis) e o fenótipo de seu filho.

### Genes Sanguíneos e Fenótipos

Cada pessoa possui dois genes sanguíneos, que podem ser A, B ou O. A combinação desses genes determina o fenótipo:
- AA ou AO -> Fenótipo A
- BB ou BO -> Fenótipo B
- AB -> Fenótipo AB
- OO -> Fenótipo O

### Entrada

Você recebe:
1. O fenótipo do primeiro pai.
2. O fenótipo do segundo pai.
3. O fenótipo do filho.

### Saída

Você precisa gerar uma lista com todas as combinações possíveis dos genes sanguíneos dos pais que poderiam resultar no fenótipo dado do filho. Cada combinação é uma sub-lista de duas strings, representando os genes sanguíneos do primeiro e do segundo pai, respectivamente.

Se nenhuma combinação for possível, a saída deve ser uma lista contendo um elemento: uma sub-lista de duas strings, ambas iguais a "--".

### Exemplos

#### Exemplo 1
Entrada:
- Pai 1: AB
- Pai 2: A
- Filho: A

Saída:
- [["AB", "AA"], ["AB", "AO"]]

#### Exemplo 2
Entrada:
- Pai 1: O
- Pai 2: AB
- Filho: O

Saída:
- [["--", "--"]]

## Solução

### Tipos Definidos

```typescript
type Phenotype = "A" | "B" | "AB" | "O";
type Genotype = "AA" | "AO" | "BB" | "BO" | "AB" | "OO" | "--";
```

- Phenotype: Define os possíveis fenótipos sanguíneos ("A", "B", "AB", "O").
- Genotype: Define os possíveis genótipos sanguíneos ("AA", "AO", "BB", "BO", "AB", "OO", "--").

### Mapeamento de Fenótipos para Genótipos

```typescript
const phenotypeToGenotypes: { [key in Phenotype]: Genotype[] } = {
    A: ["AA", "AO"],
    B: ["BB", "BO"],
    AB: ["AB"],
    O: ["OO"]
};
```

- phenotypeToGenotypes: Um objeto que mapeia cada fenótipo para os possíveis genótipos que podem resultar nesse fenótipo.

### Função Principal

```typescript
function getPossibleCombinations(parent1: Phenotype, parent2: Phenotype, child: Phenotype): Genotype[][] {
    const parent1Genotypes = phenotypeToGenotypes[parent1];
    const parent2Genotypes = phenotypeToGenotypes[parent2];
    const childGenotypes = phenotypeToGenotypes[child];

    const combinations: Genotype[][] = [];

    for (const p1Genotype of parent1Genotypes) {
        for (const p2Genotype of parent2Genotypes) {
            if (canProduceChild(p1Genotype, p2Genotype, childGenotypes)) {
                combinations.push([p1Genotype, p2Genotype]);
            }
        }
    }

    if (combinations.length === 0) {
        return [["--", "--"]];
    }

    combinations.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
    return combinations;
}
```

- getPossibleCombinations: Função que recebe os fenótipos dos dois pais e do filho, e retorna todas as combinações possíveis de genótipos dos pais que podem resultar no fenótipo do filho.

### Função Auxiliar

```typescript
function canProduceChild(parent1: Genotype, parent2: Genotype, childGenotypes: Genotype[]): boolean {
    const possibleChildGenes = new Set<string>();

    for (const gene1 of parent1) {
        for (const gene2 of parent2) {
            possibleChildGenes.add(gene1 + gene2);
            possibleChildGenes.add(gene2 + gene1);
        }
    }

    for (const childGenotype of childGenotypes) {
        if (possibleChildGenes.has(childGenotype)) {
            return true;
        }
    }

    return false;
}
```

- canProduceChild: Função que verifica se a combinação de genótipos dos pais pode produzir um dos genótipos possíveis do filho.

### Função de Teste

```typescript
function runTests() {
    const example1 = getPossibleCombinations("AB", "A", "A");
    console.log("Example 1:", example1);

    const example2 = getPossibleCombinations("O", "AB", "O");
    console.log("Example 2:", example2);
}

runTests();
```
- runTests: Função que executa testes com os exemplos fornecidos.

### Resultado Esperado

* Para o Example 1: *

```typescript
Example 1: [ ["AB", "AA"], ["AB", "AO"] ]
```

* Para o Example 2: *
```typescript
Example 2: [ ["--", "--"] ]
```

## Conclusão

Este código resolve o problema de determinar as combinações possíveis de genes sanguíneos dos pais que podem resultar no fenótipo do filho, utilizando mapeamentos de fenótipos para genótipos e verificações de combinações válidas.


### Aplicando o Conteúdo no Arquivo [bloodTest.md](http://_vscodecontentref_/2)

Você pode copiar o conteúdo acima e colá-lo no arquivo [bloodTest.md](http://_vscodecontentref_/3) para que ele sirva como documentação do problema e da solução.