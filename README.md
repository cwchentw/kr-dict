# kr-dict

A Korean-to-English dictionary combined with its CSV-to-JSON converter.

## Project Status

*WIP* (Work in Progress) — The converter is fully functional and ready, while the dictionary data is currently a minimal Proof of Concept (PoC).

## System Requirements

### Production

* Any modern browser or edge runtime with ES6 support

### Development

- **Bun** (for dependency management and tooling)
- **Make** (for running build and test tasks)
- **Perl 5.36+** (for running tool scripts)
- **Carton** (for managing tool script dependencies)

## Installation

```shell
$ cd path/to/kr-dict
$ carton install
```

## Usage

### Library

Run `make` and locate the compiled artifact in the dist/ directory.

### Quiz

To compile the dictionary, run:

```shell
$ make
```

Then start the interactive flashcard‑style quiz:

```shell
$ ./bin/kr-dict-quiz
```

You can also limit the quiz to a specific part of speech (PoS). For example, to practice only nouns:

```shell
$ ./bin/kr-dict-quiz noun
```

## Acknowledgments

Special thanks to the **National Institute of Korean Language (국립국어원)** for providing the original vocabulary list (*한국어 학습용 어휘 목록*).

## License

Copyright (c) 2026 BytBard. Licensed under the MIT License.

*Language is human knowledge; it neither owns copyright nor belongs to anyone.*
