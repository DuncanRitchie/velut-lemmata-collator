const buttonTest = document.getElementById('test');

//// Data to use in tests:

const tests = [
	{
		Input: [
			{
				Lemma: 'ā',
				Forms: {
					unencliticized: {
						neuter: {
							singular: {
								nominative: ['ā'],
								vocative: ['ā'],
								accusative: ['ā'],
								genitive: ['ā'],
								dative: ['ā'],
								ablative: ['ā'],
							},
						},
					},
					ne: {
						neuter: {
							singular: {
								nominative: ['āne'],
								vocative: ['āne'],
								accusative: ['āne'],
								genitive: ['āne'],
								dative: ['āne'],
								ablative: ['āne'],
							},
						},
					},
					que: {
						neuter: {
							singular: {
								nominative: ['āque'],
								vocative: ['āque'],
								accusative: ['āque'],
								genitive: ['āque'],
								dative: ['āque'],
								ablative: ['āque'],
							},
						},
					},
					ve: {
						neuter: {
							singular: {
								nominative: ['āve'],
								vocative: ['āve'],
								accusative: ['āve'],
								genitive: ['āve'],
								dative: ['āve'],
								ablative: ['āve'],
							},
						},
					},
				},
			},
			{
				Lemma: 'ab',
				Forms: {
					unencliticized: ['ā', 'ab', 'abs'],
					ne: ['āne'],
					que: ['āque'],
					ve: ['āve'],
				},
			},
			{
				Lemma: 'abavia',
				Forms: {
					unencliticized: {
						feminine: {
							singular: {
								nominative: ['abavia'],
								vocative: ['abavia'],
								accusative: ['abaviam'],
								genitive: ['abaviae'],
								dative: ['abaviae'],
								ablative: ['abaviā'],
							},
							plural: {
								nominative: ['abaviae'],
								vocative: ['abaviae'],
								accusative: ['abaviās'],
								genitive: ['abaviārum'],
								dative: ['abaviīs'],
								ablative: ['abaviīs'],
							},
						},
					},
					ne: {
						feminine: {
							singular: {
								nominative: ['abaviane'],
								vocative: ['abaviane'],
								accusative: ['abaviamne'],
								genitive: ['abaviaene'],
								dative: ['abaviaene'],
								ablative: ['abaviāne'],
							},
							plural: {
								nominative: ['abaviaene'],
								vocative: ['abaviaene'],
								accusative: ['abaviāsne'],
								genitive: ['abaviārumne'],
								dative: ['abaviīsne'],
								ablative: ['abaviīsne'],
							},
						},
					},
					que: {
						feminine: {
							singular: {
								nominative: ['abaviaque'],
								vocative: ['abaviaque'],
								accusative: ['abaviamque'],
								genitive: ['abaviaeque'],
								dative: ['abaviaeque'],
								ablative: ['abaviāque'],
							},
							plural: {
								nominative: ['abaviaeque'],
								vocative: ['abaviaeque'],
								accusative: ['abaviāsque'],
								genitive: ['abaviārumque'],
								dative: ['abaviīsque'],
								ablative: ['abaviīsque'],
							},
						},
					},
					ve: {
						feminine: {
							singular: {
								nominative: ['abaviave'],
								vocative: ['abaviave'],
								accusative: ['abaviamve'],
								genitive: ['abaviaeve'],
								dative: ['abaviaeve'],
								ablative: ['abaviāve'],
							},
							plural: {
								nominative: ['abaviaeve'],
								vocative: ['abaviaeve'],
								accusative: ['abaviāsve'],
								genitive: ['abaviārumve'],
								dative: ['abaviīsve'],
								ablative: ['abaviīsve'],
							},
						},
					},
				},
			},
			{
				Lemma: 'abavus',
				Forms: {
					unencliticized: {
						masculine: {
							singular: {
								nominative: ['abavus'],
								vocative: ['abave'],
								accusative: ['abavum'],
								genitive: ['abavī'],
								dative: ['abavō'],
								ablative: ['abavō'],
							},
							plural: {
								nominative: ['abavī'],
								vocative: ['abavī'],
								accusative: ['abavōs'],
								genitive: ['abavōrum'],
								dative: ['abavīs'],
								ablative: ['abavīs'],
							},
						},
					},
					ne: {
						masculine: {
							singular: {
								nominative: ['abavusne'],
								vocative: ['abavene'],
								accusative: ['abavumne'],
								genitive: ['abavīne'],
								dative: ['abavōne'],
								ablative: ['abavōne'],
							},
							plural: {
								nominative: ['abavīne'],
								vocative: ['abavīne'],
								accusative: ['abavōsne'],
								genitive: ['abavōrumne'],
								dative: ['abavīsne'],
								ablative: ['abavīsne'],
							},
						},
					},
					que: {
						masculine: {
							singular: {
								nominative: ['abavusque'],
								vocative: ['abaveque'],
								accusative: ['abavumque'],
								genitive: ['abavīque'],
								dative: ['abavōque'],
								ablative: ['abavōque'],
							},
							plural: {
								nominative: ['abavīque'],
								vocative: ['abavīque'],
								accusative: ['abavōsque'],
								genitive: ['abavōrumque'],
								dative: ['abavīsque'],
								ablative: ['abavīsque'],
							},
						},
					},
					ve: {
						masculine: {
							singular: {
								nominative: ['abavusve'],
								vocative: ['abaveve'],
								accusative: ['abavumve'],
								genitive: ['abavīve'],
								dative: ['abavōve'],
								ablative: ['abavōve'],
							},
							plural: {
								nominative: ['abavīve'],
								vocative: ['abavīve'],
								accusative: ['abavōsve'],
								genitive: ['abavōrumve'],
								dative: ['abavīsve'],
								ablative: ['abavīsve'],
							},
						},
					},
				},
			},
			{
				Lemma: 'ac',
				Forms: ['ac', 'atque'],
			},
		],
		Expected: [
			'ā\tā ab',
			'āne\tā ab',
			'āque\tā ab',
			'āve\tā ab',
			'ab\tab',
			'abs\tab',
			'abavia\tabavia',
			'abaviam\tabavia',
			'abaviae\tabavia',
			'abaviā\tabavia',
			'abaviās\tabavia',
			'abaviārum\tabavia',
			'abaviīs\tabavia',
			'abaviane\tabavia',
			'abaviamne\tabavia',
			'abaviaene\tabavia',
			'abaviāne\tabavia',
			'abaviāsne\tabavia',
			'abaviārumne\tabavia',
			'abaviīsne\tabavia',
			'abaviaque\tabavia',
			'abaviamque\tabavia',
			'abaviaeque\tabavia',
			'abaviāque\tabavia',
			'abaviāsque\tabavia',
			'abaviārumque\tabavia',
			'abaviīsque\tabavia',
			'abaviave\tabavia',
			'abaviamve\tabavia',
			'abaviaeve\tabavia',
			'abaviāve\tabavia',
			'abaviāsve\tabavia',
			'abaviārumve\tabavia',
			'abaviīsve\tabavia',
			'abavus\tabavus',
			'abave\tabavus',
			'abavum\tabavus',
			'abavī\tabavus',
			'abavō\tabavus',
			'abavōs\tabavus',
			'abavōrum\tabavus',
			'abavīs\tabavus',
			'abavusne\tabavus',
			'abavene\tabavus',
			'abavumne\tabavus',
			'abavīne\tabavus',
			'abavōne\tabavus',
			'abavōsne\tabavus',
			'abavōrumne\tabavus',
			'abavīsne\tabavus',
			'abavusque\tabavus',
			'abaveque\tabavus',
			'abavumque\tabavus',
			'abavīque\tabavus',
			'abavōque\tabavus',
			'abavōsque\tabavus',
			'abavōrumque\tabavus',
			'abavīsque\tabavus',
			'abavusve\tabavus',
			'abaveve\tabavus',
			'abavumve\tabavus',
			'abavīve\tabavus',
			'abavōve\tabavus',
			'abavōsve\tabavus',
			'abavōrumve\tabavus',
			'abavīsve\tabavus',
			'ac\tac',
			'atque\tac',
		],
	},
];

//// Tests looping over the above array:

const test = () => {
	tests.forEach(({ Input, Expected }) => {
		console.log(`Testing ${Input}…`);

		const actual = convertToText(getFormsForSeveralLemmata(Input));
		const expected = Expected.join('\n') + '\n';

		if (actual === expected) {
			console.log(`Yay! Got the output of:\n${actual}`);
		} else {
			console.error({
				input: Input,
				expected,
				actual,
			});
		}
	});
};

//// Event-listener:

buttonTest.addEventListener('click', () => {
	test();
});
