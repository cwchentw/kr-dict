const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

let dictData;

if (isNode) {
    const module = await import('./dict.json', { with: { type: 'json' } });
    dictData = module.default;
}
else {
    const jsonUrl = new URL('./dict.json', import.meta.url).href;
    const response = await fetch(jsonUrl);
    dictData = await response.json();
}

function search (query, column, mode) {
    let result = [];

    if (typeof query !== 'string') {
        return result;
    }

    const lowerQuery = query.toLowerCase();

    for (const lexicon of dictData) {
        const value = lexicon[column];
        if (mode === "exact") {
            if (value === query) {
                result.push(lexicon);
            }
        }
        else if (mode === "contains") {
            if (value.toLowerCase().includes(lowerQuery)) {
                result.push(lexicon);
            }
        }
    }

    return result;
}

function lookUp (query) {
    return search(query, "hangul", "exact");
}

function reverseLookUp (query) {
    return search(query, "trans", "contains");
}

const krDict = Object.freeze({
    lookUp,
    reverseLookUp
});

export default krDict;
export { lookUp, reverseLookUp };