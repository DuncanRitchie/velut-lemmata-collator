//// DOM elements

const buttonClearInputs = document.getElementById('clear-inputs');
const buttonLoadSampleData = document.getElementById('load-sample-data');
const textareaInput = document.getElementById('textarea-input');
const textByCollateButton = document.getElementById('text-by-collate');
const buttonCollate = document.getElementById('collate');
const textareaOutput = document.getElementById('textarea-output');
const textByCopyToClipboard = document.getElementById(
	'text-by-copy-to-clipboard',
);
const buttonCopyToClipboard = document.getElementById('copy-to-clipboard');
const buttonDownload = document.getElementById('download');

textareaOutput.value = '';

//// Sample data the user can load if they don’t have my Excel file:

const sampleDataJson = [
	{
		Lemma: 'vocābulum',
		Forms: {
			unencliticized: {
				neuter: {
					singular: {
						nominative: ['vocābulum'],
						vocative: ['vocābulum'],
						accusative: ['vocābulum'],
						genitive: ['vocābulī'],
						dative: ['vocābulō'],
						ablative: ['vocābulō'],
					},
					plural: {
						nominative: ['vocābula'],
						vocative: ['vocābula'],
						accusative: ['vocābula'],
						genitive: ['vocābulōrum'],
						dative: ['vocābulīs'],
						ablative: ['vocābulīs'],
					},
				},
			},
			ne: {
				neuter: {
					singular: {
						nominative: ['vocābulumne'],
						vocative: ['vocābulumne'],
						accusative: ['vocābulumne'],
						genitive: ['vocābulīne'],
						dative: ['vocābulōne'],
						ablative: ['vocābulōne'],
					},
					plural: {
						nominative: ['vocābulane'],
						vocative: ['vocābulane'],
						accusative: ['vocābulane'],
						genitive: ['vocābulōrumne'],
						dative: ['vocābulīsne'],
						ablative: ['vocābulīsne'],
					},
				},
			},
			que: {
				neuter: {
					singular: {
						nominative: ['vocābulumque'],
						vocative: ['vocābulumque'],
						accusative: ['vocābulumque'],
						genitive: ['vocābulīque'],
						dative: ['vocābulōque'],
						ablative: ['vocābulōque'],
					},
					plural: {
						nominative: ['vocābulaque'],
						vocative: ['vocābulaque'],
						accusative: ['vocābulaque'],
						genitive: ['vocābulōrumque'],
						dative: ['vocābulīsque'],
						ablative: ['vocābulīsque'],
					},
				},
			},
			ve: {
				neuter: {
					singular: {
						nominative: ['vocābulumve'],
						vocative: ['vocābulumve'],
						accusative: ['vocābulumve'],
						genitive: ['vocābulīve'],
						dative: ['vocābulōve'],
						ablative: ['vocābulōve'],
					},
					plural: {
						nominative: ['vocābulave'],
						vocative: ['vocābulave'],
						accusative: ['vocābulave'],
						genitive: ['vocābulōrumve'],
						dative: ['vocābulīsve'],
						ablative: ['vocābulīsve'],
					},
				},
			},
		},
	},
	{
		Lemma: 'excellēns',
		Forms: {
			unencliticized: {
				positive: {
					masculine: {
						singular: {
							nominative: ['excellēns'],
							vocative: ['excellēns'],
							accusative: ['excellentem'],
							genitive: ['excellentis'],
							dative: ['excellentī'],
							ablative: ['excellentī'],
						},
						plural: {
							nominative: ['excellentēs'],
							vocative: ['excellentēs'],
							accusative: ['excellentēs', 'excellentīs'],
							genitive: ['excellentium'],
							dative: ['excellentibus'],
							ablative: ['excellentibus'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellēns'],
							vocative: ['excellēns'],
							accusative: ['excellentem'],
							genitive: ['excellentis'],
							dative: ['excellentī'],
							ablative: ['excellentī'],
						},
						plural: {
							nominative: ['excellentēs'],
							vocative: ['excellentēs'],
							accusative: ['excellentēs', 'excellentīs'],
							genitive: ['excellentium'],
							dative: ['excellentibus'],
							ablative: ['excellentibus'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellēns'],
							vocative: ['excellēns'],
							accusative: ['excellēns'],
							genitive: ['excellentis'],
							dative: ['excellentī'],
							ablative: ['excellentī'],
						},
						plural: {
							nominative: ['excellentia'],
							vocative: ['excellentia'],
							accusative: ['excellentia'],
							genitive: ['excellentium'],
							dative: ['excellentibus'],
							ablative: ['excellentibus'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['excellentior'],
							vocative: ['excellentior'],
							accusative: ['excellentiōrem'],
							genitive: ['excellentiōris'],
							dative: ['excellentiōrī'],
							ablative: ['excellentiōre'],
						},
						plural: {
							nominative: ['excellentiōrēs'],
							vocative: ['excellentiōrēs'],
							accusative: ['excellentiōrēs'],
							genitive: ['excellentiōrum'],
							dative: ['excellentiōribus'],
							ablative: ['excellentiōribus'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentior'],
							vocative: ['excellentior'],
							accusative: ['excellentiōrem'],
							genitive: ['excellentiōris'],
							dative: ['excellentiōrī'],
							ablative: ['excellentiōre'],
						},
						plural: {
							nominative: ['excellentiōrēs'],
							vocative: ['excellentiōrēs'],
							accusative: ['excellentiōrēs'],
							genitive: ['excellentiōrum'],
							dative: ['excellentiōribus'],
							ablative: ['excellentiōribus'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentius'],
							vocative: ['excellentius'],
							accusative: ['excellentius'],
							genitive: ['excellentiōris'],
							dative: ['excellentiōrī'],
							ablative: ['excellentiōre'],
						},
						plural: {
							nominative: ['excellentiōra'],
							vocative: ['excellentiōra'],
							accusative: ['excellentiōra'],
							genitive: ['excellentiōrum'],
							dative: ['excellentiōribus'],
							ablative: ['excellentiōribus'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['excellentissimus'],
							vocative: ['excellentissime'],
							accusative: ['excellentissimum'],
							genitive: ['excellentissimī'],
							dative: ['excellentissimō'],
							ablative: ['excellentissimō'],
						},
						plural: {
							nominative: ['excellentissimī'],
							vocative: ['excellentissimī'],
							accusative: ['excellentissimōs'],
							genitive: ['excellentissimōrum'],
							dative: ['excellentissimīs'],
							ablative: ['excellentissimīs'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentissima'],
							vocative: ['excellentissima'],
							accusative: ['excellentissimam'],
							genitive: ['excellentissimae'],
							dative: ['excellentissimae'],
							ablative: ['excellentissimā'],
						},
						plural: {
							nominative: ['excellentissimae'],
							vocative: ['excellentissimae'],
							accusative: ['excellentissimās'],
							genitive: ['excellentissimārum'],
							dative: ['excellentissimīs'],
							ablative: ['excellentissimīs'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentissimum'],
							vocative: ['excellentissimum'],
							accusative: ['excellentissimum'],
							genitive: ['excellentissimī'],
							dative: ['excellentissimō'],
							ablative: ['excellentissimō'],
						},
						plural: {
							nominative: ['excellentissima'],
							vocative: ['excellentissima'],
							accusative: ['excellentissima'],
							genitive: ['excellentissimōrum'],
							dative: ['excellentissimīs'],
							ablative: ['excellentissimīs'],
						},
					},
				},
			},
			ne: {
				positive: {
					masculine: {
						singular: {
							nominative: ['excellēnsne'],
							vocative: ['excellēnsne'],
							accusative: ['excellentemne'],
							genitive: ['excellentisne'],
							dative: ['excellentīne'],
							ablative: ['excellentīne'],
						},
						plural: {
							nominative: ['excellentēsne'],
							vocative: ['excellentēsne'],
							accusative: ['excellentēsne', 'excellentīsne'],
							genitive: ['excellentiumne'],
							dative: ['excellentibusne'],
							ablative: ['excellentibusne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellēnsne'],
							vocative: ['excellēnsne'],
							accusative: ['excellentemne'],
							genitive: ['excellentisne'],
							dative: ['excellentīne'],
							ablative: ['excellentīne'],
						},
						plural: {
							nominative: ['excellentēsne'],
							vocative: ['excellentēsne'],
							accusative: ['excellentēsne', 'excellentīsne'],
							genitive: ['excellentiumne'],
							dative: ['excellentibusne'],
							ablative: ['excellentibusne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellēnsne'],
							vocative: ['excellēnsne'],
							accusative: ['excellēnsne'],
							genitive: ['excellentisne'],
							dative: ['excellentīne'],
							ablative: ['excellentīne'],
						},
						plural: {
							nominative: ['excellentiane'],
							vocative: ['excellentiane'],
							accusative: ['excellentiane'],
							genitive: ['excellentiumne'],
							dative: ['excellentibusne'],
							ablative: ['excellentibusne'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['excellentiorne'],
							vocative: ['excellentiorne'],
							accusative: ['excellentiōremne'],
							genitive: ['excellentiōrisne'],
							dative: ['excellentiōrīne'],
							ablative: ['excellentiōrene'],
						},
						plural: {
							nominative: ['excellentiōrēsne'],
							vocative: ['excellentiōrēsne'],
							accusative: ['excellentiōrēsne'],
							genitive: ['excellentiōrumne'],
							dative: ['excellentiōribusne'],
							ablative: ['excellentiōribusne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentiorne'],
							vocative: ['excellentiorne'],
							accusative: ['excellentiōremne'],
							genitive: ['excellentiōrisne'],
							dative: ['excellentiōrīne'],
							ablative: ['excellentiōrene'],
						},
						plural: {
							nominative: ['excellentiōrēsne'],
							vocative: ['excellentiōrēsne'],
							accusative: ['excellentiōrēsne'],
							genitive: ['excellentiōrumne'],
							dative: ['excellentiōribusne'],
							ablative: ['excellentiōribusne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentiusne'],
							vocative: ['excellentiusne'],
							accusative: ['excellentiusne'],
							genitive: ['excellentiōrisne'],
							dative: ['excellentiōrīne'],
							ablative: ['excellentiōrene'],
						},
						plural: {
							nominative: ['excellentiōrane'],
							vocative: ['excellentiōrane'],
							accusative: ['excellentiōrane'],
							genitive: ['excellentiōrumne'],
							dative: ['excellentiōribusne'],
							ablative: ['excellentiōribusne'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['excellentissimusne'],
							vocative: ['excellentissimene'],
							accusative: ['excellentissimumne'],
							genitive: ['excellentissimīne'],
							dative: ['excellentissimōne'],
							ablative: ['excellentissimōne'],
						},
						plural: {
							nominative: ['excellentissimīne'],
							vocative: ['excellentissimīne'],
							accusative: ['excellentissimōsne'],
							genitive: ['excellentissimōrumne'],
							dative: ['excellentissimīsne'],
							ablative: ['excellentissimīsne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentissimane'],
							vocative: ['excellentissimane'],
							accusative: ['excellentissimamne'],
							genitive: ['excellentissimaene'],
							dative: ['excellentissimaene'],
							ablative: ['excellentissimāne'],
						},
						plural: {
							nominative: ['excellentissimaene'],
							vocative: ['excellentissimaene'],
							accusative: ['excellentissimāsne'],
							genitive: ['excellentissimārumne'],
							dative: ['excellentissimīsne'],
							ablative: ['excellentissimīsne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentissimumne'],
							vocative: ['excellentissimumne'],
							accusative: ['excellentissimumne'],
							genitive: ['excellentissimīne'],
							dative: ['excellentissimōne'],
							ablative: ['excellentissimōne'],
						},
						plural: {
							nominative: ['excellentissimane'],
							vocative: ['excellentissimane'],
							accusative: ['excellentissimane'],
							genitive: ['excellentissimōrumne'],
							dative: ['excellentissimīsne'],
							ablative: ['excellentissimīsne'],
						},
					},
				},
			},
			que: {
				positive: {
					masculine: {
						singular: {
							nominative: ['excellēnsque'],
							vocative: ['excellēnsque'],
							accusative: ['excellentemque'],
							genitive: ['excellentisque'],
							dative: ['excellentīque'],
							ablative: ['excellentīque'],
						},
						plural: {
							nominative: ['excellentēsque'],
							vocative: ['excellentēsque'],
							accusative: ['excellentēsque', 'excellentīsque'],
							genitive: ['excellentiumque'],
							dative: ['excellentibusque'],
							ablative: ['excellentibusque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellēnsque'],
							vocative: ['excellēnsque'],
							accusative: ['excellentemque'],
							genitive: ['excellentisque'],
							dative: ['excellentīque'],
							ablative: ['excellentīque'],
						},
						plural: {
							nominative: ['excellentēsque'],
							vocative: ['excellentēsque'],
							accusative: ['excellentēsque', 'excellentīsque'],
							genitive: ['excellentiumque'],
							dative: ['excellentibusque'],
							ablative: ['excellentibusque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellēnsque'],
							vocative: ['excellēnsque'],
							accusative: ['excellēnsque'],
							genitive: ['excellentisque'],
							dative: ['excellentīque'],
							ablative: ['excellentīque'],
						},
						plural: {
							nominative: ['excellentiaque'],
							vocative: ['excellentiaque'],
							accusative: ['excellentiaque'],
							genitive: ['excellentiumque'],
							dative: ['excellentibusque'],
							ablative: ['excellentibusque'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['excellentiorque'],
							vocative: ['excellentiorque'],
							accusative: ['excellentiōremque'],
							genitive: ['excellentiōrisque'],
							dative: ['excellentiōrīque'],
							ablative: ['excellentiōreque'],
						},
						plural: {
							nominative: ['excellentiōrēsque'],
							vocative: ['excellentiōrēsque'],
							accusative: ['excellentiōrēsque'],
							genitive: ['excellentiōrumque'],
							dative: ['excellentiōribusque'],
							ablative: ['excellentiōribusque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentiorque'],
							vocative: ['excellentiorque'],
							accusative: ['excellentiōremque'],
							genitive: ['excellentiōrisque'],
							dative: ['excellentiōrīque'],
							ablative: ['excellentiōreque'],
						},
						plural: {
							nominative: ['excellentiōrēsque'],
							vocative: ['excellentiōrēsque'],
							accusative: ['excellentiōrēsque'],
							genitive: ['excellentiōrumque'],
							dative: ['excellentiōribusque'],
							ablative: ['excellentiōribusque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentiusque'],
							vocative: ['excellentiusque'],
							accusative: ['excellentiusque'],
							genitive: ['excellentiōrisque'],
							dative: ['excellentiōrīque'],
							ablative: ['excellentiōreque'],
						},
						plural: {
							nominative: ['excellentiōraque'],
							vocative: ['excellentiōraque'],
							accusative: ['excellentiōraque'],
							genitive: ['excellentiōrumque'],
							dative: ['excellentiōribusque'],
							ablative: ['excellentiōribusque'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['excellentissimusque'],
							vocative: ['excellentissimeque'],
							accusative: ['excellentissimumque'],
							genitive: ['excellentissimīque'],
							dative: ['excellentissimōque'],
							ablative: ['excellentissimōque'],
						},
						plural: {
							nominative: ['excellentissimīque'],
							vocative: ['excellentissimīque'],
							accusative: ['excellentissimōsque'],
							genitive: ['excellentissimōrumque'],
							dative: ['excellentissimīsque'],
							ablative: ['excellentissimīsque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentissimaque'],
							vocative: ['excellentissimaque'],
							accusative: ['excellentissimamque'],
							genitive: ['excellentissimaeque'],
							dative: ['excellentissimaeque'],
							ablative: ['excellentissimāque'],
						},
						plural: {
							nominative: ['excellentissimaeque'],
							vocative: ['excellentissimaeque'],
							accusative: ['excellentissimāsque'],
							genitive: ['excellentissimārumque'],
							dative: ['excellentissimīsque'],
							ablative: ['excellentissimīsque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentissimumque'],
							vocative: ['excellentissimumque'],
							accusative: ['excellentissimumque'],
							genitive: ['excellentissimīque'],
							dative: ['excellentissimōque'],
							ablative: ['excellentissimōque'],
						},
						plural: {
							nominative: ['excellentissimaque'],
							vocative: ['excellentissimaque'],
							accusative: ['excellentissimaque'],
							genitive: ['excellentissimōrumque'],
							dative: ['excellentissimīsque'],
							ablative: ['excellentissimīsque'],
						},
					},
				},
			},
			ve: {
				positive: {
					masculine: {
						singular: {
							nominative: ['excellēnsve'],
							vocative: ['excellēnsve'],
							accusative: ['excellentemve'],
							genitive: ['excellentisve'],
							dative: ['excellentīve'],
							ablative: ['excellentīve'],
						},
						plural: {
							nominative: ['excellentēsve'],
							vocative: ['excellentēsve'],
							accusative: ['excellentēsve', 'excellentīsve'],
							genitive: ['excellentiumve'],
							dative: ['excellentibusve'],
							ablative: ['excellentibusve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellēnsve'],
							vocative: ['excellēnsve'],
							accusative: ['excellentemve'],
							genitive: ['excellentisve'],
							dative: ['excellentīve'],
							ablative: ['excellentīve'],
						},
						plural: {
							nominative: ['excellentēsve'],
							vocative: ['excellentēsve'],
							accusative: ['excellentēsve', 'excellentīsve'],
							genitive: ['excellentiumve'],
							dative: ['excellentibusve'],
							ablative: ['excellentibusve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellēnsve'],
							vocative: ['excellēnsve'],
							accusative: ['excellēnsve'],
							genitive: ['excellentisve'],
							dative: ['excellentīve'],
							ablative: ['excellentīve'],
						},
						plural: {
							nominative: ['excellentiave'],
							vocative: ['excellentiave'],
							accusative: ['excellentiave'],
							genitive: ['excellentiumve'],
							dative: ['excellentibusve'],
							ablative: ['excellentibusve'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['excellentiorve'],
							vocative: ['excellentiorve'],
							accusative: ['excellentiōremve'],
							genitive: ['excellentiōrisve'],
							dative: ['excellentiōrīve'],
							ablative: ['excellentiōreve'],
						},
						plural: {
							nominative: ['excellentiōrēsve'],
							vocative: ['excellentiōrēsve'],
							accusative: ['excellentiōrēsve'],
							genitive: ['excellentiōrumve'],
							dative: ['excellentiōribusve'],
							ablative: ['excellentiōribusve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentiorve'],
							vocative: ['excellentiorve'],
							accusative: ['excellentiōremve'],
							genitive: ['excellentiōrisve'],
							dative: ['excellentiōrīve'],
							ablative: ['excellentiōreve'],
						},
						plural: {
							nominative: ['excellentiōrēsve'],
							vocative: ['excellentiōrēsve'],
							accusative: ['excellentiōrēsve'],
							genitive: ['excellentiōrumve'],
							dative: ['excellentiōribusve'],
							ablative: ['excellentiōribusve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentiusve'],
							vocative: ['excellentiusve'],
							accusative: ['excellentiusve'],
							genitive: ['excellentiōrisve'],
							dative: ['excellentiōrīve'],
							ablative: ['excellentiōreve'],
						},
						plural: {
							nominative: ['excellentiōrave'],
							vocative: ['excellentiōrave'],
							accusative: ['excellentiōrave'],
							genitive: ['excellentiōrumve'],
							dative: ['excellentiōribusve'],
							ablative: ['excellentiōribusve'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['excellentissimusve'],
							vocative: ['excellentissimeve'],
							accusative: ['excellentissimumve'],
							genitive: ['excellentissimīve'],
							dative: ['excellentissimōve'],
							ablative: ['excellentissimōve'],
						},
						plural: {
							nominative: ['excellentissimīve'],
							vocative: ['excellentissimīve'],
							accusative: ['excellentissimōsve'],
							genitive: ['excellentissimōrumve'],
							dative: ['excellentissimīsve'],
							ablative: ['excellentissimīsve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['excellentissimave'],
							vocative: ['excellentissimave'],
							accusative: ['excellentissimamve'],
							genitive: ['excellentissimaeve'],
							dative: ['excellentissimaeve'],
							ablative: ['excellentissimāve'],
						},
						plural: {
							nominative: ['excellentissimaeve'],
							vocative: ['excellentissimaeve'],
							accusative: ['excellentissimāsve'],
							genitive: ['excellentissimārumve'],
							dative: ['excellentissimīsve'],
							ablative: ['excellentissimīsve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['excellentissimumve'],
							vocative: ['excellentissimumve'],
							accusative: ['excellentissimumve'],
							genitive: ['excellentissimīve'],
							dative: ['excellentissimōve'],
							ablative: ['excellentissimōve'],
						},
						plural: {
							nominative: ['excellentissimave'],
							vocative: ['excellentissimave'],
							accusative: ['excellentissimave'],
							genitive: ['excellentissimōrumve'],
							dative: ['excellentissimīsve'],
							ablative: ['excellentissimīsve'],
						},
					},
				},
			},
		},
	},
	{
		Lemma: 'excellō',
		Forms: {
			unencliticized: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['excellō'],
								second: ['excellis'],
								third: ['excellit'],
							},
							plural: {
								first: ['excellimus'],
								second: ['excellitis'],
								third: ['excellunt'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbam'],
								second: ['excellēbās'],
								third: ['excellēbat'],
							},
							plural: {
								first: ['excellēbāmus'],
								second: ['excellēbātis'],
								third: ['excellēbant'],
							},
						},
						future: {
							singular: {
								first: ['excellam'],
								second: ['excellēs'],
								third: ['excellet'],
							},
							plural: {
								first: ['excellēmus'],
								second: ['excellētis'],
								third: ['excellent'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluī'],
								second: ['excelluistī'],
								third: ['excelluit'],
							},
							plural: {
								first: ['excelluimus'],
								second: ['excelluistis'],
								third: ['excelluērunt', 'excelluēre'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excellueram'],
								second: ['excelluerās'],
								third: ['excelluerat'],
							},
							plural: {
								first: ['excelluerāmus'],
								second: ['excelluerātis'],
								third: ['excelluerant'],
							},
						},
						futureperfect: {
							singular: {
								first: ['excelluerō'],
								second: ['excellueris'],
								third: ['excelluerit'],
							},
							plural: {
								first: ['excelluerimus'],
								second: ['excellueritis'],
								third: ['excelluerint'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellor'],
								second: ['excelleris', 'excellere'],
								third: ['excellitur'],
							},
							plural: {
								first: ['excellimur'],
								second: ['excelliminī'],
								third: ['excelluntur'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbar'],
								second: ['excellēbāris', 'excellēbāre'],
								third: ['excellēbātur'],
							},
							plural: {
								first: ['excellēbāmur'],
								second: ['excellēbāminī'],
								third: ['excellēbantur'],
							},
						},
						future: {
							singular: {
								first: ['excellar'],
								second: ['excellēris', 'excellēre'],
								third: ['excellētur'],
							},
							plural: {
								first: ['excellēmur'],
								second: ['excellēminī'],
								third: ['excellentur'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['excellam'],
								second: ['excellās'],
								third: ['excellat'],
							},
							plural: {
								first: ['excellāmus'],
								second: ['excellātis'],
								third: ['excellant'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellerem'],
								second: ['excellerēs'],
								third: ['excelleret'],
							},
							plural: {
								first: ['excellerēmus'],
								second: ['excellerētis'],
								third: ['excellerent'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluerim'],
								second: ['excelluerīs'],
								third: ['excelluerit'],
							},
							plural: {
								first: ['excelluerīmus'],
								second: ['excelluerītis'],
								third: ['excelluerint'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excelluissem'],
								second: ['excelluissēs'],
								third: ['excelluisset'],
							},
							plural: {
								first: ['excelluissēmus'],
								second: ['excelluissētis'],
								third: ['excelluissent'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellar'],
								second: ['excellāris', 'excellāre'],
								third: ['excellātur'],
							},
							plural: {
								first: ['excellāmur'],
								second: ['excellāminī'],
								third: ['excellantur'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellerer'],
								second: ['excellerēris', 'excellerēre'],
								third: ['excellerētur'],
							},
							plural: {
								first: ['excellerēmur'],
								second: ['excellerēminī'],
								third: ['excellerentur'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['excelle'],
							},
							plural: {
								second: ['excellite'],
							},
						},
						future: {
							singular: {
								second: ['excellitō'],
								third: ['excellitō'],
							},
							plural: {
								second: ['excellitōte'],
								third: ['excelluntō'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['excellere'],
							},
							plural: {
								second: ['excelliminī'],
							},
						},
						future: {
							singular: {
								second: ['excellitor'],
								third: ['excellitor'],
							},
							plural: {
								third: ['excelluntor'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['excellere'],
						perfect: ['excelluisse'],
					},
					passive: {
						present: ['excellī'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['excellēns'],
									vocative: ['excellēns'],
									accusative: ['excellentem'],
									genitive: ['excellentis'],
									dative: ['excellentī'],
									ablative: ['excellentī', 'excellente'],
								},
								plural: {
									nominative: ['excellentēs'],
									vocative: ['excellentēs'],
									accusative: ['excellentēs', 'excellentīs'],
									genitive: ['excellentium'],
									dative: ['excellentibus'],
									ablative: ['excellentibus'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellēns'],
									vocative: ['excellēns'],
									accusative: ['excellentem'],
									genitive: ['excellentis'],
									dative: ['excellentī'],
									ablative: ['excellentī', 'excellente'],
								},
								plural: {
									nominative: ['excellentēs'],
									vocative: ['excellentēs'],
									accusative: ['excellentēs', 'excellentīs'],
									genitive: ['excellentium'],
									dative: ['excellentibus'],
									ablative: ['excellentibus'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellēns'],
									vocative: ['excellēns'],
									accusative: ['excellēns'],
									genitive: ['excellentis'],
									dative: ['excellentī'],
									ablative: ['excellentī', 'excellente'],
								},
								plural: {
									nominative: ['excellentia'],
									vocative: ['excellentia'],
									accusative: ['excellentia'],
									genitive: ['excellentium'],
									dative: ['excellentibus'],
									ablative: ['excellentibus'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excelsūrus'],
									vocative: ['excelsūre'],
									accusative: ['excelsūrum'],
									genitive: ['excelsūrī'],
									dative: ['excelsūrō'],
									ablative: ['excelsūrō'],
								},
								plural: {
									nominative: ['excelsūrī'],
									vocative: ['excelsūrī'],
									accusative: ['excelsūrōs'],
									genitive: ['excelsūrōrum'],
									dative: ['excelsūrīs'],
									ablative: ['excelsūrīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsūra'],
									vocative: ['excelsūra'],
									accusative: ['excelsūram'],
									genitive: ['excelsūrae'],
									dative: ['excelsūrae'],
									ablative: ['excelsūrā'],
								},
								plural: {
									nominative: ['excelsūrae'],
									vocative: ['excelsūrae'],
									accusative: ['excelsūrās'],
									genitive: ['excelsūrārum'],
									dative: ['excelsūrīs'],
									ablative: ['excelsūrīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsūrum'],
									vocative: ['excelsūrum'],
									accusative: ['excelsūrum'],
									genitive: ['excelsūrī'],
									dative: ['excelsūrō'],
									ablative: ['excelsūrō'],
								},
								plural: {
									nominative: ['excelsūra'],
									vocative: ['excelsūra'],
									accusative: ['excelsūra'],
									genitive: ['excelsūrōrum'],
									dative: ['excelsūrīs'],
									ablative: ['excelsūrīs'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['excelsus'],
									vocative: ['excelse'],
									accusative: ['excelsum'],
									genitive: ['excelsī'],
									dative: ['excelsō'],
									ablative: ['excelsō'],
								},
								plural: {
									nominative: ['excelsī'],
									vocative: ['excelsī'],
									accusative: ['excelsōs'],
									genitive: ['excelsōrum'],
									dative: ['excelsīs'],
									ablative: ['excelsīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsa'],
									vocative: ['excelsa'],
									accusative: ['excelsam'],
									genitive: ['excelsae'],
									dative: ['excelsae'],
									ablative: ['excelsā'],
								},
								plural: {
									nominative: ['excelsae'],
									vocative: ['excelsae'],
									accusative: ['excelsās'],
									genitive: ['excelsārum'],
									dative: ['excelsīs'],
									ablative: ['excelsīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsum'],
									vocative: ['excelsum'],
									accusative: ['excelsum'],
									genitive: ['excelsī'],
									dative: ['excelsō'],
									ablative: ['excelsō'],
								},
								plural: {
									nominative: ['excelsa'],
									vocative: ['excelsa'],
									accusative: ['excelsa'],
									genitive: ['excelsōrum'],
									dative: ['excelsīs'],
									ablative: ['excelsīs'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excellendus'],
									vocative: ['excellende'],
									accusative: ['excellendum'],
									genitive: ['excellendī'],
									dative: ['excellendō'],
									ablative: ['excellendō'],
								},
								plural: {
									nominative: ['excellendī'],
									vocative: ['excellendī'],
									accusative: ['excellendōs'],
									genitive: ['excellendōrum'],
									dative: ['excellendīs'],
									ablative: ['excellendīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellenda'],
									vocative: ['excellenda'],
									accusative: ['excellendam'],
									genitive: ['excellendae'],
									dative: ['excellendae'],
									ablative: ['excellendā'],
								},
								plural: {
									nominative: ['excellendae'],
									vocative: ['excellendae'],
									accusative: ['excellendās'],
									genitive: ['excellendārum'],
									dative: ['excellendīs'],
									ablative: ['excellendīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellendum'],
									vocative: ['excellendum'],
									accusative: ['excellendum'],
									genitive: ['excellendī'],
									dative: ['excellendō'],
									ablative: ['excellendō'],
								},
								plural: {
									nominative: ['excellenda'],
									vocative: ['excellenda'],
									accusative: ['excellenda'],
									genitive: ['excellendōrum'],
									dative: ['excellendīs'],
									ablative: ['excellendīs'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['excellendum'],
					genitive: ['excellendī'],
					dative: ['excellendō'],
					ablative: ['excellendō'],
				},
				supine: {
					accusative: ['excelsum'],
					ablative: ['excelsū'],
				},
			},
			ne: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['excellōne'],
								second: ['excellisne'],
								third: ['excellitne'],
							},
							plural: {
								first: ['excellimusne'],
								second: ['excellitisne'],
								third: ['excelluntne'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbamne'],
								second: ['excellēbāsne'],
								third: ['excellēbatne'],
							},
							plural: {
								first: ['excellēbāmusne'],
								second: ['excellēbātisne'],
								third: ['excellēbantne'],
							},
						},
						future: {
							singular: {
								first: ['excellamne'],
								second: ['excellēsne'],
								third: ['excelletne'],
							},
							plural: {
								first: ['excellēmusne'],
								second: ['excellētisne'],
								third: ['excellentne'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluīne'],
								second: ['excelluistīne'],
								third: ['excelluitne'],
							},
							plural: {
								first: ['excelluimusne'],
								second: ['excelluistisne'],
								third: ['excelluēruntne', 'excelluērene'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excellueramne'],
								second: ['excelluerāsne'],
								third: ['excellueratne'],
							},
							plural: {
								first: ['excelluerāmusne'],
								second: ['excelluerātisne'],
								third: ['excelluerantne'],
							},
						},
						futureperfect: {
							singular: {
								first: ['excelluerōne'],
								second: ['excelluerisne'],
								third: ['excellueritne'],
							},
							plural: {
								first: ['excelluerimusne'],
								second: ['excellueritisne'],
								third: ['excelluerintne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellorne'],
								second: ['excellerisne', 'excellerene'],
								third: ['excelliturne'],
							},
							plural: {
								first: ['excellimurne'],
								second: ['excelliminīne'],
								third: ['excellunturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbarne'],
								second: ['excellēbārisne', 'excellēbārene'],
								third: ['excellēbāturne'],
							},
							plural: {
								first: ['excellēbāmurne'],
								second: ['excellēbāminīne'],
								third: ['excellēbanturne'],
							},
						},
						future: {
							singular: {
								first: ['excellarne'],
								second: ['excellērisne', 'excellērene'],
								third: ['excellēturne'],
							},
							plural: {
								first: ['excellēmurne'],
								second: ['excellēminīne'],
								third: ['excellenturne'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['excellamne'],
								second: ['excellāsne'],
								third: ['excellatne'],
							},
							plural: {
								first: ['excellāmusne'],
								second: ['excellātisne'],
								third: ['excellantne'],
							},
						},
						imperfect: {
							singular: {
								first: ['excelleremne'],
								second: ['excellerēsne'],
								third: ['excelleretne'],
							},
							plural: {
								first: ['excellerēmusne'],
								second: ['excellerētisne'],
								third: ['excellerentne'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluerimne'],
								second: ['excelluerīsne'],
								third: ['excellueritne'],
							},
							plural: {
								first: ['excelluerīmusne'],
								second: ['excelluerītisne'],
								third: ['excelluerintne'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excelluissemne'],
								second: ['excelluissēsne'],
								third: ['excelluissetne'],
							},
							plural: {
								first: ['excelluissēmusne'],
								second: ['excelluissētisne'],
								third: ['excelluissentne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellarne'],
								second: ['excellārisne', 'excellārene'],
								third: ['excellāturne'],
							},
							plural: {
								first: ['excellāmurne'],
								second: ['excellāminīne'],
								third: ['excellanturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellererne'],
								second: ['excellerērisne', 'excellerērene'],
								third: ['excellerēturne'],
							},
							plural: {
								first: ['excellerēmurne'],
								second: ['excellerēminīne'],
								third: ['excellerenturne'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['excellene'],
							},
							plural: {
								second: ['excellitene'],
							},
						},
						future: {
							singular: {
								second: ['excellitōne'],
								third: ['excellitōne'],
							},
							plural: {
								second: ['excellitōtene'],
								third: ['excelluntōne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['excellerene'],
							},
							plural: {
								second: ['excelliminīne'],
							},
						},
						future: {
							singular: {
								second: ['excellitorne'],
								third: ['excellitorne'],
							},
							plural: {
								third: ['excelluntorne'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['excellerene'],
						perfect: ['excelluissene'],
					},
					passive: {
						present: ['excellīne'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['excellēnsne'],
									vocative: ['excellēnsne'],
									accusative: ['excellentemne'],
									genitive: ['excellentisne'],
									dative: ['excellentīne'],
									ablative: ['excellentīne', 'excellentene'],
								},
								plural: {
									nominative: ['excellentēsne'],
									vocative: ['excellentēsne'],
									accusative: ['excellentēsne', 'excellentīsne'],
									genitive: ['excellentiumne'],
									dative: ['excellentibusne'],
									ablative: ['excellentibusne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellēnsne'],
									vocative: ['excellēnsne'],
									accusative: ['excellentemne'],
									genitive: ['excellentisne'],
									dative: ['excellentīne'],
									ablative: ['excellentīne', 'excellentene'],
								},
								plural: {
									nominative: ['excellentēsne'],
									vocative: ['excellentēsne'],
									accusative: ['excellentēsne', 'excellentīsne'],
									genitive: ['excellentiumne'],
									dative: ['excellentibusne'],
									ablative: ['excellentibusne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellēnsne'],
									vocative: ['excellēnsne'],
									accusative: ['excellēnsne'],
									genitive: ['excellentisne'],
									dative: ['excellentīne'],
									ablative: ['excellentīne', 'excellentene'],
								},
								plural: {
									nominative: ['excellentiane'],
									vocative: ['excellentiane'],
									accusative: ['excellentiane'],
									genitive: ['excellentiumne'],
									dative: ['excellentibusne'],
									ablative: ['excellentibusne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excelsūrusne'],
									vocative: ['excelsūrene'],
									accusative: ['excelsūrumne'],
									genitive: ['excelsūrīne'],
									dative: ['excelsūrōne'],
									ablative: ['excelsūrōne'],
								},
								plural: {
									nominative: ['excelsūrīne'],
									vocative: ['excelsūrīne'],
									accusative: ['excelsūrōsne'],
									genitive: ['excelsūrōrumne'],
									dative: ['excelsūrīsne'],
									ablative: ['excelsūrīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsūrane'],
									vocative: ['excelsūrane'],
									accusative: ['excelsūramne'],
									genitive: ['excelsūraene'],
									dative: ['excelsūraene'],
									ablative: ['excelsūrāne'],
								},
								plural: {
									nominative: ['excelsūraene'],
									vocative: ['excelsūraene'],
									accusative: ['excelsūrāsne'],
									genitive: ['excelsūrārumne'],
									dative: ['excelsūrīsne'],
									ablative: ['excelsūrīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsūrumne'],
									vocative: ['excelsūrumne'],
									accusative: ['excelsūrumne'],
									genitive: ['excelsūrīne'],
									dative: ['excelsūrōne'],
									ablative: ['excelsūrōne'],
								},
								plural: {
									nominative: ['excelsūrane'],
									vocative: ['excelsūrane'],
									accusative: ['excelsūrane'],
									genitive: ['excelsūrōrumne'],
									dative: ['excelsūrīsne'],
									ablative: ['excelsūrīsne'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['excelsusne'],
									vocative: ['excelsene'],
									accusative: ['excelsumne'],
									genitive: ['excelsīne'],
									dative: ['excelsōne'],
									ablative: ['excelsōne'],
								},
								plural: {
									nominative: ['excelsīne'],
									vocative: ['excelsīne'],
									accusative: ['excelsōsne'],
									genitive: ['excelsōrumne'],
									dative: ['excelsīsne'],
									ablative: ['excelsīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsane'],
									vocative: ['excelsane'],
									accusative: ['excelsamne'],
									genitive: ['excelsaene'],
									dative: ['excelsaene'],
									ablative: ['excelsāne'],
								},
								plural: {
									nominative: ['excelsaene'],
									vocative: ['excelsaene'],
									accusative: ['excelsāsne'],
									genitive: ['excelsārumne'],
									dative: ['excelsīsne'],
									ablative: ['excelsīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsumne'],
									vocative: ['excelsumne'],
									accusative: ['excelsumne'],
									genitive: ['excelsīne'],
									dative: ['excelsōne'],
									ablative: ['excelsōne'],
								},
								plural: {
									nominative: ['excelsane'],
									vocative: ['excelsane'],
									accusative: ['excelsane'],
									genitive: ['excelsōrumne'],
									dative: ['excelsīsne'],
									ablative: ['excelsīsne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excellendusne'],
									vocative: ['excellendene'],
									accusative: ['excellendumne'],
									genitive: ['excellendīne'],
									dative: ['excellendōne'],
									ablative: ['excellendōne'],
								},
								plural: {
									nominative: ['excellendīne'],
									vocative: ['excellendīne'],
									accusative: ['excellendōsne'],
									genitive: ['excellendōrumne'],
									dative: ['excellendīsne'],
									ablative: ['excellendīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellendane'],
									vocative: ['excellendane'],
									accusative: ['excellendamne'],
									genitive: ['excellendaene'],
									dative: ['excellendaene'],
									ablative: ['excellendāne'],
								},
								plural: {
									nominative: ['excellendaene'],
									vocative: ['excellendaene'],
									accusative: ['excellendāsne'],
									genitive: ['excellendārumne'],
									dative: ['excellendīsne'],
									ablative: ['excellendīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellendumne'],
									vocative: ['excellendumne'],
									accusative: ['excellendumne'],
									genitive: ['excellendīne'],
									dative: ['excellendōne'],
									ablative: ['excellendōne'],
								},
								plural: {
									nominative: ['excellendane'],
									vocative: ['excellendane'],
									accusative: ['excellendane'],
									genitive: ['excellendōrumne'],
									dative: ['excellendīsne'],
									ablative: ['excellendīsne'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['excellendumne'],
					genitive: ['excellendīne'],
					dative: ['excellendōne'],
					ablative: ['excellendōne'],
				},
				supine: {
					accusative: ['excelsumne'],
					ablative: ['excelsūne'],
				},
			},
			que: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['excellōque'],
								second: ['excellisque'],
								third: ['excellitque'],
							},
							plural: {
								first: ['excellimusque'],
								second: ['excellitisque'],
								third: ['excelluntque'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbamque'],
								second: ['excellēbāsque'],
								third: ['excellēbatque'],
							},
							plural: {
								first: ['excellēbāmusque'],
								second: ['excellēbātisque'],
								third: ['excellēbantque'],
							},
						},
						future: {
							singular: {
								first: ['excellamque'],
								second: ['excellēsque'],
								third: ['excelletque'],
							},
							plural: {
								first: ['excellēmusque'],
								second: ['excellētisque'],
								third: ['excellentque'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluīque'],
								second: ['excelluistīque'],
								third: ['excelluitque'],
							},
							plural: {
								first: ['excelluimusque'],
								second: ['excelluistisque'],
								third: ['excelluēruntque', 'excelluēreque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excellueramque'],
								second: ['excelluerāsque'],
								third: ['excellueratque'],
							},
							plural: {
								first: ['excelluerāmusque'],
								second: ['excelluerātisque'],
								third: ['excelluerantque'],
							},
						},
						futureperfect: {
							singular: {
								first: ['excelluerōque'],
								second: ['excelluerisque'],
								third: ['excellueritque'],
							},
							plural: {
								first: ['excelluerimusque'],
								second: ['excellueritisque'],
								third: ['excelluerintque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellorque'],
								second: ['excellerisque', 'excellereque'],
								third: ['excelliturque'],
							},
							plural: {
								first: ['excellimurque'],
								second: ['excelliminīque'],
								third: ['excellunturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbarque'],
								second: ['excellēbārisque', 'excellēbāreque'],
								third: ['excellēbāturque'],
							},
							plural: {
								first: ['excellēbāmurque'],
								second: ['excellēbāminīque'],
								third: ['excellēbanturque'],
							},
						},
						future: {
							singular: {
								first: ['excellarque'],
								second: ['excellērisque', 'excellēreque'],
								third: ['excellēturque'],
							},
							plural: {
								first: ['excellēmurque'],
								second: ['excellēminīque'],
								third: ['excellenturque'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['excellamque'],
								second: ['excellāsque'],
								third: ['excellatque'],
							},
							plural: {
								first: ['excellāmusque'],
								second: ['excellātisque'],
								third: ['excellantque'],
							},
						},
						imperfect: {
							singular: {
								first: ['excelleremque'],
								second: ['excellerēsque'],
								third: ['excelleretque'],
							},
							plural: {
								first: ['excellerēmusque'],
								second: ['excellerētisque'],
								third: ['excellerentque'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluerimque'],
								second: ['excelluerīsque'],
								third: ['excellueritque'],
							},
							plural: {
								first: ['excelluerīmusque'],
								second: ['excelluerītisque'],
								third: ['excelluerintque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excelluissemque'],
								second: ['excelluissēsque'],
								third: ['excelluissetque'],
							},
							plural: {
								first: ['excelluissēmusque'],
								second: ['excelluissētisque'],
								third: ['excelluissentque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellarque'],
								second: ['excellārisque', 'excellāreque'],
								third: ['excellāturque'],
							},
							plural: {
								first: ['excellāmurque'],
								second: ['excellāminīque'],
								third: ['excellanturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellererque'],
								second: ['excellerērisque', 'excellerēreque'],
								third: ['excellerēturque'],
							},
							plural: {
								first: ['excellerēmurque'],
								second: ['excellerēminīque'],
								third: ['excellerenturque'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['excelleque'],
							},
							plural: {
								second: ['excelliteque'],
							},
						},
						future: {
							singular: {
								second: ['excellitōque'],
								third: ['excellitōque'],
							},
							plural: {
								second: ['excellitōteque'],
								third: ['excelluntōque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['excellereque'],
							},
							plural: {
								second: ['excelliminīque'],
							},
						},
						future: {
							singular: {
								second: ['excellitorque'],
								third: ['excellitorque'],
							},
							plural: {
								third: ['excelluntorque'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['excellereque'],
						perfect: ['excelluisseque'],
					},
					passive: {
						present: ['excellīque'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['excellēnsque'],
									vocative: ['excellēnsque'],
									accusative: ['excellentemque'],
									genitive: ['excellentisque'],
									dative: ['excellentīque'],
									ablative: ['excellentīque', 'excellenteque'],
								},
								plural: {
									nominative: ['excellentēsque'],
									vocative: ['excellentēsque'],
									accusative: ['excellentēsque', 'excellentīsque'],
									genitive: ['excellentiumque'],
									dative: ['excellentibusque'],
									ablative: ['excellentibusque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellēnsque'],
									vocative: ['excellēnsque'],
									accusative: ['excellentemque'],
									genitive: ['excellentisque'],
									dative: ['excellentīque'],
									ablative: ['excellentīque', 'excellenteque'],
								},
								plural: {
									nominative: ['excellentēsque'],
									vocative: ['excellentēsque'],
									accusative: ['excellentēsque', 'excellentīsque'],
									genitive: ['excellentiumque'],
									dative: ['excellentibusque'],
									ablative: ['excellentibusque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellēnsque'],
									vocative: ['excellēnsque'],
									accusative: ['excellēnsque'],
									genitive: ['excellentisque'],
									dative: ['excellentīque'],
									ablative: ['excellentīque', 'excellenteque'],
								},
								plural: {
									nominative: ['excellentiaque'],
									vocative: ['excellentiaque'],
									accusative: ['excellentiaque'],
									genitive: ['excellentiumque'],
									dative: ['excellentibusque'],
									ablative: ['excellentibusque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excelsūrusque'],
									vocative: ['excelsūreque'],
									accusative: ['excelsūrumque'],
									genitive: ['excelsūrīque'],
									dative: ['excelsūrōque'],
									ablative: ['excelsūrōque'],
								},
								plural: {
									nominative: ['excelsūrīque'],
									vocative: ['excelsūrīque'],
									accusative: ['excelsūrōsque'],
									genitive: ['excelsūrōrumque'],
									dative: ['excelsūrīsque'],
									ablative: ['excelsūrīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsūraque'],
									vocative: ['excelsūraque'],
									accusative: ['excelsūramque'],
									genitive: ['excelsūraeque'],
									dative: ['excelsūraeque'],
									ablative: ['excelsūrāque'],
								},
								plural: {
									nominative: ['excelsūraeque'],
									vocative: ['excelsūraeque'],
									accusative: ['excelsūrāsque'],
									genitive: ['excelsūrārumque'],
									dative: ['excelsūrīsque'],
									ablative: ['excelsūrīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsūrumque'],
									vocative: ['excelsūrumque'],
									accusative: ['excelsūrumque'],
									genitive: ['excelsūrīque'],
									dative: ['excelsūrōque'],
									ablative: ['excelsūrōque'],
								},
								plural: {
									nominative: ['excelsūraque'],
									vocative: ['excelsūraque'],
									accusative: ['excelsūraque'],
									genitive: ['excelsūrōrumque'],
									dative: ['excelsūrīsque'],
									ablative: ['excelsūrīsque'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['excelsusque'],
									vocative: ['excelseque'],
									accusative: ['excelsumque'],
									genitive: ['excelsīque'],
									dative: ['excelsōque'],
									ablative: ['excelsōque'],
								},
								plural: {
									nominative: ['excelsīque'],
									vocative: ['excelsīque'],
									accusative: ['excelsōsque'],
									genitive: ['excelsōrumque'],
									dative: ['excelsīsque'],
									ablative: ['excelsīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsaque'],
									vocative: ['excelsaque'],
									accusative: ['excelsamque'],
									genitive: ['excelsaeque'],
									dative: ['excelsaeque'],
									ablative: ['excelsāque'],
								},
								plural: {
									nominative: ['excelsaeque'],
									vocative: ['excelsaeque'],
									accusative: ['excelsāsque'],
									genitive: ['excelsārumque'],
									dative: ['excelsīsque'],
									ablative: ['excelsīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsumque'],
									vocative: ['excelsumque'],
									accusative: ['excelsumque'],
									genitive: ['excelsīque'],
									dative: ['excelsōque'],
									ablative: ['excelsōque'],
								},
								plural: {
									nominative: ['excelsaque'],
									vocative: ['excelsaque'],
									accusative: ['excelsaque'],
									genitive: ['excelsōrumque'],
									dative: ['excelsīsque'],
									ablative: ['excelsīsque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excellendusque'],
									vocative: ['excellendeque'],
									accusative: ['excellendumque'],
									genitive: ['excellendīque'],
									dative: ['excellendōque'],
									ablative: ['excellendōque'],
								},
								plural: {
									nominative: ['excellendīque'],
									vocative: ['excellendīque'],
									accusative: ['excellendōsque'],
									genitive: ['excellendōrumque'],
									dative: ['excellendīsque'],
									ablative: ['excellendīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellendaque'],
									vocative: ['excellendaque'],
									accusative: ['excellendamque'],
									genitive: ['excellendaeque'],
									dative: ['excellendaeque'],
									ablative: ['excellendāque'],
								},
								plural: {
									nominative: ['excellendaeque'],
									vocative: ['excellendaeque'],
									accusative: ['excellendāsque'],
									genitive: ['excellendārumque'],
									dative: ['excellendīsque'],
									ablative: ['excellendīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellendumque'],
									vocative: ['excellendumque'],
									accusative: ['excellendumque'],
									genitive: ['excellendīque'],
									dative: ['excellendōque'],
									ablative: ['excellendōque'],
								},
								plural: {
									nominative: ['excellendaque'],
									vocative: ['excellendaque'],
									accusative: ['excellendaque'],
									genitive: ['excellendōrumque'],
									dative: ['excellendīsque'],
									ablative: ['excellendīsque'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['excellendumque'],
					genitive: ['excellendīque'],
					dative: ['excellendōque'],
					ablative: ['excellendōque'],
				},
				supine: {
					accusative: ['excelsumque'],
					ablative: ['excelsūque'],
				},
			},
			ve: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['excellōve'],
								second: ['excellisve'],
								third: ['excellitve'],
							},
							plural: {
								first: ['excellimusve'],
								second: ['excellitisve'],
								third: ['excelluntve'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbamve'],
								second: ['excellēbāsve'],
								third: ['excellēbatve'],
							},
							plural: {
								first: ['excellēbāmusve'],
								second: ['excellēbātisve'],
								third: ['excellēbantve'],
							},
						},
						future: {
							singular: {
								first: ['excellamve'],
								second: ['excellēsve'],
								third: ['excelletve'],
							},
							plural: {
								first: ['excellēmusve'],
								second: ['excellētisve'],
								third: ['excellentve'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluīve'],
								second: ['excelluistīve'],
								third: ['excelluitve'],
							},
							plural: {
								first: ['excelluimusve'],
								second: ['excelluistisve'],
								third: ['excelluēruntve', 'excelluēreve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excellueramve'],
								second: ['excelluerāsve'],
								third: ['excellueratve'],
							},
							plural: {
								first: ['excelluerāmusve'],
								second: ['excelluerātisve'],
								third: ['excelluerantve'],
							},
						},
						futureperfect: {
							singular: {
								first: ['excelluerōve'],
								second: ['excelluerisve'],
								third: ['excellueritve'],
							},
							plural: {
								first: ['excelluerimusve'],
								second: ['excellueritisve'],
								third: ['excelluerintve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellorve'],
								second: ['excellerisve', 'excellereve'],
								third: ['excelliturve'],
							},
							plural: {
								first: ['excellimurve'],
								second: ['excelliminīve'],
								third: ['excellunturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellēbarve'],
								second: ['excellēbārisve', 'excellēbāreve'],
								third: ['excellēbāturve'],
							},
							plural: {
								first: ['excellēbāmurve'],
								second: ['excellēbāminīve'],
								third: ['excellēbanturve'],
							},
						},
						future: {
							singular: {
								first: ['excellarve'],
								second: ['excellērisve', 'excellēreve'],
								third: ['excellēturve'],
							},
							plural: {
								first: ['excellēmurve'],
								second: ['excellēminīve'],
								third: ['excellenturve'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['excellamve'],
								second: ['excellāsve'],
								third: ['excellatve'],
							},
							plural: {
								first: ['excellāmusve'],
								second: ['excellātisve'],
								third: ['excellantve'],
							},
						},
						imperfect: {
							singular: {
								first: ['excelleremve'],
								second: ['excellerēsve'],
								third: ['excelleretve'],
							},
							plural: {
								first: ['excellerēmusve'],
								second: ['excellerētisve'],
								third: ['excellerentve'],
							},
						},
						perfect: {
							singular: {
								first: ['excelluerimve'],
								second: ['excelluerīsve'],
								third: ['excellueritve'],
							},
							plural: {
								first: ['excelluerīmusve'],
								second: ['excelluerītisve'],
								third: ['excelluerintve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['excelluissemve'],
								second: ['excelluissēsve'],
								third: ['excelluissetve'],
							},
							plural: {
								first: ['excelluissēmusve'],
								second: ['excelluissētisve'],
								third: ['excelluissentve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['excellarve'],
								second: ['excellārisve', 'excellāreve'],
								third: ['excellāturve'],
							},
							plural: {
								first: ['excellāmurve'],
								second: ['excellāminīve'],
								third: ['excellanturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['excellererve'],
								second: ['excellerērisve', 'excellerēreve'],
								third: ['excellerēturve'],
							},
							plural: {
								first: ['excellerēmurve'],
								second: ['excellerēminīve'],
								third: ['excellerenturve'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['excelleve'],
							},
							plural: {
								second: ['excelliteve'],
							},
						},
						future: {
							singular: {
								second: ['excellitōve'],
								third: ['excellitōve'],
							},
							plural: {
								second: ['excellitōteve'],
								third: ['excelluntōve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['excellereve'],
							},
							plural: {
								second: ['excelliminīve'],
							},
						},
						future: {
							singular: {
								second: ['excellitorve'],
								third: ['excellitorve'],
							},
							plural: {
								third: ['excelluntorve'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['excellereve'],
						perfect: ['excelluisseve'],
					},
					passive: {
						present: ['excellīve'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['excellēnsve'],
									vocative: ['excellēnsve'],
									accusative: ['excellentemve'],
									genitive: ['excellentisve'],
									dative: ['excellentīve'],
									ablative: ['excellentīve', 'excellenteve'],
								},
								plural: {
									nominative: ['excellentēsve'],
									vocative: ['excellentēsve'],
									accusative: ['excellentēsve', 'excellentīsve'],
									genitive: ['excellentiumve'],
									dative: ['excellentibusve'],
									ablative: ['excellentibusve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellēnsve'],
									vocative: ['excellēnsve'],
									accusative: ['excellentemve'],
									genitive: ['excellentisve'],
									dative: ['excellentīve'],
									ablative: ['excellentīve', 'excellenteve'],
								},
								plural: {
									nominative: ['excellentēsve'],
									vocative: ['excellentēsve'],
									accusative: ['excellentēsve', 'excellentīsve'],
									genitive: ['excellentiumve'],
									dative: ['excellentibusve'],
									ablative: ['excellentibusve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellēnsve'],
									vocative: ['excellēnsve'],
									accusative: ['excellēnsve'],
									genitive: ['excellentisve'],
									dative: ['excellentīve'],
									ablative: ['excellentīve', 'excellenteve'],
								},
								plural: {
									nominative: ['excellentiave'],
									vocative: ['excellentiave'],
									accusative: ['excellentiave'],
									genitive: ['excellentiumve'],
									dative: ['excellentibusve'],
									ablative: ['excellentibusve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excelsūrusve'],
									vocative: ['excelsūreve'],
									accusative: ['excelsūrumve'],
									genitive: ['excelsūrīve'],
									dative: ['excelsūrōve'],
									ablative: ['excelsūrōve'],
								},
								plural: {
									nominative: ['excelsūrīve'],
									vocative: ['excelsūrīve'],
									accusative: ['excelsūrōsve'],
									genitive: ['excelsūrōrumve'],
									dative: ['excelsūrīsve'],
									ablative: ['excelsūrīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsūrave'],
									vocative: ['excelsūrave'],
									accusative: ['excelsūramve'],
									genitive: ['excelsūraeve'],
									dative: ['excelsūraeve'],
									ablative: ['excelsūrāve'],
								},
								plural: {
									nominative: ['excelsūraeve'],
									vocative: ['excelsūraeve'],
									accusative: ['excelsūrāsve'],
									genitive: ['excelsūrārumve'],
									dative: ['excelsūrīsve'],
									ablative: ['excelsūrīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsūrumve'],
									vocative: ['excelsūrumve'],
									accusative: ['excelsūrumve'],
									genitive: ['excelsūrīve'],
									dative: ['excelsūrōve'],
									ablative: ['excelsūrōve'],
								},
								plural: {
									nominative: ['excelsūrave'],
									vocative: ['excelsūrave'],
									accusative: ['excelsūrave'],
									genitive: ['excelsūrōrumve'],
									dative: ['excelsūrīsve'],
									ablative: ['excelsūrīsve'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['excelsusve'],
									vocative: ['excelseve'],
									accusative: ['excelsumve'],
									genitive: ['excelsīve'],
									dative: ['excelsōve'],
									ablative: ['excelsōve'],
								},
								plural: {
									nominative: ['excelsīve'],
									vocative: ['excelsīve'],
									accusative: ['excelsōsve'],
									genitive: ['excelsōrumve'],
									dative: ['excelsīsve'],
									ablative: ['excelsīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excelsave'],
									vocative: ['excelsave'],
									accusative: ['excelsamve'],
									genitive: ['excelsaeve'],
									dative: ['excelsaeve'],
									ablative: ['excelsāve'],
								},
								plural: {
									nominative: ['excelsaeve'],
									vocative: ['excelsaeve'],
									accusative: ['excelsāsve'],
									genitive: ['excelsārumve'],
									dative: ['excelsīsve'],
									ablative: ['excelsīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excelsumve'],
									vocative: ['excelsumve'],
									accusative: ['excelsumve'],
									genitive: ['excelsīve'],
									dative: ['excelsōve'],
									ablative: ['excelsōve'],
								},
								plural: {
									nominative: ['excelsave'],
									vocative: ['excelsave'],
									accusative: ['excelsave'],
									genitive: ['excelsōrumve'],
									dative: ['excelsīsve'],
									ablative: ['excelsīsve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['excellendusve'],
									vocative: ['excellendeve'],
									accusative: ['excellendumve'],
									genitive: ['excellendīve'],
									dative: ['excellendōve'],
									ablative: ['excellendōve'],
								},
								plural: {
									nominative: ['excellendīve'],
									vocative: ['excellendīve'],
									accusative: ['excellendōsve'],
									genitive: ['excellendōrumve'],
									dative: ['excellendīsve'],
									ablative: ['excellendīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['excellendave'],
									vocative: ['excellendave'],
									accusative: ['excellendamve'],
									genitive: ['excellendaeve'],
									dative: ['excellendaeve'],
									ablative: ['excellendāve'],
								},
								plural: {
									nominative: ['excellendaeve'],
									vocative: ['excellendaeve'],
									accusative: ['excellendāsve'],
									genitive: ['excellendārumve'],
									dative: ['excellendīsve'],
									ablative: ['excellendīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['excellendumve'],
									vocative: ['excellendumve'],
									accusative: ['excellendumve'],
									genitive: ['excellendīve'],
									dative: ['excellendōve'],
									ablative: ['excellendōve'],
								},
								plural: {
									nominative: ['excellendave'],
									vocative: ['excellendave'],
									accusative: ['excellendave'],
									genitive: ['excellendōrumve'],
									dative: ['excellendīsve'],
									ablative: ['excellendīsve'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['excellendumve'],
					genitive: ['excellendīve'],
					dative: ['excellendōve'],
					ablative: ['excellendōve'],
				},
				supine: {
					accusative: ['excelsumve'],
					ablative: ['excelsūve'],
				},
			},
		},
	},
	{
		Lemma: 'Latīnus[adj]',
		Forms: {
			unencliticized: {
				positive: {
					masculine: {
						singular: {
							nominative: ['Latīnus'],
							vocative: ['Latīne'],
							accusative: ['Latīnum'],
							genitive: ['Latīnī'],
							dative: ['Latīnō'],
							ablative: ['Latīnō'],
						},
						plural: {
							nominative: ['Latīnī'],
							vocative: ['Latīnī'],
							accusative: ['Latīnōs'],
							genitive: ['Latīnōrum'],
							dative: ['Latīnīs'],
							ablative: ['Latīnīs'],
						},
					},
					feminine: {
						singular: {
							nominative: ['Latīna'],
							vocative: ['Latīna'],
							accusative: ['Latīnam'],
							genitive: ['Latīnae'],
							dative: ['Latīnae'],
							ablative: ['Latīnā'],
						},
						plural: {
							nominative: ['Latīnae'],
							vocative: ['Latīnae'],
							accusative: ['Latīnās'],
							genitive: ['Latīnārum'],
							dative: ['Latīnīs'],
							ablative: ['Latīnīs'],
						},
					},
					neuter: {
						singular: {
							nominative: ['Latīnum'],
							vocative: ['Latīnum'],
							accusative: ['Latīnum'],
							genitive: ['Latīnī'],
							dative: ['Latīnō'],
							ablative: ['Latīnō'],
						},
						plural: {
							nominative: ['Latīna'],
							vocative: ['Latīna'],
							accusative: ['Latīna'],
							genitive: ['Latīnōrum'],
							dative: ['Latīnīs'],
							ablative: ['Latīnīs'],
						},
					},
				},
			},
			ne: {
				positive: {
					masculine: {
						singular: {
							nominative: ['Latīnusne'],
							vocative: ['Latīnene'],
							accusative: ['Latīnumne'],
							genitive: ['Latīnīne'],
							dative: ['Latīnōne'],
							ablative: ['Latīnōne'],
						},
						plural: {
							nominative: ['Latīnīne'],
							vocative: ['Latīnīne'],
							accusative: ['Latīnōsne'],
							genitive: ['Latīnōrumne'],
							dative: ['Latīnīsne'],
							ablative: ['Latīnīsne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['Latīnane'],
							vocative: ['Latīnane'],
							accusative: ['Latīnamne'],
							genitive: ['Latīnaene'],
							dative: ['Latīnaene'],
							ablative: ['Latīnāne'],
						},
						plural: {
							nominative: ['Latīnaene'],
							vocative: ['Latīnaene'],
							accusative: ['Latīnāsne'],
							genitive: ['Latīnārumne'],
							dative: ['Latīnīsne'],
							ablative: ['Latīnīsne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['Latīnumne'],
							vocative: ['Latīnumne'],
							accusative: ['Latīnumne'],
							genitive: ['Latīnīne'],
							dative: ['Latīnōne'],
							ablative: ['Latīnōne'],
						},
						plural: {
							nominative: ['Latīnane'],
							vocative: ['Latīnane'],
							accusative: ['Latīnane'],
							genitive: ['Latīnōrumne'],
							dative: ['Latīnīsne'],
							ablative: ['Latīnīsne'],
						},
					},
				},
			},
			que: {
				positive: {
					masculine: {
						singular: {
							nominative: ['Latīnusque'],
							vocative: ['Latīneque'],
							accusative: ['Latīnumque'],
							genitive: ['Latīnīque'],
							dative: ['Latīnōque'],
							ablative: ['Latīnōque'],
						},
						plural: {
							nominative: ['Latīnīque'],
							vocative: ['Latīnīque'],
							accusative: ['Latīnōsque'],
							genitive: ['Latīnōrumque'],
							dative: ['Latīnīsque'],
							ablative: ['Latīnīsque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['Latīnaque'],
							vocative: ['Latīnaque'],
							accusative: ['Latīnamque'],
							genitive: ['Latīnaeque'],
							dative: ['Latīnaeque'],
							ablative: ['Latīnāque'],
						},
						plural: {
							nominative: ['Latīnaeque'],
							vocative: ['Latīnaeque'],
							accusative: ['Latīnāsque'],
							genitive: ['Latīnārumque'],
							dative: ['Latīnīsque'],
							ablative: ['Latīnīsque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['Latīnumque'],
							vocative: ['Latīnumque'],
							accusative: ['Latīnumque'],
							genitive: ['Latīnīque'],
							dative: ['Latīnōque'],
							ablative: ['Latīnōque'],
						},
						plural: {
							nominative: ['Latīnaque'],
							vocative: ['Latīnaque'],
							accusative: ['Latīnaque'],
							genitive: ['Latīnōrumque'],
							dative: ['Latīnīsque'],
							ablative: ['Latīnīsque'],
						},
					},
				},
			},
			ve: {
				positive: {
					masculine: {
						singular: {
							nominative: ['Latīnusve'],
							vocative: ['Latīneve'],
							accusative: ['Latīnumve'],
							genitive: ['Latīnīve'],
							dative: ['Latīnōve'],
							ablative: ['Latīnōve'],
						},
						plural: {
							nominative: ['Latīnīve'],
							vocative: ['Latīnīve'],
							accusative: ['Latīnōsve'],
							genitive: ['Latīnōrumve'],
							dative: ['Latīnīsve'],
							ablative: ['Latīnīsve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['Latīnave'],
							vocative: ['Latīnave'],
							accusative: ['Latīnamve'],
							genitive: ['Latīnaeve'],
							dative: ['Latīnaeve'],
							ablative: ['Latīnāve'],
						},
						plural: {
							nominative: ['Latīnaeve'],
							vocative: ['Latīnaeve'],
							accusative: ['Latīnāsve'],
							genitive: ['Latīnārumve'],
							dative: ['Latīnīsve'],
							ablative: ['Latīnīsve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['Latīnumve'],
							vocative: ['Latīnumve'],
							accusative: ['Latīnumve'],
							genitive: ['Latīnīve'],
							dative: ['Latīnōve'],
							ablative: ['Latīnōve'],
						},
						plural: {
							nominative: ['Latīnave'],
							vocative: ['Latīnave'],
							accusative: ['Latīnave'],
							genitive: ['Latīnōrumve'],
							dative: ['Latīnīsve'],
							ablative: ['Latīnīsve'],
						},
					},
				},
			},
		},
	},
	{
		Lemma: 'Latīnus[prn]',
		Forms: {
			unencliticized: {
				masculine: {
					singular: {
						nominative: ['Latīnus'],
						vocative: ['Latīne'],
						accusative: ['Latīnum'],
						genitive: ['Latīnī'],
						dative: ['Latīnō'],
						ablative: ['Latīnō'],
					},
					plural: {
						nominative: ['Latīnī'],
						vocative: ['Latīnī'],
						accusative: ['Latīnōs'],
						genitive: ['Latīnōrum'],
						dative: ['Latīnīs'],
						ablative: ['Latīnīs'],
					},
				},
			},
			ne: {
				masculine: {
					singular: {
						nominative: ['Latīnusne'],
						vocative: ['Latīnene'],
						accusative: ['Latīnumne'],
						genitive: ['Latīnīne'],
						dative: ['Latīnōne'],
						ablative: ['Latīnōne'],
					},
					plural: {
						nominative: ['Latīnīne'],
						vocative: ['Latīnīne'],
						accusative: ['Latīnōsne'],
						genitive: ['Latīnōrumne'],
						dative: ['Latīnīsne'],
						ablative: ['Latīnīsne'],
					},
				},
			},
			que: {
				masculine: {
					singular: {
						nominative: ['Latīnusque'],
						vocative: ['Latīneque'],
						accusative: ['Latīnumque'],
						genitive: ['Latīnīque'],
						dative: ['Latīnōque'],
						ablative: ['Latīnōque'],
					},
					plural: {
						nominative: ['Latīnīque'],
						vocative: ['Latīnīque'],
						accusative: ['Latīnōsque'],
						genitive: ['Latīnōrumque'],
						dative: ['Latīnīsque'],
						ablative: ['Latīnīsque'],
					},
				},
			},
			ve: {
				masculine: {
					singular: {
						nominative: ['Latīnusve'],
						vocative: ['Latīneve'],
						accusative: ['Latīnumve'],
						genitive: ['Latīnīve'],
						dative: ['Latīnōve'],
						ablative: ['Latīnōve'],
					},
					plural: {
						nominative: ['Latīnīve'],
						vocative: ['Latīnīve'],
						accusative: ['Latīnōsve'],
						genitive: ['Latīnōrumve'],
						dative: ['Latīnīsve'],
						ablative: ['Latīnīsve'],
					},
				},
			},
		},
	},
	{
		Lemma: 'ūtilis',
		Forms: {
			unencliticized: {
				positive: {
					masculine: {
						singular: {
							nominative: ['ūtilis'],
							vocative: ['ūtilis'],
							accusative: ['ūtilem'],
							genitive: ['ūtilis'],
							dative: ['ūtilī'],
							ablative: ['ūtilī'],
						},
						plural: {
							nominative: ['ūtilēs'],
							vocative: ['ūtilēs'],
							accusative: ['ūtilēs', 'ūtilīs'],
							genitive: ['ūtilium'],
							dative: ['ūtilibus'],
							ablative: ['ūtilibus'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilis'],
							vocative: ['ūtilis'],
							accusative: ['ūtilem'],
							genitive: ['ūtilis'],
							dative: ['ūtilī'],
							ablative: ['ūtilī'],
						},
						plural: {
							nominative: ['ūtilēs'],
							vocative: ['ūtilēs'],
							accusative: ['ūtilēs', 'ūtilīs'],
							genitive: ['ūtilium'],
							dative: ['ūtilibus'],
							ablative: ['ūtilibus'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtile'],
							vocative: ['ūtile'],
							accusative: ['ūtile'],
							genitive: ['ūtilis'],
							dative: ['ūtilī'],
							ablative: ['ūtilī'],
						},
						plural: {
							nominative: ['ūtilia'],
							vocative: ['ūtilia'],
							accusative: ['ūtilia'],
							genitive: ['ūtilium'],
							dative: ['ūtilibus'],
							ablative: ['ūtilibus'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['ūtilior'],
							vocative: ['ūtilior'],
							accusative: ['ūtiliōrem'],
							genitive: ['ūtiliōris'],
							dative: ['ūtiliōrī'],
							ablative: ['ūtiliōre'],
						},
						plural: {
							nominative: ['ūtiliōrēs'],
							vocative: ['ūtiliōrēs'],
							accusative: ['ūtiliōrēs'],
							genitive: ['ūtiliōrum'],
							dative: ['ūtiliōribus'],
							ablative: ['ūtiliōribus'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilior'],
							vocative: ['ūtilior'],
							accusative: ['ūtiliōrem'],
							genitive: ['ūtiliōris'],
							dative: ['ūtiliōrī'],
							ablative: ['ūtiliōre'],
						},
						plural: {
							nominative: ['ūtiliōrēs'],
							vocative: ['ūtiliōrēs'],
							accusative: ['ūtiliōrēs'],
							genitive: ['ūtiliōrum'],
							dative: ['ūtiliōribus'],
							ablative: ['ūtiliōribus'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtilius'],
							vocative: ['ūtilius'],
							accusative: ['ūtilius'],
							genitive: ['ūtiliōris'],
							dative: ['ūtiliōrī'],
							ablative: ['ūtiliōre'],
						},
						plural: {
							nominative: ['ūtiliōra'],
							vocative: ['ūtiliōra'],
							accusative: ['ūtiliōra'],
							genitive: ['ūtiliōrum'],
							dative: ['ūtiliōribus'],
							ablative: ['ūtiliōribus'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['ūtilissimus'],
							vocative: ['ūtilissime'],
							accusative: ['ūtilissimum'],
							genitive: ['ūtilissimī'],
							dative: ['ūtilissimō'],
							ablative: ['ūtilissimō'],
						},
						plural: {
							nominative: ['ūtilissimī'],
							vocative: ['ūtilissimī'],
							accusative: ['ūtilissimōs'],
							genitive: ['ūtilissimōrum'],
							dative: ['ūtilissimīs'],
							ablative: ['ūtilissimīs'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilissima'],
							vocative: ['ūtilissima'],
							accusative: ['ūtilissimam'],
							genitive: ['ūtilissimae'],
							dative: ['ūtilissimae'],
							ablative: ['ūtilissimā'],
						},
						plural: {
							nominative: ['ūtilissimae'],
							vocative: ['ūtilissimae'],
							accusative: ['ūtilissimās'],
							genitive: ['ūtilissimārum'],
							dative: ['ūtilissimīs'],
							ablative: ['ūtilissimīs'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtilissimum'],
							vocative: ['ūtilissimum'],
							accusative: ['ūtilissimum'],
							genitive: ['ūtilissimī'],
							dative: ['ūtilissimō'],
							ablative: ['ūtilissimō'],
						},
						plural: {
							nominative: ['ūtilissima'],
							vocative: ['ūtilissima'],
							accusative: ['ūtilissima'],
							genitive: ['ūtilissimōrum'],
							dative: ['ūtilissimīs'],
							ablative: ['ūtilissimīs'],
						},
					},
				},
			},
			ne: {
				positive: {
					masculine: {
						singular: {
							nominative: ['ūtilisne'],
							vocative: ['ūtilisne'],
							accusative: ['ūtilemne'],
							genitive: ['ūtilisne'],
							dative: ['ūtilīne'],
							ablative: ['ūtilīne'],
						},
						plural: {
							nominative: ['ūtilēsne'],
							vocative: ['ūtilēsne'],
							accusative: ['ūtilēsne', 'ūtilīsne'],
							genitive: ['ūtiliumne'],
							dative: ['ūtilibusne'],
							ablative: ['ūtilibusne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilisne'],
							vocative: ['ūtilisne'],
							accusative: ['ūtilemne'],
							genitive: ['ūtilisne'],
							dative: ['ūtilīne'],
							ablative: ['ūtilīne'],
						},
						plural: {
							nominative: ['ūtilēsne'],
							vocative: ['ūtilēsne'],
							accusative: ['ūtilēsne', 'ūtilīsne'],
							genitive: ['ūtiliumne'],
							dative: ['ūtilibusne'],
							ablative: ['ūtilibusne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtilene'],
							vocative: ['ūtilene'],
							accusative: ['ūtilene'],
							genitive: ['ūtilisne'],
							dative: ['ūtilīne'],
							ablative: ['ūtilīne'],
						},
						plural: {
							nominative: ['ūtiliane'],
							vocative: ['ūtiliane'],
							accusative: ['ūtiliane'],
							genitive: ['ūtiliumne'],
							dative: ['ūtilibusne'],
							ablative: ['ūtilibusne'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['ūtiliorne'],
							vocative: ['ūtiliorne'],
							accusative: ['ūtiliōremne'],
							genitive: ['ūtiliōrisne'],
							dative: ['ūtiliōrīne'],
							ablative: ['ūtiliōrene'],
						},
						plural: {
							nominative: ['ūtiliōrēsne'],
							vocative: ['ūtiliōrēsne'],
							accusative: ['ūtiliōrēsne'],
							genitive: ['ūtiliōrumne'],
							dative: ['ūtiliōribusne'],
							ablative: ['ūtiliōribusne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtiliorne'],
							vocative: ['ūtiliorne'],
							accusative: ['ūtiliōremne'],
							genitive: ['ūtiliōrisne'],
							dative: ['ūtiliōrīne'],
							ablative: ['ūtiliōrene'],
						},
						plural: {
							nominative: ['ūtiliōrēsne'],
							vocative: ['ūtiliōrēsne'],
							accusative: ['ūtiliōrēsne'],
							genitive: ['ūtiliōrumne'],
							dative: ['ūtiliōribusne'],
							ablative: ['ūtiliōribusne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtiliusne'],
							vocative: ['ūtiliusne'],
							accusative: ['ūtiliusne'],
							genitive: ['ūtiliōrisne'],
							dative: ['ūtiliōrīne'],
							ablative: ['ūtiliōrene'],
						},
						plural: {
							nominative: ['ūtiliōrane'],
							vocative: ['ūtiliōrane'],
							accusative: ['ūtiliōrane'],
							genitive: ['ūtiliōrumne'],
							dative: ['ūtiliōribusne'],
							ablative: ['ūtiliōribusne'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['ūtilissimusne'],
							vocative: ['ūtilissimene'],
							accusative: ['ūtilissimumne'],
							genitive: ['ūtilissimīne'],
							dative: ['ūtilissimōne'],
							ablative: ['ūtilissimōne'],
						},
						plural: {
							nominative: ['ūtilissimīne'],
							vocative: ['ūtilissimīne'],
							accusative: ['ūtilissimōsne'],
							genitive: ['ūtilissimōrumne'],
							dative: ['ūtilissimīsne'],
							ablative: ['ūtilissimīsne'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilissimane'],
							vocative: ['ūtilissimane'],
							accusative: ['ūtilissimamne'],
							genitive: ['ūtilissimaene'],
							dative: ['ūtilissimaene'],
							ablative: ['ūtilissimāne'],
						},
						plural: {
							nominative: ['ūtilissimaene'],
							vocative: ['ūtilissimaene'],
							accusative: ['ūtilissimāsne'],
							genitive: ['ūtilissimārumne'],
							dative: ['ūtilissimīsne'],
							ablative: ['ūtilissimīsne'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtilissimumne'],
							vocative: ['ūtilissimumne'],
							accusative: ['ūtilissimumne'],
							genitive: ['ūtilissimīne'],
							dative: ['ūtilissimōne'],
							ablative: ['ūtilissimōne'],
						},
						plural: {
							nominative: ['ūtilissimane'],
							vocative: ['ūtilissimane'],
							accusative: ['ūtilissimane'],
							genitive: ['ūtilissimōrumne'],
							dative: ['ūtilissimīsne'],
							ablative: ['ūtilissimīsne'],
						},
					},
				},
			},
			que: {
				positive: {
					masculine: {
						singular: {
							nominative: ['ūtilisque'],
							vocative: ['ūtilisque'],
							accusative: ['ūtilemque'],
							genitive: ['ūtilisque'],
							dative: ['ūtilīque'],
							ablative: ['ūtilīque'],
						},
						plural: {
							nominative: ['ūtilēsque'],
							vocative: ['ūtilēsque'],
							accusative: ['ūtilēsque', 'ūtilīsque'],
							genitive: ['ūtiliumque'],
							dative: ['ūtilibusque'],
							ablative: ['ūtilibusque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilisque'],
							vocative: ['ūtilisque'],
							accusative: ['ūtilemque'],
							genitive: ['ūtilisque'],
							dative: ['ūtilīque'],
							ablative: ['ūtilīque'],
						},
						plural: {
							nominative: ['ūtilēsque'],
							vocative: ['ūtilēsque'],
							accusative: ['ūtilēsque', 'ūtilīsque'],
							genitive: ['ūtiliumque'],
							dative: ['ūtilibusque'],
							ablative: ['ūtilibusque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtileque'],
							vocative: ['ūtileque'],
							accusative: ['ūtileque'],
							genitive: ['ūtilisque'],
							dative: ['ūtilīque'],
							ablative: ['ūtilīque'],
						},
						plural: {
							nominative: ['ūtiliaque'],
							vocative: ['ūtiliaque'],
							accusative: ['ūtiliaque'],
							genitive: ['ūtiliumque'],
							dative: ['ūtilibusque'],
							ablative: ['ūtilibusque'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['ūtiliorque'],
							vocative: ['ūtiliorque'],
							accusative: ['ūtiliōremque'],
							genitive: ['ūtiliōrisque'],
							dative: ['ūtiliōrīque'],
							ablative: ['ūtiliōreque'],
						},
						plural: {
							nominative: ['ūtiliōrēsque'],
							vocative: ['ūtiliōrēsque'],
							accusative: ['ūtiliōrēsque'],
							genitive: ['ūtiliōrumque'],
							dative: ['ūtiliōribusque'],
							ablative: ['ūtiliōribusque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtiliorque'],
							vocative: ['ūtiliorque'],
							accusative: ['ūtiliōremque'],
							genitive: ['ūtiliōrisque'],
							dative: ['ūtiliōrīque'],
							ablative: ['ūtiliōreque'],
						},
						plural: {
							nominative: ['ūtiliōrēsque'],
							vocative: ['ūtiliōrēsque'],
							accusative: ['ūtiliōrēsque'],
							genitive: ['ūtiliōrumque'],
							dative: ['ūtiliōribusque'],
							ablative: ['ūtiliōribusque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtiliusque'],
							vocative: ['ūtiliusque'],
							accusative: ['ūtiliusque'],
							genitive: ['ūtiliōrisque'],
							dative: ['ūtiliōrīque'],
							ablative: ['ūtiliōreque'],
						},
						plural: {
							nominative: ['ūtiliōraque'],
							vocative: ['ūtiliōraque'],
							accusative: ['ūtiliōraque'],
							genitive: ['ūtiliōrumque'],
							dative: ['ūtiliōribusque'],
							ablative: ['ūtiliōribusque'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['ūtilissimusque'],
							vocative: ['ūtilissimeque'],
							accusative: ['ūtilissimumque'],
							genitive: ['ūtilissimīque'],
							dative: ['ūtilissimōque'],
							ablative: ['ūtilissimōque'],
						},
						plural: {
							nominative: ['ūtilissimīque'],
							vocative: ['ūtilissimīque'],
							accusative: ['ūtilissimōsque'],
							genitive: ['ūtilissimōrumque'],
							dative: ['ūtilissimīsque'],
							ablative: ['ūtilissimīsque'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilissimaque'],
							vocative: ['ūtilissimaque'],
							accusative: ['ūtilissimamque'],
							genitive: ['ūtilissimaeque'],
							dative: ['ūtilissimaeque'],
							ablative: ['ūtilissimāque'],
						},
						plural: {
							nominative: ['ūtilissimaeque'],
							vocative: ['ūtilissimaeque'],
							accusative: ['ūtilissimāsque'],
							genitive: ['ūtilissimārumque'],
							dative: ['ūtilissimīsque'],
							ablative: ['ūtilissimīsque'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtilissimumque'],
							vocative: ['ūtilissimumque'],
							accusative: ['ūtilissimumque'],
							genitive: ['ūtilissimīque'],
							dative: ['ūtilissimōque'],
							ablative: ['ūtilissimōque'],
						},
						plural: {
							nominative: ['ūtilissimaque'],
							vocative: ['ūtilissimaque'],
							accusative: ['ūtilissimaque'],
							genitive: ['ūtilissimōrumque'],
							dative: ['ūtilissimīsque'],
							ablative: ['ūtilissimīsque'],
						},
					},
				},
			},
			ve: {
				positive: {
					masculine: {
						singular: {
							nominative: ['ūtilisve'],
							vocative: ['ūtilisve'],
							accusative: ['ūtilemve'],
							genitive: ['ūtilisve'],
							dative: ['ūtilīve'],
							ablative: ['ūtilīve'],
						},
						plural: {
							nominative: ['ūtilēsve'],
							vocative: ['ūtilēsve'],
							accusative: ['ūtilēsve', 'ūtilīsve'],
							genitive: ['ūtiliumve'],
							dative: ['ūtilibusve'],
							ablative: ['ūtilibusve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilisve'],
							vocative: ['ūtilisve'],
							accusative: ['ūtilemve'],
							genitive: ['ūtilisve'],
							dative: ['ūtilīve'],
							ablative: ['ūtilīve'],
						},
						plural: {
							nominative: ['ūtilēsve'],
							vocative: ['ūtilēsve'],
							accusative: ['ūtilēsve', 'ūtilīsve'],
							genitive: ['ūtiliumve'],
							dative: ['ūtilibusve'],
							ablative: ['ūtilibusve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtileve'],
							vocative: ['ūtileve'],
							accusative: ['ūtileve'],
							genitive: ['ūtilisve'],
							dative: ['ūtilīve'],
							ablative: ['ūtilīve'],
						},
						plural: {
							nominative: ['ūtiliave'],
							vocative: ['ūtiliave'],
							accusative: ['ūtiliave'],
							genitive: ['ūtiliumve'],
							dative: ['ūtilibusve'],
							ablative: ['ūtilibusve'],
						},
					},
				},
				comparative: {
					masculine: {
						singular: {
							nominative: ['ūtiliorve'],
							vocative: ['ūtiliorve'],
							accusative: ['ūtiliōremve'],
							genitive: ['ūtiliōrisve'],
							dative: ['ūtiliōrīve'],
							ablative: ['ūtiliōreve'],
						},
						plural: {
							nominative: ['ūtiliōrēsve'],
							vocative: ['ūtiliōrēsve'],
							accusative: ['ūtiliōrēsve'],
							genitive: ['ūtiliōrumve'],
							dative: ['ūtiliōribusve'],
							ablative: ['ūtiliōribusve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtiliorve'],
							vocative: ['ūtiliorve'],
							accusative: ['ūtiliōremve'],
							genitive: ['ūtiliōrisve'],
							dative: ['ūtiliōrīve'],
							ablative: ['ūtiliōreve'],
						},
						plural: {
							nominative: ['ūtiliōrēsve'],
							vocative: ['ūtiliōrēsve'],
							accusative: ['ūtiliōrēsve'],
							genitive: ['ūtiliōrumve'],
							dative: ['ūtiliōribusve'],
							ablative: ['ūtiliōribusve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtiliusve'],
							vocative: ['ūtiliusve'],
							accusative: ['ūtiliusve'],
							genitive: ['ūtiliōrisve'],
							dative: ['ūtiliōrīve'],
							ablative: ['ūtiliōreve'],
						},
						plural: {
							nominative: ['ūtiliōrave'],
							vocative: ['ūtiliōrave'],
							accusative: ['ūtiliōrave'],
							genitive: ['ūtiliōrumve'],
							dative: ['ūtiliōribusve'],
							ablative: ['ūtiliōribusve'],
						},
					},
				},
				superlative: {
					masculine: {
						singular: {
							nominative: ['ūtilissimusve'],
							vocative: ['ūtilissimeve'],
							accusative: ['ūtilissimumve'],
							genitive: ['ūtilissimīve'],
							dative: ['ūtilissimōve'],
							ablative: ['ūtilissimōve'],
						},
						plural: {
							nominative: ['ūtilissimīve'],
							vocative: ['ūtilissimīve'],
							accusative: ['ūtilissimōsve'],
							genitive: ['ūtilissimōrumve'],
							dative: ['ūtilissimīsve'],
							ablative: ['ūtilissimīsve'],
						},
					},
					feminine: {
						singular: {
							nominative: ['ūtilissimave'],
							vocative: ['ūtilissimave'],
							accusative: ['ūtilissimamve'],
							genitive: ['ūtilissimaeve'],
							dative: ['ūtilissimaeve'],
							ablative: ['ūtilissimāve'],
						},
						plural: {
							nominative: ['ūtilissimaeve'],
							vocative: ['ūtilissimaeve'],
							accusative: ['ūtilissimāsve'],
							genitive: ['ūtilissimārumve'],
							dative: ['ūtilissimīsve'],
							ablative: ['ūtilissimīsve'],
						},
					},
					neuter: {
						singular: {
							nominative: ['ūtilissimumve'],
							vocative: ['ūtilissimumve'],
							accusative: ['ūtilissimumve'],
							genitive: ['ūtilissimīve'],
							dative: ['ūtilissimōve'],
							ablative: ['ūtilissimōve'],
						},
						plural: {
							nominative: ['ūtilissimave'],
							vocative: ['ūtilissimave'],
							accusative: ['ūtilissimave'],
							genitive: ['ūtilissimōrumve'],
							dative: ['ūtilissimīsve'],
							ablative: ['ūtilissimīsve'],
						},
					},
				},
			},
		},
	},
	{
		Lemma: 'tabula',
		Forms: {
			unencliticized: {
				feminine: {
					singular: {
						nominative: ['tabula'],
						vocative: ['tabula'],
						accusative: ['tabulam'],
						genitive: ['tabulae'],
						dative: ['tabulae'],
						ablative: ['tabulā'],
					},
					plural: {
						nominative: ['tabulae'],
						vocative: ['tabulae'],
						accusative: ['tabulās'],
						genitive: ['tabulārum'],
						dative: ['tabulīs'],
						ablative: ['tabulīs'],
					},
				},
			},
			ne: {
				feminine: {
					singular: {
						nominative: ['tabulane'],
						vocative: ['tabulane'],
						accusative: ['tabulamne'],
						genitive: ['tabulaene'],
						dative: ['tabulaene'],
						ablative: ['tabulāne'],
					},
					plural: {
						nominative: ['tabulaene'],
						vocative: ['tabulaene'],
						accusative: ['tabulāsne'],
						genitive: ['tabulārumne'],
						dative: ['tabulīsne'],
						ablative: ['tabulīsne'],
					},
				},
			},
			que: {
				feminine: {
					singular: {
						nominative: ['tabulaque'],
						vocative: ['tabulaque'],
						accusative: ['tabulamque'],
						genitive: ['tabulaeque'],
						dative: ['tabulaeque'],
						ablative: ['tabulāque'],
					},
					plural: {
						nominative: ['tabulaeque'],
						vocative: ['tabulaeque'],
						accusative: ['tabulāsque'],
						genitive: ['tabulārumque'],
						dative: ['tabulīsque'],
						ablative: ['tabulīsque'],
					},
				},
			},
			ve: {
				feminine: {
					singular: {
						nominative: ['tabulave'],
						vocative: ['tabulave'],
						accusative: ['tabulamve'],
						genitive: ['tabulaeve'],
						dative: ['tabulaeve'],
						ablative: ['tabulāve'],
					},
					plural: {
						nominative: ['tabulaeve'],
						vocative: ['tabulaeve'],
						accusative: ['tabulāsve'],
						genitive: ['tabulārumve'],
						dative: ['tabulīsve'],
						ablative: ['tabulīsve'],
					},
				},
			},
		},
	},
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
			que: ['āque', 'absque'],
			ve: ['āve'],
		},
	},
	{
		Lemma: 'abarceō',
		Forms: {
			unencliticized: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abarceō'],
								second: ['abarcēs'],
								third: ['abarcet'],
							},
							plural: {
								first: ['abarcēmus'],
								second: ['abarcētis'],
								third: ['abarcent'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbam'],
								second: ['abarcēbās'],
								third: ['abarcēbat'],
							},
							plural: {
								first: ['abarcēbāmus'],
								second: ['abarcēbātis'],
								third: ['abarcēbant'],
							},
						},
						future: {
							singular: {
								first: ['abarcēbō'],
								second: ['abarcēbis'],
								third: ['abarcēbit'],
							},
							plural: {
								first: ['abarcēbimus'],
								second: ['abarcēbitis'],
								third: ['abarcēbunt'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuī'],
								second: ['abarcuistī'],
								third: ['abarcuit'],
							},
							plural: {
								first: ['abarcuimus'],
								second: ['abarcuistis'],
								third: ['abarcuērunt', 'abarcuēre'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcueram'],
								second: ['abarcuerās'],
								third: ['abarcuerat'],
							},
							plural: {
								first: ['abarcuerāmus'],
								second: ['abarcuerātis'],
								third: ['abarcuerant'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abarcuerō'],
								second: ['abarcueris'],
								third: ['abarcuerit'],
							},
							plural: {
								first: ['abarcuerimus'],
								second: ['abarcueritis'],
								third: ['abarcuerint'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarceor'],
								second: ['abarcēris', 'abarcēre'],
								third: ['abarcētur'],
							},
							plural: {
								first: ['abarcēmur'],
								second: ['abarcēminī'],
								third: ['abarcentur'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbar'],
								second: ['abarcēbāris', 'abarcēbāre'],
								third: ['abarcēbātur'],
							},
							plural: {
								first: ['abarcēbāmur'],
								second: ['abarcēbāminī'],
								third: ['abarcēbantur'],
							},
						},
						future: {
							singular: {
								first: ['abarcēbor'],
								second: ['abarcēberis', 'abarcēbere'],
								third: ['abarcēbitur'],
							},
							plural: {
								first: ['abarcēbimur'],
								second: ['abarcēbiminī'],
								third: ['abarcēbuntur'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abarceam'],
								second: ['abarceās'],
								third: ['abarceat'],
							},
							plural: {
								first: ['abarceāmus'],
								second: ['abarceātis'],
								third: ['abarceant'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcērem'],
								second: ['abarcērēs'],
								third: ['abarcēret'],
							},
							plural: {
								first: ['abarcērēmus'],
								second: ['abarcērētis'],
								third: ['abarcērent'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuerim'],
								second: ['abarcuerīs'],
								third: ['abarcuerit'],
							},
							plural: {
								first: ['abarcuerīmus'],
								second: ['abarcuerītis'],
								third: ['abarcuerint'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcuissem'],
								second: ['abarcuissēs'],
								third: ['abarcuisset'],
							},
							plural: {
								first: ['abarcuissēmus'],
								second: ['abarcuissētis'],
								third: ['abarcuissent'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarcear'],
								second: ['abarceāris', 'abarceāre'],
								third: ['abarceātur'],
							},
							plural: {
								first: ['abarceāmur'],
								second: ['abarceāminī'],
								third: ['abarceantur'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcērer'],
								second: ['abarcērēris', 'abarcērēre'],
								third: ['abarcērētur'],
							},
							plural: {
								first: ['abarcērēmur'],
								second: ['abarcērēminī'],
								third: ['abarcērentur'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abarcē'],
							},
							plural: {
								second: ['abarcēte'],
							},
						},
						future: {
							singular: {
								second: ['abarcētō'],
								third: ['abarcētō'],
							},
							plural: {
								second: ['abarcētōte'],
								third: ['abarcentō'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abarcēre'],
							},
							plural: {
								second: ['abarcēminī'],
							},
						},
						future: {
							singular: {
								second: ['abarcētor'],
								third: ['abarcētor'],
							},
							plural: {
								third: ['abarcentor'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abarcēre'],
						perfect: ['abarcuisse'],
					},
					passive: {
						present: ['abarcērī'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abarcēns'],
									vocative: ['abarcēns'],
									accusative: ['abarcentem'],
									genitive: ['abarcentis'],
									dative: ['abarcentī'],
									ablative: ['abarcentī', 'abarcente'],
								},
								plural: {
									nominative: ['abarcentēs'],
									vocative: ['abarcentēs'],
									accusative: ['abarcentēs', 'abarcentīs'],
									genitive: ['abarcentium'],
									dative: ['abarcentibus'],
									ablative: ['abarcentibus'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcēns'],
									vocative: ['abarcēns'],
									accusative: ['abarcentem'],
									genitive: ['abarcentis'],
									dative: ['abarcentī'],
									ablative: ['abarcentī', 'abarcente'],
								},
								plural: {
									nominative: ['abarcentēs'],
									vocative: ['abarcentēs'],
									accusative: ['abarcentēs', 'abarcentīs'],
									genitive: ['abarcentium'],
									dative: ['abarcentibus'],
									ablative: ['abarcentibus'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcēns'],
									vocative: ['abarcēns'],
									accusative: ['abarcēns'],
									genitive: ['abarcentis'],
									dative: ['abarcentī'],
									ablative: ['abarcentī', 'abarcente'],
								},
								plural: {
									nominative: ['abarcentia'],
									vocative: ['abarcentia'],
									accusative: ['abarcentia'],
									genitive: ['abarcentium'],
									dative: ['abarcentibus'],
									ablative: ['abarcentibus'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcitūrus'],
									vocative: ['abarcitūre'],
									accusative: ['abarcitūrum'],
									genitive: ['abarcitūrī'],
									dative: ['abarcitūrō'],
									ablative: ['abarcitūrō'],
								},
								plural: {
									nominative: ['abarcitūrī'],
									vocative: ['abarcitūrī'],
									accusative: ['abarcitūrōs'],
									genitive: ['abarcitūrōrum'],
									dative: ['abarcitūrīs'],
									ablative: ['abarcitūrīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitūra'],
									vocative: ['abarcitūra'],
									accusative: ['abarcitūram'],
									genitive: ['abarcitūrae'],
									dative: ['abarcitūrae'],
									ablative: ['abarcitūrā'],
								},
								plural: {
									nominative: ['abarcitūrae'],
									vocative: ['abarcitūrae'],
									accusative: ['abarcitūrās'],
									genitive: ['abarcitūrārum'],
									dative: ['abarcitūrīs'],
									ablative: ['abarcitūrīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitūrum'],
									vocative: ['abarcitūrum'],
									accusative: ['abarcitūrum'],
									genitive: ['abarcitūrī'],
									dative: ['abarcitūrō'],
									ablative: ['abarcitūrō'],
								},
								plural: {
									nominative: ['abarcitūra'],
									vocative: ['abarcitūra'],
									accusative: ['abarcitūra'],
									genitive: ['abarcitūrōrum'],
									dative: ['abarcitūrīs'],
									ablative: ['abarcitūrīs'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abarcitus'],
									vocative: ['abarcite'],
									accusative: ['abarcitum'],
									genitive: ['abarcitī'],
									dative: ['abarcitō'],
									ablative: ['abarcitō'],
								},
								plural: {
									nominative: ['abarcitī'],
									vocative: ['abarcitī'],
									accusative: ['abarcitōs'],
									genitive: ['abarcitōrum'],
									dative: ['abarcitīs'],
									ablative: ['abarcitīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcita'],
									vocative: ['abarcita'],
									accusative: ['abarcitam'],
									genitive: ['abarcitae'],
									dative: ['abarcitae'],
									ablative: ['abarcitā'],
								},
								plural: {
									nominative: ['abarcitae'],
									vocative: ['abarcitae'],
									accusative: ['abarcitās'],
									genitive: ['abarcitārum'],
									dative: ['abarcitīs'],
									ablative: ['abarcitīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitum'],
									vocative: ['abarcitum'],
									accusative: ['abarcitum'],
									genitive: ['abarcitī'],
									dative: ['abarcitō'],
									ablative: ['abarcitō'],
								},
								plural: {
									nominative: ['abarcita'],
									vocative: ['abarcita'],
									accusative: ['abarcita'],
									genitive: ['abarcitōrum'],
									dative: ['abarcitīs'],
									ablative: ['abarcitīs'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcendus'],
									vocative: ['abarcende'],
									accusative: ['abarcendum'],
									genitive: ['abarcendī'],
									dative: ['abarcendō'],
									ablative: ['abarcendō'],
								},
								plural: {
									nominative: ['abarcendī'],
									vocative: ['abarcendī'],
									accusative: ['abarcendōs'],
									genitive: ['abarcendōrum'],
									dative: ['abarcendīs'],
									ablative: ['abarcendīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcenda'],
									vocative: ['abarcenda'],
									accusative: ['abarcendam'],
									genitive: ['abarcendae'],
									dative: ['abarcendae'],
									ablative: ['abarcendā'],
								},
								plural: {
									nominative: ['abarcendae'],
									vocative: ['abarcendae'],
									accusative: ['abarcendās'],
									genitive: ['abarcendārum'],
									dative: ['abarcendīs'],
									ablative: ['abarcendīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcendum'],
									vocative: ['abarcendum'],
									accusative: ['abarcendum'],
									genitive: ['abarcendī'],
									dative: ['abarcendō'],
									ablative: ['abarcendō'],
								},
								plural: {
									nominative: ['abarcenda'],
									vocative: ['abarcenda'],
									accusative: ['abarcenda'],
									genitive: ['abarcendōrum'],
									dative: ['abarcendīs'],
									ablative: ['abarcendīs'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abarcendum'],
					genitive: ['abarcendī'],
					dative: ['abarcendō'],
					ablative: ['abarcendō'],
				},
				supine: {
					accusative: ['abarcitum'],
					ablative: ['abarcitū'],
				},
			},
			ne: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abarceōne'],
								second: ['abarcēsne'],
								third: ['abarcetne'],
							},
							plural: {
								first: ['abarcēmusne'],
								second: ['abarcētisne'],
								third: ['abarcentne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbamne'],
								second: ['abarcēbāsne'],
								third: ['abarcēbatne'],
							},
							plural: {
								first: ['abarcēbāmusne'],
								second: ['abarcēbātisne'],
								third: ['abarcēbantne'],
							},
						},
						future: {
							singular: {
								first: ['abarcēbōne'],
								second: ['abarcēbisne'],
								third: ['abarcēbitne'],
							},
							plural: {
								first: ['abarcēbimusne'],
								second: ['abarcēbitisne'],
								third: ['abarcēbuntne'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuīne'],
								second: ['abarcuistīne'],
								third: ['abarcuitne'],
							},
							plural: {
								first: ['abarcuimusne'],
								second: ['abarcuistisne'],
								third: ['abarcuēruntne', 'abarcuērene'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcueramne'],
								second: ['abarcuerāsne'],
								third: ['abarcueratne'],
							},
							plural: {
								first: ['abarcuerāmusne'],
								second: ['abarcuerātisne'],
								third: ['abarcuerantne'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abarcuerōne'],
								second: ['abarcuerisne'],
								third: ['abarcueritne'],
							},
							plural: {
								first: ['abarcuerimusne'],
								second: ['abarcueritisne'],
								third: ['abarcuerintne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarceorne'],
								second: ['abarcērisne', 'abarcērene'],
								third: ['abarcēturne'],
							},
							plural: {
								first: ['abarcēmurne'],
								second: ['abarcēminīne'],
								third: ['abarcenturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbarne'],
								second: ['abarcēbārisne', 'abarcēbārene'],
								third: ['abarcēbāturne'],
							},
							plural: {
								first: ['abarcēbāmurne'],
								second: ['abarcēbāminīne'],
								third: ['abarcēbanturne'],
							},
						},
						future: {
							singular: {
								first: ['abarcēborne'],
								second: ['abarcēberisne', 'abarcēberene'],
								third: ['abarcēbiturne'],
							},
							plural: {
								first: ['abarcēbimurne'],
								second: ['abarcēbiminīne'],
								third: ['abarcēbunturne'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abarceamne'],
								second: ['abarceāsne'],
								third: ['abarceatne'],
							},
							plural: {
								first: ['abarceāmusne'],
								second: ['abarceātisne'],
								third: ['abarceantne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēremne'],
								second: ['abarcērēsne'],
								third: ['abarcēretne'],
							},
							plural: {
								first: ['abarcērēmusne'],
								second: ['abarcērētisne'],
								third: ['abarcērentne'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuerimne'],
								second: ['abarcuerīsne'],
								third: ['abarcueritne'],
							},
							plural: {
								first: ['abarcuerīmusne'],
								second: ['abarcuerītisne'],
								third: ['abarcuerintne'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcuissemne'],
								second: ['abarcuissēsne'],
								third: ['abarcuissetne'],
							},
							plural: {
								first: ['abarcuissēmusne'],
								second: ['abarcuissētisne'],
								third: ['abarcuissentne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarcearne'],
								second: ['abarceārisne', 'abarceārene'],
								third: ['abarceāturne'],
							},
							plural: {
								first: ['abarceāmurne'],
								second: ['abarceāminīne'],
								third: ['abarceanturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcērerne'],
								second: ['abarcērērisne', 'abarcērērene'],
								third: ['abarcērēturne'],
							},
							plural: {
								first: ['abarcērēmurne'],
								second: ['abarcērēminīne'],
								third: ['abarcērenturne'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abarcēne'],
							},
							plural: {
								second: ['abarcētene'],
							},
						},
						future: {
							singular: {
								second: ['abarcētōne'],
								third: ['abarcētōne'],
							},
							plural: {
								second: ['abarcētōtene'],
								third: ['abarcentōne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abarcērene'],
							},
							plural: {
								second: ['abarcēminīne'],
							},
						},
						future: {
							singular: {
								second: ['abarcētorne'],
								third: ['abarcētorne'],
							},
							plural: {
								third: ['abarcentorne'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abarcērene'],
						perfect: ['abarcuissene'],
					},
					passive: {
						present: ['abarcērīne'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abarcēnsne'],
									vocative: ['abarcēnsne'],
									accusative: ['abarcentemne'],
									genitive: ['abarcentisne'],
									dative: ['abarcentīne'],
									ablative: ['abarcentīne', 'abarcentene'],
								},
								plural: {
									nominative: ['abarcentēsne'],
									vocative: ['abarcentēsne'],
									accusative: ['abarcentēsne', 'abarcentīsne'],
									genitive: ['abarcentiumne'],
									dative: ['abarcentibusne'],
									ablative: ['abarcentibusne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcēnsne'],
									vocative: ['abarcēnsne'],
									accusative: ['abarcentemne'],
									genitive: ['abarcentisne'],
									dative: ['abarcentīne'],
									ablative: ['abarcentīne', 'abarcentene'],
								},
								plural: {
									nominative: ['abarcentēsne'],
									vocative: ['abarcentēsne'],
									accusative: ['abarcentēsne', 'abarcentīsne'],
									genitive: ['abarcentiumne'],
									dative: ['abarcentibusne'],
									ablative: ['abarcentibusne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcēnsne'],
									vocative: ['abarcēnsne'],
									accusative: ['abarcēnsne'],
									genitive: ['abarcentisne'],
									dative: ['abarcentīne'],
									ablative: ['abarcentīne', 'abarcentene'],
								},
								plural: {
									nominative: ['abarcentiane'],
									vocative: ['abarcentiane'],
									accusative: ['abarcentiane'],
									genitive: ['abarcentiumne'],
									dative: ['abarcentibusne'],
									ablative: ['abarcentibusne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcitūrusne'],
									vocative: ['abarcitūrene'],
									accusative: ['abarcitūrumne'],
									genitive: ['abarcitūrīne'],
									dative: ['abarcitūrōne'],
									ablative: ['abarcitūrōne'],
								},
								plural: {
									nominative: ['abarcitūrīne'],
									vocative: ['abarcitūrīne'],
									accusative: ['abarcitūrōsne'],
									genitive: ['abarcitūrōrumne'],
									dative: ['abarcitūrīsne'],
									ablative: ['abarcitūrīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitūrane'],
									vocative: ['abarcitūrane'],
									accusative: ['abarcitūramne'],
									genitive: ['abarcitūraene'],
									dative: ['abarcitūraene'],
									ablative: ['abarcitūrāne'],
								},
								plural: {
									nominative: ['abarcitūraene'],
									vocative: ['abarcitūraene'],
									accusative: ['abarcitūrāsne'],
									genitive: ['abarcitūrārumne'],
									dative: ['abarcitūrīsne'],
									ablative: ['abarcitūrīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitūrumne'],
									vocative: ['abarcitūrumne'],
									accusative: ['abarcitūrumne'],
									genitive: ['abarcitūrīne'],
									dative: ['abarcitūrōne'],
									ablative: ['abarcitūrōne'],
								},
								plural: {
									nominative: ['abarcitūrane'],
									vocative: ['abarcitūrane'],
									accusative: ['abarcitūrane'],
									genitive: ['abarcitūrōrumne'],
									dative: ['abarcitūrīsne'],
									ablative: ['abarcitūrīsne'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abarcitusne'],
									vocative: ['abarcitene'],
									accusative: ['abarcitumne'],
									genitive: ['abarcitīne'],
									dative: ['abarcitōne'],
									ablative: ['abarcitōne'],
								},
								plural: {
									nominative: ['abarcitīne'],
									vocative: ['abarcitīne'],
									accusative: ['abarcitōsne'],
									genitive: ['abarcitōrumne'],
									dative: ['abarcitīsne'],
									ablative: ['abarcitīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitane'],
									vocative: ['abarcitane'],
									accusative: ['abarcitamne'],
									genitive: ['abarcitaene'],
									dative: ['abarcitaene'],
									ablative: ['abarcitāne'],
								},
								plural: {
									nominative: ['abarcitaene'],
									vocative: ['abarcitaene'],
									accusative: ['abarcitāsne'],
									genitive: ['abarcitārumne'],
									dative: ['abarcitīsne'],
									ablative: ['abarcitīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitumne'],
									vocative: ['abarcitumne'],
									accusative: ['abarcitumne'],
									genitive: ['abarcitīne'],
									dative: ['abarcitōne'],
									ablative: ['abarcitōne'],
								},
								plural: {
									nominative: ['abarcitane'],
									vocative: ['abarcitane'],
									accusative: ['abarcitane'],
									genitive: ['abarcitōrumne'],
									dative: ['abarcitīsne'],
									ablative: ['abarcitīsne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcendusne'],
									vocative: ['abarcendene'],
									accusative: ['abarcendumne'],
									genitive: ['abarcendīne'],
									dative: ['abarcendōne'],
									ablative: ['abarcendōne'],
								},
								plural: {
									nominative: ['abarcendīne'],
									vocative: ['abarcendīne'],
									accusative: ['abarcendōsne'],
									genitive: ['abarcendōrumne'],
									dative: ['abarcendīsne'],
									ablative: ['abarcendīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcendane'],
									vocative: ['abarcendane'],
									accusative: ['abarcendamne'],
									genitive: ['abarcendaene'],
									dative: ['abarcendaene'],
									ablative: ['abarcendāne'],
								},
								plural: {
									nominative: ['abarcendaene'],
									vocative: ['abarcendaene'],
									accusative: ['abarcendāsne'],
									genitive: ['abarcendārumne'],
									dative: ['abarcendīsne'],
									ablative: ['abarcendīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcendumne'],
									vocative: ['abarcendumne'],
									accusative: ['abarcendumne'],
									genitive: ['abarcendīne'],
									dative: ['abarcendōne'],
									ablative: ['abarcendōne'],
								},
								plural: {
									nominative: ['abarcendane'],
									vocative: ['abarcendane'],
									accusative: ['abarcendane'],
									genitive: ['abarcendōrumne'],
									dative: ['abarcendīsne'],
									ablative: ['abarcendīsne'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abarcendumne'],
					genitive: ['abarcendīne'],
					dative: ['abarcendōne'],
					ablative: ['abarcendōne'],
				},
				supine: {
					accusative: ['abarcitumne'],
					ablative: ['abarcitūne'],
				},
			},
			que: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abarceōque'],
								second: ['abarcēsque'],
								third: ['abarcetque'],
							},
							plural: {
								first: ['abarcēmusque'],
								second: ['abarcētisque'],
								third: ['abarcentque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbamque'],
								second: ['abarcēbāsque'],
								third: ['abarcēbatque'],
							},
							plural: {
								first: ['abarcēbāmusque'],
								second: ['abarcēbātisque'],
								third: ['abarcēbantque'],
							},
						},
						future: {
							singular: {
								first: ['abarcēbōque'],
								second: ['abarcēbisque'],
								third: ['abarcēbitque'],
							},
							plural: {
								first: ['abarcēbimusque'],
								second: ['abarcēbitisque'],
								third: ['abarcēbuntque'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuīque'],
								second: ['abarcuistīque'],
								third: ['abarcuitque'],
							},
							plural: {
								first: ['abarcuimusque'],
								second: ['abarcuistisque'],
								third: ['abarcuēruntque', 'abarcuēreque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcueramque'],
								second: ['abarcuerāsque'],
								third: ['abarcueratque'],
							},
							plural: {
								first: ['abarcuerāmusque'],
								second: ['abarcuerātisque'],
								third: ['abarcuerantque'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abarcuerōque'],
								second: ['abarcuerisque'],
								third: ['abarcueritque'],
							},
							plural: {
								first: ['abarcuerimusque'],
								second: ['abarcueritisque'],
								third: ['abarcuerintque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarceorque'],
								second: ['abarcērisque', 'abarcēreque'],
								third: ['abarcēturque'],
							},
							plural: {
								first: ['abarcēmurque'],
								second: ['abarcēminīque'],
								third: ['abarcenturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbarque'],
								second: ['abarcēbārisque', 'abarcēbāreque'],
								third: ['abarcēbāturque'],
							},
							plural: {
								first: ['abarcēbāmurque'],
								second: ['abarcēbāminīque'],
								third: ['abarcēbanturque'],
							},
						},
						future: {
							singular: {
								first: ['abarcēborque'],
								second: ['abarcēberisque', 'abarcēbereque'],
								third: ['abarcēbiturque'],
							},
							plural: {
								first: ['abarcēbimurque'],
								second: ['abarcēbiminīque'],
								third: ['abarcēbunturque'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abarceamque'],
								second: ['abarceāsque'],
								third: ['abarceatque'],
							},
							plural: {
								first: ['abarceāmusque'],
								second: ['abarceātisque'],
								third: ['abarceantque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēremque'],
								second: ['abarcērēsque'],
								third: ['abarcēretque'],
							},
							plural: {
								first: ['abarcērēmusque'],
								second: ['abarcērētisque'],
								third: ['abarcērentque'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuerimque'],
								second: ['abarcuerīsque'],
								third: ['abarcueritque'],
							},
							plural: {
								first: ['abarcuerīmusque'],
								second: ['abarcuerītisque'],
								third: ['abarcuerintque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcuissemque'],
								second: ['abarcuissēsque'],
								third: ['abarcuissetque'],
							},
							plural: {
								first: ['abarcuissēmusque'],
								second: ['abarcuissētisque'],
								third: ['abarcuissentque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarcearque'],
								second: ['abarceārisque', 'abarceāreque'],
								third: ['abarceāturque'],
							},
							plural: {
								first: ['abarceāmurque'],
								second: ['abarceāminīque'],
								third: ['abarceanturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcērerque'],
								second: ['abarcērērisque', 'abarcērēreque'],
								third: ['abarcērēturque'],
							},
							plural: {
								first: ['abarcērēmurque'],
								second: ['abarcērēminīque'],
								third: ['abarcērenturque'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abarcēque'],
							},
							plural: {
								second: ['abarcēteque'],
							},
						},
						future: {
							singular: {
								second: ['abarcētōque'],
								third: ['abarcētōque'],
							},
							plural: {
								second: ['abarcētōteque'],
								third: ['abarcentōque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abarcēreque'],
							},
							plural: {
								second: ['abarcēminīque'],
							},
						},
						future: {
							singular: {
								second: ['abarcētorque'],
								third: ['abarcētorque'],
							},
							plural: {
								third: ['abarcentorque'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abarcēreque'],
						perfect: ['abarcuisseque'],
					},
					passive: {
						present: ['abarcērīque'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abarcēnsque'],
									vocative: ['abarcēnsque'],
									accusative: ['abarcentemque'],
									genitive: ['abarcentisque'],
									dative: ['abarcentīque'],
									ablative: ['abarcentīque', 'abarcenteque'],
								},
								plural: {
									nominative: ['abarcentēsque'],
									vocative: ['abarcentēsque'],
									accusative: ['abarcentēsque', 'abarcentīsque'],
									genitive: ['abarcentiumque'],
									dative: ['abarcentibusque'],
									ablative: ['abarcentibusque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcēnsque'],
									vocative: ['abarcēnsque'],
									accusative: ['abarcentemque'],
									genitive: ['abarcentisque'],
									dative: ['abarcentīque'],
									ablative: ['abarcentīque', 'abarcenteque'],
								},
								plural: {
									nominative: ['abarcentēsque'],
									vocative: ['abarcentēsque'],
									accusative: ['abarcentēsque', 'abarcentīsque'],
									genitive: ['abarcentiumque'],
									dative: ['abarcentibusque'],
									ablative: ['abarcentibusque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcēnsque'],
									vocative: ['abarcēnsque'],
									accusative: ['abarcēnsque'],
									genitive: ['abarcentisque'],
									dative: ['abarcentīque'],
									ablative: ['abarcentīque', 'abarcenteque'],
								},
								plural: {
									nominative: ['abarcentiaque'],
									vocative: ['abarcentiaque'],
									accusative: ['abarcentiaque'],
									genitive: ['abarcentiumque'],
									dative: ['abarcentibusque'],
									ablative: ['abarcentibusque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcitūrusque'],
									vocative: ['abarcitūreque'],
									accusative: ['abarcitūrumque'],
									genitive: ['abarcitūrīque'],
									dative: ['abarcitūrōque'],
									ablative: ['abarcitūrōque'],
								},
								plural: {
									nominative: ['abarcitūrīque'],
									vocative: ['abarcitūrīque'],
									accusative: ['abarcitūrōsque'],
									genitive: ['abarcitūrōrumque'],
									dative: ['abarcitūrīsque'],
									ablative: ['abarcitūrīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitūraque'],
									vocative: ['abarcitūraque'],
									accusative: ['abarcitūramque'],
									genitive: ['abarcitūraeque'],
									dative: ['abarcitūraeque'],
									ablative: ['abarcitūrāque'],
								},
								plural: {
									nominative: ['abarcitūraeque'],
									vocative: ['abarcitūraeque'],
									accusative: ['abarcitūrāsque'],
									genitive: ['abarcitūrārumque'],
									dative: ['abarcitūrīsque'],
									ablative: ['abarcitūrīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitūrumque'],
									vocative: ['abarcitūrumque'],
									accusative: ['abarcitūrumque'],
									genitive: ['abarcitūrīque'],
									dative: ['abarcitūrōque'],
									ablative: ['abarcitūrōque'],
								},
								plural: {
									nominative: ['abarcitūraque'],
									vocative: ['abarcitūraque'],
									accusative: ['abarcitūraque'],
									genitive: ['abarcitūrōrumque'],
									dative: ['abarcitūrīsque'],
									ablative: ['abarcitūrīsque'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abarcitusque'],
									vocative: ['abarciteque'],
									accusative: ['abarcitumque'],
									genitive: ['abarcitīque'],
									dative: ['abarcitōque'],
									ablative: ['abarcitōque'],
								},
								plural: {
									nominative: ['abarcitīque'],
									vocative: ['abarcitīque'],
									accusative: ['abarcitōsque'],
									genitive: ['abarcitōrumque'],
									dative: ['abarcitīsque'],
									ablative: ['abarcitīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitaque'],
									vocative: ['abarcitaque'],
									accusative: ['abarcitamque'],
									genitive: ['abarcitaeque'],
									dative: ['abarcitaeque'],
									ablative: ['abarcitāque'],
								},
								plural: {
									nominative: ['abarcitaeque'],
									vocative: ['abarcitaeque'],
									accusative: ['abarcitāsque'],
									genitive: ['abarcitārumque'],
									dative: ['abarcitīsque'],
									ablative: ['abarcitīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitumque'],
									vocative: ['abarcitumque'],
									accusative: ['abarcitumque'],
									genitive: ['abarcitīque'],
									dative: ['abarcitōque'],
									ablative: ['abarcitōque'],
								},
								plural: {
									nominative: ['abarcitaque'],
									vocative: ['abarcitaque'],
									accusative: ['abarcitaque'],
									genitive: ['abarcitōrumque'],
									dative: ['abarcitīsque'],
									ablative: ['abarcitīsque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcendusque'],
									vocative: ['abarcendeque'],
									accusative: ['abarcendumque'],
									genitive: ['abarcendīque'],
									dative: ['abarcendōque'],
									ablative: ['abarcendōque'],
								},
								plural: {
									nominative: ['abarcendīque'],
									vocative: ['abarcendīque'],
									accusative: ['abarcendōsque'],
									genitive: ['abarcendōrumque'],
									dative: ['abarcendīsque'],
									ablative: ['abarcendīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcendaque'],
									vocative: ['abarcendaque'],
									accusative: ['abarcendamque'],
									genitive: ['abarcendaeque'],
									dative: ['abarcendaeque'],
									ablative: ['abarcendāque'],
								},
								plural: {
									nominative: ['abarcendaeque'],
									vocative: ['abarcendaeque'],
									accusative: ['abarcendāsque'],
									genitive: ['abarcendārumque'],
									dative: ['abarcendīsque'],
									ablative: ['abarcendīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcendumque'],
									vocative: ['abarcendumque'],
									accusative: ['abarcendumque'],
									genitive: ['abarcendīque'],
									dative: ['abarcendōque'],
									ablative: ['abarcendōque'],
								},
								plural: {
									nominative: ['abarcendaque'],
									vocative: ['abarcendaque'],
									accusative: ['abarcendaque'],
									genitive: ['abarcendōrumque'],
									dative: ['abarcendīsque'],
									ablative: ['abarcendīsque'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abarcendumque'],
					genitive: ['abarcendīque'],
					dative: ['abarcendōque'],
					ablative: ['abarcendōque'],
				},
				supine: {
					accusative: ['abarcitumque'],
					ablative: ['abarcitūque'],
				},
			},
			ve: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abarceōve'],
								second: ['abarcēsve'],
								third: ['abarcetve'],
							},
							plural: {
								first: ['abarcēmusve'],
								second: ['abarcētisve'],
								third: ['abarcentve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbamve'],
								second: ['abarcēbāsve'],
								third: ['abarcēbatve'],
							},
							plural: {
								first: ['abarcēbāmusve'],
								second: ['abarcēbātisve'],
								third: ['abarcēbantve'],
							},
						},
						future: {
							singular: {
								first: ['abarcēbōve'],
								second: ['abarcēbisve'],
								third: ['abarcēbitve'],
							},
							plural: {
								first: ['abarcēbimusve'],
								second: ['abarcēbitisve'],
								third: ['abarcēbuntve'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuīve'],
								second: ['abarcuistīve'],
								third: ['abarcuitve'],
							},
							plural: {
								first: ['abarcuimusve'],
								second: ['abarcuistisve'],
								third: ['abarcuēruntve', 'abarcuēreve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcueramve'],
								second: ['abarcuerāsve'],
								third: ['abarcueratve'],
							},
							plural: {
								first: ['abarcuerāmusve'],
								second: ['abarcuerātisve'],
								third: ['abarcuerantve'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abarcuerōve'],
								second: ['abarcuerisve'],
								third: ['abarcueritve'],
							},
							plural: {
								first: ['abarcuerimusve'],
								second: ['abarcueritisve'],
								third: ['abarcuerintve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarceorve'],
								second: ['abarcērisve', 'abarcēreve'],
								third: ['abarcēturve'],
							},
							plural: {
								first: ['abarcēmurve'],
								second: ['abarcēminīve'],
								third: ['abarcenturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēbarve'],
								second: ['abarcēbārisve', 'abarcēbāreve'],
								third: ['abarcēbāturve'],
							},
							plural: {
								first: ['abarcēbāmurve'],
								second: ['abarcēbāminīve'],
								third: ['abarcēbanturve'],
							},
						},
						future: {
							singular: {
								first: ['abarcēborve'],
								second: ['abarcēberisve', 'abarcēbereve'],
								third: ['abarcēbiturve'],
							},
							plural: {
								first: ['abarcēbimurve'],
								second: ['abarcēbiminīve'],
								third: ['abarcēbunturve'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abarceamve'],
								second: ['abarceāsve'],
								third: ['abarceatve'],
							},
							plural: {
								first: ['abarceāmusve'],
								second: ['abarceātisve'],
								third: ['abarceantve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcēremve'],
								second: ['abarcērēsve'],
								third: ['abarcēretve'],
							},
							plural: {
								first: ['abarcērēmusve'],
								second: ['abarcērētisve'],
								third: ['abarcērentve'],
							},
						},
						perfect: {
							singular: {
								first: ['abarcuerimve'],
								second: ['abarcuerīsve'],
								third: ['abarcueritve'],
							},
							plural: {
								first: ['abarcuerīmusve'],
								second: ['abarcuerītisve'],
								third: ['abarcuerintve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abarcuissemve'],
								second: ['abarcuissēsve'],
								third: ['abarcuissetve'],
							},
							plural: {
								first: ['abarcuissēmusve'],
								second: ['abarcuissētisve'],
								third: ['abarcuissentve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abarcearve'],
								second: ['abarceārisve', 'abarceāreve'],
								third: ['abarceāturve'],
							},
							plural: {
								first: ['abarceāmurve'],
								second: ['abarceāminīve'],
								third: ['abarceanturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abarcērerve'],
								second: ['abarcērērisve', 'abarcērēreve'],
								third: ['abarcērēturve'],
							},
							plural: {
								first: ['abarcērēmurve'],
								second: ['abarcērēminīve'],
								third: ['abarcērenturve'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abarcēve'],
							},
							plural: {
								second: ['abarcēteve'],
							},
						},
						future: {
							singular: {
								second: ['abarcētōve'],
								third: ['abarcētōve'],
							},
							plural: {
								second: ['abarcētōteve'],
								third: ['abarcentōve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abarcēreve'],
							},
							plural: {
								second: ['abarcēminīve'],
							},
						},
						future: {
							singular: {
								second: ['abarcētorve'],
								third: ['abarcētorve'],
							},
							plural: {
								third: ['abarcentorve'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abarcēreve'],
						perfect: ['abarcuisseve'],
					},
					passive: {
						present: ['abarcērīve'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abarcēnsve'],
									vocative: ['abarcēnsve'],
									accusative: ['abarcentemve'],
									genitive: ['abarcentisve'],
									dative: ['abarcentīve'],
									ablative: ['abarcentīve', 'abarcenteve'],
								},
								plural: {
									nominative: ['abarcentēsve'],
									vocative: ['abarcentēsve'],
									accusative: ['abarcentēsve', 'abarcentīsve'],
									genitive: ['abarcentiumve'],
									dative: ['abarcentibusve'],
									ablative: ['abarcentibusve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcēnsve'],
									vocative: ['abarcēnsve'],
									accusative: ['abarcentemve'],
									genitive: ['abarcentisve'],
									dative: ['abarcentīve'],
									ablative: ['abarcentīve', 'abarcenteve'],
								},
								plural: {
									nominative: ['abarcentēsve'],
									vocative: ['abarcentēsve'],
									accusative: ['abarcentēsve', 'abarcentīsve'],
									genitive: ['abarcentiumve'],
									dative: ['abarcentibusve'],
									ablative: ['abarcentibusve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcēnsve'],
									vocative: ['abarcēnsve'],
									accusative: ['abarcēnsve'],
									genitive: ['abarcentisve'],
									dative: ['abarcentīve'],
									ablative: ['abarcentīve', 'abarcenteve'],
								},
								plural: {
									nominative: ['abarcentiave'],
									vocative: ['abarcentiave'],
									accusative: ['abarcentiave'],
									genitive: ['abarcentiumve'],
									dative: ['abarcentibusve'],
									ablative: ['abarcentibusve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcitūrusve'],
									vocative: ['abarcitūreve'],
									accusative: ['abarcitūrumve'],
									genitive: ['abarcitūrīve'],
									dative: ['abarcitūrōve'],
									ablative: ['abarcitūrōve'],
								},
								plural: {
									nominative: ['abarcitūrīve'],
									vocative: ['abarcitūrīve'],
									accusative: ['abarcitūrōsve'],
									genitive: ['abarcitūrōrumve'],
									dative: ['abarcitūrīsve'],
									ablative: ['abarcitūrīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitūrave'],
									vocative: ['abarcitūrave'],
									accusative: ['abarcitūramve'],
									genitive: ['abarcitūraeve'],
									dative: ['abarcitūraeve'],
									ablative: ['abarcitūrāve'],
								},
								plural: {
									nominative: ['abarcitūraeve'],
									vocative: ['abarcitūraeve'],
									accusative: ['abarcitūrāsve'],
									genitive: ['abarcitūrārumve'],
									dative: ['abarcitūrīsve'],
									ablative: ['abarcitūrīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitūrumve'],
									vocative: ['abarcitūrumve'],
									accusative: ['abarcitūrumve'],
									genitive: ['abarcitūrīve'],
									dative: ['abarcitūrōve'],
									ablative: ['abarcitūrōve'],
								},
								plural: {
									nominative: ['abarcitūrave'],
									vocative: ['abarcitūrave'],
									accusative: ['abarcitūrave'],
									genitive: ['abarcitūrōrumve'],
									dative: ['abarcitūrīsve'],
									ablative: ['abarcitūrīsve'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abarcitusve'],
									vocative: ['abarciteve'],
									accusative: ['abarcitumve'],
									genitive: ['abarcitīve'],
									dative: ['abarcitōve'],
									ablative: ['abarcitōve'],
								},
								plural: {
									nominative: ['abarcitīve'],
									vocative: ['abarcitīve'],
									accusative: ['abarcitōsve'],
									genitive: ['abarcitōrumve'],
									dative: ['abarcitīsve'],
									ablative: ['abarcitīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcitave'],
									vocative: ['abarcitave'],
									accusative: ['abarcitamve'],
									genitive: ['abarcitaeve'],
									dative: ['abarcitaeve'],
									ablative: ['abarcitāve'],
								},
								plural: {
									nominative: ['abarcitaeve'],
									vocative: ['abarcitaeve'],
									accusative: ['abarcitāsve'],
									genitive: ['abarcitārumve'],
									dative: ['abarcitīsve'],
									ablative: ['abarcitīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcitumve'],
									vocative: ['abarcitumve'],
									accusative: ['abarcitumve'],
									genitive: ['abarcitīve'],
									dative: ['abarcitōve'],
									ablative: ['abarcitōve'],
								},
								plural: {
									nominative: ['abarcitave'],
									vocative: ['abarcitave'],
									accusative: ['abarcitave'],
									genitive: ['abarcitōrumve'],
									dative: ['abarcitīsve'],
									ablative: ['abarcitīsve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abarcendusve'],
									vocative: ['abarcendeve'],
									accusative: ['abarcendumve'],
									genitive: ['abarcendīve'],
									dative: ['abarcendōve'],
									ablative: ['abarcendōve'],
								},
								plural: {
									nominative: ['abarcendīve'],
									vocative: ['abarcendīve'],
									accusative: ['abarcendōsve'],
									genitive: ['abarcendōrumve'],
									dative: ['abarcendīsve'],
									ablative: ['abarcendīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abarcendave'],
									vocative: ['abarcendave'],
									accusative: ['abarcendamve'],
									genitive: ['abarcendaeve'],
									dative: ['abarcendaeve'],
									ablative: ['abarcendāve'],
								},
								plural: {
									nominative: ['abarcendaeve'],
									vocative: ['abarcendaeve'],
									accusative: ['abarcendāsve'],
									genitive: ['abarcendārumve'],
									dative: ['abarcendīsve'],
									ablative: ['abarcendīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abarcendumve'],
									vocative: ['abarcendumve'],
									accusative: ['abarcendumve'],
									genitive: ['abarcendīve'],
									dative: ['abarcendōve'],
									ablative: ['abarcendōve'],
								},
								plural: {
									nominative: ['abarcendave'],
									vocative: ['abarcendave'],
									accusative: ['abarcendave'],
									genitive: ['abarcendōrumve'],
									dative: ['abarcendīsve'],
									ablative: ['abarcendīsve'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abarcendumve'],
					genitive: ['abarcendīve'],
					dative: ['abarcendōve'],
					ablative: ['abarcendōve'],
				},
				supine: {
					accusative: ['abarcitumve'],
					ablative: ['abarcitūve'],
				},
			},
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
		Lemma: 'abdicō',
		Forms: {
			unencliticized: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdicō'],
								second: ['abdicās'],
								third: ['abdicat'],
							},
							plural: {
								first: ['abdicāmus'],
								second: ['abdicātis'],
								third: ['abdicant'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābam'],
								second: ['abdicābās'],
								third: ['abdicābat'],
							},
							plural: {
								first: ['abdicābāmus'],
								second: ['abdicābātis'],
								third: ['abdicābant'],
							},
						},
						future: {
							singular: {
								first: ['abdicābō'],
								second: ['abdicābis'],
								third: ['abdicābit'],
							},
							plural: {
								first: ['abdicābimus'],
								second: ['abdicābitis'],
								third: ['abdicābunt'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāvī'],
								second: ['abdicāvistī', 'abdicāstī'],
								third: ['abdicāvit'],
							},
							plural: {
								first: ['abdicāvimus'],
								second: ['abdicāvistis', 'abdicāstis'],
								third: ['abdicāvērunt', 'abdicārunt', 'abdicāvēre'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāveram', 'abdicāram'],
								second: ['abdicāverās', 'abdicārās'],
								third: ['abdicāverat', 'abdicārat'],
							},
							plural: {
								first: ['abdicāverāmus', 'abdicārāmus'],
								second: ['abdicāverātis', 'abdicārātis'],
								third: ['abdicāverant', 'abdicārant'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdicāverō', 'abdicārō'],
								second: ['abdicāveris', 'abdicāris'],
								third: ['abdicāverit', 'abdicārit'],
							},
							plural: {
								first: ['abdicāverimus', 'abdicārimus'],
								second: ['abdicāveritis', 'abdicāritis'],
								third: ['abdicāverint', 'abdicārint'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicor'],
								second: ['abdicāris', 'abdicāre'],
								third: ['abdicātur'],
							},
							plural: {
								first: ['abdicāmur'],
								second: ['abdicāminī'],
								third: ['abdicantur'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābar'],
								second: ['abdicābāris', 'abdicābāre'],
								third: ['abdicābātur'],
							},
							plural: {
								first: ['abdicābāmur'],
								second: ['abdicābāminī'],
								third: ['abdicābantur'],
							},
						},
						future: {
							singular: {
								first: ['abdicābor'],
								second: ['abdicāberis', 'abdicābere'],
								third: ['abdicābitur'],
							},
							plural: {
								first: ['abdicābimur'],
								second: ['abdicābiminī'],
								third: ['abdicābuntur'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdicem'],
								second: ['abdicēs'],
								third: ['abdicet'],
							},
							plural: {
								first: ['abdicēmus'],
								second: ['abdicētis'],
								third: ['abdicent'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicārem'],
								second: ['abdicārēs'],
								third: ['abdicāret'],
							},
							plural: {
								first: ['abdicārēmus'],
								second: ['abdicārētis'],
								third: ['abdicārent'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāverim', 'abdicārim'],
								second: ['abdicāverīs', 'abdicārīs'],
								third: ['abdicāverit', 'abdicārit'],
							},
							plural: {
								first: ['abdicāverīmus', 'abdicārīmus'],
								second: ['abdicāverītis', 'abdicārītis'],
								third: ['abdicāverint', 'abdicārint'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāvissem', 'abdicāssem'],
								second: ['abdicāvissēs', 'abdicāssēs'],
								third: ['abdicāvisset', 'abdicāsset'],
							},
							plural: {
								first: ['abdicāvissēmus', 'abdicāssēmus'],
								second: ['abdicāvissētis', 'abdicāssētis'],
								third: ['abdicāvissent', 'abdicāssent'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicer'],
								second: ['abdicēris', 'abdicēre'],
								third: ['abdicētur'],
							},
							plural: {
								first: ['abdicēmur'],
								second: ['abdicēminī'],
								third: ['abdicentur'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicārer'],
								second: ['abdicārēris', 'abdicārēre'],
								third: ['abdicārētur'],
							},
							plural: {
								first: ['abdicārēmur'],
								second: ['abdicārēminī'],
								third: ['abdicārentur'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdicā'],
							},
							plural: {
								second: ['abdicāte'],
							},
						},
						future: {
							singular: {
								second: ['abdicātō'],
								third: ['abdicātō'],
							},
							plural: {
								second: ['abdicātōte'],
								third: ['abdicantō'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdicāre'],
							},
							plural: {
								second: ['abdicāminī'],
							},
						},
						future: {
							singular: {
								second: ['abdicātor'],
								third: ['abdicātor'],
							},
							plural: {
								third: ['abdicantor'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdicāre'],
						perfect: ['abdicāvisse', 'abdicāsse'],
					},
					passive: {
						present: ['abdicārī'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdicāns'],
									vocative: ['abdicāns'],
									accusative: ['abdicantem'],
									genitive: ['abdicantis'],
									dative: ['abdicantī'],
									ablative: ['abdicantī', 'abdicante'],
								},
								plural: {
									nominative: ['abdicantēs'],
									vocative: ['abdicantēs'],
									accusative: ['abdicantēs', 'abdicantīs'],
									genitive: ['abdicantium'],
									dative: ['abdicantibus'],
									ablative: ['abdicantibus'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicāns'],
									vocative: ['abdicāns'],
									accusative: ['abdicantem'],
									genitive: ['abdicantis'],
									dative: ['abdicantī'],
									ablative: ['abdicantī', 'abdicante'],
								},
								plural: {
									nominative: ['abdicantēs'],
									vocative: ['abdicantēs'],
									accusative: ['abdicantēs', 'abdicantīs'],
									genitive: ['abdicantium'],
									dative: ['abdicantibus'],
									ablative: ['abdicantibus'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicāns'],
									vocative: ['abdicāns'],
									accusative: ['abdicāns'],
									genitive: ['abdicantis'],
									dative: ['abdicantī'],
									ablative: ['abdicantī', 'abdicante'],
								},
								plural: {
									nominative: ['abdicantia'],
									vocative: ['abdicantia'],
									accusative: ['abdicantia'],
									genitive: ['abdicantium'],
									dative: ['abdicantibus'],
									ablative: ['abdicantibus'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicātūrus'],
									vocative: ['abdicātūre'],
									accusative: ['abdicātūrum'],
									genitive: ['abdicātūrī'],
									dative: ['abdicātūrō'],
									ablative: ['abdicātūrō'],
								},
								plural: {
									nominative: ['abdicātūrī'],
									vocative: ['abdicātūrī'],
									accusative: ['abdicātūrōs'],
									genitive: ['abdicātūrōrum'],
									dative: ['abdicātūrīs'],
									ablative: ['abdicātūrīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātūra'],
									vocative: ['abdicātūra'],
									accusative: ['abdicātūram'],
									genitive: ['abdicātūrae'],
									dative: ['abdicātūrae'],
									ablative: ['abdicātūrā'],
								},
								plural: {
									nominative: ['abdicātūrae'],
									vocative: ['abdicātūrae'],
									accusative: ['abdicātūrās'],
									genitive: ['abdicātūrārum'],
									dative: ['abdicātūrīs'],
									ablative: ['abdicātūrīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātūrum'],
									vocative: ['abdicātūrum'],
									accusative: ['abdicātūrum'],
									genitive: ['abdicātūrī'],
									dative: ['abdicātūrō'],
									ablative: ['abdicātūrō'],
								},
								plural: {
									nominative: ['abdicātūra'],
									vocative: ['abdicātūra'],
									accusative: ['abdicātūra'],
									genitive: ['abdicātūrōrum'],
									dative: ['abdicātūrīs'],
									ablative: ['abdicātūrīs'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdicātus'],
									vocative: ['abdicāte'],
									accusative: ['abdicātum'],
									genitive: ['abdicātī'],
									dative: ['abdicātō'],
									ablative: ['abdicātō'],
								},
								plural: {
									nominative: ['abdicātī'],
									vocative: ['abdicātī'],
									accusative: ['abdicātōs'],
									genitive: ['abdicātōrum'],
									dative: ['abdicātīs'],
									ablative: ['abdicātīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicāta'],
									vocative: ['abdicāta'],
									accusative: ['abdicātam'],
									genitive: ['abdicātae'],
									dative: ['abdicātae'],
									ablative: ['abdicātā'],
								},
								plural: {
									nominative: ['abdicātae'],
									vocative: ['abdicātae'],
									accusative: ['abdicātās'],
									genitive: ['abdicātārum'],
									dative: ['abdicātīs'],
									ablative: ['abdicātīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātum'],
									vocative: ['abdicātum'],
									accusative: ['abdicātum'],
									genitive: ['abdicātī'],
									dative: ['abdicātō'],
									ablative: ['abdicātō'],
								},
								plural: {
									nominative: ['abdicāta'],
									vocative: ['abdicāta'],
									accusative: ['abdicāta'],
									genitive: ['abdicātōrum'],
									dative: ['abdicātīs'],
									ablative: ['abdicātīs'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicandus'],
									vocative: ['abdicande'],
									accusative: ['abdicandum'],
									genitive: ['abdicandī'],
									dative: ['abdicandō'],
									ablative: ['abdicandō'],
								},
								plural: {
									nominative: ['abdicandī'],
									vocative: ['abdicandī'],
									accusative: ['abdicandōs'],
									genitive: ['abdicandōrum'],
									dative: ['abdicandīs'],
									ablative: ['abdicandīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicanda'],
									vocative: ['abdicanda'],
									accusative: ['abdicandam'],
									genitive: ['abdicandae'],
									dative: ['abdicandae'],
									ablative: ['abdicandā'],
								},
								plural: {
									nominative: ['abdicandae'],
									vocative: ['abdicandae'],
									accusative: ['abdicandās'],
									genitive: ['abdicandārum'],
									dative: ['abdicandīs'],
									ablative: ['abdicandīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicandum'],
									vocative: ['abdicandum'],
									accusative: ['abdicandum'],
									genitive: ['abdicandī'],
									dative: ['abdicandō'],
									ablative: ['abdicandō'],
								},
								plural: {
									nominative: ['abdicanda'],
									vocative: ['abdicanda'],
									accusative: ['abdicanda'],
									genitive: ['abdicandōrum'],
									dative: ['abdicandīs'],
									ablative: ['abdicandīs'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdicandum'],
					genitive: ['abdicandī'],
					dative: ['abdicandō'],
					ablative: ['abdicandō'],
				},
				supine: {
					accusative: ['abdicātum'],
					ablative: ['abdicātū'],
				},
			},
			ne: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdicōne'],
								second: ['abdicāsne'],
								third: ['abdicatne'],
							},
							plural: {
								first: ['abdicāmusne'],
								second: ['abdicātisne'],
								third: ['abdicantne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābamne'],
								second: ['abdicābāsne'],
								third: ['abdicābatne'],
							},
							plural: {
								first: ['abdicābāmusne'],
								second: ['abdicābātisne'],
								third: ['abdicābantne'],
							},
						},
						future: {
							singular: {
								first: ['abdicābōne'],
								second: ['abdicābisne'],
								third: ['abdicābitne'],
							},
							plural: {
								first: ['abdicābimusne'],
								second: ['abdicābitisne'],
								third: ['abdicābuntne'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāvīne'],
								second: ['abdicāvistīne', 'abdicāstīne'],
								third: ['abdicāvitne'],
							},
							plural: {
								first: ['abdicāvimusne'],
								second: ['abdicāvistisne', 'abdicāstisne'],
								third: ['abdicāvēruntne', 'abdicāruntne', 'abdicāvērene'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāveramne', 'abdicāramne'],
								second: ['abdicāverāsne', 'abdicārāsne'],
								third: ['abdicāveratne', 'abdicāratne'],
							},
							plural: {
								first: ['abdicāverāmusne', 'abdicārāmusne'],
								second: ['abdicāverātisne', 'abdicārātisne'],
								third: ['abdicāverantne', 'abdicārantne'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdicāverōne', 'abdicārōne'],
								second: ['abdicāverisne', 'abdicārisne'],
								third: ['abdicāveritne', 'abdicāritne'],
							},
							plural: {
								first: ['abdicāverimusne', 'abdicārimusne'],
								second: ['abdicāveritisne', 'abdicāritisne'],
								third: ['abdicāverintne', 'abdicārintne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicorne'],
								second: ['abdicārisne', 'abdicārene'],
								third: ['abdicāturne'],
							},
							plural: {
								first: ['abdicāmurne'],
								second: ['abdicāminīne'],
								third: ['abdicanturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābarne'],
								second: ['abdicābārisne', 'abdicābārene'],
								third: ['abdicābāturne'],
							},
							plural: {
								first: ['abdicābāmurne'],
								second: ['abdicābāminīne'],
								third: ['abdicābanturne'],
							},
						},
						future: {
							singular: {
								first: ['abdicāborne'],
								second: ['abdicāberisne', 'abdicāberene'],
								third: ['abdicābiturne'],
							},
							plural: {
								first: ['abdicābimurne'],
								second: ['abdicābiminīne'],
								third: ['abdicābunturne'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdicemne'],
								second: ['abdicēsne'],
								third: ['abdicetne'],
							},
							plural: {
								first: ['abdicēmusne'],
								second: ['abdicētisne'],
								third: ['abdicentne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicāremne'],
								second: ['abdicārēsne'],
								third: ['abdicāretne'],
							},
							plural: {
								first: ['abdicārēmusne'],
								second: ['abdicārētisne'],
								third: ['abdicārentne'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāverimne', 'abdicārimne'],
								second: ['abdicāverīsne', 'abdicārīsne'],
								third: ['abdicāveritne', 'abdicāritne'],
							},
							plural: {
								first: ['abdicāverīmusne', 'abdicārīmusne'],
								second: ['abdicāverītisne', 'abdicārītisne'],
								third: ['abdicāverintne', 'abdicārintne'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāvissemne', 'abdicāssemne'],
								second: ['abdicāvissēsne', 'abdicāssēsne'],
								third: ['abdicāvissetne', 'abdicāssetne'],
							},
							plural: {
								first: ['abdicāvissēmusne', 'abdicāssēmusne'],
								second: ['abdicāvissētisne', 'abdicāssētisne'],
								third: ['abdicāvissentne', 'abdicāssentne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicerne'],
								second: ['abdicērisne', 'abdicērene'],
								third: ['abdicēturne'],
							},
							plural: {
								first: ['abdicēmurne'],
								second: ['abdicēminīne'],
								third: ['abdicenturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicārerne'],
								second: ['abdicārērisne', 'abdicārērene'],
								third: ['abdicārēturne'],
							},
							plural: {
								first: ['abdicārēmurne'],
								second: ['abdicārēminīne'],
								third: ['abdicārenturne'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdicāne'],
							},
							plural: {
								second: ['abdicātene'],
							},
						},
						future: {
							singular: {
								second: ['abdicātōne'],
								third: ['abdicātōne'],
							},
							plural: {
								second: ['abdicātōtene'],
								third: ['abdicantōne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdicārene'],
							},
							plural: {
								second: ['abdicāminīne'],
							},
						},
						future: {
							singular: {
								second: ['abdicātorne'],
								third: ['abdicātorne'],
							},
							plural: {
								third: ['abdicantorne'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdicārene'],
						perfect: ['abdicāvissene', 'abdicāssene'],
					},
					passive: {
						present: ['abdicārīne'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdicānsne'],
									vocative: ['abdicānsne'],
									accusative: ['abdicantemne'],
									genitive: ['abdicantisne'],
									dative: ['abdicantīne'],
									ablative: ['abdicantīne', 'abdicantene'],
								},
								plural: {
									nominative: ['abdicantēsne'],
									vocative: ['abdicantēsne'],
									accusative: ['abdicantēsne', 'abdicantīsne'],
									genitive: ['abdicantiumne'],
									dative: ['abdicantibusne'],
									ablative: ['abdicantibusne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicānsne'],
									vocative: ['abdicānsne'],
									accusative: ['abdicantemne'],
									genitive: ['abdicantisne'],
									dative: ['abdicantīne'],
									ablative: ['abdicantīne', 'abdicantene'],
								},
								plural: {
									nominative: ['abdicantēsne'],
									vocative: ['abdicantēsne'],
									accusative: ['abdicantēsne', 'abdicantīsne'],
									genitive: ['abdicantiumne'],
									dative: ['abdicantibusne'],
									ablative: ['abdicantibusne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicānsne'],
									vocative: ['abdicānsne'],
									accusative: ['abdicānsne'],
									genitive: ['abdicantisne'],
									dative: ['abdicantīne'],
									ablative: ['abdicantīne', 'abdicantene'],
								},
								plural: {
									nominative: ['abdicantiane'],
									vocative: ['abdicantiane'],
									accusative: ['abdicantiane'],
									genitive: ['abdicantiumne'],
									dative: ['abdicantibusne'],
									ablative: ['abdicantibusne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicātūrusne'],
									vocative: ['abdicātūrene'],
									accusative: ['abdicātūrumne'],
									genitive: ['abdicātūrīne'],
									dative: ['abdicātūrōne'],
									ablative: ['abdicātūrōne'],
								},
								plural: {
									nominative: ['abdicātūrīne'],
									vocative: ['abdicātūrīne'],
									accusative: ['abdicātūrōsne'],
									genitive: ['abdicātūrōrumne'],
									dative: ['abdicātūrīsne'],
									ablative: ['abdicātūrīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātūrane'],
									vocative: ['abdicātūrane'],
									accusative: ['abdicātūramne'],
									genitive: ['abdicātūraene'],
									dative: ['abdicātūraene'],
									ablative: ['abdicātūrāne'],
								},
								plural: {
									nominative: ['abdicātūraene'],
									vocative: ['abdicātūraene'],
									accusative: ['abdicātūrāsne'],
									genitive: ['abdicātūrārumne'],
									dative: ['abdicātūrīsne'],
									ablative: ['abdicātūrīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātūrumne'],
									vocative: ['abdicātūrumne'],
									accusative: ['abdicātūrumne'],
									genitive: ['abdicātūrīne'],
									dative: ['abdicātūrōne'],
									ablative: ['abdicātūrōne'],
								},
								plural: {
									nominative: ['abdicātūrane'],
									vocative: ['abdicātūrane'],
									accusative: ['abdicātūrane'],
									genitive: ['abdicātūrōrumne'],
									dative: ['abdicātūrīsne'],
									ablative: ['abdicātūrīsne'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdicātusne'],
									vocative: ['abdicātene'],
									accusative: ['abdicātumne'],
									genitive: ['abdicātīne'],
									dative: ['abdicātōne'],
									ablative: ['abdicātōne'],
								},
								plural: {
									nominative: ['abdicātīne'],
									vocative: ['abdicātīne'],
									accusative: ['abdicātōsne'],
									genitive: ['abdicātōrumne'],
									dative: ['abdicātīsne'],
									ablative: ['abdicātīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātane'],
									vocative: ['abdicātane'],
									accusative: ['abdicātamne'],
									genitive: ['abdicātaene'],
									dative: ['abdicātaene'],
									ablative: ['abdicātāne'],
								},
								plural: {
									nominative: ['abdicātaene'],
									vocative: ['abdicātaene'],
									accusative: ['abdicātāsne'],
									genitive: ['abdicātārumne'],
									dative: ['abdicātīsne'],
									ablative: ['abdicātīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātumne'],
									vocative: ['abdicātumne'],
									accusative: ['abdicātumne'],
									genitive: ['abdicātīne'],
									dative: ['abdicātōne'],
									ablative: ['abdicātōne'],
								},
								plural: {
									nominative: ['abdicātane'],
									vocative: ['abdicātane'],
									accusative: ['abdicātane'],
									genitive: ['abdicātōrumne'],
									dative: ['abdicātīsne'],
									ablative: ['abdicātīsne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicandusne'],
									vocative: ['abdicandene'],
									accusative: ['abdicandumne'],
									genitive: ['abdicandīne'],
									dative: ['abdicandōne'],
									ablative: ['abdicandōne'],
								},
								plural: {
									nominative: ['abdicandīne'],
									vocative: ['abdicandīne'],
									accusative: ['abdicandōsne'],
									genitive: ['abdicandōrumne'],
									dative: ['abdicandīsne'],
									ablative: ['abdicandīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicandane'],
									vocative: ['abdicandane'],
									accusative: ['abdicandamne'],
									genitive: ['abdicandaene'],
									dative: ['abdicandaene'],
									ablative: ['abdicandāne'],
								},
								plural: {
									nominative: ['abdicandaene'],
									vocative: ['abdicandaene'],
									accusative: ['abdicandāsne'],
									genitive: ['abdicandārumne'],
									dative: ['abdicandīsne'],
									ablative: ['abdicandīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicandumne'],
									vocative: ['abdicandumne'],
									accusative: ['abdicandumne'],
									genitive: ['abdicandīne'],
									dative: ['abdicandōne'],
									ablative: ['abdicandōne'],
								},
								plural: {
									nominative: ['abdicandane'],
									vocative: ['abdicandane'],
									accusative: ['abdicandane'],
									genitive: ['abdicandōrumne'],
									dative: ['abdicandīsne'],
									ablative: ['abdicandīsne'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdicandumne'],
					genitive: ['abdicandīne'],
					dative: ['abdicandōne'],
					ablative: ['abdicandōne'],
				},
				supine: {
					accusative: ['abdicātumne'],
					ablative: ['abdicātūne'],
				},
			},
			que: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdicōque'],
								second: ['abdicāsque'],
								third: ['abdicatque'],
							},
							plural: {
								first: ['abdicāmusque'],
								second: ['abdicātisque'],
								third: ['abdicantque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābamque'],
								second: ['abdicābāsque'],
								third: ['abdicābatque'],
							},
							plural: {
								first: ['abdicābāmusque'],
								second: ['abdicābātisque'],
								third: ['abdicābantque'],
							},
						},
						future: {
							singular: {
								first: ['abdicābōque'],
								second: ['abdicābisque'],
								third: ['abdicābitque'],
							},
							plural: {
								first: ['abdicābimusque'],
								second: ['abdicābitisque'],
								third: ['abdicābuntque'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāvīque'],
								second: ['abdicāvistīque', 'abdicāstīque'],
								third: ['abdicāvitque'],
							},
							plural: {
								first: ['abdicāvimusque'],
								second: ['abdicāvistisque', 'abdicāstisque'],
								third: ['abdicāvēruntque', 'abdicāruntque', 'abdicāvēreque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāveramque', 'abdicāramque'],
								second: ['abdicāverāsque', 'abdicārāsque'],
								third: ['abdicāveratque', 'abdicāratque'],
							},
							plural: {
								first: ['abdicāverāmusque', 'abdicārāmusque'],
								second: ['abdicāverātisque', 'abdicārātisque'],
								third: ['abdicāverantque', 'abdicārantque'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdicāverōque', 'abdicārōque'],
								second: ['abdicāverisque', 'abdicārisque'],
								third: ['abdicāveritque', 'abdicāritque'],
							},
							plural: {
								first: ['abdicāverimusque', 'abdicārimusque'],
								second: ['abdicāveritisque', 'abdicāritisque'],
								third: ['abdicāverintque', 'abdicārintque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicorque'],
								second: ['abdicārisque', 'abdicāreque'],
								third: ['abdicāturque'],
							},
							plural: {
								first: ['abdicāmurque'],
								second: ['abdicāminīque'],
								third: ['abdicanturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābarque'],
								second: ['abdicābārisque', 'abdicābāreque'],
								third: ['abdicābāturque'],
							},
							plural: {
								first: ['abdicābāmurque'],
								second: ['abdicābāminīque'],
								third: ['abdicābanturque'],
							},
						},
						future: {
							singular: {
								first: ['abdicāborque'],
								second: ['abdicāberisque', 'abdicābereque'],
								third: ['abdicābiturque'],
							},
							plural: {
								first: ['abdicābimurque'],
								second: ['abdicābiminīque'],
								third: ['abdicābunturque'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdicemque'],
								second: ['abdicēsque'],
								third: ['abdicetque'],
							},
							plural: {
								first: ['abdicēmusque'],
								second: ['abdicētisque'],
								third: ['abdicentque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicāremque'],
								second: ['abdicārēsque'],
								third: ['abdicāretque'],
							},
							plural: {
								first: ['abdicārēmusque'],
								second: ['abdicārētisque'],
								third: ['abdicārentque'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāverimque', 'abdicārimque'],
								second: ['abdicāverīsque', 'abdicārīsque'],
								third: ['abdicāveritque', 'abdicāritque'],
							},
							plural: {
								first: ['abdicāverīmusque', 'abdicārīmusque'],
								second: ['abdicāverītisque', 'abdicārītisque'],
								third: ['abdicāverintque', 'abdicārintque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāvissemque', 'abdicāssemque'],
								second: ['abdicāvissēsque', 'abdicāssēsque'],
								third: ['abdicāvissetque', 'abdicāssetque'],
							},
							plural: {
								first: ['abdicāvissēmusque', 'abdicāssēmusque'],
								second: ['abdicāvissētisque', 'abdicāssētisque'],
								third: ['abdicāvissentque', 'abdicāssentque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicerque'],
								second: ['abdicērisque', 'abdicēreque'],
								third: ['abdicēturque'],
							},
							plural: {
								first: ['abdicēmurque'],
								second: ['abdicēminīque'],
								third: ['abdicenturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicārerque'],
								second: ['abdicārērisque', 'abdicārēreque'],
								third: ['abdicārēturque'],
							},
							plural: {
								first: ['abdicārēmurque'],
								second: ['abdicārēminīque'],
								third: ['abdicārenturque'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdicāque'],
							},
							plural: {
								second: ['abdicāteque'],
							},
						},
						future: {
							singular: {
								second: ['abdicātōque'],
								third: ['abdicātōque'],
							},
							plural: {
								second: ['abdicātōteque'],
								third: ['abdicantōque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdicāreque'],
							},
							plural: {
								second: ['abdicāminīque'],
							},
						},
						future: {
							singular: {
								second: ['abdicātorque'],
								third: ['abdicātorque'],
							},
							plural: {
								third: ['abdicantorque'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdicāreque'],
						perfect: ['abdicāvisseque', 'abdicāsseque'],
					},
					passive: {
						present: ['abdicārīque'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdicānsque'],
									vocative: ['abdicānsque'],
									accusative: ['abdicantemque'],
									genitive: ['abdicantisque'],
									dative: ['abdicantīque'],
									ablative: ['abdicantīque', 'abdicanteque'],
								},
								plural: {
									nominative: ['abdicantēsque'],
									vocative: ['abdicantēsque'],
									accusative: ['abdicantēsque', 'abdicantīsque'],
									genitive: ['abdicantiumque'],
									dative: ['abdicantibusque'],
									ablative: ['abdicantibusque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicānsque'],
									vocative: ['abdicānsque'],
									accusative: ['abdicantemque'],
									genitive: ['abdicantisque'],
									dative: ['abdicantīque'],
									ablative: ['abdicantīque', 'abdicanteque'],
								},
								plural: {
									nominative: ['abdicantēsque'],
									vocative: ['abdicantēsque'],
									accusative: ['abdicantēsque', 'abdicantīsque'],
									genitive: ['abdicantiumque'],
									dative: ['abdicantibusque'],
									ablative: ['abdicantibusque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicānsque'],
									vocative: ['abdicānsque'],
									accusative: ['abdicānsque'],
									genitive: ['abdicantisque'],
									dative: ['abdicantīque'],
									ablative: ['abdicantīque', 'abdicanteque'],
								},
								plural: {
									nominative: ['abdicantiaque'],
									vocative: ['abdicantiaque'],
									accusative: ['abdicantiaque'],
									genitive: ['abdicantiumque'],
									dative: ['abdicantibusque'],
									ablative: ['abdicantibusque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicātūrusque'],
									vocative: ['abdicātūreque'],
									accusative: ['abdicātūrumque'],
									genitive: ['abdicātūrīque'],
									dative: ['abdicātūrōque'],
									ablative: ['abdicātūrōque'],
								},
								plural: {
									nominative: ['abdicātūrīque'],
									vocative: ['abdicātūrīque'],
									accusative: ['abdicātūrōsque'],
									genitive: ['abdicātūrōrumque'],
									dative: ['abdicātūrīsque'],
									ablative: ['abdicātūrīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātūraque'],
									vocative: ['abdicātūraque'],
									accusative: ['abdicātūramque'],
									genitive: ['abdicātūraeque'],
									dative: ['abdicātūraeque'],
									ablative: ['abdicātūrāque'],
								},
								plural: {
									nominative: ['abdicātūraeque'],
									vocative: ['abdicātūraeque'],
									accusative: ['abdicātūrāsque'],
									genitive: ['abdicātūrārumque'],
									dative: ['abdicātūrīsque'],
									ablative: ['abdicātūrīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātūrumque'],
									vocative: ['abdicātūrumque'],
									accusative: ['abdicātūrumque'],
									genitive: ['abdicātūrīque'],
									dative: ['abdicātūrōque'],
									ablative: ['abdicātūrōque'],
								},
								plural: {
									nominative: ['abdicātūraque'],
									vocative: ['abdicātūraque'],
									accusative: ['abdicātūraque'],
									genitive: ['abdicātūrōrumque'],
									dative: ['abdicātūrīsque'],
									ablative: ['abdicātūrīsque'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdicātusque'],
									vocative: ['abdicāteque'],
									accusative: ['abdicātumque'],
									genitive: ['abdicātīque'],
									dative: ['abdicātōque'],
									ablative: ['abdicātōque'],
								},
								plural: {
									nominative: ['abdicātīque'],
									vocative: ['abdicātīque'],
									accusative: ['abdicātōsque'],
									genitive: ['abdicātōrumque'],
									dative: ['abdicātīsque'],
									ablative: ['abdicātīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātaque'],
									vocative: ['abdicātaque'],
									accusative: ['abdicātamque'],
									genitive: ['abdicātaeque'],
									dative: ['abdicātaeque'],
									ablative: ['abdicātāque'],
								},
								plural: {
									nominative: ['abdicātaeque'],
									vocative: ['abdicātaeque'],
									accusative: ['abdicātāsque'],
									genitive: ['abdicātārumque'],
									dative: ['abdicātīsque'],
									ablative: ['abdicātīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātumque'],
									vocative: ['abdicātumque'],
									accusative: ['abdicātumque'],
									genitive: ['abdicātīque'],
									dative: ['abdicātōque'],
									ablative: ['abdicātōque'],
								},
								plural: {
									nominative: ['abdicātaque'],
									vocative: ['abdicātaque'],
									accusative: ['abdicātaque'],
									genitive: ['abdicātōrumque'],
									dative: ['abdicātīsque'],
									ablative: ['abdicātīsque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicandusque'],
									vocative: ['abdicandeque'],
									accusative: ['abdicandumque'],
									genitive: ['abdicandīque'],
									dative: ['abdicandōque'],
									ablative: ['abdicandōque'],
								},
								plural: {
									nominative: ['abdicandīque'],
									vocative: ['abdicandīque'],
									accusative: ['abdicandōsque'],
									genitive: ['abdicandōrumque'],
									dative: ['abdicandīsque'],
									ablative: ['abdicandīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicandaque'],
									vocative: ['abdicandaque'],
									accusative: ['abdicandamque'],
									genitive: ['abdicandaeque'],
									dative: ['abdicandaeque'],
									ablative: ['abdicandāque'],
								},
								plural: {
									nominative: ['abdicandaeque'],
									vocative: ['abdicandaeque'],
									accusative: ['abdicandāsque'],
									genitive: ['abdicandārumque'],
									dative: ['abdicandīsque'],
									ablative: ['abdicandīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicandumque'],
									vocative: ['abdicandumque'],
									accusative: ['abdicandumque'],
									genitive: ['abdicandīque'],
									dative: ['abdicandōque'],
									ablative: ['abdicandōque'],
								},
								plural: {
									nominative: ['abdicandaque'],
									vocative: ['abdicandaque'],
									accusative: ['abdicandaque'],
									genitive: ['abdicandōrumque'],
									dative: ['abdicandīsque'],
									ablative: ['abdicandīsque'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdicandumque'],
					genitive: ['abdicandīque'],
					dative: ['abdicandōque'],
					ablative: ['abdicandōque'],
				},
				supine: {
					accusative: ['abdicātumque'],
					ablative: ['abdicātūque'],
				},
			},
			ve: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdicōve'],
								second: ['abdicāsve'],
								third: ['abdicatve'],
							},
							plural: {
								first: ['abdicāmusve'],
								second: ['abdicātisve'],
								third: ['abdicantve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābamve'],
								second: ['abdicābāsve'],
								third: ['abdicābatve'],
							},
							plural: {
								first: ['abdicābāmusve'],
								second: ['abdicābātisve'],
								third: ['abdicābantve'],
							},
						},
						future: {
							singular: {
								first: ['abdicābōve'],
								second: ['abdicābisve'],
								third: ['abdicābitve'],
							},
							plural: {
								first: ['abdicābimusve'],
								second: ['abdicābitisve'],
								third: ['abdicābuntve'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāvīve'],
								second: ['abdicāvistīve', 'abdicāstīve'],
								third: ['abdicāvitve'],
							},
							plural: {
								first: ['abdicāvimusve'],
								second: ['abdicāvistisve', 'abdicāstisve'],
								third: ['abdicāvēruntve', 'abdicāruntve', 'abdicāvēreve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāveramve', 'abdicāramve'],
								second: ['abdicāverāsve', 'abdicārāsve'],
								third: ['abdicāveratve', 'abdicāratve'],
							},
							plural: {
								first: ['abdicāverāmusve', 'abdicārāmusve'],
								second: ['abdicāverātisve', 'abdicārātisve'],
								third: ['abdicāverantve', 'abdicārantve'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdicāverōve', 'abdicārōve'],
								second: ['abdicāverisve', 'abdicārisve'],
								third: ['abdicāveritve', 'abdicāritve'],
							},
							plural: {
								first: ['abdicāverimusve', 'abdicārimusve'],
								second: ['abdicāveritisve', 'abdicāritisve'],
								third: ['abdicāverintve', 'abdicārintve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicorve'],
								second: ['abdicārisve', 'abdicāreve'],
								third: ['abdicāturve'],
							},
							plural: {
								first: ['abdicāmurve'],
								second: ['abdicāminīve'],
								third: ['abdicanturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicābarve'],
								second: ['abdicābārisve', 'abdicābāreve'],
								third: ['abdicābāturve'],
							},
							plural: {
								first: ['abdicābāmurve'],
								second: ['abdicābāminīve'],
								third: ['abdicābanturve'],
							},
						},
						future: {
							singular: {
								first: ['abdicāborve'],
								second: ['abdicāberisve', 'abdicābereve'],
								third: ['abdicābiturve'],
							},
							plural: {
								first: ['abdicābimurve'],
								second: ['abdicābiminīve'],
								third: ['abdicābunturve'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdicemve'],
								second: ['abdicēsve'],
								third: ['abdicetve'],
							},
							plural: {
								first: ['abdicēmusve'],
								second: ['abdicētisve'],
								third: ['abdicentve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicāremve'],
								second: ['abdicārēsve'],
								third: ['abdicāretve'],
							},
							plural: {
								first: ['abdicārēmusve'],
								second: ['abdicārētisve'],
								third: ['abdicārentve'],
							},
						},
						perfect: {
							singular: {
								first: ['abdicāverimve', 'abdicārimve'],
								second: ['abdicāverīsve', 'abdicārīsve'],
								third: ['abdicāveritve', 'abdicāritve'],
							},
							plural: {
								first: ['abdicāverīmusve', 'abdicārīmusve'],
								second: ['abdicāverītisve', 'abdicārītisve'],
								third: ['abdicāverintve', 'abdicārintve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdicāvissemve', 'abdicāssemve'],
								second: ['abdicāvissēsve', 'abdicāssēsve'],
								third: ['abdicāvissetve', 'abdicāssetve'],
							},
							plural: {
								first: ['abdicāvissēmusve', 'abdicāssēmusve'],
								second: ['abdicāvissētisve', 'abdicāssētisve'],
								third: ['abdicāvissentve', 'abdicāssentve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdicerve'],
								second: ['abdicērisve', 'abdicēreve'],
								third: ['abdicēturve'],
							},
							plural: {
								first: ['abdicēmurve'],
								second: ['abdicēminīve'],
								third: ['abdicenturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdicārerve'],
								second: ['abdicārērisve', 'abdicārēreve'],
								third: ['abdicārēturve'],
							},
							plural: {
								first: ['abdicārēmurve'],
								second: ['abdicārēminīve'],
								third: ['abdicārenturve'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdicāve'],
							},
							plural: {
								second: ['abdicāteve'],
							},
						},
						future: {
							singular: {
								second: ['abdicātōve'],
								third: ['abdicātōve'],
							},
							plural: {
								second: ['abdicātōteve'],
								third: ['abdicantōve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdicāreve'],
							},
							plural: {
								second: ['abdicāminīve'],
							},
						},
						future: {
							singular: {
								second: ['abdicātorve'],
								third: ['abdicātorve'],
							},
							plural: {
								third: ['abdicantorve'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdicāreve'],
						perfect: ['abdicāvisseve', 'abdicāsseve'],
					},
					passive: {
						present: ['abdicārīve'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdicānsve'],
									vocative: ['abdicānsve'],
									accusative: ['abdicantemve'],
									genitive: ['abdicantisve'],
									dative: ['abdicantīve'],
									ablative: ['abdicantīve', 'abdicanteve'],
								},
								plural: {
									nominative: ['abdicantēsve'],
									vocative: ['abdicantēsve'],
									accusative: ['abdicantēsve', 'abdicantīsve'],
									genitive: ['abdicantiumve'],
									dative: ['abdicantibusve'],
									ablative: ['abdicantibusve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicānsve'],
									vocative: ['abdicānsve'],
									accusative: ['abdicantemve'],
									genitive: ['abdicantisve'],
									dative: ['abdicantīve'],
									ablative: ['abdicantīve', 'abdicanteve'],
								},
								plural: {
									nominative: ['abdicantēsve'],
									vocative: ['abdicantēsve'],
									accusative: ['abdicantēsve', 'abdicantīsve'],
									genitive: ['abdicantiumve'],
									dative: ['abdicantibusve'],
									ablative: ['abdicantibusve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicānsve'],
									vocative: ['abdicānsve'],
									accusative: ['abdicānsve'],
									genitive: ['abdicantisve'],
									dative: ['abdicantīve'],
									ablative: ['abdicantīve', 'abdicanteve'],
								},
								plural: {
									nominative: ['abdicantiave'],
									vocative: ['abdicantiave'],
									accusative: ['abdicantiave'],
									genitive: ['abdicantiumve'],
									dative: ['abdicantibusve'],
									ablative: ['abdicantibusve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicātūrusve'],
									vocative: ['abdicātūreve'],
									accusative: ['abdicātūrumve'],
									genitive: ['abdicātūrīve'],
									dative: ['abdicātūrōve'],
									ablative: ['abdicātūrōve'],
								},
								plural: {
									nominative: ['abdicātūrīve'],
									vocative: ['abdicātūrīve'],
									accusative: ['abdicātūrōsve'],
									genitive: ['abdicātūrōrumve'],
									dative: ['abdicātūrīsve'],
									ablative: ['abdicātūrīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātūrave'],
									vocative: ['abdicātūrave'],
									accusative: ['abdicātūramve'],
									genitive: ['abdicātūraeve'],
									dative: ['abdicātūraeve'],
									ablative: ['abdicātūrāve'],
								},
								plural: {
									nominative: ['abdicātūraeve'],
									vocative: ['abdicātūraeve'],
									accusative: ['abdicātūrāsve'],
									genitive: ['abdicātūrārumve'],
									dative: ['abdicātūrīsve'],
									ablative: ['abdicātūrīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātūrumve'],
									vocative: ['abdicātūrumve'],
									accusative: ['abdicātūrumve'],
									genitive: ['abdicātūrīve'],
									dative: ['abdicātūrōve'],
									ablative: ['abdicātūrōve'],
								},
								plural: {
									nominative: ['abdicātūrave'],
									vocative: ['abdicātūrave'],
									accusative: ['abdicātūrave'],
									genitive: ['abdicātūrōrumve'],
									dative: ['abdicātūrīsve'],
									ablative: ['abdicātūrīsve'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdicātusve'],
									vocative: ['abdicāteve'],
									accusative: ['abdicātumve'],
									genitive: ['abdicātīve'],
									dative: ['abdicātōve'],
									ablative: ['abdicātōve'],
								},
								plural: {
									nominative: ['abdicātīve'],
									vocative: ['abdicātīve'],
									accusative: ['abdicātōsve'],
									genitive: ['abdicātōrumve'],
									dative: ['abdicātīsve'],
									ablative: ['abdicātīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicātave'],
									vocative: ['abdicātave'],
									accusative: ['abdicātamve'],
									genitive: ['abdicātaeve'],
									dative: ['abdicātaeve'],
									ablative: ['abdicātāve'],
								},
								plural: {
									nominative: ['abdicātaeve'],
									vocative: ['abdicātaeve'],
									accusative: ['abdicātāsve'],
									genitive: ['abdicātārumve'],
									dative: ['abdicātīsve'],
									ablative: ['abdicātīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicātumve'],
									vocative: ['abdicātumve'],
									accusative: ['abdicātumve'],
									genitive: ['abdicātīve'],
									dative: ['abdicātōve'],
									ablative: ['abdicātōve'],
								},
								plural: {
									nominative: ['abdicātave'],
									vocative: ['abdicātave'],
									accusative: ['abdicātave'],
									genitive: ['abdicātōrumve'],
									dative: ['abdicātīsve'],
									ablative: ['abdicātīsve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdicandusve'],
									vocative: ['abdicandeve'],
									accusative: ['abdicandumve'],
									genitive: ['abdicandīve'],
									dative: ['abdicandōve'],
									ablative: ['abdicandōve'],
								},
								plural: {
									nominative: ['abdicandīve'],
									vocative: ['abdicandīve'],
									accusative: ['abdicandōsve'],
									genitive: ['abdicandōrumve'],
									dative: ['abdicandīsve'],
									ablative: ['abdicandīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicandave'],
									vocative: ['abdicandave'],
									accusative: ['abdicandamve'],
									genitive: ['abdicandaeve'],
									dative: ['abdicandaeve'],
									ablative: ['abdicandāve'],
								},
								plural: {
									nominative: ['abdicandaeve'],
									vocative: ['abdicandaeve'],
									accusative: ['abdicandāsve'],
									genitive: ['abdicandārumve'],
									dative: ['abdicandīsve'],
									ablative: ['abdicandīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdicandumve'],
									vocative: ['abdicandumve'],
									accusative: ['abdicandumve'],
									genitive: ['abdicandīve'],
									dative: ['abdicandōve'],
									ablative: ['abdicandōve'],
								},
								plural: {
									nominative: ['abdicandave'],
									vocative: ['abdicandave'],
									accusative: ['abdicandave'],
									genitive: ['abdicandōrumve'],
									dative: ['abdicandīsve'],
									ablative: ['abdicandīsve'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdicandumve'],
					genitive: ['abdicandīve'],
					dative: ['abdicandōve'],
					ablative: ['abdicandōve'],
				},
				supine: {
					accusative: ['abdicātumve'],
					ablative: ['abdicātūve'],
				},
			},
		},
	},
	{
		Lemma: 'abdīcō',
		Forms: {
			unencliticized: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdīcō'],
								second: ['abdīcis'],
								third: ['abdīcit'],
							},
							plural: {
								first: ['abdīcimus'],
								second: ['abdīcitis'],
								third: ['abdīcunt'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbam'],
								second: ['abdīcēbās'],
								third: ['abdīcēbat'],
							},
							plural: {
								first: ['abdīcēbāmus'],
								second: ['abdīcēbātis'],
								third: ['abdīcēbant'],
							},
						},
						future: {
							singular: {
								first: ['abdīcam'],
								second: ['abdīcēs'],
								third: ['abdīcet'],
							},
							plural: {
								first: ['abdīcēmus'],
								second: ['abdīcētis'],
								third: ['abdīcent'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxī'],
								second: ['abdīxistī'],
								third: ['abdīxit'],
							},
							plural: {
								first: ['abdīximus'],
								second: ['abdīxistis'],
								third: ['abdīxērunt', 'abdīxēre'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxeram'],
								second: ['abdīxerās'],
								third: ['abdīxerat'],
							},
							plural: {
								first: ['abdīxerāmus'],
								second: ['abdīxerātis'],
								third: ['abdīxerant'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdīxerō'],
								second: ['abdīxeris'],
								third: ['abdīxerit'],
							},
							plural: {
								first: ['abdīxerimus'],
								second: ['abdīxeritis'],
								third: ['abdīxerint'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcor'],
								second: ['abdīceris', 'abdīcere'],
								third: ['abdīcitur'],
							},
							plural: {
								first: ['abdīcimur'],
								second: ['abdīciminī'],
								third: ['abdīcuntur'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbar'],
								second: ['abdīcēbāris', 'abdīcēbāre'],
								third: ['abdīcēbātur'],
							},
							plural: {
								first: ['abdīcēbāmur'],
								second: ['abdīcēbāminī'],
								third: ['abdīcēbantur'],
							},
						},
						future: {
							singular: {
								first: ['abdīcar'],
								second: ['abdīcēris', 'abdīcēre'],
								third: ['abdīcētur'],
							},
							plural: {
								first: ['abdīcēmur'],
								second: ['abdīcēminī'],
								third: ['abdīcentur'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdīcam'],
								second: ['abdīcās'],
								third: ['abdīcat'],
							},
							plural: {
								first: ['abdīcāmus'],
								second: ['abdīcātis'],
								third: ['abdīcant'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcerem'],
								second: ['abdīcerēs'],
								third: ['abdīceret'],
							},
							plural: {
								first: ['abdīcerēmus'],
								second: ['abdīcerētis'],
								third: ['abdīcerent'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxerim'],
								second: ['abdīxerīs'],
								third: ['abdīxerit'],
							},
							plural: {
								first: ['abdīxerīmus'],
								second: ['abdīxerītis'],
								third: ['abdīxerint'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxissem'],
								second: ['abdīxissēs'],
								third: ['abdīxisset'],
							},
							plural: {
								first: ['abdīxissēmus'],
								second: ['abdīxissētis'],
								third: ['abdīxissent'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcar'],
								second: ['abdīcāris', 'abdīcāre'],
								third: ['abdīcātur'],
							},
							plural: {
								first: ['abdīcāmur'],
								second: ['abdīcāminī'],
								third: ['abdīcantur'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcerer'],
								second: ['abdīcerēris', 'abdīcerēre'],
								third: ['abdīcerētur'],
							},
							plural: {
								first: ['abdīcerēmur'],
								second: ['abdīcerēminī'],
								third: ['abdīcerentur'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdīc'],
							},
							plural: {
								second: ['abdīcite'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitō'],
								third: ['abdīcitō'],
							},
							plural: {
								second: ['abdīcitōte'],
								third: ['abdīcuntō'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdīcere'],
							},
							plural: {
								second: ['abdīciminī'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitor'],
								third: ['abdīcitor'],
							},
							plural: {
								third: ['abdīcuntor'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdīcere'],
						perfect: ['abdīxisse'],
					},
					passive: {
						present: ['abdīcī'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdīcēns'],
									vocative: ['abdīcēns'],
									accusative: ['abdīcentem'],
									genitive: ['abdīcentis'],
									dative: ['abdīcentī'],
									ablative: ['abdīcentī', 'abdīcente'],
								},
								plural: {
									nominative: ['abdīcentēs'],
									vocative: ['abdīcentēs'],
									accusative: ['abdīcentēs', 'abdīcentīs'],
									genitive: ['abdīcentium'],
									dative: ['abdīcentibus'],
									ablative: ['abdīcentibus'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcēns'],
									vocative: ['abdīcēns'],
									accusative: ['abdīcentem'],
									genitive: ['abdīcentis'],
									dative: ['abdīcentī'],
									ablative: ['abdīcentī', 'abdīcente'],
								},
								plural: {
									nominative: ['abdīcentēs'],
									vocative: ['abdīcentēs'],
									accusative: ['abdīcentēs', 'abdīcentīs'],
									genitive: ['abdīcentium'],
									dative: ['abdīcentibus'],
									ablative: ['abdīcentibus'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcēns'],
									vocative: ['abdīcēns'],
									accusative: ['abdīcēns'],
									genitive: ['abdīcentis'],
									dative: ['abdīcentī'],
									ablative: ['abdīcentī', 'abdīcente'],
								},
								plural: {
									nominative: ['abdīcentia'],
									vocative: ['abdīcentia'],
									accusative: ['abdīcentia'],
									genitive: ['abdīcentium'],
									dative: ['abdīcentibus'],
									ablative: ['abdīcentibus'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdictūrus'],
									vocative: ['abdictūre'],
									accusative: ['abdictūrum'],
									genitive: ['abdictūrī'],
									dative: ['abdictūrō'],
									ablative: ['abdictūrō'],
								},
								plural: {
									nominative: ['abdictūrī'],
									vocative: ['abdictūrī'],
									accusative: ['abdictūrōs'],
									genitive: ['abdictūrōrum'],
									dative: ['abdictūrīs'],
									ablative: ['abdictūrīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictūra'],
									vocative: ['abdictūra'],
									accusative: ['abdictūram'],
									genitive: ['abdictūrae'],
									dative: ['abdictūrae'],
									ablative: ['abdictūrā'],
								},
								plural: {
									nominative: ['abdictūrae'],
									vocative: ['abdictūrae'],
									accusative: ['abdictūrās'],
									genitive: ['abdictūrārum'],
									dative: ['abdictūrīs'],
									ablative: ['abdictūrīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictūrum'],
									vocative: ['abdictūrum'],
									accusative: ['abdictūrum'],
									genitive: ['abdictūrī'],
									dative: ['abdictūrō'],
									ablative: ['abdictūrō'],
								},
								plural: {
									nominative: ['abdictūra'],
									vocative: ['abdictūra'],
									accusative: ['abdictūra'],
									genitive: ['abdictūrōrum'],
									dative: ['abdictūrīs'],
									ablative: ['abdictūrīs'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdictus'],
									vocative: ['abdicte'],
									accusative: ['abdictum'],
									genitive: ['abdictī'],
									dative: ['abdictō'],
									ablative: ['abdictō'],
								},
								plural: {
									nominative: ['abdictī'],
									vocative: ['abdictī'],
									accusative: ['abdictōs'],
									genitive: ['abdictōrum'],
									dative: ['abdictīs'],
									ablative: ['abdictīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdicta'],
									vocative: ['abdicta'],
									accusative: ['abdictam'],
									genitive: ['abdictae'],
									dative: ['abdictae'],
									ablative: ['abdictā'],
								},
								plural: {
									nominative: ['abdictae'],
									vocative: ['abdictae'],
									accusative: ['abdictās'],
									genitive: ['abdictārum'],
									dative: ['abdictīs'],
									ablative: ['abdictīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictum'],
									vocative: ['abdictum'],
									accusative: ['abdictum'],
									genitive: ['abdictī'],
									dative: ['abdictō'],
									ablative: ['abdictō'],
								},
								plural: {
									nominative: ['abdicta'],
									vocative: ['abdicta'],
									accusative: ['abdicta'],
									genitive: ['abdictōrum'],
									dative: ['abdictīs'],
									ablative: ['abdictīs'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdīcendus'],
									vocative: ['abdīcende'],
									accusative: ['abdīcendum'],
									genitive: ['abdīcendī'],
									dative: ['abdīcendō'],
									ablative: ['abdīcendō'],
								},
								plural: {
									nominative: ['abdīcendī'],
									vocative: ['abdīcendī'],
									accusative: ['abdīcendōs'],
									genitive: ['abdīcendōrum'],
									dative: ['abdīcendīs'],
									ablative: ['abdīcendīs'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcenda'],
									vocative: ['abdīcenda'],
									accusative: ['abdīcendam'],
									genitive: ['abdīcendae'],
									dative: ['abdīcendae'],
									ablative: ['abdīcendā'],
								},
								plural: {
									nominative: ['abdīcendae'],
									vocative: ['abdīcendae'],
									accusative: ['abdīcendās'],
									genitive: ['abdīcendārum'],
									dative: ['abdīcendīs'],
									ablative: ['abdīcendīs'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcendum'],
									vocative: ['abdīcendum'],
									accusative: ['abdīcendum'],
									genitive: ['abdīcendī'],
									dative: ['abdīcendō'],
									ablative: ['abdīcendō'],
								},
								plural: {
									nominative: ['abdīcenda'],
									vocative: ['abdīcenda'],
									accusative: ['abdīcenda'],
									genitive: ['abdīcendōrum'],
									dative: ['abdīcendīs'],
									ablative: ['abdīcendīs'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdīcendum'],
					genitive: ['abdīcendī'],
					dative: ['abdīcendō'],
					ablative: ['abdīcendō'],
				},
				supine: {
					accusative: ['abdictum'],
					ablative: ['abdictū'],
				},
			},
			ne: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdīcōne'],
								second: ['abdīcisne'],
								third: ['abdīcitne'],
							},
							plural: {
								first: ['abdīcimusne'],
								second: ['abdīcitisne'],
								third: ['abdīcuntne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbamne'],
								second: ['abdīcēbāsne'],
								third: ['abdīcēbatne'],
							},
							plural: {
								first: ['abdīcēbāmusne'],
								second: ['abdīcēbātisne'],
								third: ['abdīcēbantne'],
							},
						},
						future: {
							singular: {
								first: ['abdīcamne'],
								second: ['abdīcēsne'],
								third: ['abdīcetne'],
							},
							plural: {
								first: ['abdīcēmusne'],
								second: ['abdīcētisne'],
								third: ['abdīcentne'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxīne'],
								second: ['abdīxistīne'],
								third: ['abdīxitne'],
							},
							plural: {
								first: ['abdīximusne'],
								second: ['abdīxistisne'],
								third: ['abdīxēruntne', 'abdīxērene'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxeramne'],
								second: ['abdīxerāsne'],
								third: ['abdīxeratne'],
							},
							plural: {
								first: ['abdīxerāmusne'],
								second: ['abdīxerātisne'],
								third: ['abdīxerantne'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdīxerōne'],
								second: ['abdīxerisne'],
								third: ['abdīxeritne'],
							},
							plural: {
								first: ['abdīxerimusne'],
								second: ['abdīxeritisne'],
								third: ['abdīxerintne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcorne'],
								second: ['abdīcerisne', 'abdīcerene'],
								third: ['abdīciturne'],
							},
							plural: {
								first: ['abdīcimurne'],
								second: ['abdīciminīne'],
								third: ['abdīcunturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbarne'],
								second: ['abdīcēbārisne', 'abdīcēbārene'],
								third: ['abdīcēbāturne'],
							},
							plural: {
								first: ['abdīcēbāmurne'],
								second: ['abdīcēbāminīne'],
								third: ['abdīcēbanturne'],
							},
						},
						future: {
							singular: {
								first: ['abdīcarne'],
								second: ['abdīcērisne', 'abdīcērene'],
								third: ['abdīcēturne'],
							},
							plural: {
								first: ['abdīcēmurne'],
								second: ['abdīcēminīne'],
								third: ['abdīcenturne'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdīcamne'],
								second: ['abdīcāsne'],
								third: ['abdīcatne'],
							},
							plural: {
								first: ['abdīcāmusne'],
								second: ['abdīcātisne'],
								third: ['abdīcantne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīceremne'],
								second: ['abdīcerēsne'],
								third: ['abdīceretne'],
							},
							plural: {
								first: ['abdīcerēmusne'],
								second: ['abdīcerētisne'],
								third: ['abdīcerentne'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxerimne'],
								second: ['abdīxerīsne'],
								third: ['abdīxeritne'],
							},
							plural: {
								first: ['abdīxerīmusne'],
								second: ['abdīxerītisne'],
								third: ['abdīxerintne'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxissemne'],
								second: ['abdīxissēsne'],
								third: ['abdīxissetne'],
							},
							plural: {
								first: ['abdīxissēmusne'],
								second: ['abdīxissētisne'],
								third: ['abdīxissentne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcarne'],
								second: ['abdīcārisne', 'abdīcārene'],
								third: ['abdīcāturne'],
							},
							plural: {
								first: ['abdīcāmurne'],
								second: ['abdīcāminīne'],
								third: ['abdīcanturne'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcererne'],
								second: ['abdīcerērisne', 'abdīcerērene'],
								third: ['abdīcerēturne'],
							},
							plural: {
								first: ['abdīcerēmurne'],
								second: ['abdīcerēminīne'],
								third: ['abdīcerenturne'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdīcne'],
							},
							plural: {
								second: ['abdīcitene'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitōne'],
								third: ['abdīcitōne'],
							},
							plural: {
								second: ['abdīcitōtene'],
								third: ['abdīcuntōne'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdīcerene'],
							},
							plural: {
								second: ['abdīciminīne'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitorne'],
								third: ['abdīcitorne'],
							},
							plural: {
								third: ['abdīcuntorne'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdīcerene'],
						perfect: ['abdīxissene'],
					},
					passive: {
						present: ['abdīcīne'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdīcēnsne'],
									vocative: ['abdīcēnsne'],
									accusative: ['abdīcentemne'],
									genitive: ['abdīcentisne'],
									dative: ['abdīcentīne'],
									ablative: ['abdīcentīne', 'abdīcentene'],
								},
								plural: {
									nominative: ['abdīcentēsne'],
									vocative: ['abdīcentēsne'],
									accusative: ['abdīcentēsne', 'abdīcentīsne'],
									genitive: ['abdīcentiumne'],
									dative: ['abdīcentibusne'],
									ablative: ['abdīcentibusne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcēnsne'],
									vocative: ['abdīcēnsne'],
									accusative: ['abdīcentemne'],
									genitive: ['abdīcentisne'],
									dative: ['abdīcentīne'],
									ablative: ['abdīcentīne', 'abdīcentene'],
								},
								plural: {
									nominative: ['abdīcentēsne'],
									vocative: ['abdīcentēsne'],
									accusative: ['abdīcentēsne', 'abdīcentīsne'],
									genitive: ['abdīcentiumne'],
									dative: ['abdīcentibusne'],
									ablative: ['abdīcentibusne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcēnsne'],
									vocative: ['abdīcēnsne'],
									accusative: ['abdīcēnsne'],
									genitive: ['abdīcentisne'],
									dative: ['abdīcentīne'],
									ablative: ['abdīcentīne', 'abdīcentene'],
								},
								plural: {
									nominative: ['abdīcentiane'],
									vocative: ['abdīcentiane'],
									accusative: ['abdīcentiane'],
									genitive: ['abdīcentiumne'],
									dative: ['abdīcentibusne'],
									ablative: ['abdīcentibusne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdictūrusne'],
									vocative: ['abdictūrene'],
									accusative: ['abdictūrumne'],
									genitive: ['abdictūrīne'],
									dative: ['abdictūrōne'],
									ablative: ['abdictūrōne'],
								},
								plural: {
									nominative: ['abdictūrīne'],
									vocative: ['abdictūrīne'],
									accusative: ['abdictūrōsne'],
									genitive: ['abdictūrōrumne'],
									dative: ['abdictūrīsne'],
									ablative: ['abdictūrīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictūrane'],
									vocative: ['abdictūrane'],
									accusative: ['abdictūramne'],
									genitive: ['abdictūraene'],
									dative: ['abdictūraene'],
									ablative: ['abdictūrāne'],
								},
								plural: {
									nominative: ['abdictūraene'],
									vocative: ['abdictūraene'],
									accusative: ['abdictūrāsne'],
									genitive: ['abdictūrārumne'],
									dative: ['abdictūrīsne'],
									ablative: ['abdictūrīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictūrumne'],
									vocative: ['abdictūrumne'],
									accusative: ['abdictūrumne'],
									genitive: ['abdictūrīne'],
									dative: ['abdictūrōne'],
									ablative: ['abdictūrōne'],
								},
								plural: {
									nominative: ['abdictūrane'],
									vocative: ['abdictūrane'],
									accusative: ['abdictūrane'],
									genitive: ['abdictūrōrumne'],
									dative: ['abdictūrīsne'],
									ablative: ['abdictūrīsne'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdictusne'],
									vocative: ['abdictene'],
									accusative: ['abdictumne'],
									genitive: ['abdictīne'],
									dative: ['abdictōne'],
									ablative: ['abdictōne'],
								},
								plural: {
									nominative: ['abdictīne'],
									vocative: ['abdictīne'],
									accusative: ['abdictōsne'],
									genitive: ['abdictōrumne'],
									dative: ['abdictīsne'],
									ablative: ['abdictīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictane'],
									vocative: ['abdictane'],
									accusative: ['abdictamne'],
									genitive: ['abdictaene'],
									dative: ['abdictaene'],
									ablative: ['abdictāne'],
								},
								plural: {
									nominative: ['abdictaene'],
									vocative: ['abdictaene'],
									accusative: ['abdictāsne'],
									genitive: ['abdictārumne'],
									dative: ['abdictīsne'],
									ablative: ['abdictīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictumne'],
									vocative: ['abdictumne'],
									accusative: ['abdictumne'],
									genitive: ['abdictīne'],
									dative: ['abdictōne'],
									ablative: ['abdictōne'],
								},
								plural: {
									nominative: ['abdictane'],
									vocative: ['abdictane'],
									accusative: ['abdictane'],
									genitive: ['abdictōrumne'],
									dative: ['abdictīsne'],
									ablative: ['abdictīsne'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdīcendusne'],
									vocative: ['abdīcendene'],
									accusative: ['abdīcendumne'],
									genitive: ['abdīcendīne'],
									dative: ['abdīcendōne'],
									ablative: ['abdīcendōne'],
								},
								plural: {
									nominative: ['abdīcendīne'],
									vocative: ['abdīcendīne'],
									accusative: ['abdīcendōsne'],
									genitive: ['abdīcendōrumne'],
									dative: ['abdīcendīsne'],
									ablative: ['abdīcendīsne'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcendane'],
									vocative: ['abdīcendane'],
									accusative: ['abdīcendamne'],
									genitive: ['abdīcendaene'],
									dative: ['abdīcendaene'],
									ablative: ['abdīcendāne'],
								},
								plural: {
									nominative: ['abdīcendaene'],
									vocative: ['abdīcendaene'],
									accusative: ['abdīcendāsne'],
									genitive: ['abdīcendārumne'],
									dative: ['abdīcendīsne'],
									ablative: ['abdīcendīsne'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcendumne'],
									vocative: ['abdīcendumne'],
									accusative: ['abdīcendumne'],
									genitive: ['abdīcendīne'],
									dative: ['abdīcendōne'],
									ablative: ['abdīcendōne'],
								},
								plural: {
									nominative: ['abdīcendane'],
									vocative: ['abdīcendane'],
									accusative: ['abdīcendane'],
									genitive: ['abdīcendōrumne'],
									dative: ['abdīcendīsne'],
									ablative: ['abdīcendīsne'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdīcendumne'],
					genitive: ['abdīcendīne'],
					dative: ['abdīcendōne'],
					ablative: ['abdīcendōne'],
				},
				supine: {
					accusative: ['abdictumne'],
					ablative: ['abdictūne'],
				},
			},
			que: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdīcōque'],
								second: ['abdīcisque'],
								third: ['abdīcitque'],
							},
							plural: {
								first: ['abdīcimusque'],
								second: ['abdīcitisque'],
								third: ['abdīcuntque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbamque'],
								second: ['abdīcēbāsque'],
								third: ['abdīcēbatque'],
							},
							plural: {
								first: ['abdīcēbāmusque'],
								second: ['abdīcēbātisque'],
								third: ['abdīcēbantque'],
							},
						},
						future: {
							singular: {
								first: ['abdīcamque'],
								second: ['abdīcēsque'],
								third: ['abdīcetque'],
							},
							plural: {
								first: ['abdīcēmusque'],
								second: ['abdīcētisque'],
								third: ['abdīcentque'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxīque'],
								second: ['abdīxistīque'],
								third: ['abdīxitque'],
							},
							plural: {
								first: ['abdīximusque'],
								second: ['abdīxistisque'],
								third: ['abdīxēruntque', 'abdīxēreque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxeramque'],
								second: ['abdīxerāsque'],
								third: ['abdīxeratque'],
							},
							plural: {
								first: ['abdīxerāmusque'],
								second: ['abdīxerātisque'],
								third: ['abdīxerantque'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdīxerōque'],
								second: ['abdīxerisque'],
								third: ['abdīxeritque'],
							},
							plural: {
								first: ['abdīxerimusque'],
								second: ['abdīxeritisque'],
								third: ['abdīxerintque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcorque'],
								second: ['abdīcerisque', 'abdīcereque'],
								third: ['abdīciturque'],
							},
							plural: {
								first: ['abdīcimurque'],
								second: ['abdīciminīque'],
								third: ['abdīcunturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbarque'],
								second: ['abdīcēbārisque', 'abdīcēbāreque'],
								third: ['abdīcēbāturque'],
							},
							plural: {
								first: ['abdīcēbāmurque'],
								second: ['abdīcēbāminīque'],
								third: ['abdīcēbanturque'],
							},
						},
						future: {
							singular: {
								first: ['abdīcarque'],
								second: ['abdīcērisque', 'abdīcēreque'],
								third: ['abdīcēturque'],
							},
							plural: {
								first: ['abdīcēmurque'],
								second: ['abdīcēminīque'],
								third: ['abdīcenturque'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdīcamque'],
								second: ['abdīcāsque'],
								third: ['abdīcatque'],
							},
							plural: {
								first: ['abdīcāmusque'],
								second: ['abdīcātisque'],
								third: ['abdīcantque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīceremque'],
								second: ['abdīcerēsque'],
								third: ['abdīceretque'],
							},
							plural: {
								first: ['abdīcerēmusque'],
								second: ['abdīcerētisque'],
								third: ['abdīcerentque'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxerimque'],
								second: ['abdīxerīsque'],
								third: ['abdīxeritque'],
							},
							plural: {
								first: ['abdīxerīmusque'],
								second: ['abdīxerītisque'],
								third: ['abdīxerintque'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxissemque'],
								second: ['abdīxissēsque'],
								third: ['abdīxissetque'],
							},
							plural: {
								first: ['abdīxissēmusque'],
								second: ['abdīxissētisque'],
								third: ['abdīxissentque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcarque'],
								second: ['abdīcārisque', 'abdīcāreque'],
								third: ['abdīcāturque'],
							},
							plural: {
								first: ['abdīcāmurque'],
								second: ['abdīcāminīque'],
								third: ['abdīcanturque'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcererque'],
								second: ['abdīcerērisque', 'abdīcerēreque'],
								third: ['abdīcerēturque'],
							},
							plural: {
								first: ['abdīcerēmurque'],
								second: ['abdīcerēminīque'],
								third: ['abdīcerenturque'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdīcque'],
							},
							plural: {
								second: ['abdīciteque'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitōque'],
								third: ['abdīcitōque'],
							},
							plural: {
								second: ['abdīcitōteque'],
								third: ['abdīcuntōque'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdīcereque'],
							},
							plural: {
								second: ['abdīciminīque'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitorque'],
								third: ['abdīcitorque'],
							},
							plural: {
								third: ['abdīcuntorque'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdīcereque'],
						perfect: ['abdīxisseque'],
					},
					passive: {
						present: ['abdīcīque'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdīcēnsque'],
									vocative: ['abdīcēnsque'],
									accusative: ['abdīcentemque'],
									genitive: ['abdīcentisque'],
									dative: ['abdīcentīque'],
									ablative: ['abdīcentīque', 'abdīcenteque'],
								},
								plural: {
									nominative: ['abdīcentēsque'],
									vocative: ['abdīcentēsque'],
									accusative: ['abdīcentēsque', 'abdīcentīsque'],
									genitive: ['abdīcentiumque'],
									dative: ['abdīcentibusque'],
									ablative: ['abdīcentibusque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcēnsque'],
									vocative: ['abdīcēnsque'],
									accusative: ['abdīcentemque'],
									genitive: ['abdīcentisque'],
									dative: ['abdīcentīque'],
									ablative: ['abdīcentīque', 'abdīcenteque'],
								},
								plural: {
									nominative: ['abdīcentēsque'],
									vocative: ['abdīcentēsque'],
									accusative: ['abdīcentēsque', 'abdīcentīsque'],
									genitive: ['abdīcentiumque'],
									dative: ['abdīcentibusque'],
									ablative: ['abdīcentibusque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcēnsque'],
									vocative: ['abdīcēnsque'],
									accusative: ['abdīcēnsque'],
									genitive: ['abdīcentisque'],
									dative: ['abdīcentīque'],
									ablative: ['abdīcentīque', 'abdīcenteque'],
								},
								plural: {
									nominative: ['abdīcentiaque'],
									vocative: ['abdīcentiaque'],
									accusative: ['abdīcentiaque'],
									genitive: ['abdīcentiumque'],
									dative: ['abdīcentibusque'],
									ablative: ['abdīcentibusque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdictūrusque'],
									vocative: ['abdictūreque'],
									accusative: ['abdictūrumque'],
									genitive: ['abdictūrīque'],
									dative: ['abdictūrōque'],
									ablative: ['abdictūrōque'],
								},
								plural: {
									nominative: ['abdictūrīque'],
									vocative: ['abdictūrīque'],
									accusative: ['abdictūrōsque'],
									genitive: ['abdictūrōrumque'],
									dative: ['abdictūrīsque'],
									ablative: ['abdictūrīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictūraque'],
									vocative: ['abdictūraque'],
									accusative: ['abdictūramque'],
									genitive: ['abdictūraeque'],
									dative: ['abdictūraeque'],
									ablative: ['abdictūrāque'],
								},
								plural: {
									nominative: ['abdictūraeque'],
									vocative: ['abdictūraeque'],
									accusative: ['abdictūrāsque'],
									genitive: ['abdictūrārumque'],
									dative: ['abdictūrīsque'],
									ablative: ['abdictūrīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictūrumque'],
									vocative: ['abdictūrumque'],
									accusative: ['abdictūrumque'],
									genitive: ['abdictūrīque'],
									dative: ['abdictūrōque'],
									ablative: ['abdictūrōque'],
								},
								plural: {
									nominative: ['abdictūraque'],
									vocative: ['abdictūraque'],
									accusative: ['abdictūraque'],
									genitive: ['abdictūrōrumque'],
									dative: ['abdictūrīsque'],
									ablative: ['abdictūrīsque'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdictusque'],
									vocative: ['abdicteque'],
									accusative: ['abdictumque'],
									genitive: ['abdictīque'],
									dative: ['abdictōque'],
									ablative: ['abdictōque'],
								},
								plural: {
									nominative: ['abdictīque'],
									vocative: ['abdictīque'],
									accusative: ['abdictōsque'],
									genitive: ['abdictōrumque'],
									dative: ['abdictīsque'],
									ablative: ['abdictīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictaque'],
									vocative: ['abdictaque'],
									accusative: ['abdictamque'],
									genitive: ['abdictaeque'],
									dative: ['abdictaeque'],
									ablative: ['abdictāque'],
								},
								plural: {
									nominative: ['abdictaeque'],
									vocative: ['abdictaeque'],
									accusative: ['abdictāsque'],
									genitive: ['abdictārumque'],
									dative: ['abdictīsque'],
									ablative: ['abdictīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictumque'],
									vocative: ['abdictumque'],
									accusative: ['abdictumque'],
									genitive: ['abdictīque'],
									dative: ['abdictōque'],
									ablative: ['abdictōque'],
								},
								plural: {
									nominative: ['abdictaque'],
									vocative: ['abdictaque'],
									accusative: ['abdictaque'],
									genitive: ['abdictōrumque'],
									dative: ['abdictīsque'],
									ablative: ['abdictīsque'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdīcendusque'],
									vocative: ['abdīcendeque'],
									accusative: ['abdīcendumque'],
									genitive: ['abdīcendīque'],
									dative: ['abdīcendōque'],
									ablative: ['abdīcendōque'],
								},
								plural: {
									nominative: ['abdīcendīque'],
									vocative: ['abdīcendīque'],
									accusative: ['abdīcendōsque'],
									genitive: ['abdīcendōrumque'],
									dative: ['abdīcendīsque'],
									ablative: ['abdīcendīsque'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcendaque'],
									vocative: ['abdīcendaque'],
									accusative: ['abdīcendamque'],
									genitive: ['abdīcendaeque'],
									dative: ['abdīcendaeque'],
									ablative: ['abdīcendāque'],
								},
								plural: {
									nominative: ['abdīcendaeque'],
									vocative: ['abdīcendaeque'],
									accusative: ['abdīcendāsque'],
									genitive: ['abdīcendārumque'],
									dative: ['abdīcendīsque'],
									ablative: ['abdīcendīsque'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcendumque'],
									vocative: ['abdīcendumque'],
									accusative: ['abdīcendumque'],
									genitive: ['abdīcendīque'],
									dative: ['abdīcendōque'],
									ablative: ['abdīcendōque'],
								},
								plural: {
									nominative: ['abdīcendaque'],
									vocative: ['abdīcendaque'],
									accusative: ['abdīcendaque'],
									genitive: ['abdīcendōrumque'],
									dative: ['abdīcendīsque'],
									ablative: ['abdīcendīsque'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdīcendumque'],
					genitive: ['abdīcendīque'],
					dative: ['abdīcendōque'],
					ablative: ['abdīcendōque'],
				},
				supine: {
					accusative: ['abdictumque'],
					ablative: ['abdictūque'],
				},
			},
			ve: {
				indicative: {
					active: {
						present: {
							singular: {
								first: ['abdīcōve'],
								second: ['abdīcisve'],
								third: ['abdīcitve'],
							},
							plural: {
								first: ['abdīcimusve'],
								second: ['abdīcitisve'],
								third: ['abdīcuntve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbamve'],
								second: ['abdīcēbāsve'],
								third: ['abdīcēbatve'],
							},
							plural: {
								first: ['abdīcēbāmusve'],
								second: ['abdīcēbātisve'],
								third: ['abdīcēbantve'],
							},
						},
						future: {
							singular: {
								first: ['abdīcamve'],
								second: ['abdīcēsve'],
								third: ['abdīcetve'],
							},
							plural: {
								first: ['abdīcēmusve'],
								second: ['abdīcētisve'],
								third: ['abdīcentve'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxīve'],
								second: ['abdīxistīve'],
								third: ['abdīxitve'],
							},
							plural: {
								first: ['abdīximusve'],
								second: ['abdīxistisve'],
								third: ['abdīxēruntve', 'abdīxēreve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxeramve'],
								second: ['abdīxerāsve'],
								third: ['abdīxeratve'],
							},
							plural: {
								first: ['abdīxerāmusve'],
								second: ['abdīxerātisve'],
								third: ['abdīxerantve'],
							},
						},
						futureperfect: {
							singular: {
								first: ['abdīxerōve'],
								second: ['abdīxerisve'],
								third: ['abdīxeritve'],
							},
							plural: {
								first: ['abdīxerimusve'],
								second: ['abdīxeritisve'],
								third: ['abdīxerintve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcorve'],
								second: ['abdīcerisve', 'abdīcereve'],
								third: ['abdīciturve'],
							},
							plural: {
								first: ['abdīcimurve'],
								second: ['abdīciminīve'],
								third: ['abdīcunturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcēbarve'],
								second: ['abdīcēbārisve', 'abdīcēbāreve'],
								third: ['abdīcēbāturve'],
							},
							plural: {
								first: ['abdīcēbāmurve'],
								second: ['abdīcēbāminīve'],
								third: ['abdīcēbanturve'],
							},
						},
						future: {
							singular: {
								first: ['abdīcarve'],
								second: ['abdīcērisve', 'abdīcēreve'],
								third: ['abdīcēturve'],
							},
							plural: {
								first: ['abdīcēmurve'],
								second: ['abdīcēminīve'],
								third: ['abdīcenturve'],
							},
						},
					},
				},
				subjunctive: {
					active: {
						present: {
							singular: {
								first: ['abdīcamve'],
								second: ['abdīcāsve'],
								third: ['abdīcatve'],
							},
							plural: {
								first: ['abdīcāmusve'],
								second: ['abdīcātisve'],
								third: ['abdīcantve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīceremve'],
								second: ['abdīcerēsve'],
								third: ['abdīceretve'],
							},
							plural: {
								first: ['abdīcerēmusve'],
								second: ['abdīcerētisve'],
								third: ['abdīcerentve'],
							},
						},
						perfect: {
							singular: {
								first: ['abdīxerimve'],
								second: ['abdīxerīsve'],
								third: ['abdīxeritve'],
							},
							plural: {
								first: ['abdīxerīmusve'],
								second: ['abdīxerītisve'],
								third: ['abdīxerintve'],
							},
						},
						pluperfect: {
							singular: {
								first: ['abdīxissemve'],
								second: ['abdīxissēsve'],
								third: ['abdīxissetve'],
							},
							plural: {
								first: ['abdīxissēmusve'],
								second: ['abdīxissētisve'],
								third: ['abdīxissentve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								first: ['abdīcarve'],
								second: ['abdīcārisve', 'abdīcāreve'],
								third: ['abdīcāturve'],
							},
							plural: {
								first: ['abdīcāmurve'],
								second: ['abdīcāminīve'],
								third: ['abdīcanturve'],
							},
						},
						imperfect: {
							singular: {
								first: ['abdīcererve'],
								second: ['abdīcerērisve', 'abdīcerēreve'],
								third: ['abdīcerēturve'],
							},
							plural: {
								first: ['abdīcerēmurve'],
								second: ['abdīcerēminīve'],
								third: ['abdīcerenturve'],
							},
						},
					},
				},
				imperative: {
					active: {
						present: {
							singular: {
								second: ['abdīcve'],
							},
							plural: {
								second: ['abdīciteve'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitōve'],
								third: ['abdīcitōve'],
							},
							plural: {
								second: ['abdīcitōteve'],
								third: ['abdīcuntōve'],
							},
						},
					},
					passive: {
						present: {
							singular: {
								second: ['abdīcereve'],
							},
							plural: {
								second: ['abdīciminīve'],
							},
						},
						future: {
							singular: {
								second: ['abdīcitorve'],
								third: ['abdīcitorve'],
							},
							plural: {
								third: ['abdīcuntorve'],
							},
						},
					},
				},
				infinitive: {
					active: {
						present: ['abdīcereve'],
						perfect: ['abdīxisseve'],
					},
					passive: {
						present: ['abdīcīve'],
					},
				},
				participle: {
					active: {
						present: {
							masculine: {
								singular: {
									nominative: ['abdīcēnsve'],
									vocative: ['abdīcēnsve'],
									accusative: ['abdīcentemve'],
									genitive: ['abdīcentisve'],
									dative: ['abdīcentīve'],
									ablative: ['abdīcentīve', 'abdīcenteve'],
								},
								plural: {
									nominative: ['abdīcentēsve'],
									vocative: ['abdīcentēsve'],
									accusative: ['abdīcentēsve', 'abdīcentīsve'],
									genitive: ['abdīcentiumve'],
									dative: ['abdīcentibusve'],
									ablative: ['abdīcentibusve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcēnsve'],
									vocative: ['abdīcēnsve'],
									accusative: ['abdīcentemve'],
									genitive: ['abdīcentisve'],
									dative: ['abdīcentīve'],
									ablative: ['abdīcentīve', 'abdīcenteve'],
								},
								plural: {
									nominative: ['abdīcentēsve'],
									vocative: ['abdīcentēsve'],
									accusative: ['abdīcentēsve', 'abdīcentīsve'],
									genitive: ['abdīcentiumve'],
									dative: ['abdīcentibusve'],
									ablative: ['abdīcentibusve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcēnsve'],
									vocative: ['abdīcēnsve'],
									accusative: ['abdīcēnsve'],
									genitive: ['abdīcentisve'],
									dative: ['abdīcentīve'],
									ablative: ['abdīcentīve', 'abdīcenteve'],
								},
								plural: {
									nominative: ['abdīcentiave'],
									vocative: ['abdīcentiave'],
									accusative: ['abdīcentiave'],
									genitive: ['abdīcentiumve'],
									dative: ['abdīcentibusve'],
									ablative: ['abdīcentibusve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdictūrusve'],
									vocative: ['abdictūreve'],
									accusative: ['abdictūrumve'],
									genitive: ['abdictūrīve'],
									dative: ['abdictūrōve'],
									ablative: ['abdictūrōve'],
								},
								plural: {
									nominative: ['abdictūrīve'],
									vocative: ['abdictūrīve'],
									accusative: ['abdictūrōsve'],
									genitive: ['abdictūrōrumve'],
									dative: ['abdictūrīsve'],
									ablative: ['abdictūrīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictūrave'],
									vocative: ['abdictūrave'],
									accusative: ['abdictūramve'],
									genitive: ['abdictūraeve'],
									dative: ['abdictūraeve'],
									ablative: ['abdictūrāve'],
								},
								plural: {
									nominative: ['abdictūraeve'],
									vocative: ['abdictūraeve'],
									accusative: ['abdictūrāsve'],
									genitive: ['abdictūrārumve'],
									dative: ['abdictūrīsve'],
									ablative: ['abdictūrīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictūrumve'],
									vocative: ['abdictūrumve'],
									accusative: ['abdictūrumve'],
									genitive: ['abdictūrīve'],
									dative: ['abdictūrōve'],
									ablative: ['abdictūrōve'],
								},
								plural: {
									nominative: ['abdictūrave'],
									vocative: ['abdictūrave'],
									accusative: ['abdictūrave'],
									genitive: ['abdictūrōrumve'],
									dative: ['abdictūrīsve'],
									ablative: ['abdictūrīsve'],
								},
							},
						},
					},
					passive: {
						perfect: {
							masculine: {
								singular: {
									nominative: ['abdictusve'],
									vocative: ['abdicteve'],
									accusative: ['abdictumve'],
									genitive: ['abdictīve'],
									dative: ['abdictōve'],
									ablative: ['abdictōve'],
								},
								plural: {
									nominative: ['abdictīve'],
									vocative: ['abdictīve'],
									accusative: ['abdictōsve'],
									genitive: ['abdictōrumve'],
									dative: ['abdictīsve'],
									ablative: ['abdictīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdictave'],
									vocative: ['abdictave'],
									accusative: ['abdictamve'],
									genitive: ['abdictaeve'],
									dative: ['abdictaeve'],
									ablative: ['abdictāve'],
								},
								plural: {
									nominative: ['abdictaeve'],
									vocative: ['abdictaeve'],
									accusative: ['abdictāsve'],
									genitive: ['abdictārumve'],
									dative: ['abdictīsve'],
									ablative: ['abdictīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdictumve'],
									vocative: ['abdictumve'],
									accusative: ['abdictumve'],
									genitive: ['abdictīve'],
									dative: ['abdictōve'],
									ablative: ['abdictōve'],
								},
								plural: {
									nominative: ['abdictave'],
									vocative: ['abdictave'],
									accusative: ['abdictave'],
									genitive: ['abdictōrumve'],
									dative: ['abdictīsve'],
									ablative: ['abdictīsve'],
								},
							},
						},
						future: {
							masculine: {
								singular: {
									nominative: ['abdīcendusve'],
									vocative: ['abdīcendeve'],
									accusative: ['abdīcendumve'],
									genitive: ['abdīcendīve'],
									dative: ['abdīcendōve'],
									ablative: ['abdīcendōve'],
								},
								plural: {
									nominative: ['abdīcendīve'],
									vocative: ['abdīcendīve'],
									accusative: ['abdīcendōsve'],
									genitive: ['abdīcendōrumve'],
									dative: ['abdīcendīsve'],
									ablative: ['abdīcendīsve'],
								},
							},
							feminine: {
								singular: {
									nominative: ['abdīcendave'],
									vocative: ['abdīcendave'],
									accusative: ['abdīcendamve'],
									genitive: ['abdīcendaeve'],
									dative: ['abdīcendaeve'],
									ablative: ['abdīcendāve'],
								},
								plural: {
									nominative: ['abdīcendaeve'],
									vocative: ['abdīcendaeve'],
									accusative: ['abdīcendāsve'],
									genitive: ['abdīcendārumve'],
									dative: ['abdīcendīsve'],
									ablative: ['abdīcendīsve'],
								},
							},
							neuter: {
								singular: {
									nominative: ['abdīcendumve'],
									vocative: ['abdīcendumve'],
									accusative: ['abdīcendumve'],
									genitive: ['abdīcendīve'],
									dative: ['abdīcendōve'],
									ablative: ['abdīcendōve'],
								},
								plural: {
									nominative: ['abdīcendave'],
									vocative: ['abdīcendave'],
									accusative: ['abdīcendave'],
									genitive: ['abdīcendōrumve'],
									dative: ['abdīcendīsve'],
									ablative: ['abdīcendīsve'],
								},
							},
						},
					},
				},
				gerund: {
					accusative: ['abdīcendumve'],
					genitive: ['abdīcendīve'],
					dative: ['abdīcendōve'],
					ablative: ['abdīcendōve'],
				},
				supine: {
					accusative: ['abdictumve'],
					ablative: ['abdictūve'],
				},
			},
		},
	},
];

function prettyPrintJson(jsonArray) {
	return JSON.stringify(jsonArray, null, '\t')
		.replace(/(?<=": \[)\n\s*/g, '') // Delete newline at start of array
		.replace(/(?<="|\d)\n\s*(?=\])/g, '') // Delete newline at end of array
		.replace(/\n\s+(?=[^:{}]+\n)/g, ' '); // Delete newlines between array items
}

const sampleData = prettyPrintJson(sampleDataJson);

//// Functions used in `generateJson`:

const clearTextMessages = () => {
	textByCollateButton.textContent = '';
	textByCopyToClipboard.textContent = '';
};

const clearInputs = () => {
	textareaInput.value = '';
	textareaOutput.value = '';
	clearTextMessages();
};

const warnOfEmptyInput = () => {
	clearTextMessages();
	textByCollateButton.textContent = 'Nothing to collate!';
};

const warnOfEmptyOutput = () => {
	clearTextMessages();
	textByCopyToClipboard.textContent = 'Nothing to copy or download!';
};

//// Functions called by buttons:

let output = '';

const collateLemmata = () => {
	clearTextMessages();
	textareaOutput.value = '';
	textByCollateButton.textContent = 'Collating lemmata, please wait...';
	const allInputRows = JSON.parse(textareaInput.value);

	const outputAsObject = getFormsForSeveralLemmata(allInputRows);
	console.debug({ outputAsObject });
	output = convertToText(outputAsObject);

	displayOutput();
	textByCollateButton.textContent = 'Lemmata collated!';
};

const displayOutput = () => {
	textareaOutput.value = output;
};

const copyToClipboard = () => {
	clearTextMessages();
	textByCopyToClipboard.textContent = 'Copying to clipboard...';
	textareaOutput.select();
	document.execCommand('copy');
	textByCopyToClipboard.textContent = 'Copied!';
};

const download = () => {
	let a = document.createElement('a');
	a.setAttribute(
		'href',
		'data:text/plain;charset=utf-8,' +
			encodeURIComponent(textareaOutput.value.replace(/\n/g, '\r\n')),
	);
	a.setAttribute('download', 'output-from-collator.txt');
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	clearTextMessages();
};

//// Event listeners.

buttonClearInputs.addEventListener('click', () => {
	clearInputs();
});

buttonLoadSampleData.addEventListener('click', () => {
	textareaInput.value = sampleData;
	clearTextMessages();
});

buttonCollate.addEventListener('click', () => {
	if (textareaInput.value === '') {
		warnOfEmptyInput();
	} else {
		collateLemmata();
	}
});

buttonCopyToClipboard.addEventListener('click', () => {
	if (textareaOutput.value === '') {
		warnOfEmptyOutput();
	} else {
		copyToClipboard();
	}
});

buttonDownload.addEventListener('click', () => {
	if (textareaOutput.value === '') {
		warnOfEmptyOutput();
	} else {
		download();
	}
});
