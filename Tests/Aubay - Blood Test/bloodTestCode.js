type Phenotype = "A" | "B" | "AB" | "O";
type Genotype = "AA" | "AO" | "BB" | "BO" | "AB" | "OO" | "--";

const phenotypeToGenotypes: { [key in Phenotype]: Genotype[] } = {
    A: ["AA", "AO"],
    B: ["BB", "BO"],
    AB: ["AB"],
    O: ["OO"]
};

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

function runTests() {
    const example1 = getPossibleCombinations("AB", "A", "A");
    console.log("Example 1:", example1);

    const example2 = getPossibleCombinations("O", "AB", "O");
    console.log("Example 2:", example2);
}

runTests();