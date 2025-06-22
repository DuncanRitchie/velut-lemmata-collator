# Lemmata Collator for velut

I will use this when refreshing data in my Latin dictionary, [velut](https://www.github.com/DuncanRitchie/velut), which involves running some JavaScript files in Node.
An earlier step in the process is running the [Inflector](https://www.github.com/DuncanRitchie/velut-inflector), to generate a Json file on my hard disk.
The Lemmata Collator reads this Json file and writes a text file to my hard disk.
This text file will then be used by the [Word Data Generator](https://www.github.com/DuncanRitchie/velut-word-data-generator).
The output of the Inflector and the Word Data Generator will be imported into the MongoDB database that the [velut website](https://www.velut.co.uk) uses.

_If you’re not me, you’re unlikely to have much use for the Lemmata Collator._
_And not even I am using it on the velut website yet, because I haven’t finished checking the output of the Inflector and because I haven’t yet configured the Word Data Generator to read the Lemma Collator’s output._

## Input format

Each line of the input is one Json object that (if whitespace is added) looks like this:

```json
{
	"Lemma": "exemplum",
	"Forms": {
		"neuter": {
			"singular": {
				"nominative": ["exemplum"],
				"genitive": ["exemplī"]
			},
			"plural": {
				"nominative": ["exempla"],
				"genitive": ["exemplōrum"]
			}
		}
	}
}
```

Ie, the object has a `Lemma` property that is a string, and a `Forms` property containing nested objects ultimately containing arrays of strings.
Properties other than `Lemma` and `Forms` are ignored.

Since the input file is imported directly into MongoDB using mongoimport, there are no commas between these objects or square brackets around the entire list.

The Lemmata Collator will not work if the input file is not exactly as described — one line per object, without Json array syntax wrapping the objects.

## Output format

The output is a .txt file where each line consists of a word, a tab character, and the (space-separated) list of lemmata that the word can be a form of.
For example:

```txt
exemplum	exemplum
exemplī	exemplum
exempla	exemplum
exemplōrum	exemplum
porta	porta
portās	porta portō
portō	portō
portat	portō
```

The words are in the order found in the input file.

## Console timers

The code includes some basic `console.time` timers.
They might log something like the following to the console:

<samp>
reading input: 7.206s
getting forms: 20.925s
writing text file: 18.444s
total: 46.584s
</samp>
